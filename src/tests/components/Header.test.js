import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import Header  from '../../components/Header';


test('should render Header correctly', ()=> {

    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('header');
    expect(result).toMatchSnapshot();
})
