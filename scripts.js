
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
      fullMonth = 'monday';
      break;
    case 2:
      fullMonth = 'tuesday';
      break;
    case 3:
      fullMonth = 'wednesday';
      break;
    case 4:
      fullMonth = 'thursday';
      break;
    case 5:
      fullMonth = 'friday';
      break;
    case 6:
      fullMonth = 'saturday';
      break;
    case 7:
      fullMonth = 'sunday';
      break;
    default:
      fullMonth= 'monday';
  }

  return theDay;
}


(function setCalendarImage() {
  const today = new Date();
  let month = today.getMonth() + 1; // January is 0
  let date = String(today.getDate());
  let day = today.getDay() + 1;

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
      newSpan.appendChild(newContent);
      // append span to selected partent
      document.querySelector(appendingTo).appendChild(newSpan);
    
    }

  }


  // event listener for onready
  document.addEventListener('DOMContentLoaded', function(){ 

    textSplit( monthAbrev[0], '.calander--month', 'calander--month_letter');
    textSplit( date, '.calander--date', 'calander--date_number');
    //calMonth();

  }, false);
  

})();





