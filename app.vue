<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <Hero />
    <div class="content">
      <div class="section">
        <h2>COLLECTION</h2>
        <IconDemo />
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}

body {
  font-family: 'Inter', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  position: relative;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 4rem 2rem;
}

.section {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
