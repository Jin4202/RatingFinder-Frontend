import { Box, Button, FormControl, MenuItem, Select, Slider } from '@mui/material';
import MainImg from './MainPageImg.png';
import { useState } from 'react';

export function SearchCard(props) {
    const brands = props.brands;
    const types = props.types;
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            rowGap: '10px',

            backgroundColor: '#FFFFFF',
            padding: '20px',
        }}>
            <Box>
                <Searchbar />
            </Box>
            <Box>
                <></>
            </Box>
            <Box>
                <SearchOptions brands={brands} types={types}/>
            </Box>
            <Box sx={{
                marginLeft: '20px',
            }}>
                <ProductLists />
            </Box>
        </Box>
    )
}

function Searchbar(props) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',

            borderStyle: 'solid',
            borderRadius: '25px',
            borderWidth: '1px',
            borderColor: '#292D3280',

            color: '#292D3280',

            padding: '5px',
            paddingLeft: '10px',
        }}>
            <Box>
                <svg width="27.34" height="25" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <path d="M15.4851 2C22.6621 2 28.472 7.3125 28.472 13.875C28.472 20.4375 22.6621 25.75 15.4851 25.75C8.30811 25.75 2.49817 20.4375 2.49817 13.875C2.49817 9.25 5.38263 5.25 9.6068 3.2875" stroke="#292D32" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.8391 27L27.105 24.5" stroke="#292D32" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
            }}>
                Search
            </Box>
        </Box>
    )
}

function SearchOptions(props) {
    const brands = props.brands;
    const types = props.types;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',

            backgroundColor: '#576C90',

            padding: '20px',
            borderRadius: '0px 20px 0px 20px',
        }}>
            <Box sx={{
                fontSize: '20px',
                fontWeight: 'bold',
            }}>
                Search Options
            </Box>
            <Box sx={{
                marginTop: '10px',
            }}>
                <Box sx={{
                    marginBottom: '10px',
                }}>
                    Category
                </Box>
                <SearchDropdown>
                    <MenuItem value="">
                        <em>Product</em>
                    </MenuItem>
                    {types.length > 0 ? types.map((type) => {
                        return (
                            <MenuItem value={type}>{type}</MenuItem>
                        )
                    }) : <MenuItem value={'loading'}>loading..</MenuItem>}
                </SearchDropdown>
            </Box>
            <Box sx={{
                marginTop: '10px',
            }}>
                <Box sx={{
                    marginBottom: '10px',
                }}>
                    Brands
                </Box>
                <SearchDropdown>
                    <MenuItem value="">
                        <em>Brand</em>
                    </MenuItem>
                    {console.log(brands)}
                    {brands.length > 0 ? brands.map((brand) => {
                        return (
                            <MenuItem value={brand}>{brand}</MenuItem>
                        )
                    }) : <MenuItem value={'loading'}>loading..</MenuItem>}
                </SearchDropdown>
            </Box>
            <Box sx={{
                marginTop: '10px',
            }}>
                <Box sx={{
                    marginBottom: '10px',
                }}>
                    Price Range
                </Box>
                <SearchSlider />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
            }}>
                <Button sx={{
                    width: '90%',
                    backgroundColor: '#669EF1',
                    fontSize: '20px',
                    color: '#FFFFFF',
                }}>
                    Search
                </Button>
            </Box>
        </Box>
    )
}
function SearchDropdown(props) {
    const [option, setOption] = useState('');
    return (
        <FormControl fullWidth
            sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
            }}>
            <Select
                value={option}
                displayEmpty
                onChange={(event) => { setOption(event.target.value) }}
            >
                {props.children}
            </Select>
        </FormControl>
    )
}
function SearchSlider(props) {
    const [value, setValue] = useState([0, 10]);
    const minDistance = 10;
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    const marks = [
        {
            value: 0,
            label: '$0',
        },
        {
            value: 100,
            label: '$100',
        },
        {
            value: 200,
            label: '$200+',
        },
    ];
    return (
        <Box sx={{
            paddingRight: '10px',
        }}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => {
                    return `$${value}`
                }}
                marks={marks}
                min={0}
                max={200}
                disableSwap
                sx={{
                    color: '#FFFFFF',
                    '& .MuiSlider-markLabel': {
                        color: '#FFFFFF',
                    }
                }}
            />
        </Box>

    )
}

function ProductLists(props) {
    return (
        <Box sx={{
            color: '#000000',
        }}>
            <Box sx={{
                borderBottomStyle: 'solid',
                borderWidth: '1px',
                padding: '10px',

                fontWeight: 'bold',
                fontSize: '20px',
            }}>
                Headphones
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Product name={'Product A'} price={100} rating={4} />
                <Product name={'Product B'} price={100} rating={4} />
                <Product name={'Product C'} price={100} rating={4} />
            </Box>

        </Box>
    )
}
function Product(props) {
    const name = props.name;
    const price = props.price;
    const rating = props.rating;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
        }}>
            <Box sx={{
                width: '200px',
                height: '200px',
                backgroundColor: '#D9D9D9',
                borderRadius: '10px',
            }}>

            </Box>
            <Box>
                {name}
            </Box>
            <Box>
                $ {price}
            </Box>
            <Rating rating={rating} />
        </Box>
    );
}

function Rating(props) {
    const rating = props.rating;
    function getStar(num) {
        let stars = [];
        for (let i = 0; i < num; i++) {
            stars.push(
                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5161 0L12.3871 12H0L10.3226 20L6.19355 32L16.5161 24L26.8387 32L22.7097 20L33.0323 12H20.6452L16.5161 0Z" fill="#FAFF00" />
                </svg>
            );
        }
        for (let i = 0; i < 5 - num; i++) {
            stars.push(
                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5161 0L12.3871 12H0L10.3226 20L6.19355 32L16.5161 24L26.8387 32L22.7097 20L33.0323 12H20.6452L16.5161 0Z" fill="#E7E7E7" />
                </svg>
            );
        }
        return stars;
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {getStar(rating)}
        </Box>
    )
}


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
                margin: '10px',
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
                DO SMALL GOOD THINGS FOR OTHERS
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
