function init(){
	//renderer
	var renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('mainCanvas')
	})
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;
	
	//scene
	var scene = new THREE.Scene();
	
	//camera
	var camera = new THREE.PerspectiveCamera(45,4/3,2,10);
	camera.position.set(2,0,5);
	scene.add(camera);
	
	//plane
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(8,8,16,16),
		new THREE.MeshLambertMaterial({color:0xcccccc})
		);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -1;
	plane.receiveShadow = true;
	scene.add(plane);

	//a cube in the scene
	var cube = new THREE.Mesh(new THREE.CubeGeometry(1,1,1),
		new THREE.MeshBasicMaterial({
			color : 0x00ff00
		})
	);
	cube.position.x = 2;
	cube.castShadow = true;
	scene.add(cube);

	var light = new THREE.SpotLight(0xffff00,1,100,Math.PI/6,25);
	light.position.set(2,5,3);
	light.target = cube;
	light.castShadow = true;

	light.shadow.camera.near = 2;
	light.shadow.camera.far = 10;
	light.shadow.camera.fov = 30;
	// light.shadowCameraVisible = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	scene.add(light);

	//render
	renderer.render(scene,camera);
}