<style>
	body {
		background: red;
	}
</style>
import React from 'react';
import ReactDOM from 'react-dom';
export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
		this.tick = this.tick.bind(this);
	}
	tick() {
		this.setState({count: this.state.count + 1});
	}
	render() {
		return (
			<div onClick={this.tick}>
				Clicks: {this.state.count}
			</div>
		);
	}
}

Counter.defaultProps = {initialCount: 0};