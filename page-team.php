<?php get_header(); ?>
<?php
/*Template name: strona zespołu*/
$team_content = get_field('team');
$background = $team_content['background-image'];
$team_groups = $team_content['member-groups'];
?>
<section class="page-team" style="background-image: url(<?= $background['url']; ?>)">
  <div class="container page-team__container">
    <h1 class="page-team__heading"><?= $team_content['heading']; ?></h1>
    <div class="line line--highlight page-team__line"></div>
    <p class="page-team__description"><?= $team_content['description']; ?></p>
    <section class="page-team__team-members team-members">
      <?php
      foreach ($team_groups as $group) :
      ?>
        <section class="team-members__group">
          <h2 class="team-members__group-name"><?= $group['group-name']; ?></h2>
          <div class="team-members__group-wrapper">
            <?php foreach ($group['members'] as $member) : ?>
              <?php
              $id = $member['member-id'];
              $data = get_field('member', $id);
              $url = str_replace('/team-members/', '/', get_permalink($id));
              ?>
              <article class="team-members__member" data-background="<?= $data['image']['url']; ?>">
                <a href="<?= $url; ?>" class="team-members__member-link">
                  <div class="team-members__member-data">
                    <h3 class="team-members__member-name"><?= $data['name']; ?></h3>
                    <h4 class="team-members__member-position"><?= $data['brow']; ?></h4>
                  </div>
                </a>
              </article>
            <?php endforeach; ?>
          </div>
        </section>
      <?php endforeach; ?>
    </section>
  </div>
</section>
<?php get_footer(); ?>
