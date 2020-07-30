using Angular_CoreApi.Models;
using Microsoft.EntityFrameworkCore;

namespace Angular_CoreApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }
    }
}