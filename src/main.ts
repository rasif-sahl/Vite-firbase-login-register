import './router';

// Show preloader
document.getElementById('preloader')?.classList.add('active');

// Hide preloader
document.getElementById('preloader')?.classList.remove('active');
document.getElementById('preloaderContainer')?.classList.remove('preloader-container');
document.getElementById('preloaderContainer')?.classList.add('hide-preloader');


// Simulate a delay (e.g., fetching data)
// setTimeout(() => {
//   document.getElementById('preloader')?.classList.remove('active');
//   document.getElementById('preloaderContainer')?.classList.remove('preloader-container');
// document.getElementById('preloaderContainer')?.classList.add('hide-preloader');

// }, 2000);








// document.addEventListener('DOMContentLoaded', function() {
//     var preloader = document.getElementById('preloader');
//     var preloaderContainer = document.getElementById('preloader-container');

//     // Listen for animation end event
//     if (preloader && preloaderContainer) {
//         // Listen for animation end event
//         preloader.addEventListener('animationend', function() {
//             console.log('Animation ended');
//             // Hide preloader and its container
//             preloaderContainer.classList.add('hidden');
//         });
//     } else {
//         console.error('Preloader or preloaderContainer not found');
//     }
// });









// document.addEventListener('DOMContentLoaded', () => {
//     router();

//     // Add event listeners for navigation links if needed
//     document.querySelectorAll('a[data-link]').forEach(anchor => {
//         anchor.addEventListener('click', (e) => {
//             e.preventDefault();
//             const path = (e.target as HTMLAnchorElement).getAttribute('href')!;
//             history.pushState({}, '', path);
//             router();
//         });
//     });
// });
