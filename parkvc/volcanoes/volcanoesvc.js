$.getJSON("https://developer.nps.gov/api/v1/visitorcenters?parkCode=havo&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var vcname= info.data[0].name
     var vcdescription= info.data[0].description
     var vcurl= info.data[0].url




     $('.vcname').append(vcname);
     $('.vcdescription').append(vcdescription);
     $('.vcurl').append(vcurl);
     


     

    }

);