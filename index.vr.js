import React from "react";
import { AppRegistry, View } from "react-vr";
import App from "./src/App";

export default class react_3d extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent("react_3d", () => react_3d);
