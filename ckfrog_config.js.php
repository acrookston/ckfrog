<?php
/*
 * This file sets the default path and other config options for CKEditor.
 */
 $plugin_dir = dirname($_SERVER['PHP_SELF']);
 
 header('Content-Type: application/x-javascript');
 
 
?>
var ckfrog_config = {
  // Define changes to CKEditor default configuration here. For example:
  // language: 'fr',
  // uiColor: '#AADC6E',
  // baseHref: '<?=$plugin_dir?>/jscripts/ckeditor/',
}