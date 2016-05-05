var Cylon = require ('cylon');

Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi', port: 'dev/ttyACM0'}
	},

	devices: {
		pin1: { driver: 'direct-pin', pin: 12 }, // (Num 6 contra J8) Jumper Verde de la placa PWM
		pin2: { driver: 'direct-pin', pin: 15 }, // (Num 8 J8) Jumper Azul de la placa PWM
		pin3: { driver: 'direct-pin', pin: 13 }, // Enable (Num 7 J8)
	},
	
	work: function(my){
		
		my.pin3.digitalWrite(1);

		my.pin1.pwmWrite(0.03);
		my.pin2.pwmWrite(0);

		after((5).second(), function() {
			my.pin3.digitalWrite(0);
		});
	}

}).start();
