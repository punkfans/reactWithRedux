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
		}
	}

	render() {
		return (
			<CourseForm
			allAuthors={this.props.authors}
			course={this.state.course}
			errors={this.state.errors}/>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps (state, ownProps) {
	let course = {id: '', watchHref: '', authorId: '', length: '', category: ''};
	const authorsFormatted = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		}
	});
	return {
		course: course,
		authors: authorsFormatted
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);