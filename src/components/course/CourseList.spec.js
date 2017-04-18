import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import CourseList from './CourseList';

describe('CourseList component', () => {

	let element;

	beforeEach(() => {
		element = render();
	});

	it('should render a table', () => {
		expect(element.find('table').length).toBe(1);
	});

	it('should render six columns', () => {
		expect(element.find('th').length).toBe(6);
	});

	xit('should render two rows of courses', () => {
		console.log(element.find('CourseListRow'));
		expect(element.find('CourseListRow').length).toBe(2);
	});
});

function render() {
	const props = {
		courses: [
			{
				id: 'test',
				watchHref: '',
				authorId: '',
				length: '',
				category: '',
				title: ''
			}
		]
	};

	return shallow(<CourseList {...props}/>);
}