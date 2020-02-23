import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { closeAgenda } from '../../redux/actions';
import AgendaDay from './AgendaDay';

interface State {
	agendaStatus: {
		isOpen: boolean;
		date: Date;
	};
}

const mapStateToProps = (state: State) => ({
	date: state.agendaStatus.date,
	isOpen: state.agendaStatus.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onClose: () => dispatch(closeAgenda()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay);
