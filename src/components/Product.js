import React from 'react';
import { toTitleCase } from './../utils/helpers';
import { Tab } from '@headlessui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviewsById } from './../store/actions/ReviewActions';

const Product = ({ moq, getReviewsById, reviews: { data: reviews } }) => {
    
    React.useEffect(() => {

        async function fetchReviewById () {

            if(moq?.product_id) {

                await getReviewsById(moq?.product_id);

            }

        }

        fetchReviewById();

    }, [moq, getReviewsById]);

    const getPercentage = (bids, quantity) => {

        if (bids !== undefined && quantity !== undefined) {

            return Math.trunc((bids?.length * 100) / quantity);

        }

        return 0;
    }

    return (

        <>

        <div className='w-full flex-col'>

            <div className='text-tangerine flex-row items-center justify-start gap-3 font-medium'>

                <span>Category</span>

                <span className='mx-1 text-2xl'>&rsaquo;</span>

                <span className='text-litudian-orange'>{moq !== null && toTitleCase(moq?.product[0]?.name)}</span>

            </div>

            <div className='w-full grid grid-cols-3 gap-8 mt-3'>

                <div className=''>

                    <h1 className="text-2xl text-gray-700 font-bold">{moq !== null && toTitleCase(moq?.product[0]?.name)}</h1>

                </div>

                <div className='col-span-2 flex flex-col'>

                    <div className='flex flex-row justify-between items-center'>

                        <div className='flex flex-col'>

                            <h2 className='text-2xl font-bold text-tangerine'>Ksh {moq?.price}</h2>

                            <p className='text-md text-gray-600 font-bold text-sm'>MOQ: {moq?.quantity} items / bundle</p>

                        </div>

                        <div className='flex flex-col'>

                            <p className='text-md text-gray-900 font-bold text-sm'>Supplier MOQ: {moq?.quantity} items</p>

                            <p className='text-md text-gray-600 font-bold text-sm'>{getPercentage(moq?.bids, moq?.quantity)}% Sold</p>

                        </div>

                        <div className='flex flex-col'>

                            <h2 className='text-lg font-bold text-gray-600'>Rating</h2>

                            <p>{reviews / reviews.length}</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className='w-full grid grid-cols-3 gap-8 mt-3'>

                 <div className="h-full w-full flex flex-col">

                    <img className='h-96 object-contain w-full' src={moq !== null ? moq?.product[0]?.images[0] : ''} alt={"product"} />

                    {moq !== null && moq?.product[0]?.images !== undefined &&  moq?.product[0]?.images.length > 1 && <div className="grid grid-cols-4 gap-2 mt-3">
                                
                        {moq?.product[0]?.images.map((image, i) => <div key={i} className="bg-white w-full rounded-md shadow-sm">

                            <img className='h-full object-contain w-full' src={image || "https://via.placeholder.com/300"} alt={"product"} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />

                        </div>)}

                    </div>}

                </div>

                <div className='col-span-2 flex flex-col'>

                    <Tab.Group>

                        <Tab.List className='flex flex-row justify-between'>

                            <Tab className='w-full rounded-lg py-2.5 font-bold text-lg leading-5 text-tangerine text-left px-2'>Order</Tab>

                            <Tab className='w-full rounded-lg py-2.5 font-bold text-lg leading-5 text-litudian-orange text-left px-2'>Description</Tab>

                            <Tab className='w-full rounded-lg py-2.5 font-bold text-lg leading-5 text-tangerine text-left px-2'>Customer Reviews</Tab>

                        </Tab.List>

                        <Tab.Panels className='w-full bg-white h-72 p-4'>

                            <Tab.Panel></Tab.Panel>

                            <Tab.Panel>
                                
                                <h1 className="text-2xl text-gray-700 font-bold mb-3">{moq !== null && toTitleCase(moq?.product[0]?.name)}</h1>

                                <p className='text-gray-600'>{moq !== null && toTitleCase(moq?.product[0]?.description)}</p>
                                
                            </Tab.Panel>

                            <Tab.Panel>

                                <div>

                                    {reviews.map((review, i) => <div key={i} className="w-full grid grid-cols-5 mt-4">

                                        <div className='flex flex-col items-center justify-center'>

                                            <img className='m-0 p-0' src='/img/user.png' alt='user' />

                                            <h3 className='font-extrabold text-tangerine'>{review?.rating}</h3>

                                        </div>

                                        <div className='flex flex-col col-span-4'>

                                            <h1 className='text-md font-semibold capitalize'>Customer</h1>

                                            <p className='capitalize text-sm text-gray-600'>{review?.review}</p>

                                        </div>

                                    </div>)}

                                </div>

                            </Tab.Panel>

                        </Tab.Panels>

                    </Tab.Group>

                </div>

            </div>

        </div>

        {/* <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md my-5 p-4 gap-x-3">

            <div className="md:flex-1 flex flex-col gap-y-3 px-3">

                <h1 className="text-2xl text-tangerine font-bold uppercase">{moq !== null && moq?.product[0]?.name}</h1>

                <div className="bg-white h-full w-full rounded-md shadow-sm">

                    <img className='h-full object-contain w-full' src={moq !== null ? moq?.product[0]?.images[0] : ''} alt={"product"} />

                </div>

            </div>

            <div className="md:flex-1 flex flex-col">

                <h1 className="text-bold text-gray-900 uppercase font-extrabold">10 Items In Stock</h1>

                <p className="text-tangerine uppercase font-bold text-sm">67% Sold</p>

                <table className="my-7">

                    <thead>

                        <tr>

                            <td className="font-extrabold text-gray-900 uppercase text-xs">Profit</td>

                            <td className="font-extrabold text-gray-900 uppercase text-xs">: <span className="text-tangerine">14,000</span></td>

                        </tr>

                        <tr>

                            <td className="font-extrabold text-gray-900 uppercase text-xs">In Stock</td>

                            <td className="font-extrabold text-gray-900 uppercase text-xs">: <span className="text-tangerine">12 Items</span></td>

                        </tr>

                    </thead>

                </table>

                <div className="flex flex-col my-1">

                    <h1 className="text-gray-900 uppercase font-extrabold text-xs">Size</h1>

                    <div className="grid grid-cols-4 gap-x-4">

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-litudian-orange py-1 text-white px-2 rounded-md font-bold">36</div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">5</div>

                        </div>

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-tangerine py-1 text-white px-2 rounded-md font-bold">37</div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">3</div>

                        </div>

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-tangerine py-1 text-white px-2 rounded-md font-bold">38</div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col mt-5 mb-10">

                    <h1 className="text-gray-900 uppercase font-extrabold text-xs">Colors</h1>

                    <div className="grid grid-cols-4 gap-x-4">

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-purple-900 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">2</div>

                        </div>

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-blue-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                        </div>

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-green-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                        </div>

                        <div className="bg-gray-200 flex flex-row rounded-md my-2 shadow">

                            <div className="bg-red-500 py-1 text-white px-2 w-9 h-full rounded-md font-bold"></div>

                            <div className="bg-transparent py-1 flex-1 flex flex-col items-end justify-center text-gray-800 font-bold px-3">1</div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex-1 flex flex-col">

                <h1 className="text-bold text-gray-900 uppercase font-extrabold  mb-5">Track Sales</h1>

                <div className="flex flex-col md:flex-row gap-x-4 bg-transparent">

                    <div className="flex md:contents">

                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                            <div className="h-full w-3 flex items-center justify-center">

                                <div className="h-full w-1 bg-litudian-orange pointer-events-none"></div>

                            </div>

                            <div className="w-3 h-3 absolute top-1/3 -mt-3 rounded-full bg-tangerine shadow text-center"></div>

                        </div>

                        <div className="bg-transparent col-start-4 col-end-12 p-1 rounded-xl my-1 mr-auto w-full">

                            <h3 className="text-sm font-extrabold mb-1 text-gray-900 uppercase">Charles Darwin Doe</h3>

                            <p className="leading-tight text-justify w-full text-gray-300 text-xs font-extrabold">12:00</p>

                            <p className="leading-tight text-justify w-full text-litudian-orange text-xs font-extrabold capitalize">1 Air mAX</p>

                            <p className="leading-tight text-justify w-full text-tangerine text-xs font-extrabold">Ksh 1,200</p>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row gap-x-4 bg-transparent">

                    <div className="flex md:contents">

                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                            <div className="h-full w-3 flex items-center justify-center">

                                <div className="h-full w-1 bg-litudian-orange pointer-events-none"></div>

                            </div>

                            <div className="w-3 h-3 absolute top-1/3 -mt-3 rounded-full bg-tangerine shadow text-center"></div>

                        </div>

                        <div className="bg-transparent col-start-4 col-end-12 p-1 rounded-xl my-1 mr-auto w-full">

                            <h3 className="text-sm font-extrabold mb-1 text-gray-900 uppercase">Charles Darwin Doe</h3>

                            <p className="leading-tight text-justify w-full text-gray-300 text-xs font-extrabold">12:00</p>

                            <p className="leading-tight text-justify w-full text-litudian-orange text-xs font-extrabold capitalize">1 Air mAX</p>

                            <p className="leading-tight text-justify w-full text-tangerine text-xs font-extrabold">Ksh 1,200</p>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row gap-x-4 bg-transparent">

                    <div className="flex md:contents">

                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                            <div className="h-full w-3 flex items-center justify-center">

                                <div className="h-full w-1 bg-litudian-orange pointer-events-none"></div>

                            </div>

                            <div className="w-3 h-3 absolute top-1/3 -mt-3 rounded-full bg-tangerine shadow text-center"></div>

                        </div>

                        <div className="bg-transparent col-start-4 col-end-12 p-1 rounded-xl my-1 mr-auto w-full">

                            <h3 className="text-sm font-extrabold mb-1 text-gray-900 uppercase">Charles Darwin Doe</h3>

                            <p className="leading-tight text-justify w-full text-gray-300 text-xs font-extrabold">12:00</p>

                            <p className="leading-tight text-justify w-full text-litudian-orange text-xs font-extrabold capitalize">1 Air mAX</p>

                            <p className="leading-tight text-justify w-full text-tangerine text-xs font-extrabold">Ksh 1,200</p>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row gap-x-4 bg-transparent">

                    <div className="flex md:contents">

                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">

                            <div className="h-full w-3 flex items-center justify-center">

                                <div className="h-full w-1 bg-litudian-orange pointer-events-none"></div>

                            </div>

                            <div className="w-3 h-3 absolute top-1/3 -mt-3 rounded-full bg-tangerine shadow text-center"></div>

                        </div>

                        <div className="bg-transparent col-start-4 col-end-12 p-1 rounded-xl my-1 mr-auto w-full">

                            <h3 className="text-sm font-extrabold mb-1 text-gray-900 uppercase">Charles Darwin Doe</h3>

                            <p className="leading-tight text-justify w-full text-gray-300 text-xs font-extrabold">12:00</p>

                            <p className="leading-tight text-justify w-full text-litudian-orange text-xs font-extrabold capitalize">1 Air mAX</p>

                            <p className="leading-tight text-justify w-full text-tangerine text-xs font-extrabold">Ksh 1,200</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        {moq !== null && moq?.product[0]?.images !== undefined &&  moq?.product[0]?.images.length > 1 && <div className="grid grid-cols-4 gap-3 py-5">
                                
            {moq?.product[0]?.images.map((image, i) => <div key={i} className="bg-white h-36 w-full rounded-md shadow-sm">

                <img className='h-48 object-contain w-full' src={image || "https://via.placeholder.com/300"} alt={"product"} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />

            </div>)}

        </div>} */}

    </>


    )

};

const mapStateToProps = (state) => {

    return {

        reviews: state.reviews

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getReviewsById }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
