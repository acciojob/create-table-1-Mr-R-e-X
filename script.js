
let table = document.getElementById("sampleTable");
let inserCount = 1;
function insert_Row() {
  //Write your code here
  let tr = document.createElement("tr");
  tr.innerHTML = `
                  <td>NewCell${inserCount}</td>
                  <td>NewCell${inserCount + 1}</td>
                  `;
table.insertBefore(tr, table.firstChild);
  inserCount++;
}
