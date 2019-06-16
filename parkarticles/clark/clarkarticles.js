$.getJSON("https://developer.nps.gov/api/v1/articles?parkCode=lacl&stateCode=ak&limit=10&start=0&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var articletitle= info.data[0].title
     var articledescription= info.data[0].listingdescription
     var articleurl= info.data[0].url

     var articletitle2= info.data[1].title
     var articledescription2= info.data[1].listingdescription
     var articleurl2= info.data[1].url
    
     var articletitle3= info.data[2].title
     var articledescription3= info.data[2].listingdescription
     var articleurl3= info.data[2].url

     var articletitle4= info.data[3].title
     var articledescription4= info.data[3].listingdescription
     var articleurl4= info.data[3].url

     var articletitle5= info.data[4].title
     var articledescription5= info.data[4].listingdescription
     var articleurl5= info.data[4].url

     var articletitle6= info.data[5].title
     var articledescription6= info.data[5].listingdescription
     var articleurl6= info.data[5].url

     var articletitle7= info.data[6].title
     var articledescription7= info.data[6].listingdescription
     var articleurl7= info.data[6].url

     var articletitle8= info.data[7].title
     var articledescription8= info.data[7].listingdescription
     var articleurl8= info.data[7].url

     var articletitle9= info.data[8].title
     var articledescription9= info.data[8].listingdescription
     var articleurl9= info.data[8].url

     var articletitle10= info.data[9].title
     var articledescription10= info.data[9].listingdescription
     var articleurl10= info.data[9].url

     $('.articletitle').append(articletitle);
     $('.articledescription').append(articledescription);
     $('.articleurl').append(articleurl);
     
     $('.articletitle2').append(articletitle2);
     $('.articledescription2').append(articledescription2);
     $('.articleurl2').append(articleurl2);

     $('.articletitle3').append(articletitle3);
     $('.articledescription3').append(articledescription3);
     $('.articleurl3').append(articleurl3);
     
     $('.articletitle4').append(articletitle4);
     $('.articledescription4').append(articledescription4);
     $('.articleurl4').append(articleurl4);

     $('.articletitle5').append(articletitle5);
     $('.articledescription5').append(articledescription5);
     $('.articleurl5').append(articleurl5);
     
     $('.articletitle6').append(articletitle6);
     $('.articledescription6').append(articledescription6);
     $('.articleurl6').append(articleurl6);

     $('.articletitle7').append(articletitle7);
     $('.articledescription7').append(articledescription7);
     $('.articleurl7').append(articleurl7);
     
     $('.articletitle8').append(articletitle8);
     $('.articledescription8').append(articledescription8);
     $('.articleurl8').append(articleurl8);

     $('.articletitle9').append(articletitle9);
     $('.articledescription9').append(articledescription9);
     $('.articleurl9').append(articleurl9);
     
     $('.articletitle10').append(articletitle10);
     $('.articledescription10').append(articledescription10);
     $('.articleurl10').append(articleurl10);

    }

);