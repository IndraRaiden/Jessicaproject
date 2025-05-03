<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-section">
        <h2 style="color: #e0e0e0;">Got a project?</h2>
        <button class="footer-button">
          Let's talk <span class="dropdown-arrow">▼</span>
        </button>
      </div>
      <div class="footer-section">
        <h2 style="color: #e0e0e0;">Work with us</h2>
        <button class="footer-button">
          Get in touch <span class="dropdown-arrow">▼</span>
        </button>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-content">
        <div class="find-us">
          <h3>Find us:</h3>
          <div class="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
          </div>
        </div>
        
        <div class="contact-info">
          <h3>Contact:</h3>
          <a href="mailto:hello@wearecara.com" class="email">hello@wearecara.com</a>
          <div class="phone-numbers">
            <div class="phone-location">
              <span class="phone">+1 646 651 7126</span> | <span class="location">New York</span>
            </div>
            <div class="phone-location">
              <span class="phone">+55 11 xxxxx xxxx</span> | <span class="location">São Paulo</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>©2025 FutureRoofBrand. All rights reserved.</p>
        <div class="legal-links">
          <a href="/cookies-and-privacy">Cookies and privacy</a> | 
          <a href="/modern-slavery-act">Modern Slavery Act 2015</a> | 
          <a href="/transparency-statement">Transparency Statement</a> | 
          <a href="/ccpa-privacy-notice">CCPA Privacy Notice</a>
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
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  background-color: #000;
  color: #e0e0e0;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.footer-section h2 {
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #e0e0e0;
}

.footer-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
}

.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 5px;
}

.footer-bottom {
  padding: 60px 0 20px;
  background-color: #f5f5f5;
  color: #333;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 40px;
}

.find-us h3,
.contact-info h3 {
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-info {
  text-align: right;
}

.email {
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.phone-numbers {
  font-size: 0.9rem;
}

.phone-location {
  margin-bottom: 5px;
}

.phone {
  font-weight: 500;
}

.location {
  font-weight: 400;
}

.copyright {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #666;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.legal-links a {
  text-decoration: none;
  color: #666;
}

@media (max-width: 768px) {
  .footer-content,
  .copyright {
    flex-direction: column;
  }
  
  .contact-info {
    text-align: left;
    margin-top: 30px;
  }
  
  .copyright {
    gap: 10px;
  }
  
  .legal-links {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>
