$.getJSON("https://developer.nps.gov/api/v1/newsreleases?parkCode=lacl&stateCode=ak&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var newstitle= info.data[0].title
     var newsabstract= info.data[0].abstract
     var newsurl= info.data[0].url

     var newstitle2= info.data[1].title
     var newsabstract2= info.data[1].abstract
     var newsurl2= info.data[1].url

     var newstitle3= info.data[2].title
     var newsabstract3= info.data[2].abstract
     var newsurl3= info.data[2].url

     var newstitle4= info.data[3].title
     var newsabstract4= info.data[3].abstract
     var newsurl4= info.data[3].url

     var newstitle5= info.data[4].title
     var newsabstract5= info.data[4].abstract
     var newsurl5= info.data[4].url
     

     $('.newstitle').append(newstitle);
     $('.newsabstract').append(newsabstract);
     $('.newsurl').append(newsurl);

     $('.newstitle2').append(newstitle2);
     $('.newsabstract2').append(newsabstract2);
     $('.newsurl').append(newsurl2);

     $('.newstitle3').append(newstitle3);
     $('.newsabstract3').append(newsabstract3);
     $('.newsurl3').append(newsurl3);

     $('.newstitle4').append(newstitle4);
     $('.newsabstract4').append(newsabstract4);
     $('.newsurl4').append(newsurl4);
     
     $('.newstitle5').append(newstitle5);
     $('.newsabstract5').append(newsabstract5);
     $('.newsurl5').append(newsurl5);
     
    }
);