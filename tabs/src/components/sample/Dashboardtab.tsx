import React from "react";
import { Provider as RTProvider, themeNames, Dashboard, EChartTypes } from "@fluentui/react-teams";
import {
  IWidget,
  EWidgetSize,
} from "@fluentui/react-teams/lib/cjs/components/Dashboard/DashboardWidget";
// import {
//   ExclamationCircleIcon,
//   ScreenshareIcon,
//   ShareGenericIcon,
//   Flex,
//   Text,
// } from "@fluentui/react-northstar";
// import { setUncaughtExceptionCaptureCallback } from "process";

export function DashboardTab() {
  return <RTProvider themeName={themeNames.Default} lang="en-US">
    <Dashboard widgets={defaultWidgets} />
  </RTProvider>
}


// const calloutItemsExample = [
//   {
//     id: "action_1",
//     title: "Info",
//     icon: <ExclamationCircleIcon />,
//   },
//   { id: "action_2", title: "Popup", icon: <ScreenshareIcon /> },
//   {
//     id: "action_3",
//     title: "Share",
//     icon: <ShareGenericIcon />,
//   },
// ];

// const linkExample = { href: "#" };

const defaultWidgets: IWidget[] = [
  {
    "id": "w2",
    "title": "OKR HUB",
    "size": EWidgetSize.Single,
    "desc": "Welcome to OKR Hub",
    "body": [
      {
        "id": "111",
        "title": "",
        "content": {
          "type": "placeholder",
          "message": "Welcome To OKR HUB",
        }
      },
    ]
  },
  {
    "id": "w1",
    "title": "Line Chart",
    "size": EWidgetSize.Triple,
    "desc": "Last updated Monday, April 4 at 11:15 AM (PT)",
    "body": [
      {
        "id": "1",
        "title": "",
        "content": {
          "type": "chart",
          "chart": {
            "title": "Bubble chart sample",
            "type": EChartTypes.Bubble,
            "data": {
              "labels": "Africa",
              "datasets": [
                {
                  "label": "China",
                  "data": [
                    {
                      "x": 21269017,
                      "y": 5.245,
                      "r": 25
                    }
                  ]
                },
                {
                  "label": "Denmark",
                  "data": [
                    {
                      "x": 258702,
                      "y": 7.526,
                      "r": 10
                    }
                  ]
                },
                {
                  "label": "Germany",
                  "data": [
                    {
                      "x": 3979083,
                      "y": 6.994,
                      "r": 15
                    }
                  ]
                },
                {
                  "label": "Japan",
                  "data": [
                    {
                      "x": 11931877,
                      "y": 5.921,
                      "r": 40
                    }
                  ]
                },
                {
                  "label": "France",
                  "data": [
                    {
                      "x": 17269017,
                      "y": 6.921,
                      "r": 20
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    ]
  },
  {
    "id": "w3",
    "title": "Doughnut chart sample",
    "size": EWidgetSize.Single,
    "link": {
      "href": "#"
    },
    "body": [
      {
        "id": "1",
        "title": "",
        "content": {
          "type": "chart",
          "chart": {
            "title": "Doughnut chart sample",
            "type": EChartTypes.Doughnut,
            "data": {
              "labels": [
                "Jan",
                "Feb",
                "March",
                "April",
                "May"
              ],
              "datasets": [
                {
                  "label": "Watches",
                  "data": [
                    2004,
                    1600,
                    480,
                    504,
                    1000
                  ]
                }
              ]
            }
          }
        }
      }
    ]
  }, 
  {
    "id": "w5",
    "title": "Pie chart",
    "size": EWidgetSize.Single,
    "link": {
      "href": "#"
    },
    "body": [
      {
        "id": "1",
        "title": "",
        "content": {
          "type": "chart",
          "chart": {
            "title": "Pie chart sample",
            "type": EChartTypes.Bar,
            "data": {
              "labels": [
                "Jan",
                "Feb",
                "March",
                "April",
                "May"
              ],
              "datasets": [
                {
                  "label": "Laptops",
                  "data": [
                    1860,
                    7700,
                    4100,
                    3012,
                    2930
                  ]
                }
              ]
            }
          }
        }
      }
    ]
  },
  {
    "id": "w7",
  "title": "Gradient area chart sample",
  "size": EWidgetSize.Double,
  "link": {
    "href": "#"
  },
  "body": [
    {
      "id": "1",
      "title": "",
      "content": {
        "type": "chart",
        "chart": {
          "title": "Gradient area chart",
          "type": EChartTypes.LineArea,
          "data": {
            "labels": [
              "Jan",
              "Feb",
              "March",
              "April",
              "May"
            ],
            "datasets": [
              {
                "label": "Laptops",
                "data": [
                  1860,
                  7700,
                  4100,
                  3012,
                  2930
                ]
              },
              {
                "label": "Watches",
                "data": [
                  200,
                  3600,
                  480,
                  5049,
                  4596
                ]
              }
            ]
          }
        }
      }
    }
  ]

  },
];
