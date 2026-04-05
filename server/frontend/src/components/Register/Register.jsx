import React, { useState } from 'react';
// Assuming global CSS is linked in public/index.html or imported in App.js
// import '../../static/style.css'; // If component-specific CSS is needed

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const [currentRole, setCurrentRole] = useState('buyer');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleRoleChange = (role) => {
        setCurrentRole(role);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: 'Creating account...', type: '' });
        
        const dataToSend = {
            userName: formData.username, // Backend might expect 'userName'
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await fetch('/djangoapp/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('username', result.userName);
                localStorage.setItem('userRole', currentRole);
                setMessage({ text: 'Registration successful! Redirecting...', type: 'success' });
                setTimeout(() => {
                    let redirectUrl = '/';
                    if (currentRole === 'dealer') redirectUrl = '/dealer-dashboard/';
                    else if (currentRole === 'buyer') redirectUrl = '/buyer-dashboard/';
                    window.location.href = redirectUrl;
                }, 1000);
            } else {
                setMessage({ text: result.error || 'Registration failed', type: 'danger' });
            }
        } catch (err) {
            setMessage({ text: 'Network error occurred', type: 'danger' });
        }
    };

    return (
        <main className="container">
            <div className="auth-container">
                <div className="text-center mb-5">
                    <h2 style={{ fontWeight: 800 }}>Create Account</h2>
                    <p className="text-muted">Enter your details to create an account</p>
                </div>

                {/* Role Selector */}
                <div className="role-selector" id="roleSelector">
                    <button className={`role-btn ${currentRole === 'buyer' ? 'active' : ''}`} onClick={() => handleRoleChange('buyer')}>Buyer</button>
                    <button className={`role-btn ${currentRole === 'dealer' ? 'active' : ''}`} onClick={() => handleRoleChange('dealer')}>Dealer</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="firstName" className="small font-weight-bold text-muted text-uppercase">First Name</label>
                            <input type="text" id="firstName" className="form-control" placeholder="John" style={{ height: '56px' }} value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="lastName" className="small font-weight-bold text-muted text-uppercase">Last Name</label>
                            <input type="text" id="lastName" className="form-control" placeholder="Doe" style={{ height: '56px' }} value={formData.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="username" className="small font-weight-bold text-muted text-uppercase">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="johndoe" style={{ height: '56px' }} value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="small font-weight-bold text-muted text-uppercase">Email Address</label>
                        <input type="email" id="email" className="form-control" placeholder="john@example.com" style={{ height: '56px' }} value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="password" className="small font-weight-bold text-muted text-uppercase">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="••••••••" style={{ height: '56px' }} value={formData.password} onChange={handleChange} required minLength="8" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block py-3">Register</button>
                </form>

                {message.text && <div className={`mt-3 small font-weight-bold text-${message.type}`}>{message.text}</div>}

                <div className="text-center mt-5">
                    <p className="text-muted small">Already have an account? <a href="/login/" className="text-primary font-weight-bold">Sign in</a></p>
                </div>
            </div>
        </main>
    );
};

export default Register;