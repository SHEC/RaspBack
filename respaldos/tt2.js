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
		pin1: { driver: 'direct-pin', pin: 11 }, // (Num 6 J8) Jumper Verde de la placa
		pin2: { driver: 'direct-pin', pin: 13 }, // (Num 7 J8) Jumper Azul de la placa
		pin3: { driver: 'direct-pin', pin: 15 }, // Enable (Num 8 J8)
		led1: { driver: 'led', pin: 16}, // Led (Num 8 contra J8)
		but1: { driver: 'button', pin: 18 } // Sensor (Num 9 contra J8)
	},

	work: function(my){

		//Funciones de Giro
		var ran = 0;

		var bajar = function(){
			my.pin1.digitalWrite(1);
			my.pin2.digitalWrite(0);
			my.pin3.digitalWrite(1);
			return console.log("Bajar");
		};

		var subir = function(){
			my.pin1.digitalWrite(0);
			my.pin2.digitalWrite(1);
			my.pin3.digitalWrite(1);	
			return console.log("Subir");
		};

		var apagar = function(){
			my.pin3.digitalWrite(0);
			console.log("Apagar");
		};

		//Fin Funciones de Giro
		
		//Validaciones de Giro
		if (ran == 0){ //Subir == 0
			subir();
			var cont = 0;
			my.but1.on('push', function(){
				cont++;
				console.log(cont);
				my.led1.turnOn();
				if(cont == 32){
					my.led1.turnOff();
					my.pin3.digitalWrite(0);
				}
			});
		}
		else if (ran == 1){ //Bajar == 1
			bajar();
			var cont = 0; 
			my.but1.on('push', function(){
				cont++;
				console.log(cont);
				my.led1.turnOn();
				if(cont == 32){
					my.led1.turnOff();
					my.pin3.digitalWrite(0);		
				}
			});
		}
		else{ //Apagar == 2
			apagar();
		}
	}
}).start();


