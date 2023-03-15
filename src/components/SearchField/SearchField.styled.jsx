import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';


export const Search = styled.form`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    background-color: ${(prop) => prop.theme.header}
`

export const SearchIcon = styled(BsSearch)`
    position: absolute;
    right: 7px;
    top: 6px;
`

export const Input = styled.input`
    height: 20px;
    width: 250px;
    padding: 10px;
    padding-right: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 1px;
`