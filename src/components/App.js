
 import React , { Component } from 'react';
 import {connect} from 'react-redux';
 import { addReminder, deleteReminder } from '../actions';




 class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	text: ''	
}
}

	addReminder() {
	
	this.props.addReminder(this.state.text);
}

	deleteReminder(id) {

	console.log('deleting in application' , id);
	console.log('this.props', this.props);

}
	

	renderReminders() {
	const { reminders } = this.props;
	return (
	<ul className="List-group col-sm-4">
	{
	reminders.map(reminder => {
	return (
	<li key={reminder.id} className="List-group-item">
	<div className="List-item">{reminder.text}</div>
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
	console.log('this.props' , this.props);
	return (

	<div className="App">
	<div className="title" id="title1">
	Reminder Me
	</div>
	<div className="form-inline reminder-form">
	<div className="form-group">
	<input 
	className="form-control"
	placeholder="I have to.."
	onChange={event => this.setState({text: event.target.value})}
	/>
	</div>

	
	<button
	type="button" id="reminder"
	className="btn btn-add"
	onClick={() => this.addReminder()}
	>
	Add Reminder 
	</button>
	</div>
	{ this.renderReminders() }

	</div>
	)
	}
	}

function mapSateToProps(state) {

return {

	reminders: state
}

}
 


export default connect(mapSateToProps, {addReminder , deleteReminder})(App);