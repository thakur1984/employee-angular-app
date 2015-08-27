'use strict'; 
angular
 	.module('myAngularApp')
 	.directive('empAddEmloyee', function(){
	 return {
 		restrict: "E",
 		scope: {},
 		templateUrl: "app/components/Employee/AddEditEmployee.html",
 		controller: AddEmployeeController,
 		controllerAs: 'addEmp'
 	}
	 
 });

 class AddEmployeeController {
    constructor($scope, EmployeeService, $state, $stateParams)
	 {
		 var viewModel = this;
		 viewModel.IsEdit = false;

 	viewModel.teams = [{
 		name: 'TEM',
 		value: 'TEM'
 	}, {
 		name: 'SPARTEN',
 		value: 'SPARTEN'
 	}, {
 		name: 'P2P',
 		value: 'P2P'
 	}];
		 viewModel.employee = {};
		 if ($stateParams.employee != undefined) {
 		viewModel.employee = $stateParams.employee;
 		viewModel.IsEdit = true;
		 }
		 
		 viewModel.AddEmployee = function (employee) {
			 viewModel.employee = {};
			 if (viewModel.IsEdit)
			{
				EmployeeService.editEmployee(employee).then(()=>{
				$state.go('home');
				});
			
			}
 			else
			{
				EmployeeService.addEmployee(employee).then(()=>{
				$state.go('home');
				});
			}
 			

 		
 	}
 	viewModel.CancelAddEmployee = function () {
 		$state.go('home');
 	};
	 }
 };
 AddEmployeeController.$inject = ['$scope', 'EmployeeService', '$state', '$stateParams'];