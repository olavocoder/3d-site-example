import * as THREE from 'three';
import '../cena/back.jpg';
import '../materials/material.mtl'

function Plane(id, material3d, luz, camera, cena){	
	let cam, scene, renderer;
	var canvasWidth = cena.width;
	var canvasheight = cena.height;
	
	init();
	animate()
	function init() {
		
		//Criando uma camera para exibir o conteudo 3d
		cam = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		cam.position.x = camera.position[0];
		cam.position.y = camera.position[1];
		cam.position.z = camera.position[2];
		
		//Criando uma cena para exibir o conteudo 3d
		scene = new THREE.Scene();
		if(cena.color[0] == 'color'){
			scene.background = new THREE.Color(cena.color[1]);
		}

		if(luz.type == 'point'){
			//Criando uma luz para iluminar o objeto 3d
			var pointLight = new THREE.PointLight( new THREE.Color(luz.color), luz.intensity );
			document.querySelector('body').addEventListener('mousemove', event => {
				pointLight.position.set(event.clientX, event.clientY, luz.position[2]);
			});		
			cam.add(pointLight)	
			scene.add( cam );
		}

		if(cena.color[0] == 'texture'){
			const geometrySky = new THREE.SphereGeometry( 5000, 60, 40 );
			// invert the geometry on the x-axis so that all of the faces point inward
			geometrySky.scale( - 1, 1, 1 );
			const textureSky = new THREE.TextureLoader().load( cena.color[1] );
			const matSky = new THREE.MeshBasicMaterial( { map: textureSky } );
			const sky = new THREE.Mesh( geometrySky, matSky);
			scene.add( sky );
		}

			const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
			const material = new THREE.MeshStandardMaterial(material3d.mat);
			const plane = new THREE.Mesh(geometry, material);
			console.log(plane);
			plane.position.x = window.innerWidth/2;
			scene.add(plane);

			
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( canvasWidth, canvasheight);
		document.getElementById(id).appendChild( renderer.domElement );




	}

	function animate() {
		requestAnimationFrame( animate );
		render();
	}
	render();
	function render() {
		renderer.render( scene, cam );

	}
}
export default Plane;