import React from 'react'

const Product = ({ moq }) => {

  return (

    <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md my-5 p-4 gap-x-3">

        <div className="md:flex-1 flex flex-col gap-y-3 px-3">

            <h1 className="text-2xl text-tangerine font-bold uppercase">{moq !== null && moq?.product[0]?.name}</h1>

            <div className="bg-white h-full w-full rounded-md shadow-sm">

                <img className='h-full object-contain w-full' src={moq !== null && moq?.product[0]?.images[0]} alt={moq !== null && moq.id} />

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

  )

};

export default Product;
