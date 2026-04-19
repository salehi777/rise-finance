import { Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { emailRegex } from '@/lib/regex'
import alova from '@/lib/alova'
import { useRequest } from 'alova/client'
import toast from 'react-hot-toast'
import { convertFormValues } from '@/lib/helpers'
import RHFInput from '@/components/form/rhf-input'
import RHFPasswordInput from '@/components/form/rhf-password-input'
import RHFDateField from '@/components/form/rhf-datefield'
import RHFNumericaFormat from '@/components/form/rhf-numerica-format'
import RHFSelect from '@/components/form/rhf-select'
import RHFCheckbox from '@/components/form/rhf-checkbox'
import RHFSwitch from '@/components/form/rhf-switch'
import RHFNumericaPersianFormat from '@/components/form/rhf-numerica-persian-format'
import RHFPatternFormat from '@/components/form/rhf-pattern-format'
import RHFSelectAsync from '@/components/form/rhf-select-async'
import RHFUploaderBox from '@/components/form/rhf-uploader-box'

export default function FormSample() {
  const methods = useForm({
    defaultValues: {
      name: 'name',
      email: 'email@mail.com',
      date: new Date('2026-01-01'),
      password: 'password',
      confirm_password: 'password',
      select: { label: 'Label 1', value: 1 },
      currency: '1000',
      persian: '1000',
      mobile: '00000000000',
      checkbox: true,
      switch: true,
    },
  })

  const { loading, send } = useRequest(
    (data) => alova.Post('sample/form?delay=1000', data),
    { immediate: false },
  )

  const onSubmit = async (formValues: any) => {
    console.log(convertFormValues(formValues))
    try {
      await send({
        ...convertFormValues(formValues),
        file: formValues.file.filename,
      })
      toast.success('Submitted')
    } catch {}
  }

  const size = { xs: 12, sm: 6, md: 4, lg: 3 }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={size}>
            <RHFInput name="name" label="Name" />
          </Grid>
          <Grid size={size}>
            <RHFInput
              name="email"
              rules={{
                pattern: { value: emailRegex, message: 'Invalid email' },
              }}
              label="Email"
            />
          </Grid>
          <Grid size={size}>
            <RHFDateField name="date" label="Date" />
          </Grid>
          <Grid size={size}>
            <RHFPasswordInput
              name="password"
              label="Password"
              rules={{
                deps: ['confirm_password'],
                // validate: validatePassword,
              }}
            />
          </Grid>
          <Grid size={size}>
            <RHFPasswordInput
              name="confirm_password"
              label="Confirm Password"
              rules={{
                validate: (value, formValues) =>
                  value === formValues.password ||
                  'Confirm password not matched',
              }}
            />
          </Grid>
          <Grid size={size}>
            <RHFSelect
              name="select"
              options={[
                { label: 'Label 1', value: 1 },
                { label: 'Label 2', value: 2 },
              ]}
              textFieldProps={{ label: 'Select' }}
            />
          </Grid>
          <Grid size={size}>
            <RHFSelectAsync
              name="select_async"
              method={(query) =>
                alova.Get('/sample/options?delay=500', { params: { query } })
              }
              textFieldProps={{ label: 'Select Async' }}
              callOnFocus
            />
          </Grid>
          <Grid size={size}>
            <RHFNumericaFormat
              name="currency"
              label="Currency"
              thousandSeparator=","
            />
          </Grid>
          <Grid size={size}>
            <RHFNumericaPersianFormat
              name="persian"
              label="Persian"
              numericProps={{ thousandSeparator: ',' }}
            />
          </Grid>
          <Grid size={size}>
            <RHFPatternFormat
              name="mobile"
              label="Mobile"
              format="### ### ####"
            />
          </Grid>
          <Grid size={size} display="flex">
            <RHFCheckbox name="checkbox" label="Checkbox" />
          </Grid>
          <Grid size={size} display="flex">
            <RHFSwitch name="switch" label="Switch" />
          </Grid>
          <Grid size={12}>
            <RHFUploaderBox name="file" />
          </Grid>

          <Grid size={12} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" loading={loading}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  )
}
