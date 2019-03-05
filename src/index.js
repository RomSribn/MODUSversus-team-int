import "./main.css";
import $ from "jquery";
import "popper.js";
import "bootstrap";
// import "../images";
import { Gauge } from "./js/gauge.js";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const opts1 = {
    angle: 0, /// The span of the gauge arc
    lineWidth: 0.3, // The line thickness
    pointer: {
        length: 0, // Relative to gauge radius
        strokeWidth: 0 // The thickness
    },
    colorStart: '#6FADCF',   // Colors
    colorStop: '#e2534b',    // just experiment with them
    strokeColor: '#76c7c0'   // to see which ones work best for you
};
const opts2 = {
    angle: 0, /// The span of the gauge arc
    lineWidth: 0.3, // The line thickness
    pointer: {
        length: 0, // Relative to gauge radius
        strokeWidth: 0 // The thickness
    },
    colorStart: '#6FADCF',   // Colors
    colorStop: '#e2534b',    // just experiment with them
    strokeColor: '#76c7c0'   // to see which ones work best for you
};
const opts3 = {
    angle: 0, /// The span of the gauge arc
    lineWidth: 0.3, // The line thickness
    pointer: {
        length: 0, // Relative to gauge radius
        strokeWidth: 0 // The thickness
    },
    colorStart: '#6FADCF',   // Colors
    colorStop: '#e2534b',    // just experiment with them
    strokeColor: '#76c7c0'   // to see which ones work best for you
};
const opts4 = {
    angle: 0, /// The span of the gauge arc
    lineWidth: 0.3, // The line thickness
    pointer: {
        length: 0, // Relative to gauge radius
        strokeWidth: 0 // The thickness
    },
    colorStart: '#6FADCF',   // Colors
    colorStop: '#e2534b',    // just experiment with them
    strokeColor: '#76c7c0'   // to see which ones work best for you
};

const target1 = document.getElementById('g1'); // your canvas element
const target2 = document.getElementById('g2'); // your canvas element
const target3 = document.getElementById('g3'); // your canvas element

const gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
gauge1.maxValue = 100; // set max gauge value
gauge1.setMinValue(0);  // set min value
gauge1.set(50); // set actual value

const gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 100; // set max gauge value
gauge2.setMinValue(0);  // set min value
gauge2.set(70); // set actual value

const gauge3 = new Gauge(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 100; // set max gauge value
gauge3.setMinValue(0);  // set min value
gauge3.set(80); // set actual value

