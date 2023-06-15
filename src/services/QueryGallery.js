const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35065203-c3198a287b2074eded36e9961';
export const getImages = async (query, page) => {
  const fetchImages = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    Response.reject('Incorect query');
  });
  return fetchImages;
};
