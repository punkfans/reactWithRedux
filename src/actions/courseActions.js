import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
	return {
		type: types.LOAD_COURSES_SUCCESS,
		courses: courses
	};
}

export function updateCourseSuccess(course) {
	return {
		type: types.UPDATE_COURSE_SUCCESS,
		course: course
	};
}

export function createCourseSuccess(course) {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		course: course
	};
}

export function deleteCourseSuccess(courses) {
	return {
		type: types.DELETE_COURSE_SUCCESS,
		courses: courses
	};
}

export function loadCourses() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return courseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses));
		})
		.catch(error => {
			throw(error);
		});
	};
}

export function deleteCourse(courseId) {
	return dispatch => {
		return courseApi.deleteCourse(courseId)
		.then(courses => {
			dispatch(deleteCourseSuccess(courses));
		})
		.catch(error => {
			throw(error);
		});
	};
}

export function saveCourse(course) {
	return (dispatch, getState) => {
		dispatch(beginAjaxCall());
		return courseApi.saveCourse(course).then(savedCourse => {
			course.id ? dispatch(updateCourseSuccess(savedCourse)) :
			dispatch(createCourseSuccess(savedCourse));
		})
		.catch(error => {
			dispatch(ajaxCallError());
			throw(error);
		});
	};
}