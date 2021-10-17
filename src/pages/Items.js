import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './../layouts/Main';

export default class Items extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    render() {

        return (

            <Layout>

                <div className="flex flex-row gap-x-3">

                    <Link to="/items/in-stock" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Stock</Link>

                    <Link to="/items/in-transit" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Transit</Link>

                </div>

                <div className="grid grid-cols-2 gap-4 py-5">

                    <div className="bg-white rounded w-full flex flex-col px-4 py-5 shadow-sm">

                        <div className="flex flex-row justify-between">

                            <h1 className="text-tangerine font-bold uppercase text-sm">Furniture</h1>

                            <h1 className="text-black font-bold">see more</h1>

                        </div>

                        <div className="flex flex-row justify-start gap-x-1 py-1">

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Leather</span>

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Cloth</span>

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Rexin</span>

                        </div>

                        <div className="grid grid-cols-3 gap-4 py-5">

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded w-full flex flex-col px-4 py-5 shadow-sm">

                        <div className="flex flex-row justify-between">

                            <h1 className="text-tangerine font-bold uppercase text-sm">Shoes</h1>

                            <h1 className="text-black font-bold">see more</h1>

                        </div>

                        <div className="flex flex-row justify-start gap-x-1 py-1">

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Men</span>

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Women</span>

                            <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Kids</span>

                        </div>

                        <div className="grid grid-cols-3 gap-4 py-5">

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                            <div className="flex flex-col">

                                <div className="bg-gray-100 h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col">

                    <h1 className="text-tangerine font-bold uppercase">Other Products</h1>

                    <div className="grid grid-cols-6 gap-4 py-5">

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                    </div>

                </div>
                
            </Layout>

        )

    }

};
