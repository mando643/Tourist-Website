		var el = function(element) 
		{
			return document.getElementById(element);
		}
		
		var isEmail = function(email) 
		{
			var emailPattern = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
			if (emailPattern.test(email))
				return true;
			else
				return false;
		}
		
		var validateForm = function(e) 
		{
			var isValid = true;
			
			if (el("fName").value === "")
			{
				el("firstNameError").innerHTML = "(First Name Required)";
				isValid = false;
			}
			else
			{
				el("firstNameError").innerHTML = "";
			}
			
			if (el("lName").value === "")
			{
				el("lastNameError").innerHTML = "(Last Name Required)";
				isValid = false;
			}
			else
			{
				el("lastNameError").innerHTML = "";
			}
							
			if (!isEmail(el("email").value)) 
			{	
				el("emailError").innerHTML = "(Invalid Email Address)";
				isValid = false;
			}
			else
			{
				el("emailError").innerHTML = "";
			}	
			
			if (el("locationSelect").value === "")
			{
				el("whereFromError").innerHTML = "(Choose An Option)";
				isValid = false;
			}
			else 
			{
				el("whereFromError").innerHTML = "";
			}
			
			if (el("Male").checked === false && el("Female").checked === false)
			{
				el("genderError").innerHTML = "Select A Gender";
				isValid = false;
			}
			else
			{
				el("genderError").innerHTML = "";
			}
			
			if (!isValid)
			{
				e.preventDefault();
			}
			
		}
		
		var clear = function()
		{	
			el("firstNameError").innerHTML = "";
			el("lastNameError").innerHTML = "";
			el("emailError").innerHTML = "";
			el("whereFromError").innerHTML = "";
			el("genderError").innerHTML = "";
		}		
			
		window.onload = function() 
		{
			el("refresh").onclick = clear;
			el("send").addEventListener("click", validateForm, false);	
		}