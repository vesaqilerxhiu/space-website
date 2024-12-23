function signUpValidate() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('emptyFieldError').textContent = '';
  
    let isValid = true;
  
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      document.getElementById('emptyFieldError').textContent = 'Please fill out all the fields.';
      isValid = false;
    }
  
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    
    if (username === storedUsername) {
      document.getElementById('usernameError').textContent = 'Username already exists.';
      isValid = false;
    }

    if (email === storedEmail) {
      document.getElementById('emailError').textContent = 'Email is taken.';
      isValid = false;
    }
  
    if (username !== '' && username.length < 4) {
      document.getElementById('usernameError').textContent = 'Username must be at least 4 characters.';
      isValid = false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email !== '' && !emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    if (password !== '' && password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    if (confirmPassword !== '' && password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    if (isValid) {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('isLoggedIn', 'true'); 
  
      window.location.href = 'index.html';
    }
}