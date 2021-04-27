import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../assets/img/logo_header.svg';

const Page1 = () => {
	return (
		<Container fluid className='d-flex header'>
			<Container>
				<Row className='pt-5'>
					<Col className='col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start'>
						<img src={logo} alt='Fittly' className='logo' />
					</Col>
					<Col className='col-12 col-sm-6 d-none d-sm-flex justify-content-end'>
						<button className='btn btnOrange little'>Join the waitlist</button>
					</Col>
				</Row>
				<Row className='h-100 d-flex align-items-sm-center align-items-start '>
					<Col className='col-12 col-md-5 col-lg-6 d-flex flex-column justify-content-center justify-content-sm-start'>
						<h1 className='title  text-md-left text-center'>
							Level up your
							<br /> Fitness Career
						</h1>
						<p className='subtitle text-md-left text-center'>
							We help Fitness Professionals Level up, advance their careers and their business by providing the network,
							tools & resources they need to be successful,
						</p>
						<button className='btn btnOrange align-self-center align-self-sm-start '>Join the waitlist</button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Page1;
