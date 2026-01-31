// 1. Ambiance Nocturne
scene.background = new THREE.Color(0x050505); // Ciel noir
scene.fog = new THREE.Fog(0x050505, 10, 50); // Brouillard très serré

// Lumière ambiante très faible (pour voir un peu les silhouettes)
const ambientLight = new THREE.AmbientLight(0x404040, 0.2); 
scene.add(ambientLight);

// 2. Le Phare de la Moto
const headlight = new THREE.SpotLight(0xffffff, 10); // Lumière blanche puissante
headlight.position.set(0, 0.5, 0.5); // Positionné à l'avant de la moto
headlight.angle = Math.PI / 6; // Angle du faisceau (30 degrés)
headlight.penumbra = 0.3; // Bord de lumière doux
headlight.decay = 2; // La lumière faiblit avec la distance
headlight.distance = 40; // Portée du phare

// On crée une cible pour le phare (pour qu'il éclaire vers l'avant)
const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, -10); 
player.add(targetObject); // Attaché à la moto
headlight.target = targetObject;

player.add(headlight); // On attache le phare à la moto

// Dans la fonction spawnDecor, si c'est une maison :
if (type === 'maison') {
    const houseGeo = new THREE.BoxGeometry(3, 4, 3);
    const houseMat = new THREE.MeshStandardMaterial({ color: 0x111111 }); // Maison sombre
    const mesh = new THREE.Mesh(houseGeo, houseMat);
    
    // Ajouter une petite fenêtre lumineuse (Emissive)
    const windowGeo = new THREE.PlaneGeometry(0.5, 0.5);
    const windowMat = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Jaune brillant
    const window = new THREE.Mesh(windowGeo, windowMat);
    window.position.set(0, 1, 1.51); // Placée sur la façade
    mesh.add(window);
    
    scene.add(mesh);
}
