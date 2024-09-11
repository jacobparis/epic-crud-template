
}
	return <GeneralErrorBoundary />
export function ErrorBoundary() {

}
	)
		</main>
			</div>
				</div>
					</Form>
						</StatusButton>
							Submit
						>
							disabled={isPending}
							type="submit"
							status={isPending ? 'pending' : (form.status ?? 'idle')}
							className="w-full"
						<StatusButton
						/>
							})}
								type: 'hidden',
							{...getInputProps(fields[redirectToQueryParam], {
						<input
						/>
							{...getInputProps(fields[targetQueryParam], { type: 'hidden' })}
						<input
						/>
							{...getInputProps(fields[typeQueryParam], { type: 'hidden' })}
						<input
						</div>
							/>
								errors={fields[codeQueryParam].errors}
								}}
									autoFocus: true,
									autoComplete: 'one-time-code',
									...getInputProps(fields[codeQueryParam], { type: 'text' }),
								inputProps={{
								}}
									children: 'Code',
									htmlFor: fields[codeQueryParam].id,
								labelProps={{
							<OTPField
						<div className="flex items-center justify-center">
						<HoneypotInputs />
					<Form method="POST" {...getFormProps(form)} className="flex-1">
				<div className="flex w-full gap-2">
				</div>
					<ErrorList errors={form.errors} id={form.errorId} />
				<div>
			<div className="mx-auto flex w-72 max-w-full flex-col justify-center gap-1">

			<Spacer size="xs" />

			</div>
				{type ? headings[type] : 'Invalid Verification Type'}
			<div className="text-center">
		<main className="container flex flex-col justify-center pb-32 pt-20">
	return (

	})
		},
			redirectTo: searchParams.get(redirectToQueryParam),
			target: searchParams.get(targetQueryParam),
			type: type,
			code: searchParams.get(codeQueryParam),
		defaultValue: {
		},
			return parseWithZod(formData, { schema: VerifySchema })
		onValidate({ formData }) {
		lastResult: actionData?.result,
		constraint: getZodConstraint(VerifySchema),
		id: 'verify-form',
	const [form, fields] = useForm({

	}
		),
			</>
				</p>
					Please enter your 2FA code to verify your identity.
				<p className="mt-3 text-body-md text-muted-foreground">
				<h1 className="text-h1">Check your 2FA app</h1>
			<>
		'2fa': (
		'change-email': checkEmail,
		'reset-password': checkEmail,
		onboarding: checkEmail,
	const headings: Record<VerificationTypes, React.ReactNode> = {

	)
		</>
			</p>
				We've sent you a code to verify your email address.
			<p className="mt-3 text-body-md text-muted-foreground">
			<h1 className="text-h1">Check your email</h1>
		<>
	const checkEmail = (

	const type = parseWithZoddType.success ? parseWithZoddType.data : null
	)
		searchParams.get(typeQueryParam),
	const parseWithZoddType = VerificationTypeSchema.safeParse(
	const actionData = useActionData<typeof action>()
	const isPending = useIsPending()
	const [searchParams] = useSearchParams()
export default function VerifyRoute() {

}
	return validateRequest(request, formData)
	checkHoneypot(formData)
	const formData = await request.formData()
export async function action({ request }: ActionFunctionArgs) {

})
	[redirectToQueryParam]: z.string().optional(),
	[targetQueryParam]: z.string(),
	[typeQueryParam]: VerificationTypeSchema,
	[codeQueryParam]: z.string().min(6).max(6),
export const VerifySchema = z.object({

export type VerificationTypes = z.infer<typeof VerificationTypeSchema>
const VerificationTypeSchema = z.enum(types)
const types = ['onboarding', 'reset-password', 'change-email', '2fa'] as const
export const redirectToQueryParam = 'redirectTo'
export const typeQueryParam = 'type'
export const targetQueryParam = 'target'
export const codeQueryParam = 'code'

import { validateRequest } from './verify.server.ts'
import { useIsPending } from '#app/utils/misc.tsx'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import { ErrorList, OTPField } from '#app/components/forms.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { z } from 'zod'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { Form, useActionData, useSearchParams } from '@remix-run/react'
import { type ActionFunctionArgs } from '@remix-run/node'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { getFormProps, getInputProps, useForm } from '@conform-to/react'