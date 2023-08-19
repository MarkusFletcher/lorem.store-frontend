import { Meta } from '@components/Meta'
import { useAuth } from '@hooks/useAuth'
import { useAuthRedirect } from '@hooks/useAuthRedirect'
import { ILoginData } from '@interface/user.interface'
import { useActions } from '@redux/hooks'
import { Button } from '@ui/Button'
import { Heading } from '@ui/Heading'
import { InputText } from '@ui/InputText'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export const Login: React.FC = () => {
	const { isLoading, user } = useAuth()

	// useAuthRedirect()

	const { login } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ILoginData>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<ILoginData> = data => {
		login(data)
		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex flex-col h-screen items-center justify-center'>
				<form
					className='mx-auto bg-white p-8 rounded-xl sm:min-w-[400px] min-w-[80vw]'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading className='mx-auto mb-4'>Login</Heading>
					<InputText
						label='Login or email'
						error={errors.login?.message}
						placeholder='Enter login or email'
						{...formRegister('login', { required: 'Enter login or email' })}
					></InputText>
					<InputText
						label='Password'
						type='password'
						error={errors.password?.message}
						placeholder='Enter password'
						{...formRegister('password', { required: 'Enter password' })}
					></InputText>
					<Button className='w-full mb-4'>Login</Button>
					<span className='mr-1'>Don&apos;t have an account yet?</span>
					<Link className='text-primary underline' href='/auth/register'>
						Register
					</Link>
				</form>
			</section>
		</Meta>
	)
}
