const axios = require("axios");
const { v4: uuidv4, v4 } = require('uuid');

const URL_GETTASK = "https://lorem-faker.vercel.app/api?quantity=";

module.exports.getTasks = async (req, res, next) => {
  let { data } = await axios.get(URL_GETTASK + (req.params.quantity || 3));

  let tasks = data.map((task) => {
    return { tittle: task , UUID: v4() };
  });

  res.send(tasks);
};

module.exports.putTask = async (req, res, next) => { 

    console.log('im marking the task to done:' + req.body);
}
