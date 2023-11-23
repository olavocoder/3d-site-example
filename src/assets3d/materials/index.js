import * as THREE from 'three';
import './modelnormal.jpg';
import './model.jpg';
import './bolaNormal.png';
import './bola.jpg';
import './metal.jpg'
import './normalMetal.png';
import '../cena/back.jpg';
import './normalConcreto.png';
import './concreto.jpg';
import './nature.jpg';
import './normalnature.png';

const normal = new THREE.TextureLoader().load('modelnormal.jpg');
const textura = new THREE.TextureLoader().load('model.jpg');
const bolaNormal = new THREE.TextureLoader().load('bolaNormal.png');
const bola = new THREE.TextureLoader().load('bola.jpg');
const metalNormal = new THREE.TextureLoader().load('normalMetal.png');
const metal = new THREE.TextureLoader().load('metal.jpg');
const concretoNormal = new THREE.TextureLoader().load('normalConcreto.png');
const concreto= new THREE.TextureLoader().load('concreto.jpg');
const natureNormal = new THREE.TextureLoader().load('normalnature.png');
const nature= new THREE.TextureLoader().load('nature.jpg');

const textureReflection = new THREE.TextureLoader().load('back.jpg');
textureReflection.encoding = THREE.sRGBEncoding;
textureReflection.mapping = THREE.EquirectangularReflectionMapping;

const material3d = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: textura,
        bumpMap: normal,
        bumpScale: 0.003,
        envMap: textureReflection,
        envMapIntensity: 1.5,
        roughness: 0,
        metalness: 0, 
        flatShading: false
    }
}
const materialConcreto = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: concreto,
        bumpMap: concretoNormal,
        bumpScale: 0.003,
        envMap: textureReflection,
        envMapIntensity: 1,
        roughness: 0.3,
        metalness: 0, 
        flatShading: false
    }
}
const material3dA = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: bola,
        bumpMap: bolaNormal,
        bumpScale: 0.03,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0,
        metalness: 0, 
        flatShading: false
    }
}
const material3dB = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: metal,
        bumpMap: metalNormal,
        bumpScale: 0.009,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0.2,
        metalness: 1, 
        flatShading: false 
    }
}
const material3dC = {
    transparent: true, 
    opacity: 0.74,
    mat:{
        color: new THREE.Color(0x000000),
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0.1,
        metalness: 1, 
        flatShading: false
    }
}
const material3dD = {
    transparent: false,
    mat:{
        color: new THREE.Color(0xffffff),
        map: nature,
        bumpMap: natureNormal,
        bumpScale: 1,
        envMap: textureReflection,
        envMapIntensity: 2,
        roughness: 0.5,
        metalness: 1, 
        flatShading: false 
    }
}
export {material3d, material3dA, material3dB, material3dC, materialConcreto, material3dD};

//link para geração de normalmaps:
// https://cpetry.github.io/NormalMap-Online/
