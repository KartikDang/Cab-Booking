import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    Skeleton,
    SkeletonText,
    Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api'
import { LightningLoader } from '../components/loader';

import { GoogleMap } from '@react-google-maps/api';

// import { MapComponent } from '../components/MapComponent';
// import {GoogleMapReact} from 'google-map-react';

import Map from "mapmyindia-react";
import MapComp from './MapComponent';

// import MapM from "mapmyindia-react";
// const center = { lat: 28.3588, lng: 75.5880 };
const center = { lat: 48.8584, lng: 2.2945 }
const Booking = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBSOmwzjcK94XmQx4CDjn2QoTUIcsNNRJE",
    })

    // return (
    //     <LightningLoader />
    // )

    console.log(isLoaded);


    if (!isLoaded) {

        return (    
            <div style={{ justifyContent: "center", textAlign: "center", marginTop: "10%" }}>

                <LightningLoader />
            </div>

        )
    }

    return (
        <MapComp/>
        // <MapComponent/>
    )

    // return (
    //     <ChakraProvider theme={theme}>
    //         <Flex
    //             position='relative'
    //             flexDirection='column'
    //             alignItems='center'
    //             // bgColor='blue.200'
    //             // bgImage='https://images.unsplash.com/photo-1647117181799-0ac3e50a548a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    //             bgPos='bottom'
    //             h='100vh'
    //             w='100vw'
    //         >
    //             <Box position='absolute' left={0} top={0} h='100%' w='100%'>

    //                 {/* Google Map Render */}
    //                 <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: "100%", height: "100%" }} />
    //                     {/* Display Marker */}

    //             </Box>

    //             <Box
    //                 p={4}
    //                 borderRadius='lg'
    //                 mt={4}
    //                 bgColor='white'
    //                 shadow='base'
    //                 minW='container.md'
    //                 zIndex='modal'
    //             >
    //                 <HStack spacing={3}>
    //                     <Input type='text' placeholder='Origin' style={{ width: "37%" }} />
    //                     <Input type='text' placeholder='Destination' style={{ width: "37%" }} />
    //                     <ButtonGroup>
    //                         <Button colorScheme='pink' type='submit' style={{ width: "fit-content" }}>
    //                             Calculate Distance
    //                         </Button>
    //                         <IconButton
    //                             aria-label='center back'
    //                             icon={<FaTimes />}
    //                             onClick={() => alert(123)}
    //                         />
    //                     </ButtonGroup>
    //                 </HStack>
    //                 <HStack spacing={4} mt={4} justifyContent='space-between'>
    //                     <Text>Distance: </Text>
    //                     <Text>Duration: </Text>
    //                     <IconButton
    //                         aria-label='center back'
    //                         icon={<FaLocationArrow />}
    //                         isRound
    //                         onClick={() => alert(123)}
    //                     />
    //                 </HStack>
    //             </Box>
    //         </Flex>
    //     </ChakraProvider>
    // );
}

export default Booking;
