const Manager = require('../lib/Manager.class');

test("The getRole() function should return 'Manager'.", () => {
    const managerRole = "Manager";
    const newMan = new Manager("Rob", 1, "email@email", 12345);
    expect (newMan.getRole()).toBe(managerRole);
});

test("You can set the office number using the constructor.", () => {
    const managerOffNum = 5555555555;
    const newMan = new Manager("Rob", 1, "email@email", 5555555555);
    expect(newMan.officeNumber).toBe(managerOffNum);
});

test("You can figure out the office number using the getOfficeNumber() function.", () => {
    const officeNum = 5555555555;
    const newMan = new Manager("Rob", 1, "email@email", 5555555555);
    expect(newMan.getOfficeNumber()).toBe(officeNum);
});