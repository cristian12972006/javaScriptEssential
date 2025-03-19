const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 , especialization: 'JavaScrip'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, especialization: 'Java' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 , especialization: 'HTML'},
    //... Se pueden añadir más registros de empleados aquí
  ];

  function displayEmployees(){
    const  displayEmployees= employees.map((employee,index) => `<p> ${employee.id}: ${employee.name}: ${employee.age}: ${employee.department}: $${employee.salary}`).join('');
    document.getElementById('employeesDetails').innerHTML=displayEmployees;

  }
  function calculateTotalSalaries(){
    const totalSalario= employees.reduce((acc,employee) => acc+ employee.salary,0);
    document.getElementById('employeesDetails').innerHTML=totalSalario;
  }

  function displayHREmployees(){
    const hrEmployees=employees.filter(employee => employee.department=== 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;
  }

  function findEmployeeById(employeeId){
    const foundEmployee= employees.find(employee => employee.id===employeeId);

    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;

    }else{
        document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID'
    }


  }

  function findEmployeeByEspecialization(){
    const hrEmployees=employees.filter(employee => employee.especialization === 'JavaScrip');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;
  }


  