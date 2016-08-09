import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "iosCheckbox": {
        "display": "none"
    },
    "iosCheckbox + label": {
        "display": "block",
        "position": "relative",
        "cursor": "pointer",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "width": 120,
        "height": 60,
        "backgroundColor": "#dddddd",
        "borderRadius": 60
    },
    "iosCheckbox + label:before": {
        "display": "block",
        "position": "absolute",
        "top": 1,
        "left": 1,
        "bottom": 1,
        "content": "''",
        "right": 1,
        "backgroundColor": "#f1f1f1",
        "borderRadius": 60,
        "transition": "background 0.4s"
    },
    "iosCheckbox + label:after": {
        "display": "block",
        "position": "absolute",
        "top": 1,
        "left": 1,
        "bottom": 1,
        "content": "''",
        "width": 58,
        "backgroundColor": "#fff",
        "borderRadius": "100%",
        "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.3)",
        "transition": "margin 0.4s"
    },
    "iosCheckbox:checked + label:before": {
        "backgroundColor": "#8ce196"
    },
    "iosCheckbox:checked + label:after": {
        "marginLeft": 60
    }
});