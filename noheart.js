
let loadingScreen;
let globalV, globalA, globalR;
let bpmDisplay;
let tubes = [];
let triangles = [];
let currentBPM = 64; // Default BPM value
let baseHue;
let soulAge, karmicDebt;

const emotions = ["Happy", "Sad", "Excited", "Nervous", "Calm", "Thoughtful", "Energetic"];
 
function setup() { 
  loadingScreen = document.getElementById('loading-screen');
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB);
  
  soulAge = getSoulAge(); 
  karmicDebt = getKarmicDebt();
  
  globalV = random(-50, -30);
  globalA = random(-30,30);
  globalR = random(6, 15);
  
  currentEmotion = random(emotions);

  baseHue = random(0, 360);
  soulColorName = getColorNameFromHue(baseHue);
  document.getElementById('soul-color-value').innerText = soulColorName;


  document.getElementById('emotion-value').innerText = currentEmotion;
  document.getElementById('soul-age-value').innerText = soulAge;
  document.getElementById('karmic-debt-value').innerText = karmicDebt;

  bpmDisplay = document.getElementById('bpm-display');

  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length));
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length));
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length));
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length)); 
  tubes.push(new Tube(tubes.length));
  
  
  baseHue = random(0, 360); 


  setTimeout(() => {
    loadingScreen.style.display = 'none';
    startAnimation(); 
  }, 20000);
  


  const colorTheme = color(random(255), random(255), random(255)); 

 
  for (let i = 0; i < 20; i++) {
    triangles.push(new Triangle(random(width), random(height), colorTheme));
  }

  updateBPM();
  updateLoadingScreen();
}

function draw() { 

  clear();
  
  background(220, 60, 30);
    triangles.forEach(triangle => {
      triangle.update();
      triangle.display();
    });

    tubes.forEach(function(tube) { 
      tube.display(); tube.update(); 
  });
}

function startAnimation() {
  createCanvas(windowWidth, windowHeight);
  let canvasElement = document.querySelector('canvas');
  canvasElement.style.opacity = 1;
  
}

function updateBPM() { 
  baseHue = random(0, 360);
  soulColorName = getColorNameFromHue(baseHue);

  currentBPM = Math.floor(Math.random() * (110 - 64 + 1)) + 64; 
  document.getElementById('heartbeat-value').innerText = currentBPM;
  document.getElementById('soul-color-value').innerText = soulColorName;
  document.getElementById('heartbeat-value').innerText = currentBPM;
}

setInterval(updateBPM, 2000);

function getColorNameFromHue(hue) {
  
  const colors = [
    { name: "Red", range: [345, 360], range2: [0, 15] },
    { name: "Orange", range: [15, 45] },
    { name: "Yellow", range: [45, 75] },
    { name: "Green", range: [75, 135] },
    { name: "Blue", range: [135, 260] },
    { name: "Purple", range: [260, 290] },
    { name: "Pink", range: [290, 345] }
  ];

  for (let color of colors) {
    if ((hue >= color.range[0] && hue <= color.range[1]) || (color.range2 && hue >= color.range2[0] && hue <= color.range2[1])) {
      return color.name;
    }
  }

  return "Unknown";
}

function getSoulAge() {
  
  return Math.floor(random(100, 1000)) + " years";
}


function getKarmicDebt() {
  
  return Math.floor(random(0, 100));
}

const analysisMessages = [
  "Extracting your pulse...",
  "Extracting soul data...",
  "Computing emotional spectrum...",
  "Calibrating aura vision...",
  "Finalizing analysis..."
];

const tips = [
  "Tip: The color of your aura can reflect your emotional state.",
  "Tip: A calm mind often has a blue or green aura.",
  "Tip: Strong emotions can temporarily change your aura color.",
  "Tip: Meditation can help in cleansing your aura."
];

let analysisIndex = 0;
let tipsIndex = 0;

function updateLoadingScreen() {

  if (analysisIndex < analysisMessages.length) {
    document.getElementById('loading-messages').innerText = analysisMessages[analysisIndex++];
    document.getElementById('loading-tips').innerText = tips[tipsIndex++ % tips.length];
  } else {
    
    clearInterval(loadingInterval); 
    loadingScreen.style.display = 'none';
    startAnimation();
  }
}

let loadingInterval = setInterval(updateLoadingScreen, 3000);

updateLoadingScreen();

function saveCanvas() {
  saveCanvas('your_canvas', 'png'); 
}

document.getElementById('save').addEventListener('click', saveCanvas);