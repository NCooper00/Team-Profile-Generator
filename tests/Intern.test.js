const Intern = require('../lib/Intern.class');

test("The getRole() function should return 'Intern'.", () => {
    const internRole = "Intern";
    const newInt = new Intern("Rob", 1, "email@email", "school");
    expect (newInt.getRole()).toBe(internRole);
});

test("You can set the school using the constructor.", () => {
    const internSchool = "school";
    const newInt = new Intern("Rob", 1, "email@email", "school");
    expect(newInt.school).toBe(internSchool);
});

test("You can figure out the school using the getSchool() function.", () => {
    const internSchool = "school";
    const newInt = new Intern("Rob", 1, "email@email", "school");
    expect(newInt.getSchool()).toBe(internSchool);
});