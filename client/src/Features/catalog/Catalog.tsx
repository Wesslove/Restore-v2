import type { Product } from '../../app/Layout/Models/product'
import ProductList from './ProductList'

// Ce composant Catalog reçoit les produits et la fonction addProduct en tant que props depuis le composant parent App. Il affiche la liste des produits et un bouton pour ajouter un nouveau produit.
type Props = {
    products: Product[] // Le tableau de produits à afficher
  
}

// Le composant Catalog est responsable de l'affichage des produits et de la gestion de l'ajout de nouveaux produits. Il utilise les props pour accéder aux produits et à la fonction addProduct.
export default function Catalog({ products }: Props) {
  return (
    <>
  
    <ProductList products={products} /> {/* Affiche la liste des produits en utilisant le composant ProductList */}

    
    </>
  )
}
