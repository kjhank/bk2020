<?php get_header();
/* Template name: strona specjalizacji */
$content = get_field('specs');
$type = 'grid-' . $content['type'];
$list = $content[$type];
$background = $content['background-image']['url'];
$arrow = get_field('icon-arrow', 'option');
?>
<section class="page-specializations" style="background-image: url(<?= $background; ?>)">
  <div class="container page-specializations__container">
    <h2 class="page-specializations__brow brow"><?= $content['brow']; ?></h2>
    <h1 class="page-specializations__heading"><?= $content['heading']; ?></h1>
    <div class="line line--highlight page-specializations__line"></div>
    <div class="page-specializations__description"><?= $content['description']; ?></div>
    <section class="page-specializations__grid page-specializations__grid--<?= $content['type']; ?>">
      <?php foreach ($list as $spec) : ?>
        <article class="page-specializations__single page-specializations__single--<?= $content['type']; ?>">
          <a href="<?= get_permalink($spec['spec']); ?>" class="page-specializations__single-link">
            <h2 class="page-specializations__single-name"><?= get_the_title($spec['spec']); ?></h2>
            <?= file_get_contents(get_attached_file($arrow)); ?>
          </a>
        </article>
      <?php endforeach; ?>
    </section>
  </div>
</section>
<?php get_footer(); ?>
