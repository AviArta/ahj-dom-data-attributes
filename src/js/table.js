export default class sortTable {
  constructor(element) {
    this._element = element;
  }

  createTable(data) {
    const table = document.createElement("table");
    table.classList.add("table");
    const keys = Object.keys(data[0]);

    let tableHead = `
    <tr>
      <th>${keys[0]}</th>
      <th>${keys[1]}</th>
      <th>${keys[2]}</th>
      <th>${keys[3]}</th>
    </tr>
    `;

    table.innerHTML += tableHead;

    data.forEach((element) => {
      const row = document.createElement("tr");
      Object.keys(element).forEach((key) => {
        row.setAttribute(`data-${key}`, `${element[key]}`);
        const cell = document.createElement("td");
        cell.textContent = element[key];
        // форматирования в коде
        /*if (key === 'imdb') {
          cell.style.textAlign = 'center';
        }*/
        if (key === "imdb") {
          cell.textContent = `imdb: ${element[key].toFixed(2)}`;
        }
        if (key === "year") {
          cell.textContent = `(${element[key]})`;
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
      //table.children[0].appendChild(row);
    });

    this._element.appendChild(table);
  }

  // альтернативный метод создания таблицы
  /*let tableBody = data.reduce((acc, element) => {
      return acc + `
      <tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.imdb}</td>
        <td>${element.year}</td>
      </tr>
      `;
    }, '');

    table.innerHTML = `
    ${tableHead}
    ${tableBody}
    `;
    */
}

export function sortedNumbers(dataSet) {
  console.log("Сортировка по", dataSet);
  let rowsArray = Array.from(document.getElementsByTagName("tr"));
  let idHead = Array.from(document.getElementsByTagName("th"));
  let resArr = [];

  let listIndex = sortNumbers(dataSet);
  let table = document.querySelector("table");

  // Сортировка по 'id':
  if (dataSet === "id") {
    idHead[0].textContent += " ";
    idHead[0].setAttribute("class", "x2193"); // стрелка вниз

    listIndex.forEach((item) => {
      rowsArray.forEach((element) => {
        if (item == element.dataset.id) {
          resArr.push(element);
          table.appendChild(element);
        }
      });
    });
  }

  // Сортировка по 'year':
  if (dataSet === "year") {
    //idHead[0].classList.remove('x2193');
    listIndex.forEach((item) => {
      rowsArray.forEach((element) => {
        if (item == element.dataset.year) {
          resArr.push(element);
          table.appendChild(element);
        }
      });
    });
  }

  // Сортировка по 'imdb':
  if (dataSet === "imdb") {
    //idHead[0].classList.remove('x2193');
    listIndex.forEach((item) => {
      rowsArray.forEach((element) => {
        if (item == element.dataset.imdb) {
          resArr.push(element);
          table.appendChild(element);
        }
      });
    });
  }

  // Сортировка по 'title':
  if (dataSet === "title") {
    //idHead[0].classList.remove('x2193');
    listIndex.forEach((item) => {
      rowsArray.forEach((element) => {
        if (item == element.dataset.title) {
          resArr.push(element);
          table.appendChild(element);
        }
      });
    });
  }
}

export function sortedStrings(dataSet) {
  console.log("Сортировка по", dataSet);
  //let idHead = Array.from(document.getElementsByTagName('th'));
  //idHead[0].classList.remove('x2193');
  let rowsArray = Array.from(document.getElementsByTagName("tr"));
  let resArr = [];

  let listIndex = sortStrings(dataSet);
  let table = document.querySelector("table");

  // Сортировка по 'title':
  if (dataSet === "title") {
    listIndex.forEach((item) => {
      rowsArray.forEach((element) => {
        if (item == element.dataset.title) {
          resArr.push(element);
          table.appendChild(element);
        }
      });
    });
  }
}

// Функция сортировки числовых данных.
function sortNumbers(dataType) {
  const allTrs = Array.from(document.getElementsByTagName("tr"));
  const resArr = [];
  allTrs.forEach((element) => {
    if (element.dataset.id && dataType === "id") {
      resArr.push(Number(element.dataset.id));
    } else if (element.dataset.year && dataType === "year") {
      resArr.push(Number(element.dataset.year));
    } else if (element.dataset.imdb && dataType === "imdb") {
      resArr.push(Number(element.dataset.imdb));
    }
  });
  resArr.sort((rowA, rowB) => (rowA > rowB ? 1 : -1));
  return resArr;
}

// Функция сортировки строковых данных.
function sortStrings(dataType) {
  const allTrs = Array.from(document.getElementsByTagName("tr"));
  const resArr = [];
  allTrs.forEach((element) => {
    if (element.dataset.title && dataType === "title") {
      resArr.push(element.dataset.title);
    }
  });
  // eslint-disable-next-line no-undef
  let collator = new Intl.Collator();
  resArr.sort((rowA, rowB) => collator.compare(rowA, rowB));
  //console.log("+ sort:", resArr);
  return resArr;
}
