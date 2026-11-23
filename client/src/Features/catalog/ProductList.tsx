import { Box } from "@mui/material";
import type { Product } from "../../app/Layout/Models/product";
import ProductCard from "./ProductCard";

// définition du type props pour le composant ProductList, qui inclut un tableau de produits
type props = {
    products: Product[];
   
  };

export default function ProductList({ products }: props) {
  return (
     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {products.map(product => (
         <ProductCard key={product.id} product={product} />
        ))}
   </Box>
  )
}
