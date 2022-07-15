import { Dialog, Transition } from '@headlessui/react'
import ReactStars from 'react-stars'
import { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReviewsById, submitReview } from './../store/actions/ReviewActions';

const RatingModal = ({ open, toggle, product, submitReview }) => {

    const [rating, setRating] = useState(0);

    const [remarks, setRemarks] = useState('');

    const postReview = async () => {

        try {

            let obj = {

                product_id: product?.id,

                status: 0,

                rating,

                review: remarks

            };

            let result = await submitReview(obj);

            if (result) {

                await getReviewsById(product?.id);

            }

            toggle();
            
        } catch (error) {

            console.log(error)
            
        }

    }

    return (

        <Transition appear show={open} as={Fragment}>

                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={toggle}>

                    <div className="min-h-screen px-4 text-center">

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">

                            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-80" />

                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">

                            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                                <form className="flex flex-col justify-center items-center p-6 w-full space-y-4" onSubmit={async (e) => {

                                    e.preventDefault();

                                    postReview();

                                }}>

                                    <div className='flex flex-col w-full space-y-2'>

                                        <label className='text-base font-bold text-gray-700'>Ratings</label>

                                        <ReactStars count={5} value={rating} onChange={(rating) => setRating(rating)} size={24} color2={'#ffd700'} />

                                    </div>

                                    <div className='flex flex-col w-full space-y-2'>

                                        <label className='text-base font-bold text-gray-700'>Remarks</label>

                                        <textarea className='border border-gray-400 focus:outline-none px-2' value={remarks} onChange={e => setRemarks(e.target.value)}></textarea>

                                    </div>

                                    <div className='w-full flex flex-row items-center justify-end'>

                                        <button className='bg-tangerine text-white text-base rounded px-6 py-2' type='submit'>Send Review</button>

                                    </div>

                                </form>

                            </div>

                        </Transition.Child>

                    </div>

                </Dialog>

        </Transition>

    )

};

const mapStateToProps = (state) => {

    return {

        reviews: state.reviews

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getReviewsById, submitReview }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(RatingModal);