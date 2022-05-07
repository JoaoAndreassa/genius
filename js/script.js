let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
  let colorOrder = Math.floor(math.randon() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor,Number(i)+1);

  }
}
let lightColor = (element , number)=>{
  number = number*500;
  setTimeout(() =>{
    element.classlist.add('selected')
  }, number - 250);
  setTimeout(() =>{
    element.classlist.remove('selected')
  });
}


let checkOrder = () => {
  for (let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`pointuação: ${score}\n Boa! Proximo nivel!`);
    nextlevel()
  }
}
let click = (color)=>{
  clickedOrder[checkOrder.length] = color;
  createColorElement(color).classlist.add('selected');

  setTimeout(() => {
    createColorElement(color).classlist.remove('selected');
    checkOrder();
  },250);
 
}


let createColorElement = (color) =>{
  if (color == 0){
    return green;
  }else if(color==1){
    return red;
  }else if (color ==2){
    return yellow;

  }else if(color ==3){
    return blue;
  }
}
//funçap para proximo nivel

let nextlevel = () =>{
  score ++;
  shuffleOrder();
}

//gameover

let lose = ()=>{
  alert(`pontuação: ${score}!\n Voce perdeu! \n Click em ok para recomeçar `)
  order = [];
  clickedOrder = [];

  playGame();
}
let playGame = () => {
  alert ('Bem vindo ao genius! bora começar!')

  score = 0
  nextlevel();
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();