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
function create_block_card_block_init() {

    wp_register_style(
        'gutenberg-cards-dynamict',
        plugins_url( 'build/style-index.css', __FILE__  ),
    );

	register_block_type( __DIR__ . '/build', [
    "style"=>'gutenberg-cards-dynamict',
		"render_callback"=> function($attrs){

			ob_start(); ?>

          <div tabindex="0" id="block-11300c3a-52d5-4953-bd01-94676c85b2c7" role="document" aria-label="Block: Cards" data-block="11300c3a-52d5-4953-bd01-94676c85b2c7" data-type="tcb/cards" data-title="Cards" class="block-editor-block-list__block wp-block is-selected wp-block-tcb-cards">
            <style>
                .cards {
                column-gap:20px;
                row-gap:30px;
                }
            </style>
            <div class="cards">
<?php
	
          // <!-- HTML -->
          foreach($attrs['cards'] as $content){

 ?>
  
      <div class="card card-0">
         <style>.cards .card-0 h1 {
            color:#000; 
            } 
            .cards .card-0 .desc{
            color:#fa0000
            }
         </style>
         <img class="img" src="<?php echo $content["image"] ?>" alt="Denim Jeans">
         <div class="card-body">
            <h1><?php echo $content["title"] ?></h1>
            <p class="desc"><?php echo $content["desc"] ?></p>
            <div class="btn-wraper"><a href="<?php echo $content["btnUrl"] ?>"><?php echo $content["btnLabel"] ?></a></div>
         </div>
      </div>

          <!-- HTML -->
<?php
          }
          ?>

          
   </div>
</div>
<?php
  echo "<pre>";
  print_r($content);
            echo"</pre>";

			return ob_get_clean();
		}
	] );
}
add_action( 'init', 'create_block_card_block_init' );

