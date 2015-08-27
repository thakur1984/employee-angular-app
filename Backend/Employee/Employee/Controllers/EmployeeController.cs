using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.ModelBinding;
using Employee.Service;
using Microsoft.Practices.ObjectBuilder2;
using Ploeh.Hyprlinkr;

namespace Employee.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {

        private IEmployeeService EmployeeService { get; set; }

        public EmployeeController(IEmployeeService employeeService)
        {
            EmployeeService = employeeService;
        }

        // GET api/employee
        [Route("get")]
        public IEnumerable<Service.Employee> GetEmployee()
        {

            var employeeList=EmployeeService.GetEmployee().ToList();
            employeeList.ForEach(AddUrl);
            return employeeList;
        }

        private void AddUrl(Service.Employee employee)
        {
            employee.Actions=new List<EmployeeAction>();
            employee.Actions.Insert(0, CreateAddAction());
            employee.Actions.Insert(1, CreateEditAction());
            employee.Actions.Insert(2, CreateDeleteAction(employee.Sno));
        }

        [Route("add")]
        [HttpPost]
        public void AddEmployee([FromBody]Service.Employee employee)
        {
            EmployeeService.AddEmployee(employee);
        }

        [Route("edit")]
        public void EditEmployee([FromBody]Service.Employee employee)
        {
            EmployeeService.EditEmployee(employee);
        }

        [Route("{id}")]
        [HttpGet]
        public void DeleteEmployee(int id)
        {
            EmployeeService.DeleteEmployee(id);
        }

        private EmployeeAction CreateAddAction()
        {
            return new EmployeeAction
            {
                Action = "INSERT",
                Url = "api/Employee/add"
            };
        }
        private EmployeeAction CreateEditAction()
        {
            return new EmployeeAction
            {
                Action = "UPDATE",
                Url = "api/Employee/edit"
            };
        }
        private EmployeeAction CreateDeleteAction(int id)
        {
            return new EmployeeAction
            {
                Action = "DELETE",
                Url = Url.GetLink<EmployeeController>(a => a.DeleteEmployee(id)).ToString()
            };
        }


    }
}
