import React from 'react';
import { Link } from "react-router-dom"; // Added missing import

const AdminHomePage = () => {
    const orders = [
        {
            _id: 123321,
            user: {
                name: "John Doe", // Fixed typo "jhon"
            },
            totalPrice: 110,
            status: "Processing"
        }
    ];

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1> {/* Fixed typo "txt-3xl" */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded-lg bg-white">
                    <h2 className="text-xl font-semibold">Revenue</h2>
                    <p className='text-2xl font-bold'>$1,000</p>
                </div>
                
                <div className="p-4 shadow-md rounded-lg bg-white">
                    <h2 className="text-xl font-semibold">Total Orders</h2>
                    <p className='text-2xl font-bold'>200</p>
                    <Link to="/admin/orders" className="text-blue-500 hover:underline text-sm">
                        Manage Orders
                    </Link>
                </div>

                <div className="p-4 shadow-md rounded-lg bg-white">
                    <h2 className="text-xl font-semibold">Total Products</h2>
                    <p className='text-2xl font-bold'>100</p>
                    <Link to="/admin/products" className="text-blue-500 hover:underline text-sm">
                        Manage Products {/* Fixed text from "Manage Orders" */}
                    </Link>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto shadow-sm rounded-lg border">
                    <table className="min-w-full text-left text-gray-500">
                        <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                            <tr> {/* Wrapped headers in a single row */}
                                <th className='py-3 px-4'>Order ID</th>
                                <th className='py-3 px-4'>User</th>
                                <th className='py-3 px-4'>Total Price</th>
                                <th className='py-3 px-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => ( // Use parenthesis for implicit return
                                    <tr key={order._id} className='border-b hover:bg-gray-50 transition-colors'>
                                        <td className='p-4 text-gray-900 font-medium'>#{order._id}</td>
                                        <td className='p-4'>{order.user.name}</td>
                                        <td className='p-4'>${order.totalPrice}</td> {/* Fixed property name */}
                                        <td className='p-4'>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className='p-10 text-center text-gray-500'>
                                        No Recent Orders Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;
