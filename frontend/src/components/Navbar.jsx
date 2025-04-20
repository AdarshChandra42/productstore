import { Button, Container, HStack, Flex, Text, useColorMode } from '@chakra-ui/react'
import {PlusSquareIcon} from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import React from 'react'
import {IoMoon} from "react-icons/io5"
import {LuSun} from "react-icons/lu"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); 
  return (
    <Container maxW="1140px" px={4}> 
    {/* to add color to the navbar use, 
    bg={useColorModeValue("gray.100", "gray.900")} 
    first value is for light mode, 2nd value is for dark*/}
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text> {/*look into chakra UI docs*/}

        <HStack>

          <Link to = {"/create"}>
            <Button> 
              <PlusSquareIcon fontSize={20}/>
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {/*{colorMode === "light" ? "🌙" : "🌞"}*/}
            {colorMode === "light" ? <IoMoon />: <LuSun size = "20" />}
          </Button>

        </HStack>

      </Flex>
    </Container>
  );
};

export default Navbar;