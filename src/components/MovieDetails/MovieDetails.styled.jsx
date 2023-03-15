import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const GoBackLink = styled(Link)`
    margin-top: 10px;
    padding: 5px 10px;
    width: 110px;
    border-radius: 5px;
    background-color: ${(prop)=> prop.theme.footer};
    transition: transform 250ms linear, color 150ms linear;
    &:hover,
    &:focus {
        transform: scale(1.07);
        color: #FFFFFF;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 60px;
    margin-top: 20px;

`
export const Img = styled.img`
    width: 350px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
`

export const DescrWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 450px;

`
export const Title = styled.h1`

`
export const UserScore = styled.p`
    margin-top: 20px;
`
export const SubTitle = styled.h2`
    margin-top: 20px;

`
export const Overview = styled.p`
    margin-top: 20px;

`
export const SubSubTitle = styled.h3`
    margin-top: 20px;

`
export const GenresList = styled.ul`
    display: flex;
    gap: 5px;
    margin-top: 10px;

`
export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 20px;
`
export const StyledNavLink = styled(NavLink)`
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${(prop)=> prop.theme.header};
    transition: transform 250ms linear, color 150ms linear;
    &:hover,
    &:focus {
        transform: scale(1.07);
        color: #FFFFFF;
    }
    &.active {
        transform: scale(1.07);
        color: #FFFFFF;
    }
`