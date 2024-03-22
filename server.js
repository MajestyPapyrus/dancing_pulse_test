const { exec } = require('child_process');


setInterval(function(){
	console.log((new Date()))
	exec('cd ~/dancing_pulse_test ; git add . ; git commit -m "msg"; git pull; git push; ', (err, stdout, stderr) => {
  		if (err) {
    			console.log(err);
    			return;
  		}
		console.log(`stdout: ${stdout}`);
 		console.log(`stderr: ${stderr}`);
	});
}, 5000);