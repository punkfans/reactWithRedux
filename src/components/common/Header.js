import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from "./LoadingDots";
import { connect } from 'react-redux';

const Header = ({loading}) => {
	return(
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/courses" activeClassName="active">Courses</Link>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
			{loading && <LoadingDots interval={300} dots={3}/>}
		</nav>
	);
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Header);
