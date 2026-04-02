<template>
  <div class="vbg-wrap">
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="src" type="video/mp4" />
    </video>
  </div>
  <div :class="['vbg-overlay', overlayClass]"></div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  overlayClass: {
    type: String,
    default: 'ov-dc'
  },
  eager: {
    type: Boolean,
    default: false
  }
})

const videoRef = ref(null)

onMounted(() => {
  if (!videoRef.value) return

  const play = () => {
    videoRef.value?.play().catch(() => {})
  }

  if (props.eager) {
    play()
    return
  }

  // Lazy load: observe the parent section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          play()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe the closest section ancestor
  const section = videoRef.value.closest('section') || videoRef.value.parentElement
  if (section) observer.observe(section)
})
</script>
