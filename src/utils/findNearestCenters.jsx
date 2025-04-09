import emversityCenters from "../data/emversityCenters";

// 👇 Paste these 2 helper functions directly here
async function getCoordinatesFromCity(cityName) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
    );
    const data = await res.json();

    if (!data.length) return null;

    const { lat, lon } = data[0];
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// 👇 This is your main function
export async function findNearestCenters(cityName) {
  const userCoords = await getCoordinatesFromCity(cityName);
  if (!userCoords) return [];

  const centersWithDistance = emversityCenters.map((center) => {
    const distance = calculateDistance(
      userCoords.lat,
      userCoords.lon,
      center.lat,
      center.lon
    );
    return { ...center, distance };
  });

  centersWithDistance.sort((a, b) => a.distance - b.distance);
  return centersWithDistance.slice(0, 3);
}
