import paho.mqtt.client as mqtt
import json
# This is the Subscriber
data={}
data['level']=[0,0,0,0,0,0]
def on_connect(client, userdata, flags, rc):
  print("Connected with result code "+str(rc))
  client.subscribe("Water")

def on_message(client, userdata, msg):
    k=msg.payload.decode()
    i=5
    while(i>0):
        data['level'][i]=data['level'][i-1]
        i-=1
    print(data['level'])
    data['level'][0]=float(k)
    with open('./data.json','w') as fp:
        json.dump(data,fp)

client = mqtt.Client()
client.username_pw_set("xodsqqxe", "FgxI5xtvqEWA")
client.connect('m16.cloudmqtt.com', 18147, 60)

client.on_connect = on_connect
client.on_message = on_message

client.loop_forever()  
