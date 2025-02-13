import React from 'react';
import styled from 'styled-components';
import { FaFileAlt, FaHome, FaShare } from 'react-icons/fa'; // react-icons에서 아이콘 import
import { IoFileTrayStackedSharp } from "react-icons/io5";

const Container = styled.div`
    width: 240px;
    height: 100%;
    background-color: #F4F6F9;
    z-index: 1000;
    position: fixed;
`;

const SideMenu = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 0 10px;
    margin-top: 20px;
    flex-direction: column;
    box-sizing: border-box;
`;

const Button = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #1657dd;
        color: white;
    }

    svg {
        margin-right: 20px;
        justify-content: center;
    }
`;



const SideBar = () => {
  return (
    <Container>
        <SideMenu>
            <Button>
                <FaHome size={20}/>
                홈
            </Button>
            <Button>
                <IoFileTrayStackedSharp size={20}/>
                내 파일함
            </Button>
            <Button>
                <FaShare size={20}/>
                공유 파일함
            </Button>
        </SideMenu>
    </Container>
  );
};

export default SideBar;