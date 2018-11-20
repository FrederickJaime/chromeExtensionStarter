
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

  
  

  let myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    let d = new Date();
    document.querySelector('.tic-toc').innerHTML = d.toLocaleTimeString();
    
  }

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

  let distributeFields = function() {
    let radius = 150;
    let totalItems = 60;

    let fields = document.querySelectorAll('.calander--clock_second');
    let container = document.querySelector('.calander--clock_second-holder');

    let deg = 0;
    let width = radius*2, height = radius*2,
        angle = 0, step = (2*Math.PI) / fields.length;


 

    Array.prototype.forEach.call(fields, function(el, i){
      let x = Math.round(width/2 + radius * Math.cos(angle) - el.offsetWidth/2);
      let y = Math.round(height/2 + radius * Math.sin(angle) - el.offsetHeight/2);

      el.style.top = x+'px';
      el.style.left = y+'px';
      el.style.transform = 'rotate('+(-deg)+'deg)';


      angle += step;
      deg += 360/totalItems;
    });

}

  let createClock = function() {

    for( var s = 1; s < 61 ; s++) {
      var secondMarker = document.createElement('div');
      secondMarker.className += 'calander--clock_second';

      document.querySelector('.calander--clock_second-holder').appendChild( secondMarker );

      if( s === 60){
        distributeFields();
      }

    }
    


  }


  // event listener for onready
  document.addEventListener('DOMContentLoaded', function(){ 
    

    createClock();
    textSplit( monthAbrev[0], '.calander--month', 'calander--month_letter');
    textSplit( date, '.calander--date', 'calander--date_number');
    textSplit( day, '.calander--day', 'calander--day_number')

  }, false);
  

})();





