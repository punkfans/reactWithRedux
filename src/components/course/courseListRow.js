import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';

const CourseListRow = ({course, actions}) => {

	function deleteCourse() {
		actions.deleteCourse(course.id)
		.then(() => {
			toastr.success('Course Deleted');
		});
	}

	return (
		<tr>
			<td><a href={course.watchHref} target="_blank">Watch</a></td>
			<th><a onClick={deleteCourse} style={{cursor: 'pointer', color: 'red'}}>Delete</a></th>
			<td><Link to={'/course/' + course.id}>{course.title}</Link></td>
			<td>{course.authorId}</td>
			<td>{course.category}</td>
			<td>{course.length}</td>
		</tr>
	);
};

CourseListRow.propTypes = {
	course: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListRow);