using System;
using MiniCarAdd.Services;
using Xunit;

namespace MiniCarAddTest.ServicesTests
{
    public class VehicleServiceTest
    {
        [Fact]
        public void TestCreateVehicle()
        {

            //Test to see if a car type has been succeffully added
            int initialSize = VehicleService.GetAllVehicles().Count;

            VehicleService.CreateCar("car", "2020", "Nissan-GTR", 2, 4, "Body type",
                "V8");

            int newSize = VehicleService.GetAllVehicles().Count;

            Assert.Equal(initialSize + 1, newSize);

            //Test to see if a non car type(e,g, boat) will throw a exception

            bool exceptionThrown = false;
            try
            {
                VehicleService.CreateCar("boat", "2005", "Toyota-GT86", 2, 4, "Body type",
                "V6");
            }
            catch
            {
                exceptionThrown = true;
            }

            Assert.True(exceptionThrown);

        }


    }
}
