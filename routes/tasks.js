var express = require("express");
var router = express.Router();
var axios = require('axios');

class taskManager {
     static async getTasks(len){
        let { data } = await axios.get('http://localhost:3000/truenorth/tasks/' + len);
        return data;
    }
}
/* GET home page. */
router.get("/:id?", async function (req, res, next) {

  res.render("tasks/index", {
    tasks: await taskManager.getTasks(req.params.id),
  });
});

router.put("/:id", async function (req, res, next) {

  console.log('call put');
  next();
});

module.exports = router;
