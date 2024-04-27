let table = document.getElementById("sampleTable");
// let insertCount = 1;

function insert_Row() {
      let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>New Cell1</td>
        <td>New Cell2</td>
    `;
    table.insertBefore(tr, table.rows[0]);
}
