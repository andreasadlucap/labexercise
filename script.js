const authors = document.querySelectorAll("#author");
const texts = document.querySelectorAll("#text");
const body = document.getElementById("#body");
const button = document.querySelectorAll("#generate-btn");


function getRandomQuote() {
    let result = '';
    let random = Math.round(Math.random()*5);

    if (random === 0){
        document.getElementById('author').innerHTML = "If life were predictable it would cease to be life, and be without flavor – Elanor Roosevelt";
       
    }
    else if(random ===1){
        document.getElementById('author').innerHTML = "Life is what happens when you're busy making other plans. – John Lennon";
    }
    else if(random ===2){
        document.getElementById('author').innerHTML = "When you reach the end of your rope, tie a knot in it and hang on - Franklin D. Roosevel";
    }
    else if(random ===3){
        document.getElementById('author').innerHTML = "Always remember that you are absolutely unique. Just like everyone else. -hannah Gaguan";
    }
    else if(random ===4){
        document.getElementById('author').innerHTML = "The way to get started is to quit talking and begin doing. - andrea sADLUCap";
    }
 }

