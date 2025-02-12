// this file will tell what will be the struchtre of of your data


const {gql} = require('graphql-tag')

const typeDefs = gql`
type Product{
id:ID!
title:String!
category:String!
price:Float!
instock:Boolean!

}

type Query{
products:[Product!]!
product(id:ID!):Product
 
}

type Mutation {

createProduct(title:String!
category:String!
price:Float!
instock:Boolean!
):Product

deleteProduct(id:ID!):Boolean
 updateProduct(
    id: ID!
    title: String
    category: String
    price: Float
    instock: Boolean
  ): Product

}


`;

module.exports = typeDefs