using System;
using Microsoft.AspNetCore.Mvc;

namespace MiniCarAdd.Models
{
    public class Car : Vehicle
    {
        public int NumOfDoors { get; set; }

        public int NumOfWheels { get; set; }

        public string BodyType { get; set; }

        public string Engine { get; set; }

        public Car(
            string make,
            string model,
            int numOfDoors,
            int numOfWheels,
            string bodyType,
            string engine) : base("car", make, model)
        {
            this.NumOfDoors = numOfDoors;
            this.NumOfWheels = numOfWheels;
            this.BodyType = bodyType;
            this.Engine = engine;
        }

    }
}
