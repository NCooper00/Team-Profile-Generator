const buildManagerCard = require('./buildmanagercard');
const writeToFile = require('../script')

function buildHTML(newManager, newEngineer, newIntern) { 
console.log(newManager), 
console.log(newEngineer),
console.log(newIntern);   
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

        ${newManager}

        ${newEngineer}

        ${newIntern}
        

    </div>


</body>
</html>
`

}


// module.exports = buildManagerCard;
// module.exports = buildEngineerCard;
// module.exports = buildInternCard;
module.exports = buildHTML;