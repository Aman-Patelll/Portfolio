import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { Bio } from "../../data/constants";

const Nav = styled.div`
	background-color: ${({ theme }) => theme.card_light};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
	width: 80%;
	padding: 0 6px;
	display: flex;
	justify-content: start;
	align-items: center;
	text-decoration: none;
	@media (max-width: 640px) {
		padding: 0 0px;
	}
`;

const Span = styled.div`
	padding: 0 4px;
	font-weight: bold;
	font-size: 20px;
`;

const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 868px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: ${({ theme }) => theme.text_primary};
	}
`;

const NavItems = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
	padding: 0 6px;
	list-style: none;

	@media screen and (max-width: 868px) {
		display: none;
	}
`;

const NavLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	:hover {
		color: ${({ theme }) => theme.primary};
	}

	&.active {
		border-bottom: 2px solid ${({ theme }) => theme.primary};
	}
`;

const ButtonContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 6px;
	@media screen and (max-width: 868px) {
		display: none;
	}
`;

const GitHubButton = styled.a`
	height: 70%;
	padding: 0 20px;
	border: 1.8px solid ${({ theme }) => theme.primary};
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${({ theme }) => theme.primary};
	font-size: 16px;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.6s ease-in-out;
	:hover {
		background: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.white};
	}
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

const ChangeMode = styled.a`
	height: 70%;
	padding: 0 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${({ theme }) => theme.text_primary};
	font-size: 16px;
	font-weight: 500;
	text-decoration: none;
	transition: all 0.6s ease-in-out;
	:hover {
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

const MobileMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	position: absolute;
	top: 80px;
	right: 0;
	width: 100%;
	padding: 12px 40px 24px 40px;
	background: ${({ theme }) => theme.card_light + 99};
	transition: all 0.6s ease-in-out;
	transform: ${({ isOpen }) =>
		isOpen ? "translateY(0)" : "translateY(-100%)"};
	border-radius: 0 0 20px 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileMenuLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	:hover {
		color: ${({ theme }) => theme.primary};
	}

	&.active {
		border-bottom: 2px solid ${({ theme }) => theme.primary};
	}
`;

const Navbar = ({ darkMode, setDarkMode }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const theme = useTheme();

	return (
		<Nav>
			<NavContainer>
				<NavLogo to="/">
					<a
						href="/"
						style={{
							display: "flex",
							alignItems: "center",
							color: theme.text_primary,
							marginBottom: "20",
							cursor: "pointer",
							textDecoration: "none",
						}}
					>
						<DiCssdeck size="3rem" /> <Span>Portfolio</Span>
					</a>
				</NavLogo>
				<MobileIcon>
					<FaBars
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</MobileIcon>
				<NavItems>
					<NavLink href="#about">About</NavLink>
					<NavLink href="#skills">Skills</NavLink>
					<NavLink href="#experience">Experience</NavLink>
					<NavLink href="#projects">Project</NavLink>
					<NavLink href="#education">Education</NavLink>
					<ChangeMode onClick={() => setDarkMode(!darkMode)}>
						<Brightness4OutlinedIcon />
					</ChangeMode>
				</NavItems>
				<ButtonContainer>
					<GitHubButton
						href={Bio.github}
						target="_blank"
					>
						Github Profile
					</GitHubButton>
				</ButtonContainer>
				{isOpen && (
					<MobileMenu isOpen={isOpen}>
						<MobileMenuLink
							href="#about"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							About
						</MobileMenuLink>
						<MobileMenuLink
							href="#skills"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Skills
						</MobileMenuLink>
						<MobileMenuLink
							href="#experience"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Experience
						</MobileMenuLink>
						<MobileMenuLink
							href="#projects"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Projects
						</MobileMenuLink>
						<MobileMenuLink
							href="#education"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Education
						</MobileMenuLink>
						<ChangeMode
							onClick={() => setDarkMode(!darkMode)}
							style={{ justifyContent: "flex-start", padding: 0 }}
						>
							<Brightness4OutlinedIcon />
						</ChangeMode>
						<GitHubButton
							style={{
								padding: "10px 16px",
								background: `${theme.primary}`,
								color: "white",
								width: "max-content",
							}}
							href={Bio.github}
							target="_blank"
						>
							Github Profile
						</GitHubButton>
					</MobileMenu>
				)}
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
