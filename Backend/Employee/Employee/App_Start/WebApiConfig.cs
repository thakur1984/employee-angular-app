using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Employee.Resolver.ProductStore.Resolver;
using Employee.Service;
using Microsoft.Practices.Unity;
using System.Net.Http.Headers;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.UI;

namespace Employee
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            var container = new UnityContainer();
            container.RegisterType<IEmployeeService, EmployeeService>(new HierarchicalLifetimeManager());
            config.DependencyResolver = new UnityResolver(container);
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { controller = "Employee", id = RouteParameter.Optional }
            );
        }
    }
}
