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

function nf_getBoxValue($object) {
    return implode(" ", array_values($object));
}

function create_block_card_block_init() {
    // wp_register_style(
    //     'gutenberg-cards-dynamict',
    //     plugins_url( 'build/style-index.css', __FILE__ ),
    // );

    register_block_type( __DIR__ . '/build', [
        //  "style"=>'gutenberg-cards-dynamict',
        "render_callback" => function( $attrs ){
            extract( $attrs );

            ob_start(); ?>
            <div class="wp-block-tcb-cards">
                <style>
                    .cards {
                        column-gap: 20px;
                        row-gap: 30px;
                    }

                    .cards .card-body {
                        padding: <?php echo nf_getBoxValue($contentPadding); ?>
                    }
                    
                    .cards .card h1{
                        font-size: <?php echo $titleTypo["fontSize"]; ?>;
                    }
                    .cards .card p.desc {
                        font-size: <?php echo $descTypo["fontSize"]; ?>;
                    }
                </style>

                <div class='cards columns-<?php echo esc_attr( $columns['desktop'] ); ?> columns-tablet-<?php echo esc_attr( $columns['tablet'] ); ?> columns-mobile-<?php echo esc_attr( $columns['mobile'] ); ?>'>

                    <?php foreach($attrs['cards'] as $index=>$card){ ?>
                        <div class="card card-<?php echo $index ?>">
                            <style>
                                .cards .card-<?php echo $index ?> h1 {
                                    color: <?php echo $card["titleColor"] ?>;
                                }

                                .cards .card-<?php echo $index ?> .desc {
                                    color: <?php echo $card["descColor"] ?>;
                                }

                                .wp-block-tcb-cards .cards .card a{
                                    padding: <?php echo nf_getBoxValue($btnPadding); ?>
                                }
                            </style>

                            <img class="img" src="<?php echo $card["image"] ?>" alt="Denim Jeans">

                            <div class="card-body">
                                <h1><?php echo $card["title"] ?></h1>

                                <p class="desc"><?php echo $card["desc"] ?></p>

                                <div class="btn-wraper">
                                    <a href="<?php echo $card["btnUrl"] ?>"><?php echo $card["btnLabel"] ?></a>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div> <!-- Columns -->
            </div>

            <?php return ob_get_clean();
		}
	] );
}
add_action( 'init', 'create_block_card_block_init' );