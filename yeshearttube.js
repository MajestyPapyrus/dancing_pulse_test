class Tube {
    constructor (id) {
      this.boules = [];
      this.id = id;
    }
    
    display () {
        if (currentBPM === 0) {
            return;
        }
      this.boules.forEach(function(boulette) {
        boulette.display();
        boulette.update();
      });
    }
  
    update() {   
      
      let x = noise(this.id, 1, frameCount / 200) * width;
      let y = noise(this.id, 2, frameCount / 200) * height;
      
      
      
      let hueVariation = random(-80, 80); 
      let wormHue = (baseHue + hueVariation) % 360; 
      let col = color(wormHue, 255, 255); 
  
      this.boules.push(new Ball(x, y, col));
  
      if (this.boules.length > 5) {
        this.boules.shift();
      }
    }
  }
  