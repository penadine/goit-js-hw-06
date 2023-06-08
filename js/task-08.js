const ref = {
    loginForm: document.querySelector('.login-form'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
  };
  
  ref.loginForm.addEventListener('submit', handleFormSubmit);
  
  function handleFormSubmit(event) {
    event.preventDefault();
  
    if (ref.loginForm.elements.email.value === "" || ref.loginForm.elements.password.value === "") {
      alert("Please fill in all fields");
    } else {
        
      const formData = {
        email: ref.loginForm.elements.email.value,
        password: ref.loginForm.elements.password.value,
      };
  
      console.log(formData);
      ref.loginForm.reset();
    }
  }