import { ref } from 'vue'
import { isValidEmail } from '~/utils'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function useContactForm() {
  const formData = ref<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const errors = ref<Partial<Record<keyof ContactFormData, string>>>({})
  const isSubmitting = ref(false)

  const validateForm = (): boolean => {
    errors.value = {}

    if (!formData.value.firstName.trim()) {
      errors.value.firstName = 'First name is required'
    }

    if (!formData.value.lastName.trim()) {
      errors.value.lastName = 'Last name is required'
    }

    if (!formData.value.email.trim()) {
      errors.value.email = 'Email is required'
    } else if (!isValidEmail(formData.value.email)) {
      errors.value.email = 'Invalid email format'
    }

    if (!formData.value.message.trim()) {
      errors.value.message = 'Message is required'
    }

    return Object.keys(errors.value).length === 0
  }

  const resetForm = () => {
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    errors.value = {}
  }

  return {
    formData,
    errors,
    isSubmitting,
    validateForm,
    resetForm
  }
}
