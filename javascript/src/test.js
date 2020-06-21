import points from "./test/data/bart-stations.json";
import mapboxerWidget from "./widget";
import style from "./test/circle-layer";

global.HTMLWidgets = { };

const widgetData = {
  calls: [
    {
      methodName: "addControl",
      args: {
        controlName: "NavigationControl",
        pos: "top-left",
        options: {
          showCompass: false
        }
      }
    },
    {
      methodName: "addControl",
      args: {
        controlName: "ScaleControl",
        pos: "bottom-right"
      }
    },
    {
      methodName: "addSource",
      args: {
        id: "points",
        source: {
          type: "geojson",
          data: points
        }
      }
    },
    {
      methodName: "addLayer",
      args: {
        style: style
      }
    },
    {
      methodName: "addPopup",
      args: { layer: "circles", popup: "Name: {{name}}" }
    }
  ],
  mapProps: {
    center: [ -122.45, 37.8 ],
    zoom: 9,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
  }
};

const widgetElement = document.getElementById("widget");
const widget = mapboxerWidget(widgetElement);
widget.renderValue(widgetData);

global.debug = {
  mapboxerWidget,
  points
};
