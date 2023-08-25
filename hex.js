const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let count = 0; count < 6; count++){
        console.log(hexColor);
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    hexColor = '#';
})