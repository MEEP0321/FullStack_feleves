namespace BACKEND.Models
{
    public class TeamGenerator
    {
        public TeamGenerator(int numberOfTeams, List<Player> players)
        {
            NumberOfTeams = numberOfTeams;
            Players = players;
        }

        public int NumberOfTeams { get; set; }

        public List<Player> Players { get; set; }
    }
}
