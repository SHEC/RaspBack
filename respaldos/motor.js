var Cylon = require ('cylon');

Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi' , port: '/dev/ttyACM0' }	
	},

	devices: {
		motor: { driver: 'motor' , pin: 13 }
	},

	work: function(my){
		my.motor.speed(255);
		after((15).seconds(), function(){
			my.motor.stop();
		});
	}
}).start();
