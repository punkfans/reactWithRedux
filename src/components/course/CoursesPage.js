import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.onTitleChange = this. onTitleChange.bind(this);
		this.redirectToAddCoursePage = this. redirectToAddCoursePage.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}

	redirectToAddCoursePage() {
		browserHistory.push('/course');
	}

	render() {
		const {courses} = this.props;
		return (
			<div>
				<h1>Courses</h1>
				<input type="submit" value="Add Course" className="btn-primary btn" onClick={this.redirectToAddCoursePage}/>
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