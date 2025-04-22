import {create} from "zustand" 
//zustand is a modern and lightweight state management library for React applications.
//create function from Zustand is used to create a store (a place to keep your data)
//a store is a global container for your data that any component can access.

export const useProductStore = create((set) => ({
    //Here we are creating a store called useProductStore
    products:[], 
    setProducts: (products) => set({products}),
    //set is a function provided by zustand to update the store's state.
    createProduct: async(newProduct) => { //newproduct object 
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
        const data = await res.json(); //res.json() is jsonified version of the response received by the server
        set((state)=>({products:[...state.products, data.data]}))   
        //updating product store
        return { success: true, message: "Product created successfully"};
    },
    fetchProducts: async() => {
        const res = await fetch ("api/products");
        const data = await res.json(); //res.json() is an asynchronous function that returns a promise

        set({products:data.data})
    },
    deleteProduct: async (pid) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
		return { success: true, message: data.message };
	},
	updateProduct: async (pid, updatedProduct) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.data : product)),
		}));

		return { success: true, message: data.message };
	},
}));
// if you have something like ({}), i.e., a function wrapped within brackets
//that means it is returning an object. This is basic Javascript.

//const [state, setstate] = useState([]) this is local state

//but this is a global state cuz we can use it any components in our application 

//const { products } = useProductStore() //global state can be imported like this anywhere