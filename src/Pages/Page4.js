import icon1 from '../assets/img/icons_header/05.svg';
import icon2 from '../assets/img/icons_header/03.svg';
import icon3 from '../assets/img/icons_header/01.svg';
import icon4 from '../assets/img/icons_header/06.svg';
import icon5 from '../assets/img/icons_header/07.svg';
import icon6 from '../assets/img/icons_header/04.svg';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Page4 = () => {
	const items = [
		{
			id: 1,
			icon: icon1,
			title: 'Promote yourself online',
		},
		{
			id: 2,
			icon: icon2,
			title: 'Find meaningful work',
		},
		{
			id: 3,
			icon: icon3,
			title: 'Upgrade your career',
		},
		{
			id: 4,
			icon: icon4,
			title: 'Network outside of fittly',
		},
		{
			id: 5,
			icon: icon5,
			title: 'Sell your services',
		},
		{
			id: 6,
			icon: icon6,
			title: 'Meet other professionals',
		},
	];

	return (
		<Container>
			<Row className='step4'>
				<Col>
					<h2>Opportunities for growth</h2>
					<Row className='step4__item--container'>
						{items.map((item) => (
							<Col md={6} lg={4} key={item.id} className='step4__item--wrapper'>
								<Card className='step4__item'>
									<h4 className='step4__item--title'>{item.title}</h4>
									<img className='step4__item--img' src={item.icon} width='42px' height='32px' alt='Card icon' />
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Page4;
