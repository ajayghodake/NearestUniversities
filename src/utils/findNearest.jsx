import { getCoordinates } from './getCoordinates';
import { getDistance } from './getDistance';

export async function findNearest(city, dataArray, topN = 3) {
  const coords = await getCoordinates(city);
  if (!coords) return [];

  const results = dataArray.map(item => ({
    ...item,
    distance: getDistance(coords.lat, coords.lon, item.lat, item.lon),
  }));

  results.sort((a, b) => a.distance - b.distance);
  return results.slice(0, topN);
}
