import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
    RangeControl, __experimentalUnitControl as UnitControl, Button, TabPanel,
    PanelBody, PanelRow, SelectControl, __experimentalBoxControl as BoxControl, ColorPalette, TextControl
} from '@wordpress/components';

import BDevice from '../../Components/BDevice';
import Title from '../../Components/Title';
import Shadow from '../../Components/ShadowControl';


const Settings = (props) => {
    const { attributes, setAttributes, updateCard } = props;
    const { descTypo, titleTypo, cards, columns, columnGap, rowGap, theme, contentPadding, btnPadding } = attributes;

    const [device, setDevice] = useState('desktop');

    const handleDelete = (index) => {
        const newCards = [...cards];
        newCards.splice(index, 1);
        setAttributes({ cards: newCards });
    };

    const handleImage = (newImage, index) => {
        const newCards = [...cards];
        newCards[index].image = newImage;
        setAttributes({ cards: newCards });
    };

    // const setTitleColor = (newTitleColor, index) => {
    //     const newCards = [...cards];
    //     newCards[index].titleColor = newTitleColor;
    //     setAttributes({ cards: newCards });
    // };

    // const setBtnLabel = (newBtnLabel, index) => {
    //     const newCards = [...cards];
    //     newCards[index].btnLabel = newBtnLabel;
    //     setAttributes({ cards: newCards });
    // };

    // const setBtnUrl = (newBtnUrl, index) => {
    //     const newCards = [...cards];
    //     newCards[index].btnUrl = newBtnUrl;
    //     setAttributes({ cards: newCards });
    // };

    const handleSubmit = () => {
        // const { attributes, setAttributes } = props;

        const newCards = [...cards, {
            "background": {
                "color": "#ffff"
            },
            "image": "https://pbs.twimg.com/media/FWf-1h6XEAYLdoG?format=jpg&name=large",
            "title": "This is my titleY",
            "titleColor": "#000",
            "desc": "This is my description",
            "descColor": "#000",
            "btnLabel": "Button",
            "btnUrl": "https://www.google.com/",
            "btnColors": {
                "color": "#f0f0f"
            }

        }];
        setAttributes({ cards: newCards });
    }



    function setTitleTypo(newTitleTypo) {
        setAttributes({ titleTypo: { ...titleTypo, fontSize: newTitleTypo } });
    };
    function setDescTypo(newDescTypo) {
        setAttributes({ descTypo: { ...descTypo, fontSize: newDescTypo } });
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


    const setBorder = (newBorder) => {
        setAttributes({ border: newBorder });
    };

    return <InspectorControls>
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
                    <PanelRow>
                        <label>Title Font Size</label>
                        <UnitControl
                            onChange={setTitleTypo}
                            value={titleTypo.fontSize}
                        />
                    </PanelRow>
                    <PanelRow>
                        <label>Description Font Size</label>
                        <UnitControl
                            onChange={setDescTypo}
                            value={descTypo.fontSize}
                        />
                    </PanelRow>
                    {cards.map((card, index) => {
                        return (
                            <>
                                <PanelBody title={`Card :${index + 1};`} initialOpen={index ? false : true}  >
                                    <PanelRow>
                                        <TextControl
                                            label="Add button Label"
                                            value={card.btnLabel}
                                            // onChange={(btnLabel) => setBtnLabel(btnLabel, index)}
                                            onChange={(content) => updateCard(index, 'btnLabel', content)}

                                        />
                                    </PanelRow>
                                    <PanelRow>
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                onSelect={(media) => {

                                                    handleImage(media.url, index)
                                                }
                                                }

                                                allowedTypes={['image']}
                                                value={card.image}
                                                render={({ open }) => (
                                                    <Button onClick={open}>Add Image</Button>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                    </PanelRow>
                                    <PanelRow>
                                        <TextControl
                                            label="Add button Url" titleUrl
                                            value={card.btnUrl}
                                            onChange={(content) => updateCard(index, 'btnUrl', content)}

                                        />
                                    </PanelRow>

                                    <PanelRow>
                                        <label>Title Color</label>
                                        <ColorPalette
                                            colors={[]}
                                            value={card.titleColor}
                                            onChange={(content) => updateCard(index, 'titleColor', content)}

                                        />
                                    </PanelRow>


                                    <PanelRow>
                                        <label>Description Color</label>
                                        <ColorPalette
                                            colors={[]}
                                            value={card.descColor}
                                            onChange={(content) => updateCard(index, 'descColor', content)}
                                        />
                                    </PanelRow>

                                    <button onClick={() => handleDelete(index)} >Delete</button>
                                </PanelBody>
                            </>
                        )
                    })}

                </PanelBody>

                {tab.name === "options" && <div>
                    <PanelBody title="My Block Settings">
                        <PanelRow>
                            <Title className='mb5'>{__('Columns:', 'card')}</Title>
                            <BDevice device={device} onChange={val => setDevice(val)} />
                        </PanelRow>
                        <RangeControl value={columns[device]} onChange={val => setAttributes({ columns: { ...columns, [device]: val } })} min={1} max={6} step={1} beforeIcon='grid-view' />

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
                                value={columnGap}
                            />
                        </PanelRow>

                        <PanelRow>
                            <label>Row Gap</label>
                            <UnitControl
                                onChange={setRowgap}
                                value={rowGap}
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
                                value={theme}
                            />
                        </PanelRow>

                        <BoxControl
                            label="Paddign"
                            values={contentPadding}
                            onChange={(value) => {
                                setAttributes({ contentPadding: value });
                            }}
                        />

                        <BoxControl
                            label="Button Paddign"
                            values={btnPadding}
                            onChange={(value) => setAttributes({ btnPadding: value })}
                        />
                    </PanelBody>
                </div>}
            </div>}
        </TabPanel>
    </InspectorControls>;
}
export default Settings;