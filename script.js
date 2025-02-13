let sunStrength = 0; //as the greenhouse adjusts to sunlight throughout the day, maybe I'll do something with math.random to simulate this.
let temperatureStatus = 0; //effected in conjunction with the sunStrength variable
let windowStatus = false;
let heaterStatus = false;
let sprinklerStatus = false;
let fanStatus = false;
let sunTimer = 0;

function hotSim2(){
//______________________________________(Timer)____________________________________________________________
sunTimer++;
//console.log(sunTimer); //-- Greenhouse Timer
console.log(sunStrength); // Correct value for temperature 
document.getElementById("sunPercent").style.height = (sunStrength * 6) + "px"; //So the bar looks bigger 
document.getElementById("sunPercent").innerHTML = sunStrength; //Temperature number change

if (sunTimer <= 24){ //-- 24 represents 24 hours
  setTimeout(hotSim2, 750); //Makes looping repetion with how long between
  document.getElementById("timeNumber").innerHTML = sunTimer;
  document.getElementById("inputButton4").innerHTML = "Started";
  document.getElementById("inputButton4").style.backgroundColor = "green";
  document.getElementById("inputButton4").onclick = sunTimer; //-- Press Hot Button only once
} else if(sunTimer >= 24){
  document.getElementById("inputButton4").innerHTML = "Simulation Ended";
  alert("Simulation End");
  location.reload();
}
//______________________________________(Temperature Changing Statistics)__________________________________
if(sunStrength < 35) {
  sunStrength += 9; //Correct Value for temperature (checked)
} 
if(sunStrength >= 17){
  sunStrength -= 3;
}
if(sunStrength >= 10){
  document.getElementById("plant").style.height = 10 + "%"
}
if(sunStrength >= 15){
  document.getElementById("plant").style.height = 20 + "%"
}
if(sunStrength >=22){
  document.getElementById("plant").style.height = 30 + "%"
  document.getElementById("plant2").style.opacity = 100 + "%"
}
if(sunStrength <=22){
  document.getElementById("plant2").style.opacity = 0 + "%"
}

//_______________________________________(Button Changing Statistics)______________________________________
if(sunStrength < 15){
  windowStatus == true;
  document.getElementById("windowButton").style.backgroundColor = "green";
  document.getElementById("window").style.opacity = 100 + "%"
  sunStrength += 3;
}
  else{
    windowStatus == false;
    document.getElementById("windowButton").style.backgroundColor = "white";
    document.getElementById("window").style.opacity = 0 + "%"
    sunStrength -= 3;
  }
if(sunStrength <= 13){
  heaterStatus == true;
  document.getElementById("heaterButton").style.backgroundColor = "green";
  document.getElementById("heater").style.opacity = 100 + "%"
  sunStrength += 8;
}  else{
    heaterStatus == false;
    document.getElementById("heaterButton").style.backgroundColor = "white";
    document.getElementById("heater").style.opacity = 0 + "%"
    sunStrength -=1;
  }
if(sunStrength >= 25){
  fanStatus == true;
  document.getElementById("fanButton").style.backgroundColor = "green";
  document.getElementById("fan").style.opacity = 20 + "%"
  sunStrength -=20;
  }
  else{
    fanStatus == false;
    document.getElementById("fanButton").style.backgroundColor = "white";
    document.getElementById("fan").style.opacity = 0 + "%"
    sunStrength +=3;
  }
if(sunStrength >= 19){
  sprinklerStatus == true;
  document.getElementById("sprinklerButton").style.backgroundColor = "green";
  document.getElementById("sprinkler").style.opacity = 20 + "%"
  sunStrength-= 3;
  }
  else{
    sprinklerStatus == false;
    document.getElementById("sprinklerButton").style.backgroundColor = "white";
    document.getElementById("sprinkler").style.opacity = 0 + "%"
    sunStrength+= 0;
  }
}


// Window ------------------------------ //
function windowON() {
  windowStatus = !windowStatus;
  console.log(windowStatus);

  if(windowStatus == true){
    document.getElementById("windowButton").style.backgroundColor = "green";
    document.getElementById("window").style.opacity = 100 + "%"
    
    sunStrength++;
    //console.log(sunStrength); <----------- SEPERATE VALUE FROM AUTOMATION
    document.getElementById("sunPercent").innerHTML = sunStrength;
    document.getElementById("sunPercent").style.height = (sunStrength * 6)+ "px"; //<--------------- HERE TO CHANGE -----------------//
  }
  else{
    document.getElementById("windowButton").style.backgroundColor = "white";
    document.getElementById("window").style.opacity = 0 + "%"
  }
}

// Heater ------------------------------ //
function heaterON() {
  heaterStatus = !heaterStatus; 
  console.log(heaterStatus);

  if(heaterStatus == true){
    document.getElementById("heaterButton").style.backgroundColor = "green";
    document.getElementById("heater").style.opacity = 100 + "%"
    sunStrength+= 1;
    console.log(sunStrength);
    document.getElementById("sunPercent").innerHTML = sunStrength;
  }
  else{
    document.getElementById("heaterButton").style.backgroundColor = "white";
    document.getElementById("heater").style.opacity = 0 + "%"
  }
}

// Sprinkler ------------------------------ //
function sprinklerON() {
  sprinklerStatus = !sprinklerStatus;
  console.log(sprinklerStatus);

  if(sprinklerStatus == true){
    document.getElementById("sprinklerButton").style.backgroundColor = "green";
    document.getElementById("sprinkler").style.opacity = 20 + "%"
    sunStrength-= 3;
    console.log(sunStrength);
    document.getElementById("sunPercent").innerHTML = sunStrength;
  }
  else{
    document.getElementById("sprinklerButton").style.backgroundColor = "white";
    document.getElementById("sprinkler").style.opacity = 0 + "%"
  }
}

// fan ------------------------------ //
function fanON() {
 fanStatus = !fanStatus;
  console.log(fanStatus);

  if(fanStatus == true){
    document.getElementById("fanButton").style.backgroundColor = "green";
    document.getElementById("fan").style.opacity = 20 + "%"
    
    sunStrength-= 3;
    console.log(sunStrength);
    document.getElementById("sunPercent").innerHTML = sunStrength;
  }
  else{
    document.getElementById("fanButton").style.backgroundColor = "white";
    document.getElementById("fan").style.opacity = 0 + "%"
  }
}
