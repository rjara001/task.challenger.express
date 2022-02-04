const express = require('express')
const app = express()

var router = express.Router();

var { getTasks, putTask } = require('./apis/tasks');

router.get("/tasks/:quantity?", getTasks);

router.put("/tasks", putTask);
// use the router and 401 anything falling through
app.use("/truenorth", router, function (req, res, next) {
    next();
});


app.get('/', function (req, res) {
  res.send('im listening you at 3000 port')
})


app.listen(3000, () => {
    console.log(`im listening you at 3000 port`)
  });