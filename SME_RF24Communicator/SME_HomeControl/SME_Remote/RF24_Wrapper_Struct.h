#ifndef RF24_Wrapper_H
#define RF24_Wrapper_H

#include <string>
#include <node.h>
#include <node_object_wrap.h>

class RF24_Wrapper : public node::ObjectWrap {
 public:
  static void Init(v8::Handle<v8::Object> exports);

  /*
  payload_default.node_pipe = "00004";
		payload_default.action = 10;
		payload_default.source = 00;
		payload_default.index = 1;
		payload_default.values = "0000";
  */
  
 private:
  std::string* node_pipe_;
  double action_;
  double source_;
  double index_;
  std::string* values_;
  
  explicit RF24_Wrapper(std::string node_pipe = "", double action = 0, double source = 0, double index = 0, std::string values = "");
   ~RF24_Wrapper();


  static void New(const v8::FunctionCallbackInfo<v8::Value>& args);


  static void Send_Message(const v8::FunctionCallbackInfo<v8::Value>& args);
  static void Listener(const v8::FunctionCallbackInfo<v8::Value>& args);
  static v8::Persistent<v8::Function> constructor;
};

#endif