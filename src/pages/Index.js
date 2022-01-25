import React, { Component } from 'react';
import Carousel from './../components/Slider';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from './../store/actions/CategoryActions';

class Index extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getCategories();

    }
    
    render() {

        const { categories: { list, data } } = this.props;

        return (

            <Layout>

                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 py-5">

                    <div className="hidden md:flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Categories</h1>

                        {list.map((category, i) => 
                        
                            <div key={i} className="bg-white w-full h-20 mt-2 rounded-md px-10 shadow-sm flex flex-col justify-center cursor-pointer">

                                <p className='font-bold capitalize text-lg text-gray-500'>{category.name.toLowerCase()}</p>

                            </div>
                            
                        )}
                        
                    </div>

                    <div className="col-span-2">

                        <Carousel />

                    </div>

                    <div className="hidden md:flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Recent Searches</h1>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-20 mt-2 rounded-md shadow-sm"></div>
                        
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">

                    {data.map((category, i) => 
                    
                        <div key={i} className="bg-white rounded w-full flex flex-col px-4 py-5 shadow-sm">

                            <div className="flex flex-row justify-between">

                                <h1 className="text-tangerine font-bold uppercase text-sm">{category.name}</h1>

                                <h1 className="text-black font-bold">see more</h1>

                            </div>

                            {/* <div className="flex flex-row justify-start gap-x-1 py-1">

                                <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Leather</span>

                                <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Cloth</span>

                                <span className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1">Rexin</span>

                            </div> */}

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
                    
                    )}

                </div>

                {/* <div className="flex flex-col">

                    <h1 className="text-tangerine font-bold uppercase">Other Products</h1>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-4 py-5">

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

                </div> */}
                
            </Layout>

        )

    }

};

const mapStateToProps = (state) => {

    return {

        categories: state.categories

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getCategories }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
