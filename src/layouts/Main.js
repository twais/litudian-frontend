import React, { Component } from 'react';
import Carousel from './../components/Slider';
import logo from './img/logo.png'

class Main extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <div className="min-h-screen bg-gray-100 flex flex-col">

                <div className="max-w-5xl mx-auto px-4 md:px-0 w-full">

                    <div className="flex flex-row justify-between items-center py-4">

                        <img className="h-12 object-contain" src={logo} alt="litudian" />

                        <ul className="hidden md:block">

                            <li className="inline-block mx-3 font-bold text-tangerine"><a href="/">My Profile</a></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><a href="/">My Items</a></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><a href="/">Sales</a></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><a href="/">Forum</a></li>

                        </ul>

                        <input className="hidden md:block focus:outline-none md:w-72 px-4 py-1 rounded-md text-gray-600 shadow-sm" />

                        <div className="hidden md:flex flex-row gap-x-2">

                            <button className="text-tangerine bg-white rounded shadow-sm p-1">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>

                            </button>

                            <button className="text-tangerine bg-white rounded shadow-sm p-1">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                            </button>

                            <button className="text-tangerine bg-white rounded shadow-sm p-1">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                            </button>

                        </div>

                        <button className="bg-tangerine text-white rounded shadow-sm p-1 md:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </button>

                    </div>

                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-0 w-full">

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

                </div>

                <div className="max-w-5xl mx-auto px-4 py-8 md:px-0 w-full">

                    <p className="text-gray-600 font-bold">Litudian &copy; 2020</p>

                </div>
                
            </div>

        )

    }

};

export default Main;
