
}
	await import('./server/index.ts')
} else {
	await import('./server-build/index.js')
if (process.env.NODE_ENV === 'production') {

})
	}
		process.exit(1)
		console.error(chalk.red(err.stack))
		console.error(chalk.red(err))
	if (err) {
closeWithGrace(async ({ err }) => {

})
	},
		return null
		}
			}
				map: fs.readFileSync(`${match[1]}.map`, 'utf8'),
				url: source,
			return {
		if (match) {
		const match = source.match(/^file:\/\/(.*)\?t=[.\d]+$/)
		// get source file without the `file://` prefix or `?t=...` suffix
	retrieveSourceMap: function (source) {
sourceMapSupport.install({

import sourceMapSupport from 'source-map-support'
import closeWithGrace from 'close-with-grace'
import chalk from 'chalk'
import * as fs from 'fs'
import 'dotenv/config'