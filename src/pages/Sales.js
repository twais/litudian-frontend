import React, { Component } from 'react';
import Layout from './../layouts/Main';

export default class Sales extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        return (

            <Layout>

                <div className="grid grid-cols-12 gap-x-5">

                    <div className="col-span-3 flex flex-col gap-y-5">

                        <h1 className="text-tangerine font-bold uppercase">Summary</h1>

                        <div className="bg-white rounded shadow flex flex-col p-5">

                            <h1 className="text-gray-800 font-bold uppercase mb-2 text-sm">1 May 2021</h1>

                            <p className="text-tangerine uppercase font-bold text-sm">Items Sold <span className="text-gray-900">: 15</span></p>

                            <p className="text-tangerine uppercase font-bold text-sm">Profit <span className="text-gray-900 capitalize">: Ksh 24,000</span></p>

                        </div>

                    </div>

                    <div className="col-span-6">

                        <h1 className="text-tangerine font-bold uppercase">Sales</h1>

                        <div className="flex flex-row justify-center items-center gap-x-4 text-sm py-3">

                            <h1 className="text-tangerine font-bold uppercase text-xs">Sunday</h1>

                            <h1 className="text-litudian-orange font-bold uppercase text-xs">Monday</h1>

                            <h1 className="text-tangerine font-bold uppercase text-xs">Tuesday</h1>

                            <h1 className="text-tangerine font-bold uppercase text-xs">Wednesday</h1>

                            <h1 className="text-tangerine font-bold uppercase text-xs">Thursday</h1>

                            <h1 className="text-tangerine font-bold uppercase text-xs">Friday</h1>

                            <h1 className="text-tangerine font-bold uppercase text-xs">Saturday</h1>

                        </div>

                        <div className="bg-white flex flex-col p-5 rounded shadow">

                            <table>

                                <thead>

                                    <tr className="text-gray-700 font-bold text-sm">

                                        <td>Shop</td>

                                        <td>Client</td>

                                        <td>Time:Item</td>

                                        <td>Retail Price</td>

                                    </tr>

                                </thead>

                                <tbody className="gap-y-3">

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                    <tr className="text-xs font-bold py-1">

                                        <td className="py-3">

                                            <h1>Ronald Ngala Shop</h1>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">Charles Dawrin Doe</p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-gray-400">12:10 :<span className="text-litudian-orange">1 Air Max</span></p>

                                        </td>

                                        <td className="py-3">

                                            <p className="text-tangerine">Ksh 1,200</p>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="col-span-3 flex flex-col gap-y-2">

                        <h1 className="text-tangerine font-bold uppercase">Shop</h1>

                        <div className="bg-white rounded shadow flex flex-col py-2 px-4">

                            <p className="text-tangerine uppercase font-bold text-xs">Town Shop</p>

                            <p className="text-gray-800 uppercase font-bold text-xs">Tom Mboya St</p>

                            <p className="text-gray-400 uppercase font-bold text-xs">0707 000 990</p>

                        </div>

                        <div className="bg-white rounded shadow flex flex-col py-2 px-4">

                            <p className="text-tangerine uppercase font-bold text-xs">Roysambu Shop</p>

                            <p className="text-gray-800 uppercase font-bold text-xs">Tom Mboya St</p>

                            <p className="text-gray-400 uppercase font-bold text-xs">0707 000 990</p>

                        </div>

                        <div className="bg-white rounded shadow flex flex-col py-2 px-4">

                            <p className="text-tangerine uppercase font-bold text-xs">Ronald Ngala Shop</p>

                            <p className="text-gray-800 uppercase font-bold text-xs">Tom Mboya St</p>

                            <p className="text-gray-400 uppercase font-bold text-xs">0707 000 990</p>

                        </div>

                    </div>

                </div>
                
            </Layout>

        )

    }

};
