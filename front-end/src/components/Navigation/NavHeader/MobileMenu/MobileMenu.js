import NavItemMobile from '../NavItemMobile/NavItemMobile';
import theme from '../../../Theme/theme';
import styled from 'styled-components';
import PrimaryButton from '../../../Button/Primary/PrimaryButton.js';

const StyledNav = styled.nav`
	background: ${theme.color.background.secondary};
	position: fixed;
	top: 0;
	left: 0;
	width: 50vw;
	height: 100vh;
	z-index: 100;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10%;
`;

const ButtonWrapper = styled.div`
	margin-top: 20px;
`;

const MobileMenu = ({ toggleMobileMenu }) => {
	return (
		<StyledNav>
			<NavItemMobile link="/" toggle={toggleMobileMenu} exact={true}>
				Home
			</NavItemMobile>
			<NavItemMobile link="/" toggle={toggleMobileMenu} exact={true}>
				Demo
			</NavItemMobile>
			<ButtonWrapper>
				<PrimaryButton>Get Started</PrimaryButton>
			</ButtonWrapper>
		</StyledNav>
	);
};

export default MobileMenu;
