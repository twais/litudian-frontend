import React, { Component, Fragment } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';

class Auth extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    classNames = (...classes) => {

        return classes.filter(Boolean).join(' ');

    }
    
    render() {

        const { show, toggle, logo } = this.props;

        return (

            <Transition appear show={show} as={Fragment}>

                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={toggle}>

                    <div className="min-h-screen px-4 text-center">

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">

                            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-80" />

                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">

                            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                                <div className="flex flex-col justify-center items-center py-6">

                                    <img className="h-12 object-contain" src={logo} alt="logo" />

                                </div>

                                <Tab.Group>

                                    <Tab.List className="flex space-x-1 rounded-xl px-7">

                                        <Tab

                                            key="login"

                                            className={({ selected }) =>

                                                this.classNames(

                                                    'w-full py-2.5 text-sm leading-5 font-medium rounded-t-xl uppercase',

                                                    selected ? 'bg-tangerine text-white focus:outline-none' : 'text-tangerine hover:bg-white/[0.12] hover:text-litudian-orange'

                                                )

                                            }

                                        >Login</Tab>

                                        <Tab

                                        key="register"

                                        className={({ selected }) =>

                                            this.classNames(

                                                'w-full py-2.5 text-sm leading-5 font-medium rounded-t-xl uppercase',

                                                selected ? 'bg-tangerine text-white focus:outline-none' : 'text-tangerine hover:bg-white/[0.12] hover:text-litudian-orange'

                                            )

                                        }

                                        >Register</Tab>

                                    </Tab.List>

                                    <Tab.Panels className="mt-0">

                                        <Tab.Panel

                                            key="login"

                                            className={this.classNames('bg-tangerine rounded-xl py-10 flex flex-col px-20 gap-y-5')}

                                        >

                                            <input type="email" placeholder="Email" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <input type="password" placeholder="Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <button className="bg-litudian-orange text-white w-full py-2 font-bold rounded-md uppercase">Login</button>

                                            <p className="text-white capitalize text-center">By clicking LOGIN you agree with our terms of service stipulated <span className="text-litudian-orange">HERE</span></p>

                                            <h2 className="font-bold text-gray-900 text-center uppercase">Quick Access</h2>

                                            <div className="flex flex-row justify-between items-center">

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                            </div>

                                        </Tab.Panel>

                                        <Tab.Panel

                                            key="register"

                                            className={this.classNames('bg-tangerine rounded-xl py-10 flex flex-col px-20 gap-y-5')}

                                        >
                                            <input type="text" placeholder="First Name" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <input type="text" placeholder="Last Name" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <input type="email" placeholder="Email" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <input type="password" placeholder="Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" />

                                            <button className="bg-litudian-orange text-white w-full py-2 font-bold rounded-md uppercase">Create Account</button>

                                            <p className="text-white capitalize text-center">By clicking LOGIN you agree with our terms of service stipulated <span className="text-litudian-orange">HERE</span></p>

                                            <h2 className="font-bold text-gray-900 text-center uppercase">Quick Signup</h2>

                                            <div className="flex flex-row justify-between items-center">

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                            </div>

                                        </Tab.Panel>

                                    </Tab.Panels>

                                </Tab.Group>

                            </div>

                        </Transition.Child>

                    </div>

                </Dialog>

            </Transition>

        )

    }

};

export default Auth;
