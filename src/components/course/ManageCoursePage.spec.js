import React from 'react';
import { mount } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';
import expect from 'expect';

describe('ManageCoursePage test', () => {
	let element;

	beforeEach(() => {
		element = render();
	});

	describe('initial display', () => {
		it('should render four input field', () => {
			expect(element.find('input').length).toBe(4);
		});

		it('should render a select', () => {
			expect(element.find('select').length).toBe(1);
		});

		it('should have a button', () => {
			expect(findSubmitButton(element).prop('type')).toBe('submit');
		});
	});

	describe('hit submit when no data has been entered', () => {

		beforeEach(() => {
			findSubmitButton(element).simulate('click');
		});

		it('should see error msg', () => {
			expect(element.find('#error').length).toBe(1);
		});
	});
});

function render() {
	const props = {
		course: {id: '', watchHref: '', authorId: '', length: '', category: '', title: ''},
		errors: {},
		loading: false,
		authors: [],
		actions: {
			saveCourse: () => {
				return Promise.resolve();
			}
		}
	};
	return mount(<ManageCoursePage {...props}/>);
}

function findSubmitButton(element) {
	return element.find('input').last();
}