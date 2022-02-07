function fillitems() {
  removedd(list);
  switch (items.selectedIndex) {
    case 1:
      var os = ["android", "ios"];
      filldd(os,list);
      break;
    case 2:
      var dt = ["cold drink", "drink"];
      filldd(dt,list);
      break;
    case 3:
      var ft = ["meethe", "katte"];
      filldd(ft,list);
      break;
  }
}
function type(){
  removedd(typ)
  switch(items.selectedIndex){
    case 1:
      switch(list.selectedIndex){
        case 1:
          var elen = [ "samsung", "oneplus", "oppo"];
          filldd(elen,typ);
          break

        case 2:
          var ele = [ "iphone", "ipod", "macbook"];
          filldd(ele,typ);
          break
      }break
    case 2:
      switch(list.selectedIndex){
       case 1:
        var drk = ["pepsi", "cocacola", "sprite"];
        filldd(drk,typ);
        break;
      case 2:
        var drk1 = ["beer", "hunter", "fruit beer"];
        filldd(drk1,typ);
        break;

      }break
    case 3:
      switch (list.selectedIndex) {
        case 1:
          var frt = ["banana", "apple", "mango"];
          filldd(frt,typ);
          break;
        case 2:
          var frt1 = ["banana", "apple", "mango"];
          filldd(frt1,typ);
          break;
      
      }break
  }
}
function filldd(arr,arr2) {
  for (var i = 0; i < arr.length; i++) {
    var opt = document.createElement("option");
    opt.text = arr[i];
    opt.value=arr2[i]
     arr2.add(opt);
   }

    
}
function removedd(dd) {
  for (var k = dd.list.options.length - 1; k >= 1; k--) {
    dd.remove(k);
  }
}
function show() {
  imgid.src = "folder/" + list.options[list.selectedIndex].text + ".png";
  priceid.innerHTML = list.value;
}
 