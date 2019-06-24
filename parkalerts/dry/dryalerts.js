$.getJSON("https://developer.nps.gov/api/v1/alerts?parkCode=drto&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var alerttitle= info.data[0].title;
     var alertinfo= info.data[0].description;

     var alerttitle2= info.data[1].title;
     var alertinfo2= info.data[1].description;




     $('.alerttitle').append(alerttitle);
     $('.alertinfo').append(alertinfo);

     $('.alerttitle2').append(alerttitle2);
     $('.alertinfo2').append(alertinfo2);


    }

);