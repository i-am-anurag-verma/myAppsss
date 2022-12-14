import React, { useState } from 'react'
import Button from './Button';
import FormElement from './forms/FormElement';
import InfoText from './forms/InfoText';
import './signup.css';

const Signup = () => {

	const [name, setName] = useState('');
	const [visible, setVisible] = useState(false)

	const handleChange = (event) => {
		setName(event.target.value)
	}
	console.log("==========", name)
	return (
		<div className="container">
			<div>
				<form action="/examples/actions/confirmation.php" method="post">
					<h2>Sign Up</h2>
					<p>Please fill in this form to create an account!</p>
					<hr />
					<div className="form-group">
						<div className="input-group">
							<FormElement
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<FormElement
								type="email"
								className="form-control"
								name="email"
								placeholder="Email Address"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<FormElement
								type="password"
								className="form-control"
								name="password"
								placeholder="Password"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<FormElement
								type="password"
								className="form-control"
								name="confirm password"
								placeholder="Confirm Password"
								onChange={(event) => handleChange(event)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="checkbox-inline"><input type="checkbox" required /> I accept the <a href="/">Terms of Use</a> &amp; <a href="/">Privacy Policy</a></label>
					</div>
					<div>
						<Button onclick={() => setVisible(!visible)}>{visible ? 'Hide InfoTex' : 'Show InfoText'}</Button>
					</div>
					<div>
						<Button>Signup</Button>
					</div>
				</form>
				<div className="text-center">Already have an account? <a href="/">Login here</a></div>
				{visible && (
					<InfoText />
				)}

			</div>
		</div>

	)
}

export default Signup