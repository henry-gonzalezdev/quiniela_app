'use client'

import { zodResolver } from '@hookform/resolvers/zod'
// import { setCookie } from 'typescript-cookie'
import { useRouter } from 'next/navigation'
import { Login, loginSchema } from '../../lib/schemas'
import { useInstanceForm } from '../../lib/hooks/useInstanceForm'
// import { toast } from 'sonner'

// import { useLoadingDialogStore } from '@/common/lib/store/global-dialog'
// import { useCaptcha } from '@/login/lib/hooks/use-captcha'
// import { useAuthStore } from '@/common/lib/store/auth'
// import { loginServices } from '@/login/lib/services'
// import { useOtpStoreV2 } from '@/otp/lib/stores'
// import { otpServices } from '@/otp/lib/services'
// import { OTP_EVENTS } from '@/otp/lib/const'

export const useHandleLogin = () => {
	// const { validateCaptcha, generateCaptcha, canvasRef } = useCaptcha({ height: 30 })
	// const { open, setDialogLoading } = useLoadingDialogStore()
	// const { setGroups } = useAuthStore()
	// const { setOtp } = useOtpStoreV2()
	const router = useRouter()

	const form = useInstanceForm<Login>(loginSchema)



	// const onValidateOtp = async (data) => {
	//   setOtp({ loadingOtp: true })

	//   const res = await otpServices.confirmOtp({ code: Number(data), event: OTP_EVENTS.OTP_USER_SIGNIN })

	//   if (res?.info.status >= 400) {
	//     toast.error(res?.info?.message_to_show || 'Hubo un error')

	//     setOtp({ loadingOtp: false })

	//     return
	//   }

	//   toast.success('Codigo validado con éxito')

	//   setOtp({ openOtp: false, loadingOtp: false })

	//   router.push('/cuentas')
	// }

	const onSubmitLogin = async (data: Login) => {
		const { password, email } = data

		// if (!validateCaptcha(captcha)) {
		//   toast.error("Captcha incorrecto, inténte de nuevo")

		//   generateCaptcha() // Regenerar captcha si es incorrecto

		//   form.clearErrors()
		//   form.resetField('captcha')

		//   return
		// }

		// setDialogLoading({
		//   open: true,
		//   title: 'Iniciando Sesión',
		//   description: 'Por favor espere un momento...'
		// })

		// const res = await loginServices.login({ password, email })

		// if (res?.data?.info?.status >= 400) {
		//   console.log(res?.data?.info.message_to_show === 'Ya se envio un codigo OTP')
		//   toast.error(res?.data?.info?.message_to_show || 'Hubo un error')

		//   setDialogLoading({
		//     open: false,
		//     title: null,
		//     description: null
		//   })
		router.push('/panel-de-control')
	}

	// setCookie('token', res.data.result.accessToken)

	// setGroups(res.data.result.groups)

	// setDialogLoading({
	//   open: false,
	//   title: null,
	//   description: null
	// })

	// if (res?.data?.result?.passToken) {
	//   setCookie('x-token', res.data.result.passToken)
	//   toast.success('Se ha enviado un codigo a su correo electrónico')
	//   setOtp({
	//     otpLength: 4,
	//     openOtp: true,
	//     onComplete: onValidateOtp
	//   })

	//   return
	// }

	// router.push('/cuentas')
	// }

	return {
		form,
		// canvasRef,
		onSubmitLogin,
		loading: true,
		// generateCaptcha,
	}
}
