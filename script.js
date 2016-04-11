var chart = new Cedar({
  "type":"scatter",
  "dataset":{
    "url":"https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
    "query":{},
    "mappings":{
      "x": {"field":"Number_of","label":"Student Enrollment (2008)"},
      "y": {"field":"F_of_teach","label":"Fraction of Teachers"},
      "color":{"field":"Type","label":"Facility Type"}
    }
  }
});

chart.tooltip = {
  "title": "{NAME}",
  "content": "{Number_of} students with a {Number_of} student Number_of."
}

chart.show({
  elementId: "#chart",
  autolabels: true
});









// //create a cedar chart using the known 'bar' type
// // this is the same as passing {"specification": "path/to/cedar/charts/bar.json"}
// var chart = new Cedar({"type": "bar"});
//
// //create the dataset w/ mappings
// var dataset = {
//   "url":"http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5",
//   "query": {
//     "groupByFieldsForStatistics": "ZIP_CODE",
//     "outStatistics": [{
//       "statisticType": "sum",
//       "onStatisticField": "TOTAL_STUD",
//       "outStatisticFieldName": "TOTAL_STUD_SUM"
//     }]
//   },
//   "mappings":{
//     "sort": "TOTAL_STUD_SUM DESC",
//     "x": {"field":"ZIP_CODE","label":"ZIP Code"},
//     "y": {"field":"TOTAL_STUD_SUM","label":"Total Students"}
//   }
// };
//
// //assign to the chart
// chart.dataset = dataset;
//
// //show the chart
// chart.show({
//   elementId: "#chart"
// });
