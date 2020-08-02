using System.Collections.Generic;
using System.Threading.Tasks;
using Angular_CoreApi.Models;

namespace Angular_CoreApi.Data
{
    public interface IDataRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveAll();
        Task<IEnumerable<Users>> GetUsers();
        Task<Users> GetUser(int id);

    }
}