import universities from "../data/universities";

function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = angle => (angle * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
}

export async function findNearestUniversity(userCity) {
  // Use Geocoding API to get lat/lon from city name
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${userCity}`
  );
  const data = await res.json();

  if (!data.length) return null;

  const { lat, lon } = data[0];

  let nearest = null;
  let minDistance = Infinity;

  universities.forEach((univ) => {
    const dist = getDistance(lat, lon, univ.lat, univ.lon);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = univ;
    }
  });

  return nearest;
}
