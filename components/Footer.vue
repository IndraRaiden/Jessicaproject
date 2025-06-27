<template>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-column">
        <h3><a href="/about">{{ t('footerAboutTitle') }}</a></h3>
        <ul>
          <li><a href="/about">{{ t('footerAboutMeetFounder') }}</a></li>
          <li><a href="/about">{{ t('footerAboutWorkWithUs') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/services">{{ t('footerServicesTitle') }}</a></h3>
        <ul>
          <li><a href="/services">{{ t('footerServicesDesign') }}</a></li>
          <li><a href="/services">{{ t('footerServicesStrategy') }}</a></li>
          <li><a href="/services">{{ t('footerServicesConsulting') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/hotels">{{ t('footerProjectsTitle') }}</a></h3>
        <ul>
          <li><a href="/hotels">{{ t('footerProjectsHotels') }}</a></li>
          <li><a href="/foodnbeverage" v-html="t('footerProjectsFNB')"></a></li>
          <li><a href="/santuaries-and-cultural">{{ t('footerProjectsSanctuaries') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3><a href="/about">{{ t('footerContactTitle') }}</a></h3>
        <a href="mailto:info@weareoara.com" class="email">info@weareoara.com</a>
        <div class="contact-info">
          <p class="contact-line"><span class="city">NEW YORK</span><span class="phone">+1 646 651 7126</span></p>
          <p class="contact-line"><span class="city">SÃO PAULO</span><span class="phone">+55 11 xxxxx xxxx</span></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation';
const { t } = useTranslation();
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
  font-size: 1.44rem; /* 40% bigger */
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.22em; /* ≈ 220 spacing */
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
.contact-line {
  display: flex;
  gap: 10px;
}

.city {
  width: 110px; /* ensures alignment */
  text-align: left;
}

.phone {
  white-space: nowrap;
}
</style>
