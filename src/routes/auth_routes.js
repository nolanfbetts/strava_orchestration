// const express = require("express");
import express from "express";
import getStravaToken from "../controllers/auth_controller.js";
const router = express.Router();

router.route("/token").post(getStravaToken);

export default router;
