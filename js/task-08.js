const ref = {
    loginForm: document.querySelector('.login-form'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
}

ref.loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (ref.loginForm.elements.email.value === "" || ref.loginForm.elements.password.value === "") {
        alert("Please fill in all fields");
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log('handleFormSubmit -> name', name);
            console.log('handleFormSubmit -> value', value); 
        });
        ref.loginForm.reset();
       }
    };
