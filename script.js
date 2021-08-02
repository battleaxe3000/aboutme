var dayOfTheWeek = new Date().getDay();

switch(dayOfTheWeek) {
  case 0:
    dayOfTheWeek = "Sunday";
    break;
  case 1:
    dayOfTheWeek = "Monday";
    break;
  case 2:
    dayOfTheWeek = "Tuesday";
    break;
  case 3:
    dayOfTheWeek = "Wednsday";
    break;
  case 4:
    dayOfTheWeek = "Thursday";
    break;
  case 5:
    dayOfTheWeek = "Friday";
    break;
  case 6:
    dayOfTheWeek = "Saturday";
    break;
    default:
    console.log("Error");

}

console.log(dayOfTheWeek);
document.getElementById("welcomeText").innerHTML = "Welcome! Today is " + dayOfTheWeek;