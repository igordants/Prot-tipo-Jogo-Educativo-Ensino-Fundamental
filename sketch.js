//Link do video explicando o menu: https://drive.google.com/drive/folders/1BEcSMH3BnBiti_mklY0Oy3FqhpMG_9y7

var x = 80;
var y = 100;

var tela = 0;
var opcao = 1;
var teclaAtivada = false
var fundo;
var fundo1;
var audio;
var foto1;
var foto2;
var foto3;
var foto4;
var egito;
var xEgito = 50, yEgito = 100
var direita = false
var esquerda = false
var cima = false
var baixo = false

function preload(){
  fundo = loadImage("Imagens/Lop.jpg");
  fundo1 = loadImage("Imagens/Fundo1.jpg")
   fundo2 = loadImage("Imagens/Fundo4.jpg")
  foto1 = loadImage("Imagens/Foto.png")
  foto2 = loadImage("Imagens/aquiles.jpg")
  foto3 = loadImage("Imagens/Bonece.jpg")
  foto4 = loadImage("Imagens/Egito.png")
  audio = createAudio("Sons/Son - lop.mp3")
  egito = loadImage("Imagens/cleopatra.png")
  
}

function setup() {
  createCanvas(450, 400);
  xEgito = parseInt(random(0, 450)), yEgito = parseInt(random(0, 400))
  
  if(random(0,10) <= 5){
    esquerda = true
  }else{
    direita = true
  }
  
  if(random(0,10) <= 5){
    cima = true
  }else{
    baixo = true
  }
  
}

function draw() {
  
  clear()
  fill(255, 250, 250);
  if(tela==0) 
    menu( );
  if(tela==1)
    fase1();
  if(tela==2)
    instrucoes();
  if(tela==3)
    creditos();
}

function menu( ) {
  background(fundo);
  if(opcao == 1 && teclaAtivada == true){
    rect(240, y, 200, 45, 20, 20)
  }  
  if(opcao == 2 && teclaAtivada == true){
    
    rect(15, y, 200, 45, 20, 20)
  }
  if(opcao == 3 && teclaAtivada == true){
    rect(180, y, 200, 45, 20, 20)
  }

  if(mouseX >= 240 && mouseX <= 240+200 && mouseY >= 100 && mouseY <= 100+45){
    
    rect(240, y, 200, 45, 20, 20)
    teclaAtivada = false
    
  }
  
  if(mouseX >= 15 && mouseX <= 15+200 && mouseY >= 200 && mouseY <= 200+45){
    
    rect(15, 200, 200, 45, 20, 20)
    teclaAtivada = false
    
  }
  
  if(mouseX >= 180 && mouseX <= 180+200 && mouseY >= 300 && mouseY <= 300+45){
    
     rect(180, 300, 200, 45, 20, 20)
    teclaAtivada = false
    
  }
  textSize(32);
  fill (124,252,0);
  stroke (0,0,0);
  strokeWeight(6);
  text('World history',30, 50);
  text('Jogar',300, 130);
  text('Instruções', 40, 233);
  text('Créditos', 220, 333);
  
}

function fase1() {
  background(foto4)
  image(foto3, mouseX - 25, mouseY -25 , 50, 50)
  image(egito,xEgito,yEgito,60,60)
  textSize(18);
  fill (124,252,0)
  stroke ( 0,0,0)
  text('Antigo Egito',40, 50);
  
  if(esquerda == true){
    xEgito--
    //console.log(xEgito)
  }
  
  if(direita == true){
    xEgito++
    //console.log(xEgito)
  }
  
  if(cima == true){
    yEgito--
  }
  if(baixo == true){
    yEgito++
  }

  if(xEgito == 400){
    direita = false
    esquerda = true
  }
  
  if(xEgito == 0){
    direita = true
    esquerda = false
  }
 
  if(yEgito == 340){
    baixo = false
    cima = true
    //console.log(yEgito)
  }
  
  if(yEgito == 0){
    baixo = true
    cima = false
    //console.log(yEgito)
  }
  
}

function instrucoes() {
  background(fundo1);
  textSize(34);
  fill (124,252,0)
  stroke ( 0,0,0)
  text('Instruções',130, 50);
  textSize(15)
  text ("Conduza seu mouse até as roupas conrrespontes a  cada época usada pelas as mulheres.", 60 ,100,250);
  text()
  text ("", 130 ,120);
  text ("", 130 ,140);
  text ("", 130 ,160);
}

function creditos() {
  background(fundo1);
  textSize(34);
  fill (124,252,0)
  stroke ( 0,0,0)
  text('Creditos',140, 50);
  fill(255,255,255)
  
 
  textSize(10)
  strokeWeight(2)
  rect(250,70,150,100)
  rect(250,200,150,100)
  
  fill(0,0,0)
  noStroke()
  text("Aquiles Bularmaqui", 260,230)
  text("orientador", 260,250)
 
  fill(0,0,0)
  noStroke()
  text("Aluno: Igor Dantas",260,100)
  text("Graduando CeT",260,120)
  
  image(foto1, 100,70,100,100)
  image(foto2, 100,200,100,100)
  image( foto2,100,200,100,10)
}
// Menu usando o Teclado
function keyPressed() {
  
  teclaAtivada = true
  
  if (key === 'ArrowUp' && y>100) {
    
    y-=100;
    opcao--;
  } else if (key === 'ArrowDown' && y<300) {
   y+=100;
    opcao++;
  } else if (key === 'Enter') {
   tela=opcao;
  } else if (key === 'Escape') {
   tela=0;
   audio.stop() 
  }
} 
// Menu usando mouse 

function mouseClicked() {
  console.log(mouseY,mouseX)
  if( tela == 0){
    if(mouseX >= 240 && mouseX <=440 && mouseY>=100 && mouseY<=140){
      tela = 1
    }
    if(mouseX >= 15 && mouseX <=215 && mouseY>=200 && mouseY<=240)      {
      tela = 2
    }
    if(mouseX >= 180 && mouseX <=380 && mouseY>=300 && mouseY<=340)      {
      tela = 3
    } 
    
  }

}