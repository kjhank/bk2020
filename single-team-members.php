<?php get_header();
/*
* Template Name: Single team member
* Template Post Type: team-members
*/

$data = get_field('member');
$arrow = get_field('icon-arrow', 'option');
$bright = $data['button']['bright'];
?>
<section class="team-member" style="background-image: url(<?= $data['background-image']['url']; ?>);">
  <div class="container team-member__container">
    <div class="team-member__wrapper">
      <h2 class="team-member__brow brow"><?= $data['brow']; ?></h2>
      <h1 class="team-member__name"><?= $data['name']; ?></h1>
      <div class="line line--highlight team-member__line"></div>
      <section class="team-member__description"><?= $data['description']; ?></section>
      <a href="<?= $data['button']['url']; ?>" class="team-member__link<?= $bright ? ' team-member__link--bright' : ''; ?> button"><?= $data['button']['text']; ?><?= file_get_contents(get_attached_file($arrow)); ?></a>
    </div>
  </div>
</section>
<?php get_footer(); ?>
