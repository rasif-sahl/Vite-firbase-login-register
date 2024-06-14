import './router';

// Show preloader
document.getElementById('preloader')?.classList.add('active');

// Hide preloader
document.getElementById('preloader')?.classList.remove('active');
document.getElementById('preloaderContainer')?.classList.remove('preloader-container');
document.getElementById('preloaderContainer')?.classList.add('hide-preloader');