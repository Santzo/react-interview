import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '../components/Todo'


Enzyme.configure({ adapter: new Adapter() });

describe('Todo tests', () => {
    const props = {
        todo: {
            id: 0,
            name: 'TestTodo',
            complete: false
        },
        onClick: jest.fn(),
        onRemoveClick: jest.fn()
    }
    const wrapper = shallow(<Todo {...props} />);
    const checkbox = wrapper.find('#check');
    const todoName = wrapper.find('.todoName').first();
    const removeBtn = wrapper.find('.btn');

    test('checkbox should not be checked initially, todo not completed', () => {
        expect(checkbox.prop('defaultChecked')).toBe(false);
    });

    test('todo value should match added name', () => {
        expect(todoName.text()).toBe(props.todo.name);
    });

    test('check if onClick gets called when checkbox is clicked, todo completed', () => {
        checkbox.simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    })

    test('check if onRemoveClick gets called when remove button is clicked', () => {
        removeBtn.simulate('click');
        expect(props.onRemoveClick).toHaveBeenCalled();
    })

})