import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../Assets/Group 289295 (1).png"
import "./Styles.css";
import Button from "./UI/Button";
import Button2 from "./UI/Button2";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img src={Logo}></img>

			<div className="Head">
				<nav ref={navRef}>

					<div className="ta">
						<div className="at">
							<a href="/#">Home</a>
							<a href="/#">About Us</a>
						</div>
						<div className="at">
							<a href="/#">Pricing</a>
							<a href="/#">Blog</a>
						</div>			
					</div>
		
					<div className="Big">
						<Button2 text='Log in' />
						<Button  text='Sign up'/>
					</div>
				</nav>
				
			</div>

			<button className="nav-btn" onClick={showNavbar}>
				<AiOutlineMenu />
			</button>

		</header>
	);
}

export default Header;