// 5V (Num 1 contra J8) || 3.3V (Num 1 J8) || GND (Num 3 contra J8)

var Cylon = require ('cylon');

var randomInt = function(n, m){
	return Math.floor(Math.random() * (n - m + 1) + m);
};

Cylon.robot({
	connections: {
		raspi: { adaptor: 'raspi', port: '/dev/ttyACM0' }
	},

	devices: {
		pin1: { driver: 'direct-pin', pin: 11 }, // (Num 6 J8) Jumper Verde de la placa
		pin2: { driver: 'direct-pin', pin: 13 }, // (Num 7 J8) Jumper Azul de la placa
		pin3: { driver: 'direct-pin', pin: 15 }, //Enable (Num 8 J8)
		led1: { driver: 'led', pin: 18 }, //Led (Num 9 contra J8)
		but1: {driver: 'button', pin: 16 } //Sensor (Num 8 contra J8)
	},

	work: function(my){

		//Funciones de giro
		var ran = randomInt(2, 0);

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

		if (ran == 0){
			subir();
			var cont = 0; 
			my.but1.on('push', function(){
				cont++;
				console.log(cont);
				my.pin3.digitalWrite(1);
				my.led1.turnOn();
				if((cont%10) == 0){
					my.led1.turnOff();
					apagar();
				}
			});
		}
		else if (ran == 1){
			bajar();
			var cont = 0; 
			my.but1.on('push', function(){
				cont++;
				console.log(cont);
				my.pin3.digitalWrite(1);
				my.led1.turnOn();
				if((cont%10) == 0){
					my.led1.turnOff();
					apagar();
				}
			});
		}
		else{
			apagar();
		}

	// Fin funciones de giro

		/* PRUEBA 2 (SENSOR)
		var v = 1;
		bajar();
			if(v == 1)
			{
				console.log("UNO");
				var cont = 0; 
				my.button.on('push', function(){
					cont++;
					console.log(cont);
					my.pin3.digitalWrite(1);
					my.led.turnOn();
					if((cont%10) == 0){
						my.led.turnOff();
						apagar();
					}
				});
			}*/

		/*PRUEBA 1
		my.pin1.digitalWrite(1);
		my.pin2.digitalWrite(0);
		my.pin3.digitalWrite(1);
		after((5).second(), function(){
			my.pin1.digitalWrite(0);
			my.pin2.digitalWrite(1);
			my.pin3.digitalWrite(1);
			after((5).second(), function(){
				my.pin3.digitalWrite(0);				
			});			
		});*/
	}
}).start();
