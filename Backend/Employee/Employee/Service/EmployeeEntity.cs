using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service
{
    public class Employee
    {
        public int Sno { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Team { get; set; }
        public string Area { get; set; }
        public string Title { get; set; }
        public DateTime DateOfJoining { get; set; }
        public IList<EmployeeAction> Actions { get; set; }
    }
}
