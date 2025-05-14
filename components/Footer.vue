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
          <a href="mailto:hello@weareoara.com" class="email">hello@weareoara.com</a>
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
        <div class="copyright-bar">
          <p>©2025 OARA HOSPITALITY STRATEGY + DESIGN. ALL RIGHTS RESERVED.</p>
          <div class="legal-links">
            <a href="/cookies-and-privacy">COOKIES AND PRIVACY</a> | 
            <a href="/modern-slavery-act">MODERN SLAVERY ACT 2015</a> | 
            <a href="/transparency-statement">TRANSPARENCY STATEMENT</a> | 
            <a href="/ccpa-privacy-notice">CCPA PRIVACY NOTICE</a>
          </div>
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
  font-family: 'Be Vietnam Pro', sans-serif;
  position: relative;
  z-index: 10;
  margin-top: 60px;
  margin-bottom: 0;
  padding-bottom: 0;
  letter-spacing: 220%;
  text-transform: uppercase;
  font-weight: 600; /* Semi-bold */
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
  font-weight: 700; /* Bold */
  margin-bottom: 15px;
  font-size: 1rem;
  color: #e0e0e0;
  letter-spacing: 220%;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif;
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
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 220%;
  text-transform: uppercase;
}

.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 5px;
}

.footer-bottom {
  padding: 60px 0 0;
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
  font-weight: 400; /* Regular */
  margin-bottom: 10px;
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400; /* Regular */
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
}

.contact-info {
  text-align: right;
}

.email {
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400; /* Regular */
  margin-bottom: 10px;
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
}

.phone-numbers {
  font-size: 0.9rem;
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
  font-weight: 400; /* Regular */
}

.phone-location {
  margin-bottom: 5px;
}

.phone {
  font-weight: 400; /* Regular */
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
}

.location {
  font-weight: 400; /* Regular */
  font-family: 'Instrument Serif', serif !important;
  letter-spacing: 20px;
  text-transform: none;
}

.copyright {
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 0.7rem;
  color: #333;
  padding: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 300; /* Light */
  background-color: #fff;
  position: relative;
  bottom: 0;
}

.copyright-bar {
  width: 100%;
  max-width: 100%;
  padding: 15px 40px;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 5px;
}

.legal-links a {
  text-decoration: none;
  color: #333;
  font-family: 'Be Vietnam Pro', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 300; /* Light */
  font-size: 0.65rem;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .find-us,
  .contact-info {
    text-align: center;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .find-us {
    margin-top: 0;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .phone-numbers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .copyright-bar {
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
  }
  
  .legal-links {
    justify-content: center;
  }
}
</style>
