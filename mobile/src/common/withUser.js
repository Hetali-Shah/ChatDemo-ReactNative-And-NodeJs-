import { connect } from 'react-redux';
import { userSet } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  setUser: data => {
    dispatch(userSet(data))
  }
});

const mapStateToProps = state => ({
  user: state.user ? state.user : null
});

export default connect(mapStateToProps, mapDispatchToProps);
