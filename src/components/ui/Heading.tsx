import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface IHeading {
	className?: string
}

export const Heading: React.FC<PropsWithChildren<IHeading>> = ({
	children,
	className,
}) => {
	return (
		<h1 className={clsx(className, 'font-semibold text-3xl')}>{children}</h1>
	)
}
