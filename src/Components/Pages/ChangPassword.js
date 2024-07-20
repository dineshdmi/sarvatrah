import React, { useState } from 'react';
import '../CSS/Password.css';

const PasswordUpdateForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [successMessage, setSuccessMessage] = useState(''); // State to manage success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic
        onSubmit();
        setSuccessMessage('Password changed successfully!');
        setTimeout(() => setSuccessMessage(''), 3000); // Hide after 3 seconds
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="password-update-form">
                <div className="form-group">
                    <label htmlFor="oldPassword">Old Password:</label>
                    <input
                        type="password"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="submit-button ">
                    Submit
                </button>
            </form>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default PasswordUpdateForm;
