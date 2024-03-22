class Triangle {
    constructor(positionX, positionY, colorTheme) {
      this.x = positionX;
      this.y = positionY;
      this.v = random(-10, 20); 
      this.a = random(-10, 10); 
      this.size = random(5, 30); 
      this.c = colorTheme; 
      this.baseSize = random(5, 30); 
      this.sizePulse = 2;
    }
  
    display() {
      push();
      translate(this.x, this.y);
      rotate(frameCount / 10.0);
      fill(this.c);

      let triangleSize = this.baseSize + this.sizePulse;

      triangle(0, -this.size, this.size, this.size, -this.size, this.size);
      pop();
    }
  
    update() {
      this.v += random(-1, 1);
      this.a += random(-0.05, 0.05);
  
      this.v = constrain(this.v, -10, 20);
      this.a = constrain(this.a, -10, 10);
  
      this.x += this.v;
      this.y += this.a;
  
      if (this.x > width) this.x = 0;
      if (this.x < 0) this.x = width;
      if (this.y > height) this.y = 0;
      if (this.y < 0) this.y = height;

      let trianglePulse = sin(frameCount * (PI / 30) * (currentBPM / 80)) * sin(frameCount * (PI / 20) * (currentBPM / 60));
    this.sizePulse = trianglePulse * 15; 
    }
  }
  