

function call() {

  var p = "<table border='1' width='60%' cellspacing='0' cellpadding='5'>";
    p +="<th colspan='1'> <img src='data/cbselogo2.png' width='200' ></th><th calspan='3' bgcolor='#819CAE'><h1> Central Board of Secondary Education (CBSE) NEW Delhi</h1></th></table>";
  logoimg.innerHTML = p;
  call2();
}

function call2() {

    if (m.checked) {
      var st = "S/O";
      var gn = m.value;
      var sdim ="boystudent.png"
    } else if (f.checked) {
      var st = "D/O";
      var gn = f.value;
      var sdim ="girlstudent.png"
    } else if (o.checked) {
      var gn = o.value;
      var sdim = "boystudent.png";
      
    }
  var i = "<table border='1' width='60%' cellspacing='0' cellpadding='5'>";
      i += "<th bgcolor='#ACA2A9' colspan ='6'><b>Student info</b></th>";
      i += "<tr><td width='20%'><b>Candidate Name</b></td><td>" +cn.value +" " +cn1.value +" " +st+" "+fn.value+"</td><th width='15%' rowspan='4'><img src='data/"+sdim+"' width='100'></th></tr>"
      i += "<tr><td width='20%'><b>Father Name</b></td><td>" + fn.value + "</td></tr>";
      i += "<tr><td width='20%'><b>Roll no </b></td><td>" + cr.value + "</td></tr>";
      i +="<tr><td width='20%'><b>Date of birth </b></td><td>" +dob.value +"</td></tr>";
      i +="<tr><td width='20%'><b>Gender</b></td><td>"+gn+"</td><td><b>" +cn.value +" " +cn1.value +"</b></td></tr></table>";

  logoimg1.innerHTML = i;
  call3();
}

function call3() {
  var hin = parseFloat(hindi.value);
  var eng = parseFloat(english.value);
  var mat = parseFloat(math.value);
  var phy = parseFloat(physics.value);
  var che = parseFloat(chemistry.value);
   
  var tm = hin + eng + mat + phy + che;
  var pr = ((tm) / 500) * 100;
  var remark=new Array(0)

  var k=true
   
   if(hin>=0 && hin<=33){
       k=false
       hinn="fail"
   }
    else if(hin>=34 && hin<=74){
       hinn="pass"
    }
   else if(hin>=75 && hin<=100){
       hinn="D" 
   }
   
   remark.push(hinn)

   if (eng >= 0 && eng <=33) {
        k = false;
     engg = "fail";
   } 
   else if (eng >= 34 && eng <= 74) {
     engg = "pass";
   } 
   else if (eng >= 75 && eng <= 100) {
     engg = "D";
    
   }
   remark.push(engg)

   if (mat >= 0 && mat <=33) {
        k = false;
     matt = "fail";
   }
    else if (mat >=34 && mat <=74) {
     matt = "pass";
   }
    else if (mat >= 75 && mat <= 100) {
     matt = "D";
   }
   remark.push(matt)

   if (phy >= 0 && phy <=33) {
        k = false;
     phyy = "fail";
   } 
   else if (phy >= 34 && phy <= 74) {
     phyy = "pass";
   } 
   else if (phy >= 75 && phy <= 100) {
     phyy = "D";
   }
   remark.push(phyy)

    if (che >= 0 && che <= 33) {
         k = false;
     chee = "fail";
   } 
   else if (che >= 34 && che <= 74) {
     chee = "pass";
   } 
   else if (che >= 75 && che <= 100) {
     chee = "D";
   }
   remark.push(chee)
   



if(k)
{
  if (pr >= 60 && pr <= 100) {
    dd = "first division";
  } else if (pr >= 45 && pr <= 59) {
    dd = "second division";
  } else if (pr >= 33 && pr <= 44) {
    dd = "third division";
  }
}
else{
    dd="fail"
}
  var o = "<table border='1' width='60%' cellspacing='0' cellpadding='5'>";
      o += "<th bgcolor='#ACA2A9' colspan ='6'>Marks</th>";

      o +="<tr><th>Paper Code</th><th>Subject</th><th>Min marks</th>"+
           "<th>max marks</th><th>Marks Obtained</th><th>Remark</th></th></tr>";

      o +="<tr><th>101.</th><th>Hindi</th><th>33</th><th>100</th><th>"+hindi.value +"</th><th>"+remark[0]+"</th></tr>";

      o +=
        "<tr><th>102.</th><th>English</th><th>33</th><th>100</th><th>" +
        english.value +
        "</th><th>" +
        remark[1] +
        "</th></tr>";

      o +=
        "<tr><th>103.</th><th>Math</th><th>33</th><th>100</th><th>" +
        math.value +
        "</th><th>" +
        remark[2] +
        "</th></tr>";
    
      o +=
        "<tr><th>104.</th><th>Physics</th><th>33</th><th>100</th><th>" +
        physics.value +
        "</th><th>" +
        remark[3] +
        "</th></tr>";

      o +=
        "<tr><th>105.</th><th>Chemistry</th><th>33</th><th>100</th><th>" +
        chemistry.value +
        "</th><th>" +
        remark[4] +
        "</th></tr>";

      o += `<tr bgcolor='#9CAA82' ><th colspan ='2'><b>Total marks = ${tm} </b></th>
           <th  colspan='2'><b>Percentage= ${pr} </b></th><th colspan='2'><b>Division= ${dd} </b></th></tr></table>`;

  logoimg2.innerHTML = o;

  
}
