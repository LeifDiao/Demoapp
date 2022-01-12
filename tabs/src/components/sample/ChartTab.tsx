import React from "react";
import {Provider as RTProvider, Chart,themeNames } from "@fluentui/react-teams";


export function ChartTab() {

    return<RTProvider  themeName={themeNames.Default} lang="en-US">
      <Chart {...ChartConfig} />
    </RTProvider>
  }

  const ChartConfig: any = {
    "title": {
      "en-US": "Pie chart sample",
      "fa": "نمونه نمودار پای"
    },
    "type": "pie",
    "data": {
      "labels": [
        {
          "en-US": "Jan",
          "fa": "ژانویه"
        },
        {
          "en-US": "Feb",
          "fa": "فوریه"
        },
        {
          "en-US": "Mar",
          "fa": "مارس"
        },
        {
          "en-US": "Apr",
          "fa": "آوریل"
        },
        {
          "en-US": "May",
          "fa": "ماه مه"
        }
      ],
      "datasets": [
        {
          "label": {
            "en-US": "Chicken",
            "fa": "تن ماهی"
          },
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