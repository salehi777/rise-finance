import { useForm, FormProvider } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { StyledForm } from './styled'
import RHFInput from '@/components/form/rhf-input'
import RHFPasswordInput from '@/components/form/rhf-password-input'
import { useNavigate } from 'react-router'

export default function SignupPage() {
  const navigate = useNavigate()
  const methods = useForm()

  const onSubmit = (formValues: any) => {
    console.log(formValues)
    toast.success('Sign Up was successful')
    navigate('/')
  }
  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <RHFInput
          name="full_name"
          label="Name"
          placeholder="Name"
          rules={{ required: true }}
        />
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
          rules={{ required: true, deps: ['confirm_password'] }}
        />
        <RHFPasswordInput
          name="confirm_password"
          label="Confirm Password"
          placeholder="Confirm Password"
          rules={{
            required: true,
            validate: (value, formValues) =>
              value === formValues.password || 'Confirm password not matched',
          }}
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </StyledForm>
    </FormProvider>
  )
}
