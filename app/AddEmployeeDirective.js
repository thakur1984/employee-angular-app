angular
	.module('myAngularApp').directive('thAddEmployee',function(){
		return{
		restrict: "E",
 		scope: false,
 		templateUrl: "AddEmployee.html",
		link:function(scope,elem,attr){
			
		}
		}
		
	});