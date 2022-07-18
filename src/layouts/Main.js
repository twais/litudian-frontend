import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import AuthModal from './../modals/Auth';
import { Menu } from '@headlessui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showUser } from './../store/actions/UserActions';
import { toast } from 'react-toastify';

const expiry = localStorage.getItem('ltdn_exp');
const currentTime = Date.now() / 1000;
const authenticated = expiry > currentTime;

class Main extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            show_auth_modal: false
             
        }

    }

    componentDidMount = async () => {

        if(authenticated) {

            let uid = localStorage.getItem('ltdn_uid');

            await this.props.showUser(uid);

        }

    }

    toggleAuthModal = () => this.setState({ show_auth_modal: !this.state.show_auth_modal });
    
    render() {

        const { show_auth_modal } = this.state;

        return (

            <div className="min-h-screen bg-gray-100 flex flex-col">

                <div className="max-w-7xl mx-auto px-4 md:px-0 w-full">

                    <div className="flex flex-row justify-between items-center py-4">

                        <Link to="/"><img className="h-12 object-contain" src={logo} alt="litudian" /></Link>

                        <ul className="hidden md:block">

                            {authenticated && <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/profile">My Profile</Link></li>}

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/items">My Items</Link></li>

                            <li className="inline-block mx-3 font-bold text-tangerine"><Link to="/sales">Sales</Link></li>

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

                            <Link to="/order" className="text-tangerine bg-white rounded shadow-sm p-1">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                            </Link>

                            {!authenticated && <button className="text-tangerine bg-white rounded shadow-sm p-1" onClick={() => this.toggleAuthModal()}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                            </button>}

                            {authenticated && <button className="text-tangerine bg-white rounded shadow-sm p-1" onClick={() => {

                                localStorage.removeItem('ltdn'); 
                                            
                                localStorage.removeItem('ltdn_uid');
                                            
                                localStorage.removeItem('ltdn_exp');

                                toast.warning(`You are logged out !`);

                                return window.location.href = '/';

                            }}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>

                            </button>}

                        </div>

                        <Menu as="div" className="relative inline-block text-left">

                            <Menu.Button className="bg-tangerine text-white rounded shadow-sm p-1 md:hidden">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </Menu.Button>

                            <Menu.Items className="absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                <div className="px-5 py-5 gap-y-3">

                                    <Menu.Item>

                                        {({ active }) => (

                                            <button className={`${active && 'bg-blue-500'} flex flex-row items-center`} onClick={() => this.toggleAuthModal()}>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>

                                                <span className="text-xl px-3">Log in</span>

                                            </button>

                                        )}

                                    </Menu.Item>

                                    <Menu.Item>

                                        {({ active }) => (

                                            <button className={`${active && 'bg-blue-500'} flex flex-row items-center`} onClick={() => this.toggleAuthModal()}>

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                </svg>

                                                <span className="text-xl px-3">Create Account</span>

                                            </button>

                                        )}

                                    </Menu.Item>

                                </div>

                            </Menu.Items>

                        </Menu>

                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-0 w-full min-h-screen">

                    {this.props.children}

                </div>

                <div className="max-w-7xl mx-auto px-4 py-8 md:px-0 w-full">

                    <p className="text-gray-600 font-bold">Litudian &copy; 2021</p>

                </div>

                <AuthModal logo={logo} show={show_auth_modal} toggle={this.toggleAuthModal} />
                
            </div>

        )

    }

};

const mapStateToProps = (state) => {

    return {

        user: state.user

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ showUser }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
