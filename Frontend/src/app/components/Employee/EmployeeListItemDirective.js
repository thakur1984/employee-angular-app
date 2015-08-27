  
'use strict';
class  EmployeeListController {
	   constructor(EmployeeService, $state)
	   {
		    this.deleteEmployee = function (employee) {
   				EmployeeService.deleteEmployee(employee).then(()=>{
					
				});
   			};
		   
   			this.editEmployee = function (employee) {
				employee.DateOfJoining = new Date(employee.DateOfJoining);
   				$state.go('Edit', {
   					employee: employee
   				});
				
   			};
	   }
   }

EmployeeListController.$inject=['EmployeeService', '$state'];

 angular.module('myAngularApp')
   	.directive('empEmployeeListItem', function(){
	   	return {
			restrict: "E",
			scope: {
   			employees: '='
			},
			templateUrl: "app/components/Employee/EmloyeeListItem.html",
			controller:EmployeeListController,
			controllerAs: 'empList'
		}
   });