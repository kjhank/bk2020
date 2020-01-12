<?php get_header();
/*Template name: strona lądowania*/
$content_landing = get_field('landing-sections');
$content_section_0 = $content_landing['section-0'];
$content_section_1 = $content_landing['section-1'];
$content_section_2 = $content_landing['section-2'];
$arrow = get_field('icon-arrow', 'option');
?>

<section class="main-content__landing landing" id="home">
  <section class="landing__section hero-section" style="background-image: url(<?= $content_section_0['background-image']['url'] ?>);">
    <div class="container">
      <h2 class="hero-section__heading"><?= $content_section_0['heading']; ?></h2>
      <p class="hero-section__paragraph"><?= $content_section_0['paragraph']; ?></p>
      <a href="<?= $content_section_0['button']['url'] ?>" class="hero-section__button button button--front-white"><?= $content_section_0['button']['text']; ?><?= file_get_contents(get_attached_file($arrow)); ?></a>
    </div>

    <section class="hero-section__sub hero-sub" id="about">
      <div class="container">
        <h3 class="hero-sub__brow brow"><?= $content_section_0['sub-heading']; ?></h3>
        <p class="hero-sub__paragraph"><?= $content_section_0['sub-paragraph']; ?></p>
        <div class="line line--highlight hero-sub__line"></div>
        <section class="hero-sub__services">
          <?php
          $services = $content_section_0['services'];
          foreach ($services as $service) :
          ?>
            <article class="hero-sub__single-service <?php if ($service['highlight'] === true)  echo 'hero-sub__single-service--highlight'; ?>">
              <figure class="hero-sub__single-service-figure"><?= file_get_contents(get_attached_file($service['icon'])); ?></figure>
              <h4 class="hero-sub__single-service-name"><?= $service['name']; ?></h4>
              <div class="line line--highlight hero-sub__single-service-line"></div>
              <p class="hero-sub__single-service-description"><?= $service['description']; ?></p>
            </article>
          <?php endforeach; ?>
        </section>
      </div>
    </section>
  </section>
  <section class="landing__section services-section">
    <div class="container services-section__container">
      <h3 class="services-section__brow brow" id="specialization"><?= $content_section_1['brow']; ?></h3>
      <h2 class="services-section__heading"><?= $content_section_1['heading']; ?></h2>
      <div class="line line--highlight services-section__line"></div>
      <p class="services-section__description"><?= $content_section_1['description']; ?></p>
      <section class="services-section__services">
        <?php
        $services = $content_section_1['services'];
        foreach ($services as $service) :
        ?>
          <article class="services-section__single-service" data-background="<?= $service['background-image']['url']; ?>">
            <h4 class="services-section__single-service-name"><a class="services-section__single-service-url" href="<?= $service['url']; ?>"><?= $service['name']; ?></a><?= file_get_contents(get_attached_file($arrow)); ?></h4>
          </article>
        <?php endforeach; ?>
      </section>
    </div>
  </section>
  <section class="landing__section team-section" data-background="<?= $content_section_2['background-image']['url']; ?>" id="team">
    <div class="container team-section__container">
      <h3 class="team-section__brow brow"><?= $content_section_2['brow']; ?></h3>
      <h2 class="team-section__heading"><?= $content_section_2['heading']; ?></h2>
      <div class="line line--highlight team-section__line"></div>
      <p class="team-section__description"><?= $content_section_2['description']; ?></p>
      <a href="<?= $content_section_2['button']['url']; ?>" class="team-section__button button button--back-light"><?= $content_section_2['button']['text']; ?><?= file_get_contents(get_attached_file($arrow)); ?></a>
      <section class="team-section__members">
        <?php
        $members = $content_section_2['members'];
        foreach ($members as $member) :; ?>
          <article class="team-section__single-member" data-background="<?= $member['picture']['url']; ?>">
            <a class="team-section__single-member-wrapper" href="<?= get_permalink($member['url']); ?>">
              <h4 class="team-section__single-member-name"><?= $member['name']; ?></h4>
              <h5 class="team-section__single-member-position"><?= $member['position']; ?></h5>
            </a>
          </article>
        <?php endforeach; ?>
      </section>
  </section>
  </div>
</section>
<?php get_footer(); ?>
