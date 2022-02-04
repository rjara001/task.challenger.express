var express = require("express");
var router = express.Router();
var axios = require('axios');

class taskManager {
     static async getTasks(){
        let { data } = await axios.get('http://localhost:3001/truenorth/tasks/10');
        return data;
    }
}
/* GET home page. */
router.get("/", async function (req, res, next) {

  res.render("tasks/index", {
    tasks: await taskManager.getTasks(),
  });
});

router.get("/:id", async function (req, res, next) {

  console.log('call put');
  next();
});

module.exports = router;
