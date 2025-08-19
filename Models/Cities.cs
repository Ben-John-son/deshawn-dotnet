namespace deshawn.Models;

public class City
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string State { get; set; }
  public List<Walker> Walkers { get; set; } = new();
}
