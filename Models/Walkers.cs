namespace deshawn.Models;

public class Walker
{
  public int Id { get; set; }

  public string Name { get; set; }
  public int CityId { get; set; }
  public string Picture { get; set; }
  public List<City> Cities { get; set; } = new();
  public List<Dog> Dogs { get; set; } = new();
}
