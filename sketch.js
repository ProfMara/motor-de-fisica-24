
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

    parado = {
      isStatic:true,
    }

    solo = Bodies.rectangle(300,390,600,30, parado);
    World.add(mundo, solo);

    mexendo = {
      isStatic:false
    }

    bola = Bodies.circle(300,300, 30, mexendo);
    World.add(mundo, bola);

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
  //faz o solo
  fill('brown');
  rect(solo.position.x, solo.position.y, 600, 30);

  //é aqui que faz a helice girar

  //aumenta o valor do ângulo


  //faz a bolinha
  fill("blue");
  ellipse(bola.position.x, bola.position.y, 30);
}

//é aqui que adiciona a função para aplicar força na bola
