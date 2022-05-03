import React, { Component } from 'react';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showUser, updateUser } from './../store/actions/UserActions';
import { toast } from 'react-toastify';
import instance from './../utils/instance';

class Profile extends Component {

    constructor(props) {

        super(props);
    
        this.state = {

            first_name: '',

            last_name: '',

            email: '',

            msisdn: '',

            username: ''
             
        }

        this.file = React.createRef();

    }

    componentDidMount = async () => {

        let uid = localStorage.getItem('ltdn_uid');

        await this.props.showUser(uid);

        this.setUserDetails();

    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    setUserDetails = () => {

        const { user: { details } } = this.props;

        this.setState({ first_name: details.first_name, last_name: details.last_name, email: details.email, msisdn: details.msisdn, username: details.username });

    };

    changeAvatar = async (e) => {

        try {

            let file = e.target.files[0];

            let formData = new FormData();

            formData.append('file', file);

            const response = await instance.post('upload', formData);

            if(response.data !== "") {

                console.log(response.data);

            }

        } catch (error) {

            toast.error('Error occurred while updating user avatar !');

            console.log(error);
            
        }

    }

    update = async () => {

        try {

            const { first_name, last_name, username, email, msisdn } = this.state;

            let obj = { first_name, last_name, username, email, msisdn };

            let uid = localStorage.getItem('ltdn_uid');

            await this.props.updateUser(uid, obj);

            toast.success('Account Details Successfully Updated !');
            
        } catch (error) {

            toast.error('Error occurred while updating account details !');

            console.log(error);
            
        }

    }
    
    render() {

        const { first_name, last_name, username, email, msisdn } = this.state;

        return (

            <Layout>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 py-5 gap-x-12">

                    <div className="flex flex-col gap-y-6 w-full">

                        <h2 className="text-tangerine uppercase font-extrabold">Request Item</h2>

                        <div className="w-full h-48 bg-gray-400 rounded-md flex flex-col justify-center items-center shadow">

                            <h2 className="text-gray-50 uppercase font-bold text-center">Click To Change Photo</h2>

                        </div>

                        <button className='w-full py-1 px-3 bg-tangerine text-white rounded-sm' onClick={() => this.file.current.click()}>Change Avatar</button>

                        <input type="file" name="avatar" ref={this.file} className='hidden' onChange={this.changeAvatar} />

                        <div className="flex flex-col bg-white w-full py-5 justify-center items-end px-5 shadow rounded-md">

                            <h2 className="text-gray-800 uppercase font-bold text-xl text-right">Your <br />Litupoints</h2>

                            <h2 className="text-tangerine uppercase font-bold text-xl">4,500</h2>

                        </div>

                    </div>

                    <form className="flex flex-col w-full md:col-span-2" onSubmit={(e) => {

                        e.preventDefault();

                        this.update();

                    }}>

                        <div className="flex flex-col gap-y-3 mt-10">

                            <input type="text" name='first_name' value={first_name} onChange={this.handleChange} placeholder="Firstname" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="text" name='last_name' value={last_name} onChange={this.handleChange} placeholder="Lastname" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="text" name='username' value={username} onChange={this.handleChange} placeholder="Username" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="email" name='email' value={email} onChange={this.handleChange} placeholder="Email" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                            <input type="text" name='msisdn' readOnly value={msisdn} onChange={this.handleChange} placeholder="Mpesa Number" className="py-2 px-7 placeholder-gray-400 font-bold shadow-sm rounded-md focus:outline-none" />

                        </div>

                        {/* <h2 className="py-6 font-bold text-gray-600">Log in via</h2>

                        <div className="flex flex-row justify-between items-center">

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                            <div className="h-12 w-12 bg-white rounded-md shadow"></div>

                        </div> */}

                        <button type='submit' className="bg-tangerine text-white w-full py-2 my-5 font-bold rounded-md">Save</button>

                    </form>

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

const mapStateToProps = (state) => {

    return {

        user: state.user

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ showUser, updateUser }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
