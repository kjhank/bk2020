<?php
wp_enqueue_style( 'main_css', get_template_directory_uri() . '/dist/style.min.css' );
wp_enqueue_script( 'main_js', get_template_directory_uri() . '/dist/app.min.js', null, null, true);
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

function optimize_loading() {
  if (!is_admin()) {
    wp_deregister_script('wp_embed');
    wp_deregister_script('jquery');
  }
}

function unload_block_library() {
  wp_dequeue_style('wp-block-library');
}

add_action('init', 'optimize_loading');
add_action('wp_enqueue_scripts', 'unload_block_library');

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

