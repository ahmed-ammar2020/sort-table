"use strict";
let table = document.querySelector(".table");
table.addEventListener("click", function (event) {
  let type = event.target.dataset.type; // string / number / undefined
  // based on the type, you sort the rows
  let rows = this.querySelector("tbody").rows; // dom collection
  rows = Array.from(rows); // now it is an array
  // sorting that array based on the type
  if (type == "string") {
    rows.sort((row1, row2) => {
      return row1.lastElementChild.textContent.localeCompare(
        row2.lastElementChild.textContent
      );
    });
    // overwrite the whole table
    this.querySelector("tbody").append(...rows);
  }
  if (type == "number") {
    rows.sort((row1, row2) => {
      return (
        +row1.firstElementChild.textContent -
        +row2.firstElementChild.textContent
      );
    });

    this.querySelector("tbody").append(...rows);
  }
});
