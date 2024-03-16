import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box,Container, Stack, useTheme } from '@mui/material'
import Footer from '../component/Footer'
import LinaerStepper from '../component/LinearStepper'

const Home = () => {

 
    return (
        <>
            <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>

                <Navbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}>
                         
                       <LinaerStepper />
                        </Box>

                    </Stack>
                </Container>
            </Box>
            <Footer />

        </>
    )
}

export default Home