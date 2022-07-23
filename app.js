
function time() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds =  dateTime.getSeconds();
    let meridian = 'AM';
    let day = dateTime.getDay();
    let dayArr = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday']
    if(hours >= 12){
        hours = hours-12;
        meridian = 'PM';
    }
    
    hours = (hours <10)?"0" + hours:hours;
    minutes = (minutes <10)?"0" + minutes:minutes;
    seconds = (seconds <10)?"0" + seconds:seconds;

    let presentTime = `${hours}: ${minutes}: ${seconds} ${(meridian)}`;
    let presentDay = `${dayArr[day]}`

    document.getElementById('display-clock').innerText = presentTime;
    document.getElementById('present-day').innerText = presentDay;
}
setInterval(time,1000);

// time();


