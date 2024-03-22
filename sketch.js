
let pulse;
let spo2;



setInterval(function(){
    fetch("output.txt",  {cache: "no-store"})
    .then(function(data){
        return data.text();
    })
    .then(function(text){
        let splittedData = text.split(" ");
        pulse = parseInt(splittedData[0]);
        spo2 = parseInt(splittedData[1]);
        document.querySelector("#dropZone").innerText = pulse;
    })
}, 5000)