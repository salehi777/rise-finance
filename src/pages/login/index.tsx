import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'react-toastify'
import useAuthStore from '@/stores/useAuthStore'
import { Link, useNavigate } from 'react-router'
import { Button } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import { StyledForm } from './styled'
import RHFInput from '@/components/form/rhf-input'
import RHFPasswordInput from '@/components/form/rhf-password-input'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const methods = useForm({
    defaultValues: { username: 'client', password: 'password' },
  })

  const onSubmit = (formValues: any) => {
    login()
    toast.success('Login was successful')
    navigate('/dashboard')
  }

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <RHFInput
          name="username"
          label="Username"
          placeholder="Username"
          rules={{ required: true }}
        />
        <RHFPasswordInput
          name="password"
          label="Password"
          placeholder="Password"
          rules={{ required: true }}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <div>
          <Link to="/forget-password">Forget Password</Link>
        </div>
      </StyledForm>
    </FormProvider>
  )
}
