
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

(function setCalendarImage() {
  const today = new Date();
  let month = today.getMonth() + 1; // January is 0

  if (month < 10) {
    month = `0${month}`; 
  }

  const fullMonth = getFullMonth(month);
  const capitalizedMonth = `${fullMonth.charAt(0).toUpperCase()}${fullMonth.slice(1)}`;
  const html = document.documentElement;

  document.title = `New Tab: ${capitalizedMonth}`;
  html.style.backgroundImage = `url(/static/${fullMonth}.jpg)`;


  let myVar = setInterval(function() {
    myTimer();
  }, 1000);
  
  function myTimer() {
    let d = new Date();
    document.querySelector('.tic-toc').innerHTML = d.toLocaleTimeString();
  }

})();

