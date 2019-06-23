$.getJSON("https://developer.nps.gov/api/v1/events?parkCode=grsa&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var eventtitle= info.data[0].title
     var eventdescription= info.data[0].description
     var eventdates= "This event started on " + info.data[0].recurrencedatestart + " and ends on " + info.data[0].recurrencedateend
     var eventtimeinfo= info.data[0].timeinfo
     var eventcontactname= "Contact Name: " + info.data[0].contactname
     var eventcontactemail= "Contact Email: " + info.data[0].contactemailaddress
     var eventphonenumber= "Contact Telephone Number: " + info.data[0].contacttelephonenumber



     $('.eventtitle').append(eventtitle);
     $('.eventdescription').append(eventdescription);
     $('.eventdates').append(eventdates);
     $('.eventtimeinfo').append(eventtimeinfo);
     $('.eventcontactname').append(eventcontactname);
     $('.eventcontactemail').append(eventcontactemail);
     $('.eventphonenumber').append(eventphonenumber);


     

    }

);