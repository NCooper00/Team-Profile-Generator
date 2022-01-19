const htmlBuilder = require('./buildhtml');

function buildEngineerCard(engineerCardData) {
    return `
<div class="card">
    <div class="cardHeader">
        <h2 class="cardName">${engineerCardData.engineerName}</h3>
            <div class="cardIconOne"></div>
        <h3 class="cardRole">Manager</h3>
    </div>

    <div class="cardBody">
        <div class="sectionOne">
            ID: ${engineerCardData.engineerId}
        </div>

        <div class="sectionTwo">
            Email: ${engineerCardData.engineerEmail}
        </div>

        <div class="sectionThree">
            Office number: ${engineerCardData.engineerOfficeNum}
        </div>
    </div>
</div>
`
}

module.exports = buildEngineerCard;