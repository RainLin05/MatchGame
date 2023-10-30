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
let changeImg = () => {
    console.log("aaaaaa")
    document.getElementById("1").querySelector("img").src="bird.jpg";
}
