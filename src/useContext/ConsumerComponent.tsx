import { useContext} from "react";
import {context, UserType} from "./UseContextComponent";

export const ConsumerComponent = () => {
	const user = useContext<UserType>(context)
	return (
		<div>
			<div>First: {user.first}</div>
			<div>Last: {user.last}</div>
		</div>
	)
}

