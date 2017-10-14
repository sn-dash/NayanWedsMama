
    var endtime = 'November 19 2017 18:59:59 GMT+0200';
        function updateClock(){
            var t = getTimeRemaining(endtime);
            document.getElementById('timerDay').innerHTML = t.days;
            document.getElementById('timerHour').innerHTML = t.hours;

            if(t.total<=0){
                clearInterval(timeinterval);
            }
        }

        function getTimeRemaining(endtime){
            var t = Date.parse(endtime) - Date.parse(new Date());
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );
            return {
                'total': t,
                'days': days,
                'hours': hours
            };
        }