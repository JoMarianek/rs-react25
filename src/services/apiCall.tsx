const url =
  'https://restcountries.com/v3.1/all?fields=name,population,region,flag';

export const fetchCountries = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
