// const express = require("express");
import express from "express";
import getAthleteInfo from "../controllers/athlete_controller.js";
const router = express.Router();

router.route("/").get(getAthleteInfo);

export default router;
