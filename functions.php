<?php
/**************************************
 * 
 *  apenas no backend
 * 
 **************************************/

//adiciona a função de mudar a imagem da logo no painel administrativo
add_theme_support( 'custom-header', array(
	'default-image' => get_template_directory_uri() . '/build/image/Logo.png',
	'uploads'       => true,
) );

add_theme_support( 'post-thumbnails' );

/****************************************************************************************/

//destrinchar em varios plugins se ainda tiver uso
function my_rest_prepare_post( $data, $post, $request ) {
	$_data = $data->data;

    $excerptx = get_extended( apply_filters( 'the_content', $post->post_content ) );
	$_data['roarFree'] = $excerptx['main'];
	
	//exibe informaç~eos do autor
	$_data['roarAuthor'] = [
	    'name'=>get_the_author_meta('nickname'),
	    'descricao'=>nl2br(get_the_author_meta('description')),
	    'gravatar'=>get_avatar( get_the_author_email(), '80' ),
	];
	
	//exibe as tags
	$_data['roarTags'] = wp_get_post_tags($post->ID);
	$_data['roarCategorys'] = get_the_category();
	//get_the_category()

	$excerpt = get_extended( $post->post_content );
	$_data['roarMain'] = $excerpt['main'];
	$_data['roarExtended'] = $excerpt['extended'];
	$_data['roarMore'] = $excerpt['more_text'];
	
	$data->data = $_data;
	return $data;
}
add_filter( 'rest_prepare_post', 'my_rest_prepare_post', 10, 3 );

/****************************************************************************************/
function ikreativ_tinymce_fix( $init ){
    $init['extended_valid_elements'] = "span[*]";
    $init['remove_linebreaks'] = false;
    $init['convert_newlines_to_brs'] = true;
    $init['remove_redundant_brs'] = false;
    return $init;
}
add_filter('tiny_mce_before_init', 'ikreativ_tinymce_fix');
/****************************************************************************************/
//estudar como usar essa funcionalidade
add_action('admin_menu', 'awesome_page_create');
function awesome_page_create() {
    $page_title = 'My Awesome Admin Page';
    $menu_title = 'Awesome Admin Page';
    $capability = 'edit_posts';
    $menu_slug = 'awesome_page';
    $function = 'my_awesome_page_display';
    $icon_url = '';
    $position = 24;

    add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );
}
/************************************************************************************/
function smartest_set_permalinks() {
    global $wp_rewrite;
    $wp_rewrite->set_permalink_structure( '/%postname%/%post_id%/' );
}
add_action( 'init', 'smartest_set_permalinks' );


//evitar o erro 404 quando atualizar a pagina
add_filter( 'status_header', function ( $status_header, $header, $text, $protocol ) {
	if ( 404 == $header ) {
		$header = 200;
	}
	$text          = get_status_header_desc( $header );
	$header_string = "$protocol $header $text";
	return $header_string;
}, 10, 4 );


/****************************************************************************************/
// remover versão
function vc_remove_wp_ver_css_js( $src ) {
    if ( strpos( $src, 'ver=' . get_bloginfo( 'version' ) ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );

/****************************************************************************************/
add_filter( 'show_admin_bar' , function(){return false;});
?>