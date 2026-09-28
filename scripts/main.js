/*
 * Author: Joshua Connor
 * Date: 2024-06-05
 * Description: Main JavaScript file for CSC 235 Bootstrap Sample
 */

console.log('Main JavaScript file loaded.');
const start = performance.now();
// ... code to measure ...

// Get the current date and time
const now = new Date();

// Format the time as a readable string
const formattedTime = now.toLocaleTimeString(); // Uses the user's local time format

// Find the HTML element and update its text content
document.getElementById("time").textContent = formattedTime;

// Measure the end time
const end = performance.now();
const elapsedTime = end - start;
// Log the elapsed time to the console
console.log(`Execution time: ${elapsedTime} milliseconds`);

//live noti
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}