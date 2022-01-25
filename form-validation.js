document.getElementById('create-account').addEventListener('click' ,formsubmission);

function formsubmission(event){
    console.log(event);
    event.preventDefault();

    // First Name   
    nameFormat = /^[a-zA-Z]*$/
    fnameElement = document.getElementById('f-name');
    fnameValue = fnameElement.value;

    if(fnameValue != "" && fnameValue.match(nameFormat)){
        fnameElement.classList.remove("error");
        fnameElement.classList.add("error-corrected");
    }else{
        fnameElement.classList.add("error");
        fnameElement.classList.remove("error-corrected");
    }

    // Middle Name

    mnameElement = document.getElementById('m-name');
    mnameValue = mnameElement.value;

    if(mnameValue != "" && mnameValue.match(nameFormat)){
        mnameElement.classList.remove("error");
        mnameElement.classList.add("error-corrected");
    }else{
        mnameElement.classList.add("error");
        mnameElement.classList.remove("error-corrected");
    }    

    // Last Name

    lnameElement = document.getElementById('l-name');
    lnameValue = lnameElement.value;

    if(lnameValue != "" && lnameValue.match(nameFormat)){
        lnameElement.classList.remove("error");
        lnameElement.classList.add("error-corrected");
    }else{
        lnameElement.classList.add("error");
        lnameElement.classList.remove("error-corrected");
    }

    // Phone Number

    let phnumElement = document.getElementById("ph-num");
        phnumValue = phnumElement.value;
        code = document.getElementById('country-code').value;

    if(code == "ind-91"){
        if(phnumValue.match(/^\d{10}$/) && phnumValue[0] >= 6){
            phnumElement.classList.add("error-corrected");        
            phnumElement.classList.remove("error");
        }else{
            phnumElement.classList.remove("error-corrected");        
            phnumElement.classList.add("error");
        }
    }else if(code == "aus-61"){
        if(phnumValue.match(/^\d{9}$/)){
            phnumElement.classList.add("error-corrected");        
            phnumElement.classList.remove("error");
        }else{
            phnumElement.classList.remove("error-corrected");        
            phnumElement.classList.add("error");
        }
    }else if(code == "usa-1"){
        if(phnumValue.match(/^\d{10}$/)){
            phnumElement.classList.add("error-corrected");        
            phnumElement.classList.remove("error");
        }else{
            phnumElement.classList.remove("error-corrected");        
            phnumElement.classList.add("error");
        }
    }else if(code == "tur-90"){
        if(phnumValue.match(/^\d{11}$/)){
            phnumElement.classList.add("error-corrected");        
            phnumElement.classList.remove("error");
        }else{
            phnumElement.classList.remove("error-corrected");        
            phnumElement.classList.add("error");
        }
    }
}

// Email Validation

function check_email(){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        emailElement = document.getElementById("e-mail");
        emailValue = emailElement.value;

    if(emailValue != ""){
        if(emailValue.match(mailformat)){
            emailElement.classList.remove("error");
            emailElement.classList.add("error-corrected");
            // console.log("correct");
        }else{
            emailElement.classList.add("error");
            emailElement.classList.remove("error-corrected");
            // console.log("wrong");
        }   
    }else{
        emailElement.classList.add("error");
        emailElement.classList.remove("error-corrected");
        // console.log("wrong");
    }
}

// Password Validation

function check_pwd(){
    pwdElement = document.getElementById("pwd");
    pwdValue = pwdElement.value;

    let lowercase = /[a-z]/g;
        uppercase = /[A-Z]/g;
        numbers = /[0-9]/g;
        length = pwdValue.length;

    if(pwdValue!="" && pwdValue.match(lowercase) && pwdValue.match(uppercase) && pwdValue.match(numbers) && length>=8){
        pwdElement.classList.add("error-corrected");        
        pwdElement.classList.remove("error"); 
        let cpwdElement = document.getElementById("c-pwd");
            cpwdValue = cpwdElement.value;

        if(cpwdValue != "" && cpwdValue == pwdValue){
        // console.log("match");
        cpwdElement.classList.add("error-corrected");        
        cpwdElement.classList.remove("error");  
        }else{
        // console.log("unmatch");
        cpwdElement.classList.remove("error-corrected");        
        cpwdElement.classList.add("error"); 
        }
    }else{
        pwdElement.classList.remove("error-corrected");        
        pwdElement.classList.add("error");
    }
}

// Show Password

function show_pwd(){
    let show_pwd = document.getElementById("pwd");
        show_cpwd = document.getElementById("c-pwd");
    
    if(show_pwd.type === "password" && show_cpwd.type === "password"){
        show_pwd.type = "text";
        show_cpwd.type = "text";
    }else{
        show_pwd.type = "password";
        show_cpwd.type = "password";
    }
}
