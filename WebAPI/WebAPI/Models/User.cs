using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {
        [Key]
        public int userId { get; set; }

        [Column(TypeName = "nvarchar(80)")]
        public string FirstName { get; set; }
        
        [Column(TypeName = "nvarchar(80)")]
        public string LastName{ get; set; }
        
        [Column(TypeName = "nvarchar(80)")]
        public string Email { get; set; }
        
        [Column(TypeName = "nvarchar(256)")]
        public string Password { get; set; }
    }
}
