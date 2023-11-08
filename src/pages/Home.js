import { Box } from "@mui/material";
import Navbar from "../components/HomeComponents/Navbar";
import { GetStart, SearchCard, Testimonials, TopRatingOn } from "../components/HomeComponents/HomeContents";
import Footer from "../components/HomeComponents/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { SITE_URL } from "../URL/url";

function Home(props) {
    const [fetchData, setFetchData] = useState([]);
    const [fetchProductType, setFetchProductType] = useState([]);
    const [fetchProductBrand, setFetchProductBrand] = useState([]);
    useEffect(()=>{
        axios.get(SITE_URL+"/product/allProduct").then((res)=>{
            setFetchData(res.data);
        }).catch((err)=>{
            console.log("Error: "+err);
        });

        axios.get(SITE_URL+"/product/brands").then((res)=>{
            setFetchProductBrand(res.data);
        }).catch((err)=>{
            console.log("Error: "+err);
        });

        axios.get(SITE_URL+"/product/productType").then((res)=>{
            setFetchProductType(res.data);
        }).catch((err)=>{
            console.log("Error: "+err);
        });
    },[])
    return (
        <Box sx={{
            backgroundColor: '#545F71',

            fontFamily: 'Inria Serif',
            color: '#FFFFFF',
        }}>
            <Navbar />

            <Box sx={{
                marginTop: '40px',
            }}>
                <SearchCard types={fetchProductType} brands={fetchProductBrand}/>
            </Box>
            {/* <Box sx={{
                marginTop: '40px',
            }}>
                <MainPost />
            </Box>
            <Box sx={{
                marginTop: '40px',
            }}>
                <MainButtons />
            </Box> */}
            <Box sx={{
                marginTop: '40px',
            }}>
                <TopRatingOn />
            </Box>
            <Box sx={{
                marginTop: '40px',
            }}>
                <Testimonials />
            </Box>
            <Box sx={{
                marginTop: '40px',
                marginBottom: '40px',
            }}>
                <GetStart />
            </Box>

            <Footer />
        </Box>
    )
}

export default Home;