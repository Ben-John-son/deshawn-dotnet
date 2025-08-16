using deshawn.Models;
using deshawn.Models.DTOs;

List<Dog> dogs = new List<Dog>()
{
    new Dog
    {
        Id = 1,
        Name = "Silvio",
        CityId = 1,
        Picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4rRySxpTsH4rEc2CTfz4MGFtBc2LkT6-5g&s",
       WalkerId = 11
    },
     new Dog
    {
        Id = 2,
        Name = "Gaz",
        CityId = 3,
        Picture = "https://people.com/thmb/5uLym456xzuJ5MwbPIdTJiyGoSE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(904x0:906x2)/pug-1-0d4c0f988e3d421ca4954917b1450664.jpg",
        WalkerId = 1
     },
     new Dog
    {
        Id = 3,
        Name = "Ranger",
        CityId = 4,
        Picture = "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1722953201.3050609/fluffy-dogs-hero-1-1.jpg",
       WalkerId = 4
    },
     new Dog
    {
        Id = 4,
        Name = "Marmaduke",
        CityId = 2,
        Picture = "https://dbw3zep4prcju.cloudfront.net/animal/21a71a56-46d2-4d58-af3d-0eecdf468b6f/image/0ad27da7-55e6-463d-8702-e4ee2f604d7b.jpg?versionId=q1i7VOPIB3.amz3kRoOdxYlspIJaYqnE&bust=1754353552&width=600",
        WalkerId = 2
    },
     new Dog
    {
        Id = 5,
        Name = "Snoopy",
        CityId = 7,
        Picture = "https://www.aaha.org/wp-content/uploads/2025/02/Untitled-design-2025-02-13T124301.602-1500x1031.png",
        WalkerId = 5
    },
     new Dog
    {
        Id = 6,
        Name = "Maggie",
        CityId = 3,
        Picture = "https://static01.nyt.com/images/2024/06/30/multimedia/30sp-scipet-manifesto-vzjw/30sp-scipet-manifesto-vzjw-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
         WalkerId = 1
    },
    new Dog
{
    Id = 7,
    Name = "Luna",
    CityId = 5,
    Picture = "https://images.unsplash.com/photo-1601758124093-6ec2d7c4d8a9"
},
new Dog
{
    Id = 8,
    Name = "Rocky",
    CityId = 2,
    Picture = "https://images.unsplash.com/photo-1583511655826-05700d52f4ef"
},
new Dog
{
    Id = 9,
    Name = "Bella",
    CityId = 8,
    Picture = "https://images.unsplash.com/photo-1574158622682-e40e69881006"
},
new Dog
{
    Id = 10,
    Name = "Max",
    CityId = 4,
    Picture = "https://images.unsplash.com/photo-1507146426996-ef05306b995a"
},
new Dog
{
    Id = 11,
    Name = "Daisy",
    CityId = 6,
    Picture = "https://images.unsplash.com/photo-1593132308749-9b1e6f0c6b9b"
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
        CityId = 3,
        Picture = "https://media.istockphoto.com/id/1479694777/vector/bald-man-portrait-vector-illustration.jpg?s=612x612&w=0&k=20&c=DqQZ6x-_jU1bS9w7UJXiRPdURR_m5FfuFujjYCnTo1E="
    },
       
     new Walker
    {
        Id = 2,
        Name = "Magnus",
        CityId = 2,
        Picture = "https://i.pinimg.com/474x/90/f9/93/90f99396412b31bcf4ce3974000915ca.jpg"
    },
    new Walker
    {
        Id = 3,
        Name = "Mortarion",
        CityId = 6,
        Picture = "https://img.freepik.com/premium-vector/professional-man-cartoon-vector-illustration-isolated-white-background_1322206-68158.jpg"
        
    },
     new Walker
    {
        Id = 4,
        Name = "Sanguinius",
        CityId = 4,
        Picture = "https://i.pinimg.com/564x/a0/10/5c/a0105c9b38b1f5bdcc6743710cccfdcf.jpg"
    },
    new Walker
    {
        Id = 5,
        Name = "Konrad",
        CityId = 7,
        Picture = "https://img.freepik.com/premium-vector/presenting-black-male-teacher-presenter-85_905719-2996.jpg"
    },
    new Walker
    {
        Id = 6,
        Name = "Angron",
        CityId = 5,
        Picture = "https://previews.123rf.com/images/jemastock/jemastock1702/jemastock170205794/71772487-man-wearing-a-hat-cartoon-icon-over-white-background-colorful-design-vector-illustration.jpg",
      
    },
    new Walker
    {
        Id = 7,
        Name = "Lionel",
        CityId = 2,
        Picture = "https://static.vecteezy.com/system/resources/previews/014/318/872/non_2x/bearded-middle-aged-man-icon-cartoon-style-vector.jpg",
      
    },
    new Walker
    {
        Id = 8,
        Name = "Celestine",
        CityId = 3,
        Picture = "https://i.pinimg.com/736x/a0/28/9d/a0289d899e1022d5c7489030c8312ec0.jpg",
      
    },
     new Walker
    {
        Id = 9,
        Name = "Cassia",
        CityId = 2,
        Picture = "https://img.freepik.com/free-vector/smiling-woman-with-floral-dress_1308-174428.jpg?semt=ais_hybrid&w=740&q=80",
      
    },
     new Walker
    {
        Id = 10,
        Name = "Idira",
        CityId = 7,
        Picture = "https://img.freepik.com/premium-vector/vector-beautiful-woman-with-shocked-expression-surprised-smile_844724-3525.jpg",
       
    },
     new Walker
    {
        Id = 11,
        Name = "Severina",
        CityId = 1,
        Picture = "https://thumbs.dreamstime.com/b/confident-black-woman-cartoon-character-fashionable-outfit-standing-strong-illustration-clothes-hands-hips-378947978.jpg"
    },
     new Walker
    {
        Id = 12,
        Name = "Amalia",
        CityId = 4,
        Picture = "https://img.freepik.com/premium-vector/young-woman-with-gentle-smile-wearing-pastel-pink-shirt-blue-overalls_995281-805.jpg",
       
    },
};


foreach (var walker in walkers)
{
    walker.Dogs = dogs.Where(d => d.WalkerId == walker.Id).ToList();
};


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
});

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
        Picture = d.Picture,
        WalkerId = d.WalkerId,
        Walker = walkers.Where(w => w.Id == d.WalkerId).Select(w => new WalkerDTO
        {
            Id = w.Id,
            Name = w.Name
        }).FirstOrDefault()
        
    });
});


app.MapGet("/api/walkers", () =>
{
    return walkers.Select(s => new WalkerDTO
    {
        Id = s.Id,
        Name = s.Name,
        Picture = s.Picture,
        CityId = s.CityId,
        Dogs = dogs.Where(d => d.WalkerId == s.Id).Select(d => new DogDTO
        {
            Id = d.Id,
            Name = d.Name,
            WalkerId = d.WalkerId
        }).ToList()
    });
});

app.MapGet("/api/cities", () =>
{
    return cities.Select(c => new CityDTO
    {
        Id = c.Id,
        Name = c.Name,
        State = c.State
    });
});


app.MapPost("/api/walkers/{walkerId}/dogs/{dogId}", (int walkerId,int dogId) =>
{
    var dog = dogs.FirstOrDefault(d => d.Id == dogId);

dog.WalkerId = walkerId;
    return Results.Ok(dog);
});


app.MapPost("/api/newDog", (Dog dog) =>
{
    if (dog == null)
        return Results.BadRequest("Dog object is null");

    dog.Id = dogs.Any() ? dogs.Max(d => d.Id) + 1 : 1;
    dogs.Add(dog);

    return Results.Created($"/newDog/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        Picture = dog.Picture,
        CityId = dog.CityId
    });
});



app.Run();
