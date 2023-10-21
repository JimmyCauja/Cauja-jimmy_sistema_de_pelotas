class Pelota{
    constructor() {
        this.posX = random(50, windowWidth - 50);
        this.posY = random(10, 130);
        this.velX = random(-10, 10);
        this.velY = 0,0;
        this.acelY = 0.98;
        this.diam = int(random(5, 60));
        this.radio = this.diam / 2;
        this.colorin = color(50, random(53, 160), random(151, 250));

        print("Hola, estoy vive!");
    }
    update(_piso) {
        if (this.posY + this.radio <= _piso) {
            this.velY += this.acelY;
            this.posY += this.velY;
        } else {
            this.velY *= -1.0;
            this.posY += this.velY;
            this.colorin = color(50, random(53, 160), random(151, 250));
        }

        if (this.posX > windowWidth) {
			this.velX *= -1;
		}
		if (this.posX < 35) {
			this.velX *= -1;
		}
		this.posX += this.velX;
    }

    display() {
        fill(this.colorin);
        circle(this.posX, this.posY, this.diam);
    }
}