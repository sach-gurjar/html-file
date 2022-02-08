function fillstate() {
  removedd(state);
  switch (Country.selectedIndex) {
    case 1:
    var ins = ["madhya pradesh", "utter pradesh"];
    filldd(ins, state);
    break;

    case 2:
    var us = ["california", "montana"];
    filldd(us, state);
    break;

    case 3:
    var pak = ["karachi", "lahore"];
    filldd(pak, state);
    break;
  }
}
function fillcity() {
  removedd(city);
  switch (country.selectedIndex) {
    case 1:
      switch (state.selectedIndex) {
        case 1:
          var mp = ["gwalior", "datia"];
          filldd(mp, city);
          break
        case 2:
          var up = ["jhansi", "agra"];
          filldd(up, city);
          break
      }
      break;
    case 2:
      switch (state.selectedIndex) {
        case 1:
          var cl = ["uuuuu", "ssssss"];
          filldd(cl, city);
          break
        case 2:
          var mo = ["ddddddd", "lllll"];
          filldd(mo, city);
          break
      }
      break;
    case 3:
      switch (state.selectedIndex) {
        case 1:
          var pk = ["bulgistan", "pak city"];
          filldd(pk, city);
          break
        case 2:
          var pak = ["kkkk", "pkpk"];
          filldd(pak, city);
          break
      }
      break;
  }
}
function filldd(arr, arr2) {
  for (var i = 0; i<arr.length; i++) {
    var opt =document.createElement("option");
    opt.text = arr[i];
    arr2.add(opt);
  }
}
function removedd(dd) {
  for (var j = dd.state.option.length-1; j >= 1; j--) {
    dd = remove(j);
  }
}
