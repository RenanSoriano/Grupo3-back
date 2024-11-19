const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const tarefas = require('./models/tarefas');
const axios = require('axios');

// Local Modules
//const myRoute = require('./routes/myRoute.js');

const app = express();
const PORT = process.env.PORT;
//app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // URL do frontend React
  credentials: true
}));
//app.use(express.static(path.join(__dirname, "public")));
const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)

// Routes will be written here
//app.use('/route', myRoute);
//const userRoutes = require('./routes/userRoutes');
//app.use('/api/users', userRoutes);

//const tarefas = require(‘./models/tarefas’);
//app.get('/tarefas', async (req, res) => { 
//  const tarefas = await tarefas.find(); 
//  res.json(tarefas); });

app.post('/tarefas/nova', async (req,res) => {
    const novaTarefa = await tarefa.create(req.body);
    res.status(201).json({novaTarefa})
})

app.delete('/tarefa/delete/:id', async(req,res)=>{
  const result = await tarefas.findByIdAndDelete(req.params.id)
  res.json(result)
})

app.listen(PORT, (error) =>{
  //if(!error)
     // console.log("Server is Successfully Running, 
                 //and App is listening on port "+ PORT)
 // else 
      //console.log("Error occurred, server can't start", error);
  }
);




main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


/* catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;*/




/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;*/
