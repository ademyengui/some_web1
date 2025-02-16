const btnEl = document.getElementById('btn');

const listEl = document.getElementById('list');

btnEl.addEventListener('click',function(){
    const newItem = document.createElement('li');
    const nameEl = document.getElementById('name-input');
    const contentEl = document.getElementById('content-input');
    newItem.innerHTML = `<h3>${nameEl.value}</h3><p>${contentEl.value}</p>`;
    listEl.appendChild(newItem);

})