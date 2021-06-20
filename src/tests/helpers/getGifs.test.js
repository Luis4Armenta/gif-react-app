import { getGifs } from "../../helpers/getGifs";
const NUM_OF_DEFAULT_RESULTS = 10;

describe('Pruebas con getGifs con fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('dogs');

    expect(gifs.length).toBe(NUM_OF_DEFAULT_RESULTS);
  });

  test('debe de ser cero si no se da una categoría', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  })
  
})
