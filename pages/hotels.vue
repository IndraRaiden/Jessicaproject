<template>
  <div class="hotels-container">
    <div class="hotels-header">
      <h1>HOTELS</h1>
      <div class="horizontal-line"></div>
    </div>
    
    <div class="hotels-content">
      <p class="intro-text">
        Discover our collection of carefully curated hotel projects that blend sophisticated design with exceptional hospitality experiences.
      </p>
      
      <div class="hotels-grid">
        <!-- Hotel Project Cards will be added here -->
        <div class="hotel-card">
          <div class="hotel-image">
            <img src="/placeholder-hotel.jpg" alt="Hotel Project" />
          </div>
          <div class="hotel-info">
            <h3>HORIZON RESORT</h3>
            <p>Oslo, Norway</p>
          </div>
        </div>
        
        <div class="hotel-card">
          <div class="hotel-image">
            <img src="/placeholder-hotel.jpg" alt="Hotel Project" />
          </div>
          <div class="hotel-info">
            <h3>MERIDIAN SUITES</h3>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Hotels page component
</script>

<style scoped>
.hotels-container {
  padding: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hotels-header {
  margin-bottom: 3rem;
}

.hotels-header h1 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 2rem;
  color: #29332e;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.horizontal-line {
  height: 1px;
  background-color: #29332e;
  width: 100px;
  margin-bottom: 2rem;
}

.intro-text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.2rem;
  color: #29332e;
  max-width: 800px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.hotel-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hotel-card:hover {
  transform: translateY(-5px);
}

.hotel-image {
  overflow: hidden;
  margin-bottom: 1rem;
}

.hotel-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hotel-card:hover .hotel-image img {
  transform: scale(1.05);
}

.hotel-info h3 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.2rem;
  color: #29332e;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.hotel-info p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .hotels-container {
    padding: 2rem;
  }
  
  .hotels-grid {
    grid-template-columns: 1fr;
  }
}
</style>
