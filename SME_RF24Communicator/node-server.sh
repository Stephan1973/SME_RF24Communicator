#! /bin/sh
# /etc/init.d/node-server
 
### BEGIN INIT INFO
# Provides:          node-server
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
### END INIT INFO
 
# change this to wherever your node app lives # 
# path_to_node_app=/var/www/index.js 
path_to_node_app=/root/SME_RF24Communicator/SME_HomeControl/homecontrol.js
 
# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "* starting node-server * "
    echo "* starting node-server * [`date`]" >> /var/log/node-server.log
#    /usr/local/bin/node $path_to_node_app >> /var/log/node-server.log 2>&1&
    cd /root/SME_RF24Communicator/SME_HomeControl
    sudo node $path_to_node_app >> /var/log/node-server.log 2>&1&
    ;;
  stop)
    echo "* stopping node-server * "
    echo "* stopping node-server * [`date`]" >> /var/log/node-server.log
#    killall /usr/local/bin/node
    pkill -f "node /root/SME_RF24Communicator/SME_HomeControl/homecontrol.js"
    ;;
  *)
    echo "Usage: /etc/init.d/node-server {start|stop}"
    exit 1
    ;;
esac
 
exit 0
