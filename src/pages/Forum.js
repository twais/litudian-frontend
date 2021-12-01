import React, { Component } from 'react';
import Layout from './../layouts/Main';

export default class Forum extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    render() {

        return (

            <Layout>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-y-0 md:gap-x-3 py-5">

                    <div className="flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Categories</h1>

                        <div className="bg-white flex flex-col w-full h-auto mt-2 rounded-md shadow-sm p-4 gap-y-3">

                            <div className="flex flex-row gap-x-2 items-center">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                            <div className="flex flex-row gap-x-2 items-center">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                            <div className="flex flex-row gap-x-2 items-center">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                            <div className="flex flex-row gap-x-2 items-center">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                    <div className="col-span-2 flex flex-col">

                        <h1 className="text-tangerine font-bold">Posts</h1>

                        <div className="bg-white flex flex-col w-full h-auto mt-2 rounded-md shadow-sm pt-5">

                            <div className="flex flex-row gap-x-2 items-center px-5">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                            <p className="text-gray-600 py-5 text-sm px-5">Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                feugait nulla facilisi.<br/><br/>Lorem ipsum dolor sit amet, cons ectetuer adipiscing eli</p>

                            <div className="bg-litudian-orange text-white py-2 font-bold flex flex-row justify-between items-center px-5 rounded-b-md">

                                <p>14 comments</p>

                                <p>44 favourites</p>

                                <p>12 minutes</p>

                            </div>

                        </div>

                        <div className="bg-white flex flex-col w-full h-auto mt-10 rounded-md shadow-sm pt-5">

                            <div className="flex flex-row gap-x-2 items-center px-5">

                                <div className="bg-tangerine h-12 w-12 rounded-md"></div>

                                <div className="flex flex-col">

                                    <h4 className="text-gray-900 font-extrabold text-sm">Lorem ipsum dolor sit</h4>

                                    <p className="text-gray-400 italic text-xs">This Author</p>

                                </div>

                            </div>

                            <p className="text-gray-600 py-5 text-sm px-5">Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                feugait nulla facilisi.<br/><br/>Lorem ipsum dolor sit amet, cons ectetuer adipiscing eli</p>

                            <div className="bg-transparent text-tangerine py-2 font-bold flex flex-row justify-between items-center px-5 rounded-b-md">

                                <p>14 comments</p>

                                <p>44 favourites</p>

                                <p>12 minutes</p>

                            </div>

                            <div className="flex flex-row gap-x-2 items-center mx-5 px-5 py-2 my-5 bg-gray-200 rounded-md">

                                <div className="bg-tangerine h-8 w-8 rounded-md"></div>

                                <div className="flex flex-col">

                                    <p className="text-gray-700 italic text-xs">Duis autem vel eum iriure dolor in hendrerit in</p>

                                </div>

                            </div>

                            <div className="flex flex-col mx-5 mb-10">

                                <textarea rows="5" placeholder="My comment" className="py-2 px-7 placeholder-gray-600 font-bold shadow-sm rounded-md focus:outline-none bg-gray-200"></textarea>

                                <div className="flex flex-col items-end">

                                    <button className="bg-tangerine uppercase my-3 text-white text-sm px-4 py-1 font-bold rounded-lg shadow-sm">share comment</button>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col">
                        
                        <h1 className="text-tangerine font-bold">Recent Searches</h1>

                        <div className="bg-white w-full h-14 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-14 mt-2 rounded-md shadow-sm"></div>

                        <div className="bg-white w-full h-14 mt-2 rounded-md shadow-sm"></div>
                        
                    </div>

                </div>
                
            </Layout>

        )

    }

};
