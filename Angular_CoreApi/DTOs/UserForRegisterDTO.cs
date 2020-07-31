using System.ComponentModel.DataAnnotations;

namespace Angular_CoreApi.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string username { get; set; }
        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage="Password length must be between 4 and 8 characters")]
        public string password { get; set; }
    }
}