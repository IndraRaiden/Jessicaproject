<template>
  <div class="sidebar-language-switcher">
    <button @click="toggleLanguage" class="sidebar-language-btn">
      <span class="sidebar-language-icon">🌐</span>
      <span class="sidebar-language-text">{{ currentLanguage === 'en' ? 'Português' : 'English' }}</span>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentLanguage: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['toggle-language']);

const toggleLanguage = () => {
  emit('toggle-language');
};
</script>

<style scoped>
.sidebar-language-switcher {
  margin-bottom: 2rem;
}

.sidebar-language-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  transition: opacity 0.2s;
}

.sidebar-language-btn:hover {
  opacity: 0.7;
}

.sidebar-language-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}
</style>
