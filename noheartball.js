
class Ball { 
    constructor (positionX, positionY, col) { 
      this.x = positionX; 
      this.y = positionY; 
      this.v = globalV; 
      this.a = globalA; 
      this.r = globalR;
      this.c = col; 
      this.isVisible = true;
  
   } 
   
  display (){ 
     
    fill(this.c);
  
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2)
    if (this.isVisible) {
      fill(this.c);
      noStroke();
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
   }
  
  update (){
    let margin = 50;
    let influenceZone = 100;
  
    this.x += this.v;
    this.y += this.a;
  
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  
    this.v += random(-1, 1);
    this.a += random(-1, 1);
  
    this.y = this.y + this.v;
    this.v = this.v + this.a;
  
    if (this.y + this.r > height) {
        this.v = -0.01 * this.v ;
        this.y = height - this.r;
  
    }
    
    if (this.y - this.r < 0) {
        this.v = -.001 * this.v ;
        this.y = 0 + this.r;
    
    }
  
    if (this.x < margin + influenceZone) {
              this.v += (margin + influenceZone - this.x) / influenceZone;
          } else if (this.x > width - margin - influenceZone) {
              this.v -= (this.x - (width - margin - influenceZone)) / influenceZone;
          }
          if (this.y < margin + influenceZone) {
            this.a += (margin + influenceZone - this.y) / influenceZone;
        } else if (this.y > height - margin - influenceZone) {
            this.a -= (this.y - (height - margin - influenceZone)) / influenceZone;
        }
       
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.isVisible = false;
        } else {
          this.isVisible = true;
        }
    
      let doublePulse = sin(frameCount * (PI / 30) * (currentBPM / 80)) * sin(frameCount * (PI / 20) * (currentBPM / 60));
      this.r = 15 + doublePulse * 15; 
  }
  }