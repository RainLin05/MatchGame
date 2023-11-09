var birds = ["bird0.jpeg","bird1.jpeg","bird2.jpeg","bird3.png","bird4.jpeg","bird5.jpeg","bird6.png","bird7.png","bird0.jpeg","bird1.jpeg","bird2.jpeg","bird3.png","bird4.jpeg","bird5.jpeg","bird6.png","bird7.png"];
let count = 0;
let score = 0;
var newBirds = shuffle(birds);
arg1 = "";
arg2 = "";


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  
  var arr = [1, 2, 3 , 4, 5, 6, 7, 8];
  shuffle(arr);

let changeImg = (card) => {
  score++;
  if(arg1 == newBirds[card]) {
    
  }
  arg1 = newBirds[card]

  if (count==2) {
    reset();
  }
  console.log("aaaaaa")
  document.getElementById(`${card}`).querySelector("img").src=`${newBirds[card]}`;
  count++;
      
}

let reset = () => {
  console.log("222")
  count = 0;
  const images = document.querySelectorAll("img");
  images.forEach((img)=> {
    img.src = "cardback.png"; 
  })
}

let scoreKeep = () => {
  document.getElementById("score").innerHTML = `Score: ${score}`;
}
