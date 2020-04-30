import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Input from '@material-ui/core/Input';
import { DateTimePicker } from 'material-ui-pickers';
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';

import { ReminderRecord } from "../../redux/actions";
import {getTime, startOfDay} from "date-fns";

const styles = (theme: Theme) => createStyles({
    addReminderFormContainer: {
        minHeight: '250px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:  "space-start"
    },
    closeButton: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    },
    field: {
        padding: '16px',
        maxWidth: '300px'
    }
});

interface Props extends WithStyles<typeof styles>{
    isOpen: boolean,
    onClose: () => void,
    addReminderRecord: (reminder: ReminderRecord) => void;
}

const initialReminder = {
    color: '#7e57c2',
    description: '',
    dateTime: new Date()
};

const AddReminder = (props: Props) => {
    const { classes, isOpen, onClose, addReminderRecord } = props;
    const [reminder, setReminder] = useState<ReminderRecord>(initialReminder);

    const handleDateTimeChange = (value) => {
        const updatedReminder = { ...reminder };

        updatedReminder.dateTime = value;

        setReminder(updatedReminder);
    };

    const handleDescriptionChange = (event) => {
        const updatedReminder = { ...reminder };

        updatedReminder.description = event.target.value;

        setReminder(updatedReminder);
    };

    const handleColorChange = (event) => {
        const updatedReminder = { ...reminder };

        updatedReminder.color = event.target.value;

        setReminder(updatedReminder);
    };

    const handleSubmit = () => {
        const id = getTime((startOfDay(reminder.dateTime)));
        const formattedReminder = {
            ...reminder,
            id
        };

        addReminderRecord(formattedReminder);
        onClose()
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby='form-dialog-title'
            fullWidth={true}
            maxWidth='md'
        >
            <DialogTitle id='form-dialog-title'>
                Add Reminder
                <IconButton aria-label='Close' className={ classes.closeButton } onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider light />
            <DialogContent className={ classes.addReminderFormContainer }>
                <div className={classes.field}>
                    <DateTimePicker
                        value={reminder.dateTime}
                        onChange={handleDateTimeChange}
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        fullWidth={true}
                        onChange={handleDescriptionChange}
                        id='outlined-multiline-flexible'
                        label='Description'
                        value={reminder.description}
                        variant='outlined'
                        inputProps={{ maxLength: 30 }}
                    />
                </div>
                <div className={classes.field}>
                    <Input
                        value={reminder.color}
                        onChange={handleColorChange}
                        type='color'
                        fullWidth={true}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button color='primary' autoFocus onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default withStyles(styles)( AddReminder );
