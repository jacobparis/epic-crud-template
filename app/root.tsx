
}
	)
		</Document>
			<GeneralErrorBoundary />
		<Document nonce={nonce}>
	return (

	// to give the user a better UX.
	// Just make sure your root route never errors out and you'll always be able

	// This would require a change in Remix.
	// We could probably do better than this (it's possible the loader did run).
	// likely failed to run so we have to do the best we can.
	// NOTE: you cannot use useLoaderData in an ErrorBoundary because the loader

	const nonce = useNonce()
	// the nonce doesn't rely on the loader so we can access that
export function ErrorBoundary() {

export default withSentry(AppWithProviders)

}
	)
		</HoneypotProvider>
			<App />
		<HoneypotProvider {...data.honeyProps}>
	return (
	const data = useLoaderData<typeof loader>()
function AppWithProviders() {

}
	)
		</Document>
			<EpicProgress />
			<EpicToaster closeButton position="top-center" theme={theme} />
			<Outlet />
		>
			allowIndexing={allowIndexing}
			env={data.ENV}
			theme={theme}
			nonce={nonce}
		<Document
	return (

	useToast(data.toast)
	const allowIndexing = data.ENV.ALLOW_INDEXING !== 'false'
	const theme = useTheme()
	const nonce = useNonce()
	const data = useLoaderData<typeof loader>()
function App() {

}
	)
		</html>
			</body>
				<KCDShop />
				<Scripts nonce={nonce} />
				<ScrollRestoration nonce={nonce} />
				/>
					}}
						__html: `window.ENV = ${JSON.stringify(env)}`,
					dangerouslySetInnerHTML={{
					nonce={nonce}
				<script
				{children}
			<body className="bg-background text-foreground">
			</head>
				<Links />
				)}
					<meta name="robots" content="noindex, nofollow" />
				{allowIndexing ? null : (
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta charSet="utf-8" />
				<Meta />
				<ClientHintCheck nonce={nonce} />
			<head>
		<html lang="en" className={`${theme} h-full overflow-x-hidden`}>
	return (
}) {
	allowIndexing?: boolean
	env?: Record<string, string>
	theme?: Theme
	nonce: string
	children: React.ReactNode
}: {
	allowIndexing = true,
	env = {},
	theme = 'light',
	nonce,
	children,
function Document({

}
	return headers
	}
		'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
	const headers = {
export const headers: HeadersFunction = ({ loaderHeaders }) => {

}
	)
		},
			),
				toastHeaders,
				{ 'Server-Timing': timings.toString() },
			headers: combineHeaders(
		{
		},
			honeyProps,
			toast,
			ENV: getEnv(),
			},
				},
					theme: getTheme(request),
				userPrefs: {
				path: new URL(request.url).pathname,
				origin: getDomainUrl(request),
				hints: getHints(request),
			requestInfo: {
			user,
		{
	return json(

	const honeyProps = honeypot.getInputProps()
	const { toast, headers: toastHeaders } = await getToast(request)
	}
		await logout({ request, redirectTo: '/' })
		// them in the database. Maybe they were deleted? Let's log them out.
		// something weird happened... The user is authenticated but we can't find
		console.info('something weird happened')
	if (userId && !user) {
		: null
			)
				{ timings, type: 'find user', desc: 'find user in root' },
					}),
						where: { id: userId },
						},
							},
								},
									},
										select: { entity: true, action: true, access: true },
									permissions: {
									name: true,
								select: {
							roles: {
							image: { select: { id: true } },
							username: true,
							name: true,
							id: true,
						select: {
					prisma.user.findUniqueOrThrow({
				() =>
		? await time(
	const user = userId

	})
		desc: 'getUserId in root',
		type: 'getUserId',
		timings,
	const userId = await time(() => getUserId(request), {
	const timings = makeTimings('root loader')
export async function loader({ request }: LoaderFunctionArgs) {

}
	]
		{ name: 'description', content: `Your own captain's log` },
		{ title: data ? 'Epic Notes' : 'Error | Epic Notes' },
	return [
export const meta: MetaFunction<typeof loader> = ({ data }) => {

}
	].filter(Boolean)
		{ rel: 'stylesheet', href: tailwindStyleSheetUrl },
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
		} as const, // necessary to make typescript happy
			crossOrigin: 'use-credentials',
			href: '/site.webmanifest',
			rel: 'manifest',
		{
		{ rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
		},
			href: '/favicons/favicon-32x32.png',
			type: 'image/png',
			rel: 'alternate icon',
		{
		{ rel: 'mask-icon', href: '/favicons/mask-icon.svg' },
		{ rel: 'preload', href: tailwindStyleSheetUrl, as: 'style' },
		{ rel: 'preload', href: iconsHref, as: 'image' },
		// Preload svg sprite as a resource to avoid render blocking
	return [
export const links: LinksFunction = () => {

import { getToast } from './utils/toast.server.ts'
import { makeTimings, time } from './utils/timing.server.ts'
import { type Theme, getTheme } from './utils/theme.server.ts'
import { useTheme } from './routes/resources+/theme-switch.tsx'

import { useNonce } from './utils/nonce-provider.ts'
import { combineHeaders, getDomainUrl } from './utils/misc.tsx'
import { honeypot } from './utils/honeypot.server.ts'
import { getEnv } from './utils/env.server.ts'
import { prisma } from './utils/db.server.ts'
import { ClientHintCheck, getHints } from './utils/client-hints.tsx'
import { getUserId, logout } from './utils/auth.server.ts'
import tailwindStyleSheetUrl from './styles/tailwind.css?url'
import { KCDShop } from './kcdshop.tsx'
import { EpicToaster } from './components/ui/sonner.tsx'
import { href as iconsHref } from './components/ui/icon.tsx'
import { useToast } from './components/toaster.tsx'
import { EpicProgress } from './components/progress-bar.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import { withSentry } from '@sentry/remix'
} from '@remix-run/react'
	useLoaderData,
	ScrollRestoration,
	Scripts,
	Outlet,
	Meta,
	Links,
import {
} from '@remix-run/node'
	type MetaFunction,
	type LinksFunction,
	type HeadersFunction,
	type LoaderFunctionArgs,
	json,
import {