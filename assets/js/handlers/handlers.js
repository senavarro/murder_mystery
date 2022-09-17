

// Make function that is triggered when submitting form
const handleForm = () => {

    const userNameValue = document.getElementById("email").value;
    const pwdRaw = document.getElementById("password").value;
    const pwdValue = parseInt(pwdRaw);

    if(userNameValue === 'pingu' && pwdValue === 1234){
        console.log('Noot noot');
    }else if(userNameValue === 'pingj' && pwdValue === 5678){
        console.log('Honk honk');
    }else{
        console.log('You shall not pass');
    }
    
}