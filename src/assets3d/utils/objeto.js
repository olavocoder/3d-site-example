import * as THREE from 'three';
import { OBJLoader } from './OBJLoader';
import { ArcballControls } from '../controle/ArcballControls';
import '../cena/back.jpg';
import '../materials/material.mtl'

function objeto(id, config, material3d, luz, camera, cena){	
	let cam, scene, renderer;
	var object, controls;
	var canvasWidth = cena.width;
	var canvasheight = cena.height;
	
	init();
	animate()
	function init() {
		
		//Criando uma camera para exibir o conteudo 3d
		cam = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
		cam.position.x = camera.position[0];
		cam.position.y = camera.position[1];
		cam.position.z = camera.position[2];
		
		//Criando uma cena para exibir o conteudo 3d
		scene = new THREE.Scene();
		if(cena.color[0] == 'color'){
			scene.background = new THREE.Color(cena.color[1]);
		}

		//Criando uma luz para iluminar o objeto 3d
		const pointLight = new THREE.DirectionalLight( new THREE.Color(luz.color), luz.intensity );
		pointLight.translateX(luz.position[0]);
		pointLight.translateY(luz.position[1]);
		pointLight.translateZ(luz.position[2]);
		
		//Unindo todos os itemns
		cam.add( pointLight );
		scene.add( cam );
		if(cena.color[0] == 'texture'){
			const geometrySky = new THREE.SphereGeometry( 500, 60, 40 );
			// invert the geometry on the x-axis so that all of the faces point inward
			geometrySky.scale( - 1, 1, 1 );
			const textureSky = new THREE.TextureLoader().load( cena.color[1] );
			const matSky = new THREE.MeshBasicMaterial( { map: textureSky } );
			const sky = new THREE.Mesh( geometrySky, matSky);
			sky.name = 'sky';
			scene.environment = textureSky;
			scene.add( sky );
			
		}

		if(Array.isArray(config) === false){
			if(config.isEnable == true){	
				// manager
				const manager = new THREE.LoadingManager( loadModel );
				function loadModel() {
					object.traverse( function ( child ) {
						if ( child.isMesh ) child.material = material;
					} );
					object.name = config.name;
					scene.add( object );
				}

				// material
					const material = new THREE.MeshStandardMaterial(material3d.mat);
					if(material3d.transparent == true){
						material.transparent = material3d.transparent;
						material.opacity = material3d.opacity;
					}
				// model
				function onProgress( xhr ) {

					if ( xhr.lengthComputable ) {
						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
					}
				}
				function onError() {}
				const loader = new OBJLoader( manager );
				loader.load( config.name, function ( obj ) {
					object = obj;

				}, onProgress, onError );
			}
		}else{
			config.map((value, index) => {
				if(value.isEnable == true){
					// manager
					const manager = new THREE.LoadingManager( loadModel );
					function loadModel() {
						object.traverse( function ( child ) {
							if ( child.isMesh ) child.material = material;
						} );
						object.name = value.name;
						scene.add( object );
					}

					// material
						const material = new THREE.MeshStandardMaterial(material3d[index].mat);
						if(material3d[index].transparent == true){
							material.transparent = material3d[index].transparent;
							material.opacity = material3d[index].opacity;
						}
					// model
					function onProgress( xhr ) {

						if ( xhr.lengthComputable ) {
							const percentComplete = xhr.loaded / xhr.total * 100;
							console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
						}
					}
					function onError() {}
					const loader = new OBJLoader( manager );
					loader.load( value.name, function ( obj ) {
						object = obj;

					}, onProgress, onError );
				}
			});
		}




		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( canvasWidth, canvasheight);
		document.getElementById(id).appendChild( renderer.domElement );
		controls = new ArcballControls( cam, renderer.domElement, scene );
		controls.setGizmosVisible(false);
		controls.addEventListener( 'change', render );
	}
	function animate() {

		requestAnimationFrame( animate );
		render();
	}

	function render() {
		if(object){
			if(Array.isArray(config) === false){
				if(object.name == config.name){
					object.rotation.x = config.rotation[0];
					object.rotation.y = config.rotation[1];
					object.rotation.z = config.rotation[2];
					object.position.x = config.position[0];
					object.position.y = config.position[1];
					object.position.z = config.position[2];
					object.scale.x = config.scale[0];
					object.scale.y = config.scale[1];
					object.scale.z = config.scale[2];
				}
			}else{
				config.map(value => {
					if(object.name == value.name){
						object.rotation.x = value.rotation[0];
						object.rotation.y = value.rotation[1];
						object.rotation.z = value.rotation[2];
						object.position.x = value.position[0];
						object.position.y = value.position[1];
						object.position.z = value.position[2];
						object.scale.x = value.scale[0];
						object.scale.y = value.scale[1];
						object.scale.z = value.scale[2];
					}
				});
			}
		}
		renderer.render( scene, cam );

	}


}
export default objeto;
