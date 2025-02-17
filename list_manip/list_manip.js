// Function to generate a random color
function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to add click event to all <li> elements
function addClickEventToLi() {
    document.querySelectorAll('#list li').forEach(li => {
        li.addEventListener('click', function () {
            this.style.color = randomColor();
        });
    });
}

// Call the function to add click events when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addClickEventToLi);

// Optional: Add functionality for the "Add Item" and "Remove Item" buttons
document.getElementById('add').addEventListener('click', function () {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
    addClickEventToLi(); // Add click event to the new <li>
});

document.getElementById('remove').addEventListener('click', function () {
    const list = document.getElementById('list');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
});