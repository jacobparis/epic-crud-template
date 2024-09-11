
}
	}
		console.error(chalk.red(error))
	} else {
		console.error(chalk.red(error.stack))
	if (error instanceof Error) {
	}
		return
	if (request.signal.aborted) {
	// Ref: https://remix.run/docs/en/main/file-conventions/entry.server#handleerror
	// Skip capturing if the request is aborted as Remix docs suggest
): void {
	{ request }: LoaderFunctionArgs | ActionFunctionArgs,
	error: unknown,
export function handleError(

}
	return response

	response.headers.set('fly-instance', currentInstance)
	response.headers.set('fly-primary-instance', primaryInstance)
	response.headers.set('fly-app', process.env.FLY_APP_NAME ?? 'unknown')
	response.headers.set('fly-region', process.env.FLY_REGION ?? 'unknown')
	const { currentInstance, primaryInstance } = await getInstanceInfo()
export async function handleDataRequest(response: Response) {

}
	})
		setTimeout(abort, ABORT_DELAY)

		)
			},
				nonce,
				},
					didError = true
				onError: () => {
				},
					reject(err)
				onShellError: (err: unknown) => {
				},
					pipe(body)
					)
						}),
							status: didError ? 500 : responseStatusCode,
							headers: responseHeaders,
						new Response(createReadableStreamFromReadable(body), {
					resolve(
					responseHeaders.append('Server-Timing', timings.toString())
					responseHeaders.set('Content-Type', 'text/html')
					const body = new PassThrough()
				[callbackName]: () => {
			{
			</NonceProvider>,
				<RemixServer context={remixContext} url={request.url} />
			<NonceProvider value={nonce}>
		const { pipe, abort } = renderToPipeableStream(

		const timings = makeTimings('render', 'renderToPipeableStream')
		// and will not include suspended components and deferred loaders
		// NOTE: this timing will only include things that are rendered in the shell
		let didError = false
	return new Promise(async (resolve, reject) => {
	const nonce = loadContext.cspNonce?.toString() ?? ''

		: 'onShellReady'
		? 'onAllReady'
	const callbackName = isbot(request.headers.get('user-agent'))

	}
		responseHeaders.append('Document-Policy', 'js-profiling')
	if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {

	responseHeaders.set('fly-instance', currentInstance)
	responseHeaders.set('fly-primary-instance', primaryInstance)
	responseHeaders.set('fly-app', process.env.FLY_APP_NAME ?? 'unknown')
	responseHeaders.set('fly-region', process.env.FLY_REGION ?? 'unknown')
	const { currentInstance, primaryInstance } = await getInstanceInfo()
	] = args
		loadContext,
		remixContext,
		responseHeaders,
		responseStatusCode,
		request,
	const [
export default async function handleRequest(...args: DocRequestArgs) {

type DocRequestArgs = Parameters<HandleDocumentRequestFunction>

global.ENV = getEnv()
init()

const ABORT_DELAY = 5000

import { makeTimings } from './utils/timing.server.ts'
import { NonceProvider } from './utils/nonce-provider.ts'
import { getInstanceInfo } from './utils/litefs.server.ts'
import { getEnv, init } from './utils/env.server.ts'
import { renderToPipeableStream } from 'react-dom/server'
import { isbot } from 'isbot'
import chalk from 'chalk'
import { RemixServer } from '@remix-run/react'
} from '@remix-run/node'
	type HandleDocumentRequestFunction,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	createReadableStreamFromReadable,
import {
import { PassThrough } from 'stream'