import React from "react";
import { asset, Model, View } from "react-vr";

export default class PenHolder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl"),
          }}
          style={{
            transform: [
              { translate: [-2.5, 0.5, -4.5] },
              { scale: 0.00125 },
              { rotateX: -90 },
            ],
          }}
        />

        <Model
          source={{
            obj: asset("/penholder/Table_Set_obj.obj"),
            mtl: asset("/penholder/Table_Set_obj.mtl"),
          }}
          style={{
            transform: [
              { translate: [5.8, 0.5, -4.5] },
              { scale: 0.0012 },
              { rotateX: -90 },
            ],
          }}
        />
      </View>
    );
  }
}
