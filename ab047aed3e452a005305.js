/* eslint-disable no-unused-vars */
import { data } from "./data.js";
import "../css/style.css";
import sortTable, { sortedNumbers, sortedStrings } from "./table.js";
const table = new sortTable(document.querySelector(".board-container"));
document.addEventListener("DOMContentLoaded", () => {
  const newTable = table.createTable(data);
  // Проверка работы каждой функции отдельно:
  //sortedNumbers("id");
  //sortedNumbers("year");
  //sortedNumbers("imdb");
  //sortedStrings("title");

  function callFunction(listFunctions, timesCall, timeBetween) {
    let i = 0;
    let k = 0;
    listFunctions.forEach(function (func) {
      for (k = 0; k < timesCall; k += 1) {
        i += 1;
        setTimeout(func, i * timeBetween);
      }
    });
  }
  callFunction([function () {
    sortedNumbers("id");
  }, function () {
    sortedNumbers("year");
  }, function () {
    sortedNumbers("imdb");
  }, function () {
    sortedStrings("title");
  }], 1, 2000);
});