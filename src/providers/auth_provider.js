import strava from "strava-v3";
// import stravaApi from "strava-v3";

async function getAthleteInfoPackage() {
    try {
        const test = await strava.oauth.getRequestAccessURL({
            redirect_uri: "localhost",
            client_id: "95148",
        });
    } catch (e) {
        console.log(e);
    }

    // console.log(test);
    try {
        const oauth_code = "";
        const test2 = await strava.oauth.getToken({
            code: oauth_code,
        });
    } catch (e) {
        console.log(e);
    }
    // console.log(test2);

    // const payload = await strava.athletes.get({ id: 75183280 });

    // const payload2 = await strava.athletes.stats({ id: 75183280 });

    // const payload3 = await strava.athlete.listClubs({ id: 75183280 });
}
export default getAthleteInfoPackage;
