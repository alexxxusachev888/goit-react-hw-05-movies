import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    gap: 5px;
`
export const LogoWrapper = styled.div`
    font-size: 24px;
`

export const Container = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1200px;
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
`

export const Header = styled.header`

    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(prop)=> prop.theme.header};
    height: 130px;
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;    
    padding: 2px;
    gap: 40px;
    font-size: 24px;
`
export const StyledLink= styled(NavLink)`

    &:hover,
    &:focus {
        color: ${(prop) => prop.theme.link};
    }

    &.active {
        border-bottom: 2px solid ${(prop) => prop.theme.link};
        padding-bottom: 2px;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: ${(prop)=> prop.theme.footer};

`

export const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    height: 80px;
    background-color: ${(prop)=> prop.theme.footer};
    gap: 10px;
   
`
  
  