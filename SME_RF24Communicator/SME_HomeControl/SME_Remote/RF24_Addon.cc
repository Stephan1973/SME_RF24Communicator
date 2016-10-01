#include <node.h>
#include "RF24_Wrapper.h"

using namespace v8;

void InitAll(Handle<Object> exports) {
  RF24_Wrapper::Init(exports);
}

NODE_MODULE(RF24_Addon, InitAll)
