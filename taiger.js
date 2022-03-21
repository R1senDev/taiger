class CanvasException extends Error {
	constructor(message) {
		super(message);
		this.name = 'CanvasException';
	}
}
const canvas = document.getElementById('canvas');
if (canvas == null) {
	throw new CanvasException('Linking an element with the id "canvas" failed');
}
const ctx = canvas.getContext('2d');

document.mouse = {
	x: 0,
	y: 0,
	key: 0,
};
document.gameObjects = [];

const mouse = document.mouse;
const gameObjects = document.gameObjects;

class GameObject {
	constructor(x, y, width, height, spriteSrc) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
	}
	get pos() {
		return {x: this.x, y: this.y};
	}
	set pos(value) {
		this.x = value[0];
		this.y = value[1];
	}
	onclick() {
		
	}
}

class PhysicalObject extends GameObject {
	constructor(x, y, width, height, mass, friction, bounciness, spriteSrc) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.mass = mass;
		this.friction = friction;
		this.bounciness = bounciness;
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
	}
}

function updateMouse(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
	mouse.key = event.which;
}

document.addEventListener('mousemove', function(event) {
	updateMouse(event);
});
document.addEventListener('mousedown', function(event) {
	updateMouse(event);
});
document.addEventListener('mouseup', function(event) {
	updateMouse(event);
});