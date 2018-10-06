'use strict';

getLocation();
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  console.log(position.coords.latitude);

  const LONGITUDE = position.coords.latitude;
  const LATITUDE = position.coords.longitude;
  const API_KEY = 'ed13fbcb-dab4-41ff-b0d1-6f0528a99f4d';
  let url = `http://api.tripadvisor.com/api/partner/2.0/map/${LONGITUDE},${LATITUDE}?key=${API_KEY}`;
  console.log(url);

  let app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  let $app = $('#app');

  $.get(url, (resp) => {
    const data = resp.data;

    data.forEach(item => {
      console.log(item);
      $app.append(`<div>${item.name}</div>`);
    });

  }, 'json');
}
