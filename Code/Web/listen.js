const fs = require('fs');
const { exec } = require('child_process');

// Function to write the variable to write.py file
function writeToFile(variable) {
  const content = `user = '${variable}'\n`;

  fs.writeFile('write.py', content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Variable written to write.py');
      executeScript();
    }
  });
}

// Function to execute write.py script
function executeScript() {
  exec('python write.py', (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing write.py:', error);
    } else {
      console.log('write.py script executed successfully');
      console.log('Output:', stdout);
      console.error('Error:', stderr);
    }
  });
}

// Listening for console log messages
console.log = function (message) {
  if (
    typeof message === 'string' &&
    !message.toLowerCase().includes('warning') &&
    !message.toLowerCase().includes('error') &&
    message.toLowerCase().startsWith('encoded jwt id token')
  ) {
    const variable = message.slice('Encoded JWT ID token'.length).trim();
    writeToFile(variable);
  }
};

// Example console logs
console.log('Encoded JWT ID token: ABC123');
console.log('Some other log message');
console.log('Warning: Something happened');
console.log('Error: Something went wrong');
