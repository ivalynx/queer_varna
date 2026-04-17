---
layout: "base.njk"
title: "Queer Varna"
---

{% css %}
{% include "./assets/css/pair.css" %}
{% include "./assets/css/slider.css" %}
{% include "./assets/css/block-decorated.css" %}
{% include "./assets/css/flex.css" %}
{% include "./assets/css/grid.css" %}
{% include "./assets/css/card.css" %}
{% endcss %}

{% js %}
{% include "./assets/js/slider.js" %}
{% endjs %}

<section class="section pair">
  <div class="pair__body">
    <h1>Куиър Варна</h1>
    <p>Фондация „Куиър Варна“ е неправителствена организация, която работи за създаването на по-отворена, безопасна и подкрепяща среда за ЛГБТИ+ хората във Варна и региона. В контекст, в който много хора все още се сблъскват с липса на видимост и сигурност, ние изграждаме условия за общност, изразяване и взаимна подкрепа.</p>
    <p>Чрез култура, образование и общностни инициативи създаваме пространства за видимост, подкрепа и принадлежност.</p>
    <a href="/mission" class="button">Научи повече</a>
  </div>
  <div class="pair__visual">
    <div class="slider">
    <div class="slider__track" id="slider-track">
      <div class="slider__slide">
        <img eleventy:formats="webp" src="assets/img/cinema.jpg" alt="slide 1">
      </div>
      <div class="slider__slide">
        <img eleventy:formats="webp" src="assets/img/fest.jpg" alt="slide 2">
      </div>
      <div class="slider__slide">
        <img eleventy:formats="webp" src="assets/img/obshtina.jpg" alt="slide 3">
      </div>
    </div>
    <div class="slider__controls">
      <button class="slider__dot slider__dot--active" aria-label="go to slide 1"></button>
      <button class="slider__dot" aria-label="go to slide 2"></button>
      <button class="slider__dot" aria-label="go to slide 3"></button>
    </div>
  </div>
  </div>
</section>

<section class="block-decorated block-decorated__yellow">
  <div class="block-decorated__wrapper">
    <h2>Нашите цели</h2>    
    <div class="grid grid-3">
      <article class="card">
        <h3 class="card__title">Да подкрепяме местната ЛГБТИ+ общност</h3>
        <p class="card__text">Помогни ни чрез доброволчество в събития и инициативи</p>
        <a href="/volunteer/" class="button">Стани доброволец</a>
      </article>
      <article class="card">
        <h3 class="card__title">Да създаваме безопасни пространства</h3>
        <p class="card__text">Работи с нас като партньор за изграждане на по-сигурна среда</p>
        <a href="/partner/" class="button">Стани партньор</a>
      </article>
      <article class="card">
        <h3 class="card__title">Да разширяваме обхвата на дейността си</h3>
        <p class="card__text">Подкрепи ни финансово, за да достигнем до повече хора</p>
        <a href="/donate/" class="button">Стани дарител</a>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <h2>Събития и новини</h2>
  <div class="grid grid-4">
    <a href="https://www.instagram.com/queervarna/p/DW1I56jDFTj/">
      <img src="assets/img/slide1.jpg" alt="Научи повече">
    </a>
    <a href="https://www.instagram.com/queervarna/p/DWy_G3LjPb6/">
      <img src="assets/img/slide2.jpg" alt="Научи повече">
    </a>
    <a href="https://www.instagram.com/queervarna/p/DWZc-gpDOdZ/">
      <img src="assets/img/sliide3.jpg" alt="Научи повече">
    </a>
    <a href="https://www.instagram.com/queervarna/p/DWWoSpODEq8/">
      <img src="assets/img/slide4.jpg" alt="Научи повече">
    </a>
  </div>
</section>

