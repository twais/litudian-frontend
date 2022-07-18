import React, { useState } from 'react';
import ReactStars from 'react-stars'
import { toTitleCase } from './../utils/helpers';
import { Tab } from '@headlessui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviewsById } from './../store/actions/ReviewActions';
import Rating from './../modals/Rating';
import { toast } from 'react-toastify';

const expiry = localStorage.getItem('ltdn_exp');
const currentTime = Date.now() / 1000;
const authenticated = expiry > currentTime;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Product = ({ moq, getReviewsById, reviews: { data: reviews }, product }) => {

    const [show, setShow] = useState(false);
    
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

    const toggleRatingModal = () => setShow(!show)

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

                            <div className='flex flex-row justify-center items-center gap-x-1'>

                                <ReactStars value={reviews && reviews.length > 0 ? reviews.map(item => item.rating).reduce((prev, next) => prev + next) / reviews.length : 0} count={2} size={26} activeColor="#ffd700" edit={false} />

                                <p className='text-tangerine font-extrabold'>{reviews && reviews.length > 0 ? (reviews.map(item => item.rating).reduce((prev, next) => prev + next) / reviews.length).toFixed(2) : 0}</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className='w-full grid grid-cols-3 gap-8 mt-3'>

                 <div className="h-full w-full flex flex-col">

                    <img className='h-96 object-contain w-full' src={moq !== null ? moq?.product[0]?.images[0] : ''} alt={"product"} onError={(e) => {

                        e.target.src = 'https://via.placeholder.com/300';

                    }} />

                    {moq !== null && moq?.product[0]?.images !== undefined &&  moq?.product[0]?.images.length > 1 && <div className="grid grid-cols-4 gap-2 mt-3">
                                
                        {moq?.product[0]?.images.map((image, i) => <div key={i} className="bg-white w-full rounded-md shadow-sm">

                            <img className='h-full object-contain w-full' src={image || "https://via.placeholder.com/300"} alt={"product"} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />

                        </div>)}

                    </div>}

                </div>

                <div className='col-span-2 flex flex-col'>

                    <Tab.Group>

                        <Tab.List className='flex flex-row justify-between'>

                            <Tab className={({ selected }) => classNames(`w-full rounded-lg py-2.5 font-bold text-lg leading-5 ${selected ? 'text-litudian-orange' : 'text-tangerine'} text-left px-2`)}>Order</Tab>

                            <Tab className={({ selected }) => classNames(`w-full rounded-lg py-2.5 font-bold text-lg leading-5 ${selected ? 'text-litudian-orange' : 'text-tangerine'} text-left px-2`)}>Description</Tab>

                            <Tab className={({ selected }) => classNames(`w-full rounded-lg py-2.5 font-bold text-lg leading-5 ${selected ? 'text-litudian-orange' : 'text-tangerine'} text-left px-2`)}>Customer Reviews</Tab>

                        </Tab.List>

                        <Tab.Panels className='w-full bg-white min-h-full p-4'>

                            <Tab.Panel>

                                <form className='flex flex-col px-2 py-5' onSubmit={(e) => {
                                    e.preventDefault();
                                    toast.error('Please fill all fields !');
                                }}>

                                    <h1 className='text-md text-tangerine font-bold'>Size</h1>

                                    <div className='flex flex-row gap-x-3 my-4'>

                                        {product?.readable_sizes && product?.readable_sizes.length > 0 && product?.readable_sizes.map((size, i) => <button type='button' key={i} className='py-1 px-5 border-2 border-tangerine hover:border-litudian-orange text-tangerine hover:text-litudian-orange font-bold capitalize rounded'>{size?.value}</button>)}

                                    </div>

                                    <h1 className='text-md text-tangerine font-bold'>Color</h1>

                                    <div className='gap-x-3 my-4 grid grid-cols-5'>

                                        {product?.readable_colors && product?.readable_colors.length > 0 && product?.readable_colors.map((color, i) =><div key={i} className='flex flex-col justify-center items-center gap-y-3 p-0'>

                                            <span className='font-bold m-0 capitalize'>{color?.label}</span>

                                            <button type='button' className='py-1 px-5 border-2 border-gray-500 hover:border-litudian-orange text-tangerine hover:text-litudian-orange font-bold capitalize rounded m-0 w-full'>2</button>

                                        </div>)}

                                    </div>

                                    <h1 className='text-md text-tangerine font-bold'>Shipping Method</h1>

                                    <div className='gap-x-3 my-4 grid grid-cols-4'>

                                        <div className='flex flex-row rounded border-2 border-litudian-orange'>

                                            <div className='px-4 bg-green-500 text-white flex flex-col justify-center items-center'>

                                                <img className='m-0 p-0' src='/img/ship.png' alt='ship' />

                                            </div>

                                            <div className='flex flex-col flex-1 px-2 py-1'>

                                                <h4 className='text-gray-700 text-sm mb-0 font-bold'>Shipping</h4>

                                                <p className='text-xs text-gray-500'>Ksh 260</p>

                                            </div>

                                        </div>

                                        <div className='flex flex-row rounded border-2 border-litudian-orange'>

                                            <div className='px-4 bg-blue-500 text-white flex flex-col justify-center items-center'>

                                                <img className='m-0 p-0' src='/img/plane.png' alt='plane' />

                                            </div>

                                            <div className='flex flex-col flex-1 px-2 py-1'>

                                                <h4 className='text-gray-700 text-sm mb-0 font-bold'>Air</h4>

                                                <p className='text-xs text-gray-500'>Ksh 260</p>

                                            </div>

                                        </div>

                                    </div>

                                    <button className='w-full rounded-full bg-tangerine text-white py-2 my-4' type='submit'>Add to Orders</button>

                                </form>

                            </Tab.Panel>

                            <Tab.Panel>
                                
                                <h1 className="text-2xl text-gray-700 font-bold mb-3">{moq !== null && toTitleCase(moq?.product[0]?.name)}</h1>

                                <p className='text-gray-600'>{moq !== null && toTitleCase(moq?.product[0]?.description)}</p>
                                
                            </Tab.Panel>

                            <Tab.Panel>

                                <div className='flex flex-col relative'>

                                    {authenticated && <div className='absolute w-fit top-0 right-5'>

                                        <button className='bg-tangerine text-white text-base rounded px-6 py-2' onClick={() => toggleRatingModal()}>Add Review</button>

                                    </div>}

                                    {reviews.map((review, i) => <div key={i} className="w-full flex flex-row justify-start items-center gap-x-5 mt-4">

                                        <div className='flex flex-col items-center justify-center'>

                                            <img className='m-0 p-0' src='/img/user.png' alt='user' />

                                            <div className='flex flex-row justify-center items-center gap-x-1'>

                                                <ReactStars value={review?.rating} count={1} size={26} activeColor="#ffd700" edit={false} />

                                                <h3 className='font-extrabold text-tangerine'>{review?.rating}</h3>

                                            </div>

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

        <Rating toggle={toggleRatingModal} open={show} product={product} />

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
