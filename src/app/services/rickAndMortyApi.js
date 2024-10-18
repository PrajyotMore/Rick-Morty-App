const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchEpisodes() {
  const response = await fetch(`${BASE_URL}/episode`);
  const data = await response.json();
  return data.results;
}

export async function fetchCharacters(page = 1) {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data = await response.json();
  return {
    characters: data.results || [],
    info: data.info, // Contains pagination information like next and prev page URLs
  };
}
export async function fetchCharactersByEpisode(episodeId) {
  const response = await fetch(`${BASE_URL}/episode/${episodeId}`);
  const data = await response.json();
  const characterPromises = data.characters.map((url) => fetch(url).then((res) => res.json()));
  return Promise.all(characterPromises);
}
