import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/jobbg.jpg';

const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: 'lightBlue[800]'
        }

    ));
    return (
        <>
            <StyleHeader >
             
            </StyleHeader>
        </>
    )
}

export default Header