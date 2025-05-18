
    const changeButton = document.getElementById('btn');
    const resetButton = document.getElementById('reset');
    const body = document.body;
   

changeButton.addEventListener('click', () => {
        body.style.backgroundColor = getRandomColor();
});

resetButton.addEventListener('click',()=>{
    body.style.backgroundColor = 'white';
})

function getRandomColor(){
    return `rgb(${Math.floor(Math.random()*256)},
                ${Math.floor(Math.random()*256)},
                ${Math.floor(Math.random()*256)})`;
}
