import { __ } from '@wordpress/i18n';
import { blockProps, useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';
import Settings from './Settings';
import { getBoxValue } from './utils/functions';


 function Edit(props) {
	const { attributes, setAttributes } = props;
	 const { columns, cards, contentPadding, btnPadding, } = attributes;


	  const updateCard = (index, which, value) => {
		const newCards = [...cards];
		newCards[index][which] = value;
		setAttributes({ cards: newCards });
	}

	return (
		<div {...useBlockProps()}>
			<Settings attributes={attributes} setAttributes={setAttributes} updateCard={updateCard} />


			<style>
				{`
                    .cards {
						column-gap:${attributes.columnGap};
						row-gap:${attributes.rowGap};
					}
				`}
			</style>

			<div className={`cards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
				{cards.map((card, index) => (
					<div className={`card card-${index}`}>

						<style>
							{`.cards .card-${index} h1 {
								color:${card.titleColor}; 
				           	} 
							.cards .card-${index} .desc{
                                color:${card.descColor}
							}

							.cards .card-body{
								padding: ${getBoxValue(contentPadding)};
							}

							.cards .btn-wraper a{
								padding: ${getBoxValue(btnPadding)};
							}
							`}
						</style>
						<img className="img" src={card.image} alt="Denim Jeans" />

						<div className="card-body">

							<RichText
								{...blockProps}
								tagName="h1"
								value={card.title}
								allowedFormats={['core/bold', 'core/italic']}
								onChange={(content) => updateCard(index, 'title', content)}
								placeholder={__('Title here..', 'info-cards')}
							/>

							<RichText
								{...blockProps}
								tagName="p"
								className='desc'
								value={card.desc}
								allowedFormats={['core/bold', 'core/italic']}
								onChange={(content) => updateCard(index, 'desc', content)}
								placeholder={__('Description here..')}
							/>
							<div className="btn-wraper" ><a href={card.btnUrl}>{card.btnLabel}</a></div>
						</div>
					</div>

				))}



				{/* card two */}
				{/* <div className="card">
					<img className="img" src={shoes} alt="Denim Jeans" />
					<div className="card-body">
						<h1>Shoes!</h1>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="btn-wraper">
							<p className="btn1">Fashion</p>
							<p className="btn1">Products</p>
						</div>
					</div>
				</div> */}
				{/* card three */}
				{/* <div className="card">
					<div className="card-body">
						<h1>Shoes!</h1>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
					<img className="img2" src={shoes} alt="Denim Jeans" />
				</div> */}

				{/* card four */}
				{/* <div className="card card-padding">
					<img className="img" src={shoes} alt="Denim Jeans" />
					<div className="card-body2">
						<h1>Shoes!</h1>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="btn-wraper2"><button>Buy Now</button></div>
					</div>
				</div> */}
				{/* card five */}
				{/* <div className="card">
					<div className="card-body">
						<h1>Shoes!</h1>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="btn-wraper"><button>Buy Now</button></div>
					</div>
				</div> */}
				{/* card six */}
				{/* <div className="card color-card">
					<div className="card-body ">
						<h1 className="h1-white">Shoes!</h1>
						<p className="p-white">If a dog chews shoes whose shoes does he choose?</p>
						<div className="btn-wraper"><button className="btn-black">Buy Now</button></div>
					</div>
				</div> */}
				{/* card seven */}
				{/* <div className="card color-card-two">
					<div className="card-body ">
						<h1 className="h1-white">Cookies!</h1>
						<p className="p-white">We are using cookies for no reason.</p>
						<div className="btn-wraper">
							<button className="btn">Accept</button>
							<button className="btn btn-ghost">Deny</button>
						</div>
					</div>
				</div> */}
				{/* card eight */}
				{/* <div className="card">
					<div className="card-body">
						<div className="card-actions justify-end">
							<div className="pop-up">
								<svg xmlns="http://www.w3.org/2000/svg" className="mysvg" fill="none" viewBox="0 0 24 24"
									stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M6 18L18 6M6 6l12 12" />
								</svg>
							</div>
						</div>
						<p>We are using cookies for no reason.</p>
					</div>
				</div> */}
				{/* card nine */}
				{/* <div className="card card-glass">
					<img className="img" src={shoes} alt="Denim Jeans" />
					<div className="card-body">
						<h1>Shoes!</h1>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="btn-wraper"><button>Buy Now</button></div>
					</div>
				</div> */}
				{/* card ten */}
				{/* <div className="card spider">
					
					<img src={spider} className="img-spider" alt="Movie" />
					
					<div className="card-body">
						<h2 className="card-title">New movie is released!</h2>
						<p className="spider-desc">Click the button to watch on Jetflix app.</p>
						<div className="spider-card-actions">
							<button className="btn btn-primary">Watch</button>
						</div>
					</div>
				</div> */}
				{/* card eleven */}
				{/* <div className="card card-music">
					<img src={music} className="music-img" alt="Album" />
					<div className="card-body">
						<h2 className="card-title">New album is released!</h2>
						<p>Click the button to listen on Spotiwhy app.</p>
						<div className="button-card-actions">
							<button className="btn btn-primary">Listen</button>
						</div>
					</div>
				</div> */}

			</div>

		</div >
	);
}

export default Edit;