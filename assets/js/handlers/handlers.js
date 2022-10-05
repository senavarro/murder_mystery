

// Make function that is triggered when submitting form
const handleForm = () => {

    const userNameValue = document.getElementById("email").value;
    const pwdRaw = document.getElementById("password").value;
    const pwdValue = parseInt(pwdRaw);

    if(userNameValue === 'lilyclarke' && pwdValue === 778412){
        window.location.href="../../../lily2407.html";
    }else if(userNameValue === 'marthagreen' && pwdValue === 187452){
        window.location.href="../../../marthagreen63428.html";
    }else{
        alert('Please make sure you have introduced the right credentials')
    }
    
}