
	})
		process.exit(1)
		console.error(error)
	.catch((error: unknown) => {
	})
		logLevel: 'info',
		format: 'esm',
		sourcemap: true,
		platform: 'node',
		target: [`node${pkg.engines.node}`],
		outdir: here('../server-build'),
		entryPoints: entries,
	.build({
esbuild

console.log('building...')
console.log()

}
	}
		console.log(`copied: ${file.replace(`${here('../server')}/`, '')}`)
		fsExtra.copySync(file, dest)
		fsExtra.ensureDirSync(path.parse(dest).dir)
		const dest = file.replace(here('../server'), here('../server-build'))
	} else {
		entries.push(file)
	if (/\.(ts|js|tsx|jsx)$/.test(file)) {
for (const file of allFiles) {
const entries = []

})
	],
		'**/__tests__/**',
		'**/eslint*',
		'**/tsconfig.json',
		'server/dev-server.js', // for development only
	ignore: [
const allFiles = globSync(globsafe(here('../server/**/*.*')), {

const globsafe = (s: string) => s.replace(/\\/g, '/')
const here = (...s: Array<string>) => path.join(__dirname, ...s)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pkg = fsExtra.readJsonSync(path.join(process.cwd(), 'package.json'))

import { globSync } from 'glob'
import fsExtra from 'fs-extra'
import esbuild from 'esbuild'
import { fileURLToPath } from 'url'
import path from 'path'