g++ -Wall -Ofast -mfpu=vfp -mfloat-abi=hard -march=armv6zk -mtune=arm1176jzf-s -L../ -lrf24-bcm RF24_remote.cpp -o RF24_remote

with rf24 Network
g++ -Wall -Ofast -mfpu=vfp -mfloat-abi=hard -march=armv6zk -mtune=arm1176jzf-s -L../ -lrf24-bcm -lrf24network  RF24_remote.cpp -o RF24_remote

RF24 Addon komplieren mit:
node-gyp build