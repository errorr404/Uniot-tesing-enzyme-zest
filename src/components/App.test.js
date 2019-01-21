import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const app = shallow(<App />)
describe('App',()=>{
  it('renders correctly',()=>{
    expect(app).toMatchSnapshot();
  })

  it('initializes the state woth an empty list if gift',()=>{
    expect(app.state().gifts).toEqual([])
  })
  describe('when clicking the `add-gift` button',()=>{
    beforeEach(() => {
      // .find allows us to find the elemets by jsx or it's tag or css classname
        app.find('.btn-add').simulate('click');
    })

    afterEach(()=>{
      app.setState({gifts:[]})
    })
    it('adds a new gift to `state`',() => {
      expect(app.state().gifts).toEqual([{id:1}])
    })
    it('adds a new gift to the render list ',() => {
        expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })

})
