$.getJSON("https://developer.nps.gov/api/v1/alerts?parkCode=ever&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var alerttitle= info.data[0].title;
     var alertinfo= info.data[0].description;

     var alerttitle2= info.data[1].title;
     var alertinfo2= info.data[1].description;

     var alerttitle3= info.data[2].title;
     var alertinfo3= info.data[2].description;

     var alerttitle4= info.data[3].title;
     var alertinfo4= info.data[3].description;



     $('.alerttitle').append(alerttitle);
     $('.alertinfo').append(alertinfo);

     $('.alerttitle2').append(alerttitle2);
     $('.alertinfo2').append(alertinfo2);

     $('.alerttitle3').append(alerttitle3);
     $('.alertinfo3').append(alertinfo3);

     $('.alerttitle4').append(alerttitle4);
     $('.alertinfo4').append(alertinfo4);
    }

);