const htmlBuilder = require('./buildhtml');

function buildInternCard(internCardData) {
    return `
<div class="card">
    <div class="cardHeader">
        <h2 class="cardName">${internCardData.internName}</h3>
            <div class="cardIconOne"></div>
        <h3 class="cardRole">Manager</h3>
    </div>

    <div class="cardBody">
        <div class="sectionOne">
            ID: ${internCardData.internId}
        </div>

        <div class="sectionTwo">
            Email: ${internCardData.internEmail}
        </div>

        <div class="sectionThree">
            Office number: ${internCardData.internOfficeNum}
        </div>
    </div>
</div>
`
}

module.exports = buildInternCard;