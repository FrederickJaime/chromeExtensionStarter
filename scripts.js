
function getFullMonth(month) {
  let fullMonth;

  switch(month) {
    case 1:
      fullMonth = 'january';
      break;
    case 2:
      fullMonth = 'february';
      break;
    case 3:
      fullMonth = 'march';
      break;
    case 4:
      fullMonth = 'april';
      break;
    case 5:
      fullMonth = 'may';
      break;
    case 6:
      fullMonth = 'june';
      break;
    case 7:
      fullMonth = 'july';
      break;
    case 8:
      fullMonth = 'august';
      break;
    case 9:
      fullMonth = 'september';
      break;
    case 10:
      fullMonth = 'october';
      break;
    case 11:
      fullMonth = 'november';
      break;
    case 12:
      fullMonth = 'december';
      break;
    default:
      fullMonth= 'september';
  }

  return fullMonth;
}

function getTheDay(day) {
  let theDay;
  
  switch(day) {
    case 1:
      theDay = 'sunday';
      break;
    case 2:
      theDay = 'monday';
      break;
    case 3:
      theDay = 'tuesday';
      break;
    case 4:
      theDay= 'wednesday';
      break;
    case 5:
      theDay = 'thursday';
      break;
    case 6:
      theDay = 'friday';
      break;
    case 7:
      theDay = 'saturday';
      break;

    default:
      theDay = 'monday';
  }

  return theDay;
}


(function setCalendarImage() {
  const today = new Date();
  let month = today.getMonth() + 1; // January is 0
  let date = today.getDate() < 10 ? "0"+String(today.getDate()) : String(today.getDate()) ;
  let day = getTheDay(today.getDay() + 1);
  

  if (month < 10) {
    month = `0${month}`; 
  }

  const fullMonth = getFullMonth(month);
  const capitalizedMonth = `${fullMonth.charAt(0).toUpperCase()}${fullMonth.slice(1)}`;
  const html = document.documentElement;
  //RegEx
  const firstThreeLetterRegex = /^(\w{3})/g;
  
  let monthAbrev = capitalizedMonth.match(firstThreeLetterRegex);




  document.title = `New Tab: ${capitalizedMonth}`;
  html.style.backgroundImage = `url(/static/${fullMonth}.jpg)`;

  

  //
  // function to append items as individual items
  // this is for strings
  // * array items need to be strings
  //
  let textSplit = function( array , appendingTo , classname ) {

    for( var i = 0; i < array.length ; i++) {
      // creating span
      var newSpan = document.createElement('span');
      // creating textnode
      var newContent = document.createTextNode(array[i]);
      // add class
      newSpan.className += classname;
      // append textnode into span
      newSpan.appendChild( newContent );
      // append span to selected partent
      document.querySelector( appendingTo ).appendChild( newSpan );
    
    }

  }
  //
  // creates second markers in a circle 
  //
  let createSeconds = function() {
    let radius = 150;
    let totalItems = 60;
    let secondsMarker = document.querySelectorAll('.calander--clock_second');
    let deg = 0;
    let width = radius*2;
    let height = radius*2;
    let angle = 0;
    let step = (2*Math.PI) / secondsMarker.length;

 

    Array.prototype.forEach.call(secondsMarker, function(el, i){
      let x = Math.round(width/2 + radius * Math.cos(angle) - el.offsetWidth/2);
      let y = Math.round(height/2 + radius * Math.sin(angle) - el.offsetHeight/2);

      el.style.top = x+'px';
      el.style.left = y+'px';
      el.style.transform = 'rotate('+(-deg)+'deg)';


      angle += step;
      deg += 360/totalItems;
    });

  }

  //
  //
  //
  let setClockTime = function() {
    
    // clock hand variables
    let secondHand = document.querySelector('.calander--clock_seconds');
    let minuteHand = document.querySelector('.calander--clock_minutes');
    let hourHand = document.querySelector('.calander--clock_hours');

    let updateClock = function( hours, minutes, seconds ) {

      let hourDegrees = hours * 30;
      let minuteDegrees = minutes * 6;
      let secondDegrees = seconds * 6;

      //
      // setting clock hand degrees
      //
      secondHand.style.transform = 'rotate('+ ( secondDegrees - 0 )  +'deg)';
      minuteHand.style.transform = 'rotate('+ ( minuteDegrees - 0 ) +'deg)';
      hourHand.style.transform = 'rotate('+ ( hourDegrees - 0 )  +'deg)';

    }

    let setClockWithCurrentTime = function() {
      let date = new Date();
      let hours = ((date.getHours() + 11) % 12 + 1);
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      updateClock(hours, minutes, seconds);

    }


  

    setInterval(setClockWithCurrentTime, 1000);
    /*

    */
  }

  let createClock = function() {

    for( var s = 1; s < 61 ; s++) {
      var secondMarker = document.createElement('div');
      secondMarker.className += 'calander--clock_second';

      document.querySelector('.calander--clock_second-holder').appendChild( secondMarker );



      if( s === 60){
        createSeconds();
        setClockTime();
      }

    }
   


  }


    //
  //
  //
  let getDogInfo = function() {

    let dogInfo = new XMLHttpRequest();
    dogInfo.open('GET', './data/calander.json',true);

    let dogWrapper = document.querySelector('.calander--wrapper');
    let dogName = document.querySelector('.calander--dog_name');
    let dogAge = document.querySelector('.calander--dog_info-age');
    let dogBreed = document.querySelector('.calander--dog_info-breed');

    //
    // on load function for json
    //
    dogInfo.onload = function() {
      if (dogInfo.status >= 200 && dogInfo.status < 400) {
        // Success!
        var data = JSON.parse(dogInfo.responseText);

        for( let i in data.calander) {

          if(i == fullMonth) {

            dogWrapper.className += " "+data.calander[i][0].class;
            dogName.innerHTML = data.calander[i][0].name;
            dogAge.innerHTML = data.calander[i][0].age;
            dogBreed.innerHTML = data.calander[i][0].breed;

          }
          
        }

        
      } else {
        // We reached our target server, but it returned an error
    
      }
    }

    dogInfo.send();

  }



  // event listener for onready
  document.addEventListener('DOMContentLoaded', function(){ 
    

    createClock();
    textSplit( monthAbrev[0], '.calander--month', 'calander--month_letter');
    textSplit( date, '.calander--date', 'calander--date_number');
    textSplit( day, '.calander--day', 'calander--day_number')
    getDogInfo();

  }, false);
  

})();





