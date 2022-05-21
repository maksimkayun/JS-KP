let i = 0;
let j = 0;

function addItemOnClick() {
    // TODO!
    let title = document.getElementById('titleOfArticle').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;
    let content = document.getElementById('content').value;

    addItem(author, title, category, content);
}

function getTitle(text) {
    const $title = document.createElement('h1');
    $title.textContent = text;
    return $title;
}

function getAuthorOrCategory(nameOf, type) {
    const $author = document.createElement('p');
    if (type === 'category') {
        $author.textContent = `Категоия:`;
        $author.append(document.createElement('span'));       
    } 
    else {        
        $author.textContent = `Автор:`;
        $author.append(document.createElement('span'));        
    }    
    $author.firstElementChild.textContent = nameOf;
    return $author;
}

function getContent(content) {
    const $content = document.createElement('p');
    $content.className = 'description';
    $content.textContent = content;
    return $content;
}

function getButton(type) {
    const $btn = document.createElement('button');
    $btn.textContent = type;
    if (type === 'Удалить') {
        $btn.id = 'delete';
    } 
    else {
        $btn.id = 'archive';
    }
    return $btn;
}

function addItem(author, title, category, content) {
    const $elem = document.getElementsByClassName('articleclass')[0]
    const $div = document.createElement('div');
    $div.id = `div${i++}`;
    $div.className = 'customstate'

    const $title = getTitle(title);
    const $author = getAuthorOrCategory(author, 'author');
    const $category = getAuthorOrCategory(category, 'category');
    const $content = getContent(content);
    const $buttonDelete = getButton('Удалить');
    const $buttonArch = getButton('Архив');

    $div.append($title);
    $div.append($author);
    $div.append($category);
    $div.append($content);
    $div.append($buttonDelete);
    $div.append($buttonArch);

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

    const $elem = document.getElementsByClassName('archiveclass')[0]
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