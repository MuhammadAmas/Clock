// Analog Clock
function analogClockTime(){
    let dateTime = new Date();
    let hours = dateTime.getHours() * 30;
    let minutes = dateTime.getMinutes()*6;
    let seconds =  dateTime.getSeconds()*6;

    const hr = document.querySelector('.hr');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');

    hr.style.transform = `rotateZ(${(hours)+ (minutes/12)}deg)`;
    min.style.transform = `rotateZ(${(minutes)}deg)`;
    sec.style.transform = `rotateZ(${(seconds)}deg)`;
}
setInterval(analogClockTime, 1000);





//Digital Clock
function time() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds =  dateTime.getSeconds();
    let meridian = 'AM';
    let day = dateTime.getDay();
    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();

    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayArr = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday']
    if(hours >= 12){
        hours = hours-12;
        meridian = 'PM';
    }
    
    hours = (hours <10)?"0" + hours:hours;
    minutes = (minutes <10)?"0" + minutes:minutes;
    seconds = (seconds <10)?"0" + seconds:seconds;

    let presentTime = `${hours}: ${minutes}: ${seconds} ${(meridian)}`;
    let presentDay = `${dayArr[day]}`;
    let presentDate = `${date} ${monthArr[month]} ${year}`
   

    document.getElementById('display-clock').innerText = presentTime;
    document.getElementById('present-day').innerText = presentDay;
    document.getElementById('date').innerText = presentDate;
}
setInterval(time,1000);




