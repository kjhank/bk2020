<?php
$contact    = get_field('contact', 'option');
$footer     = get_field('main-footer', 'option');
$map        = get_field('map', 'option');
$copyright  = get_field('copyright', 'option');
$logo       = get_field('main-logo', 'option');
?>
</main>

<footer class="main-footer">
  <div class="container">
    <h3 class="main-footer__brow"><?= $contact['brow']; ?></h3>
    <h2 class="main-footer__heading"><?= $contact['heading']; ?></h2>
    <div class="main-footer__paragraph"><?= $contact['paragraph']; ?></div>
    <section class="main-footer__contact-form"><?php echo do_shortcode($contact['cf7-shortcode']); ?></section>
    <footer class="main-footer__info">
      <img src="<?= $logo['url']; ?>" alt="<?= $logo['alt']; ?>" class="main-footer__logo">
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
  <section class="main-footer__map">
    <iframe src="<?= $map['url']; ?>" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </section>
  <div class="main-footer__copyright"><?= $copyright['content']; ?></div>
</footer>
<?php wp_footer(); ?>
</body>

</html>
