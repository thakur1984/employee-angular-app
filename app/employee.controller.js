angular
	.module('myAngularApp').controller('employee',['$scope',function($scope){
		// $scope.employee={};
		// $scope.salaryHike=[];
		// $scope.employee.eName="Raman thakur";
		// $scope.employee.designation="Lead software enginneer";
		// 
		// $scope.hikeSalary=function(){
		// 	$scope.salaryHike.push($scope.employee.salary);
		// }
		
		$scope.employeeList=[{
			eName: "Raman thakur",
			designation:"Raman thakur"
		}];
		
		$scope.addEmployee=function(){
			
			$scope.employeeList.push({
			eName:$scope.employee.eName,
			designation:$scope.employee.designation
		});
		
		}
	}]);