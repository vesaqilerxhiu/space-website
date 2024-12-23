function logInForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    document.getElementById('errorMessage').textContent = '';
  
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (username === '' || password === '') {
      document.getElementById('errorMessage').textContent = 'Please fill out all the fields.';
      return;
    }
  
    if (username !== storedUsername || password !== storedPassword) {
      document.getElementById('errorMessage').textContent = 'Incorrect username or password.';
      return;
    }
  
    localStorage.setItem('isLoggedIn', 'true'); 
    window.location.href = 'index.html';
} 