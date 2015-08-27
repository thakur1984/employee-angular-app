using System.Web.Http;
using System.Web.Mvc;
using Employee.Resolver.ProductStore.Resolver;
using Employee.Service;
using Microsoft.Practices.Unity;
using Unity.Mvc5;

namespace Employee
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
          //  container.RegisterType<IEmployeeService, EmployeeService>(new HierarchicalLifetimeManager());
           // DependencyResolver.SetResolver(new UnityDependencyResolver(container));

            // Web API configuration and services 
            //var container = new UnityContainer();
            //container.RegisterType<IEmployeeService, EmployeeService>(new HierarchicalLifetimeManager());
            //config.DependencyResolver = new UnityResolver(container);
            //DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}