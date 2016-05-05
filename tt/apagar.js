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
		pRig: { driver: 'direct-pin', pin: 13 }, // (Num 6 J8) Jumper Verde de la placa
		pLef: { driver: 'direct-pin', pin: 11 }, // (Num 7 J8) Jumper Azul de la placa
		pEna: { driver: 'direct-pin', pin: 15 }, // Enable (Num 8 J8)
		pLed: { driver: 'led', pin: 16}, // Led (Num 8 contra J8)
		pSen: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
	},                                                                                                   

	work: function(my){

		my.pLed.turnOff();
		my.pEna.digitalWrite(0);
		after((1).second(), function() {
			process.exit();
		});
		
	}
}).start();

