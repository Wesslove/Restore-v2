using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

// Classe représentant le contexte de la base de données pour l'application
public class StoreContext : DbContext
{
    // Constructeur pour initialiser le contexte de la base de données avec les options spécifiées
    public StoreContext(DbContextOptions options) : base(options)
    {
    }

   public DbSet<Product> Products { get; set; } // Représente la table des produits dans la base de données
}
