function buildManagerCard(managerCardData) {
    return `
<div class="card">
    <div class="cardHeader">
        <h2 class="cardName">Name1</h3>
            <div class="cardIconOne"></div>
        <h3 class="cardRole">Manager</h3>
    </div>

    <div class="cardBody">
        <div class="sectionOne">
            ID:
        </div>

        <div class="sectionTwo">
            Email: 
        </div>

        <div class="sectionThree">
            Office number:
        </div>
    </div>
</div>
`
}

function buildEngineerCard() {

}

function buildInternCard() {

}

function buildHTML(htmlData) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Assets/reset.css">
    <link rel="stylesheet" href="/Assets/style.css">

    <title>Team Profile</title>
</head>

<header class="mainHead">
    <h1 class="myTeam" onClick="window.location.reload();">
      My Team  
    </h1>
</header>


<body>
    <div class="cardSection">

        
        <div class="card">
            <div class="cardHeader">
                <h2 class="cardName">Name1</h3>
                    <div class="cardIconOne"></div>
                <h3 class="cardRole">Manager</h3>
            </div>

            <div class="cardBody">
                <div class="sectionOne">
                    ID:
                </div>

                <div class="sectionTwo">
                    Email: 
                </div>

                <div class="sectionThree">
                    Office number:
                </div>
            </div>
        </div>

        <div class="card">
            <header class="cardHeader">
                <h2 class="cardName">Name2</h2>
                    <div class="cardIconTwo"></div>
                <h3 class="cardRole">Engineer</h3>
            </header>

            <div class="cardBody">
                <div class="sectionOne">
                    ID:
                </div>

                <div class="sectionTwo">
                    Email:
                </div>

                <div class="sectionThree">
                    GitHub:
                </div>
            </div>
        </div>

        <div class="card">
            <header class="cardHeader">
                <h2 class="cardName">Name3</h2>
                    <div class="cardIconThree"></div>
                <h3 class="cardRole">Intern</h3>
            </header>

            <div class="cardBody">
                <div class="sectionOne">
                    ID:
                </div>

                <div class="sectionTwo">
                    Email:
                </div>

                <div class="sectionThree">
                    School:
                </div>
            </div>
        </div>


    </div>


</body>
</html>
`
}

module.exports = buildHTML;
module.exports = buildManagerCard;
module.exports = buildEngineerCard;
module.exports = buildInternCard;