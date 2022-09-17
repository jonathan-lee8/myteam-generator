const Manager = require("../lib/Manager");
// jest.mock("../lib/Manager.js");

test("creates an manager object", () => {
    const manager = new Manager("Jonathan", 69, "Jonathan@gmail.com", 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));
})

test("gets manager name", () => {
    const manager = new Manager("Jonathan", 69, "Jonathan@gmail.com", 10);

    expect(manager.getName()).toBe("Jonathan");
});

test("gets manager id", () => {
    const manager = new Manager("Jonathan", 69, "Jonathan@gmail.com", 10);

    expect(manager.getId()).toBe(69);
});

test("gets manager email", () => {
    const manager = new Manager("Jonathan", 69, "Jonathan@gmail.com", 10);

    expect(manager.getEmail()).toBe("Jonathan@gmail.com", 10);
});

test("gets manager role", () => {
    const manager = new Manager("Jonathan", 69, "Jonathan@gmail.com", 10);

    expect(manager.getRole()).toBe("Manager");
    console.log(manager);
});