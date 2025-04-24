<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      </a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M21 12c0 4.418 -4.03 8 -9 8a9.76 9.76 0 0 1 -3.24 -.55"></path>
          <path d="M12.866 21.496c-.413 -2.02 -.588 -3.257 -1.457 -4.496c-.444 -.624 -1.187 -1.106 -2.021 -1.106c-1.95 0 -1.953 1.908 -1.953 2.25c0 2.167 1.677 2.855 3.775 2.855c.486 0 .98 -.045 1.656 -.097z"></path>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup>
// Footer component with social media icons
</script>

<style scoped>
.footer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 10px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(51, 51, 51, 0.1);
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icon {
  color: #333;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  opacity: 1;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .social-icons {
    gap: 15px;
  }
}
</style>
