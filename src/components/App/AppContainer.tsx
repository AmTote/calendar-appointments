import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { openAddReminder } from '../../redux/actions';
import App from './App';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onFabAddClick: () => dispatch(openAddReminder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
