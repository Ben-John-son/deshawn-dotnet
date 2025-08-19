namespace deshawn.Models.DTOs;

public class CityDTO
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string State { get; set; }
  public List<WalkerDTO> Walkers { get; set; } = new();
  public DogDTO Dogs { get; set; }
}
