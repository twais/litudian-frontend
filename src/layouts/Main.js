import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

                        <Link to="/"><img className="h-12 object-contain" src={logo} alt="litudian" /></Link>

                        <ul className="hidden md:block">

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/profile">My Profile</Link></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/items">My Items</Link></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/">Sales</Link></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/forum">Forum</Link></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/request-item">Request Item</Link></li>

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

                            <Link to="/account" className="text-tangerine bg-white rounded shadow-sm p-1">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                            </Link>

                        </div>

                        <button className="bg-tangerine text-white rounded shadow-sm p-1 md:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </button>

                    </div>

                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-0 w-full min-h-screen">

                    {this.props.children}

                </div>

                <div className="max-w-5xl mx-auto px-4 py-8 md:px-0 w-full">

                    <p className="text-gray-600 font-bold">Litudian &copy; 2021</p>

                </div>
                
            </div>

        )

    }

};

export default Main;
