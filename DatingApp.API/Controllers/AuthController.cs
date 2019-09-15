using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Models;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repository;
        public AuthController(IAuthRepository repository)
        {
            this._repository = repository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister) 
        {
            userForRegister.Username = userForRegister.Username.ToLower();

            if(await _repository.UserExists(userForRegister.Username))
                return BadRequest("User exists");

            var userToCreate = new User{Username = userForRegister.Username};
            var createdUser = await _repository.Register(userToCreate, userForRegister.Password);

            return StatusCode(201);
        }
    }
}