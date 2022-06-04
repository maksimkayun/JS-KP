let i = 0;
let j = 0;

function addItemOnClick() {
    // TODO!
    let title = document.getElementById('title_article').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;
    let content = document.getElementById('content').value;

    addItem(author, title, category, content);
}

function addItem(author, title, category, content) {
    const $elem = document.getElementsByClassName('articleclass')[0]
    const $div = document.createElement('div');
    $div.innerHTML = `<div id="div${i++}" class="record">
    <h1>${title}</h1>
    <p>Автор:<span>${author}</span></p>
    <p>Категоия:<span>${category}</span></p>
    <p class="description">
    ${content}
    </p>
    <button id="delete">Удалить</button>
    <button id="archive">Архив</button>`;

    $elem.append($div);
    forArchive();
    forDelete();
}

function forArchive() {
    let buttons = document.querySelectorAll('button[id=archive]');
    buttons.forEach(e=> {
        e.addEventListener('click', clickButtonArchive);
    });
}
function forDelete() {
    let buttons = document.querySelectorAll('button[id=delete]');
    buttons.forEach(e=> {
        e.addEventListener('click', clickButtonDelete);
    });
}

function clickButtonArchive(e) {
    let target = e.currentTarget;
    let parent = target.parentNode;
    
    let id = parent.id;

    const $elem = document.getElementsByClassName('archive_form_class')[0]
    const $li = document.createElement('li');
    $li.id = `li${j++}`;
    $li.className = 'customli'

    $li.innerText = document.getElementById(id).firstElementChild.textContent;
    $elem.append($li);

    const $elementrm = document.getElementById(id);
    $elementrm.remove();
}

function clickButtonDelete(e) {
    let target = e.currentTarget;
    let parent = target.parentNode;
    
    let id = parent.id;
    
    const $elementrm = document.getElementById(id);
    $elementrm.remove();
}