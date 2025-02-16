const btnEl = document.getElementById('btn');
const listEl = document.getElementById('list');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;
}


function addClickEventToLi() {
    document.querySelectorAll('#list li').forEach(li => {
        li.addEventListener('click', function () {
            this.style.color = getRandomColor();
        });
    });
}


btnEl.addEventListener('click', function () {
    const newItem = document.createElement('li');
    const nameEl = document.getElementById('name-input');
    const contentEl = document.getElementById('content-input');
    newItem.innerHTML = `<h3>${nameEl.value}</h3><p>${contentEl.value}</p>`;
    listEl.appendChild(newItem);

    
    nameEl.value = '';
    contentEl.value = '';

    
    addClickEventToLi();
});


addClickEventToLi();