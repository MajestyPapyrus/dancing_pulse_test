let pulse;

setInterval(function(){
    fetch("output.txt",  {cache: "no-store"})
    .then(function(data){
        return data.text();
    })
    .then(function(text){
        let splittedData = text.split(" ");
        pulse = parseInt(splittedData[0]);
        document.getElementById("dropZone").innerText = pulse;

        // Use the real pulse value to influence the animation
        updateAnimationWithBPM(pulse);
    });
}, 5000);

function updateAnimationWithBPM(bpm) {
    // Use the bpm value to control the animation
    // This function should influence the properties of your "worms" or particles
    // similar to how it was done with the randomized BPM
}
