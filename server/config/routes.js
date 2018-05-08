const tasks = require("../controllers/tasks");
module.exports = function(app) {
    app.get("/tasks", tasks.index);
    app.post("/tasks", tasks.create);
    app.post("/tasks/:id/delete", tasks.destroy);
    app.get("/tasks/:id", tasks.show);
    app.post("/tasks/:id", tasks.update);
}