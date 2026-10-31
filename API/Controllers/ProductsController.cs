using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
// Permet d'utiliser les fonctionnalités de l'API ASP.NET Core pour créer des contrôleurs et gérer les requêtes HTTP
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// Définition de l'espace de noms pour le contrôleur ProductsController

namespace API.Controllers
{
    // Permet de définir la route de l'API pour le contrôleur ProductsController
    [Route("api/[controller]")]
    // Indique que ce contrôleur est un contrôleur d'API et qu'il doit être traité comme tel par le framework ASP.NET Core
    [ApiController]
    // Définition de la classe ProductsController qui hérite de ControllerBase, ce qui permet de gérer les requêtes HTTP pour les produits
    public class ProductsController(StoreContext context) : ControllerBase
    {
        // Déclaration d'une variable privée pour stocker le contexte de la base de données
        
        [HttpGet] // Indique que cette méthode doit être appelée pour les requêtes HTTP GET
        public async Task<ActionResult<List<Product>>> GetProducts() // Méthode pour récupérer la liste des produits depuis la base de données
        {
          return  await context.Products.ToListAsync(); // Récupère tous les produits de la base de données et les convertit en liste
          
        }

        [HttpGet("{id}")] // Indique que cette méthode doit être appelée pour les requêtes HTTP GET avec un paramètre d'identifiant

        public async Task<ActionResult<Product>> GetProduct(int id) // Méthode pour récupérer un produit spécifique par son identifiant
        {
            var product = await context.Products.FindAsync(id); // Recherche le produit dans la base de données en utilisant l'identifiant fourni

            if (product == null) // Vérifie si le produit n'a pas été trouvé
            {
                return NotFound(); // Retourne une réponse HTTP 404 Not Found si le produit n'existe pas
            }

            return product; // Retourne le produit trouvé
        }

       
    }
}
