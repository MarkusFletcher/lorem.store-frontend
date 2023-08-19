import { Meta } from '@components/Meta'
import { useAuth } from '@hooks/useAuth'
import { useAuthRedirect } from '@hooks/useAuthRedirect'
import { IRegisterData } from '@interface/user.interface'
import { useActions } from '@redux/hooks'
import { Button } from '@ui/Button'
import { Heading } from '@ui/Heading'
import { InputText } from '@ui/InputText'
import { isEmail } from '@utils/isEmail'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export const Register: React.FC = () => {
	const { isLoading, user } = useAuth()

	// useAuthRedirect()

	const { register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IRegisterData>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IRegisterData> = data => {
		register(data)
		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex flex-col h-screen items-center justify-center'>
				<form
					className='mx-auto bg-white p-8 rounded-xl sm:min-w-[500px] min-w-[80vw]'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading className='mx-auto mb-4'>Register</Heading>
					<InputText
						label='Login'
						error={errors.login?.message}
						placeholder='Enter login'
						{...formRegister('login', { required: 'Enter login' })}
					></InputText>
					<InputText
						label='Email'
						type='email'
						error={errors.email?.message}
						placeholder='Enter email'
						{...formRegister('email', {
							required: 'Enter email',
							validate: value => isEmail(value) || 'Enter valid email',
						})}
					></InputText>
					<InputText
						label='Name'
						error={errors.name?.message}
						placeholder='Enter name'
						{...formRegister('name')}
					></InputText>
					<InputText
						label='Phone'
						type='phone'
						error={errors.phone?.message}
						placeholder='Enter phone'
						{...formRegister('phone')}
					></InputText>
					<InputText
						label='Password'
						type='password'
						error={errors.password?.message}
						placeholder='Enter password'
						{...formRegister('password', { required: 'Enter password' })}
					></InputText>
					<Button className='w-full mb-4'>Register</Button>
					<span className='mr-1'>Already have an account?</span>
					<Link className='text-primary underline' href='/auth/login'>
						Sign in
					</Link>
				</form>
			</section>
		</Meta>
	)
}
