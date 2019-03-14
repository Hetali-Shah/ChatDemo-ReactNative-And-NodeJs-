import { connect } from 'react-redux';
import { addChatUserSet } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  chatUser: data => {
    dispatch(addChatUserSet(data))
  }
});

const mapStateToProps = state => ({
  addChatUser: state.addChatUser ? state.addChatUser : null
});

export default connect(mapStateToProps, mapDispatchToProps);
