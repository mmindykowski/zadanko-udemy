const img = document.querySelector('img');

img.setAttribute('src', 'img/fotka.jpg');

img.setAttribute('alt', 'Losowy obrazek z internetu');

const test = () => {
    console.log('oczko');
}

setTimeout(test, 2000);