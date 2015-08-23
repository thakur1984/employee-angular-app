// var employee= {
//     name:"Uday thakur",
//     qualification:"Nursery",
//     displayName:function(){
//         console.log(this.name);
//     }
// }
// employee.diplayQualification=function(){
//     console.log(this.qualification);
//     console.log(employee.qualification);
// }
// employee.diplayQualification();


function Employee(name){
    
    //private variable
    var panCard="abc",qualification="MCA";
    //public variables or instanse
    this.Name=name;
    
    this.displayName=function(){
        console.log("My name is: " + this.Name);
    }
    
    this.getQualification=function(){
        console.log("My qualification is: "+qualification);
    }
    //public function access their private variable
    this.getPancard=function(){
        console.log("Pancard is: "+ panCard);
        return panCard;
    }
}

//var employee=Employee();
var employee=new Employee("Raman");
employee.displayName();
//employee.getPancard();
employee.getQualification();
//attach prototype to object and  add public function
Employee.prototype.get26AsForm=function(){
    this.totalTax="1234";
  var pancard=this.getPancard();
   console.log("employee name:"+ this.Name  +"pan card number: "+ pancard +" do not have any 26as: "+ this.totalTax);
}

employee.get26AsForm();
//console.log(employee.totalTax);
