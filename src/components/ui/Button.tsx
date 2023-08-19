import clsx from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'white'
}

export const Button: React.FC<PropsWithChildren<IButton>> = ({
	children,
	color = 'primary',
	className,
	...rest
}) => {
	const classList = clsx(
		className,
		'shadow-md rounded-md font-semibold px-5 py-1',
		{
			'bg-primary text-white': color === 'primary',
			'bg-white text-dark': color === 'white',
		}
	)

	return (
		<button className={classList} {...rest}>
			{children}
		</button>
	)
}
