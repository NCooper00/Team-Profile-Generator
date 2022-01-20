const Engineer = require('../lib/Engineer.class');

test("The getRole() function should return 'Engineer'.", () => {
    const engineerRole = "Engineer";
    const newEng = new Engineer("Rob", 1, "email@email", "github");
    expect (newEng.getRole()).toBe(engineerRole);
});

test("You can set the github account using the constructor.", () => {
    const engineerGithub = "github";
    const newEng = new Engineer("Rob", 1, "email@email", "github");
    expect(newEng.github).toBe(engineerGithub);
});

test("You can figure out the github account name using the getGithub() function.", () => {
    const engineerGithub = "github";
    const newEng = new Engineer("Rob", 1, "email@email", "github");
    expect(newEng.getGithub()).toBe(engineerGithub);
});