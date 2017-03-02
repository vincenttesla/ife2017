var camera, controls, scene, renderer;

function init(){
	//renderer
	renderer = new THREE.WebGLRenderer({
		canvas:document.getElementById('mainCanvas')
	})
	renderer.setClearColor(0x666666)
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;

	//scene
	scene = new THREE.Scene();

	//camera
	camera = new THREE.OrthographicCamera(-4,4,3,-3,1,100);
	// camera.position.set(0,0,5);
	// camera.position.set(-5,0,0);
	// camera.position.set(0,5,0);
	camera.position.set(-4,2,5);
	camera.lookAt(new THREE.Vector3(0,0,0));

	//controls
	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 5.0;
	controls.zoomSpeed = 5.0;
	controls.panSpeed = 5.0;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];
	controls.addEventListener( 'change', render );
	
	//cube
	var cube = new THREE.Mesh(new THREE.CubeGeometry(2,2,4),
		new THREE.MeshPhongMaterial({
			color : 0xe2e2e2,
			map : new THREE.TextureLoader().load('cube.png', function() {
                    render();
                })
		})
	);
	cube.castShadow = true;
	cube.receiveShadow = true;
	scene.add(cube);

	//plane
	var planeTexture = new THREE.TextureLoader().load('floor.png', function() {
                    	render();});
	planeTexture.wrapS = planeTexture.wrapT = THREE.ReapeatWrapping;
	planeTexture.repeat.set(16,16);
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(16,16,16,16),
		new THREE.MeshLambertMaterial({color:0xd4f2e7,map:planeTexture})
		);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -1.4;
	plane.receiveShadow = true;
	scene.add(plane);

	//torus
	var torusTexture = new THREE.TextureLoader().load('torus.png', function() {
                    	render();});
	var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,20,30),
		new THREE.MeshPhongMaterial({
			color : 0xe2e2e2,
			specular: 0xffffff,
			shininess: 70,
			map:torusTexture
		})
	);
	var torus2 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,20,30),
		new THREE.MeshPhongMaterial({
			color : 0xe2e2e2,
			specular: 0xffffff,
			shininess: 70,
			map:torusTexture
		})
	);
	var torus3 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xe2e2e2,
			specular: 0xffffff,
			shininess: 70,
			map:torusTexture
		})
	);
	var torus4 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.1,12,18),
		new THREE.MeshPhongMaterial({
			color : 0xe2e2e2,
			specular: 0xffffff,
			shininess: 70,
			map:torusTexture
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
	torus1.receiveShadow = true;
	torus2.receiveShadow = true;
	torus3.receiveShadow = true;
	torus4.receiveShadow = true;
	scene.add(torus1);
	scene.add(torus2);
	scene.add(torus3);
	scene.add(torus4);

	//light
	var light = new THREE.SpotLight(0xffffff, 0.8, 100, Math.PI/3, 25);
	light.position.set(-4,3,-2);
	light.target = cube;
	light.castShadow = true;

	light.shadow.camera.near = 2;
	light.shadow.camera.far = 10;
	light.shadow.camera.fov = Math.PI/3;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	scene.add(light);

	// ambient light
	var ambient = new THREE.AmbientLight(0x333333);
	scene.add(ambient);

	window.addEventListener( 'resize', onWindowResize, false );

	//render
	render();
	animate();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	controls.handleResize();
	render();
}

function render(){
	renderer.render(scene,camera);
}

function animate() {
	requestAnimationFrame( animate );
	controls.update();
}