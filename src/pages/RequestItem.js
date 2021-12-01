import React, { Component } from 'react';
import Layout from './../layouts/Main';

export default class RequestItem extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <Layout>

                <div className="flex flex-col md:flex-row gap-y-5 py-5 gap-x-12">

                    <div className="flex md:flex-2 flex-col gap-y-6">

                        <h2 className="text-tangerine uppercase font-extrabold">Request Item</h2>

                        <div className="w-full h-full bg-gray-400 rounded-md flex flex-col justify-end items-center shadow">

                            <h2 className="text-gray-50 uppercase font-bold text-center p-9">Upload a photo(s)</h2>

                        </div>

                    </div>

                    <div className="flex md:flex-1 flex-col">

                        <div className="flex flex-col gap-y-3 mt-10">

                            <input type="text" placeholder="NAME OF ITEM" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="text" placeholder="SUGGEST UNIT PRICE" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <textarea rows="6" placeholder="GIVE A SHORT DESCRIPTION" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none"></textarea>

                        </div>

                    </div>

                    <div className="flex md:flex-1 flex-col">

                        <div className="flex flex-row justify-between items-center">

                            <h2 className="text-tangerine uppercase font-extrabold">Previous Requests</h2>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-24 bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center">

                                <h2 className="text-tangerine uppercase font-bold">Name of Item</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold">Gucci Sandles</h2>

                                <p className="text-gray-400 text-xs font-bold">3 days ago</p>

                            </div>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-24 bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center">

                                <h2 className="text-tangerine uppercase font-bold">Name of Item</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold">Gucci Sandles</h2>

                                <p className="text-gray-400 text-xs font-bold">3 days ago</p>

                            </div>

                        </div>

                        <div className="flex flex-row w-full bg-white mt-4 rounded-md">

                            <div className="w-24 h-24 bg-gray-400 rounded-l-md"></div>

                            <div className="flex flex-col px-3 justify-center">

                                <h2 className="text-tangerine uppercase font-bold">Name of Item</h2>

                                <h2 className="text-gray-700 uppercase font-extrabold">Gucci Sandles</h2>

                                <p className="text-gray-400 text-xs font-bold">3 days ago</p>

                            </div>

                        </div>

                    </div>

                </div>
                
            </Layout>

        )

    }

};
