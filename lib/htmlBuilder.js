const fs = require('fs');
const path = require('path');

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const HTML = [];

    HTML.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
        );
    HTML.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        )
    HTML.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
        );

        return renderMyTeam(HTML.join(""));
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

const renderMyTeam = HTML => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", HTML);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("`` " + placeholder + " ``", "gm");
    return template.replace(pattern, value);
};

module.exports = render;