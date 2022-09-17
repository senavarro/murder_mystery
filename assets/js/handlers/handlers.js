

// Make function that is triggered when submitting form
const handleForm = () => {

    const userNameValue = document.getElementById("email").value;
    const pwdRaw = document.getElementById("password").value;
    const pwdValue = parseInt(pwdRaw);

    if(userNameValue === 'pingu' && pwdValue === 1234){
        window.location.href="http://127.0.0.1:5501/pingu.html";
    }else if(userNameValue === 'pingj' && pwdValue === 5678){
        console.log('Honk honk');
    }else{
        console.log('You shall not pass');
    }
    
}