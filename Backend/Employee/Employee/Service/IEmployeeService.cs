using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetEmployee();

        void AddEmployee(Employee employee);

        void EditEmployee(Employee employee);

        void DeleteEmployee(int id);
    }
}
