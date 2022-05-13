// // CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ];

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// fetchEmployees();

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});

// BUILD THE EMPLOYEES GRID
let tbody = document.createElement('tbody');

async function buildGrid() {
    try {
    const response = await fetch('../data/employees.json');
    const employees = await response.json();
    for (let employee of employees) {
        // empTable.lastElementChild.remove();
        
        tbody.innerHTML +=
        `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.dept}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
        
    }
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    // empCount.value = `(${arrEmployees.length})`;
} catch (error) {
    console.error(error)
}
}

buildGrid();
// function buildGrid(arrEmployees) {
//     // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
//     empTable.lastElementChild.remove();
//     // REBUILD THE TBODY FROM SCRATCH
//     let tbody = document.createElement('tbody');
//     // LOOP THROUGH THE ARRAY OF EMPLOYEES
//     // REBUILDING THE ROW STRUCTURE
//     for (let employee of arrEmployees) {
//         tbody.innerHTML += 
//         `
//         <tr>
//             <td>${employee[0]}</td>
//             <td>${employee[1]}</td>
//             <td>${employee[2]}</td>
//             <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
//             <td>${employee[4]}</td>
//             <td><button class="btn btn-sm btn-danger delete">X</button></td>
//         </tr>
//         `
//     }
//     // BIND THE TBODY TO THE EMPLOYEE TABLE
//     empTable.appendChild(tbody);
//     // UPDATE EMPLOYEE COUNT
//     empCount.value = `(${arrEmployees.length})`;
// };

