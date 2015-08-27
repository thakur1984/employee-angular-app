'use strict';
class EmployeeController {
	constructor(EmployeeService)
	{
		var viewModel = this;
	    EmployeeService.getListOfEmployee().then((employeeList)=>{
			viewModel.employees=employeeList;	
		});
	}
	
	
};

EmployeeController.$inject = ['EmployeeService'];

angular.module("myAngularApp").controller("EmployeeController", EmployeeController);