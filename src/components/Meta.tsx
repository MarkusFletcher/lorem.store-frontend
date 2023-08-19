import Head from 'next/head'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

interface ISeo {
	title: string
	description?: string
	image?: string
}

export const wholeTitle = (title: string): string => `${title} | lorem.store`

export const Meta: React.FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	image,
	children,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{wholeTitle(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={wholeTitle(title)} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image || '/next.svg'} />
						<meta property='og:description' content={description} />
						{/* <meta property='og:site_name' content={siteName}/> */}
					</>
				) : (
					<meta property='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}
