
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
} from 'reactstrap';

function NavBar() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div style={{
			display: 'block', width: 600, padding: 30
		}}>

			<Navbar color="light" light expand="md">

				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/stocks">Stocks</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/quotes">Quotes</NavLink>
						</NavItem>
                      <NavItem>
							<NavLink href="/history">History</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default NavBar;
