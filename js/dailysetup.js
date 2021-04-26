$(document).ready(function(){
    var profile ='dailysetuptech'
    const url = 'https://instagram28.p.rapidapi.com/user_info?user_name='+ profile;
    const xrapidapihost = 'instagram28.p.rapidapi.com';


    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": xrapidapikey,
            "x-rapidapi-host": xrapidapihost
        }
    })
    .then(response => response.json())
    .then(data=> 
        console.log(data))
    .catch(err => {
        console.error(err);
    });

    $(".logos").click(function(){
        link=$(this).attr("href");
        window.open(link,"link" );

        //return false;
    });

});