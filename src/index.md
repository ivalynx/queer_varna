---
layout: "base.njk"
title: "Queer Varna"
---
{% css %}
.AboutUs { padding: var(--spacing-main) var(--padding-section); display: flex; flex-direction: column; gap: 1.5rem; }
.GoalCard { background: var(--color-light-yellow); border-radius: var(--border-radius-card); padding: 1rem 1.5rem; }
.Partners__list { display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; }



.About {
  display: flex;
  flex-direction: column;
  padding: clamp(2rem, 1.6rem + 1.8vw, 3rem) var(--padding-side);
  gap: clamp(1.5rem, 1.3rem + 0.9vw, 2rem);
  background: var(--color-background);
}
.About__Content { max-width: 52.2rem; display: flex; flex-direction: row; gap: 1.5rem; }

.Partners {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1.5rem, 1.3rem + 0.9vw, 2rem) var(--padding-side);
  gap: 1.2rem;
  background: var(--color-lilac);
}
.Partners__Title { font-size: var(--fs-h2); color: var(--color-navy); font-weight: 600; line-height: 1.1; }
.Partners__List { display: flex; justify-content: center; align-items: center; gap: 2rem; flex-wrap: wrap; width: 100%; }
.Partner__Logo { height: clamp(4rem, 3.5rem + 2vw, 6rem); width: auto; }
{% endcss %}

<section data-layer="about_us" class="About container">
  <div class="About__Content">
    <h1>Куиър Варна</div>
    <p>Фондация „Куиър Варна“ е неправителствена организация, която работи за създаването на по-отворена, безопасна и подкрепяща среда за ЛГБТИ+ хората във Варна и региона. В контекст, в който много хора все още се сблъскват с липса на видимост и сигурност, ние изграждаме условия за общност, изразяване и взаимна подкрепа.</p>
    <p>Чрез култура, образование и общностни инициативи създаваме пространства за видимост, подкрепа и принадлежност.</p>
    <a href="#" class="button button-primary">Научи повече</a>
  </div>

  <div data-layer="Frame 10" class="Frame10" style="width: 735px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 20px; display: inline-flex">
    <img alt="" data-layer="cinema" class="Cinema" style="align-self: stretch; height: 406px; border-radius: 50px" src="https://placehold.co/735x406" />
    <div data-layer="Frame 9" class="Frame9" style="justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
      <div data-svg-wrapper data-layer="Ellipse 1" class="Ellipse1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9.5" fill="var(--purple, #585081)" stroke="var(--navy, #2C273F)"/>
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Ellipse 3" class="Ellipse3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9.5" stroke="var(--navy, #2C273F)"/>
        </svg>
      </div>
      <div data-svg-wrapper data-layer="Ellipse 2" class="Ellipse2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9.5" stroke="var(--navy, #2C273F)"/>
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- GOALS -->

<section data-layer="goals" class="Goals container" style="align-self: stretch; overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
  <div data-layer="border-top-bg-0" class="BorderTopBg0" style="align-self: stretch; height: 109.32px; position: relative">
    <div data-svg-wrapper data-layer="polygon" class="Polygon" style="left: 0px; top: 0.58px; position: absolute">
      <svg width="1920" height="109" viewBox="0 0 1920 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 108.906C70.0788 68.4749 170.41 -59.1597 654.393 32.3153C1212.96 137.887 1539.52 -42.2492 1920 32.3153V108.906L0 108.906Z" fill="var(--yellow, #F8C761)"/>
      </svg>
    </div>
  </div>
  <div data-layer="Frame 30" class="Frame30" style="align-self: stretch; padding-left: 50px; padding-right: 50px; background: var(--yellow, #F8C761); flex-direction: column; justify-content: flex-start; align-items: flex-start; display: flex">
    <div data-layer="Нашите цели" style="width: 580px; color: var(--navy, #2C273F); font-size: 48px; font-family: Montserrat; font-weight: 600; line-height: 52.80px; word-wrap: break-word">Нашите цели</div>
    <div data-layer="Frame 8" class="Frame8" style="align-self: stretch; height: 327px; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex; flex-wrap: wrap; align-content: flex-start">
      <div data-layer="подкрепяме" style="width: 580px; padding-left: 30px; padding-right: 30px; padding-top: 20px; padding-bottom: 20px; background: var(--light-yellow, #FFECC3); border-radius: 30px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
        <div data-layer="Frame 26" class="Frame26" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
          <div data-layer="Да подкрепяме местната ЛГБТИ+ общност" style="align-self: stretch; height: 72px; color: var(--navy, #2C273F); font-size: 24px; font-family: Montserrat; font-weight: 500; line-height: 36px; word-wrap: break-word">Да подкрепяме местната ЛГБТИ+ общност</div>
          <div data-layer="Помогни ни чрез доброволчество в събития и инициативи" style="align-self: stretch; color: var(--navy, #2C273F); font-size: 20px; font-family: Montserrat; font-weight: 400; line-height: 30px; word-wrap: break-word">Помогни ни чрез доброволчество в събития и инициативи</div>
        </div>
        <div data-layer="Button" data-bg_color="Primary" class="Button" style="padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; background: var(--purple, #585081); border-radius: 26px; justify-content: center; align-items: center; gap: 4px; display: inline-flex">
          <div data-layer="Научете повече" style="justify-content: center; display: flex; flex-direction: column; color: var(--light-yellow, #FFECC3); font-size: 20px; font-family: Montserrat; font-weight: 400; word-wrap: break-word">Стани доброволец</div>
        </div>
      </div>
      <div data-layer="създаваме" style="width: 580px; padding-left: 30px; padding-right: 30px; padding-top: 20px; padding-bottom: 20px; background: var(--light-yellow, #FFECC3); border-radius: 30px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
        <div data-layer="Frame 27" class="Frame27" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
          <div data-layer="Да създаваме безопасни пространства" style="align-self: stretch; height: 72px; color: var(--navy, #2C273F); font-size: 24px; font-family: Montserrat; font-weight: 500; line-height: 36px; word-wrap: break-word">Да създаваме безопасни пространства</div>
          <div data-layer="Работи с нас като партньор за изграждане на по-сигурна среда" style="align-self: stretch; color: var(--navy, #2C273F); font-size: 20px; font-family: Montserrat; font-weight: 400; line-height: 30px; word-wrap: break-word">Работи с нас като партньор за изграждане на по-сигурна среда</div>
        </div>
        <div data-layer="Button" data-bg_color="Primary" class="Button" style="padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; background: var(--green, #42644B); border-radius: 26px; justify-content: center; align-items: center; gap: 4px; display: inline-flex">
          <div data-layer="Научете повече" style="justify-content: center; display: flex; flex-direction: column; color: var(--light-yellow, #FFECC3); font-size: 20px; font-family: Montserrat; font-weight: 400; word-wrap: break-word">Стани партньор</div>
        </div>
      </div>
      <div data-layer="разширяваме" style="width: 580px; padding-left: 30px; padding-right: 30px; padding-top: 20px; padding-bottom: 20px; background: var(--light-yellow, #FFECC3); border-radius: 30px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
        <div data-layer="Frame 28" class="Frame28" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
          <div data-layer="Да разширяваме обхвата на дейността си" style="align-self: stretch; height: 72px; color: var(--navy, #2C273F); font-size: 24px; font-family: Montserrat; font-weight: 500; line-height: 36px; word-wrap: break-word">Да разширяваме обхвата на дейността си</div>
          <div data-layer="Подкрепи ни финансово, за да достигнем до повече хора" style="align-self: stretch; color: var(--navy, #2C273F); font-size: 20px; font-family: Montserrat; font-weight: 400; line-height: 30px; word-wrap: break-word">Подкрепи ни финансово, за да достигнем до повече хора</div>
        </div>
        <div data-layer="Button" data-bg_color="Primary" class="Button" style="padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; background: var(--purple, #585081); border-radius: 26px; justify-content: center; align-items: center; gap: 4px; display: inline-flex">
          <div data-layer="Научете повече" style="justify-content: center; display: flex; flex-direction: column; color: var(--light-yellow, #FFECC3); font-size: 20px; font-family: Montserrat; font-weight: 400; word-wrap: break-word">Стани дарител</div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="border-bottom-bg" class="BorderBottomBg" style="align-self: stretch; height: 157.71px; position: relative">
    <div data-svg-wrapper data-layer="polygon" class="Polygon" style="left: 0px; top: 0px; position: absolute">
      <svg width="1920" height="158" viewBox="0 0 1920 158" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1920 1.32249e-05L0 0V43.116C147.066 118.543 313.829 179.607 377.752 119.6C505.752 -0.557125 746.013 -38.9263 1251.17 116.436C1682.06 248.957 1583.17 15.9847 1920 61.4017V1.32249e-05Z" fill="var(--yellow, #F8C761)"/>
      </svg>
    </div>
  </div>
</section>

<section data-layer="news" class="News container" style="align-self: stretch; padding-left: 50px; padding-right: 50px; padding-top: 40px; padding-bottom: 40px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
  <div data-layer="Събития и новини" style="align-self: stretch; text-align: center; color: var(--navy, #2C273F); font-size: 48px; font-family: Montserrat; font-weight: 600; line-height: 52.80px; word-wrap: break-word">Събития и новини</div>
  <div data-layer="Frame 12" class="Frame12" style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
    <div data-layer="Frame 13" class="Frame13" style="width: 423px; height: 530px; position: relative">
      <img alt="" data-layer="image 1" class="Image1" style="width: 423px; height: 530px; left: 0px; top: 0px; position: absolute" src="https://placehold.co/423x530" />
      <div data-layer="Button" data-bg_color="Accent" class="Button" style="max-width: 214px; padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; left: 192px; top: 27px; position: absolute; background: var(--yellow, #F8C761); border-radius: 26px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div data-layer="Дарете" style="justify-content: center; display: flex; flex-direction: column; color: var(--navy, #2C273F); font-size: 22px; font-family: Montserrat; font-weight: 400; line-height: 28px; word-wrap: break-word">Научи повече</div>
      </div>
    </div>
    <div data-layer="Frame 14" class="Frame14" style="width: 423px; height: 529px; position: relative">
      <img alt="" data-layer="image 2" class="Image2" style="width: 423px; height: 529px; left: 0px; top: 0px; position: absolute" src="https://placehold.co/423x529" />
      <div data-layer="Button" data-bg_color="Accent" class="Button" style="max-width: 214px; padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; left: 192px; top: 27px; position: absolute; background: var(--yellow, #F8C761); border-radius: 26px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div data-layer="Дарете" style="justify-content: center; display: flex; flex-direction: column; color: var(--navy, #2C273F); font-size: 22px; font-family: Montserrat; font-weight: 400; line-height: 28px; word-wrap: break-word">Научи повече</div>
      </div>
    </div>
    <div data-layer="Frame 15" class="Frame15" style="width: 423px; height: 529px; position: relative">
      <img alt="" data-layer="image 3" class="Image3" style="width: 423px; height: 529px; left: 0px; top: 0px; position: absolute" src="https://placehold.co/423x529" />
      <div data-layer="Button" data-bg_color="Accent" class="Button" style="max-width: 214px; padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; left: 192px; top: 27px; position: absolute; background: var(--yellow, #F8C761); border-radius: 26px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div data-layer="Дарете" style="justify-content: center; display: flex; flex-direction: column; color: var(--navy, #2C273F); font-size: 22px; font-family: Montserrat; font-weight: 400; line-height: 28px; word-wrap: break-word">Научи повече</div>
      </div>
    </div>
    <div data-layer="Frame 16" class="Frame16" style="width: 430px; height: 530px; position: relative">
      <img alt="" data-layer="image 4" class="Image4" style="width: 430px; height: 538px; left: 0px; top: -4px; position: absolute" src="https://placehold.co/430x538" />
      <div data-layer="Button" data-bg_color="Accent" class="Button" style="max-width: 214px; padding-left: 28px; padding-right: 28px; padding-top: 14px; padding-bottom: 14px; left: 192px; top: 27px; position: absolute; background: var(--yellow, #F8C761); border-radius: 26px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
        <div data-layer="Дарете" style="justify-content: center; display: flex; flex-direction: column; color: var(--navy, #2C273F); font-size: 22px; font-family: Montserrat; font-weight: 400; line-height: 28px; word-wrap: break-word">Научи повече</div>
      </div>
    </div>
  </div>
</section>

<section data-layer="Frame 29" class="Frame29 container" style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
  <div data-layer="border-top-bg-0" class="BorderTopBg0" style="width: 1920px; height: 109.32px; position: relative">
    <div data-svg-wrapper data-layer="polygon" class="Polygon" style="left: 0px; top: 0.58px; position: absolute">
      <svg width="1920" height="109" viewBox="0 0 1920 109" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 108.906C70.0788 68.4749 170.41 -59.1597 654.393 32.3153C1212.96 137.887 1539.52 -42.2492 1920 32.3153V108.906L0 108.906Z" fill="var(--lilac, #D1C8FF)"/>
      </svg>
    </div>
  </div>
  <div data-layer="partners" class="Partners container" style="width: 1920px; padding-left: 50px; padding-right: 50px; padding-top: 40px; padding-bottom: 40px; background: var(--lilac, #D1C8FF); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
    <div data-layer="Партньори" style="align-self: stretch; text-align: center; color: var(--navy, #2C273F); font-size: 48px; font-family: Montserrat; font-weight: 600; line-height: 52.80px; word-wrap: break-word">Партньори</div>
    <div data-layer="Frame 12" class="Frame12" style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
      <img alt="" data-layer="image 9" class="Image9" style="width: 72px; height: 120px" src="https://placehold.co/72x120" />
    </div>
  </div>
  <div data-layer="partners" class="Partners" style="width: 1920px; padding-left: 50px; padding-right: 50px; padding-top: 40px; padding-bottom: 40px; background: var(--lilac, #D1C8FF); flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
    <div data-layer="Официални донори" style="align-self: stretch; text-align: center; color: var(--navy, #2C273F); font-size: 48px; font-family: Montserrat; font-weight: 600; line-height: 52.80px; word-wrap: break-word">Официални донори</div>
  </div>
</section>

