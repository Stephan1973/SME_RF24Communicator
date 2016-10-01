var c_struct = require('c-struct');

var playerSchema = new c_struct.Schema({
  id: c_struct.type.u16(8),
  name: c_struct.type.string(16),
  hp: c_struct.type.uint24,
  exp: c_struct.type.uint32,
  status: c_struct.type.uint8,
  motd: c_struct.type.string(), // null-terminated
  motw: c_struct.type.string(), // null-terminated
  skills: [{
    id: c_struct.type.uint8,
    name: c_struct.type.string(32),
    secret: c_struct.type.uint40
  }],
  position: {
    x: c_struct.type.uint16,
    y: c_struct.type.uint16
  },
  hash: c_struct.type.uint48
});

var payload_default = new c_struct.Schema({
	node_pipe: c_struct.type.string(5),
	action: c_struct.type.string(2), 
	source: c_struct.type.string(2),
	index: c_struct.type.string(1),
	values: c_struct.type.string()
});
	
	
// register
c_struct.register('Payload_Default', payload_default);
c_struct.register('Player', playerSchema);
