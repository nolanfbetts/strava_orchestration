import axios from "axios";

async function makeStravaAPICall(requestType, path, body) {
    const bearerToken = "";
    const headers = {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${bearerToken}`,
    };
    const url = `https://www.strava.com/api/v3${path}`;
    switch (requestType) {
        case "POST":
            return "POST";
        case "PATCH":
            return "PATCH";
        case "GET":
            try {
                const response = await axios.get(url, {
                    headers,
                });
                return response;
            } catch (err) {
                console.log(err);
            }
            return "GET";
        case "PUT":
            return "PUT";
    }
}

export default makeStravaAPICall;
