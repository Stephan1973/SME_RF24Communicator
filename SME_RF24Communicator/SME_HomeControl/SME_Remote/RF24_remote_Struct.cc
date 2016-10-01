#include "RF24_Wrapper.h"
#include <sstream>
#include <RF24/RF24.h>
#include <RF24Network/RF24Network.h>
#include <iostream>
#include <ctime>
#include <stdio.h>
#include <time.h>
#include <unistd.h>
#include <inttypes.h>
#include <stdint.h>
#include <string.h>
#include <netinet/in.h> 
#include <stdlib.h>

using namespace std;
using namespace v8;
RF24 radio(RPI_V2_GPIO_P1_22, RPI_V2_GPIO_P1_24, BCM2835_SPI_SPEED_8MHZ);
RF24Network network(radio);
bool listening = false;

struct payload_default {
	unsigned long action;
	unsigned long source;
	unsigned long index;
	char values[6];
};
	
Persistent<Function> RF24_Wrapper::constructor;

RF24_Wrapper::RF24_Wrapper(std::string node_pipe, double action, double source, double index, std::string values) {
	node_pipe_ = new std::string(node_pipe);
	values_ = new std::string(values);
	
}

RF24_Wrapper::~RF24_Wrapper() {
	delete node_pipe_;
	//delete action_;
}

void RF24_Wrapper::Init(Handle<Object> exports) {
	Isolate* isolate = Isolate::GetCurrent();

	// Prepare constructor template
	Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
	tpl->SetClassName(String::NewFromUtf8(isolate, "RF24_Wrapper"));
	tpl->InstanceTemplate()->SetInternalFieldCount(2);

	// Prototype
	NODE_SET_PROTOTYPE_METHOD(tpl, "send_message", Send_Message);
	NODE_SET_PROTOTYPE_METHOD(tpl, "listener", Listener);

	constructor.Reset(isolate, tpl->GetFunction());
	exports->Set(String::NewFromUtf8(isolate, "RF24_Wrapper"),tpl->GetFunction());
}

void RF24_Wrapper::New(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if(args.IsConstructCall()) {
		const uint16_t this_node = 00;
		printf("\nInit RF24 interface\n");
		printf("\nPreparing interface\n");
		radio.begin();
		network.begin(90, this_node);
		radio.printDetails();
		printf("\nEND Preparing interface\n");
		
		//RF24_Wrapper* obj = ObjectWrap::Unwrap<RF24_Wrapper>(args.Holder());
		// ToDo: SET Return value
		v8::String::Utf8Value str(args[0]->ToString());
		char *conv_value = *str;
		//printf("Test String New Function: %s\n\r", conv_value);
		
		RF24_Wrapper* obj = new RF24_Wrapper(conv_value);
		obj->Wrap(args.This());
		args.GetReturnValue().Set(args.This());
	}else{
		// Invoked as plain function `RF24_Wrapper(...)`, turn into construct call.
		const int argc = 1;
		Local<Value> argv[argc] = { args[0] };
		Local<Function> cons = Local<Function>::New(isolate, constructor);
		args.GetReturnValue().Set(cons->NewInstance(argc, argv));
	}
}

void RF24_Wrapper::Listener(const FunctionCallbackInfo<Value>& args){
	Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
	v8::String::Utf8Value str(args[0]->ToString());
	//char *content = *str;
	//printf("Test String Listener Function: %s\n\r", content);
	// if we need the argument
	//std::string content_temp(content);
	//content_temp.clear();
	
	char receivePayload[32];
	network.update();
	if (network.available()){
		while (network.available()){ 
			RF24NetworkHeader header;
			network.read(header,&receivePayload,sizeof(receivePayload));
			printf("Message received %s\n\r",receivePayload);
		}
	}else{
		receivePayload[0] = '\0';
	}
	
	args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(), receivePayload));
	receivePayload[0] = '\0';
}

void RF24_Wrapper::Send_Message(const FunctionCallbackInfo<Value>& args){
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);
	v8::String::Utf8Value node_pipe_arg(args[0]->ToString());
	char *node_pipe_char = *node_pipe_arg;
	std::string node_pipe_temp(node_pipe_char);
	int node_pipe =  atoi (node_pipe_temp.c_str());
	

	uint16_t node_addr = 00;
	switch (node_pipe){
		case 1:
			node_addr = 01;
			break;
		case 2:
			node_addr = 02;
			break;
		case 11:
			node_addr = 011;
			break;
		case 111:
			node_addr = 0111;
			break;	
		case 12:
			node_addr = 012;
			break;	
		case 3:
			node_addr = 03;
			break;
		case 4:
			node_addr = 04;
			break;
		case 14:
			node_addr = 014;
			break;
		case 5:
			node_addr = 05;
			break;
	}
	node_pipe_temp.clear();
	payload_default callback;
	callback.action = args[1]->NumberValue();
	callback.source = args[2]->NumberValue();
	callback.index = args[3]->NumberValue();
	

	v8::String::Utf8Value values_arg(args[4]->ToString());
	char *values_char = *values_arg;
	
	callback.values	= 'Value'; //values_char;
	printf("Node-Pipe: %s\n\r", node_pipe_char); // DEBUG
	
	printf("Action: %lu\n\r", callback.action); // DEBUG
	printf("Source: %lu\n\r", callback.source); // DEBUG
	printf("Index: %lu\n\r", callback.index); // DEBUG
	
	//std::string values_temp(callback.values);
	printf("Values: %s\n\r", callback.values); // DEBUG
	
	
	//std::string values_temp(node_pipe_char); // DEBUB
	//
		
		
		
	//Set message from content
	//std::string message_temp = content_temp.substr (5,strlen(content));
	//content_temp.clear();
	//const size_t MAX = 32;
	//char message[MAX];
	//memset(message, '\0', MAX);
	//message_temp.copy(message, MAX-1);
	//message_temp.clear();
	
	// Init vars for send and receive
	//char receivePayload[32];
	payload_default receivePayload;
	
	bool switched = false;
	int counter = 0;
	unsigned long started_waiting_at = millis();
	bool timeout = false;
		
	while(switched == false && counter < 5){
		// Send message to pipe
		printf("\n\rNow sending  %s on Node Address %d ...", callback.values, node_addr);
		network.update();
		RF24NetworkHeader header(node_addr);
		
		bool ok = network.write(header,&callback, sizeof(callback));
		if (!ok){
			printf("FAILED...\n\r");
		}else{
			printf("OK\n\r");
		}
		
		//Let's take the time while we listen
		started_waiting_at = millis();
		timeout = false;
		while (!network.available() && !timeout) {
			//Update rf24 Network
			network.update();
			if (millis() - started_waiting_at > 250 ){
				timeout = true;
			}
		}
		if( timeout ){
			//If we waited too long the transmission failed
			printf("Oh gosh, it's not giving me any response...\n\r");
			//receivePayload[0] = '\0';
			switched = false;
		}else{
			//If we received the message in time, let's read it and print it
			while(network.available()){
				network.update();
				RF24NetworkHeader header;
				network.read(header,&receivePayload,sizeof(receivePayload));
			}
			printf("Yay! Got this response %s\n\r\n\r",receivePayload.values);
			switched = true;
		}
		counter ++;
		if (switched == false){
			usleep(250 * 1000) ;
		}
	}
	
	started_waiting_at = 0;
	//message[0] = '\0';
	
	args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(),"TEST_Return"));

	//receivePayload[0] = '\0';
}

//return std::string(*utf8str, utf8str.length());
//args.GetReturnValue().Set(Number::New(isolate, obj->value_));
//args.GetReturnValue().Set(String::NewFromUtf8(isolate, obj->value_));
//args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(), conv_value));
