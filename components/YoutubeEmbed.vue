<template>
  <div class="youtube-embed">
    <div class="video-foreground" :class="{ 'video-loaded': videoLoaded }">
      <iframe 
        :src="videoUrl" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        @load="onVideoLoaded"
        ref="videoIframe"
      ></iframe>
      <div v-if="!videoLoaded" class="video-placeholder">
        <!-- Optional: Add a loading spinner or placeholder image here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  mute: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  controls: {
    type: Boolean,
    default: false
  },
  showInfo: {
    type: Boolean,
    default: false
  }
});

const videoLoaded = ref(false);
const videoIframe = ref(null);

const videoUrl = computed(() => {
  let url = `https://www.youtube.com/embed/${props.videoId}?`;
  
  // Add parameters
  const params = [];
  if (props.autoplay) params.push('autoplay=1');
  if (props.mute) params.push('mute=1');
  if (props.loop) {
    params.push('loop=1');
    params.push(`playlist=${props.videoId}`); // Required for loop to work
  }
  if (!props.controls) params.push('controls=0');
  if (!props.showInfo) params.push('showinfo=0');
  
  // Add additional parameters for better performance and appearance
  params.push('rel=0');
  params.push('modestbranding=1');
  params.push('iv_load_policy=3');
  params.push('enablejsapi=1');
  
  return url + params.join('&');
});

const onVideoLoaded = () => {
  videoLoaded.value = true;
};

// Ensure iframe is properly loaded
onMounted(() => {
  // Add a fallback in case the load event doesn't fire
  setTimeout(() => {
    if (!videoLoaded.value) {
      videoLoaded.value = true;
    }
  }, 3000); // 3 second fallback
});
</script>

<style scoped>
.youtube-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background: #000;
}

.video-foreground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.video-foreground iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 110vw; /* Slightly wider to avoid dark edges */
  height: 61.875vw; /* Maintain 16:9 aspect ratio (56.25vw * 1.1) */
  min-height: 110%; /* Slightly taller to avoid dark edges */
  min-width: 195.55vh; /* Maintain 16:9 aspect ratio (177.77vh * 1.1) */
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.video-loaded iframe {
  opacity: 1;
}

.video-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .video-foreground iframe {
    width: 120vw; /* Even wider on mobile to ensure coverage */
    height: 67.5vw; /* Maintain 16:9 aspect ratio (56.25vw * 1.2) */
    min-height: 120%; /* Even taller on mobile to ensure coverage */
    min-width: 213.32vh; /* Maintain 16:9 aspect ratio (177.77vh * 1.2) */
  }
}
</style>
