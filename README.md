# PowerSchool-Grade
A simple script that calculates the current average grade (no weighting) displayed on a Class Score Detail page on Power School

# To use
Navigate to the page of the class you wish to calculate the average grade from (excluding grades of assignments exempt from grade). This page should have a list of assignments their, categories, your current overall grade and so forth.

Then open the console. For Firefox and Google Chrome, this can be done by pressing command-option-i. Then, copy and paste the contents of the javascript file in this repository and press enter and then enter the category name formative assignments fall under.

Or, copy and paste the following code instead and press enter and do the same thing:

var n=0;var d=0;var l=document.getElementsByTagName("tbody")[1].children;var f=prompt("Type the category formative assessments are named as (Case Sensitive)");for(i=1;i<l.length;i++){if(l[i].children[10].children[0].style.display=="none"&&l[i].children[11].children[0].style.display=="none"){if(l[i].children[1].childNodes[0].nodeValue!=f){var b=l[i].children[4].childNodes;if(b.length==2){var k=parseFloat(b[0].firstChild.nodeValue);if(!isNaN(k)){n+=k;d+=parseFloat(b[1].nodeValue.slice(1));}}else{var v=b[0].nodeValue.split('/');var k=parseFloat(v[0]);if (!isNaN(k)){n+=k;d+=parseFloat(v[1]);}}}}}alert("Current Grade Percentage: "+n+"/"+d+" = "+n/d*100+"%");

Have fun knowing the exact percentage of your grades!
