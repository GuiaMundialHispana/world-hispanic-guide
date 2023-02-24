<template>
  <section class="px-4 md:px-6 lg:px-20 mx-auto">
    <div class="benefit-content mt-4 md:mt-8 lg:mt-32">
      <figure class="justify-end lg:pr-8">
        <img class="lg:w-[567px]" src="/img/benefits/user-benefits.png" alt="Beneficios como usuario">
      </figure>
      <div class="benefit-info">
        <h2><span>Beneficios</span><br>como usuario</h2>
        <p>Podrás visitar y encontrar todo lo que busques en los renglones de bienes raíces, vehículos, negocios y servicios profesionales en nuestros portales. En casas y más, podrás ver cualquier propiedad de su interés para compras, ventas y alquileres de forma rápida y precisa, con mapa de localización y satelital Google, distancia entre usted y su búsqueda, además fotos y videos con contenido de alta definición. También podrás informarse de los servicios alrededor de la propiedad de su interés, tales como escuelas, autopistas, hospitales, supermercados, aeropuertos, bomberos, transporte públicos y clínicas. En carros y mas, podrás ver lo mismo que en casas y mas, pero además podrás recibir la cotización gratis del vehículo de su interés, en la pestaña cotizar, lo mismo para comprar o vender vehículos, también tendrá la opción de ver el historial del vehículo, las millas reales, accidentes, tiempo en el país, además cuantos dueños ha tenido a un costo adicional. En negocios y más, podrás ver cualquier categoría que le interese, tales como negocios y servicios profesionales con una gran variedad de fotos y videos en todo el país.</p>
      </div>
    </div>
    <div class="benefit-content reverse my-11 lg:my-32">
        <figure class="lg:pl-[140px]">
        <img class="lg:w-[423px]" src="/img/benefits/advertiser-benefits.png" alt="Beneficios como anunciante">
      </figure>
      <div class="benefit-info lg:text-right">
        <h2><span>Beneficios</span><br> como anunciante</h2>
        <p>Usted podrá publicar cualquier cantidad de vehículos, negocios, servicios profesionales y propiedades a los mejores precios del mercado con las más altas tecnologías de páginas Web, incluyendo una gran cantidad de fotos y subir videos en tiempo real con audio, los cuales podrán ser vistos en cualquier parte del mundo con contacto directo con el usuario sin ningún pago de comisión a intermediarios.</p>
      </div>
    </div>
    <div class="benefit-content mb-[88px]">
        <figure class="justify-end lg:pr-16">
          <img class="lg:w-[507px]" src="/img/benefits/affiliate-benefits.png" alt="Beneficios como afiliado independiente">
        </figure>
        <div class="benefit-info">
          <h2><span>Beneficios</span><br> como afiliado<br> independiente</h2>
          <p>Como afiliado independiente, usted podrás afiliar y vender publicidad en nuestros portales y recibirá desde un 40% hasta un 68% en comisión por afiliación y ventas que realices, usted podrá adquirir una franquicia al afiliarse por un año con un único pago de RD$10,000.00 pesos, lo que le permitirá ser el gerente de su propia compañía de ventas de publicidad y de afiliaciones de personas en cualquier lugar del país y disfrutar de los beneficios que genere sin ningún pago adicional durante todo el año.</p><p class="my-4"><strong>Para eso utilizaremos la fórmula 472, la cual consiste en:</strong></p>
          <ul class="ml-6 list-disc leading-[22px] text-justify md:text-left">
            <li>4 Compañías para ganar, casas y más, carros y más, negocios y más y grupo familiar multinivel.</li>
            <li>7 Diferentes niveles de ingresos, 40% 10% 7% 5% 3% 2% y 1%, de comisión por lo que generes.</li>
            <li>2 Vías para lograrlo, en Ventas directas y Afiliaciones.</li>
          </ul>
        </div>
    </div>
  </section>
  
</template>

<style lang="postcss" scoped>
h2{
  @apply text-3xl md:text-5xl lg:text-[64px] text-[#293451] font-bold lg:leading-[64px] mb-3 md:mb-6;
  & span {
    @apply text-[#FF2625];
  }
}
figure{
  @apply lg:w-1/2 flex;
}
p{
  @apply leading-[22px] text-sm text-justify md:text-left;
}
.benefit-info{
  @apply items-center lg:w-1/2 max-w-2xl ;
}
.benefit-content{
  @apply flex gap-6 items-center flex-col-reverse lg:flex-row;
}
.benefit-content.reverse{
  @apply lg:flex-row-reverse;
}
</style>