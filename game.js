var birds = ["bird0.jpeg","bird1.jpeg","bird2.jpeg","bird3.png","bird4.jpeg","bird5.jpeg","bird6.png","bird7.png","bird0.jpeg","bird1.jpeg","bird2.jpeg","bird3.png","bird4.jpeg","bird5.jpeg","bird6.png","bird7.png"];
let count = 0;
var newBirds = shuffle(birds);

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
      console.log("aaaaaa")
      document.getElementById(`${card}`).querySelector("img").src=`${newBirds[card]}`;
}
