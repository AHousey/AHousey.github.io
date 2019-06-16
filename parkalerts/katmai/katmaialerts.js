$.getJSON("https://developer.nps.gov/api/v1/alerts?parkCode=Katm&stateCode=ak&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var alerttitle= info.data[0].title;
     var alertinfo= info.data[0].description;
        
     $('.alerttitle').append(alerttitle);
     $('.alertinfo').append(alertinfo);
    }
 );