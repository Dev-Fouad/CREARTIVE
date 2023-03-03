import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Styles.css";
import Button from "./UI/Button";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h1>CREARTIVE</h1>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>

			<div className="Big">
				<Button  text='Sign in' bg='#E6F1FEB2'/>
				<Button  text='Sign in' bg='#0070F4' />
			</div>
		</header>
	);
}

export default Header;
