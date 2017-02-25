function init(){
	//renderer
	var renderer = new THREE.WebGLRenderer({
		canvas:document.getElementById('mainCanvas')
	})
	renderer.setClearColor(0x777777)

	//scene
	var scene = new THREE.Scene();

	//camera
	var camera = new THREE.OrthographicCamera(-4,4,3,-3,1,100);
	// camera.position.set(0,0,5);
	// camera.position.set(-5,0,0);
	// camera.position.set(0,5,0);
	camera.position.set(-4,2,5);
	camera.lookAt(new THREE.Vector3(0,0,0));

	//cube
	var cube = new THREE.Mesh(new THREE.CubeGeometry(2,2,4),
		new THREE.MeshBasicMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	scene.add(cube);

	//torus
	var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshBasicMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	var torus2 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshBasicMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	var torus3 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshBasicMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	var torus4 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshBasicMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	torus1.position.set(1,-1,1.3);
	torus1.rotateY(0.5*Math.PI);
	torus2.position.set(-1,-1,1.3);
	torus2.rotateY(0.5*Math.PI);
	torus3.position.set(1,-1,-1.3);
	torus3.rotateY(0.5*Math.PI);
	torus4.position.set(-1,-1,-1.3);
	torus4.rotateY(0.5*Math.PI);
	scene.add(torus1);
	scene.add(torus2);
	scene.add(torus3);
	scene.add(torus4);

	//render
	renderer.render(scene,camera);
}