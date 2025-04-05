import "./style.css";

window.onload = function() {
  //write your code here
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardValues = values[Math.floor(Math.random() * values.length)];
  
  let pips = ["♥", "♦", "♣", "♠"];
  let cardPips = pips[Math.floor(Math.random() * pips.length)];
  let color = "";
  
  if (cardPips === "♥" || cardPips === "♦"){
    color = "red";
  } else {
    color = "black";
  }

  document.getElementById("center").innerHTML = cardValues;
  document.querySelectorAll(".pips").forEach(figure => {
    figure.innerHTML = cardPips
    figure.style.color = color
    })
};
