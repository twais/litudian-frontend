import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { GiCommercialAirplane } from 'react-icons/gi';
import { RiShipLine } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import Layout from './../layouts/Main';

export default class Order extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            
             
        }

    }

    render() {

        return (

            <Layout>

                <div className="flex flex-row bg-white rounded-md shadow-md my-5 p-4 gap-x-3">

                    <div className="flex-1 flex flex-col gap-y-3 px-3">

                        <h1 className="text-2xl text-tangerine font-bold uppercase">Air Max</h1>

                        <div className="bg-gray-300 h-full w-full rounded-md shadow-sm"></div>

                    </div>

                    <div className="flex-1 flex flex-col">

                        <h1 className="text-bold text-gray-900 uppercase font-extrabold">Ksh 53,000</h1>

                        <p className="text-tangerine uppercase font-bold text-sm">Minimum Order Quantity 10 Items</p>

                        <div className="flex flex-col mt-10 mb-2">

                            <h1 className="text-gray-900 uppercase font-extrabold text-xs">Size, Unit Price, Quantity</h1>

                            <div className="grid grid-cols-2 py-2 gap-x-5 gap-y-5">

                                <div className="flex flex-row">

                                    <div className="bg-litudian-orange text-gray-900 font-bold py-1 px-2 rounded-l-md">

                                        <span>36</span>

                                    </div>

                                    <div className="bg-tangerine text-white font-bold flex-1 flex flex-row items-center justify-center">

                                        <span>Ksh 2,390</span>

                                    </div>

                                    <div className="bg-gray-200 text-gray-900 font-bold py-1 px-2 rounded-r-md">

                                        <span>5</span>

                                    </div>

                                </div>

                                <div className="flex flex-row">

                                    <div className="bg-gray-900 text-white font-bold py-1 px-2 rounded-l-md">

                                        <span>37</span>

                                    </div>

                                    <div className="bg-tangerine text-white font-bold flex-1 flex flex-row items-center justify-center">

                                        <span>Ksh 2,490</span>

                                    </div>

                                    <div className="bg-gray-200 text-gray-900 font-bold py-1 px-2 rounded-r-md">

                                        <span>5</span>

                                    </div>

                                </div>

                                <div className="flex flex-row">

                                    <div className="bg-gray-900 text-white font-bold py-1 px-2 rounded-l-md">

                                        <span>38</span>

                                    </div>

                                    <div className="bg-tangerine text-white font-bold flex-1 flex flex-row items-center justify-center">

                                        <span>Ksh 2,540</span>

                                    </div>

                                    <div className="bg-gray-200 text-gray-900 font-bold py-1 px-2 rounded-r-md">

                                        <span>0</span>

                                    </div>

                                </div>

                                <div className="flex flex-row">

                                    <div className="bg-gray-900 text-white font-bold py-1 px-2 rounded-l-md">

                                        <span>39</span>

                                    </div>

                                    <div className="bg-tangerine text-white font-bold flex-1 flex flex-row items-center justify-center">

                                        <span>Ksh 2,590</span>

                                    </div>

                                    <div className="bg-gray-200 text-gray-900 font-bold py-1 px-2 rounded-r-md">

                                        <span>0</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col mt-2 mb-1">

                            <h1 className="text-gray-900 uppercase font-extrabold text-xs">Colors</h1>

                            <div className="grid grid-cols-4 gap-x-4">

                                <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                                    <div className="bg-purple-900 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                                    <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">2</div>

                                </div>

                                <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                                    <div className="bg-blue-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                                    <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                                </div>

                                <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                                    <div className="bg-green-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                                    <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                                </div>

                                <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                                    <div className="bg-red-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                                    <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col mt-2 mb-2">

                            <h1 className="text-gray-900 uppercase font-extrabold text-xs">Shipping Method</h1>

                            <div className="grid grid-cols-2 py-2 gap-x-3">

                                <div className="flex flex-row">

                                    <div className="bg-green-400 text-white px-2 flex flex-col justify-center items-center rounded-l-md">

                                        <span><RiShipLine/></span>

                                    </div>

                                    <div className="flex flex-col flex-1 relative">

                                        <div className="bg-gray-300 px-1 font-bold rounded-tr-md">

                                            <span className="text-gray-900 text-xs">Kanairo Shipping</span>

                                            <div className="absolute top-0 right-0 bg-yellow-400 border border-gray-800 rounded-full text-gray-800">

                                                <span><TiTick /></span>

                                            </div>

                                        </div>

                                        <div className="bg-gray-900 px-1 font-bold rounded-br-md">

                                            <span className="text-white text-xs">Ksh 900</span>

                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-row">

                                    <div className="bg-blue-400 text-white px-2 flex flex-col justify-center items-center rounded-l-md">

                                        <span><GiCommercialAirplane /></span>

                                    </div>

                                    <div className="flex flex-col flex-1">

                                        <div className="bg-gray-300 px-1 font-bold rounded-tr-md">

                                            <span className="text-gray-900 text-xs">Kanairo Air</span>

                                        </div>

                                        <div className="bg-gray-900 px-1 font-bold rounded-br-md">

                                            <span className="text-white text-xs">Ksh 1500</span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col mt-2 mb-2">

                            <h1 className="text-gray-900 uppercase font-extrabold text-xs">Shipping Address</h1>

                            <div className="grid grid-cols-2 py-2 gap-x-3">

                                <div className="flex flex-col bg-gray-200 rounded-md p-2 relative">

                                    <h1 className="text-tangerine font-bold uppercase text-xs">Town Shop</h1>

                                    <h1 className="text-gray-900 font-bold uppercase text-xs">Tom Mboya St.</h1>

                                    <p className="text-gray-600 text-xs">0707000990</p>

                                    <div className="absolute top-0 right-0 bg-yellow-400 border border-gray-800 rounded-full text-gray-800">

                                        <span><TiTick /></span>

                                    </div>

                                </div>

                                <div className="flex flex-col bg-gray-200 rounded-md p-2">

                                    <h1 className="text-tangerine font-bold uppercase text-xs">Roysambu Shop</h1>

                                    <h1 className="text-gray-900 font-bold uppercase text-xs">Trm.</h1>

                                    <p className="text-gray-600 text-xs">0707000990</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex-1 flex flex-col px-4">

                        <h1 className="text-bold text-gray-900 uppercase font-extrabold  mb-5">Summary</h1>

                        <div className="flex flex-col gap-y-4 bg-transparent">

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Item</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">Nike Air Max</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Quantity</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">15 items</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Total Order Cost</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">Ksh 53, 000</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Shipping Address</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">Town Shop</p>

                            </div>

                        </div>

                        <h1 className="text-bold text-litudian-orange uppercase font-extrabold my-5">Item Summary</h1>

                        <div className="flex flex-row justify-between mb-3">

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Size</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">36</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Qty</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">5</p>

                            </div>

                            <div className="flex flex-col">

                                <h1 className="text-gray-800 capitalize font-bold text-sm">Cost</h1>

                                <p className="text-tangerine capitalize font-bold text-sm">6,000</p>

                            </div>

                        </div>

                        <div className="flex flex-col">

                            <h1 className="text-gray-800 capitalize font-bold text-sm">Color(s)</h1>

                            <p className="text-tangerine capitalize font-bold text-sm">Red (2), Blue (1), Green(2)</p>

                        </div>

                        <button className="bg-tangerine text-gray-50 font-bold px-4 rounded-lg text-xs py-2 uppercase my-4">Add To Orders</button>

                    </div>

                </div>
                
            </Layout>

        )

    }

};