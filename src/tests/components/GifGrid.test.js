import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Probando el componente <GifGrid />', () => {
  const category = 'cats';
  
  test('Debe de cargar el componente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    const wrapper = shallow(<GifGrid category={ category }/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier-cosa.jpg',
      title: 'Cualquier cosa'
    },
    {
      id: '123',
      url: 'https://localhost/cualquier-cosa.jpg',
      title: 'Cualquier cosa'
    }];
    
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    
    const wrapper = shallow(<GifGrid category={ category }/>);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })
  
  
});
