
function myfun(){
	var firstName = document.getElementById("firstName").value;
		if(firstName==""){
			document.getElementById("fname").innerHTML="**Please fill firstname";
		return false;
	}
	
	var lastName = document.getElementById("lastName").value;
		if(lastName==""){
			document.getElementById("lname").innerHTML="**Please fill lastname field.";
		return false;
		}
	
	var email = document.getElementById("email").value;
		if(email==""){
			document.getElementById("mail").innerHTML="**Please fill emailid  field.";
		return false;
		}
	
	var phn = document.getElementById("phn").value;
		if (phn.length != 10){
			document.getElementById("ph").innerHTML="**Phn no should be of 10 digits.";
		return false;
		}
		
	var adhar = document.getElementById("adhar").value;
		if (adhar.length != 12){
			document.getElementById("ad").innerHTML="**Adhar no should be of 12 digits.";
		return false;
		
		}
        
    var m = document.getElementById("m").value;
		var genValue = false;
			for(var i = m.length -1;i>=0;i--){
            if(m[i].checked){
                genValue = true;    
            }
        }
        if (genValue==false) {
			document.getElementById("m").innerHTML="**Please specify your gender.";
		return false;
        }
		
	
	var add = document.getElementById("add").value;
		if(add==""){
			document.getElementById("addr").innerHTML="**Please fill the address field.";
		return false;
		}
		
	var state = document.getElementById("state").value;
		if(state==""){
			document.getElementById("st").innerHTML="**Please mention your state.";
		return false;
		}
		
	var city = document.getElementById("city").value;
		if(city==""){
			document.getElementById("ci").innerHTML="**Please mention your city.";
		return false;
		}
		
	var pin = document.getElementById("pin").value;
		if (pin.length != 6){
			document.getElementById("pi").innerHTML="**Pin code no should be of 6 digits.";
		return false;
		}
		
	var prof = false;
		if(document.getElementById("a1").checked){
			prof = true;
		}
		else if(document.getElementById("a1").checked){
			prof = true;
		}
		else if(document.getElementById("a1").checked){
			prof = true;
		}
		if(prof){
			document.getElementById("prof").innerHTML="**valid";
		}
		else{
			document.getElementById("prof").innerHTML="please tick atleast one prof";
			return false;
		}
			
			
	
	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(phn);
	console.log(adhar);
	console.log(m);
	console.log(add);
	console.log(state);
	console.log(city);
	console.log(pin);
	console.log(prof);

};