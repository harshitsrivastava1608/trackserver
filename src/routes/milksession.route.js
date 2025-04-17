const express = require("express");
const router = express.Router();

const {
  getAllSessions,
  saveSession,
} = require( "../entities/milksession/milkSession.controller")

router.get("/allSessions", getAllSessions);
router.post("/saveSession", saveSession);


module.exports = router;