import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'
import { IconType } from 'react-icons'

interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
	type?: string
	label?: string
	placeholder?: string
	error?: string
	Icon?: IconType
}

const InputText = forwardRef<HTMLInputElement, IInputText>(
	({ type = 'text', label, placeholder, error, Icon, ...rest }, ref) => {
		return (
			<div className='flex flex-col mb-7 relative'>
				{label && (
					<label className='mb-1 text-neutral-600' htmlFor={rest.id}>
						{Icon && <Icon />}
						{label}
					</label>
				)}
				<input
					className={clsx(
						'border border-neutral-300 focus:border-primary outline-none transition-colors rounded-md px-3 py-1 w-full placeholder:text-neutral-300',
						{ 'border-red-400': error }
					)}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...rest}
				/>
				{error && (
					<span className='text-xs text-red-400 absolute -bottom-5'>
						{error}
					</span>
				)}
			</div>
		)
	}
)

InputText.displayName = 'InputText'

export { InputText }
