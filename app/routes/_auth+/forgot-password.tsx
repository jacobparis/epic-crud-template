
}
	return <GeneralErrorBoundary />
export function ErrorBoundary() {

}
	)
		</div>
			</div>
				</div>
					</Link>
						Back to Login
					>
						className="mt-11 text-center text-body-sm font-bold"
						to="/login"
					<Link
					</forgotPassword.Form>
						</div>
							</StatusButton>
								Recover password
							>
								disabled={forgotPassword.state !== 'idle'}
								type="submit"
								}
										: (form.status ?? 'idle')
										? 'pending'
									forgotPassword.state === 'submitting'
								status={
								className="w-full"
							<StatusButton
						<div className="mt-6">

						<ErrorList errors={form.errors} id={form.errorId} />
						</div>
							/>
								errors={fields.usernameOrEmail.errors}
								}}
									...getInputProps(fields.usernameOrEmail, { type: 'text' }),
									autoFocus: true,
								inputProps={{
								}}
									children: 'Username or Email',
									htmlFor: fields.usernameOrEmail.id,
								labelProps={{
							<Field
						<div>
						<HoneypotInputs />
					<forgotPassword.Form method="POST" {...getFormProps(form)}>
				<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
				</div>
					</p>
						No worries, we'll send you reset instructions.
					<p className="mt-3 text-body-md text-muted-foreground">
					<h1 className="text-h1">Forgot Password</h1>
				<div className="text-center">
			<div className="flex flex-col justify-center">
		<div className="container pb-32 pt-20">
	return (

	})
		shouldRevalidate: 'onBlur',
		},
			return parseWithZod(formData, { schema: ForgotPasswordSchema })
		onValidate({ formData }) {
		lastResult: forgotPassword.data?.result,
		constraint: getZodConstraint(ForgotPasswordSchema),
		id: 'forgot-password-form',
	const [form, fields] = useForm({

	const forgotPassword = useFetcher<typeof action>()
export default function ForgotPasswordRoute() {

}
	return [{ title: 'Password Recovery for Epic Notes' }]
export const meta: MetaFunction = () => {

}
	)
		</E.Html>
			</E.Container>
				<E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
				</p>
					<E.Text>Or click the link:</E.Text>
				<p>
				</p>
					</E.Text>
						Here's your verification code: <strong>{otp}</strong>
					<E.Text>
				<p>
				</h1>
					<E.Text>Epic Notes Password Reset</E.Text>
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
function ForgotPasswordEmail({

}
	}
		)
			{ status: 500 },
			{ result: submission.reply({ formErrors: [response.error.message] }) },
		return json(
	} else {
		return redirect(redirectTo.toString())
	if (response.status === 'success') {

	})
		),
			<ForgotPasswordEmail onboardingUrl={verifyUrl.toString()} otp={otp} />
		react: (
		subject: `Epic Notes Password Reset`,
		to: user.email,
	const response = await sendEmail({

	})
		target: usernameOrEmail,
		type: 'reset-password',
		request,
		period: 10 * 60,
	const { verifyUrl, redirectTo, otp } = await prepareVerification({

	})
		select: { email: true, username: true },
		where: { OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }] },
	const user = await prisma.user.findFirstOrThrow({

	const { usernameOrEmail } = submission.value
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
					message: 'No user exists with this username or email',
					code: z.ZodIssueCode.custom,
					path: ['usernameOrEmail'],
				ctx.addIssue({
			if (!user) {
			})
				select: { id: true },
				},
					],
						{ username: data.usernameOrEmail },
						{ email: data.usernameOrEmail },
					OR: [
				where: {
			const user = await prisma.user.findFirst({
		schema: ForgotPasswordSchema.superRefine(async (data, ctx) => {
	const submission = await parseWithZod(formData, {
	checkHoneypot(formData)
	const formData = await request.formData()
export async function action({ request }: ActionFunctionArgs) {

})
	usernameOrEmail: z.union([EmailSchema, UsernameSchema]),
const ForgotPasswordSchema = z.object({

import { prepareVerification } from './verify.server.ts'
import { EmailSchema, UsernameSchema } from '#app/utils/user-validation.ts'
import { checkHoneypot } from '#app/utils/honeypot.server.ts'
import { sendEmail } from '#app/utils/email.server.ts'
import { prisma } from '#app/utils/db.server.ts'
import { StatusButton } from '#app/components/ui/status-button.tsx'
import { ErrorList, Field } from '#app/components/forms.tsx'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { z } from 'zod'
import { HoneypotInputs } from 'remix-utils/honeypot/react'
import { Link, useFetcher } from '@remix-run/react'
} from '@remix-run/node'
	type MetaFunction,
	type ActionFunctionArgs,
	redirect,
	json,
import {
import * as E from '@react-email/components'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import { getFormProps, getInputProps, useForm } from '@conform-to/react'