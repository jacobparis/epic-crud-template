
}
	return <GeneralErrorBoundary />
export function ErrorBoundary() {

}
	)
		</div>
			</div>
				</Form>
					</StatusButton>
						Reset password
					>
						disabled={isPending}
						type="submit"
						status={isPending ? 'pending' : (form.status ?? 'idle')}
						className="w-full"
					<StatusButton

					<ErrorList errors={form.errors} id={form.errorId} />

					/>
						errors={fields.confirmPassword.errors}
						}}
							autoComplete: 'new-password',
							...getInputProps(fields.confirmPassword, { type: 'password' }),
						inputProps={{
						}}
							children: 'Confirm Password',
							htmlFor: fields.confirmPassword.id,
						labelProps={{
					<Field
					/>
						errors={fields.password.errors}
						}}
							autoFocus: true,
							autoComplete: 'new-password',
							...getInputProps(fields.password, { type: 'password' }),
						inputProps={{
						}}
							children: 'New Password',
							htmlFor: fields.password.id,
						labelProps={{
					<Field
				<Form method="POST" {...getFormProps(form)}>
			<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
			</div>
				</p>
					Hi, {data.resetPasswordUsername}. No worries. It happens all the time.
				<p className="mt-3 text-body-md text-muted-foreground">
				<h1 className="text-h1">Password Reset</h1>
			<div className="text-center">
		<div className="container flex flex-col justify-center pb-32 pt-20">
	return (

	})
		shouldRevalidate: 'onBlur',
		},
			return parseWithZod(formData, { schema: ResetPasswordSchema })
		onValidate({ formData }) {
		lastResult: actionData?.result,
		constraint: getZodConstraint(ResetPasswordSchema),
		id: 'reset-password',
	const [form, fields] = useForm({

	const isPending = useIsPending()
	const actionData = useActionData<typeof action>()
	const data = useLoaderData<typeof loader>()
export default function ResetPasswordPage() {

}
	return [{ title: 'Reset Password | Epic Notes' }]
export const meta: MetaFunction = () => {

}
	})
		},
			'set-cookie': await verifySessionStorage.destroySession(verifySession),
		headers: {
	return redirect('/login', {
	const verifySession = await verifySessionStorage.getSession()
	await resetUserPassword({ username: resetPasswordUsername, password })

	const { password } = submission.value
	}
		)
			{ status: submission.status === 'error' ? 400 : 200 },
			{ result: submission.reply() },
		return json(
	if (submission.status !== 'success') {
	})
		schema: ResetPasswordSchema,
	const submission = parseWithZod(formData, {
	const formData = await request.formData()
	const resetPasswordUsername = await requireResetPasswordUsername(request)
export async function action({ request }: ActionFunctionArgs) {

}
	return json({ resetPasswordUsername })
	const resetPasswordUsername = await requireResetPasswordUsername(request)
export async function loader({ request }: LoaderFunctionArgs) {

}
	return resetPasswordUsername
	}
		throw redirect('/login')
	if (typeof resetPasswordUsername !== 'string' || !resetPasswordUsername) {
	)
		resetPasswordUsernameSessionKey,
	const resetPasswordUsername = verifySession.get(
	)
		request.headers.get('cookie'),
	const verifySession = await verifySessionStorage.getSession(
	await requireAnonymous(request)
async function requireResetPasswordUsername(request: Request) {

const ResetPasswordSchema = PasswordAndConfirmPasswordSchema

export const resetPasswordUsernameSessionKey = 'resetPasswordUsername'

import { verifySessionStorage } from '#app/utils/verification.server.ts'
import { PasswordAndConfirmPasswordSchema } from '#app/utils/user-validation.ts'
import { useIsPending } from '#app/utils/misc.tsx'
import { requireAnonymous, resetUserPassword } from '#app/utils/auth.server.ts'
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { ErrorList, Field } from '#app/components/forms.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
} from '@remix-run/node'
	type MetaFunction,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	redirect,
	json,
import {
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { getFormProps, getInputProps, useForm } from '@conform-to/react'