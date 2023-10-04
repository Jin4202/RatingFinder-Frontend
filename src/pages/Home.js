import { Box } from "@mui/material";
import Navbar from "../components/HomeComponents/Navbar";
import { GetStart, MainButtons, MainPost, SearchCard, Testimonials, TopRatingOn } from "../components/HomeComponents/HomeContents";
import Footer from "../components/HomeComponents/Footer";

function Home(props) {
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
                <SearchCard />
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