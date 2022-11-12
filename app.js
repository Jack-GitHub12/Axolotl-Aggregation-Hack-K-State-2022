var shrimps = 0;

function increment() {
    shrimps++;
}


function displayCounter() {
    var shrimpCounter = document.getElementById('counter');
    shrimpCounter.innerHTML(
        `<h1>${shrimps}</h1>`
    );
}


