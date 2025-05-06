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

        //API post
        [HttpPost]
        public IEnumerable<IEnumerable<Player>> Addplayer([FromBody] TeamGenerator tg)
        {
            //Response-ba vissza is adja a generált csapatokat
            return repo.GenerateTeams(tg);
        }

    }
}
