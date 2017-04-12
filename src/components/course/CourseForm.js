import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
	return (
		<form>
			<TextInput
			name="title"
			label="Title"
			value={course.title}
			onChnage={onChange}
			error={errors.title}/>

			<SelectInput
			name="authorId"
			label="Author"
			value={course.authorId}
			defaultOption="Select Author"
			options={allAuthors}
			onChnage={onChange}
			error={errors.authorId}/>

			<TextInput
			name="category"
			label="Category"
			value={course.category}
			onChnage={onChange}
			error={errors.category}/>

			<TextInput
			name="length"
			label="Length"
			value={course.length}
			onChnage={onChange}
			error={errors.length}/>

			<input
			type="submit"
			disabled={loading}
			value={loading? 'Saving...' : 'Save'}
			className="btn btn-primary"
			onClick={onSave}/>
		</form>
	);
};

CourseForm.propTypes= {
	course: PropTypes.object.isRequired,
	allAuthors: PropTypes.array,
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	errors: PropTypes.object
};

export default CourseForm;