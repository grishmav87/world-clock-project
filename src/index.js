function updateTime(){
    let perthElement=document.querySelector("#perth");
    let kolkataElement=document.querySelector("#kolkata");
    let amsterdamElement=document.querySelector("#amsterdam");
    let paramariboElement=document.querySelector("#paramaribo");
if(perthElement){
    let perthDateElement=perthElement.querySelector(".date");
    let perthTimeElement=perthElement.querySelector(".time");
    let perthTime=moment().tz("Australia/Perth");

    perthDateElement.innerHTML=perthTime.format("MMMM Do YYYY");
    perthTimeElement.innerHTML=perthTime.format("h:mm:ss [<small>]A[<small>]");
}
if(kolkataElement){
    let kolkataDateElement= kolkataElement.querySelector(".date");
    let kolkataTimeElement= kolkataElement.querySelector(".time");
    let kolkataTime=moment().tz("Asia/Kolkata");

    kolkataDateElement.innerHTML=kolkataTime.format("MMMM Do YYYY");
    kolkataTimeElement.innerHTML=kolkataTime.format("h:mm:ss [<small>]A[<small>]");
}
if (amsterdamElement){
    let amsterdamDateElement=amsterdamElement.querySelector(".date");
    let amsterdamTimeElement= amsterdamElement.querySelector(".time");
    let amsterdamTime=moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML=amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML=amsterdamTime.format("h:mm:ss [<small>]A[<small>]");
}
if (paramariboElement){
    let paramariboDateElement=paramariboElement.querySelector(".date");
    let paramariboTimeElement= paramariboElement.querySelector(".time");
    let paramariboTime=moment().tz("America/Paramaribo");

    paramariboDateElement.innerHTML=paramariboTime.format("MMMM Do YYYY");
    paramariboTimeElement.innerHTML=paramariboTime.format("h:mm:ss [<small>]A[<small>]");
}
}
updateTime();
setInterval(updateTime,1000)