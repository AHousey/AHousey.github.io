$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=chis&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
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


    }

);