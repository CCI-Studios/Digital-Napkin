<?php
/**
 * @file
 * featureviews.features.inc
 */

/**
 * Implements hook_views_api().
 */
function featureviews_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function featureviews_image_default_styles() {
  $styles = array();

  // Exported image style: entrepreneurs_in_action.
  $styles['entrepreneurs_in_action'] = array(
    'label' => 'Entrepreneurs in Action',
    'effects' => array(
      4 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 920,
          'height' => 680,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: logo_block.
  $styles['logo_block'] = array(
    'label' => 'Logo Block',
    'effects' => array(
      5 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 380,
          'height' => 140,
          'upscale' => 1,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: news.
  $styles['news'] = array(
    'label' => 'News',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 482,
          'height' => 482,
        ),
        'weight' => -10,
      ),
      2 => array(
        'name' => 'image_resize',
        'data' => array(
          'width' => 482,
          'height' => 482,
        ),
        'weight' => -9,
      ),
    ),
  );

  // Exported image style: slideshow.
  $styles['slideshow'] = array(
    'label' => 'Slideshow',
    'effects' => array(
      7 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1420,
          'height' => 802,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function featureviews_node_info() {
  $items = array(
    'content_block' => array(
      'name' => t('Home Content Block'),
      'base' => 'node_content',
      'description' => t('Text box with a read more link. Can be used to link to internal and external pages. Currently being used on the home page: Welcome to the Digital Napkin, Business Plan Wizard'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'entrepreneurs_in_action' => array(
      'name' => t('Entrepreneurs in Action'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'logos' => array(
      'name' => t('Logos'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'news' => array(
      'name' => t('News'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'resources' => array(
      'name' => t('Resources'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'slideshow' => array(
      'name' => t('Slideshow'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'young_entrepreneurs' => array(
      'name' => t('Young Entrepreneurs'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
