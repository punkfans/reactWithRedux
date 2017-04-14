import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
	constructor (props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};

		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.course.id != nextProps.course.id) {
			this.setState({ course: Object.assign({}, nextProps.course) });
		}
	}

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

	saveCourse(event) {
		event.preventDefault();
		this.props.actions.saveCourse(this.state.course);
		this.context.router.push('/courses');
	}

	render() {
		return (
			<CourseForm
			allAuthors={this.props.authors}
			onSave={this.saveCourse}
			onChange={this.updateCourseState}
			course={this.state.course}
			errors={this.state.errors}/>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.arrayOf(PropTypes.object).isRequired,
	actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router: PropTypes.object
};

function mapStateToProps (state, ownProps) {
	let courseId = ownProps.params.id;
	let course = {id: '', watchHref: '', authorId: '', length: '', category: '', title: ''};
	const authorsFormatted = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

	if(courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}

	return {
		course: course,
		authors: authorsFormatted
	};
}

function getCourseById(courses, id) {
	let course = courses.filter(course => {
		return course.id == id;
	});

	if(course.length !== 0) {
		return course[0];
	}else {
		return null;
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);