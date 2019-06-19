$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=sagu&limit=10&start=0&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
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

     var eventtitle6= info.data[5].title
     var eventdescription6= info.data[5].description
     var eventdates6= "This event started on " + info.data[5].recurrencedatestart + " and ends on " + info.data[5].recurrencedateend
     var eventtimeinfo6= info.data[5].timeinfo
     var eventcontactname6= "Contact Name: " + info.data[5].contactname
     var eventcontactemail6= "Contact Email: " + info.data[5].contactemailaddress
     var eventphonenumber6= "Contact Telephone Number: " + info.data[5].contacttelephonenumber

     var eventtitle7= info.data[6].title
     var eventdescription7= info.data[6].description
     var eventdates7= "This event started on " + info.data[6].recurrencedatestart + " and ends on " + info.data[6].recurrencedateend
     var eventtimeinfo7= info.data[6].timeinfo
     var eventcontactname7= "Contact Name: " + info.data[6].contactname
     var eventcontactemail7= "Contact Email: " + info.data[6].contactemailaddress
     var eventphonenumber7= "Contact Telephone Number: " + info.data[6].contacttelephonenumber

     var eventtitle8= info.data[7].title
     var eventdescription8= info.data[7].description
     var eventdates8= "This event started on " + info.data[7].recurrencedatestart + " and ends on " + info.data[7].recurrencedateend
     var eventtimeinfo8= info.data[7].timeinfo
     var eventcontactname8= "Contact Name: " + info.data[7].contactname
     var eventcontactemail8= "Contact Email: " + info.data[7].contactemailaddress
     var eventphonenumber8= "Contact Telephone Number: " + info.data[7].contacttelephonenumber

     var eventtitle9= info.data[8].title
     var eventdescription9= info.data[8].description
     var eventdates9= "This event started on " + info.data[8].recurrencedatestart + " and ends on " + info.data[8].recurrencedateend
     var eventtimeinfo9= info.data[8].timeinfo
     var eventcontactname9= "Contact Name: " + info.data[8].contactname
     var eventcontactemail9= "Contact Email: " + info.data[8].contactemailaddress
     var eventphonenumber9= "Contact Telephone Number: " + info.data[8].contacttelephonenumber
     

     var eventtitle10= info.data[9].title
     var eventdescription10= info.data[9].description
     var eventdates10= "This event started on " + info.data[9].recurrencedatestart + " and ends on " + info.data[9].recurrencedateend
     var eventtimeinfo10= info.data[9].timeinfo
     var eventcontactname10= "Contact Name: " + info.data[9].contactname
     var eventcontactemail10= "Contact Email: " + info.data[9].contactemailaddress
     var eventphonenumber10= "Contact Telephone Number: " + info.data[9].contacttelephonenumber
     
     

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

     $('.eventtitle6').append(eventtitle6);
     $('.eventdescription6').append(eventdescription6);
     $('.eventdates6').append(eventdates6);
     $('.eventtimeinfo6').append(eventtimeinfo6);
     $('.eventcontactname6').append(eventcontactname6);
     $('.eventcontactemail6').append(eventcontactemail6);
     $('.eventphonenumber6').append(eventphonenumber6);

     $('.eventtitle7').append(eventtitle7);
     $('.eventdescription7').append(eventdescription7);
     $('.eventdates7').append(eventdates7);
     $('.eventtimeinfo7').append(eventtimeinfo7);
     $('.eventcontactname7').append(eventcontactname7);
     $('.eventcontactemail7').append(eventcontactemail7);
     $('.eventphonenumber7').append(eventphonenumber7);

     $('.eventtitle8').append(eventtitle8);
     $('.eventdescription8').append(eventdescription8);
     $('.eventdates8').append(eventdates8);
     $('.eventtimeinfo8').append(eventtimeinfo8);
     $('.eventcontactname8').append(eventcontactname8);
     $('.eventcontactemail8').append(eventcontactemail8);
     $('.eventphonenumber8').append(eventphonenumber8);

     $('.eventtitle9').append(eventtitle9);
     $('.eventdescription9').append(eventdescription9);
     $('.eventdates9').append(eventdates9);
     $('.eventtimeinfo9').append(eventtimeinfo9);
     $('.eventcontactname9').append(eventcontactname9);
     $('.eventcontactemail9').append(eventcontactemail9);
     $('.eventphonenumber9').append(eventphonenumber9);

     $('.eventtitle10').append(eventtitle10);
     $('.eventdescription10').append(eventdescription10);
     $('.eventdates10').append(eventdates10);
     $('.eventtimeinfo10').append(eventtimeinfo10);
     $('.eventcontactname10').append(eventcontactname10);
     $('.eventcontactemail10').append(eventcontactemail10);
     $('.eventphonenumber10').append(eventphonenumber10);
    }

);