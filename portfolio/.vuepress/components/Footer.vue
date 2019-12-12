<template>
  <div class="container footerarea">
    <ul class="w3-ul">
      <li><i class="fas fa-building faicon"></i> Company: {{ $site.themeConfig.footer.company }}</li>
      <li><i class="fa fa-map-marker faicon"></i> Address: {{ $site.themeConfig.footer.address }}</li>
      <li><i class="fa fa-phone faicon"></i> Phone: {{ $site.themeConfig.footer.phone }}</li>
      <li><i class="fa fa-envelope faicon"> </i> Email: {{ $site.themeConfig.footer.email }}</li>
      <li><i class="fa fa-copyright faicon" aria-hidden="true"></i> Copyright: {{ $site.themeConfig.footer.copyright }}</li>
    </ul>
  </div>
</template>

<style scoped>
  .footerarea {
    background-color: #eee;
  }
  .w3-ul li {
    font-size: 0.8rem;
  }
  .faicon {
    width: 30px;
  }
</style>
