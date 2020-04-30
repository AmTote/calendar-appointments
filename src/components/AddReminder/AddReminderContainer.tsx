import { connect } from 'react-redux';
import AddReminder from './AddReminder';
import { ReminderRecordWithId } from "../../redux/actions";
import { closeAddReminder, addReminderRecord } from '../../redux/actions';

interface State {
    addReminderStatus: {
        isOpen: boolean
    }
}

const mapStateToProps = (state:State) => {
    return {
        isOpen: state.addReminderStatus.isOpen
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClose: () => {
            dispatch( closeAddReminder() );
        },
        addReminderRecord: (reminder: ReminderRecordWithId) => {
            dispatch( addReminderRecord(reminder))
        }
    }
};

const AddReminderContainer = connect( mapStateToProps, mapDispatchToProps )( AddReminder );

export default AddReminderContainer;
