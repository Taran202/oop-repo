/* Opdracht Objectgeorienteerd programmeren
   Informatica - Emmauscollege Rotterdam
*/

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var xPosities;
var yPosities;
var speedsX;
var speedsY;
const BREEDTE = 20;
var mensen;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // initialiseer waarden
  mensen = [ { x: 130, y: 650, speedX: 2,  speedY: 1  },
    { x: 34,  y: 478, speedX: -6, speedY: -4 },
    { x: 420, y: 323,  speedX: 8,  speedY: -6 },
    { x: 340, y: 123, speedX: -2, speedY: -2 },
    { x: 800, y: 268,  speedX: -3, speedY: 5  } ];
} 
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);
  //alle posities arra
  for (var i = 0; i < Mensen.length; i++) {
   var eenMens= Mensen[i]
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(eenMens.x [i], eenMens.y[i], BREEDTE, BREEDTE);
   //  posities

    eenMens.x = eenMens.x + eenMens.speedX;
    eenMens.y = eenMens.y + eenMens.speedY;

 
    

    // weg stuiter
    if (eenMens.x <= 0 || eenMens.speedX+ BREEDTE >= width) {
      eenMens.speedsX = eenMens.speedsX * -1;
    }

    if (eenMens.y <= 0 || eenMens.y + BREEDTE >= height) {
      eenMens.speedY = eenMens.speedY * -1;
    }

  }
}