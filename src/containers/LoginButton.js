import { connect } from 'react-redux';
import { toggleLoginAction } from '../actions';
import LoginButton from '../components/LoginButton';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  toggleLogin: (val) => dispatch(toggleLoginAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
