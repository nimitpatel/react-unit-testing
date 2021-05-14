import { shallow } from 'enzyme';
import App from '../App';

describe('counter comp test', () => {
  const wrapper = shallow(<App />)

  test('count starts with 0', () => {
    const p = wrapper.find('p').text()

    expect(p).toBe('count: 0')

    console.log(wrapper.debug())
  })

  test('increment count by 1 by simulating btn click', () => {
    const btn = wrapper.find('button')

    btn.simulate('click')

    const p = wrapper.find('p').text()

    expect(p).toBe('count: 1')

    console.log(wrapper.debug())
  })
})
