<template>
  <div class="icon-demo">
    <h2>Lucide Icons Demo</h2>
    <div class="icon-grid">
      <div class="icon-item">
        <Home class="icon" />
        <span>Home</span>
      </div>
      <div class="icon-item">
        <Search class="icon" />
        <span>Search</span>
      </div>
      <div class="icon-item">
        <Settings class="icon" />
        <span>Settings</span>
      </div>
      <div class="icon-item">
        <User class="icon" />
        <span>User</span>
      </div>
      <div class="icon-item">
        <Heart class="icon" />
        <span>Heart</span>
      </div>
      <div class="icon-item">
        <Mail class="icon" />
        <span>Mail</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Home, Search, Settings, User, Heart, Mail } from 'lucide-vue-next';
</script>

<style scoped>
.icon-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: transform 0.2s, box-shadow 0.2s;
}

.icon-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 24px;
  height: 24px;
  margin-bottom: 0.5rem;
  color: #2563eb;
}

span {
  font-size: 0.9rem;
  color: #666;
}
</style>
