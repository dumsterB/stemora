import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable для определения типа устройства
 */
export function useResponsiveView() {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  const updateView = () => {
    const width = window.innerWidth
    isMobile.value = width < 768
    isTablet.value = width >= 768 && width < 1024
    isDesktop.value = width >= 1024
  }

  onMounted(() => {
    updateView()
    window.addEventListener('resize', updateView)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateView)
  })

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
