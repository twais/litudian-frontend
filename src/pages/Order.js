import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

                        <div className="flex flex-col mt-10 mb-10">

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