using deshawn.Models;
using deshawn.Models.DTOs;

List<Dog> dogs = new List<Dog>()
{
    new Dog
    {
        Id = 1,
        Name = "Silvio",
        CityId = 1,
        Picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4rRySxpTsH4rEc2CTfz4MGFtBc2LkT6-5g&s"
    },
     new Dog
    {
        Id = 2,
        Name = "Gaz",
        CityId = 3,
        Picture = "https://people.com/thmb/5uLym456xzuJ5MwbPIdTJiyGoSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(904x0:906x2)/pug-1-0d4c0f988e3d421ca4954917b1450664.jpg"
    },
     new Dog
    {
        Id = 1,
        Name = "Ranger",
        CityId = 4,
        Picture = "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg"
    },
     new Dog
    {
        Id = 1,
        Name = "Marmaduke",
        CityId = 2,
        Picture = "https://dbw3zep4prcju.cloudfront.net/animal/21a71a56-46d2-4d58-af3d-0eecdf468b6f/image/0ad27da7-55e6-463d-8702-e4ee2f604d7b.jpg?versionId=q1i7VOPIB3.amz3kRoOdxYlspIJaYqnE&bust=1754353552&width=600"
    },
     new Dog
    {
        Id = 1,
        Name = "Snoopy",
        CityId = 7,
        Picture = "https://www.aaha.org/wp-content/uploads/2025/02/Untitled-design-2025-02-13T124301.602-1500x1031.png"
    },
     new Dog
    {
        Id = 1,
        Name = "Maggie",
        CityId = 3,
        Picture = "https://static01.nyt.com/images/2024/06/30/multimedia/30sp-scipet-manifesto-vzjw/30sp-scipet-manifesto-vzjw-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    }

};

List<City> cities = new List<City>()
{
    new City
    {
        Id = 1,
        Name = "Cookeville",
        State = "Tennessee"
    },
    new City
    {
        Id = 2,
        Name = "Nashville",
        State = "Tennessee"
    },
    new City
    {
        Id = 3,
        Name = "Atlanta",
        State = "Georgia"
    },
    new City
    {
        Id = 4,
        Name = "Raleigh",
        State = "North Carolina"
    },
    new City
    {
        Id = 5,
        Name = "Louisville",
        State = "Kentucky"
    },
    new City
    {
        Id = 6,
        Name = "Newark",
        State = "Ohio"
    },
    new City
    {
        Id = 7,
        Name = "Detroit",
        State = "Michigan"
    },
    new City
    {
        Id = 8,
        Name = "Topeka",
        State = "Kansas"
    },
};

List<Walker> walkers = new List<Walker>()
{
    new Walker
    {
        Id = 1,
        Name = "Horus",
        CityId = 3
    },
     new Walker
    {
        Id = 2,
        Name = "Magnus",
        CityId = 2
    },
    new Walker
    {
        Id = 3,
        Name = "Mortarion",
        CityId = 6
    },
     new Walker
    {
        Id = 4,
        Name = "Sanguinius",
        CityId = 1
    },
    new Walker
    {
        Id = 5,
        Name = "Konrad",
        CityId = 7
    },
    new Walker
    {
        Id = 6,
        Name = "Angron",
        CityId = 5
    },
    new Walker
    {
        Id = 7,
        Name = "Lionel",
        CityId = 2
    },
    new Walker
    {
        Id = 8,
        Name = "Celestine",
        CityId = 3
    },
     new Walker
    {
        Id = 9,
        Name = "Cassia",
        CityId = 2
    },
     new Walker
    {
        Id = 10,
        Name = "Idira",
        CityId = 7
    },
     new Walker
    {
        Id = 11,
        Name = "Severina",
        CityId = 1
    },
     new Walker
    {
        Id = 12,
        Name = "Amalia",
        CityId = 4
    },
};





var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});


app.MapGet("/api/dogs", () =>
{
    return dogs.Select(d => new DogDTO
    {
        Id = d.Id,
        Name = d.Name,
        CityId = d.CityId,
        Picture = d.Picture
    });
});

app.Run();
