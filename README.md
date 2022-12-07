# TopVisorPositionsConnector
Connector for TopVisor, only positions by google/ya and msk/krsk 

In datastudio report daterange element and Pivot table


Today you can find inside the connector:
```
"Yandex/Красноярск",
"Google/Красноярск",
"Yandex/Москва",
"Google/Москва",
"Yandex/Минусинск",
"Google/Минусинск",
"Yandex/Абакан",
"Google/Абакан",
"Yandex/Россия",
"Google/Россия",
"Yandex/Ростов-На-Дону",
"Google/Ростов-На-Дону",
"Yandex/Норильск",
"Google/Норильск",
```

You can add a new item, reconnect and use it:
```
          ,
          { //regionsIndexes=3340 uri topvisor
            label: "Yandex/Минусинск",
            value: "3340"
          }
```
