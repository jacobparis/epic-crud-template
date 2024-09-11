
}
	)
		mergeReporters(cachifiedTimingReporter(timings), reporter),
		options,
	return baseCachified(
): Promise<Value> {
	reporter: CreateReporter<Value> = verboseReporter<Value>(),
	},
		timings?: Timings
	}: CachifiedOptions<Value> & {
		...options
		timings,
	{
export async function cachified<Value>(

}
	}
		lru: [...lru.keys()].filter((key) => key.includes(search)),
			.map((row) => (row as { key: string }).key),
			.all(`%${search}%`, limit)
			.prepare('SELECT key FROM cache WHERE key LIKE ? LIMIT ?')
		sqlite: cacheDb
	return {
export async function searchCacheKeys(search: string, limit: number) {

}
	}
		lru: [...lru.keys()],
			.map((row) => (row as { key: string }).key),
			.all(limit)
			.prepare('SELECT key FROM cache LIMIT ?')
		sqlite: cacheDb
	return {
export async function getAllCacheKeys(limit: number) {

}
	},
		}
			})
				}
					)
						`Error deleting cache value for key "${key}" on primary instance (${primaryInstance}): ${response.status} ${response.statusText}`,
					console.error(
				if (!response.ok) {
			}).then((response) => {
				cacheValue: undefined,
				key,
			void updatePrimaryCacheValue({
			// fire-and-forget cache update
		} else {
			cacheDb.prepare('DELETE FROM cache WHERE key = ?').run(key)
		if (currentIsPrimary) {
		const { currentIsPrimary, primaryInstance } = await getInstanceInfo()
	async delete(key) {
	},
		}
			})
				}
					)
						{ entry },
						`Error updating cache value for key "${key}" on primary instance (${primaryInstance}): ${response.status} ${response.statusText}`,
					console.error(
				if (!response.ok) {
			}).then((response) => {
				cacheValue: entry,
				key,
			void updatePrimaryCacheValue({
			// fire-and-forget cache update
		} else {
				})
					metadata: JSON.stringify(entry.metadata),
					value: JSON.stringify(entry.value),
					key,
				.run({
				)
					'INSERT OR REPLACE INTO cache (key, value, metadata) VALUES (@key, @value, @metadata)',
				.prepare(
			cacheDb
		if (currentIsPrimary) {
		const { currentIsPrimary, primaryInstance } = await getInstanceInfo()
	async set(key, entry) {
	},
		return { metadata, value }
		if (!value) return null
		const { metadata, value } = parsedEntry.data
		if (!parsedEntry.success) return null
		})
			value: JSON.parse(parseResult.data.value),
			metadata: JSON.parse(parseResult.data.metadata),
		const parsedEntry = cacheEntrySchema.safeParse({

		if (!parseResult.success) return null
		const parseResult = cacheQueryResultSchema.safeParse(result)
			.get(key)
			.prepare('SELECT value, metadata FROM cache WHERE key = ?')
		const result = cacheDb
	get(key) {
	name: 'SQLite cache',
export const cache: CachifiedCache = {

})
	value: z.string(),
	metadata: z.string(),
const cacheQueryResultSchema = z.object({
})
	value: z.unknown(),
	}),
		swr: z.number().nullable().optional(),
		ttl: z.number().nullable().optional(),
		createdTime: z.number(),
	metadata: z.object({
const cacheEntrySchema = z.object({

} satisfies Cache
	delete: (key) => lru.delete(key),
	get: (key) => lru.get(key),
	},
		return value
		})
			start: value?.metadata?.createdTime,
			ttl: ttl === Infinity ? undefined : ttl,
		lru.set(key, value, {
		const ttl = totalTtl(value?.metadata)
	set: (key, value) => {
	name: 'app-memory-cache',
export const lruCache = {

)
	() => new LRUCache<string, CacheEntry<unknown>>({ max: 5000 }),
	'lru-cache',
const lru = remember(

}
	return db
	}
		throw error
		}
			return createDatabase(false)
			)
				`Error creating cache database, deleting the file at "${CACHE_DATABASE_PATH}" and trying again...`,
			console.error(
		if (tryAgain) {
		fs.unlinkSync(CACHE_DATABASE_PATH)
	} catch (error: unknown) {
		`)
			)
				value TEXT
				metadata TEXT,
				key TEXT PRIMARY KEY,
			CREATE TABLE IF NOT EXISTS cache (
		db.exec(`
		// create cache table with metadata JSON column and value JSON column if it does not exist already
	try {

	if (!currentIsPrimary) return db
	const { currentIsPrimary } = getInstanceInfoSync()
	const db = new Database(CACHE_DATABASE_PATH)
function createDatabase(tryAgain = true): Database.Database {

const cacheDb = remember('cacheDb', createDatabase)

const CACHE_DATABASE_PATH = process.env.CACHE_DATABASE_PATH

import { cachifiedTimingReporter, type Timings } from './timing.server.ts'
import { getInstanceInfo, getInstanceInfoSync } from './litefs.server.ts'
import { updatePrimaryCacheValue } from '#app/routes/admin+/cache_.sqlite.server.ts'
import { z } from 'zod'
import { LRUCache } from 'lru-cache'
import Database from 'better-sqlite3'
import { remember } from '@epic-web/remember'
} from '@epic-web/cachified'
	type CreateReporter,
	totalTtl,
	type Cache,
	type CachifiedOptions,
	type Cache as CachifiedCache,
	type CacheEntry,
	mergeReporters,
	verboseReporter,
	cachified as baseCachified,
import {
import fs from 'fs'