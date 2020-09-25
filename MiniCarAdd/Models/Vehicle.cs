using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace MiniCarAdd.Models
{
    public abstract class Vehicle
    {
        public long Id { get; set; }

        public string Type { get; set; }

        public string Make { get; set; }

        public string Model { get; set; }

        protected Vehicle(string type, string make, string model)
        {
            this.Type = type;
            this.Make = make;
            this.Model = model;
        }
    }
}
