using API.Data;
using Microsoft.EntityFrameworkCore;

// Elle permet de créer une instance de l'application ASP.NET Core et de configurer les services nécessaires pour l'application.
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Elle permet d'ajouter les services nécessaires pour utiliser les contrôleurs dans l'application ASP.NET Core.
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

// Elle permet de configurer la base de données en utilisant Entity Framework Core avec SQLite comme fournisseur de base de données.
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//  Elle permet de configurer les services de l'application, comme les contrôleurs et la base de données.
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.MapOpenApi();
}

// app.UseHttpsRedirection();

// app.UseAuthorization();

// Elle permet de mapper les controllers sur les routes définies dans les controllers
app.MapControllers();

// Elle permet d'initialiser la base de données en utilisant la méthode InitDb de la classe DbInitializer.
DbInitializer.InitDb(app);

// Elle permet de démarrer l'application ASP.NET Core et de commencer à écouter les requêtes HTTP entrantes.
app.Run();
 