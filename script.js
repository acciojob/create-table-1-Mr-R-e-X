let table = document.getElementById("sampleTable");
let insertCount = 1;

function insert_Row() {
      let table = document.getElementById('sampleTable');
    let newRow = table.insertRow(0); // This inserts a new row at the first position of the table

    let cell1 = newRow.insertCell(0); // This inserts a new cell at the first position of the row
    let cell2 = newRow.insertCell(1); // This inserts a new cell at the second position of the row

    cell1.innerHTML = 'New Cell1'; // This sets the content of the first cell
    cell2.innerHTML = 'New Cell2'; // This sets the content of the second cell
}
