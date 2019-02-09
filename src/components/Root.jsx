import { Connector } from "mqtt-react";
import App from "./components/App";

export default () => (
  <Connector mqttProps="m16.cloudmqtt.com">
    <App />
  </Connector>
);
