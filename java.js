document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Fetch data from form
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // You can perform further validation or send this data to a server for processing
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Reset the form
    document.getElementById('registrationForm').reset();
  });
  