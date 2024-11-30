// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const nameTable = document.getElementById("nameTable");

    let nameList = []; // Array to hold names

    // Function to render the table
    function renderTable() {
        nameTable.innerHTML = ""; // Clear the table
        nameList.forEach((name, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index}</td>
                <td>${name}</td>
                <td>
                    <button class="btn btn-sm btn-update me-2" onclick="editName(${index})">Update</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteName(${index})">Delete</button>
                </td>
            `;
            nameTable.appendChild(row);
        });
    }

    // Add button functionality
    addButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            nameList.push(name); // Add name to the list
            nameInput.value = ""; // Clear the input
            renderTable(); // Re-render the table
        } else {
            alert("Please enter a name!");
        }
    });

    // Function to update a name
    window.editName = (index) => {
        const newName = prompt("Enter the updated name:", nameList[index]);
        if (newName) {
            nameList[index] = newName.trim(); // Update the name
            renderTable(); // Re-render the table
        }
    };


    window.deleteName = (index) => {
        if (confirm("Are you sure you want to delete this name?")) {
            nameList.splice(index, 1); // Remove the name from the list
            renderTable(); // Re-render the table
        }
    };

    renderTable(); // Initial render
});
