using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [DataContract]
    public class Response<T>
    {
        public Response() { }

        [DataMember(Name = "success")]
        public bool Success { get; set; }
        [DataMember(Name = "message")]
        public string Message { get; set; }
        public List<T> ObjList { get; set; }
        public T Obj { get; set; }

    }
}
