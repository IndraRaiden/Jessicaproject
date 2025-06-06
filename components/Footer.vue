<template>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-column">
        <h3><a href="/about">About us</a></h3>
        <ul>
          <li><a href="/about">meet the Founder</a></li>
          <li><a href="/about">our team</a></li>
          <li><a href="/about">work with us</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/services">Services</a></h3>
        <ul>
          <li><a href="/services">Design</a></li>
          <li><a href="/services">Estrategy</a></li>
          <li><a href="/services">Consulting</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/hotels">Portfolio</a></h3>
        <ul>
          <li><a href="/hotels">Hotels</a></li>
          <li><a href="/foodnbeverage">Food</a></li>
          <li><a href="/santuaries-and-cultural">Culture</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/about">Contact us</a></h3>
        <a href="mailto:hello@weareoara.com" class="email">hello@weareoara.com</a>
        <div class="contact-info">
          <p>+1 646 651 7126 | New York</p>
          <p>+55 11 xxxxx xxxx | São Paulo</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component with contact information and social links
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 60px 80px;
  background-color: #ffffff;
  font-family: 'Be Vietnam Pro', sans-serif;
  position: relative;
  z-index: 10;
  margin-top: 0;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  flex: 1;
  padding: 0 15px;
}

.footer-column h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
}

.footer-column h3 a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease;
}

.footer-column h3 a:hover {
  color: #666;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column a {
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #666;
}

.email {
  display: block;
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 15px;
}

.contact-info p {
  margin: 5px 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: #000;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px;
  }
  
  .footer-columns {
    flex-direction: column;
  }
  
  .footer-column {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .footer-column:last-child {
    margin-bottom: 0;
  }
}
</style>
