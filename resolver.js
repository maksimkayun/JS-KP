let i = 0;

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
    $author.firstElementChild.style = 'bold';
    return $author;
}

function getContent(content) {
    const $content = document.createElement('p');
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

    $div.style = '' // TODO 
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
}
