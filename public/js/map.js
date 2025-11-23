mapboxgl.accessToken = mapToken;

let coordinates;

if (listing.geometry && listing.geometry.coordinates) {
  coordinates = listing.geometry.coordinates;
} else {
  coordinates = [77.5946, 12.9716];
}

const map = new mapboxgl.Map({
  container: "map",
  center: coordinates,
  zoom: 9,
});

new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);
