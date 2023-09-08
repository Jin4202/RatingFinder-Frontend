import { Box } from "@mui/material";

export default function Footer(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            
            fontSize: '15px',
        }}>
            <Box>
                Rating Finder
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    HOME
                </Box>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    ABOUT
                </Box>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    CATEGORIES
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    MARKET
                </Box>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    PRICING
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    CONTACT
                </Box>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    INSTAGRAM
                </Box>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    LINKEDIN
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    marginBottom: '5px',
                }}>
                    JOIN OUR NEWSLETTER
                </Box>
                <Box sx={{
                    display: 'flex',
                    borderRadius: '20px',
                    backgroundColor: '#D9D9D980',
                }}>
                    <Box sx={{
                        padding: '10px',
                    }}>
                        EMAIL ADDRESS
                    </Box>
                    <Box sx={{
                        borderRadius: '20px',
                        backgroundColor: '#4EC6D0',
                        padding: '10px',
                    }}>
                        Submit
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}