import "./bola.obj";
import "./bolaB.obj";
import "./bolaC.obj";
import "./model.obj";
import "./cube.obj";

const configModel = {
    isEnable: true,
    name: "model.obj",
    position : [0.2,-0.6,2],
    rotation: [0,-0.6,0],
    scale: [1,1,1]
}
const configCube = {
    isEnable: false,
    name: "cube.obj",
    position : [0.2,-2.2, 2],
    rotation: [0,0,0],
    scale: [0.5,0.5,0.5]
}
const configBola = {
    isEnable: true,
    name: "bola.obj",
    position : [0,0,0],
    rotation: [0,0,0],
    scale: [1,1,1]
}
const configBolaB = {
    isEnable: true,
    name: "bolaB.obj",
    position : [0,0,0],
    rotation: [0,0,0],
    scale: [1,1,1]
}
const configBolaC = {
    isEnable: true,
    name: "bolaC.obj",
    position : [0,0,0],
    rotation: [0,0,0], 
    scale: [1,1,1]
}

export {configModel, configBola, configBolaB, configBolaC, configCube};