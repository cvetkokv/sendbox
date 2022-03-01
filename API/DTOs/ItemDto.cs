using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class ItemDto
    {
        public int Id { get; set; }
        public string Naziv { get; set; }

        public int UserId { get; set; }
    }
}