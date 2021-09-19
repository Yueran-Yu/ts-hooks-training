import React, {createContext, ReactNode, useState} from "react";

type SetValue = (value: any) => void
interface IAppContext {
	valueA: any
	setValueA: SetValue
	valueB: any;
	setValueB: SetValue
}

export const SimpleCtx = createContext<IAppContext>({valueA:'', setValueA: ()=>{}, valueB:'',setValueB:()=>{}})

const CtxProvider: React.FC<ReactNode> = ({children}) => {
	const [valueA, setValueA] = useState(null)
	const [valueB, setValueB] = useState(null)

	return (
		<SimpleCtx.Provider value={{valueA, setValueA, valueB, setValueB}}>
			{children}
		</SimpleCtx.Provider>
	)
}

export default CtxProvider;