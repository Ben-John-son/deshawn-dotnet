namespace deshawn.Models.DTOs;

public class WalkerDTO
{
  public int Id { get; set; }
public string Picture { get; set; }
  public string Name { get; set; }
  public int CityId { get; set; }
  
  public List<DogDTO> Dogs { get; set; } = new();
  public List<CityDTO> Cities { get; set; } = new();
}
