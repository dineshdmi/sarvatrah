import React, { useState, useEffect } from 'react';
import { FaSpinner, FaEdit, FaTrash, FaHistory } from 'react-icons/fa';
import'./CSS/User.css'

const User = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'john@example.com',
            isActive: true,
            hasPendingPayment: true,
        },
        {
            id: 2,
            name: 'Harry Doe',
            phone: '987-654-3210',
            email: 'harry@example.com',
            isActive: false,
            hasPendingPayment: false,
        },
        // Add more users as needed
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);
    const [viewBookingUserId, setViewBookingUserId] = useState(null); // State to track which user's booking to view
    const [confirmDeleteUserId, setConfirmDeleteUserId] = useState(null); // State to track user id for delete confirmation
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the timeout duration as needed
    }, []);

    // Function to toggle user's active status
    const handleToggleActive = (id) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, isActive: !user.isActive } : user
        );
        setUsers(updatedUsers);
    };

    // Function to delete a user
    const handleDeleteUser = (id) => {
        // Open confirmation modal or directly delete the user
        setConfirmDeleteUserId(id);
    };

    // Function to confirm deletion of user
    const confirmDelete = () => {
        const updatedUsers = users.filter(user => user.id !== confirmDeleteUserId);
        setUsers(updatedUsers);
        setConfirmDeleteUserId(null); // Close confirmation modal
    };

    // Function to set user for editing
    const handleEditUser = (user) => {
        setEditUser(user);
    };

    // Function to view booking history for a user
    const handleViewBookingHistory = (id) => {
        setViewBookingUserId(id); // Set the user ID to view booking history
    };

    // Function to handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to handle form submission when editing a user
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const updatedUsers = users.map(user =>
            user.id === editUser.id ? editUser : user
        );
        setUsers(updatedUsers);
        setEditUser(null);
    };

    // Function to handle input change when editing a user
    const handleEditInputChange = (event) => {
        const { name, value } = event.target;
        setEditUser({ ...editUser, [name]: value });
    };

    // Filter users based on search term
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="flex items-center space-x-2">
                    <FaSpinner className="text-3xl text-white animate-spin" />
                    <span className="text-white text-lg animate-pulse bg-clip-text">Sarvatrah...</span>
                </div>
            </div>
        );
    }

    return (
        <div className='mr-6 ml-3 shadow-lg h-full w-11/12+1 bg-white'>
            <div className="container mx-auto mt-6">
                <h1 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-100 p-7 border-l-8 border-l-blue-400">Customer List</h1>

                <div className="flex items-center mb-4 justify-end mr-5">
                    <label htmlFor="search" className="mr-3 text-gray-400">Search:</label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="py-2 px-4 w-64 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="overflow-x-auto p-4">
                    <table className="min-w-full  bg-white border border-gray-300 rounded-md overflow-hidden shadow-md ">
                        <thead>
                            <tr className="bg-gray-200 ">
                                <th className="py-2 px-4 border-b border-gray-300 border-l border-r">Sr. No.</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Name</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Phone Number</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Email</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Pending Payment</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Status</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Actions</th>
                                <th className="py-2 px-4 border-b border-gray-300 border-r">Booking History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}>
                                    <td className="py-2 px-4 border-b border-gray-300 border-l border-r">{index + 1}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 border-r">{user.name}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 border-r">{user.phone}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 border-r">{user.email}</td>
                                    <td className="py-2 px-4 border-b border-gray-300 border-r text-center">
                                        {user.hasPendingPayment ? 'Pending' : 'Paid'}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-center border-r">
                                        <button
                                            className={`py-1 px-3 ${user.isActive ? 'bg-green-500' : 'bg-red-500'} text-white rounded`}
                                            onClick={() => handleToggleActive(user.id)}
                                        >
                                            {user.isActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300 text-center border-r">
                                        <button
                                            className="py-1 px-3 bg-blue-500 text-white rounded mr-2"
                                            onClick={() => handleEditUser(user)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="py-1 px-3 bg-red-500 text-white rounded"
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300 border-r text-center ">
                                        <FaHistory
                                            className="cursor-pointer ml-20 text-yellow-500"
                                            onClick={() => handleViewBookingHistory(user.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal or form for editing user details */}
                {editUser && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md" style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <h2 className="text-xl font-bold mb-4">Edit User Details</h2>
                            <form onSubmit={handleEditFormSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="edit-name"
                                        name="name"
                                        value={editUser.name}
                                        onChange={handleEditInputChange}
                                        className="mt-1 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="edit-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        id="edit-phone"
                                        name="phone"
                                        value={editUser.phone}
                                        onChange={handleEditInputChange}
                                        className="mt-1 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="edit-email"
                                        name="email"
                                        value={editUser.email}
                                        onChange={handleEditInputChange}
                                        className="mt-1 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="py-2 px-4 bg-blue-500 text-white rounded mr-2"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 px-4 bg-gray-400 text-white rounded"
                                        onClick={() => setEditUser(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Modal or display area for booking details */}
                {viewBookingUserId && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                            <h2 className="text-xl font-bold mb-4">Booking Details for {users.find(user => user.id === viewBookingUserId)?.name}</h2>
                            {/* Display booking details here */}
                            <p className="text-gray-700">Implement your booking details view here.</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="py-2 px-4 bg-gray-400 text-white rounded"
                                    onClick={() => setViewBookingUserId(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Confirmation modal for deleting a user */}
                {confirmDeleteUserId && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                            <p className="text-gray-700 mb-4">Are you sure you want to delete this user?</p>
                            <div className="flex justify-end">
                                <button
                                    className="py-2 px-4 bg-red-500 text-white rounded mr-2"
                                    onClick={confirmDelete}
                                >
                                    Confirm Delete
                                </button>
                                <button
                                    className="py-2 px-4 bg-gray-400 text-white rounded"
                                    onClick={() => setConfirmDeleteUserId(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
