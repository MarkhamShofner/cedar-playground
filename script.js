//create a cedar chart using the known 'bar' type
// this is the same as passing {"specification": "path/to/cedar/charts/bar.json"}
var chart = new Cedar({"type": "bar"});

//create the dataset w/ mappings
var dataset = {
  "url":"http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5",
  "query": {
    "groupByFieldsForStatistics": "ZIP_CODE",
    "outStatistics": [{
      "statisticType": "sum",
      "onStatisticField": "TOTAL_STUD",
      "outStatisticFieldName": "TOTAL_STUD_SUM"
    }]
  },
  "mappings":{
    "sort": "TOTAL_STUD_SUM DESC",
    "x": {"field":"ZIP_CODE","label":"ZIP Code"},
    "y": {"field":"TOTAL_STUD_SUM","label":"Total Students"}
  }
};

//assign to the chart
chart.dataset = dataset;

//show the chart
chart.show({
  elementId: "#chart"
});
