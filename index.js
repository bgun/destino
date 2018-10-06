let foo = $.get('http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396?key=ed13fbcb-dab4-41ff-b0d1-6f0528a99f4d', (err, resp) => {
  console.log(err, resp);
});

/*                                                         */

getLocation();
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
      x.innerHTML = console.log(position.coords.latitude);
     console.log(position.coords.longitude);
    }
