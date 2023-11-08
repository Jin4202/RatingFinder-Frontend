import { Box } from "@mui/material";
import Navbar from "../components/HomeComponents/Navbar";
import Footer from "../components/HomeComponents/Footer";
import { ProductCover, ProductInfoBody, ProductInfoProCon, SearchOptions, Searchbar } from "../components/ProductComponents/ProductContents";

import { SITE_URL } from "../URL/url";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Product(props) {
    const { id } = useParams();
    
    const [fetchProductData, setFetchProductData] = useState([]);
    const [fetchProductType, setFetchProductType] = useState([]);
    const [fetchProductBrand, setFetchProductBrand] = useState([]);
    useEffect(()=>{
        axios.get(SITE_URL+"/product/allProduct").then((res)=>{
            setFetchProductData(res.data);
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

    const [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        axios.get(SITE_URL + `/product/${id}`).then((res) => {
            setFetchData(res.data);
        }).catch((err) => {
            console.log("Error: " + err);
        });
    }, []);

    return (
        <Box sx={{
            backgroundColor: '#545F71',

            fontFamily: 'Inria Serif',
            color: '#FFFFFF',
        }}>
            <Navbar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: '#FFFFFF',
            }}>
                <Box sx={{
                    width: '30%',
                    margin: '10px',
                }}>
                    <Searchbar />
                </Box>
                <Box sx={{
                    width: '90%',
                }}>
                    <SearchOptions brands={fetchProductBrand} types={fetchProductType}/>
                </Box>

                <Box sx={{
                    color: '#000000',
                    marginTop: '20px',
                    width: '80%',
                }}>
                    <ProductCover data={fetchData}/>
                </Box>
                

                <Box sx={{
                    color: '#000000',
                    marginTop: '20px',
                    width: '80%',
                }}>
                    <ProductInfoBody />
                </Box>

                <Box sx={{
                    color: '#000000',
                    marginTop: '20px',
                    width: '80%',
                }}>
                    <ProductInfoProCon />
                </Box>
            </Box>




            <Footer />
        </Box>
    )
}

export default Product;