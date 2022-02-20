var x = ["train"];
var i = 0
var count=0
var k = ""
function show() {
  k = k +"."
  ttrr.innerHTML = k + `<img src='data/${x[i]}.png' width="100">`
     i++
     if (i == 1) {
       i = 0
      }
      
    count = count+1
    if(count==350){
      stop()
    }
  
}
function ttt() {
 tt=setInterval(show, 10);
}
function stop() {
  clearInterval(tt);
}

function dd() {
  dis.innerHTML = Math.abs(
    ct1.options[ct1.selectedIndex].value - ct.options[ct.selectedIndex].value
  );
}

function call() {
  var from = ct.options[ct.selectedIndex].text;
  var to = ct1.options[ct1.selectedIndex].text;
  var tnm = nam.options[nam.selectedIndex].text;
  var trn = nam.options[nam.selectedIndex].value;
  var di = dis.innerHTML;

  var q = "<table border='1' width='600' cellspacing='0' cellpadding='5'>";
  q += "<th colspan='5'> <img src='data/irctc.png' width='200' ></th>";
  q += "<tr><th colspan='2'>From</th><th colspan='3'>" + from + "</th></tr>";
  q += "<tr><th colspan='2'>To</th><th colspan='3'>" + to + "</th></tr>";
  q +=
    "<tr><th colspan='2'>Train name</th><th colspan='3'>" + tnm + "</th></tr>";
  q += "<tr><th colspan='2'>price</th><th colspan='3'>" + di * 2 + "</th></tr>";

  q += "<th colspan='5'><b>passengeers info</b></th>";
  q +=
    "<tr><th colspan='3'>" +
    from +
    "-To-" +
    to +
    "</th><th calspan='1'><b>train no." +
    trn +
    "</b></th></tr>";
  q += "<tr><th>Sr.no</th><th>Name</th><th>Age</th><th>Gender</th>";
  q +=
    "<tr><th>1.</th><th>" +
    name1.value +
    "</th><th>" +
    age1.value +
    "</th><th>" +
    gen1.options[gen1.selectedIndex].text +
    "</th></tr>";
  q +=
    "<tr><th>2.</th><th>" +
    name2.value +
    "</th><th>" +
    age2.value +
    "</th><th>" +
    gen2.options[gen2.selectedIndex].text +
    "</th></tr>";
  q +=
    "<tr><th>3.</th><th>" +
    name3.value +
    "</th><th>" +
    age3.value +
    "</th><th>" +
    gen3.options[gen3.selectedIndex].text +
    "</th></tr>";
  q +=
    "<tr><th colspan='5'><h5>Total ticket price:</h5><span><h3>" +
    di * 2 +
    "</h3></span></th></table>";

  result.innerHTML = q;
}
