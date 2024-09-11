
}
	return <GeneralErrorBoundary />
export function ErrorBoundary() {

}
	)
		</div>
			</div>
				</ul>
					))}
						</li>
							/>
								redirectTo={redirectTo}
								providerName={providerName}
								type="Signup"
							<ProviderConnectionForm
						<li key={providerName}>
					{providerNames.map((providerName) => (
				<ul className="mt-5 flex flex-col gap-5 border-b-2 border-t-2 border-border py-3">
				</Form>
					</StatusButton>
						Submit
					>
						disabled={isPending}
						type="submit"
						status={isPending ? 'pending' : (form.status ?? 'idle')}
						className="w-full"
					<StatusButton
					<ErrorList errors={form.errors} id={form.errorId} />
					/>
						errors={fields.email.errors}
						}}
							autoComplete: 'email',
							autoFocus: true,
							...getInputProps(fields.email, { type: 'email' }),
						inputProps={{
						}}
							children: 'Email',
							htmlFor: fields.email.id,
						labelProps={{
					<Field
					<HoneypotInputs />
				<Form method="POST" {...getFormProps(form)}>
			<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
			</div>
				</p>
					Please enter your email.
				<p className="mt-3 text-body-md text-muted-foreground">
				<h1 className="text-h1">Let's start your journey!</h1>
			<div className="text-center">
		<div className="container flex flex-col justify-center pb-32 pt-20">
	return (

	})
		shouldRevalidate: 'onBlur',
		},
			return result
			const result = parseWithZod(formData, { schema: SignupSchema })
		onValidate({ formData }) {
		lastResult: actionData?.result,
		constraint: getZodConstraint(SignupSchema),
		id: 'signup-form',
	const [form, fields] = useForm({

	const redirectTo = searchParams.get('redirectTo')
	const [searchParams] = useSearchParams()
	const isPending = useIsPending()
	const actionData = useActionData<typeof action>()
export default function SignupRoute() {

}
	return [{ title: 'Sign Up | Epic Notes' }]
export const meta: MetaFunction = () => {

}
	)
		</E.Html>
			</E.Container>
				<E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
				</p>
					<E.Text>Or click the link to get started:</E.Text>
				<p>
				</p>
					</E.Text>
						Here's your verification code: <strong>{otp}</strong>
					<E.Text>
				<p>
				</h1>
					<E.Text>Welcome to Epic Notes!</E.Text>
				<h1>
			<E.Container>
		<E.Html lang="en" dir="ltr">
	return (
}) {
	otp: string
	onboardingUrl: string
}: {
	otp,
	onboardingUrl,
export function SignupEmail({

}
	}
		)
			},
				status: 500,
			{
			},
				result: submission.reply({ formErrors: [response.error.message] }),
			{
		return json(
	} else {
		return redirect(redirectTo.toString())
	if (response.status === 'success') {

	})
		react: <SignupEmail onboardingUrl={verifyUrl.toString()} otp={otp} />,
		subject: `Welcome to Epic Notes!`,
		to: email,
	const response = await sendEmail({

	})
		target: email,
		type: 'onboarding',
		request,
		period: 10 * 60,
	const { verifyUrl, redirectTo, otp } = await prepareVerification({
	const { email } = submission.value
	}
		)
			{ status: submission.status === 'error' ? 400 : 200 },
			{ result: submission.reply() },
		return json(
	if (submission.status !== 'success') {
	})
		async: true,
		}),
			}
				return
				})
					message: 'A user already exists with this email',
					code: z.ZodIssueCode.custom,
					path: ['email'],
				ctx.addIssue({
			if (existingUser) {
			})
				select: { id: true },
				where: { email: data.email },
			const existingUser = await prisma.user.findUnique({
		schema: SignupSchema.superRefine(async (data, ctx) => {
	const submission = await parseWithZod(formData, {

	checkHoneypot(formData)

	const formData = await request.formData()
export async function action({ request }: ActionFunctionArgs) {

})
	email: EmailSchema,
const SignupSchema = z.object({

import { prepareVerification } from './verify.server.ts'
import { EmailSchema } from '#app/utils/user-validation.ts'
import { useIsPending } from '#app/utils/misc.tsx'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
import { sendEmail } from '#app/utils/email.server.ts'
import { prisma } from '#app/utils/db.server.ts'
} from '#app/utils/connections.tsx'
	providerNames,
	ProviderConnectionForm,
import {
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { ErrorList, Field } from '#app/components/forms.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { z } from 'zod'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { Form, useActionData, useSearchParams } from '@remix-run/react'
} from '@remix-run/node'
	type MetaFunction,
	type ActionFunctionArgs,
	redirect,
	json,
import {
import * as E from '@react-email/components'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { getFormProps, getInputProps, useForm } from '@conform-to/react'