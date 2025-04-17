
const { sendServerError, sendOkResponse } = require("./../../core/responses");
require('./../../core/dbConnections')
const MilkSession = require("./milkSession.model");

 const getAllSessions = async (req, res) => {
  try {
    const sesssions = await MilkSession.find();
    sendOkResponse({ res,  data:sesssions });
  } catch (error) {
    sendServerError({ res, error });
  }
};

 const saveSession = async (req, res) => {
  try {
    console.log('req.body',req.body)
    const savedSession = await MilkSession.create(req.body);
    console.log(savedSession)
    if(savedSession)
    sendOkResponse({ res, data: savedSession });
  } catch (error) {
    sendServerError({ res, error });
  }
};
module.exports ={getAllSessions,saveSession}