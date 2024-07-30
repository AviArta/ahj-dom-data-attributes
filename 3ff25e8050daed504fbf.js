/* eslint-disable no-unused-vars */
import { data } from "./data.js";
import sortTable, { sortedNumbers, sortedStrings } from "./table.js";
const table = new sortTable(document.querySelector(".board-container"));
document.addEventListener("DOMContentLoaded", () => {
  const newTable = table.createTable(data);
  //sortedNumbers("id");
  //sortedNumbers("year");
  //sortedNumbers("imdb");
  sortedStrings("title");

  /*for (let funcIndex = 0; funcIndex < listFunction.length; funcIndex += 1) {
    setInterval(() => {
      listFunction[funcIndex];
      console.log(funcIndex)}, 2000);
    }*/

  /*setTimeout(() => {
    const listFunction = [sortedNumbers('id'), 
      sortedNumbers('year'), 
      sortedNumbers('imdb'), 
      sortedStrings('title')];
    for (let funcIndex = 0; funcIndex < listFunction.length; funcIndex += 1) {
      listFunction[funcIndex];
    }
    }, 2000)*/
});