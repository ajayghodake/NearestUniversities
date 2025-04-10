export async function getCoordinates(cityOrPin) {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cityOrPin}`);
    const data = await res.json();
    if (!data.length) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  }
  