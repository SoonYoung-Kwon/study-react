import React from 'react';

import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import IterationSample from './components/IterationSample';
import Info from './components/Info';

const App = () => {

	return (
		<div>
			<MyComponent name="React" favoriteNumber={3}>Redux</MyComponent> <pre/>
			<Counter></Counter> <pre/>
			<Say></Say> <pre/>
			<EventPractice></EventPractice> <pre/>
			<ValidationSample></ValidationSample> <pre/>
			<IterationSample></IterationSample> <pre/>
			<Info></Info> <pre/>

		</div>
	);
};

export default App;