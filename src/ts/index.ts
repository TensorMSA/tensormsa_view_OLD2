import * as d3 from 'd3';
import '../scss/style.scss';
import * as $ from 'jquery';

console.log("Success");

d3.select("#network").on("click", function () {
    $("#main > p").load("./views/network/network-monitor.html");
});

d3.select("#version").on("click", function () {
    $("#main > p").load("./views/version/version-manager.html");
});

d3.select("#workflow").on("click", function () {
    $("#main > p").load("./views/workflow/workflow.html");
});

d3.select("#summary").on("click", function () {
    $("#main > p").load("./views/summary/summary.html");
});

d3.select("#batch").on("click", function () {
    $("#main > p").load("./views/batch/batch.html");
});

d3.select("#config").on("click", function () {
    $("#main > p").load("./views/config/config.html");
});