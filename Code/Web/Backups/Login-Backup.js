
   
   
   function toggleFuzzyGlow() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (window.innerWidth < 770) {
      button.classList.add('fuzzy-glow');
    } else {
      button.classList.remove('fuzzy-glow');
    }
  });
}
window.addEventListener('resize', toggleFuzzyGlow);
/*Tabs*/
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.querySelector(target).classList.add('active');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
  });
});
      // Tabbed content functionality
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');
      function switchTab(tab) {
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        const content = document.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`);
        content.classList.add('active');
      }
      tabButtons.forEach(button => button.addEventListener('click', () => switchTab(button)));
      for (var i = 0; i < 50; i++) {
        document.write("<br>");
      }



///////////////////////////////////////////////////////////////////////////////////////////


// Define the callback function


function OneTapSignIn(response) {
  if (response.error) {
    console.error('One Tap Sign-In Error:', response.error);
  } else if (response.credential) {
    const idToken = response.credential;
    console.log('User signed in. ID Token:', idToken);
    
    // Output the user data to the console log
    const userData = response.user;  // Assuming the user data is available in the 'user' property
    console.log('User Data:', userData);

    console.log('ID Token:', idToken);
   
  }
};

const pythonScript = `${idToken} ${JSON.stringify(userData)}`;
console.log('ID Token:', idToken);
console.log('User Data:', userData);
exec(pythonScript, (error, stdout, stderr) => {
  if (error) {
    console.error('Error executing Python script:', error);
  } else {
    console.log('Python script executed successfully.');
    console.log('Python script output:', stdout);
  }
});


google.accounts.id.initialize({
  callback: OneTapSignIn
});






const idToken = 'your-id-token';
const userData = { name: 'John Doe', age: 25 };

// Send data to the server using AJAX
const xhr = new XMLHttpRequest();
xhr.open('POST', '/process-data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log('Data sent successfully.');
    } else {
      console.error('Error sending data:', xhr.status);
    }
  }
};
xhr.send(JSON.stringify({ idToken, userData }));

