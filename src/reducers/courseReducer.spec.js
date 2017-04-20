import expect from 'expect';
import * as actions from '../actions/courseActions';
import courseReducer from './courseReducer';

describe('courseReducer test', () => {

	let initialState;
	beforeEach(() => {
		initialState = [
			{id: 1, title: '1'},
			{id: 2, title: '2'}
		];
	});

	describe('LOAD_COURSES_SUCCESS', () => {

		let courses = [
			{id: 3, title: '3'},
			{id: 4, title: '4'}
		];

		let action;
		let newState;
		beforeEach(() => {
			action = actions.loadCoursesSuccess(courses);
			newState = courseReducer(initialState, action);
		});

		it('should replace initial state with the new courses', () => {
			expect(newState.length).toBe(2);
			expect(newState[0].title).toBe('3');
			expect(newState[1].title).toBe('4');
		});
	});

	describe('UPDATE_COURSES_SUCCESS', () => {

		let course = {id: 1, title: '3'};

		let action;
		let newState;
		let updatedCourse;
		beforeEach(() => {
			action = actions.updateCourseSuccess(course);
			newState = courseReducer(initialState, action);
			updatedCourse = newState.find(c => {
				return c.id === course.id;
			});
		});

		it('should update course', () => {
			expect(updatedCourse.title).toBe('3');
			expect(updatedCourse.id).toBe(1);
		});
	});

	describe('CREATE_COURSES_SUCCESS', () => {

		let course = {id: 3, title: '3'};

		let action;
		let newState;
		let addedCourse;
		beforeEach(() => {
			action = actions.createCourseSuccess(course);
			newState = courseReducer(initialState, action);
			addedCourse = newState.find(c => {
				return c.id === course.id;
			});
		});

		it('should add course', () => {
			expect(addedCourse.title).toBe('3');
			expect(addedCourse.id).toBe(3);
		});
	});
});