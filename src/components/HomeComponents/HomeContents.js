import { Box, Button } from '@mui/material';
import MainImg from './MainPageImg.png';

export function MainPost(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '10%',
            paddingRight: '10%',
        }}>
            <Box sx={{
                width: '40%',
            }}>
                Discover Website Ratings And Write Reviews!
            </Box>
            <Box>
                <img src={MainImg} alt="Rating and Reviews" style={{ maxWidth: '250px' }} />
            </Box>
        </Box>
    )
}

export function MainButtons(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box>
                <Button
                    sx={{
                        backgroundColor: '#4EC6D0',
                        marginRight: '10px',
                        borderRadius: '50px',
                        padding: '20px',

                        fontFamily: 'Inria Serif',
                        color: '#FFFFFF', 
                    }}>
                    Search Website
                </Button>
                <Button
                    sx={{
                        borderRadius: '50px',
                        padding: '30px',

                        borderWidth: '2px',
                        borderColor: '#FFFFFF',

                        fontFamily: 'Inria Serif',
                        color: '#FFFFFF', 
                    }}
                >
                    Categories
                </Button>
            </Box>

        </Box>
    )
}

export function TopRatingOn(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
            <Box sx={{
                margin:'10px',
            }}>
                Top Ratings On
            </Box>
            <Box sx={{
                backgroundColor: '#D9D9D980',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                paddingTop: '40px',
                paddingBottom: '40px',
            }}>
                <Box sx={{
                    marginRight: '10px',
                }}>
                    Google
                </Box>
                <Box sx={{
                    marginRight: '10px',
                }}>
                    Apple
                </Box>
                <Box sx={{
                    marginRight: '10px',
                }}>
                    Facebook
                </Box>
                <Box sx={{
                    marginRight: '10px',
                }}>
                    Forbes
                </Box>
                <Box>
                    Linkedin
                </Box>
            </Box>

        </Box>
    )
}

export function Testimonials(props) {
    const members = [
        { name: 'Alex Cole', info: '“I have never seen this kind of website before!”' },
        { name: 'Brandi Jones', info: '“I have never seen this kind of website before!”' },
        { name: 'Selena Carina', info: '“I have never seen this kind of website before!”' }
    ]
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                TESTIMONIALS
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
            }}>
                READ WHAT OTHERS SAY
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {members.map((member, i) => {
                    return (
                        <MemberIntroduction key={i} data={member} />
                    )
                })}
            </Box>
        </Box>
    )
}

function MemberIntroduction(props) {
    const member = props.data;

    const profilePicSize = '100';
    const offset = profilePicSize / 2;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                position: 'relative',
                top: offset + 'px',
                height: profilePicSize + 'px',
                width: profilePicSize + 'px',
                backgroundColor: '#bbb',
                borderRadius: '50px',
            }}>

            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                borderRadius: '10px',
                backgroundColor: '#8F959F',

                paddingTop: (offset / 2) + 'px',
                margin: '10px',
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '40px',
                }}>
                    <Box sx={{
                        margin: '10px',
                    }}>
                        {member.name}
                    </Box>
                    <Box>
                        {member.info}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export function GetStart(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(to right, #6B97DD, #CCAAAA)',

            borderRadius: '50px',
            minHeight: '250px',
        }}>
            <Box sx={{
                margin: '20px',
            }}>
                Are you ready to rate your first website
            </Box>
            <Box sx={{
                margin: '20px',
            }}>
                DO SMALL GODD THINGS FOR OTHERS
            </Box>
            <Button sx={{
                borderRadius: '50px',
                backgroundColor: '#050505',
                padding: '10px',

                fontFamily: 'Inria Serif',
                color: '#FFFFFF', 
                fontWeight: 'Regular'
            }}>
                Get started
            </Button>
        </Box>
    )
}
