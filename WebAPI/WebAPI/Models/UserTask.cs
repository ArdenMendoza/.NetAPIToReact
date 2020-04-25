using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UserTask
    {
        [Key]
        public int taskId { get; set; }

        [Column(TypeName = "int")]
        public int taskOwnerId { get; set; }

        [Column(TypeName = "nvarchar(80)")]
        public string taskDescription { get; set; }

        [Column(TypeName = "bit")]
        public bool isDone { get; set; }



    }
}
