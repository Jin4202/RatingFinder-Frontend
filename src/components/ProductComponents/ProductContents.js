import { Box, Button, FormControl, MenuItem, Select, Slider } from "@mui/material";
import { useState } from "react";

export function Searchbar(props) {
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

export function SearchOptions(props) {
    const brands = props.brands;
    const types = props.types;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',

            backgroundColor: '#576C90',

            padding: '20px',
            borderRadius: '20px',
        }}>
            <Box sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '10px',
            }}>
                Search Options
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
                paddingRight: '10px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                }}>
                    <Box sx={{
                        margin: '10px',
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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '45%',
                }}>
                    <Box sx={{
                        margin: '10px',
                    }}>
                        Brands
                    </Box>
                    <SearchDropdown>
                        <MenuItem value="">
                            <em>Brand</em>
                        </MenuItem>
                        {brands.length > 0 ? brands.map((brand) => {
                            return (
                                <MenuItem value={brand}>{brand}</MenuItem>
                            )
                        }) : <MenuItem value={'loading'}>loading..</MenuItem>}
                    </SearchDropdown>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
                paddingRight: '10px',
            }}>
                <Box sx={{
                    width: '45%',
                }}>
                    <Box sx={{
                        margin: '10px',
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
                    width: '40%',
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


        </Box>
    )
}
function SearchDropdown(props) {
    const [option, setOption] = useState('');
    return (
        <FormControl fullWidth
            sx={{
                backgroundColor: '#FFFFFF',
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

export function ProductCover(props) {
    const product = props.data;
    const name = product.name;
    const price = product.price;
    const rating = product.rating;
    const image = product.image;
    const brand = product.brand;
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: '100%',

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                margin: '10px',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',

                    backgroundColor: '#D9D9D9',
                    width: '300px',
                    height: '300px',
                    borderRadius: '10px',


                }}>
                    <img src={`data:image/png;base64, ${image}`} alt="Test" width='100%' height='auto'/>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    fontSize: '20px',

                    margin: '20px',
                    marginLeft: '40px',
                }}>
                    <Box sx={{
                        marginBottom: '2px',
                    }}>
                        {name}
                    </Box>
                    <Box sx={{
                        marginBottom: '2px',
                    }}>
                        $ {price}
                    </Box>
                    <Rating rating={rating} />
                    <Box sx={{
                        marginTop: 'auto',
                        marginBottom: '0px',
                    }}>
                        Manufacturer: {brand}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
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

export function ProductInfoBody(props) {
    const info = [
        'Production Information A',
        'Production Information B',
        'Production Information C',
        'Production Information D',
        'Production Information E',
        'Production Information F',
    ];
    return (
        <Box>
            <Box sx={{
                fontSize: '20px',
                fontWeight: 'bold',

                borderBottomStyle: 'solid',
                borderWidth: '1px',
                paddingBottom: '10px',
            }}>
                About the product
            </Box>
            <Box sx={{
                fontSize: '20px',
            }}>
                <ul>
                    {info.map((element) => {

                        return (
                            <li style={{
                                padding: '2px',
                            }}>
                                {element}
                            </li>
                        );
                    })}
                </ul>
            </Box>
        </Box>
    );
}

export function ProductInfoProCon(props) {
    const advantages = [
        'Advantage 1',
        'Advantage 2',
        'Advantage 3',
        'Advantage 4',
    ];
    const disadvantages = [
        'Disadvantage 1',
        'Disadvantage 2',
        'Disadvantage 3',
        'Disadvantage 4',
    ];
    return (
        <Box sx={{

        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                fontSize: '20px',

                borderBottomStyle: 'solid',
                borderWidth: '1px',
                paddingBottom: '10px',
            }}>
                Pros & Cons
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',

                fontSize: '20px',
            }}>
                <ul>
                    {advantages.map((element) => {

                        return (
                            <li style={{
                                padding: '2px',
                            }}>
                                {element}
                            </li>
                        );
                    })}
                </ul>

                <ul>
                    {disadvantages.map((element) => {

                        return (
                            <li style={{
                                padding: '2px',
                            }}>
                                {element}
                            </li>
                        );
                    })}
                </ul>
            </Box>
        </Box>
    );
}