import React, {createContext, useState} from "react";
import {ConsumerComponent} from "./ConsumerComponent";

const initialState = {
	first: "Jack",
	last: 'Harry'
}
export type UserType = typeof initialState
export const context = createContext<typeof initialState>(initialState)

export const UseContextComponent = () => {
	const [user, setUser] = useState<UserType>({first: "Jane", last: "Smith"})
	return (
		<context.Provider value={user}>
			<h1>USE Context</h1>
			<ConsumerComponent/>
			<button onClick={() => setUser({first: 'Alla', last: 'Wood'})}>
				Change context
			</button>
		</context.Provider>
	);
}