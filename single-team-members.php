<?php get_header();
/*
* Template Name: Single team member
* Template Post Type: team-members
*/

$data = get_field('member');
?>
<section class="team-member" style="background-image: url(<?= $data['background-image']['url']; ?>);">
  <div class="container team-member__container">
    <div class="team-member__wrapper">
      <h2 class="team-member__brow"><?= $data['brow']; ?></h2>
      <h1 class="team-member__name"><?= $data['name']; ?></h1>
      <div class="line line--highlight team-member__line"></div>
      <section class="team-member__description"><?= $data['description']; ?></section>
      <a href="<?= $data['button']['url']; ?>" class="team-member__link button"><?= $data['button']['text']; ?></a>
    </div>
  </div>
</section>
<?php get_footer(); ?>
