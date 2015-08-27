'use strict';
class Employees {
   
	constructor($http,$q) {
		this.$http=$http;
		this.employeeList=[];
		this.$q=$q;
	}
	
	getListOfEmployee() {
		var deferred = this.$q.defer();
		this.$http.get('http://localhost:2771/api/employee/get').
				then((response)=> {
					this.employeeList=response.data;
					deferred.resolve(this.employeeList);
				}, function(response) {
					deferred.reject();
				});
		return deferred.promise;
	}
	
	addEmployee(employee) {
		  var deferred = this.$q.defer();
		  var request = this.$http.post('http://localhost:2771/api/employee/add', {
				FirstName: employee.FirstName,
				LastName: employee.LastName,
				Team:employee.Team,
				Area: employee.Area,
				Title: employee.Title,
				DateOfJoining:employee.DateOfJoining
        });
		request.success((employee)=>{
			deferred.resolve();
		});
		return deferred.promise;
	}
	
	deleteEmployee(employee) {
		var deferred = this.$q.defer();
		this.$http.get(employee.Actions[2].Url,{data :employee.Sno}).then(()=>{
			var index = this.employeeList.indexOf(employee);
			this.employeeList.splice(index, 1);
			deferred.resolve();
	 });
		return deferred.promise;
	}

	editEmployee(employee) {
	     var deferred = this.$q.defer();
		 var request = this.$http.post('http://localhost:2771/api/Employee/edit', {
                Sno:employee.Sno,
				FirstName: employee.FirstName,
				LastName: employee.LastName,
				Team:employee.Team,
				Area: employee.Area,
				Title: employee.Title,
				DateOfJoining:employee.DateOfJoining
        });
		request.success(()=>{
			deferred.resolve();
		});
		return deferred.promise;
	}

}
Employees.$inject = ['$http','$q'];

angular
	.module('myAngularApp')
	.service('EmployeeService', Employees);
