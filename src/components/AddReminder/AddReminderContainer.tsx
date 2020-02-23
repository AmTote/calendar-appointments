import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeAddReminder } from '../../redux/actions';
import AddReminder from './AddReminder';

interface State {
	addReminderStatus: {
		isOpen: boolean;
	};
}

const mapStateToProps = (state: State) => ({
	isOpen: state.addReminderStatus.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onClose: () => dispatch(closeAddReminder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
