<?php
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * The CKFrog plugin provides the CKEditor to Frog users.
 *
 * @package frog
 * @subpackage plugin.ckfrog
 *
 * @author Andrew Crookston <andrew@casystems.se>
 * @version 0.1.0
 * @since Frog version 0.9.5
 * @license http://www.gnu.org/licenses/gpl.html GPL License
 * @copyright Andrew Crookston, 2009
 */



Plugin::setInfos(array(
    'id'          => 'ckfrog',
    'title'       => 'CKEditor filter',
    'description' => 'Allows you to use the CKEditor for text editing.', 
    'version'     => '0.1.0',
    'license'     => 'GPLv3',
    'author'      => 'Andrew Crookston (CA Systems)',
    'website'     => 'http://www.casystems.se',
    'update_url'  => 'http://www.casystems.se/frog-plugin-versions.xml',
    'require_frog_version' => '0.9.5', // may work with earlier versions. ONLY TESTED FOR 0.9.5!
));

// Using 'ckeditor' as first argument, this is what is shown in filter dropdown
Filter::add('ckeditor', 'ckfrog/ckfrog_filter.php');
Plugin::addJavascript('ckfrog', 'jscripts/ckeditor/ckeditor.js');
Plugin::addJavascript('ckfrog', 'ckfrog_config.js.php');
