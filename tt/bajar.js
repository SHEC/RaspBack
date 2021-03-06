// 5V (Num 1 contra J8) || 3.3V (Num 1 J8) || GND (Num 3 contra J8)
/***********************************************************/
//
//
//
// 			EJECUTAR EL PROGRAMA EN SUPER USUARIO
//
//
//
/***********************************************************/
var Cylon = require ('cylon');

Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi' }
	},

	devices: {
		pRig: { driver: 'direct-pin', pin: 13 }, // (Num 6 contra J8) Jumper Verde de la placa ***PWM***
		pLef: { driver: 'direct-pin', pin: 15 }, // (Num 8 J8) Jumper Azul de la placa ***PWM*** 15
		pEna: { driver: 'direct-pin', pin: 11 }, // Enable (Num 6 J8)
		pLed: { driver: 'led', pin: 16 }, // Led (Num 8 contra J8)
		pSen: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
	},                                                                                                   

	work: function(my){

		var bajar = function(){
			my.pRig.pwmWrite(0);	//0 Baja
			my.pLef.pwmWrite(0.02);	//1 Baja
			my.pEna.digitalWrite(1);
			return console.log("Bajar");
		};

		//Validaciones de Giro
		bajar();
		var c = 0;
		my.pSen.on('release', function(){
			c++;
			console.log(c);
			my.pLed.turnOn();
			if(c == 25){
				my.pLed.turnOff();
				my.pEna.digitalWrite(0);
				after((1).second(), function() {
				  	process.exit();
				});
			}
		});
		//Fin Validaciones de Giro
	}
}).start();
