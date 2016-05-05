var Cylon = require("cylon");
var randomInt = function(n, m){
	return Math.floor(Math.random() * (n-m +1) + m);
};

Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi' }
  	},

  	devices: {
    	led: { driver: 'led', pin: 11 },
		sensor: { driver: 'button', pin: 7 }
	},

  	work: function(my) {
			var v = 1;
			if(v == 1)
			{
				console.log("UNO");
				var cont = 1;
				my.sensor.on('push', function(){
					console.log(cont);
					cont++;
					my.led.turnOn();
					if((cont % 10) == 0)
						my.led.turnOff();
				});
			}else{
				console.log("CERO");
			}
		}
	
}).start();

