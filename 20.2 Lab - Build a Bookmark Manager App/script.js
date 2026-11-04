// You should have a getBookmarks function that returns the bookmarks array stored in the local storage. If the bookmarks key has not been set yet, or it doesn't contain a valid array with bookmarks, the getBookmarks function should return an empty array.
function getBookmarks() {
  try {
    const parsedBookmark = JSON.parse(localStorage.getItem("bookmarks"));

    if (Array.isArray(parsedBookmark) && parsedBookmark.every(book => book.name && book.category && book.url)) {
      return parsedBookmark;
    }
  } catch {

  }
  return [];
}

// You should have a function named displayOrCloseForm that toggles the hidden class on #main-section and #form-section.
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

// When you click #add-bookmark-button, you should update the inner text of .category-name to be the value of the selected option from #category-dropdown and call displayOrCloseForm to display the form section and hide the main section.
const addButton = document.getElementById("add-bookmark-button");
const nameCategory = document.querySelector(".category-name");
const dropdown = document.querySelector("#category-dropdown");

addButton.addEventListener("click", () => {
  nameCategory.innerText = dropdown.value;
  displayOrCloseForm();
});

// When you click #close-form-button, you should run your function to hide the form section and display the main section.
const closeButton = document.getElementById("close-form-button");

closeButton.addEventListener("click", () => {
  displayOrCloseForm();
});

// When you click #add-bookmark-button-form, you should update the bookmarks key stored in the local storage by adding a bookmark object to the end of the array.
const addButtonFinal = document.getElementById("add-bookmark-button-form");
const nameStore = document.getElementById("name");
const urlStore = document.getElementById("url");

addButtonFinal.addEventListener("click", () => {
  const currentArr = getBookmarks();
  const customObj = {
    name: nameStore.value,
    category: dropdown.value,
    url: urlStore.value
  };
  currentArr.push(customObj);
  localStorage.setItem("bookmarks", JSON.stringify(currentArr));

  nameStore.value = "";
  urlStore.value = "";
  displayOrCloseForm();
});

// You should have a function named displayOrHideCategory that toggles the hidden class on #main-section and #bookmark-list-section.
const bookList = document.getElementById("bookmark-list-section");

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookList.classList.toggle("hidden");
}

// When you click #view-category-button, you should update the inner text of .category-name, modify the inner HTML of #category-list, and call displayOrHideCategory.
const viewCatButton = document.getElementById("view-category-button");
const catList = document.getElementById("category-list");
const listAndCat = document.querySelector("#bookmark-list-section .category-name");


function displayCategoryList() {
  const bookmarkStore = getBookmarks();
  const filteredArr = bookmarkStore.filter((book) => book.category === dropdown.value);

  catList.innerHTML = "";

  if (filteredArr.length === 0) {
    catList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    filteredArr.forEach((bookmark) => {
      catList.innerHTML += `
        <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">
        <label for="${bookmark.name}">
          <a href="${bookmark.url}">${bookmark.name}</a>
        </label>
      `;
    });
  }
}

viewCatButton.addEventListener("click", () => {
  listAndCat.innerText = dropdown.value;
  displayCategoryList();
  displayOrHideCategory();
});

// When you click the #close-list-button, you should run your function to hide the #bookmark-list-section and display the main section.
const closeList = document.getElementById("close-list-button");

closeList.addEventListener("click", () => {
  displayOrHideCategory();
});

// When you click the #delete-bookmark-button, you should delete the bookmark corresponding to the selected radio button and appropriate category from the local storage and update the displayed bookmark list.
const deleteButton = document.getElementById("delete-bookmark-button");

deleteButton.addEventListener("click", () => {
  const selectedRadioBttn = document.querySelector('input[name="bookmark"]:checked');

  if (!selectedRadioBttn) { return; }

  const booksMain = getBookmarks();
  const updatedBookmarks = booksMain.filter((book) => !(book.name === selectedRadioBttn.value && book.category === dropdown.value));

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  displayCategoryList();
});