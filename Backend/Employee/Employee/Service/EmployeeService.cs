using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Service
{
    public class EmployeeService : IEmployeeService
    {
        public IEnumerable<Employee> GetEmployee()
        {
            return EmployeeModel.EmployeeList;
        }


        public void AddEmployee(Employee employee)
        {
            var serialNo = EmployeeModel.EmployeeList.Count + 1;
            employee.Sno = serialNo;
            EmployeeModel.EmployeeList.Add(employee);
        }


        public void EditEmployee(Employee employee)
        {
            var empObj = EmployeeModel.EmployeeList.FirstOrDefault(e => e.Sno == employee.Sno);
            empObj.Sno = employee.Sno;
            empObj.FirstName = employee.FirstName;
            empObj.LastName = employee.LastName;
            empObj.Team = employee.Team;
            empObj.Area = employee.Area;
            empObj.Title = employee.Title;
            empObj.DateOfJoining = employee.DateOfJoining;
        }


        public void DeleteEmployee(int id)
        {
            var empObj = EmployeeModel.EmployeeList.FirstOrDefault(e => e.Sno == id);
            EmployeeModel.EmployeeList.Remove(empObj);
        }
    }
}
