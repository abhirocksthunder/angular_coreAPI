using System.Threading.Tasks;
using Angular_CoreApi.Models;

namespace Angular_CoreApi.Data
{
    public interface IAuthRepository
    {
         Task<Users> Register(Users user, string password);

         Task<Users> Login(string username, string password);

         Task<bool> UserExists(string Username);
    }
}