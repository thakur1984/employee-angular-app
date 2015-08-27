using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service
{
    public class EmployeeModel
    {
        private static List<Employee> _employeeList;

        public static List<Employee> EmployeeList
        {
           
            get
            {
                return _employeeList ?? (_employeeList = new List<Employee>
                {
                   new Employee()
                    {
                        Sno = 1,
                        FirstName = "Raman",
                        LastName = "Thakur",
                        Team = "TEM",
                        Area = "Javascript",
                        Title = "Tech Lead",
                        DateOfJoining = DateTime.UtcNow
                    },
                    new Employee()
                    {
                        Sno = 2,
                        FirstName = "Navkirat",
                        LastName = "Singh",
                        Team = "TEM",
                        Area = "Javascript",
                        Title = "SSE",
                        DateOfJoining = DateTime.UtcNow
                    },
                     new Employee()
                    {
                        Sno = 3,
                        FirstName = "Neeru",
                        LastName = "Verma",
                        Team = "TEM",
                        Area = "Management",
                        Title = "Manager",
                        DateOfJoining = DateTime.UtcNow
                    },
                     new Employee()
                    {
                        Sno = 4,
                        FirstName = "Markus",
                        LastName = "Sula",
                        Team = "TEM",
                        Area = "Javascript",
                        Title = "SSE",
                        DateOfJoining = DateTime.UtcNow
                    }
                });
            }
        }
    }
}
