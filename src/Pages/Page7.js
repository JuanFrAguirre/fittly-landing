import { Col, Container, Row } from 'react-bootstrap';

const Page7 = () => {
	return (
		<>
			<Container fluid className='footer--container'>
				<Container className='footer'>
					<Row className='footer__subscription'>
						<Col className='footer__subscription--text' md={6} lg={8}>
							<h4>
								Sign up today for exclusive access to our premium subscription for your <span>first 3 months</span>
							</h4>
							<div className='footer__input' placeholder='Your work email address'>
								<input type='text' />
								<button>Join the whitelist</button>
							</div>
						</Col>
						<Col className='footer__subscription--img' md={6} lg={4}></Col>
					</Row>
					<Row className='footer__info'>
						<Col className='footer__info--section'>
							<img src='../assets/img/logo.svg' alt='fittly logo' />
						</Col>
						<Col className='footer__info--section'>
							<p>C 2021 Fittly</p>
						</Col>
						<Col className='footer__info--section footer__info--links'>
							<div>IG</div>
							<div>TW</div>
							<div>YT</div>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Page7;
