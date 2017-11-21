const express 		= require('express');
const bodyParser 	= require('body-parser');
const formidable 	= require('express-formidable');
const server     	= express();


	  server.use(express.static('www'));
	  server.use(bodyParser.json());
	  server.use(formidable());

	  let words = ["Aloy","Mario","Zelda"];
	  let todolist = ["yesterday","letitbe","heyjude"];

	  server.get('/words',function(req,res){
	  	res.json(words);
	  });

	  server.post('/words',function(req,res){
	  	words.push(req.fields.value);
	  	res.json(true);
	  });

	  server.put('/words',function(req,res){

	  	if (words[req.fields.id] && req.fields.value){
	  		words[req.fields.id] = req.fields.value;
	  		res.json(true);
	  	}else{
	  		res.status(400);
	  		res.json(false);
	  	}

	  });

	  server.delete('/words',function(req,res){
	  	if (words[req.query.id]){
	  		words.splice(req.query.id, 1);
	  		res.json(true);
	  	}else{
	  		res.status(400);
	  		res.json(false);
	  	}
	  });



	  server.get('/list',function(req,res){
	  	res.json(todolist);
	  });

	  server.post('/list',function(req,res){
	  	todolist.push(req.fields.value);
	  	res.json(true);
	  });

	  server.put('/list',function(req,res){

	  	if (todolist[req.fields.id] && req.fields.value){
	  		todolist[req.fields.id] = req.fields.value;
	  		res.json(true);
	  	} else{
	  		res.status(400);
	  		res.json(false);
	  	}

	  });

	  server.delete('/list',function(req,res){
	  	str = JSON.stringify(req.query.id);
	  	if (todolist[str]){
	  		console.log(JSON.stringify(req.query.id));
	  		todolist.splice(req.query.id, 1);
	  		res.json(true);
	  	} else{
	  		res.status(400);
	  		res.json(false);
	  	}
	  });

	  server.listen(1337);
