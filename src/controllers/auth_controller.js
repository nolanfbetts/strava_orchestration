import getAuthToken from "../providers/auth_provider.js";
// import getAthleteInfoPackage from "../providers/auth_provider.js";

async function getStravaToken(req, res, next) {
    const code = req.query.code;
    const response = await getAuthToken(code);
    // console.log("RESPONSE", response);
    console.log(response);
    if (response.status === 200) {
        return res.status(response.status).json(response.data);
    } else {
        return res.status(400).json(response.data);
    }
}

export default getStravaToken;
