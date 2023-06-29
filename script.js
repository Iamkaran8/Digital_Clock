function displayTime(){
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var min = Zero(dateTime.getMinutes());
    var sec = Zero(dateTime.getSeconds());
    document.getElementById('hour').innerHTML = hour;
    if(hour>12){
        hour = hour-12;
        document.getElementById('am').innerHTML = "PM"
    }
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}
function Zero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,100)

