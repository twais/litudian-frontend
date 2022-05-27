import React, { Component, Fragment } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { toast } from 'react-toastify';
import instance from './../utils/instance';

class Auth extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            msisdn: '',

            password: '',

            loading: false,

            first_name: '',

            last_name: '',

            email: '',

            confirm_password: ''
             
        }

    }

    classNames = (...classes) => {

        return classes.filter(Boolean).join(' ');

    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
    login = async () => {

        try {

            const { msisdn, password } = this.state;

            if (msisdn === '' || password === '') {

                return toast.error('Please fill all the fields !');

            }

            let { data } = await instance.post('users/login', { msisdn, password });

            localStorage.setItem('ltdn', data.token); 
            
            localStorage.setItem('ltdn_uid', data.id);
            
            localStorage.setItem('ltdn_exp', Math.floor(Date.now() / 1000) + ((60 * 60) * 1));

            toast.success(`You have logged in successfully`);

            return window.location.href = '/';
            
        } catch (error) {

            console.log(error);

            if(error.response) {

                console.log(JSON.stringify(error.response));

            }

            toast('Invalid login credentials');
            
        }

    }

    register = async () => {

        try {

            const { first_name, last_name, msisdn, password, confirm_password } = this.state;

            // console.log({ first_name, last_name, email, msisdn, password, confirm_password });

            let response = await instance.post('users', { first_name, last_name, username: first_name, msisdn, email: '', password, confirm_password });

            console.log(response);

            toast(`You have registered in successfully !`);

            return window.location.href = '/';
            
        } catch (error) {

            console.log(error);

            if(error.response && error.response.data !== '') {

                console.log(JSON.stringify(error.response.data));

            }

            toast('An error occurred, please try again later !');
            
        }

    }
    
    render() {

        const { show, toggle, logo, loading } = this.props;

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

                                        <form onSubmit={(e) => {e.preventDefault();this.login();}}>

                                            <Tab.Panel

                                                key="login"

                                                className={this.classNames('bg-tangerine rounded-xl py-10 flex flex-col px-20 gap-y-5')}

                                            >

                                                <input name="msisdn" type="text" placeholder="Phone Number" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.msisdn} />

                                                <input name="password" type="password" placeholder="Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.password} />

                                                <button className="bg-litudian-orange text-white w-full py-2 font-bold rounded-md uppercase" type="submit">{loading ? 'Waiting ...' : 'Login'}</button>

                                                <p className="text-white capitalize text-center">By clicking LOGIN you agree with our terms of service stipulated <span className="text-litudian-orange">HERE</span></p>

                                                <h2 className="font-bold text-gray-900 text-center uppercase">Quick Access</h2>

                                                <div className="flex flex-row justify-between items-center">

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                </div>

                                            </Tab.Panel>

                                        </form>

                                        <form onSubmit={(e) => {e.preventDefault();this.register();}}>

                                            <Tab.Panel

                                                key="register"

                                                className={this.classNames('bg-tangerine rounded-xl py-10 flex flex-col px-20 gap-y-5')}

                                            >
                                                <input name="first_name" type="text" placeholder="First Name" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.first_name} />

                                                <input name="last_name" type="text" placeholder="Last Name" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.last_name} />

                                                <input name='email' type="email" placeholder="Email" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.email} />

                                                <input name="msisdn" type="text" placeholder="Phone Number" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.msisdn} />

                                                <input name="password" type="password" placeholder="Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.password} />

                                                <input name="confirm_password" type="password" placeholder="Confirm Password" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none uppercase text-center" onChange={this.handleChange} value={this.state.confirm_password} />

                                                <button className="bg-litudian-orange text-white w-full py-2 font-bold rounded-md uppercase" type="submit">Create Account</button>

                                                <p className="text-white capitalize text-center">By clicking LOGIN you agree with our terms of service stipulated <span className="text-litudian-orange">HERE</span></p>

                                                <h2 className="font-bold text-gray-900 text-center uppercase">Quick Signup</h2>

                                                <div className="flex flex-row justify-between items-center">

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                    <div className="h-12 w-12 bg-litudian-orange rounded-md shadow"></div>

                                                </div>

                                            </Tab.Panel>

                                        </form>

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
