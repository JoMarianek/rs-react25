import { ITEMS_PER_PAGE } from '../config/config';

const baseUrl = 'https://stapi.co/api/v2/rest/astronomicalObject';

export const fetchAstronomicalObjects = async (page: number) => {
  const url = `${baseUrl}/search?pageNumber=${page}&pageSize=${ITEMS_PER_PAGE}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  return json.astronomicalObjects;
};

export const fetchSingleAstronomicalObject = async (uid: string) => {
  const url = `${baseUrl}?uid=${uid}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  return json.astronomicalObject;
};
