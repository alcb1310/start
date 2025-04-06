import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'

import Header from '@/components/Header'
import appStyles from '@/style.css?url'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Tanstack Start Starter',
			},
			{
				name: 'description',
				content: 'Tanstack Start Starter',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appStyles,
			},
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	return (
		<RootDocument>
			<Header />

			<div className='px-4'>
				<Outlet />
			</div>
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	)
}
