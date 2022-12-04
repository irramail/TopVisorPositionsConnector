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
        type: "SELECT_SINGLE",
        name: "searcher",
        displayName: "search engine",
        helpText: "Yandex/Google",
        parameterControl: {
          allowOverride: true
        },
        options: [//regionsIndexes= from topvisor uri 
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
          },
          { //regionsIndexes=3340 uri topvisor
            label: "Yandex/Минусинск",
            value: "3340"
          },
          {
            label: "Google/Минусинск",
            value: "5084"
          },
          {
            label: "Yandex/Абакан",
            value: "605"
          },
          {
            label: "Google/Абакан",
            value: "607"
          },
          {
            label: "Yandex/Россия",
            value: "5"
          },
          {
            label: "Google/Россия",
            value: "7"
          },
          {
            label: "Yandex/Ростов-На-Дону",
            value: "76"
          },
          {
            label: "Google/Ростов-На-Дону",
            value: "140"
          },
           {
            label: "Yandex/Норильск",
            value: "839"
          },
          {
            label: "Google/Норильск",
            value: "1587"
          }
        ]
      },
      {        
        type: "SELECT_SINGLE",
        name: "pid",
        displayName: "project",
        helpText: "project",
        parameterControl: {
          allowOverride: true
        },
        options: [
          { value:"2672440", label: "diliacom.ru/"},
          { value:"2663987", label: "yar.mk.ru"},
          { value:"2643303", label: "krasconsultant.ru"},
          { value:"2601354", label: "tanplast.ru/"},
          { value:"2581883", label: "happyfamily.ru"},
          { value:"2561356", label: "stroydvor24.ru"},
          { value:"2555525", label: "Колосс24.рф"},
          { value:"2554881", label: "korona24.ru/"},
          { value:"2502405", label: "igrrai.ru/"},
          { value:"2478772", label: "neotran.ru"},
          { value:"2447285", label: "kraszdorovie.ru"},
          { value:"2437338", label: "renovacio-med.ru"},
          { value:"2418800", label: "ivannikitin.com"},
          { value:"2409910", label: "germes-upakovka.ru"},
          { value:"329635", label: "seodogs.ru"},
          { value:"341060", label: "smartoffice-online.ru"},
          { value:"342072", label: "строимдома24.рф"},
          { value:"348096", label: "stroitelyu.ru"},
          { value:"365504", label: "sibhirudo.ru"},
          { value:"365620", label: "s-gidro.ru"},
          { value:"368092", label: "eventrd.ru"},
          { value:"376204", label: "прицепы24.рф (x1)"},
          { value:"376205", label: "прицепы24.рф (x2)"},
          { value:"407135", label: "aladin24.ru"},
          { value:"413094", label: "auto-top24.ru"},
          { value:"431704", label: "hotelsafari.ru (x1)"},
          { value:"431705", label: "hotelsafari.ru (x2)"},
          { value:"459442", label: "24narko.ru"},
          { value:"500520", label: "fortis-grad.ru"},
          { value:"501043", label: "ck-antanta.ru"},
          { value:"534104", label: "eco-d.ru"},
          { value:"541828", label: "24urbrk.ru"},
          { value:"558906", label: "stomus-kr.ru"},
          { value:"584253", label: "krasnewdelhi.com"},
          { value:"742293", label: "крас-обзор.рф"},
          { value:"786910", label: "краспраздник24.рф"},
          { value:"853735", label: "goldax.ru"},
          { value:"894620", label: "lift-complex.ru"},
          { value:"903281", label: "пельмени-олимп.рф"},
          { value:"1058339", label: "sai-proekt.ru"},
          { value:"1072810", label: "granit-sunrise.com.ua"},
          { value:"1140263", label: "dengi-v-zaimi.ru"},
          { value:"1189500", label: "ПОСТРОИМДЛЯВАС.РФ"},
          { value:"1349599", label: "furn-restore.ru (x1)"},
          { value:"1349601", label: "furn-restore.ru (x2)"},
          { value:"1497791", label: "юмикс24.рф"},
          { value:"1512078", label: "fasad.karkas.ru"},
          { value:"1608618", label: "novateh24.ru"},
          { value:"1824285", label: "приусадьба.рф"},
          { value:"1894149", label: "клининговая1.рф"},
          { value:"1904426", label: "aldenta.ru"},
          { value:"1910813", label: "fortysmed.ru"},
          { value:"2269773", label: "minus30"},
          { value:"2361355", label: "броско24.рф"},
          { value:"2359488", label: "worldenergy24.ru"},
          { value:"2264417", label: "kenguru.agency"},
          { value:"2242451", label: "jewel-classic.ru"},
          { value:"2207967", label: "stolyarka24.ru"},
          { value:"2206777", label: "cummins-krsk.ru"},
          { value:"2172218", label: "Vb-remont.ru"},
          { value:"2171780", label: "platinaipk.ru"},
          { value:"2167986", label: "lazer-luxe.ru"},
          { value:"2156842", label: "boondocker.ru"},
          { value:"2137373", label: "eniseyrc24.ru"},
          { value:"2003251", label: "miniotel24.ru"},
          { value:"1946124", label: "всп24.рф"},
          { value:"167402", label: "24narko.ru"},
          { value:"167406", label: "golovina24.ru"},
          { value:"178220", label: "www.audit-kr.ru"},
          { value:"184365", label: "federacel.ru"},
          { value:"250691", label: "sadroz.com"},
          { value:"261595", label: "stap24.ru"},
          { value:"272064", label: "русьсибстрой.рф"},
          { value:"275644", label: "cleantec24.ru"},
          { value:"167425", label: "пальто-центр.рф"},
          { value:"167429", label: "ринос.рф"},
          { value:"2835226", label: "ia24.ru"},
          { value:"3039736", label: "zamkoff24.ru"},
          { value:"3081294", label: "metallelementgroup.ru"},
          { value:"3081003", label: "gbi124.ru"},
          { value:"3080726", label: "krasboat.ru"},
          { value:"3027117", label: "neoform.su"},
          { value:"2161765", label: "proektsr.ru"},
          { value:"167429", label: "ринос.рф"},
          { value:"3193406", label: "findis.ru"},
          { value:"3007573", label: "solntse-detstva.ru"},
          { value:"3171086", label: "grandeg-sibir.ru"},
          { value:"2811113", label: "полимерысибири.рф"},
          { value:"259727", label: "бк24.рф"},         
          { value:"2219092", label: "bolshoy24.ru"},
          { value:"4319833", label: "businessurist.ru"},
          { value:"4671101", label: "тд-екатерина.рф"},
          { value:"4086364", label: "potolokstroi.su"},
          { value:"4666645", label: "комплект-потолок.рф"},
          { value:"4725672", label: "fuldez.ru"},
          { value:"4644600", label: "profmontagnik.ru"},
          { value:"5097045", label: "haron24.ru"},
          { value:"5260446", label: "ambmed.ru"}
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
