using System;

namespace Angular_CoreApi.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public Boolean IsMain { get; set; }

        public Users Users { get; set; }
        public int UsersId { get; set; }
    }
}