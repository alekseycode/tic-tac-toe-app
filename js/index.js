// pt1. when user clicks new game clear board
const btn = document.querySelector("button");
let squares = document.querySelectorAll(".square");
let feedback = document.querySelector("span");
const checkBox = document.querySelector("input");
let row = document.querySelectorAll(".row");
const containerDiv = document.querySelector(".row-container");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");

checkBox.addEventListener("change", function () {
  if (this.checked) {
    h1.innerHTML = "Fic-Fac-Foe-Fou-Fiv" + "<span></span>";
    feedback = document.querySelector("span");
    make5x5();
    newGame();
  } else {
    h1.innerHTML = "Tic-Tac-Toe" + "<span></span>";
    feedback = document.querySelector("span");
    remove5x5();
    newGame();
  }
});

function make5x5() {
  let rowDiv = document.createElement("div");
  rowDiv.className = "row";
  let rowDiv2 = document.createElement("div");
  rowDiv2.className = "row";
  for (i = 0; i < 3; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.className = "square";
    rowDiv.appendChild(squareDiv);
  }
  for (i = 0; i < 3; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.className = "square";
    rowDiv2.appendChild(squareDiv);
  }

  containerDiv.appendChild(rowDiv);
  containerDiv.appendChild(rowDiv2);
  row = document.querySelectorAll(".row");

  for (i = 0; i < row.length; i++) {
    let currentRow = row[i];
    let squareDiv = document.createElement("div");
    squareDiv.className = "square";
    let squareDiv2 = document.createElement("div");
    squareDiv2.className = "square";
    currentRow.appendChild(squareDiv);
    currentRow.appendChild(squareDiv2);
  }
  container.style.width = "750px";
  container.style.height = "900px";
  btn.style.width = "792px";
}

function remove5x5() {
  for (let i = 0; i < 2; i++) {
    containerDiv.removeChild(row[row.length - (i + 1)]);
  }
  squares = document.querySelectorAll(".square");

  row[0].removeChild(squares[3]);
  row[0].removeChild(squares[4]);
  row[1].removeChild(squares[8]);
  row[1].removeChild(squares[9]);
  row[2].removeChild(squares[13]);
  row[2].removeChild(squares[14]);
  container.style.width = "550px";
  container.style.height = "auto";
  btn.style.width = "590px";
}

const usedSqs = {
  s1: 1,
  s2: 2,
  s3: 3,
  s4: 4,
  s5: 5,
  s6: 6,
  s7: 7,
  s8: 8,
  s9: 9,
};
let xO = "X",
  turns = 0;

btn.addEventListener("click", newGame);

function newGame() {
  squares = document.querySelectorAll(".square");
  turns = 0;
  xO = "X";
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    squares[i].id = i + 1;
    squares[i].addEventListener("click", addXO);
    usedSqs["s" + (i + 1)] = i + 1;
  }
  feedback.textContent = `${xO}'s turn`;
}
// pt2. get 9 squares and have them do something when clicked

// pt3. function that puts an x  or o when clicked
function addXO() {
  this.textContent = xO;
  xO == "X" ? (xO = "O") : (xO = "X");
  feedback.textContent = `${xO}'s turn`;
  turns++;
  usedSqs["s" + this.id] = xO;
  if (!checkBox.checked) {
    if (turns >= 5) ifWon();
  } else {
    if (turns >= 7) ifWon5x5();
  }

  this.removeEventListener("click", addXO);
}

// pt4. check if anyone won, x or o has 3 in a row

function ifWon() {
  if (turns == 9) feedback.textContent = "It's a tie!";
  if (
    (usedSqs.s1 == usedSqs.s2 && usedSqs.s1 == usedSqs.s3) ||
    (usedSqs.s1 == usedSqs.s5 && usedSqs.s1 == usedSqs.s9) ||
    (usedSqs.s1 == usedSqs.s4 && usedSqs.s1 == usedSqs.s7) ||
    (usedSqs.s4 == usedSqs.s5 && usedSqs.s4 == usedSqs.s6) ||
    (usedSqs.s7 == usedSqs.s8 && usedSqs.s7 == usedSqs.s9) ||
    (usedSqs.s3 == usedSqs.s5 && usedSqs.s3 == usedSqs.s7) ||
    (usedSqs.s3 == usedSqs.s6 && usedSqs.s3 == usedSqs.s9) ||
    (usedSqs.s2 == usedSqs.s5 && usedSqs.s2 == usedSqs.s8)
  ) {
    xO == "X" ? (xO = "O") : (xO = "X");
    feedback.textContent = xO + " Wins!";
    for (let i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", addXO);
    }
  }
}

function ifWon5x5() {
  if (turns == 25) feedback.textContent = "It's a tie!";
  if (
    (usedSqs.s1 == usedSqs.s6 &&
      usedSqs.s1 == usedSqs.s11 &&
      usedSqs.s1 == usedSqs.s16) ||
    (usedSqs.s6 == usedSqs.s11 &&
      usedSqs.s6 == usedSqs.s16 &&
      usedSqs.s6 == usedSqs.s21) ||
    (usedSqs.s2 == usedSqs.s7 &&
      usedSqs.s2 == usedSqs.s12 &&
      usedSqs.s2 == usedSqs.s17) ||
    (usedSqs.s7 == usedSqs.s12 &&
      usedSqs.s7 == usedSqs.s17 &&
      usedSqs.s7 == usedSqs.s22) ||
    (usedSqs.s3 == usedSqs.s8 &&
      usedSqs.s3 == usedSqs.s13 &&
      usedSqs.s3 == usedSqs.s18) ||
    (usedSqs.s8 == usedSqs.s13 &&
      usedSqs.s8 == usedSqs.s18 &&
      usedSqs.s8 == usedSqs.s23) ||
    (usedSqs.s4 == usedSqs.s9 &&
      usedSqs.s4 == usedSqs.s14 &&
      usedSqs.s4 == usedSqs.s19) ||
    (usedSqs.s9 == usedSqs.s14 &&
      usedSqs.s9 == usedSqs.s19 &&
      usedSqs.s9 == usedSqs.s24) ||
    (usedSqs.s5 == usedSqs.s10 &&
      usedSqs.s5 == usedSqs.s15 &&
      usedSqs.s5 == usedSqs.s20) ||
    (usedSqs.s10 == usedSqs.s15 &&
      usedSqs.s10 == usedSqs.s20 &&
      usedSqs.s10 == usedSqs.s25) ||
    (usedSqs.s1 == usedSqs.s2 &&
      usedSqs.s1 == usedSqs.s3 &&
      usedSqs.s1 == usedSqs.s4) ||
    (usedSqs.s2 == usedSqs.s3 &&
      usedSqs.s2 == usedSqs.s4 &&
      usedSqs.s2 == usedSqs.s5) ||
    (usedSqs.s6 == usedSqs.s7 &&
      usedSqs.s6 == usedSqs.s8 &&
      usedSqs.s6 == usedSqs.s9) ||
    (usedSqs.s7 == usedSqs.s8 &&
      usedSqs.s7 == usedSqs.s9 &&
      usedSqs.s7 == usedSqs.s10) ||
    (usedSqs.s11 == usedSqs.s12 &&
      usedSqs.s11 == usedSqs.s13 &&
      usedSqs.s11 == usedSqs.s14) ||
    (usedSqs.s12 == usedSqs.s13 &&
      usedSqs.s12 == usedSqs.s14 &&
      usedSqs.s12 == usedSqs.s15) ||
    (usedSqs.s16 == usedSqs.s17 &&
      usedSqs.s16 == usedSqs.s18 &&
      usedSqs.s16 == usedSqs.s19) ||
    (usedSqs.s17 == usedSqs.s18 &&
      usedSqs.s17 == usedSqs.s19 &&
      usedSqs.s17 == usedSqs.s20) ||
    (usedSqs.s21 == usedSqs.s22 &&
      usedSqs.s21 == usedSqs.s23 &&
      usedSqs.s21 == usedSqs.s24) ||
    (usedSqs.s22 == usedSqs.s23 &&
      usedSqs.s22 == usedSqs.s24 &&
      usedSqs.s22 == usedSqs.s25) ||
    (usedSqs.s1 == usedSqs.s7 &&
      usedSqs.s1 == usedSqs.s13 &&
      usedSqs.s1 == usedSqs.s19) ||
    (usedSqs.s7 == usedSqs.s13 &&
      usedSqs.s7 == usedSqs.s19 &&
      usedSqs.s7 == usedSqs.s25) ||
    (usedSqs.s6 == usedSqs.s12 &&
      usedSqs.s6 == usedSqs.s18 &&
      usedSqs.s6 == usedSqs.s24) ||
    (usedSqs.s2 == usedSqs.s8 &&
      usedSqs.s2 == usedSqs.s14 &&
      usedSqs.s2 == usedSqs.s20) ||
    (usedSqs.s5 == usedSqs.s9 &&
      usedSqs.s5 == usedSqs.s13 &&
      usedSqs.s5 == usedSqs.s17) ||
    (usedSqs.s9 == usedSqs.s13 &&
      usedSqs.s9 == usedSqs.s17 &&
      usedSqs.s9 == usedSqs.s21) ||
    (usedSqs.s4 == usedSqs.s8 &&
      usedSqs.s4 == usedSqs.s12 &&
      usedSqs.s4 == usedSqs.s16) ||
    (usedSqs.s10 == usedSqs.s14 &&
      usedSqs.s10 == usedSqs.s18 &&
      usedSqs.s10 == usedSqs.s22)
  ) {
    xO == "X" ? (xO = "O") : (xO = "X");
    feedback.textContent = xO + " Wins!";
    for (let i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", addXO);
    }
  }
}
