function addItemOnClick() {
    // TODO!
    let title = document.getElementById('title_article').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;
    let content = document.getElementById('content').value;

    addItem(author, title, category, content);
}

function addItem(author, title, category, content) {
    const $elemarticle = document.getElementsByClassName('articleclass')[0]
    const $div = document.createElement('div');
    $div.className = 'record'
    $div.innerHTML = `
    <h1>${title}</h1>
    <p>Автор:<span>${author}</span></p>
    <p>Категоия:<span>${category}</span></p>
    <p class="description">
    ${content}
    </p>
    <button id="delete">Удалить</button>
    <button id="archive">Архив</button>`;

    $elemarticle.append($div);
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

    const $elem = document.getElementsByClassName('archive_form_class')[0]
    const $li = document.createElement('li');
    $li.className = 'customli'

    $li.innerText = parent.children[0].innerText
    $elem.appendChild($li);

    let list = document.getElementsByClassName('articleclass')[0];
    list.removeChild(e.currentTarget.parentNode);
}

function clickButtonDelete(e) {
    let list = document.getElementsByClassName('articleclass')[0];
    list.removeChild(e.currentTarget.parentNode);
}