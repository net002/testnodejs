const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const md4 = require('js-md4');
const { Op, where } = require("sequelize");
cors = require('cors'),
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//////////////// position ////////////////////////////////
app.post('/Createposition', async (req, res) => {
  data = req.body;
  inFo = await db.position.create({
    Position_Name: data.Position_Name,
    updatedBy: data.updatedBy,
    createBy: data.createBy,
    Department_ID: data.Department_ID
  });
});

app.get('/Viewposition', async (req, res) => {
  inFo = await db.position.findAll({
    attributes: ['Position_Name'], where: {
      visible: true
    }, group: 'Position_Name'
  }).then((results) => {
    res.json(results);
  });
});
app.post('/ViewpositionIDbyName', async (req, res) => {
  data = req.body;
  inFo = await db.position.findAll({
    attributes: ['Position_ID'], where: {
      [Op.and]: [
        { Position_Name: data.Position_Name },
        { Department_ID: data.Department_ID },
        { visible: true }
      ]
    }
  }).then((results) => {
    res.json(results);
  });
});
/////////////////////department/////////////////////////////
app.post('/Createdepartment', async (req, res) => {
  data = req.body;
  inFo = await db.department.create({
    Department_Name: data.Department_Name,
    updatedBy: data.updatedBy,
    createBy: data.createBy,
  });
});
app.get('/Viewdepartment', async (req, res) => {
  inFo = await db.department.findAll({
    attributes: ['Department_Name'],
    where: {
      visible: true
    },
    group: 'Department_Name'
  }).then((results) => {
    res.json(results);
  });
});
app.post('/ViewdepartmentIDbyName', async (req, res) => {
  data = req.body;
  inFo = await db.department.findAll({
    attributes: ['Department_ID'], where: {
      [Op.and]: [
        { Department_Name: data.Department_Name },
        { visible: true }
      ]
    }
  }).then((results) => {
    res.json(results);
  });
});
app.get('/ViewdepartmentNamebyID/:id', async (req, res) => {
  data = req.body;
  inFo = await db.department.findAll({
    attributes: ['Department_Name'], where: {
      [Op.and]: [
        { Department_ID: req.params.id },
        { visible: true }
      ]
    }
  }).then((results) => {
    res.json(results);
  });
});
////////////////////employee/////////////////////////
app.post('/Createusrs', async (req, res) => {
  data = req.body;
  password = undefined
  if (req.body.password) password = md4(req.body.password)
  inFo = await db.employee.create({
    usesName: data.usesName,
    password: password,
    Employee_Fname: data.Employee_Fname,
    Employee_Lname: data.Employee_Lname,
    updatedBy: data.updatedBy,
    createBy: data.createBy,
    Department_ID: data.Department_ID,
    Position_ID: data.Position_ID,
  });
});

app.put('/Editusrs/:id', async (req, res) => {
  data = req.body;
  password = undefined
  if (req.body.password) password = md4(req.body.password)
  inFo = await db.employee.update({
    usesName: data.usesName,
    password: password,
    Employee_Fname: data.Employee_Fname,
    Employee_Lname: data.Employee_Lname,
    updatedat: data.updatedBy,
    Department_ID: data.Department_ID,
    Position_ID: data.Position_ID,
  },
  {
    where: { Employee_ID: req.params.id }
  });
});


app.post('/Checkadmin', async (req, res) => {


  inFo = await db.position.findAll({ where: { Position_Name: 'manager', Position_ID: req.body.Position_ID } }).then((results) => {
    res.json(results);
  });

});
app.post('/ViewemployeeBydepartment', async (req, res) => {
  data = req.body;
  inFo = await db.employee.findAll({ where: { Department_ID: data.Department_ID } }).then((results) => {
    res.json(results);
  });

});


app.post('/login', async (req, res) => {
  password = undefined
  if (req.body.password) password = md4(req.body.password)
  inFo = await db.employee.findOne({ where: { usesName: req.body.user_name, password: password } }).then((results) => {
    res.json(results);
  });

});


app.post('/ViewuserByDepartment_ID', async (req, res) => {
  data = req.body;
  inFo = await db.employee.findAll({
    where: {
      [Op.and]: [
        { Department_ID: data.Department_ID },
        { visible: true }
      ]
    }, include: {
      model: db.position,
      include: {
        model: db.department
      }
    }
  }).then((results) => {
    res.json(results);
  });

});

app.get('/ViewuserAll', async (req, res) => {
  inFo = await db.employee.findAll({where: {visible: true}
    ,include: {
      model: db.position,
      include: {
        model: db.department
      }
    }
  }).then((results) => {
    res.json(results);
  });

});

app.put('/deleteUser', async (req, res) => {
  data = req.body;
  let currentdate = new Date();

  info = await db.employee.update({
    endDate: currentdate,
    visible: false,
    updatedBy: data.updatedBy,
  }
    ,
    {
      where: { Employee_ID:  data.Employee_ID }
    });

})

app.get('/ViewuserByid/:id', async (req, res) => {
  inFo = await db.employee.findAll({where: {Employee_ID:req.params.id}
  }).then((results) => {
    res.json(results);
  });

});

////////////////// tasks /////////////////////////
app.put('/Deletetasks/:id', async (req, res) => {
  info = await db.tasks.update({
    visible: false
  }, {
    where: { tasks_ID: req.params.id }
  });

})

app.put('/Edittasks/:id', async (req, res) => {
  data = req.body;
  info = await db.tasks.update({
    tasksDetails: data.tasksDetails,
    Date: data.Date,
    output: data.output,
    noteAndproblem: data.noteAndproblem,
    skill: data.skill,
    updatedBy: data.updatedBy,
  }
    ,
    {
      where: { tasks_ID: req.params.id }
    });

})
app.get('/ViewtasksAll', async (req, res) => {
  inFo = await db.tasks.findAll({
    where: { visible: true },
    include: {
      model: db.employee,
    },
    order: ["Date"]
  }).then((results) => {
    res.json(results);
  });

});



app.get('/ViewtasksBycreateBy/:id', async (req, res) => {

  inFo = await db.tasks.findAll({
    where: {
      [Op.and]: [
        { Employee_ID: req.params.id },
        { visible: true }
      ]
    },
    include: {
      model: db.employee,
    }
  }).then((results) => {
    res.json(results);
  });


});

app.post('/Createtasks', async (req, res) => {
  data = req.body;
  inFo = await db.tasks.create({
    tasksDetails: data.tasksDetails,
    Date: data.Date,
    output: data.output,
    noteAndproblem: data.noteAndproblem,
    skill: data.skill,
    updatedBy: data.updatedBy,
    createBy: data.createBy,
    Employee_ID: data.Employee_ID
  });
});

app.get('/ViewtasksByiD/:id', async (req, res) => {
  inFo = await db.tasks.findOne({
    attributes: ['tasksDetails', 'skill', 'output', 'noteAndproblem', 'Date'],
    where: {
      [Op.and]: [
        { tasksID: req.params.id },
        { visible: true }
      ]
    }
  }).then((results) => {
    res.json(results);
  });

});



db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server is running on port 500...');
  });
});

