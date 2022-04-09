import React from "react";

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 rounded-3">
			<div className="container-fluid bg-light p-5">
				<h1 className="display-3 fw">A Warm Welcome!</h1>
				<p className="col-md-12 fs-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Praesent quis elit at ipsum iaculis congue. Quisque
					hendrerit, purus et scelerisque faucibus, mauris augue
					fermentum nibh, nec laoreet arcu leo vel erat. Vestibulum ut
					felis auctor, efficitur dui a, accumsan libero.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
