<template>
  <div class="header">
    <div class="spacer"></div>
    <div class="logo" @click="navigateTo('/')" style="cursor: pointer;">
      <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
    </div>
    <div class="close-btn" @click="closeSidebar">+</div>
  </div>
  
  <div class="hospitality-text">
    <div class="horizontal-line top-line"></div>
    <h2 style="letter-spacing: 0.6em !important;">{{ translations[currentLanguage].heroText }}</h2>
    <div class="horizontal-line bottom-line"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentLanguage: {
    type: String,
    required: true
  },
  translations: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'navigate']);

const closeSidebar = () => {
  emit('close');
};

const navigateTo = (route) => {
  emit('navigate', route);
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  padding: 1rem 0;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: -30px;
  position: relative;
  padding-bottom: 5px;
}

.logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #29332e;
  transition: width 0.3s ease;
}

.logo:hover::after {
  width: 100%;
}

.logo-img {
  height: 140px;
  width: auto;
}

.close-btn {
  font-size: 5rem;
  color: #29332e;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.6s ease;
  margin-top: -2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  position: relative;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.spacer {
  width: 5rem;
}

.hospitality-text {
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: -6rem;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: rgba(41, 51, 46, 0.15);
}

.top-line {
  margin-bottom: 10px;
}

.bottom-line {
  margin-top: 10px;
}

.hospitality-text h2 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #29332e;
  letter-spacing: 220%;
  text-transform: uppercase;
  margin: 0;
  padding: 0 15px;
  line-height: 1;
}
</style>
