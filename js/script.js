// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  let guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
  }
  clearInput();
  updateGuestCount();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    addGuestButton.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "chilli beans",
    "curry",
    "falafel",
    "fish and veg",
    "pasta and sauce",
    "steak and salad",
    "heuvos rancheros",
    "shakshuka",
    "rissoto",
    "Jacket potato",
    "Eggs and polenta",
    "Pizza"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems.splice(randomPotluckIndex, 1);
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
    assignedItems.append(listItem);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
