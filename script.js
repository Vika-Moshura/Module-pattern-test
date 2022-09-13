const People = (function () {
    let arr = [];
    let newWord;
    let allNames;
    let btn;

    function init() {
        cacheDom();
        bindEvent();
    }

    function cacheDom() {
        newWord = document.querySelector('.newName');
        allNames = document.querySelector('.allNames');
        btn = document.querySelector('.btn');
    }

    function bindEvent() {
        btn.addEventListener('click', addPersonName);
    }

    function render() {
        allNames.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            allNames.insertAdjacentHTML('beforeend', `<div>${arr[i]}
            <button type='button'class="del">X</button></div>`);
        }
        Array.from(document.getElementsByClassName('del')).forEach((element, value) => {
            element.addEventListener('click', delPersonName.bind(this, value));
        });
    }

    function addPersonName() {
        if (newWord.value) {
            arr.push(newWord.value);
            newWord.value = '';
            render();
        }
    }

    function delPersonName(value) {
        event.target.parentElement.remove();
        arr.splice(value, 1);
        render();
    }
    return {
        init: init,
    }
}())
People.init();