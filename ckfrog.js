/**
 * @author Andrew Crookston <andrew@casystems.se>
 * @copyright Andrew Crookston, 2009
 * @version 0.1.0
 * @license http://www.gnu.org/licenses/gpl.html GPL License
 */


 /***********************************************
  *** DO NOT CHANGE ANYTHING BELOW THIS LINE! ***
  ***                                         ***
  *** If you wish to change configuration     ***
  *** options in CKEditor put them in         ***
  *** ckfrog_config.js.php                    ***
  ***********************************************/


// function to toggle CKEditor based on the onchange event
function toggleEditor(id, filter) {
  if(!CKEDITOR.instances[id] && filter == 'ckeditor') {
    createEditor(id)
  } else {
    removeEditor(id)
  }
}

function createEditor(id) {
  if (CKEDITOR.instances[id]) {
    return;
  }

  var html = document.getElementById(id).innerHTML;
  // ckefrog_config is defined in ckfrog_config.js.php
  var editor = CKEDITOR.replace(id, ckfrog_config);
  
  // The sample below may break if the ckeditor_basic.js is used.
  editor.insertHtml(html);
  // In such case, the following code should be used instead:
  /*
  if (editor.insertHtml) {
    editor.insertHtml(html);
  } else {
    CKEDITOR.on( 'loaded', function()
      {
        editor.insertHtml(html);
      });
  }
  */
}

function removeEditor(id) {
  if (!CKEDITOR.instances[id]) {
    return;
  }
  
  editor = CKEDITOR.instances[id];
  document.getElementById(id).innerHTML = editor.getData();
  // Destroy the editor.
  editor.destroy();
}


// This function replaces the Frog 'setTextAreaToolbar' if the editor is used.
function setTextAreaToolbar(textarea, filter) {
  
  // CKEditor mod start
  var filt = filter;
  // CKEditor mod end
  
  // This is probably not the best way (copying framework code)
  // but I couldn't get method overriding to work
  
  filter = ('-'+filter.dasherize()).camelize();
  var toolbar_name = textarea + '_toolbar';
  // make sure the textarea is display 
  //(maybe some filter will choose to use a iframe like tinycme)
  $(textarea).style.display = 'block';
  var ul_toolbar = document.getElementById(toolbar_name);
  if (ul_toolbar != null)
    ul_toolbar.parentNode.removeChild(ul_toolbar);
  if (Control.TextArea.ToolBar[filter] != null) {
    var tb = new Control.TextArea.ToolBar[filter](textarea);
    tb.toolbar.container.id = toolbar_name;
  }
  
  // CKEditor mod start
  toggleEditor(textarea, filt);
  // CKEditor mod end
}
