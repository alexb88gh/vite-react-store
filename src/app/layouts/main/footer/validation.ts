import * as yup from 'yup'

export const newsletterSchema = yup.object({
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
})
