import React, { Component } from 'react';
import Layout from './../layouts/Main';

export default class Profile extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <Layout>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 py-5 gap-x-12">

                    <div className="flex flex-col gap-y-6 w-full">

                        <h2 className="text-tangerine uppercase font-extrabold">Request Item</h2>

                        <div className="w-full h-48 bg-gray-400 rounded-md flex flex-col justify-center items-center shadow">

                            <h2 className="text-gray-50 uppercase font-bold text-center">Click To Change Photo</h2>

                        </div>

                        <div className="flex flex-col bg-white w-full py-5 justify-center items-end px-5 shadow rounded-md">

                            <h2 className="text-gray-800 uppercase font-bold text-xl text-right">Your <br />Litupoints</h2>

                            <h2 className="text-tangerine uppercase font-bold text-xl">4,500</h2>

                        </div>

                    </div>

                    <div className="flex flex-col w-full md:col-span-2">

                        <div className="flex flex-col gap-y-3 mt-10">

                            <input type="email" placeholder="Email" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="email" placeholder="Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="email" placeholder="Mpesa Number" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                        </div>

                        <h2 className="py-6 font-bold text-gray-600">Log in via</h2>

                        <div className="flex flex-row justify-between items-center">

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                        </div>

                        <button className="bg-tangerine text-white w-full py-2 my-5 font-bold rounded-md">Save</button>

                    </div>

                    <div className="flex flex-col">

                        <div className="flex flex-row justify-between items-center">

                            <h2 className="text-tangerine uppercase font-extrabold">Delivery Locations</h2>

                            <button className="bg-tangerine text-white text-sm py-1 font-bold rounded-md uppercase px-2 flex flex-row">
                                
                                Add
                                
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                
                            </button>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-full bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center py-3 gap-y-1">

                                <h2 className="text-tangerine uppercase font-bold">Town Shop</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold text-xs">Tom Mboya St.</h2>

                                <p className="text-gray-400 text-xs font-bold">0707 000 990</p>

                            </div>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-full bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center py-3 gap-y-1">

                                <h2 className="text-tangerine uppercase font-bold">Town Shop</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold text-xs">Tom Mboya St.</h2>

                                <p className="text-gray-400 text-xs font-bold">0707 000 990</p>

                            </div>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-full bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center py-3 gap-y-1">

                                <h2 className="text-tangerine uppercase font-bold">Town Shop</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold text-xs">Tom Mboya St.</h2>

                                <p className="text-gray-400 text-xs font-bold">0707 000 990</p>

                            </div>

                        </div>

                    </div>
                    
                </div>
                
            </Layout>

        )

    }

};
