<?php

if (!is_admin()) {
  wp_enqueue_style('main_css', get_template_directory_uri() . '/dist/style.min.css');
  wp_enqueue_script('main_js', get_template_directory_uri() . '/dist/app.min.js', null, null, true);
}

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

function optimize_loading()
{
  wp_dequeue_script('wp-embed');
  wp_deregister_script('wp-embed');
}

function unload_block_library()
{
  wp_dequeue_style('wp-block-library');
}

function register_menus()
{
  register_nav_menus(array(
    'top-menu'  => __('Main header menu', 'en'),
  ));
}

function create_members()
{
  $team_members_config = array(
    'labels'  => array(
      'name'          => __('Team members', 'en'),
      'singular_name' => __('Team member', 'en'),
      'add_new'       => __('Add new', 'en'),
      'add_new_item'  => __('Add new team member', 'en'),
      'edit_item'     => __('Edit person', 'en'),
    ),
    'public'      => true,
    'has_archive' => false,
    'rewrite'     => array(
      'slug'  => 'team'
    ),
    'supports'    => array(
      'title', 'custom-fields',
    ),
    'menu_icon'   => 'dashicons-groups',
  );

  $specializations_config = array(
    'labels' => array(
      'name'          => __('Specializations', 'en'),
      'singular_name' => __('Specialization', 'en'),
      'add_new'       => __('Add-new', 'en'),
      'add_new_item'  => __('Add new specialization', 'en'),
      'edit_item'     => __('Edit specialization', 'en')
    ),
    'public'      => true,
    'has_archive' => false,
    'rewrite'     => array(
      'slug'  => 'spec'
    ),
    'supports'  => array(
      'title', 'custom-fields'
    ),
    'taxonomies'  => array(
      'category'
    ),
    'menu_icon' => 'dashicons-analytics',
  );

  register_post_type(
    'team-members',
    $team_members_config
  );

  register_post_type(
    'specializations',
    $specializations_config
  );
}

function add_additional_class_on_li($classes, $item, $args)
{
  if (isset($args->custom_li_class)) {
    $classes[] = $args->custom_li_class;
  }

  return $classes;
}

add_action('init', 'optimize_loading');
add_action('init', 'create_members');
add_action('init', 'register_menus');
add_action('wp_enqueue_scripts', 'unload_block_library');

add_filter('wp_enqueue_scripts', 'optimize_loading', PHP_INT_MAX);
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);
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
