import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('courseActions test', () => {

	let courses = [
		{id: 1},
		{id: 2}
	];

	describe('loadCourseSuccess', () => {

		it('should create LOAD_COURSE_SUCCESS action', () => {
			const result = {
				type: types.LOAD_COURSES_SUCCESS,
				courses: courses
			};
			expect(courseActions.loadCoursesSuccess(courses)).toEqual(result);
		});
	});
});