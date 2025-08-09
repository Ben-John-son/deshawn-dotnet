namespace deshawn.Models.DTOs;

public class CityDTO
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string State { get; set; }
  public WalkerDTO Walkers { get; set; }
  public DogDTO Dogs { get; set; }
}
