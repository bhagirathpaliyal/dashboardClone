import React from 'react';

const CustomerDemographic = () => {
    return (
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 flex-1">
            <h2 className="text-xl font-semibold dark:text-white">Customers Demographic</h2>
            <p className="text-gray-500 dark:text-white">Number of customers based on country</p>
            <div className="mt-4 mb-6">
              
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Map_of_the_world.svg/1920px-Map_of_the_world.svg.png" 
                    alt="World Map"
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex justify-around mt-4">
                    <span className="text-blue-600">USA</span>
                    <span className="text-blue-600">France</span>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between text-gray-700">
                    <span>USA</span>
                    <span>2,379 Customers</span>
                </div>
                <div className="bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '79%'}}>79%</div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-gray-700">
                    <span>France</span>
                    <span>589 Customers</span>
                </div>
                <div className="bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '23%'}}>23%</div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDemographic;