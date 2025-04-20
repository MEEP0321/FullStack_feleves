using BACKEND.Models;

namespace BACKEND.Data
{
    public interface ITeamGeneratorRepository
    {
        public IEnumerable<IEnumerable<Player>> GenerateTeams(TeamGenerator teamGenerator);
    }
}