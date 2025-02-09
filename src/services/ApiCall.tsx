import { ITEMS_PER_PAGE } from '../config';

export const fetchAstronomicalObjects = async (page: number) => {
  const url = `https://stapi.co/api/v2/rest/astronomicalObject/search?pageNumber=${page}&pageSize=${ITEMS_PER_PAGE}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  return json.astronomicalObjects;
};

export const fetchSingleAstronomicalObject = async (uid: string) => {
  const url = `https://stapi.co/api/v2/rest/astronomicalObject?uid=${uid}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  return json.astronomicalObject;
};
