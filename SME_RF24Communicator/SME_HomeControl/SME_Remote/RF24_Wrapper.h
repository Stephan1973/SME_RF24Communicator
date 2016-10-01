#ifndef RF24_Wrapper_H
#define RF24_Wrapper_H

#include <string>
#include <node.h>
#include <node_object_wrap.h>

class RF24_Wrapper : public node::ObjectWrap {
 public:
  static void Init(v8::Handle<v8::Object> exports);

 private:
  std::string* value_;
  
  explicit RF24_Wrapper(std::string value = "");
   ~RF24_Wrapper();


  static void New(const v8::FunctionCallbackInfo<v8::Value>& args);


  static void Send_Message(const v8::FunctionCallbackInfo<v8::Value>& args);
  static void Listener(const v8::FunctionCallbackInfo<v8::Value>& args);
  static v8::Persistent<v8::Function> constructor;
};

#endif