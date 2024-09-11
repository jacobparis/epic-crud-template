
}
	return <GeneralErrorBoundary />
export function ErrorBoundary() {

}
	return [{ title: 'Login to Epic Notes' }]
export const meta: MetaFunction = () => {

}
	)
		</div>
			</div>
				</div>
					</div>
						</div>
							</Link>
								Create an account
							>
								}
										: '/signup'
										? `/signup?${encodeURIComponent(redirectTo)}`
									redirectTo
								to={
							<Link
							<span className="text-muted-foreground">New here?</span>
						<div className="flex items-center justify-center gap-2 pt-6">
						</ul>
							))}
								</li>
									/>
										redirectTo={redirectTo}
										providerName={providerName}
										type="Login"
									<ProviderConnectionForm
								<li key={providerName}>
							{providerNames.map((providerName) => (
						<ul className="mt-5 flex flex-col gap-5 border-b-2 border-t-2 border-border py-3">
						</Form>
							</div>
								</StatusButton>
									Log in
								>
									disabled={isPending}
									type="submit"
									status={isPending ? 'pending' : (form.status ?? 'idle')}
									className="w-full"
								<StatusButton
							<div className="flex items-center justify-between gap-6 pt-3">

							<ErrorList errors={form.errors} id={form.errorId} />
							/>
								{...getInputProps(fields.redirectTo, { type: 'hidden' })}
							<input

							</div>
								</div>
									</Link>
										Forgot password?
									>
										className="text-body-xs font-semibold"
										to="/forgot-password"
									<Link
								<div>
								/>
									errors={fields.remember.errors}
									})}
										type: 'checkbox',
									buttonProps={getInputProps(fields.remember, {
									}}
										children: 'Remember me',
										htmlFor: fields.remember.id,
									labelProps={{
								<CheckboxField
							<div className="flex justify-between">

							/>
								errors={fields.password.errors}
								}}
									autoComplete: 'current-password',
									}),
										type: 'password',
									...getInputProps(fields.password, {
								inputProps={{
								labelProps={{ children: 'Password' }}
							<Field

							/>
								errors={fields.username.errors}
								}}
									autoComplete: 'username',
									className: 'lowercase',
									autoFocus: true,
									...getInputProps(fields.username, { type: 'text' }),
								inputProps={{
								labelProps={{ children: 'Username' }}
							<Field
							<HoneypotInputs />
						<Form method="POST" {...getFormProps(form)}>
					<div className="mx-auto w-full max-w-md px-8">
				<div>

				<Spacer size="xs" />
				</div>
					</p>
						Please enter your details.
					<p className="text-body-md text-muted-foreground">
					<h1 className="text-h1">Welcome back!</h1>
				<div className="flex flex-col gap-3 text-center">
			<div className="mx-auto w-full max-w-md">
		<div className="flex min-h-full flex-col justify-center pb-32 pt-20">
	return (

	})
		shouldRevalidate: 'onBlur',
		},
			return parseWithZod(formData, { schema: LoginFormSchema })
		onValidate({ formData }) {
		lastResult: actionData?.result,
		defaultValue: { redirectTo },
		constraint: getZodConstraint(LoginFormSchema),
		id: 'login-form',
	const [form, fields] = useForm({

	const redirectTo = searchParams.get('redirectTo')
	const [searchParams] = useSearchParams()
	const isPending = useIsPending()
	const actionData = useActionData<typeof action>()
export default function LoginPage() {

}
	})
		redirectTo,
		remember: remember ?? false,
		session,
		request,
	return handleNewSession({

	const { session, remember, redirectTo } = submission.value

	}
		)
			{ status: submission.status === 'error' ? 400 : 200 },
			{ result: submission.reply({ hideFields: ['password'] }) },
		return json(
	if (submission.status !== 'success' || !submission.value.session) {

	})
		async: true,
			}),
				return { ...data, session }

				}
					return z.NEVER
					})
						message: 'Invalid username or password',
						code: z.ZodIssueCode.custom,
					ctx.addIssue({
				if (!session) {
				const session = await login(data)

				if (intent !== null) return { ...data, session: null }
			LoginFormSchema.transform(async (data, ctx) => {
		schema: (intent) =>
	const submission = await parseWithZod(formData, {
	checkHoneypot(formData)
	const formData = await request.formData()
	await requireAnonymous(request)
export async function action({ request }: ActionFunctionArgs) {

}
	return json({})
	await requireAnonymous(request)
export async function loader({ request }: LoaderFunctionArgs) {

})
	remember: z.boolean().optional(),
	redirectTo: z.string().optional(),
	password: PasswordSchema,
	username: UsernameSchema,
const LoginFormSchema = z.object({

import { handleNewSession } from './login.server.ts'
import { PasswordSchema, UsernameSchema } from '#app/utils/user-validation.ts'
import { useIsPending } from '#app/utils/misc.tsx'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
} from '#app/utils/connections.tsx'
	providerNames,
	ProviderConnectionForm,
import {
import { login, requireAnonymous } from '#app/utils/auth.server.ts'
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { CheckboxField, ErrorList, Field } from '#app/components/forms.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { z } from 'zod'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { Form, Link, useActionData, useSearchParams } from '@remix-run/react'
} from '@remix-run/node'
	type MetaFunction,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	json,
import {
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { getFormProps, getInputProps, useForm } from '@conform-to/react'