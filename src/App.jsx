function App() {

  const Student = {
    "name": "Rahul",
    "age": 21
  }

  const Product = {
    "productName": "Wireless Mouse",
    "quantity": 3,
    "price": 499
  }

  const Attendence = {
    "name": "Anjali",
    "isPresent": true
  }

  const NameFormating = {
    "firstName": "Amit",
    "lastName": "Sharma"
  }

  const LoanEMI = {
    "loanAmount": 500000,
    "interestRate": 8,
    "tenureYears": 5
  }
  const P = LoanEMI.loanAmount;
  const R = LoanEMI.interestRate / 12 / 100;
  const N = LoanEMI.tenureYears * 12;

  const factor = Math.pow(1 + R, N);
  const emi = (P * R * factor) / (factor - 1);


  const SubjectList = {
    "name": "Priya",
    "subjects": ["Math", "Science", "English"]
  }

  const EmployeeSalary = {
    "employeeName": "Suresh",
    "basic": 25000,
    "hra": 10000
  }

  const ProductDiscount = {
    "item": "Smartphone",
    "price": 20000,
    "discount": 10
  }

  const OnlineOrder = {
    "orderId": "ORD1234",
    "customer": "Meena",
    "items": 4,
    "totalPrice": 3200
  }

  const WeatherReport = {
    "city": "Mumbai",
    "temperatureC": 30
  }




  return (
    <>
      <h1>1. Student Greeting</h1>
      <p>Hi my name is {Student.name} and my age is {Student.age}</p>
      <hr />

      <h1>2. Product Price Calculation</h1>
      <ul>
        <li>Show product name = {Product.productName}</li>
        <li>Quantity = {Product.quantity}</li>
        <li>price per unit = {Product.price}</li>
        <li>Total Cost = {Product.quantity * Product.price}</li>
      </ul>
      <hr />

      <h1>3. Conditional Attendance Status</h1>
      <p>
        {Attendence.name} is {Attendence.isPresent ? "Present" : "Absent"}
      </p>
      <hr />

      <h1>4. Full Name Formatting </h1>
      <p>Full Name = {NameFormating.firstName}  {NameFormating.lastName}</p>
      <hr />

      <h1>5. Loan EMI Display</h1>
      <ul>
        <li>Show loan amount = {LoanEMI.loanAmount}</li>
        <li>Interest rate = {LoanEMI.interestRate}%</li>
        <li>Tenure = {LoanEMI.tenureYears} years</li>
        <li>EMI = {emi.toFixed(2)}</li>
      </ul>
      <hr />

      <h1>6. Favorite Subjects List </h1>
      <ul>
        {SubjectList.subjects.map((Subjects, index) => (
          <li key={index}>{Subjects} </li>))}
      </ul>
      <hr />

      <h1>7. Employee Salary Breakdown</h1>
      <ul>
        <li>Employee’s basic salary = {EmployeeSalary.basic}</li>
        <li>HRA = {EmployeeSalary.hra}</li>
        <li>Total salary = {EmployeeSalary.basic + EmployeeSalary.hra}</li>
      </ul>
      <hr />

      <h1>8. Product Discounted Price </h1>
      <ul>
        <li>Original price = {ProductDiscount.price}</li>
        <li>Discount percentage = {ProductDiscount.discount}%</li>
        <li>Final price = {ProductDiscount.price - (ProductDiscount.price * ProductDiscount.discount / 100)}</li>
      </ul>
      <hr />

      <h1>9. Online Order Summary</h1>
      <ul>
        <li>Order id = {OnlineOrder.orderId}</li>
        <li>Customer name = {OnlineOrder.customer}</li>
        <li>Number of items = {OnlineOrder.items}</li>
        <li>Total price = {OnlineOrder.items * OnlineOrder.totalPrice}</li>
      </ul>
      <hr />

      <h1>10. Weather Report</h1>
      <ul>
        <li>City name = {WeatherReport.city}</li>
        <li>Temperature in Celsius = {WeatherReport.temperatureC} C</li>
        <li>convert it to Fahrenheit = {(WeatherReport.temperatureC * 9 / 5) + 32} f</li>
      </ul>

    </>
  )
}

export default App
