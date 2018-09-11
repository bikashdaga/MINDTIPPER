function regValidate()                                   
{
    var regUsername = document.forms["RegForm"]["regUsername"];              
    var regEmail = document.forms["RegForm"]["regEmail"];  
    var regConfirmEmail = document.forms["RegForm"]["regConfirmEmail"];  
    var regPassword = document.forms["RegForm"]["regPassword"]; 
    var regConfirmPassword = document.forms["RegForm"]["regConfirmPassword"]; 
  
    if (regUsername.value == "")                                 
    {
        window.alert("Please enter a username.");
        regUsername.focus();
        return false;
    }
      
    if (regEmail.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        regEmail.focus();
        return false;
    }
  
    if (regEmail.value.indexOf("@", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        regEmail.focus();
        return false;
    }
  
    if (regEmail.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        regEmail.focus();
        return false;
    }
  
    if (regEmail.value !== regConfirmEmail.value)                          
    {
        window.alert("Email does not match.");
        regConfirmEmail.focus();
        return false;
    }
  
    if (regPassword.value == "")                       
    {
        window.alert("Please enter your password");
        regPassword.focus();
        return false;
    } 
    if (regPassword.value !== regConfirmPassword.value)                       
    {
        window.alert("Password does not match");
        regPassword.focus();
        regPassword.focus();
        return false;
    } 
    return true;
}

