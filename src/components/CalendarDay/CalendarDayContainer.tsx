import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { openAgenda } from '../../redux/actions';
import CalendarDay from './CalendarDay';

interface Props {}

interface State {}

interface DateObj {
	date: Date;
}

const mapStateToProps = (state: State, ownProps: Props) => {
	return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onDayClick: (date: Date) => dispatch(openAgenda(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
