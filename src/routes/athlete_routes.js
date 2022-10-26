// const express = require("express");
import express from "express";
import {
    getAthleteInfo,
    getAthleteStats,
} from "../controllers/athlete_controller.js";
const router = express.Router();

// router.route("/").get(getAthleteInfo);
router.route("/").get(getAthleteStats);
