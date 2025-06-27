<template>
  <div class="language-switcher">
    <button @click="toggleLanguage" class="language-btn">
      <span class="language-text">
        <span :class="{ active: currentLanguage === 'en' }">EN</span>
        &nbsp;/&nbsp;
        <span :class="{ active: currentLanguage === 'pt' }">PT</span>
      </span>
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
.language-switcher {
  position: absolute;
  top: 80px;
  left: 30px;
  z-index: 20;
}

.language-btn {
  background-color: transparent;
  color: #ffffff;
  border: none;
  border-radius: 0;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.language-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.language-text span {
  color: #555;
}

.language-text .active {
  color: #ddd;
  font-weight: 700;
}

.language-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 1;
}

.language-btn:hover {
  border-color: rgba(255, 255, 255, 0.9);
}

.language-btn:hover::before {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .language-switcher {
    top: 20px;
    right: 20px;
    left: auto;
  }
  .language-btn {
    width: 36px;
    height: 36px;
    font-size: 0.7rem;
  }
}

/* Additional size adjustment to match hero */
.language-btn {
  font-size: 1.2rem;
}
</style>
