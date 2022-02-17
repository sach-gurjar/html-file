var x = ["Pushpa", "Spider", "Kgf", "Thor"];
var i = 0;
function show() {
  mimg.innerHTML = `<img src='data/${x[i]}.png' width="700" height="300">`;
  i += 1;
  if (i == 4) {
    i = 0;
  }
}

function showposter() {
  setInterval(show, 1500);
}

function call() {
  var h = moviename.options[moviename.selectedIndex].value;
  pr.innerHTML = h;
  tpr.innerHTML = h * qyt.value;

  if (qyt.value >= 5) {
    rr = 5;
    dis.innerHTML = `${rr}`;
  } else {
    dis.innerHTML = 0;
  }
}

function printrr() {
  var mname = moviename.options[moviename.selectedIndex].text;
  var mprice = pr.innerHTML;
  var qt = qyt.value;
  var dt = new Date(dat.value);
  var booking = ti.options[ti.selectedIndex].text;
  var net = tpr.innerHTML;

  var q = "<table border='1' width='50%' cellspacing='' cellpadding='5'>";
  q += "<caption><b>your ticket</b></caption>";
  q +="<tr><th colspan='2'><img src='data/"+mname+".png' width='200'></th></tr>";
  q += "<tr><th>Movie name</th><th> " + mname + "</th></tr>";
  q += "<tr><th>Movie price</th><th>" + mprice + "</th></tr>";
  q += "<tr><th>Ticket qyt </th><th>" + qt + "</th></tr>";
  q += "<tr><th>Date  </th><th>" + dt + "</th></tr>";
  q += "<tr><th> time </th><th>" + booking + "</th></tr>";
  q += "<tr><th>net amount</th><th>" + net + "</th></tr>";

  tt.innerHTML = q;
}
