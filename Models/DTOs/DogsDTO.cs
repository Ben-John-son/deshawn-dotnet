namespace deshawn.Models.DTOs;

public class DogDTO
{
  public int Id { get; set; }
  public string Name { get; set; }
  public int CityId { get; set; }
  public string Picture { get; set; }
public WalkerDTO Walker { get; set; }
public CityDTO Cities { get; set; }
}
