<template>
  <div @click="openAndCloseMobile" class="open-nav-mobile">
    <i class="fa-solid fa-bars"></i>
  </div>
  <nav class="mobile-container">
    <div class="logo-mobile">Calcs</div>
    <ul class="menu-mobile">
      <li>
        <a href="#">
          <i class="fa-solid fa-house"></i>
          <span>Página Inicial</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-chart-simple"></i>
          <span>Dashboards</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-list"></i>
          <span>Transações</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-file-lines"></i>
          <span>Relatórios</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-gear"></i>
          <span>Configurações</span>
        </a>
      </li>
      <li class="logout">
        <a href="#">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
function openAndCloseMobile() {
  const button = document.querySelector('.open-nav-mobile')
  button.addEventListener('click', () => {
    const nav = document.querySelector('.mobile-container')
    const mobileMenu = document.querySelector('.mobile-container')
    if (mobileMenu.classList.contains('checked')) {
      button.innerHTML = '<i class="fa-solid fa-bars"></i>'
      mobileMenu.style.removeProperty('transition')
    } else {
      button.innerHTML = '<i class="fa-solid fa-times"></i>'
      mobileMenu.style.transition = 'all 0.5s linear'
    }
    nav.classList.toggle('checked')
  })
}
</script>
