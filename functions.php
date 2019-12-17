<?php
if (!is_admin()) {
  wp_enqueue_style('main_css', get_template_directory_uri() . '/dist/style.min.css');
  wp_enqueue_script('main_js', get_template_directory_uri() . '/dist/app.min.js', null, null, true);
}

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

function optimize_loading()
{
  if (!is_admin()) {
    wp_deregister_script('wp_embed');
    // wp_deregister_script('jquery');
  }
}

function unload_block_library()
{
  wp_dequeue_style('wp-block-library');
}

function register_menus() {
  register_nav_menus(array(
    'top-menu'  => __('Main header menu', 'en'),
  ));
}

function add_additional_class_on_li($classes, $item, $args) {
  if(isset($args->custom_li_class)) {
      $classes[] = $args->custom_li_class;
  }

  return $classes;
}

function add_nav_anchor_classes($atts, $item, $args) {
  // if( $args->theme_location == 'top-menu' ) {
    $atts['class'] = 'menu-link-class';
  // }
  return $atts;
}

add_action('init', 'optimize_loading');
add_action('after_setup_theme', 'register_menus');
add_action('wp_enqueue_scripts', 'unload_block_library');

add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
add_filter('nav_menu_link_attributes', 'add_nav_anchor_classes', 10, 3);
add_filter('use_block_editor_for_posts', '__return_false', 10);
add_filter('use_block_editor_for_post_type', '__return_false', 10);

if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title'  => 'Ustawienia globalne strony',
    'menu_title'  => 'Ustawienia strony',
    'menu_slug'   => 'general-page-settings',
    'capability'  => 'edit_posts',
    'redirect'    => false,
  ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Ustawienia nagłówka',
    'menu_title'  => 'Nagłówek',
    'parent_slug' => 'general-page-settings',
  ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Ustawienia stopki',
    'menu_title'  => 'Stopka',
    'parent_slug' => 'general-page-settings',
  ));

  acf_add_options_sub_page(array(
    'page_title'  => 'Ustawienia SEO',
    'menu_title'  => 'SEO',
    'parent_slug' => 'general-page-settings',
  ));
}
