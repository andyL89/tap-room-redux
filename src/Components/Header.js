import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';
import Search from './defaults/Search';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  height: 45px;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 37%, rgba(255,253,247,1) 100%);
  margin-bottom: 20px;
`
const StyledButton = styled(Button)`
  background: transparent;
  margin-left: 10px;
  border: 2px solid black;
  background-color: transparent;
  width: 160px;
  font-size: 20px;
  font-weight: 900;
  color: black;
  border-radius: 5px;
  outline: none;
  &:hover {
    background: rgb(255,194,0);
    background: linear-gradient(0deg, rgba(255,194,0,1) 82%, rgba(255,255,255,1) 82%, rgba(255,243,206,1) 100%);
    color: black;
    border: 2px solid black;
    cursor: pointer;
    transition: .5s;
  }
`
const StyledTitle = styled(Button)`
  text-align: center;
  background-color: transparent;
  border-style: none;
  color: black;
  font-size: 30px;
  font-weight: 900;
  outline: none;
  &:hover {
    cursor: pointer;
    transition: .2s;
  }
`
const StyledSearch = styled(Search)`
  float: right;
  margin: 7px;
  padding: 6px;
  border: 2px solid;
  border-radius: 5px;
  outline: none;
`

const Header = () => (
  <Navbar>
    <StyledButton text={"Beer List"} />
    <StyledTitle text={"Andy's Really Cool Pub"}/>
    <StyledSearch placeholder={"Search"}/>
  </Navbar>
)

export default Header;