const randomDiv = document.querySelector('.js-random'),
rangeTitle = randomDiv.querySelector('h2'),
sliderForm = document.querySelector('.js-sliderContainer'),
slider = document.querySelector('.sliderInput'),
guessInput = document.querySelector('.guessInput'),
playBtn= sliderForm.querySelector('button'),
resultDiv = document.querySelector('.result'),
resultText =resultDiv.querySelector('p'),
resultTitle = resultDiv.querySelector('h3');

let MAX = slider.value;
let RANDOM = 0;
let GUESS;

function createRandom(max){
    RANDOM = Math.floor(Math.random()*max);
    console.log(RANDOM);
}
function sliderHandler(event){
    event.preventDefault();
    const currentValue = slider.value;

    console.log(`currentValue : ${currentValue}`)
    rangeTitle.innerText = `Generate a number between 0 and ${currentValue}`;
    MAX = currentValue;
  
}

function playHandler(event){
    createRandom(MAX);
    event.preventDefault();
    resultDiv.classList.remove('block');
    resultDiv.classList.add('showing');
    const currentGuess = guessInput.value;
    GUESS = parseInt(currentGuess);

    resultText.innerText= `you chose : ${GUESS}, the machine chose : ${RANDOM}`;
    resultTitle.innerText = `YOU ${GUESS===RANDOM? 'WON!! π':'LOST β οΈ'}`;
    console.log(`guess : ${GUESS} random : ${RANDOM} `);

    
}

function init(){
    rangeTitle.innerText = `Generate a number between 0 and ${slider.value}`;
    slider.addEventListener('input',sliderHandler);
    playBtn.addEventListener('click', playHandler);
   

 
}

init();

//sliger value λ°λλ©΄ rangeTitle λ΄μ© μλ ₯ 
//νλ μ΄ λ²νΌ λλ₯΄λ©΄ μ«μλ λλ€ μ«μλ λΉκ΅ν΄μ νμΈν!  
//setInterval(function, 1000);-> realtime;