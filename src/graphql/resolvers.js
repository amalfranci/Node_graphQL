const products= require('../data/product')

const resolvers = {

    Query:{
        products:()=>products,
        product: (_, { id }) => {
            const product = products.find(item => item.id === id);
            if (!product) {
                throw new Error(`Product with ID ${id} not found`);
            }
            return product;
        },
   
    
    },
    Mutation:{
        createProduct:(_,{title,category,price,instock})=>{
           
            const newlyCreateProduct = {
                id:String(products.length+1),
                title,
                category,
                price,
                instock
            }
            products.push(newlyCreateProduct)
            return  newlyCreateProduct
        },
        deleteProduct:(_,{id})=>{

            const index = products.findIndex((product)=>product.id === id)
            if(index === -1) return false
            
             products.splice(index,1)
             return true
        },
       updateProduct: (_, { id, ...updates }) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) return null;

    // Merge only the provided fields, keeping the existing values for missing fields
    products[index] = {
        ...products[index],
        ...updates, // Only update provided fields
    };

    return products[index];
}

    }
    
}

module.exports = resolvers;