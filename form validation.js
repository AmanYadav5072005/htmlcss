function validattion (){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let contact = document.getElementById('contact').value
    let pass = document.getElementById('password').value
    
    let cpass = document.getElementById('cpassword').value

    

    
    if(name== ""){
        alert("Please fill your name")
        document.getElementById('name').focus()
        return false

    }
    else if(age == ""){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Please fill this field"
        document.getElementById('age').focus()
        return false

    }
    else if( isNaN(ge)){
        let erage = document.getElementById('errorage')
        erage.innerHTML = "Age should be in number"
        let ag = document.getElementById('age')
        ag.style.boarder="2px solid for"
        return false 
    }
    else if (contact==""){

    
        alert("Plaese enter contact number")
        document.getElementById('contact').focus
        return false

    }   


    else if (isNaN(Contact)){
        alert("Please enter contact number should be in digits")
        document.getElementById('contact').focus
        return false
    } 
    else if(contact.length>10 || contact.length<10){
        alert ("Enter valid number..should be 10 digits")
        document.getElementById(contact)
        return false
    }
    else if (email ==""){
    alert("please enter email")
    document.getElementById('email').focus()
    return false
}
else if (!(email.includes('@'))){
    alert("Please enter valid email")
    document.getElementById('email').focus()
    return false
}
else if (pass == ""){
    alert("please fill password")
   document.getElementById('password').focus()
   return false
}
else if (!(pass.match(/[~@#$%]/))){
    alert("please iclude special character")
    document.getElementById('cpassword').focus()
    return false
}
else if(cpass ==""){
    alert("please enter confirm password")
    document.getElementById('cpassword').focus()
        return false
    
}
else if(cpass!=pass){
    alert("password mismatch")
    document.getElementById('cpassword').focus()
    return false
}
}