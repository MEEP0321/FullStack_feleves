using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Teams : ControllerBase
    {
        ITeamGeneratorRepository repo;
        public Teams(ITeamGeneratorRepository repo)
        {
            this.repo = repo;
        }


        [HttpPost]
        public IEnumerable<IEnumerable<Player>> Addplayer([FromBody] TeamGenerator tg)
        {
            return repo.GenerateTeams(tg);
        }

    }
}
