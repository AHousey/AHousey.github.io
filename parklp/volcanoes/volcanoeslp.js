$.getJSON("https://developer.nps.gov/api/v1/lessonplans?parkCode=havo&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var lptitle= info.data[0].title
     var lpsubject= "This lesson plans subjects include: " + info.data[0].subject
     var lpgradelevel= "The grade level for this lesson plan is " + info.data[0].gradelevel
     var lpobjective= info.data[0].questionobjective
     var lpduration= info.data[0].duration
     var lpurl= info.data[0].url






     $('.lptitle').append(lptitle);
     $('.lpsubject').append(lpsubject);
     $('.lpgradelevel').append(lpgradelevel);
     $('.lpobjective').append(lpobjective);
     $('.lpduration').append(lpduration);
     $('.lpurl').append(lpurl);
     




    }

);