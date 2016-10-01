// define some dependencies
var express = require("express"),
	exphbs = require("express-handlebars"),
	exec = require('child_process'),
	addon = require('./build/Release/RF24_Addon'),
	schedule = require('node-schedule'),
	fs = require('fs'), 
	routes = require('../routes.js');

// hack to make handlebar look back on father path
fs.exists('views/', function(exists){
	if( !exists ) fs.symlinkSync('../views', 'views', 'dir');
});

hbs = exphbs.create({ defaultLayout: 'main' });

var RF24Wrapper = new addon.RF24_Wrapper();

// define some other vars
var running = 0;
var listening = 1;
var loops = 0;
var limit = 1;
var socket_listener;
var socket_Jobs;

// Add Scheduler Tasks
var Tasks = {
	'Aquarium':{
		'WeekdayMorning' : {
			'Start' : {
				'JobName' : 'Aqua_1',
				'hour' : 8,
				'minute' : 30,
				'second' : 0,
				'dayOfWeek' : [1,2,3,4,5]
			},
			'End' : {
				'JobName' : 'Aqua_2',
				'hour' : 9,
				'minute' : 30,
				'second' : 0,
				'dayOfWeek' : [1,2,3,4,5]
			}
		},
		'WeekdayMidday' : {
			'Start' : {
				'JobName' : 'Aqua_3',
				'hour' : 12,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [1,2,3,4,5]
			},
			'End' : {
				'JobName' : 'Aqua_4',
				'hour' : 13,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [1,2,3,4,5]
			}
		},
		'WeekdayEvening' : {
			'Start' : {
				'JobName' : 'Aqua_5',
				'hour' : 17,
				'minute' : 00,
				'second' : 0,
				'dayOfWeek' : [1,2,3,4,5]
			},
			'End' : {
				'JobName' : 'Aqua_6',
				'hour' : 1,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [2,3,4,5,6]
			}
		},
		'WeekendMorning' : {
			'Start' : {
				'JobName' : 'Aqua_7',
				'hour' : 11,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [6,7]
			},
			'End' : {
				'JobName' : 'Aqua_8',
				'hour' : 12,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [6,7]
			}
		},
		'WeekendEvening' : {
			'Start' : {
				'JobName' : 'Aqua_9',
				'hour' : 15,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [6,7]
			},
			'End' : {
				'JobName' : 'Aqua_10',
				'hour' : 2,
				'minute' : 0,
				'second' : 0,
				'dayOfWeek' : [7,1]
			}
		}
	}
}

var app = express();
var server = require('http').createServer(app);  
var port = 3800;
//var io = require('socket.io').listen(app.listen(port));
var io = require('socket.io')(server);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.enable('view cache');

// define the routes from the external file
routes.define(app);

server.listen(port);
// Start Listener
Listener(socket_listener);

// just some output to know everything is working
console.log("\nListening on port " + port + "\n");

// Init Tasks
Init_Tasks(socket_Jobs);

function async(arg, callback) {
  //console.log('Listening for incomming message (loops \''+arg+'\')');
  setTimeout(function() { callback(arg + 1); }, 1000);
}

function final() { 
	console.log('Stop listening'); 
}

function Listener(socket) {
	while(running < limit && listening == 1) {
		async(loops, function(result) {
			running--;
			if(listening == 1) {
				var message = RF24Wrapper.listener("");
				if (message){
					// ToDo: Store Functions in Object
					//console.log(message.substring(0,5));
					switch(message.substring(5,8)){
						// Client Refresh (manual change, not via remote control) and additional functions 
						//(see in client $(document).on("mobileinit", function() callbackAlert)
						
						// PH Calibration Aquarium
						case "x01":
							io.sockets.emit("callbackAlert", { 
								message: "received", 
								operation: "listener",
								state: message
							});
							break;
						// Time Sync Aquarium
						case "x02":
							var now = new Date();
							var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(),
								now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
							var timeSync = "00021100090000" + Math.floor(utc_timestamp / 1000);//message.substring(0,5) + "100090000" + Math.floor(utc_timestamp / 1000);
							console.log("Incomming Message" + message + " Send TimeSync:" + timeSync);
							RF24Wrapper.send_message(timeSync);
							//socket.emit('send', { message: timeSync });
							break;
						// Gesture Sensor Living Room
						case "x03":
							var response;
							switch(message.substring(8,10)){
								// Gesture Up =  LED Stripe An
								case "01":
									console.log("Gesture UP " + message.substring(8,10));
									response = RF24Wrapper.send_message("00001110500000");
									break;
								// Gesture Down =  LED Stripe Aus
								case "02":
									response = RF24Wrapper.send_message("00001110500001");
									break;
								// Gesture Left = Media Aus
								case "03":
									response = RF24Wrapper.send_message("00011111000001");
									break;
								// Gesture Right = Media An
								case "04":
									response = RF24Wrapper.send_message("00011111000000");
									break;
								// Gesture Near = Aquarium An
								case "05":
									response = RF24Wrapper.send_message("00021111000000");
									break;
								// Gesture Far = Aquarium Aus
								case "06":
									response = RF24Wrapper.send_message("00021111000001");
									break;
							}
							
							if (response){
								console.log(response);
								console.log("Gesture Control" + response);
								io.sockets.emit("callbackAlert", { 
									message: "received", 
									operation: "listener",
									state: message
								});
							}else{
								console.log("Error Execute Job");
								//socket.emit("callbackError", { 
								//	error: "Error Transmitting " + message
								//});
							}
							break;
					}
				}
				Listener(socket);
			}else if(listening == 0) {
				final();
			}
		});
	
		running++;
		loops++;
	}
}

function EncodeToString(PayloadStruct){
	var payload = "";
	for (var prop in PayloadStruct) {
		
		if (PayloadStruct.hasOwnProperty(prop)) { 
			if (prop == "split_source"){
				//console.log("Split Values");
			}else{
				payload = payload + PayloadStruct[prop];
				//console.log("name: " + prop + "         value: " + PayloadStruct[prop])
				//console.log(PayloadStruct.node_pipe);
			}
		}
	}
	
	return payload;
	
	
	/*
	test = payload_default['split_source'];
	for (var prop in test) {
		if (test.hasOwnProperty(prop)) { 
			alert("name: " + prop + "         value: " + test[prop])
		}
	}
	*/
	//alert (payload_default['split_source']['action']);
}

function sendMessage(message, socket){
	
	listening = 0;
	loops = 0;
	
	// message decode to string
	var payload = EncodeToString(message);
	var response = RF24Wrapper.send_message(payload);
	
	if (response){
		socket.emit("callbackButton", { 
			message: "received", 
			operation: message,
			state: response
		});
	}else{
		socket.emit("callbackError", { 
			error: "Transmit failed (" + payload + 
				")\n\rPipe: " + message.node_pipe + 
				"\nAction: " + message.action +
				"\nSource: " + message.source +
				"\nIndex: " + message.index +
				"\nValues: " + message.values
		});
	}
	console.log('Start listening'); 
	listening = 1;
	Listener(socket);
}

// now define what happen when connecting the client connect to the socket
io.on('connection', function (socket) {
	
	socket.on('send', function (data) {
		sendMessage(data.message, socket);
	});
	
	socket.on('RefreshClients', function(data){
		// sent to all (include socket sender)
		//io.sockets.emit('Refresh', data);
		
		// sent to all (exclude socket sender)
		socket.broadcast.emit('Refresh', data);
	});
	
	socket_listener = socket;
	socket_Jobs = socket;
});

function Init_Tasks(socket_Jobs){
	console.log("Init Scheduler Tasks");
	var scheduledTasks = {};
	var scheduledTasksNr = 0;
	var scheduledRule;
	
	for (var key in Tasks) {
		console.log("  - " + key);
		var rules = Tasks[key];
		for (var rule in rules) {
			//console.log(rule);
			var rule = rules[rule];
			//console.log(rule);
			for (var ruleItem in rule) {
				var ruleItem = rule[ruleItem];
				var JobName = "";
				scheduledRule = new schedule.RecurrenceRule();
				for (var ruleValue in ruleItem) {
					//console.log(ruleValue + " . " + ruleItem[ruleValue]);
					switch (ruleValue) {
						case "hour":
							scheduledRule.hour = ruleItem[ruleValue];
							break;
						case "minute":
							scheduledRule.minute = ruleItem[ruleValue];
							break;
						case "second":
							scheduledRule.second = ruleItem[ruleValue];
							break;
						case "dayOfWeek":
							scheduledRule.dayOfWeek = ruleItem[ruleValue];
							break;
						case "JobName":
							JobName = ruleItem[ruleValue];
							break;
					}
				}
				scheduledTasks[scheduledTasksNr]  = schedule.scheduleJob(JobName,scheduledRule, function(){
					switch (this.name){
						case "Aqua_1":
							console.log('Job Aqua 1 executed');
							executeJob("00021170100000");
							break;
						case "Aqua_2":
							console.log('Job Aqua 2 executed');
							executeJob("00021170200000");
							break;
						case "Aqua_3":
							console.log('Job Aqua 3 executed');
							executeJob("00021170300000");
							break;
						case "Aqua_4":
							console.log('Job Aqua 4 executed');
							executeJob("00021170400000");
							break;
						case "Aqua_5":
							console.log('Job Aqua 5 executed');
							executeJob("00021170500000");
							break;
						case "Aqua_6":
							console.log('Job Aqua 6 executed');
							executeJob("00021170600000");
							break;
						case "Aqua_7":
							console.log('Job Aqua 7 executed');
							executeJob("00021170700000");
							break;
						case "Aqua_8":
							console.log('Job Aqua 8 executed');
							executeJob("00021170800000");
							break;
						case "Aqua_9":
							console.log('Job Aqua 9 executed');
							executeJob("00021170900000");
							break;
						case "Aqua_10":
							console.log('Job Aqua 10 executed');
							executeJob("00021171000000");
							break;	
					}		
				});
				scheduledTasksNr ++;
			}			
		}
	}
	console.log("\n");
}

function executeJob(payload){
	var response = RF24Wrapper.send_message(payload);
	
	if (response){
		console.log("Execute Job successfull");
	}else{
		console.log("Error Execute Job");
		/*
		socket.emit("callbackError", { 
			error: "Error Transmitting " + message
		});
		*/
	}
}