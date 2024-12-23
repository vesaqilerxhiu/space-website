// Function to update the log-in button and helloMessage based on user login status
function updateLogInButton() {
  const logInButton = document.getElementById('log-in');  
  const helloMessage = document.getElementById('helloMessage'); 
  const username = localStorage.getItem('username'); 
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true' && username) {

    helloMessage.textContent = `Hello, ${username}!`; 
      helloMessage.style.display = 'block'; 
      logInButton.textContent = 'Log Out';

      logInButton.addEventListener('click', () => {
        helloMessage.style.display = 'none'; 
          logInButton.textContent = 'Log In'; 
          localStorage.setItem('isLoggedIn', 'false'); 
      });
  } else {
      logInButton.textContent = 'Log In';
      helloMessage.style.display = 'none'; 
  }
}
window.onload = updateLogInButton;


// Function for Mission Launch countdown
function missionLaunch() {
  document.querySelectorAll('.countdown').forEach(element => {
    const targetDate = new Date(element.dataset.missionDate).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        element.textContent = "Already launched!";
        return clearInterval(interval);
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  });
}
missionLaunch();