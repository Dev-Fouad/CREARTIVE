import { useRef } from "react";
import {FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

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
			<h1>CREARTIVE</h1>

			<div className="Head">
				<nav ref={navRef}>
					
					<div className="ta">
						<a href="/#">Home</a>
						<a href="/#">My work</a>
						<a href="/#">Blog</a>
						<a href="/#">About me</a>
						
					</div>
			
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>

					<div className="Big">
						<Button2 text='log in' />
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

