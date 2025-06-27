<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="visible" class="modal-overlay" @click.self="close">
        <transition name="slide">
          <div class="modal-content">
            <button class="close-btn" @click="close">✕</button>
                        <!-- Tabs Navigation -->
            <div class="tabs-nav">
              <button :class="{active: activeTab==='contact'}" @click="activeTab='contact'">Contact Us</button>
              <button :class="{active: activeTab==='work'}" @click="activeTab='work'">Work With Us</button>
            </div>
            <div class="tab-content">
              <component :is="activeComponent" />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

// computed alias to keep "visible" local reactivity but emit update on changes
import { computed, ref } from 'vue';
import ContactTabContact from '~/components/modals/ContactTabContact.vue';
import ContactTabWork from '~/components/modals/ContactTabWork.vue';

const visible = computed({
  get() {
    return props.show;
  },
  set(value) {
    if (!value) emit('close');
  }
});

const activeTab = ref('contact');
const activeComponent = computed(() => activeTab.value === 'contact' ? ContactTabContact : ContactTabWork);

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.modal-content {
  background: #ffffff;
  padding: 2rem 2.5rem;
  width: 90%;
  max-width: 520px;
  border-radius: 8px;
  position: relative;
  font-family: 'Be Vietnam Pro', sans-serif;
  text-align: center;
}


.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.tabs-nav button {
  background: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: #666;
  border-bottom: 2px solid transparent;
}
.tabs-nav button.active {
  color: #000;
  border-color: #000;
}

.tab-content {
  text-align: center;
}

.title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.email {
  display: inline-block;
  margin: 0.5rem 0 1rem;
  color: #000;
  text-decoration: none;
  font-weight: 600;
}

.phones p {
  margin: 0.25rem 0;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-10px);
}
</style>
