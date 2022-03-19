
window.addEventListener("load", () => {
    
    let lat;
    let long;
    const weatherInfo = document.getElementById("tempDeg");
    const cityTemp = document.getElementById("city");

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(long);
        const api = `http://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${long}&appid=cb4fae7e467c5dd233b2bb8ec8f04070`;
         
        // document.body.style.backgroundImage= 'URL("https://source.unsplash.com/1600x900/?GET /photos/random")' ;
        fetch(api)
        .then( response =>{
            return response.json();
        })
        .then( data => {
           
            const{temp} = data.main;
            const{name} = data;
            weatherInfo.textContent = temp + "° C";
            cityTemp.textContent = name;
        })
    })
    
    }
    
})




    function weather(){
        const weatherInfo = document.getElementById("tempDeg");
        const cityTemp = document.getElementById("city");
        let name1= document.getElementById("cityname").value;
        document.body.style.backgroundImage= 'URL("https://source.unsplash.com/1600x900/?'+ name1 +'")' ;
        
         
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${name1}&units=metric&appid=cb4fae7e467c5dd233b2bb8ec8f04070`;
        fetch(api)
            .then( response =>{
                return response.json();
            })
            .then( data => {
                const{temp} = data.main;
                const{name} = data;
                weatherInfo.textContent = temp + "° C";
                cityTemp.textContent = name;
            })
    }
    
