document.querySelector('#btnInsert').addEventListener('click', addRow);
document.querySelector('#btnRemove').addEventListener('click', removeRow);

function addRow() {
    const tbody = document.getElementById("sampleTable");
    const row = document.createElement("tr")
    const td1 = document.createElement("td")

    const rowsCount = tbody.rows.length;
    let newRowNumber = rowsCount + 1;

    td1.appendChild(document.createTextNode(`Row${newRowNumber} cell1`))
    const td2 = document.createElement("td")
    td2.appendChild (document.createTextNode(`Row${newRowNumber} cell2`))
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
}
function removeRow(){
    const table = document.getElementById("sampleTable");
    const rowCount = table.rows.length;
    table.deleteRow(rowCount -1);
}
