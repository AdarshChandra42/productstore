import { Button, Container, useColorModeValue, VStack, Box, Input, Heading, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product"

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });
    //useState hook returns an array with exactly two elements
    //this useState hook is initialised with an object that has three properties: name, price, image
    //newProduct is a state variable that holds the current state values for name, price, image
    //setNewProduct is a function to update the state

    const toast = useToast()

    const {createProduct}= useProductStore() //importing global state here in this file

    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct)
        if(!success){
            toast({
                "title": "Error",
                description: message, 
                status: "error", 
                duration: 1500, //1.5s
                isClosable: true
            })
        }else{
            toast({
                "title": "Success",
                description: message, 
                status: "success", 
                duration: 1500, //1.5s
                isClosable: true
            })
        }
        setNewProduct({name:"", price: "", image: ""}) //to empty the input fields after u create a product
    }

    return (
        <Container maxW={"container.sm"}> 
            <VStack spacing={8}>

                <Heading as={"h1"} size={"xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>

                <Box 
                    w={"full"} bg={useColorModeValue("white", "gray.800")}
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder = 'Product Name'
                            name = 'name'
                            value = {newProduct.name}
                            //newProduct.name = "" so it will always show empty
                            onChange={(e)=> setNewProduct({ ...newProduct, name: e.target.value}) }
                            //... is the spread operator. It copies all existing properties from the 
                            //current newProduct object.                    
                            //name: e.target.value is setting the name property to whatever value was 
                            //typed in the input field    
                        />
                        <Input
                            placeholder = 'Price'
                            name = 'price'
                            type = 'number'
                            value = {newProduct.price}
                            onChange={(e)=> setNewProduct({ ...newProduct, price: e.target.value}) }
                        />
                        <Input
                            placeholder = 'Image URL'
                            name = 'image'
                            value = {newProduct.image}
                            onChange={(e)=> setNewProduct({ ...newProduct, image: e.target.value}) }
                        />

                        <Button colorScheme="blue" w="full" onClick={handleAddProduct}>
                            Add Product
                        </Button>

                    </VStack>
                </Box>

            </VStack>
        </Container>
    )
}

export default CreatePage