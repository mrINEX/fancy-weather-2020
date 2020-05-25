const URL_API = 'https://api.opencagedata.com/';
const KEY = '12ff4fe1ac804a4689043079fcfc5b48';

export default function getMap(node) {
  const url = `${URL_API}geocode/v1/map?q=${`${node.latitude},${node.longitude}`}&key=${KEY}&pretty=1&no_annotations=1&abbrv=1`;
  return fetch(url)
    .then((response) => response)
    .then((result) => {
      const City = node;
      City.map = result.url;
      return City;
    });
}
