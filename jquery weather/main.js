let temperatureDegree = $('h1.temperature-degree');
let temperatureDescription = $('div.temperature-description');
let zone = $('h1.location-timezone');

$(function () {
            let long;
            let lat;
        

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    
                    const proxy = `https://cors-anywhere.herokuapp.com/`; 
                    // cors error fix problem
                    const api = `${proxy}https://api.darksky.net/forecast/a3bdcae9e4b15fee85fa83e696c78e05/${lat},${long}`;

                    
                fetch(api)
                .then(response => {
                    return response.json();
                })

                .then(data => {
                console.log(data);
                const { temperature, summary } = data.currently;
                temperatureDegree.text(Math.floor(temperature) + " F");
                temperatureDescription.text(summary);
                const timezone = data.timezone;
                zone.text(timezone);

                temperatureDegree.on('click', celcius => {
                    temperatureDegree.text((Math.floor(5 / 9 * (temperature) - 32 ))+ " C");
                    
                })


            })


                })






}});