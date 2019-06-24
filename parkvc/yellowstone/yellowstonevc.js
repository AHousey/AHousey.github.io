$.getJSON("https://developer.nps.gov/api/v1/visitorcenters?parkCode=yell&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var vcname= info.data[0].name
     var vcdescription= info.data[0].description
     var vcurl= info.data[0].url

     var vcname2= info.data[1].name
     var vcdescription2= info.data[1].description
     var vcurl2= info.data[1].url

     var vcname3= info.data[2].name
     var vcdescription3= info.data[2].description
     var vcurl3= info.data[2].url

     var vcname4= info.data[3].name
     var vcdescription4= info.data[3].description
     var vcurl4= info.data[3].url

     var vcname5= info.data[4].name
     var vcdescription5= info.data[4].description
     var vcurl5= info.data[4].url

     var vcname6= info.data[5].name
     var vcdescription6= info.data[5].description
     var vcurl6= info.data[5].url

     var vcname7= info.data[6].name
     var vcdescription7= info.data[6].description
     var vcurl7= info.data[6].url

     var vcname8= info.data[7].name
     var vcdescription8= info.data[7].description
     var vcurl8= info.data[7].url

     var vcname9= info.data[8].name
     var vcdescription9= info.data[8].description
     var vcurl9= info.data[8].url

     var vcname10= info.data[9].name
     var vcdescription10= info.data[9].description
     var vcurl10= info.data[9].url

     var vcname11= info.data[10].name
     var vcdescription11= info.data[10].description
     var vcurl11= info.data[10].url

     $('.vcname').append(vcname);
     $('.vcdescription').append(vcdescription);
     $('.vcurl').append(vcurl);
     
     $('.vcname2').append(vcname2);
     $('.vcdescription2').append(vcdescription2);
     $('.vcurl2').append(vcurl2);

     $('.vcname3').append(vcname3);
     $('.vcdescription3').append(vcdescription3);
     $('.vcurl3').append(vcurl3);

     $('.vcname4').append(vcname4);
     $('.vcdescription4').append(vcdescription4);
     $('.vcurl4').append(vcurl4);

     $('.vcname4').append(vcname4);
     $('.vcdescription4').append(vcdescription4);
     $('.vcurl4').append(vcurl4);

     $('.vcname5').append(vcname5);
     $('.vcdescription5').append(vcdescription5);
     $('.vcurl5').append(vcurl5);

     $('.vcname6').append(vcname6);
     $('.vcdescription6').append(vcdescription6);
     $('.vcurl6').append(vcurl6);

     $('.vcname7').append(vcname7);
     $('.vcdescription7').append(vcdescription7);
     $('.vcurl7').append(vcurl7);

     $('.vcname8').append(vcname8);
     $('.vcdescription8').append(vcdescription8);
     $('.vcurl8').append(vcurl8);

     $('.vcname9').append(vcname9);
     $('.vcdescription9').append(vcdescription9);
     $('.vcurl9').append(vcurl9);

     $('.vcname10').append(vcname10);
     $('.vcdescription10').append(vcdescription10);
     $('.vcurl10').append(vcurl10);

     $('.vcname11').append(vcname11);
     $('.vcdescription11').append(vcdescription11);
     $('.vcurl11').append(vcurl11);
     
     

    }

);