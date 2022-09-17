const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Jonathan", 69, "Jonathan@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee name", () => {
    const employee = new Employee("Jonathan", 69, "Jonathan@gmail.com");

    expect(employee.getName()).toBe("Jonathan");
});

test("gets employee id", () => {
    const employee = new Employee("Jonathan", 69, "Jonathan@gmail.com");

    expect(employee.getId()).toBe(69);
});

test("gets employee email", () => {
    const employee = new Employee("Jonathan", 69, "Jonathan@gmail.com");

    expect(employee.getEmail()).toBe("Jonathan@gmail.com");
});

test("gets employee role", () => {
    const employee = new Employee("Jonathan", 69, "Jonathan@gmail.com");

    expect(employee.getRole()).toBe("Employee");
    console.log(employee);
});