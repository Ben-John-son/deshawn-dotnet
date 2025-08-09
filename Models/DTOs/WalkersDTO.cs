namespace deshawn.Models.DTOs;

public class WalkerDTO
{
  public int Id { get; set; }

  public string Name { get; set; }
  public DogDTO Dogs { get; set; }
  public CityDTO Cities { get; set; }
}
