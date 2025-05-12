const { spawn } = require('child_process');
const path = require('path');

console.log('Starting JSON Server...');
const jsonServer = spawn('node', ['server.js'], {
  stdio: 'inherit',
  shell: true
});

console.log('JSON Server started. Now starting React app...');


setTimeout(() => {
  const reactApp = spawn('npm', ['start'], {
    stdio: 'inherit',
    shell: true
  });

  process.on('SIGINT', () => {
    jsonServer.kill();
    reactApp.kill();
    process.exit();
  });
}, 2000);

console.log('Both servers should now be starting. Check console for any errors.');
console.log('JSON Server should be running at http://localhost:3000');
console.log('React App should be running at http://localhost:3000');
