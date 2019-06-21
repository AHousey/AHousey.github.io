$.getJSON("https://developer.nps.gov/api/v1/visitorcenters?parkCode=lavo&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var vcname= info.data[0].name
     var vcdescription= info.data[0].description
     var vcurl= info.data[0].url

     var vcname2= info.data[1].name
     var vcdescription2= info.data[1].description
     var vcurl2= info.data[1].url



     $('.vcname').append(vcname);
     $('.vcdescription').append(vcdescription);
     $('.vcurl').append(vcurl);
     
     $('.vcname2').append(vcname2);
     $('.vcdescription2').append(vcdescription2);
     $('.vcurl2').append(vcurl2);


     

    }

);