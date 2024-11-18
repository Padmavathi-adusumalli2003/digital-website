console.log(Date());

function fun(){
    var date=new Date()
    var hh=date.getHours();
    var mm=date.getMinutes();
    var sec=date.getSeconds();

    var dd=date.getDate();
    var m=date.getMonth();
    var yy=date.getFullYear();

    var fullDay=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var d=date.getDay();
    var day=fullDay[d]
    console.log(day);

    var fullMonth=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    month=fullMonth[mm];


    document.querySelector("#hour").innerHTML=`${hh}:${mm}:${sec}:${pm_am}`;
    document.querySelector("#date").innerHTML=`${dd}/${m}/${yy}`;
    document.querySelector("#day").innerHTML=`${day}`;


    var pm_am="AM";
    if(hh>12){
        am_pm="PM";
        hh-=12
    }
    else if(hh==0){
        am_pm="AM";
        hh=12
        
    }

}
fun()
setInterval(fun,1000);

