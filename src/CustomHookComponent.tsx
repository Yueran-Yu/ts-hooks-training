import {useState, useEffect} from 'react';


export interface Beverage {
	name: string,
	producerName: string,
	beverageName: string,
	beverageColor: string,
	beverageStyle: string,
	producerLocation: string,
	abv: number,
	ibu: number,
	logo: string,
	level: number
}

const useFetchData = <Type extends any>(url: string): { data: Type | null, done: Boolean } => {
	const [data, setData] = useState<Type | null>(null)
	const [done, setDone] = useState(false)

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then((data: Type) => {
				setData(data)
				setDone(true)
			})
	}, [url])
	return {data, done}
}

export const CustomerHookComponent = () => {
	const {data, done} = useFetchData<Beverage[]>("/hv-taplist.json")

	return (
		<div>
			{
				done && data!.map
				(d => <img src={d.logo} alt='beverage-logo'/>)
			}
		</div>
	)
}