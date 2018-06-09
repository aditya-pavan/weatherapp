$('#getWeatherBtn').click(() => {
    $('.button-container').show();
    console.log('Button clicked');
    const cityName = $('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
        success: (data) => {
            console.log('In success callback');
            console.log(data);
            const currentTemp = Math.round(data.main.temp - 270);
            const currentPressure = data.main.pressure;
            const humidity = data.main.humidity;
            const description = data.weather["0"].description;
            const wind = data.wind.speed;
            const day = moment((data.dt)*1000).format('dddd');
            listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd'));
            //listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
            const icon = data.weather["0"].icon;
            var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            $('#wicon').attr('src', iconurl);
            $('#getTemperature').html(currentTemp);
            $('#getDescription').html(description);
            $('#getDay').html(day);
            $('#getHumidity').html(humidity);
            $('#getPressure').html(currentPressure);
            $('#getWind').html(wind);
            //$('table').show();
            //plotChart(listOfTemp, listOfDates);
        },
        error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });
    /*const plotChart = (tempArr, datesArr) => {
        //$('#chart-container').show();
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () { return this.value + '°'; }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr

            }]
        });
    }*/
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayNumber = d.getDay();
    for(i=dayNumber,j=0;j<7;i++,j++){
        if(i>6)
            i=i%7;
        var res = weekday[i];
        document.getElementById(j).innerHTML=res;
    }
})
