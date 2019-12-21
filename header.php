<!doctype html>
<html lang="pl">

<head>
  <meta charset="utf-8">
  <title><?php
          if (is_home() || is_front_page()) {
            echo bloginfo('name');
          } else {
            echo wp_title(''); echo ' &raquo; '; echo bloginfo('name');
          }
          ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class();?>>
<header class="main-header">
  <h1 class="main-header__logo"></h1>
    <?php
    wp_nav_menu(array(
      'menu'  => 'top-menu',
      'theme-location'  => 'top-menu',
      'container' => 'nav',
      'container_class' =>  'main-header__navigation',
      'fallback_cb' => false,
      'custom_li_class' =>'main-header__navigation-item',
      'menu_class'  => 'main-header__navigation-inner',
    ));
    ?>
</header>
