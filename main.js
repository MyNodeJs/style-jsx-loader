<style>
	div {
		background: green;
	}
</style>
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './style-jsx-loader.css';

ReactDOM.render(
	<Counter />,
	document.getElementById('example')
);