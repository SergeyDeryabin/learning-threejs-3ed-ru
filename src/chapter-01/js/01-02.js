function init() {
    // Создаем сцену, которая будет содержать все наши элементы, такие как объекты, камеры и источники света.
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // Создаем камеру, которая определяет, куда мы смотрим.
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Создать объект рендеринга и задать его размер
    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Отобразить оси на экране
    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    // создать плоскость земли
    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // Повернуть и расположить плоскость
    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);

    // Добавить плоскость в сцену
    // add the plane to the scene
    scene.add(plane);

    // создать куб
    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        wireframe: true
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // расположить куб
    // position the cube
    cube.position.set(-4, 3, 0);

    // Добавить куб в сцену
    // add the cube to the scene
    scene.add(cube);

    // создать сферу
    // create a sphere
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: true
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // расположить сферу
    // position the sphere
    sphere.position.set(20, 4, 2);

    // Добавить сферу в сцену
    // add the sphere to the scene
    scene.add(sphere);

    // Расположите и направьте камеру в центр сцены
    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // Добавить вывод рендерера в HTML-элемент
    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // отрисовка сцены
    // render the scene
    renderer.render(scene, camera);
}