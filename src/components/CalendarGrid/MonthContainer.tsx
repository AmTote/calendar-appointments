import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';
import CalendarDayContainer from '../CalendarDay/CalendarDayContainer';

const styles = () =>
	createStyles({
		monthContainer: {
			display: 'flex',
			width: '100%',
			flexGrow: 1,
			flexDirection: 'row',
			flexWrap: 'wrap',
			border: '1px solid lightgray',
		},
	});

interface Props extends WithStyles<typeof styles> {
	calendarCells: {
		date: Date;
	}[];
	date: Date;
}

const MonthContainer = (props: Props) => (
	<div className={props.classes.monthContainer}>
		{props.calendarCells.map((cell, i) => (
			<CalendarDayContainer key={i} calendarDate={props.date} myDate={cell.date} />
		))}
	</div>
);

export default withStyles(styles)(MonthContainer);
