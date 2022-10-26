import makeStravaAPICall from "../providers/strava_provider.js";
import stravaApi from "strava-v3";
// import getAthleteInfoPackage from "../providers/auth_provider.js";

async function getAthleteInfo(req, res, next) {
    const athlete_id = "75183280";
    const path = `/athletes/${athlete_id}`;
    // const tst = await getAthleteInfoPackage();
    const response = await makeStravaAPICall("GET", path);
    console.log(response.status);
    console.log(response.data);
    if (response.status) {
        return res.status(response.status).json(response.data);
    } else {
        return res.status(400);
    }
}

async function getAthleteStats(req, res, next) {
    const strava = new stravaApi.client(
        "5b7628cc4219672b3e2457ec1faff788b1c41062"
    );
    const payload2 = await strava.athletes.stats({ id: 75183280 });
    console.log(payload2);
    return res.status(200).json(payload2);
}

export { getAthleteInfo, getAthleteStats };
