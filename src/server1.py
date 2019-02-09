import paho.mqtt.client as mqtt
import json
# This is the Subscriber

def on_connect(client, userdata, flags, rc):
  print("Connected with result code "+str(rc))
  client.subscribe("Water")

data={}
def on_message(client, userdata, msg):
    k=msg.payload.decode()
    print(k)
    data['level']=k
    with open('./data.json','w') as fp:
        json.dump(data,fp)

client = mqtt.Client()
client.username_pw_set("xodsqqxe", "FgxI5xtvqEWA")
client.connect('m16.cloudmqtt.com', 18147, 60)

client.on_connect = on_connect
client.on_message = on_message

client.loop_forever()  
