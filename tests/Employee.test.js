const Employee = require('../lib/Employee.class');

test("You can create a new employee.", () => {
    const newEm = new Employee();
    expect(typeof(newEm)).toBe("object");
});

test("You can set the name using the constructor.", () => {
    const name = "Rob";
    const newEm = new Employee(name);
    expect(newEm.name).toBe(name);
});

test("You can set the id using the constructor.", () => {
    const newId = 1;
    const newEm = new Employee("Rob", newId);
    expect(newEm.id).toBe(newId);
});

test("You can set the email using the constructor.", () => {
    const newEmail = "email@email";
    const newEm = new Employee("Rob", 1, newEmail);
    expect(newEm.email).toBe(newEmail);
});