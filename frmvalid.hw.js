alert("Please be aware of any mistakes while filling out the form")
function validate(e){
    e.preventDefault();

    const email=document.getElementById('email').value;
    const pass= document.getElementById('password').value;
    const age= document.getElementById('age').value;
    const msgBox= document.getElementById('message');
    let message='';

    if (email === ''){
        message="Please Enter an Email";
        msgBox.style.color="red"
    }
    else if(pass === ''){
        message="Please Enter a Password"
        msgBox.style.color="red"
    }
    else if(age ===''){
        message="Please Enter your age from 10 to 120"
        msgBox.style.color="red"
    }
    else{
        message="Bravo!!!"
        msgBox.style.color="green"
    }
    msgBox.innerText=message;

}

