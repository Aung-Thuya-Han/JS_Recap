'use strict';

const target = document.querySelector('#target');

const browser = navigator.userAgentData.brands[2];
const operatingSystem = navigator.userAgentData.platform;

const currentDate = new Date();

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const dateAndTime = currentDate.toLocaleTimeString(
  'fi-FI',
  dateOptions
);

target.innerHTML = `
  <p>Browser: ${browser.brand} ${browser.version}</p>
  <p>Operating system: ${operatingSystem}</p>
  <p>Screen size: ${screen.width} × ${screen.height}</p>
  <p>Available screen space: ${screen.availWidth} × ${screen.availHeight}</p>
  <p>Browser viewport: ${window.innerWidth} × ${window.innerHeight}</p>
  <p>Date and time: ${dateAndTime}</p>
`;