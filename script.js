let table = document.getElementById("sampleTable");
let insertCount = 1;

function insert_Row() {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>New Cell${insertCount}</td>
        <td>New Cell${insertCount + 1}</td>
    `;
    table.insertBefore(tr, table.firstChild);
    insertCount += 2;
}
