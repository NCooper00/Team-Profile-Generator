const htmlBuilder = require('./buildhtml');

function buildManagerCard(managerCardData) {
    return `
<div class="card">
    <div class="cardHeader">
        <h2 class="cardName">${managerCardData.managerName}</h3>
            <div class="cardIconOne"></div>
        <h3 class="cardRole">Manager</h3>
    </div>

    <div class="cardBody">
        <div class="sectionOne">
            ID: ${managerCardData.managerId}
        </div>

        <div class="sectionTwo">
            Email: ${managerCardData.managerEmail}
        </div>

        <div class="sectionThree">
            Office number: ${managerCardData.managerOfficeNum}
        </div>
    </div>
</div>
`
.then((managerCardData) => {
    console.log(managerCardData);
})
}

module.exports = buildManagerCard;