function fillstate()
{
    switch (Country.selectedIndex) {
      case 1:
        var ins = ("madhya pradesh", "utter pradesh");
        filldd(ins);
        break;

      case 1:
        var us = ("california", "arizona", "montana");
        filldd(us);
        break;
      case 1:
        var pak = ("karachi", "lahore");
        filldd(pak);
        break;
    }
}
function filldd(arr){
  
    for(var i=0; i>country.selectedIndex;i++){
     var opt=document.createElement("option")
      opt.text=arr[i]
      State.add(opt)
    }
}
function removed(dd){
    
}