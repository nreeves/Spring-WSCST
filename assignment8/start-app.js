const { spawn } = require('child_process');
const path = require('path');

// Start the JSON server
console.log('Starting JSON Server...');
const jsonServer = spawn('node', ['server.js'], {
  stdio: 'inherit',
  shell: true
});

console.log('JSON Server started. Now starting React app...');

// Wait 2 seconds before starting React app to ensure JSON server is ready
// CORS headers are configured in server.js to allow access from React app
setTimeout(() => {
  // Start the React app
  const reactApp = spawn('npm', ['start'], {
    stdio: 'inherit',
    shell: true
  });

  // Handle process termination
  process.on('SIGINT', () => {
    jsonServer.kill();
    reactApp.kill();
    process.exit();
  });
}, 2000);

console.log('Both servers should now be starting. Check console for any errors.');
console.log('JSON Server should be running at http://localhost:3001');
console.log('React App should be running at http://localhost:3000');
