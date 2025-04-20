import {create} from "zustand" 

export const useProductStore = create((set) => ({
    products:[], 
    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false, message:"Please fill in all fields."}
        }
        const res = await fetch("/api/products", {
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify(newProduct)
        }) //api goes to localhost cuz u mentioned it in vite.config.js
        const data = await res.json(); 
        set((state)=>({products:[...state.products, data.data]}))   
        return { success: true, message: "Product created successfully"};
    }
}))
// if you have something like ({}), i.e., a function wrapped within brackets
//that means it is returning an object. This is basic Javascript.

//const [state, setstate] = useState([]) this is local state

//but this is a global state cuz we can use it any components in our application 

//const { products } = useProductStore() //global state can be imported like this anywhere