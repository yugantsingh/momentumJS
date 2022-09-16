function onGeoOk(p) {
  const lat = p.coords.latitude;
  const lon = p.coords.longitude;
  console.log(lat, lon);
}
function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
