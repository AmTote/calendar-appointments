import React, { useMemo } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { WithStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';

import * as dateFns from 'date-fns';
import {format, getTime, startOfDay} from "date-fns";
import ListItem from "@material-ui/core/ListItem";

import { ReminderRecordWithId } from "../../redux/actions";


const styles = (theme: Theme) => createStyles({
	remindersContainer: {
		minHeight: '250px',
		marginTop: '10px',
		overflowY: 'auto',
		maxHeight: '400px'
	},
	closeButton: {
		position: 'absolute',
		right: '10px',
		top: '10px'
	},
	toolbarButtonHidden: {
		visibility: 'hidden'
	},
	reminder: {
		display: 'inline-block',
	},
	reminderDescription: {
		marginLeft: '4px',
		wordBreak: 'break-all'
	},
	toolbarButtonVisible: {
		visibility: 'visible'
	}
});

interface Props extends WithStyles<typeof styles>{
	agendaStatus: {
		isOpen: boolean,
		date: Date
	}
	onClose: () => void,
	reminders: ReminderRecordWithId;
}

const AgendaDay = (props: Props) => {
	const { classes, agendaStatus, onClose, reminders } = props;
	const dateTitle = agendaStatus.date ? dateFns.format( agendaStatus.date, 'LLLL do, yyyy' ) : 'Closing';

	const currentReminders = useMemo(() => {
		const dayId = getTime((startOfDay(agendaStatus.date)));

		return reminders[dayId] || [];
	}, [agendaStatus, reminders]);

	return (
		<Dialog
			open={ agendaStatus.isOpen }
			onClose={ onClose }
			aria-labelledby='form-dialog-title'
			fullWidth={ true }
			maxWidth='md'
		>
			<DialogTitle id='form-dialog-title'>
				{ dateTitle }
				<IconButton aria-label='Close' className={ classes.closeButton } onClick={ onClose }>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<Divider light />
			<DialogContent className={ classes.remindersContainer }>
				{
					currentReminders.map((reminder, index) => {
						const formattedTime = format(reminder.dateTime, 'hh:mm');
						const id = `${index}${reminder.id}`;

						return (
							<ListItem key={id} style={{ color: reminder.color }} className={classes.reminder}>
								<span>
									{formattedTime}:
								</span>
								<span className={classes.reminderDescription}>
									{reminder.description}
								</span>
								<Divider />
							</ListItem>
						);
					})
				}
			</DialogContent>
		</Dialog>
	);
};

export default withStyles( styles )( AgendaDay );
