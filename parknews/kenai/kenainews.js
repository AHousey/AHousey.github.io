$.getJSON("https://developer.nps.gov/api/v1/newsreleases?parkCode=kefj&stateCode=ak&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var newstitle= info.data[0].title
     var newsabstract= info.data[0].abstract
     var newsurl= info.data[0].url

 

     

     $('.newstitle').append(newstitle);
     $('.newsabstract').append(newsabstract);
     $('.newsurl').append(newsurl);

    
     

    }
);