import React from 'react';
import {UseEffectComponent} from './UseEffectComponent';
import {UseStateComponent} from "./UseStateComponent";
import {UseContextComponent} from './useContext/UseContextComponent';
import {UseReducerComponent} from "./UseReducerComponent";
import {UseRefComponent} from "./UseRefComponent";
import {CustomerHookComponent} from "./CustomHookComponent";
import {TestComponent} from "./EvenMoreReactComponent";
import {RadioGroup} from "./RadioGroupPorvider/RadioGroup";
import CtxExample from "./useContextExample";


function App() {
	return (
		<div>
			<CtxExample/>
			<RadioGroup/>
			<UseRefComponent/>
			<UseStateComponent/>
			<UseEffectComponent/>
			<UseContextComponent/>
			<UseReducerComponent/>
			<CustomerHookComponent/>
			<TestComponent/>
		</div>
	);
}

export default App;
