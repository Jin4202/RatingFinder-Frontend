import { Box } from "@mui/material";

function Navbar(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            paddingLeft: '40px',
            paddingRight: '40px',
        }}>
            <Box sx={{
                display: 'flex',
                alignContent: 'center',

                fontWeight: 'bold',
            }}>
                RATING FINDER
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignContent: 'center',
                width: '30%',

                fontSize: '15px',
            }}>
                <Box>
                    Login
                </Box>
                <Box>
                    Pricing
                </Box>
                <Box>
                    About
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar;