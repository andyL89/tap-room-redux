import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';
import Search from './defaults/Search';

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 15px;
  height: 45px;
  background: rgb(42,20,0);
  background: linear-gradient(0deg, rgba(42,20,0,1) 4%, rgba(0,230,255,1) 6%);
  margin-bottom: 60px;
`
const StyledTitle = styled(Button)`
  background: transparent;
  margin-right: 32%;
  border: 2px solid transparent;
  background-color: transparent;
  width: 160px;
  font-size: 20px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  outline: none;
  &:hover {
    background: rgb(255,194,0);
    background: linear-gradient(0deg, rgba(255,194,0,1) 82%, rgba(255,255,255,1) 82%, rgba(255,243,206,1) 100%);
    color: white;
    text-shadow: 0 0  2px #FFFFFF;
    border: 2px solid white;
    cursor: pointer;
    transition: .5s;
  }
`
// const StyledTitle = styled(Button)`
//   text-align: center;
//   background-color: transparent;
//   border-style: none;
//   color: rgb(255, 255, 255);
//   font-size: 30px;
//   font-weight: 900;
//   outline: none;
//   &:hover {
//     cursor: pointer;
//     transition: .2s;
//   }
// `
const StyledSearch = styled(Search)`
  float: right;
  margin: 7px;
  padding: 6px;
  border: 1px solid;
  border-radius: 5px;
  outline: none;
`

const Header = () => (
  <Navbar>
    <StyledTitle text={"On Tap"}/>
    <StyledSearch placeholder={"Search"}/>
  </Navbar>
)

export default Header;