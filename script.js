//Sensors
let plantGrowth = 0;
let temperature = 0;
let humidity = 0;
let soilWetness = 0;
let lightPower = 0;
let time = 1000;

//Activators/Adjustables
let lightSwitch = true;
let window = true;
let fan = false;
let waterValve = false;
let heater = false;



function lightFunction() {

if(lightSwitch == true){
    console.log("test");
    for (let i = 0; i <= 100; i++) { 
    console.log(i);
  }
}

if(lightSwitch == false){
    console.log("test");
    for (let i = 0; i >= 100; i--) { 
    console.log(i);
  }
}

}