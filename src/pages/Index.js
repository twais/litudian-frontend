import React, { Component } from 'react';
import Carousel from './../components/Slider';
import Layout from './../layouts/Main';

export default class Index extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <Layout>

                <div className="grid grid-cols-4 gap-4 py-5">

                    <div className="flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Categories</h1>

                        <div className="bg-white w-full h-64 mt-2 rounded-md shadow-sm"></div>
                        
                    </div>

                    <div className="col-span-2">

                        <Carousel />

                    </div>

                    <div className="flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Recent Searches</h1>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>
                        
                    </div>

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

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                        <div className="flex flex-col shadow-md">

                            <div className="bg-gray-50 h-36 rounded-t-md"></div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh 21,900</div>

                        </div>

                    </div>

                </div>
                
            </Layout>

        )

    }

};
