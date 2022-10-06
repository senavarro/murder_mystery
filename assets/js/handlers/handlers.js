

// Make function that is triggered when submitting form
const handleForm = () => {

    const userNameValue = document.getElementById("email").value;
    const pwdRaw = document.getElementById("password").value;
    const pwdValue = parseInt(pwdRaw);

    if(userNameValue === 'lilyclarke' && pwdValue === 778412){
        window.location.href="../../../lily2407.html";
    }else if(userNameValue === 'marthagreen' && pwdValue === 187452){
        window.location.href="../../../marthagreen63428.html";
    }else if(userNameValue === 'ncage' && pwdValue === 45127331){
        window.location.href="../../../nathanielcage24601.html";
    }else if(userNameValue === 'ebirtwistle' && pwdValue === 25149966){
        window.location.href="../../../eleanorbirtwistle719624.html";
    }else if(userNameValue === 'jackandeliza' && pwdValue === 3175629){
        window.location.href="../../../jackcooper&elizaevans15344.html";
    }else if(userNameValue === 'adelaide' && pwdValue === 11227531){
        window.location.href="../../../adelaidebrown23156.html";
    }else if(userNameValue === 'eddavies' && pwdValue === 66614901){
        window.location.href="../../../edwin99216.html";
    }else{
        alert('Please make sure you have introduced the right credentials')
    }
}