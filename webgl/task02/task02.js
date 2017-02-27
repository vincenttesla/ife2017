function init(){
	//renderer
	var renderer = new THREE.WebGLRenderer({
		canvas:document.getElementById('mainCanvas')
	})
	renderer.setClearColor(0x777777)
	renderer.shadowMap.enabled = true;

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
		new THREE.MeshLambertMaterial({
			color : 0xdddddd
			// wireframe:true
		})
	);
	cube.castShadow = true;
	scene.add(cube);

	//plane
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(16,10,16,16),
		new THREE.MeshLambertMaterial({color:0xd4f2e7})
		);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -1.3;
	plane.receiveShadow = true;
	scene.add(plane);

	//torus
	var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xdddddd,
			specular: 0xffffff,
			shininess: 70
		})
	);
	var torus2 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xdddddd,
			specular: 0xffffff,
			shininess: 70
		})
	);
	var torus3 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xdddddd,
			specular: 0xffffff,
			shininess: 70
		})
	);
	var torus4 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xdddddd,
			specular: 0xffffff,
			shininess: 70
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
	torus1.castShadow = true;
	torus2.castShadow = true;
	torus3.castShadow = true;
	torus4.castShadow = true;
	scene.add(torus1);
	scene.add(torus2);
	scene.add(torus3);
	scene.add(torus4);

	//light
	var light = new THREE.DirectionalLight(0xffffff,1.3);
	light.position.set(-4,3,-3);
	light.target = cube;
	light.castShadow = true;

	light.shadow.camera.near = 2;
	light.shadow.camera.far = 10;
	light.shadow.camera.fov = 30;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	scene.add(light);

	//render
	renderer.render(scene,camera);
}