import makeStravaAPICall from "../providers/strava_provider.js";
import getAthleteInfoPackage from "../providers/auth_provider.js";

async function getAthleteInfo(req, res, next) {
    const athlete_id = "75183280";
    const path = `/athletes/${athlete_id}`;
    const tst = await getAthleteInfoPackage();
    const response = await makeStravaAPICall("GET", path);
    console.log(response.status);
    console.log(response.data);
    if (response.status) {
        return res.status(response.status).json(response.data);
    } else {
        return res.status(400);
    }
}

export default getAthleteInfo;
