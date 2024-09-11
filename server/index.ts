
})
	})
		server.close((e) => (e ? reject(e) : resolve('ok')))
	await new Promise((resolve, reject) => {
closeWithGrace(async () => {

})
	)
		`.trim(),
${chalk.bold('Press Ctrl+C to stop')}
${lanUrl ? `${chalk.bold('On Your Network:')}  ${chalk.cyan(lanUrl)}` : ''}
${chalk.bold('Local:')}            ${chalk.cyan(localUrl)}
		`
	console.log(

	}
		lanUrl = `http://${localIp}:${portToUse}`
	if (/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(localIp)) {
	// https://github.com/facebook/create-react-app/blob/d960b9e38c062584ff6cfb1a70e1512509a966e7/packages/react-dev-utils/WebpackDevServerUtils.js#LL48C9-L54C10
	// https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces
	// Check if the address is a private ip
	const localIp = ipAddress() ?? 'Unknown'
	let lanUrl: string | null = null
	const localUrl = `http://localhost:${portToUse}`
	console.log(`🚀  We have liftoff!`)
	}
		)
			),
				`⚠️  Port ${desiredPort} is not available, using ${portToUse} instead.`,
			chalk.yellow(
		console.warn(
	if (!portAvailable) {
const server = app.listen(portToUse, () => {

}
	process.exit(1)
	console.log(`⚠️ Port ${desiredPort} is not available.`)
if (!portAvailable && !IS_DEV) {
const portAvailable = desiredPort === portToUse
})
	port: portNumbers(desiredPort, desiredPort + 100),
const portToUse = await getPort({
const desiredPort = Number(process.env.PORT || 3000)

)
	}),
		build: getBuild,
		mode: MODE,
		}),
			serverBuild: getBuild(),
			cspNonce: res.locals.cspNonce,
		getLoadContext: (_: any, res: any) => ({
	createRequestHandler({
	'*',
app.all(

}
	})
		next()
		res.set('X-Robots-Tag', 'noindex, nofollow')
	app.use((_, res, next) => {
if (!ALLOW_INDEXING) {

}
	return build as unknown as ServerBuild
	// not sure how to make this happy 🤷‍♂️
			await import('../build/server/index.js')
			// but it may not exist just yet.
		: // @ts-ignore this should exist before running the server
		? viteDevServer.ssrLoadModule('virtual:remix/server-build')
	const build = viteDevServer
async function getBuild() {

})
	return generalRateLimit(req, res, next)

	}
		return strongestRateLimit(req, res, next)
	if (req.path.includes('/verify')) {
	// can have a token in the query string
	// the verify route is a special case because it's a GET route that

	}
		return strongRateLimit(req, res, next)
		}
			return strongestRateLimit(req, res, next)
		if (strongPaths.some((p) => req.path.includes(p))) {
	if (req.method !== 'GET' && req.method !== 'HEAD') {
	]
		'/resources/verify',
		'/resources/login',
		'/settings/profile',
		'/reset-password',
		'/onboarding',
		'/admin',
		'/verify',
		'/signup',
		'/login',
	const strongPaths = [
app.use((req, res, next) => {
const generalRateLimit = rateLimit(rateLimitDefault)

})
	max: 100 * maxMultiple,
	windowMs: 60 * 1000,
	...rateLimitDefault,
const strongRateLimit = rateLimit({

})
	max: 10 * maxMultiple,
	windowMs: 60 * 1000,
	...rateLimitDefault,
const strongestRateLimit = rateLimit({

}
	},
		return req.get('fly-client-ip') ?? `${req.ip}`
	keyGenerator: (req: express.Request) => {
	// specific header such as cf-connecting-ip
	// When sitting behind a CDN such as cloudflare, replace fly-client-ip with the CDN
	// to trusting req.ip when hosted on Fly.io. However, users cannot spoof Fly-Client-Ip.
	// Malicious users can spoof their IP address which means we should not deault
	validate: { trustProxy: false },
	legacyHeaders: false,
	standardHeaders: true,
	max: 1000 * maxMultiple,
	windowMs: 60 * 1000,
const rateLimitDefault = {
	!IS_PROD || process.env.PLAYWRIGHT_TEST_BASE_URL ? 10_000 : 1
const maxMultiple =
// have to wait for the rate limit to reset between tests.
// rate limiting because playwright tests are very fast and we don't want to
// When running tests or running in development, we want to effectively disable

)
	}),
		},
			},
				'upgrade-insecure-requests': null,
				],
					(_, res) => `'nonce-${res.locals.cspNonce}'`,
					// @ts-expect-error
				'script-src-attr': [
				],
					(_, res) => `'nonce-${res.locals.cspNonce}'`,
					// @ts-expect-error
					"'self'",
					"'strict-dynamic'",
				'script-src': [
				'img-src': ["'self'", 'data:'],
				'frame-ancestors': ['http://localhost:5639'],
				'frame-src': ["'self'"],
				'font-src': ["'self'"],
				].filter(Boolean),
					"'self'",
					process.env.SENTRY_DSN ? '*.ingest.sentry.io' : null,
					MODE === 'development' ? 'ws:' : null,
				'connect-src': [
			directives: {
			reportOnly: true,
			// NOTE: Remove reportOnly when you're ready to enforce this CSP
		contentSecurityPolicy: {
		xFrameOptions: false,
		crossOriginEmbedderPolicy: true,
		referrerPolicy: { policy: 'same-origin' },
		xPoweredBy: false,
	helmet({
app.use(

})
	next()
	res.locals.cspNonce = crypto.randomBytes(16).toString('hex')
app.use((_, res, next) => {

)
	}),
				req.url?.startsWith('/resources/healthcheck')),
				req.url?.startsWith('/resources/user-images') ||
			(req.url?.startsWith('/resources/note-images') ||
			res.statusCode === 200 &&
		skip: (req, res) =>
	morgan('tiny', {
app.use(
morgan.token('url', (req) => decodeURIComponent(req.url ?? ''))

})
	return res.status(404).send('Not found')
	// So we'll just send a 404 and won't bother calling other middleware.
	// if we made it past the express.static for these, then we're missing something.
app.get(['/img/*', '/favicons/*'], (_req, res) => {

}
	app.use(express.static('build/client', { maxAge: '1h' }))
	// more aggressive with this caching.
	// Everything else (like favicon.ico) is cached for an hour. You may want to be

	)
		express.static('build/client/assets', { immutable: true, maxAge: '1y' }),
		'/assets',
	app.use(
	// Remix fingerprints its assets so we can cache forever.
} else {
	app.use(viteDevServer.middlewares)
if (viteDevServer) {

app.disable('x-powered-by')
// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header

app.use(compression())

})
	}
		next()
	} else {
		res.redirect(302, safepath + query)
		const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
		const query = req.url.slice(req.path.length)
	if (req.path.endsWith('/') && req.path.length > 1) {
app.get('*', (req, res, next) => {
// https://github.com/epicweb-dev/epic-stack/discussions/108
// no ending slashes for SEO reasons

})
	next()
	}
		return
		res.redirect(`https://${host}${req.originalUrl}`)
		res.set('X-Forwarded-Proto', 'https')
	if (proto === 'http') {
	const host = getHost(req)
	const proto = req.get('X-Forwarded-Proto')

	if (req.method !== 'GET') return next()
app.use((req, res, next) => {
// ensure HTTPS only (X-Forwarded-Proto comes from Fly)

app.set('trust proxy', true)
// fly is our proxy

	req.get('X-Forwarded-Host') ?? req.get('host') ?? ''
const getHost = (req: { get: (key: string) => string | undefined }) =>

const app = express()

		)
			}),
				server: { middlewareMode: true },
			vite.createServer({
	: await import('vite').then((vite) =>
	? undefined
const viteDevServer = IS_PROD

const ALLOW_INDEXING = process.env.ALLOW_INDEXING !== 'false'
const IS_DEV = MODE === 'development'
const IS_PROD = MODE === 'production'
const MODE = process.env.NODE_ENV ?? 'development'

import morgan from 'morgan'
import helmet from 'helmet'
import getPort, { portNumbers } from 'get-port'
import rateLimit from 'express-rate-limit'
import express from 'express'
import compression from 'compression'
import closeWithGrace from 'close-with-grace'
import chalk from 'chalk'
import { ip as ipAddress } from 'address'
import { type ServerBuild } from '@remix-run/node'
import { createRequestHandler } from '@remix-run/express'
import crypto from 'crypto'