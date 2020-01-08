function getAuthType() {
  var response = { type: 'NONE' };
  return response;
}

function getConfig(request) {
  var config = {
    configParams: [
      {
        type: "TEXTINPUT",
        name: "Key",
        displayName: "Topvisor API Key",
        helpText: "20 letters",
        placeholder: "xxxxxxxxxxxxxxxxxxxx"
      },
      {
        type: "TEXTINPUT",
        name: "uid",
        displayName: "Topvisor User-Id",
        helpText: "1-6 numbers",
        placeholder: "xxxxxx"
      },
      {
        type: "TEXTINPUT",
        name: "pid",
        displayName: "Topvisor project id",
        helpText: "5-7 numbers",
        placeholder: "xxxxxxxx"
      },
      {        
        type: "SELECT_SINGLE",
        name: "searcher",
        displayName: "search engine",
        helpText: "Yandex/Google",
        parameterControl: {
          allowOverride: true
        },
        options: [
          {
            label: "Yandex/Красноярск",
            value: "87"
          },
          {
            label: "Google/Красноярск",
            value: "151"
          },
          {
            label: "Yandex/Москва",
            value: "1"
          },
          {
            label: "Google/Москва",
            value: "2"
          }
        ]
      }
    ],
    dateRangeRequired: true
  };
  return config;
  
}

var npmSchema = [
  {
    name: 'position',
    dataType: 'NUMBER',
    semantics: {
      conceptType: 'METRIC',
      semanticType: 'NUMBER'
    }
  },
  {
    name: 'name',
    dataType: 'STRING',
    semantics: {
      conceptType: 'DIMENSION',
      semanticType: 'TEXT'
    }
  },
  {
    name: 'date',
    dataType: 'STRING',
    semantics: {
      conceptType: 'DIMENSION',
      semanticType: 'YEAR_MONTH_DAY'
    }
  }
];

function getSchema(request) {
  return { schema: npmSchema };
}

function getData(request) {
  // Create schema for requested fields

  var requestedSchema = request.fields.map(function (field) {
    for (var i = 0; i < npmSchema.length; i++) {
      if (npmSchema[i].name == field.name) {
        return npmSchema[i];
      }
    }
  });
  
  // Fetch and parse data from API
  var payload = {"project_id" : request.configParams.pid, "regions_indexes": [request.configParams.searcher], "date1": request.dateRange.startDate, "date2": request.dateRange.endDate, "date":request.dateRange.startDate,"fields": [ "name", "position:"+ request.dateRange.startDate +":"+request.configParams.pid+":62"] };
  var apiOptions = {
    headers : {
      'Authorization': 'Bearer ' + request.configParams.Key,
      'User-Id': request.configParams.uid,
      'Content-Type': 'application/json'
    },
    "method" : "post",
    'payload' : JSON.stringify(payload)
  };
  
  var url = [
    'https://api.topvisor.com/v2/json/get/positions_2/history'
  ];
  var response = UrlFetchApp.fetch(url.join(''), apiOptions);
  var parsedResponse = JSON.parse(response).result.keywords;
 
  
  // Transform parsed data and filter for requested fields
  var res = [];
  for (var k in parsedResponse) {
    var v =parsedResponse[k].name;
    for (var s in parsedResponse[k].positionsData) {
      var t = parsedResponse[k].positionsData[s].position;
      if (t == "--"){ t = 100; }
      res.push({values:[v, s.substring(0,10), t]});
    }
  };
  
  var requestedData = res;
  return {
    schema: requestedSchema,
    rows: requestedData
  };
}
