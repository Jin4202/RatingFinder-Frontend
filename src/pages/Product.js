import { Box } from "@mui/material";
import Navbar from "../components/HomeComponents/Navbar";
import Footer from "../components/HomeComponents/Footer";
import { ProductCover, ProductInfoBody, ProductInfoProCon, SearchOptions, Searchbar } from "../components/ProductComponents/ProductContents";

function Product(props) {
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
                    <SearchOptions />
                </Box>

                <Box sx={{
                    color: '#000000',
                    marginTop: '20px',
                    width: '80%',
                }}>
                    <ProductCover />
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