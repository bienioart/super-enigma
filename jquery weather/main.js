$(function () {
            let long;
            let lat;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    lat = position.coords.latitude;
                    long = position.coords.longitude;

                    const api = `https://api.darksky.net/forecast/a3bdcae9e4b15fee85fa83e696c78e05/${lat},${long}`;

                    
                fetch(api)
                .then(response => {
                    return response.json();
                })

                .then(data => {
                console.log(data);
            })


                })






}});