function dd(){
    dis.innerHTML =Math.abs(ct1.options[ct1.selectedIndex].value - ct.options[ct.selectedIndex].value)
    
}

function call(){

        var q=((wt.value*5)*qyt.value)
        var t=parseInt((dis.innerHTML*5)+q)
     
      var p = `<table border='1' width='40%' cellspacing='0' cellpadding='5'>`
          p += `<th width='20%'  colspan='1'> <img src='data/fedex.png' width='200' ></th><th colspan='4' b> Address </b> <h3>${add.value} </h3></th>`;
          p += `<tr><th bgcolor='#ACA2A9' colspan ='5'><b>Your will</b></th></tr>`
          p += `<tr><th>source</th><th>destination</th><th>distance</th><th>quantity</th><th>Total</th>`
          p += `<tr><th>${ct.options[ct.selectedIndex].text}</th><th>${ct1.options[ct1.selectedIndex].text}</th><th>${dis.innerHTML}</th><th>${qyt.value}</th><th>${t}</th>`
           p += `<tr><th>--</th><th>--</th><th>${dis.innerHTML}*5 + ${q} </th><th>--</th><th>--</th>`;
           p += `<tr><th colspan='5'><h2>Net Payable : = ${t}</h2></th></tr></table>`
          res.innerHTML = p;
      
   
}

   
 