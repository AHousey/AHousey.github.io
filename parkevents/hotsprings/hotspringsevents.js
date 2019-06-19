$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=hosp&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
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

 
    }

);