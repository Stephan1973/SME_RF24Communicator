{
  "targets": [
    {
      "target_name": "RF24_Addon",
      "sources": [ "RF24_Addon.cc", "RF24_remote.cc" ],
	  "include_dirs": [ "rf24libs/RF24", "rf24libs/RF24Network" ],
      "library_dirs": [ "rf24libs/RF24", "rf24libs/RF24Network" ],
      "libraries": [ "-lrf24-bcm", "-lrf24network"]
    }
  ]
}
