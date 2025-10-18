export { cn } from './cn'

/**
 * Форматирует номер телефона
 */
export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

/**
 * Проверяет валидность email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Создает безопасный URL для внешних ссылок
 */
export function safeExternalUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`
  }
  return url
}
