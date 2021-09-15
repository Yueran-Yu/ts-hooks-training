import {ReactNode} from "react"

// Export props as interface
export interface HeadingProps {
	title: string
}

export const Heading = ({title}: HeadingProps) => {
	return (
		<h1>{title}</h1>
	)
}

// generic components using const
export const List = <ListItem extends ReactNode>(
	{
		items,
		render
	}: {
		items: ListItem[];
		render: (item: ListItem) => ReactNode
	}) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					{render(item)}
				</li>
			))}
		</ul>
	)
}

export const TestComponent = () => {
	return (
		<div>
			<Heading title='hello'/>
			<List
				items={['f', 'c', 'e']}
				render={(str) => <span>{str}</span>}/>
		</div>
	)
}