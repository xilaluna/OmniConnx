import React from 'react';
import './Landing.css';
import Keqing from '../../static/images/KeqingFile.png';

function Landing() {
	return (
		<div className="landing">
			<div className="hero">
				<div>
					<h1>Welcome to Omniconnx</h1>
					<p>some super cringy slogan</p>
					<button>Register</button>
				</div>
				<img src="https://via.placeholder.com/400"></img>
				<img src={Keqing} />
			</div>
			<div className="blurbs">
				<div className="blurb">
					<img src="https://via.placeholder.com/100"></img>
					<h4>awesome title</h4>
					<p>description</p>
				</div>
				<div className="blurb">
					<img src="https://via.placeholder.com/100"></img>
					<h4>awesome title</h4>
					<p>description</p>
				</div>
				<div className="blurb">
					<img src="https://via.placeholder.com/100"></img>
					<h4>awesome title</h4>
					<p>description</p>
				</div>
			</div>
			<div className="hero">
				<img src="https://via.placeholder.com/400"></img>
				<div>
					<h1>Something Cool</h1>
					<p>some cringy advertisement</p>
					<button>Button!</button>
				</div>
			</div>
			<div className="cards">
				<div className="card">
					<img src="https://via.placeholder.com/100"></img>
					<p>description</p>
				</div>
				<div className="card">
					<img src="https://via.placeholder.com/100"></img>
					<p>description</p>
				</div>
				<div className="card">
					<img src="https://via.placeholder.com/100"></img>
					<p>description</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
