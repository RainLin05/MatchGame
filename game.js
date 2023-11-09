var birds = ["birb0.jpg","birb1.jpg","birb2.jpg","birb3.jpg","birb4.jpg","birb5.jpg","birb6.jpg","birb7.jpg","bird8.jpeg","birb0.jpg","birb1.jpg","birb2.jpg","birb3.jpg","birb4.jpg","birb5.jpg","birb6.jpg","birb7.jpg","bird8.jpeg"];
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
  if(arg1 == newBirds[card]) {
    abc = newBirds.indexOf(arg1);
    document.getElementById(`${abc}`).querySelector("img").id="1";
    document.getElementById(card).querySelector("img").id="1";
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
    if (img.id == "") {
      img.src = "cardback.png"; 
    }
  })
}

let scoreKeep = () => {
  score++;
  document.getElementById("score").innerHTML = `Score: ${score}`;
}

let completeReset = () => {
  location.reload();
}