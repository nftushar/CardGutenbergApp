<?php
/**
 * Plugin Name:       Card
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       card
 *
 * @package           create-block
 */ 

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

  
           function nf_getBoxValue($object) {
                   return implode(" ", array_values($object));
          }
 

function create_block_card_block_init() {

wp_register_style(
'gutenberg-cards-dynamict',
plugins_url( 'build/style-index.css', __FILE__ ),
);

register_block_type( __DIR__ . '/build', [
"style"=>'gutenberg-cards-dynamict',
"render_callback"=> function($attrs){
extract( $attrs );

ob_start(); ?>

<div class="wp-block-tcb-cards">



    <style>


    /* echo($attrs['contentPadding']); */
    </style>
    <div class='cards columns-<?php echo esc_attr( $columns['desktop'] ); ?> columns-tablet-<?php echo esc_attr( $columns['tablet'] ); ?> 
            columns-mobile-<?php echo esc_attr( $columns['mobile'] ); ?>'>

        <?php
          // <!-- HTML -->
          foreach($attrs['cards'] as $content){
        //    print_r $content;
 ?>

        <div class="card card-0">
            <style>

            .cards {
                column-gap: 20px;
                row-gap: 30px;
            }

            .cards .card-body {
                padding: <?php echo(nf_getBoxValue($contentPadding));  ?>
            }

              .cards .card-0 h1 {
                color: #000;
            }

            .cards .card-0 .desc {
                color: #fa0000
            }

            .wp-block-tcb-cards .cards .card a{
              padding: <?php echo(nf_getBoxValue($btnPadding)); ?>
            }
            </style>


            <img class="img" src="<?php echo $content["image"] ?>" alt="Denim Jeans">
            <div class="card-body">
                <h1><?php echo $content["title"] ?></h1>
                <p class="desc"><?php echo $content["desc"] ?></p>
                <div class="btn-wraper"><a
                        href="<?php echo $content["btnUrl"] ?>"><?php echo $content["btnLabel"] ?></a></div>
            </div>
        </div>

        <!-- HTML -->
        <?php
     }
          ?>


    </div>
</div>
<?php
//   echo "<pre>";
//   print_r($content);
            echo"<pre>";
  print_r($attrs['contentPadding']);
            echo"</pre>";

			return ob_get_clean();
		}
	] );
}
add_action( 'init', 'create_block_card_block_init' );