
 import React , { Component } from 'react';
 import {connect} from 'react-redux';
 import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';



 class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	text: '',
	dueDate: ''	
}
}

	addReminder() {
	console.log('this.state.dueDate', this.state.dueDate);
	this.props.addReminder(this.state.text, this.state.dueDate);
}
	

	deleteReminder(id) {

	this.props.deleteReminder(id);

}
	

	renderReminders() {
	const { reminders } = this.props;
	return (
	<ul className="List-group col-sm-4">
	{
	reminders.map(reminder => {
	return (
	<li key={reminder.id} className="List-group-item">
	<div className="List-item">
	<div>{reminder.text}</div>
	<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
	</div>
	
	<div className="List-item delete-button"
	onClick={() => this.deleteReminder(reminder.id)}

	>
	
	&#x2715;
	</div>
	</li>
	)
	})
	
	


} 
</ul>
)
}


	render() {
	return (
        <div className="App">
	<div className="title" id="title1">
	Remind Me
	</div>
	
	<div className="form-inline reminder-form">
	<div className="form-group">
	<input 
	className="form-control" 
	placeholder="I have to.."
	onChange={event => this.setState({text: event.target.value})}
	/>
	<input 
	className="form-control"
	type="datetime-local"
	onChange={event => this.setState({dueDate: event.target.value})}
	/>

	
	<button
	type="button" id="reminder"
	className="btn btn-add"
	onClick={() => this.addReminder()}
	>
	Add Reminder 
	</button>
	</div>
	{ this.renderReminders() }
	< button type="button" id="clearall" 
	className="btn btn-clearAll" 
	onClick={() => this.props.clearReminders()}
	>
	Clear All
	
	
	</button>
	</div>
	</div>
	
	)
	
	}
	}

function mapSateToProps(state) {

return {

	reminders: state
}

}
 


export default connect(mapSateToProps, {addReminder , deleteReminder,clearReminders})(App);