$(document).ready(function(){
   
    

    $(".fetch").click(function(){
        console.log("FetchDataExecuted");
        fetchData();
    });

    $(".logos").click(function(){
        link=$(this).attr("href");
        window.open(link,"link" );
    
        //return false;
    });
    
});

function fetchData(){

    var profile = ['dailysetuptech', 'tech4gaming', 'thedreamsetup'] ;
    for (var i = 0; i < 3; i++) {
        
        //const url = 'https://reqres.in/api/users?page=2';
        const url = 'https://instagram28.p.rapidapi.com/user_info?user_name='+ profile[i];
        const xrapidapihost = 'instagram28.p.rapidapi.com';
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": xrapidapikey,
                "x-rapidapi-host": xrapidapihost
            }
        })
        .then(response => response.json())
        .then(data=> {
            console.log(data.data.user);
            const html = `<h1> <a href="https://www.instagram.com/${data.data.user.username}">${data.data.user.full_name}</a></h1> <p><iframe frameborder="0" style="height: 320px; overflow:scroll; width: 100%" marginheight="1" marginwidth="1" name="cboxmain" id="cboxmain" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" src="${data.data.user.profile_pic_url_hd}"/></iframe></p> `;
            document.querySelector('#recommended')
            .insertAdjacentHTML("afterbegin", html);
        })
        .catch(err => {
            console.error(err);
        });
    }
    
    
    

}
