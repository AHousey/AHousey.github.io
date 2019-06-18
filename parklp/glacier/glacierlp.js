$.getJSON("https://developer.nps.gov/api/v1/lessonplans?parkCode=glba&stateCode=ak&api_key=SJ788heSyZSEEK0QdQNGXsKAcq7fLZxDxl4keeYw", 
    function(info) {
     console.log(info);

     var lptitle= info.data[0].title
     var lpsubject= "This lesson plans subjects include: " + info.data[0].subject
     var lpgradelevel= "The grade level for this lesson plan is " + info.data[0].gradelevel
     var lpobjective= info.data[0].questionobjective
     var lpduration= info.data[0].duration
     var lpurl= info.data[0].url

     var lptitle2= info.data[1].title
     var lpsubject2= "This lesson plans subjects include: " + info.data[1].subject
     var lpgradelevel2= "The grade level for this lesson plan is " + info.data[1].gradelevel
     var lpobjective2= info.data[1].questionobjective
     var lpduration2= info.data[1].duration
     var lpurl2= info.data[1].url
     
     var lptitle3= info.data[2].title
     var lpsubject3= "This lesson plans subjects include: " + info.data[2].subject
     var lpgradelevel3= "The grade level for this lesson plan is " + info.data[2].gradelevel
     var lpobjective3= info.data[2].questionobjective
     var lpduration3= info.data[2].duration
     var lpurl3= info.data[2].url

     var lptitle4= info.data[3].title
     var lpsubject4= "This lesson plans subjects include: " + info.data[3].subject
     var lpgradelevel4= "The grade level for this lesson plan is " + info.data[3].gradelevel
     var lpobjective4= info.data[3].questionobjective
     var lpduration4= info.data[3].duration
     var lpurl4= info.data[3].url

     var lptitle5= info.data[4].title
     var lpsubject5= "This lesson plans subjects include: " + info.data[4].subject
     var lpgradelevel5= "The grade level for this lesson plan is " + info.data[4].gradelevel
     var lpobjective5= info.data[4].questionobjective
     var lpduration5= info.data[4].duration
     var lpurl5= info.data[4].url

     var lptitle6= info.data[5].title
     var lpsubject6= "This lesson plans subjects include: " + info.data[5].subject
     var lpgradelevel6= "The grade level for this lesson plan is " + info.data[5].gradelevel
     var lpobjective6= info.data[5].questionobjective
     var lpduration6= info.data[5].duration
     var lpurl6= info.data[5].url

     var lptitle7= info.data[6].title
     var lpsubject7= "This lesson plans subjects include: " + info.data[6].subject
     var lpgradelevel7= "The grade level for this lesson plan is " + info.data[6].gradelevel
     var lpobjective7= info.data[6].questionobjective
     var lpduration7= info.data[6].duration
     var lpurl7= info.data[6].url

     $('.lptitle').append(lptitle);
     $('.lpsubject').append(lpsubject);
     $('.lpgradelevel').append(lpgradelevel);
     $('.lpobjective').append(lpobjective);
     $('.lpduration').append(lpduration);
     $('.lpurl').append(lpurl);
     
     $('.lptitle2').append(lptitle2);
     $('.lpsubject2').append(lpsubject2);
     $('.lpgradelevel2').append(lpgradelevel2);
     $('.lpobjective2').append(lpobjective2);
     $('.lpduration2').append(lpduration2);
     $('.lpurl2').append(lpurl2);

     $('.lptitle3').append(lptitle3);
     $('.lpsubject3').append(lpsubject3);
     $('.lpgradelevel3').append(lpgradelevel3);
     $('.lpobjective3').append(lpobjective3);
     $('.lpduration3').append(lpduration3);
     $('.lpurl3').append(lpurl3);

     $('.lptitle4').append(lptitle4);
     $('.lpsubject4').append(lpsubject4);
     $('.lpgradelevel4').append(lpgradelevel4);
     $('.lpobjective4').append(lpobjective4);
     $('.lpduration4').append(lpduration4);
     $('.lpurl4').append(lpurl4);

     $('.lptitle5').append(lptitle5);
     $('.lpsubject5').append(lpsubject5);
     $('.lpgradelevel5').append(lpgradelevel5);
     $('.lpobjective5').append(lpobjective5);
     $('.lpduration5').append(lpduration5);
     $('.lpurl5').append(lpurl5);

     $('.lptitle6').append(lptitle6);
     $('.lpsubject6').append(lpsubject6);
     $('.lpgradelevel6').append(lpgradelevel6);
     $('.lpobjective6').append(lpobjective6);
     $('.lpduration6').append(lpduration6);
     $('.lpurl6').append(lpurl6);

     $('.lptitle7').append(lptitle7);
     $('.lpsubject7').append(lpsubject7);
     $('.lpgradelevel7').append(lpgradelevel7);
     $('.lpobjective7').append(lpobjective7);
     $('.lpduration7').append(lpduration7);
     $('.lpurl7').append(lpurl7);
    }

);