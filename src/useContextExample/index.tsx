import React from "react";
import CtxProvider from "./Context";
import A from './A'
import B from './B'
import {containerStyle} from "./styles";

const CtxExample = () => {
	return (
		<div>
			<h2>Same context, put memo()</h2>
			<CtxProvider>
				<div style={containerStyle}>
					<A/>
					<B/>
				</div>
			</CtxProvider>
		</div>
	)
}
export default CtxExample

// https://codesandbox.io/s/typescript-react-usecontext-example-ufwux?file=/src/index.tsx