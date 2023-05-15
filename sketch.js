//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var motor;
var world;

var solo, parado;

var helice;

function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    //criar os corpos

    //cria a helice


    //é aqui que coloca a imagem



    ellipseMode(RADIUS)
    rectMode(CENTER);
}

var angulo = 0;
function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);
  //faz o retângulo para mostrar o corpo do solo
 
  //é aqui que faz a helice girar

  //aumenta o valor do ângulo


  //faz a ellipse para mostrar o corpo da bola
 
}

//é aqui que adiciona a função para aplicar força na bola
