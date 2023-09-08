var randomnumber1 = Math.floor(Math.random()*6)+1;
var imgsrc1 = "dice" +randomnumber1 +".png";

var randomnumber2 = Math.floor(Math.random()*6)+1;
var imgsrc2 = "dice" +randomnumber2+ ".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Draw";
}




