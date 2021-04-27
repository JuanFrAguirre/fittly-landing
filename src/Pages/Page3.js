import { Col, Container, Media, Row } from 'react-bootstrap';

const Page3 = () => {
	const messages = [
		{
			id: 1,
			text: 'Become a successful entrepeneur',
		},
		{
			id: 1,
			text: 'Show off your Proficient trainer skills',
		},
		{
			id: 1,
			text: 'Make enough money for your cost of living',
		},
		{
			id: 1,
			text: 'Develop a strong social media presence',
		},
	];

	return (
		<>
			<Container>
				<Row className='step3'>
					<Col md={5} className='step3__img'>
						{/* <Media>
							<img src='../assets/img/header_desktop.png' alt='Girl jumping' />
						</Media> */}
						<div className='step3__img--img' />
					</Col>
					<Col md={7} className='step3__text--container'>
						<h2>You too can advance your fitness career</h2>
						<Row className='step3__text'>
							{messages.map((message) => (
								<Col md={6}>
									<div key={message.id} className='step3__text--item'>
										<p>{message.text}</p>
									</div>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Page3;
