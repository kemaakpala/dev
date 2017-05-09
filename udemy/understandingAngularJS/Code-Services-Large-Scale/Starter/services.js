// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){
    this.GetWeather = function(city, days){
        var weatherAPI = $resource(
        "http://api.openweathermap.org/data/2.5/forecast/daily?appid=b5ff215390d616d0015ef8cdbceabe47", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
        
        return weatherAPI.get({ q: city, cnt: days });
        
    };
}]);