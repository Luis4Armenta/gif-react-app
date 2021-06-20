import { shallow } from "enzyme"
import { GifReactApp } from '../GifReactApp'

describe('Probando <GifReactApp /> component', () => {
  test('Debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifReactApp />);
  
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de gategorias', () => {
    const categories = ['cats', 'cookies'];
    const wrapper = shallow(<GifReactApp defaultCategories= { categories }/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
  
})
