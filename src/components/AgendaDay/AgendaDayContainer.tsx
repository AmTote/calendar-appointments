import { connect } from 'react-redux';
import AgendaDay from './AgendaDay';
import { closeAgenda, ReminderRecordWithId } from '../../redux/actions';

interface Props {}

interface State {
	agendaStatus: {
		isOpen: boolean,
		date: Date
	},
	reminders: {
		items: ReminderRecordWithId
	}
}

const mapStateToProps = ( state: State, ownProps: Props ) => {
	const { agendaStatus, reminders } = state;

	return {
		agendaStatus,
		reminders: reminders.items
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onClose: () => {
			dispatch( closeAgenda() );
		}
	}
};

const AgendaDayContainer = connect( mapStateToProps, mapDispatchToProps )( AgendaDay );

export default AgendaDayContainer;
