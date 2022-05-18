import React, { useState } from 'react';
import './index.css';
//  https://frontend-educational-backend.herokuapp.com/api/auth/signin
function Login() {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
    const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json, 'API Response');
				if (json.accessToken) {
					localStorage.setItem('token', json.accessToken);
					window.location.href = '/pages/bookings';
				} else {
					setError(json.error);
				}
			});
	};

	return (
		<div className="body-login">
			<div className="container" id="container">
				<div className="form-container log-in-container">
					<form className="form-login" action="#">
						<h1 className="h1-login">Login</h1>
						<input
							className="input-login"
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className="input-login"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="login-button" onClick={handleSubmit}>
							Log In
						</button>
                        {error!== '' && <p className="error-login">{error}</p>}
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-right">
							<h1 className="h1-login">HTML CSS Login Form</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
