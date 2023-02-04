import { __ } from '@wordpress/i18n';
import { blockProps, useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	__experimentalUnitControl as UnitControl, __experimentalNumberControl as NumberControl,
	TabPanel, colors, PanelBody, descColor, PanelRow, SelectControl, __experimentalBoxControl as BoxControl, ColorPalette, __experimentalText as Text, TextInput, TextControl,
	btnLabel, btnUrl, setBtnUrl
} from '@wordpress/components';

import { useState } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import music from './img/music.jpg';
import shoes from './img/shoes.jpg';
import spider from './img/spider.jpg';

import './editor.scss';


export default function Edit(props) {

	const [color, setColor] = useState('#f00');
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];

	const { attributes, setAttributes } = props;
	const { cards } = attributes;
	// console.log(attributes.cards.btnColors);

	const setTitleColor = (newTitleColor, index) => {
		const newCards = [...cards];
		newCards[index].titleColor = newTitleColor;
		setAttributes({ cards: newCards });
	};

	const setBtnLabel = (newBtnLabel, index) => {
		// console.log('hello');
		const newCards = [...cards];
		newCards[index].btnLabel = newBtnLabel;
		setAttributes({ cards: newCards });
	};

	const setBtnUrl = (newBtnUrl, index) => {
		// console.log('hello');
		const newCards = [...cards];
		newCards[index].btnUrl = newBtnUrl;
		setAttributes({ cards: newCards });
	};



	const handleSubmit = (index) => {
		const { attributes, setAttributes } = props;

		const newCards = [...cards, {
			"background": {
				"color": "#ffff"
			},
			"image": "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
			"title": "This is my title",
			"titleColor": "#000",
			"desc": "This is my description",
			"descColor": "#ffff",
			"btnLabel": "Button",
			"btnUrl": "https://www.google.com/",
			"btnColors": {
				"color": "#f0f0f"
			}
		}];
		setAttributes({ cards: newCards });

	}


	const setDescColor = (newDescColor, index) => {
		const newCards = [...cards];
		newCards[index].descColor = newDescColor;
		setAttributes({ cards: newCards });
	};

	function setColumngap(newColumngap) {
		setAttributes({ columnGap: newColumngap });
	};
	function setRowgap(newRowgap) {
		setAttributes({ rowGap: newRowgap });
	};
	const setTheme = (newTheme) => {
		setAttributes({ theme: newTheme });
	};

	const setPadding = (newPadding) => {
		// console.log(newPadding);
		setAttributes({ padding: newPadding });
	};

	// border///////////////////////////////
	const setBorder = (newBorder) => {
		// console.log(newBorder);
		setAttributes({ border: newBorder });
	};
	// border///////////////////////////////

	const [values, setValues] = useState({
		top: '50px',
		left: '10%',
		right: '10%',
		bottom: '50px',
	});



	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'options',
							title: 'options',
							className: 'options',
						},
						{
							name: 'style',
							title: 'style',
							className: 'style',
						},
					]}
				>
					{(tab) => <div>
						{/* //////////////////////////////// PanelBody Two  //////////////////////////////// */}
						<PanelBody title='This is card two' >
							<PanelRow>
								<button className='btn-wraper' onClick={() => handleSubmit()}>Add</button>
							</PanelRow>

							{cards.map((card, index) => {
								return (
									<>
										<PanelBody title={`Card :${index + 1};`}     initialOpen={index ? false : true}  >
											{/* condition ? exprIfTrue : exprIfFalse */}
											<PanelRow>
												{/* initialOpen={false} */}
												<TextControl
													label="Add button Label"
													value={card.btnLabel}
													onChange={(btnLabel) => setBtnLabel(btnLabel, index)}
												/>
											</PanelRow>
											<PanelRow>
												<TextControl
													label="Add button Url"
													value={card.btnUrl}
													onChange={(btnUrl) => setBtnUrl(btnUrl, index)}
												/>
											</PanelRow>

											<PanelRow>
												<label>Title Color</label>
												<ColorPalette
													colors={[]}
													value={card.titleColor}
													onChange={(color) => setTitleColor(color, index)}
												/>
												{/* btnLabel */}
											</PanelRow>
											<PanelRow>

											</PanelRow>
											<PanelRow>
												<label>Description Color</label>
												<ColorPalette
													colors={[]}
													value={card.descColor}
													onChange={(color) => setDescColor(color, index)}
												/>
											</PanelRow>
										</PanelBody>
									</>
									// console.log( card.titleColor );
								)
							})}

						</PanelBody>

						{tab.name === "options" && <div>
							<PanelBody title="My Block Settings">
								<PanelRow>
									<SelectControl
										label="Chose One"
										options={[
											{ label: 'Card one', value: 'card-one' },
											{ label: 'Card two', value: 'card-two' },
											{ label: 'Card three', value: 'card-three' },
										]}
									/>
								</PanelRow>

								<PanelRow>
									<label>column Gap</label>
									<UnitControl
										onChange={setColumngap}
										value={attributes.columnGap}
									/>
								</PanelRow>

								<PanelRow>
									<label>Row Gap</label>
									<UnitControl
										onChange={setRowgap}
										value={attributes.rowGap}
									/>
								</PanelRow>

								<PanelRow>
									<SelectControl
										label="Chose Theme"
										options={[
											{ label: 'Theme one', value: 'theme-one' },
											{ label: 'Theme two', value: 'theme-two' },
											{ label: 'Theme three', value: 'theme-three' },
										]}
										onChange={setTheme}
										value={attributes.theme}
									/>
								</PanelRow>

								<PanelRow >
									<BoxControl
										// Padding
										label="Set Paddign"
										values={attributes.padding}
										onChange={setPadding}
									/>
								</PanelRow>

								<PanelRow>
									{/* border */}
								</PanelRow>

							</PanelBody>
						</div>}
					</div>}
				</TabPanel>
			</InspectorControls>

			<div className="cards ">

				{/* card one */}
				{cards.map((card, index) => (
					<div className={`card card-${index}`}>

						<style>
							{`.cards .card-${index} h1 {
								color:${card.titleColor}; 
				           	}`}

						</style>
						<img className="img" src={shoes} alt="Denim Jeans" />
						<div className="card-body">

							<RichText
								{...blockProps}
								tagName="h1"
								value={card.title}
								allowedFormats={['core/bold', 'core/italic']}
								onChange={(content) => setAttributes({ content, index })}
								placeholder={__('Title here..', 'info-cards')}
							/>
							<RichText
								{...blockProps}
								tagName="p" 
								value={card.desc} 
								allowedFormats={['core/bold', 'core/italic']} 
								onChange={(content) => setAttributes({ content })} 
								placeholder={__('Title here..')}
							/>
							<div className="btn-wraper" ><a href={card.btnUrl} >{card.btnLabel}</a></div>

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

		</div>
	);
}

// export default Edit;