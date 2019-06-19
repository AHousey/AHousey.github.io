$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=npsa&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var eventtitle= info.data[0].title
     var eventdescription= info.data[0].description
     var eventlocation= "This event is located at " + info.data[0].location
     var eventdates= "This event started on " + info.data[0].recurrencedatestart + " and ends on " + info.data[0].recurrencedateend
     var eventfeeinfo= info.data[0].feeinfo
     var eventtimeinfo= info.data[0].timeinfo
     var eventcontactname= "Contact Name: " + info.data[0].contactname
     var eventphonenumber= "Contact Telephone Number: " + info.data[0].contacttelephonenumber

     var eventtitle2= info.data[1].title
     var eventdescription2= info.data[1].description
     var eventlocation2= info.data[1].location
     var eventdates2= "This event started on " + info.data[1].recurrencedatestart + " and ends on " + info.data[1].recurrencedateend
     var eventtimes2= "This event begins at " + info.data[1].times[0].timestart + " and stops at " + info.data[1].times[0].timeend
     var eventcontactname2= "Contact Name: " + info.data[1].contactname
     var eventcontactemail2= "Contact Email: " + info.data[1].contactemailaddress
     var eventphonenumber2= "Contact Telephone Number: " + info.data[1].contacttelephonenumber

     var eventtitle3= info.data[2].title
     var eventdescription3= info.data[2].description
     var eventlocation3= "This event is located at " + info.data[2].location
     var eventdates3= "This event started on " + info.data[2].recurrencedatestart + " and ends on " + info.data[2].recurrencedateend
     var eventtimeinfo3= info.data[2].timeinfo
     

     var eventtitle4= info.data[3].title
     var eventdescription4= info.data[3].description
     var eventlocation4=  info.data[3].location
     var eventdates4= "This event started on " + info.data[3].recurrencedatestart + " and ends on " + info.data[3].recurrencedateend
     var eventtimeinfo4= info.data[3].timeinfo

     var eventtitle5= info.data[4].title
     var eventdescription5= info.data[4].description
     var eventlocation5= "This event is located at " + info.data[4].location
     var eventdates5= "This event started on " + info.data[4].recurrencedatestart + " and ends on " + info.data[4].recurrencedateend
     var eventtimeinfo5= info.data[4].timeinfo
   
     

     $('.eventtitle').append(eventtitle);
     $('.eventdescription').append(eventdescription);
     $('.eventlocation').append(eventlocation);
     $('.eventdates').append(eventdates);
     $('.eventfeeinfo').append(eventfeeinfo);
     $('.eventtimeinfo').append(eventtimeinfo);
     $('.eventcontactname').append(eventcontactname);
     $('.eventphonenumber').append(eventphonenumber);

     $('.eventtitle2').append(eventtitle2);
     $('.eventdescription2').append(eventdescription2);
     $('.eventlocation2').append(eventlocation2);
     $('.eventdates2').append(eventdates2);
     $('.eventtimes2').append(eventtimes2);
     $('.eventcontactname2').append(eventcontactname2);
     $('.eventcontactemail2').append(eventcontactemail2);
     $('.eventphonenumber2').append(eventphonenumber2);

     $('.eventtitle3').append(eventtitle3);
     $('.eventdescription3').append(eventdescription3);
     $('.eventlocation3').append(eventlocation3);
     $('.eventdates3').append(eventdates3);
     $('.eventtimeinfo3').append(eventtimeinfo3);
     

     $('.eventtitle4').append(eventtitle4);
     $('.eventdescription4').append(eventdescription4);
     $('.eventlocation4').append(eventlocation4);
     $('.eventdates4').append(eventdates4);
     $('.eventtimeinfo4').append(eventtimeinfo4);
     
     $('.eventtitle5').append(eventtitle5);
     $('.eventdescription5').append(eventdescription5);
     $('.eventlocation5').append(eventlocation5);
     $('.eventdates5').append(eventdates5);
     $('.eventtimeinfo5').append(eventtimeinfo5);

    }

);