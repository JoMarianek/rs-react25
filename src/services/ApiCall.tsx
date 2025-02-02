export const fetchAstronomicalObjects = async () => {
  const url = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  return json.astronomicalObjects;
};
