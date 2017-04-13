import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.onTitleChange = this. onTitleChange.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		const {courses} = this.props;
		return (
			<div>
				<h1>Courses</h1>
				<CourseList courses={courses} />
			</div>
		);
	}
}

function mapStateToProps(state, ownprops) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

CoursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);