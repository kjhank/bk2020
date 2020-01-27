<?php
$contact      = get_field('contact', 'option');
$contact_form = substr($contact['cf7-shortcode'], 0, -1) . ' html_class="contact-form__inner"]';
$footer       = get_field('main-footer', 'option');
$map          = get_field('map', 'option');
$copyright    = get_field('copyright', 'option');
$logo         = get_field('main-logo', 'option');
$class        = is_front_page() == true ? ' main-footer--landing' : ' main-footer--page';
$allowed_tags = '<div><label><input><span><textarea><form><button><svg><path><?xml>';
$cookies      = get_field('cookies', 'option');
?>
</main>

<footer class="main-footer<?= $class; ?>" id="contact">
  <div class="container main-footer__container">
    <div class="main-footer__wrapper">
      <h3 class="main-footer__brow brow"><?= $contact['brow']; ?></h3>
      <h2 class="main-footer__heading"><?= $contact['heading']; ?></h2>
      <div class="line line--highlight main-footer__line"></div>
      <div class="main-footer__paragraph"><?= $contact['paragraph']; ?></div>
    </div>
    <section class="main-footer__contact-form contact-form"><?php echo strip_tags(do_shortcode($contact_form), $allowed_tags); ?></section>
    <footer class="main-footer__info" data-observable>
      <?= file_get_contents(get_attached_file($logo)); ?>
      <section class="main-footer__contact">
        <?php
        foreach ($footer as $item) :
        ?>
          <div class="main-footer__contact-item">
            <h4 class="main-footer__contact-heading"><?= $item['heading']; ?></h4>
            <div class="main-footer__contact-content"><?= $item['content']; ?></div>
          </div>
        <?php endforeach; ?>
      </section>
    </footer>
  </div>
  <section class="main-footer__map-wrapper">
    <iframe title="google maps" class="main-footer__map" src="<?= $map['url']; ?>" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </section>
  <div class="main-footer__copyright"><?= $copyright['content']; ?></div>
</footer>
<div class="cookie-banner">
  <div class="container cookie-banner__container">
    <div class="cookie-banner__wrapper">
      <p class="cookie-banner__text"><?= $cookies['text']; ?></p>
      <?php if ($cookies['privacy']): ?>
        <p class="cookie-banner__more"><a href="<?= $cookies['more']['url']; ?>" class="cookie-banner__more-link"><?= $cookies['more']['text']; ?></a>.</p>
      <?php endif;?>
    </div>
    <button class="button cookie-banner__button cookie-banner__button-accept" data-accept-cookies><?= $cookies['confirm']; ?></button>
  </div>
</div>
</body>
<?php wp_footer(); ?>

</html>
