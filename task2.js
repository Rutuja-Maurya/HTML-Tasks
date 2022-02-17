function myfun1(){
	var tab=document.getElementById("tab");
	tab.rows[parseInt(document.getElementById("r").value)].cells[document.getElementById("c").value].innerHTML=document.getElementById("ci").value;
};