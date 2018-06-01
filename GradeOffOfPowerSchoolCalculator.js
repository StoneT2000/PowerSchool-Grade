var ntotal = 0;
var dtotal = 0;
var list = document.getElementsByTagName("tbody")[1].children;
var formativeName = prompt("Type the category formative assessments are named as (Case Sensitive)")
for (i=1;i<list.length;i++){
  if (list[i].children[10].children[0].style.display === "none" && list[i].children[11].children[0].style.display === "none"){
    if (list[i].children[1].childNodes[0].nodeValue != formativeName){
      var b = list[i].children[4].childNodes;
      if (b.length == 2){
        var k=parseFloat(b[0].firstChild.nodeValue)
        if (!isNaN(k)){
          ntotal+=k;
          dtotal+=parseFloat(b[1].nodeValue.slice(1));
        }
      }
      else {
        var value = b[0].nodeValue.split('/');
        var k=parseFloat(value[0]);
        if (!isNaN(k)){
          ntotal+=k;
          dtotal+=parseFloat(value[1]);
        }
      }
    }
  }
}
alert("Current Grade Percentage: " + ntotal + "/" + dtotal + " = " + ntotal/dtotal*100 + "%");
