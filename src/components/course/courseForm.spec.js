import { shallow } from 'enzyme';
import expect from 'expect';
import React from 'react';
import CourseForm from './CourseForm';

function setup(loading) {
	const props = {
		course: {},
		loading: loading,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CourseForm {...props}/>);
}

describe('courseForm test', () => {

	describe('initial display', () => {

		var element;

		beforeEach(() => {
			element = setup(false);
		});

		it('should render form tag', () => {
			expect(element.find('form').length).toBe(1);
		});

		it('should render h1 tag', () => {
			expect(element.find('h1').length).toBe(1);
		});

		it('should render three TextInput tag', () => {
			expect(element.find('TextInput').length).toBe(3);
		});

		it('should render one SelectInput tag', () => {
			expect(element.find('SelectInput').length).toBe(1);
		});

		it('should render submit button with Save displayed on it', () => {
			expect(element.find('input').props().value).toBe('Save');
		});
	});

	describe('when saving is in progress', () => {
		it('should render submit button with Saving... displayed on it', () => {
			const element = setup(true);
			expect(element.find('input').props().value).toBe('Saving...');
		});
	});
});