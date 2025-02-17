function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function kilobs (){
    var kgs = document.getElementById("kilog").value;
    document.getElementById("pounds").value = (kgs * 2.2);
}

function kiles (){
    var km = document.getElementById("kilom").value;
    document.getElementById("miles").value = (km * 0.62137); 
}
