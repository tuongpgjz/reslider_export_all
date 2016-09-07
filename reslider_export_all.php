<?php
/*
Plugin Name: Export All Slider Revolution
Plugin URI: http://kingcomposer.com/
Description: Export all sliders with one click
Author: KingComposer
Version: 0.0.1
Author URI: http://kingcomposer.com
*/


define('KC_REPT_VERSION', '0.0.1');

add_action('admin_enqueue_scripts', 'kc_rept_assets', 99 );
function kc_rept_assets(){

	wp_register_script( 'kc-reslider_exportall-js', plugin_dir_url( __FILE__ ) .'assets/reslider_exportall.js','', KC_REPT_VERSION, true );
	wp_enqueue_style( 'kc-reslider_exportall-css', plugin_dir_url( __FILE__ ) . 'assets/reslider_exportall.css', false, KC_REPT_VERSION );
	if( isset($_REQUEST['page']) && $_REQUEST['page'] == 'revslider' ){
		wp_enqueue_script( 'kc-reslider_exportall-js' );
	}

}