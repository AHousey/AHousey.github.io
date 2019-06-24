$.getJSON("https://developer.nps.gov/api/v1/newsreleases?parkCode=indu&limit=10&start=0&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
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

     var newstitle6= info.data[5].title
     var newsabstract6= info.data[5].abstract
     var newsurl6= info.data[5].url

     var newstitle7= info.data[6].title
     var newsabstract7= info.data[6].abstract
     var newsurl7= info.data[6].url

     var newstitle8= info.data[7].title
     var newsabstract8= info.data[7].abstract
     var newsurl8= info.data[7].url

     var newstitle9= info.data[8].title
     var newsabstract9= info.data[8].abstract
     var newsurl9= info.data[8].url

     var newstitle10= info.data[9].title
     var newsabstract10= info.data[9].abstract
     var newsurl10= info.data[9].url
     

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

     $('.newstitle6').append(newstitle6);
     $('.newsabstract6').append(newsabstract6);
     $('.newsurl6').append(newsurl6);

     $('.newstitle7').append(newstitle7);
     $('.newsabstract7').append(newsabstract7);
     $('.newsurl7').append(newsurl7);

     $('.newstitle8').append(newstitle8);
     $('.newsabstract8').append(newsabstract8);
     $('.newsurl8').append(newsurl8);

     $('.newstitle9').append(newstitle9);
     $('.newsabstract9').append(newsabstract9);
     $('.newsurl9').append(newsurl9);

     $('.newstitle10').append(newstitle10);
     $('.newsabstract10').append(newsabstract10);
     $('.newsurl10').append(newsurl10);
     
    }
);