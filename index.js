let foo = $.get('http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396?key=ed13fbcb-dab4-41ff-b0d1-6f0528a99f4d', (err, resp) => {
  console.log(err, resp);
});
