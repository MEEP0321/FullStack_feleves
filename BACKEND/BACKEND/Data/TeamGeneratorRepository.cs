using BACKEND.Models;

namespace BACKEND.Data
{
    public class TeamGeneratorRepository : ITeamGeneratorRepository
    {
        public TeamGeneratorRepository()
        {

        }

        public IEnumerable<IEnumerable<Player>> GenerateTeams(TeamGenerator teamGenerator)
        {
            TeamGenerator tg = teamGenerator;

            List<List<Player>> Teams = new List<List<Player>>();

            for (int i = 0; i < tg.NumberOfTeams; i++)
            {
                List<Player> singleTeam = new List<Player>();

                Teams.Add(singleTeam);
            }

            tg.Players = tg.Players.OrderBy(x => x.Age).ToList();

            for (int i = 0; i < tg.Players.Count; i++)
            {
                Teams[i%tg.NumberOfTeams].Add(tg.Players[i]);
            }

            return Teams;
        }

    }
}
