function currenTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';


    if(hour == 0){
        hour = 12;
    }    

    if (hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    let time = hour + ':' + min + ':' + sec + '' + session;

    document.getElementById("clock").innerHTML = time;

    let t = setTimeout(function(){currenTime()}, 1000);
    }

    currenTime();
    
    function myFunction(){
        alert("working")
        // let element= document.body;
        // element.classList.toggle("dark");
    }

    

    
    
    




    
