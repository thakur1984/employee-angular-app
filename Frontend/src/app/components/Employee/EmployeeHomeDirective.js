'use strict';
angular
    .module('myAngularApp')
    .directive('empEmloyeeHome', function(){
			   return{
				   restrict:"E",
				   templateUrl:"app/components/Employee/EmployeeHome.html"
			   }
			   });
  