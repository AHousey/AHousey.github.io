$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=lalc&stateCode=ak&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var eventtitle= info.data[0].title
     var eventdescription= info.data[0].description
     var eventdates= "This event started on " + info.data[0].recurrencedatestart + " and ends on " + info.data[0].recurrencedateend
     var eventtimeinfo= info.data[0].timeinfo
     var eventcontactname= "Contact Name: " + info.data[0].contactname
     var eventcontactemail= "Contact Email: " + info.data[0].contactemailaddress
     var eventphonenumber= "Contact Telephone Number: " + info.data[0].contacttelephonenumber

     var eventtitle2= info.data[1].title
     var eventdescription2= info.data[1].description
     var eventdates2= "This event started on " + info.data[1].recurrencedatestart + " and ends on " + info.data[1].recurrencedateend
     var eventfeeinfo2= info.data[1].feeinfo
     var eventcontactname2= "Contact Name: " + info.data[1].contactname
     var eventcontactemail2= "Contact Email: " + info.data[1].contactemailaddress
     var eventphonenumber2= "Contact Telephone Number: " + info.data[1].contacttelephonenumber

     var eventtitle3= info.data[2].title
     var eventdescription3= info.data[2].description
     var eventdates3= "This event started on " + info.data[2].recurrencedatestart + " and ends on " + info.data[2].recurrencedateend
     var eventtimeinfo3= info.data[2].timeinfo
     var eventcontactname3= "Contact Name: " + info.data[2].contactname
     var eventcontactemail3= "Contact Email: " + info.data[2].contactemailaddress
     var eventphonenumber3= "Contact Telephone Number: " + info.data[2].contacttelephonenumber

     var eventtitle4= info.data[3].title
     var eventdescription4= info.data[3].description
     var eventdates4= "This event started on " + info.data[3].recurrencedatestart + " and ends on " + info.data[3].recurrencedateend
     var eventtimeinfo4= info.data[3].timeinfo

     var eventtitle5= info.data[4].title
     var eventdescription5= info.data[4].description
     var eventdates5= "This event started on " + info.data[4].recurrencedatestart + " and ends on " + info.data[4].recurrencedateend
     var eventtimeinfo5= info.data[4].timeinfo
     var eventcontactname5= "Contact Name: " + info.data[4].contactname
     var eventcontactemail5= "Contact Email: " + info.data[4].contactemailaddress
     var eventphonenumber5= "Contact Telephone Number: " + info.data[4].contacttelephonenumber
     

     $('.eventtitle').append(eventtitle);
     $('.eventdescription').append(eventdescription);
     $('.eventdates').append(eventdates);
     $('.eventtimeinfo').append(eventtimeinfo);
     $('.eventcontactname').append(eventcontactname);
     $('.eventcontactemail').append(eventcontactemail);
     $('.eventphonenumber').append(eventphonenumber);

     $('.eventtitle2').append(eventtitle2);
     $('.eventdescription2').append(eventdescription2);
     $('.eventdates2').append(eventdates2);
     $('.eventfeeinfo2').append(eventfeeinfo2);
     $('.eventcontactname2').append(eventcontactname2);
     $('.eventcontactemail2').append(eventcontactemail2);
     $('.eventphonenumber2').append(eventphonenumber2);

     $('.eventtitle3').append(eventtitle3);
     $('.eventdescription3').append(eventdescription3);
     $('.eventdates3').append(eventdates3);
     $('.eventtimeinfo3').append(eventtimeinfo3);
     $('.eventcontactname3').append(eventcontactname3);
     $('.eventcontactemail3').append(eventcontactemail3);
     $('.eventphonenumber3').append(eventphonenumber3);

     $('.eventtitle4').append(eventtitle4);
     $('.eventdescription4').append(eventdescription4);
     $('.eventdates4').append(eventdates4);
     $('.eventtimeinfo4').append(eventtimeinfo4);
     
     $('.eventtitle5').append(eventtitle5);
     $('.eventdescription5').append(eventdescription5);
     $('.eventdates5').append(eventdates5);
     $('.eventtimeinfo5').append(eventtimeinfo5);
     $('.eventcontactname5').append(eventcontactname5);
     $('.eventcontactemail5').append(eventcontactemail5);
     $('.eventphonenumber5').append(eventphonenumber5);
    }

);