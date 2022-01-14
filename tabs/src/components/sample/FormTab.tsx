import React from "react";
import {Provider as RTProvider, Form, Chart, themeNames } from "@fluentui/react-teams";
import "./FormTab.css"


export function FormTab() {

    return<RTProvider  themeName={themeNames.Default} lang="en-US">
      <Form {...formConfig} />
    </RTProvider>
  }

  const formConfig: any = {
    "submit": {
      "en": "Okay",
      "fa": "تایید"
    },
    "cancel": {
      "en": "Cancel",
      "fa": "لغو"
    },
    "headerSection": {
      "title": {
        "en-US": "Seamless methodical paradigm",
        "fa": "ترقی خواه محیط زیست تعریف"
      },
      "preface": {
        "en-US": "Consequatur consequuntur in qui commodi nihil ea est enim aut. Libero autem autem. Aliquid delectus molestiae quidem quae perspiciatis possimus vel ducimus. Consequatur sequi consectetur. Illo assumenda porro expedita et distinctio voluptatibus.",
        "fa": "و ایپسوم لورم ارائه به پایان با هدف اساسا امید. و کاربردهای و با هدف موجود امید اهل به پایان است. با هدف متخصصان سوالات و مجله می توان. طراحی آنچنان قرار گیرد می توان تکنولوژی متنوع."
      }
    },
    "sections": [
      {
        "title": {
          "en-US": "Upgradable national interface",
          "fa": "خلاقانه نسل سوم انعطاف پذیری"
        },
        "preface": {
          "en-US": "Officiis alias accusamus.",
          "fa": "دنیای گذشته است راهکارها زیادی شناخت چاپگرها طراحان راهکارها."
        },
        "inputBlocks": [
          {
            "type": "inline-inputs",
            "fields": [
              {
                "type": "text",
                "title": {
                  "en-US": "Gorgeous Cheese",
                  "fa": "کاربردی ماهی"
                },
                "width": "full",
                "inputId": "f1",
                "placeholder": {
                  "en-US": "Wooden",
                  "fa": "گرانیتی"
                }
              },
              {
                "type": "text",
                "title": {
                  "en-US": "Practical Shirt",
                  "fa": "بدون محدودیت دوچرخه"
                },
                "width": "split",
                "inputId": "f2",
                "placeholder": {
                  "en-US": "Wooden",
                  "fa": "تازه"
                }
              }
            ]
          },
          {
            "type": "inline-inputs",
            "fields": [
              {
                "type": "dropdown",
                "title": {
                  "en-US": "Refined Keyboard",
                  "fa": "معمولی کیبورد"
                },
                "width": "split",
                "inputId": "f3",
                "multiple": false,
                "options": [
                  {
                    "title": {
                      "en-US": "Wooden",
                      "fa": "گرانیتی"
                    },
                    "value": "option__4"
                  },
                  {
                    "title": {
                      "en-US": "Frozen",
                      "fa": "نرم"
                    },
                    "value": "option__5"
                  },
                  {
                    "title": {
                      "en-US": "Concrete",
                      "fa": "استیل"
                    },
                    "value": "option__6"
                  },
                  {
                    "title": {
                      "en-US": "Soft",
                      "fa": "چوبی"
                    },
                    "value": "option__7"
                  },
                  {
                    "title": {
                      "en-US": "Steel",
                      "fa": "نرم"
                    },
                    "value": "option__8"
                  },
                  {
                    "title": {
                      "en-US": "Cotton",
                      "fa": "استیل"
                    },
                    "value": "option__9"
                  },
                  {
                    "title": {
                      "en-US": "Frozen",
                      "fa": "گرانیتی"
                    },
                    "value": "option__10"
                  }
                ]
              },
              {
                "type": "text",
                "title": {
                  "en-US": "Chair",
                  "fa": "کیبورد"
                },
                "width": "split",
                "inputId": "f11"
              },
              {
                "type": "text",
                "title": {
                  "en-US": "Rustic Fish",
                  "fa": "کاربردی مرغ"
                },
                "width": "split",
                "inputId": "f12"
              }
            ]
          },
          {
            "type": "checkboxes",
            "title": {
              "en-US": "Gorgeous Bacon",
              "fa": "باور نکردنی شلوار"
            },
            "inputId": "f13",
            "options": [
              {
                "title": {
                  "en-US": "Concrete",
                  "fa": "یخ زده"
                },
                "value": "option__14"
              },
              {
                "title": {
                  "en-US": "Rubber",
                  "fa": "بتنی"
                },
                "value": "option__15"
              },
              {
                "title": {
                  "en-US": "Cotton",
                  "fa": "چوبی"
                },
                "value": "option__16"
              }
            ]
          },
          {
            "type": "inline-inputs",
            "fields": [
              {
                "type": "text",
                "title": {
                  "en-US": "Awesome Chair",
                  "fa": "کوچک ماوس"
                },
                "width": "full",
                "inputId": "f17",
                "placeholder": {
                  "en-US": "Plastic",
                  "fa": "تازه"
                }
              }
            ]
          },
          {
            "type": "radio-buttons",
            "title": {
              "en-US": "Licensed Chips",
              "fa": "جذاب ماشین"
            },
            "inputId": "f18",
            "options": [
              {
                "title": {
                  "en-US": "Concrete",
                  "fa": "پلاستیکی"
                },
                "value": "option__19"
              },
              {
                "title": {
                  "en-US": "Granite",
                  "fa": "تازه"
                },
                "value": "option__20"
              },
              {
                "title": {
                  "en-US": "Concrete",
                  "fa": "یخ زده"
                },
                "value": "option__21"
              }
            ]
          },
          {
            "type": "dropdown",
            "title": {
              "en-US": "Awesome Towels",
              "fa": "ارگونومیک بیکن"
            },
            "inputId": "f22",
            "multiple": true,
            "options": [
              {
                "title": {
                  "en-US": "Steel",
                  "fa": "چوبی"
                },
                "value": "option__23"
              },
              {
                "title": {
                  "en-US": "Metal",
                  "fa": "نرم"
                },
                "value": "option__24"
              },
              {
                "title": {
                  "en-US": "Frozen",
                  "fa": "نرم"
                },
                "value": "option__25"
              },
              {
                "title": {
                  "en-US": "Granite",
                  "fa": "فلزی"
                },
                "value": "option__26"
              },
              {
                "title": {
                  "en-US": "Metal",
                  "fa": "بتنی"
                },
                "value": "option__27"
              },
              {
                "title": {
                  "en-US": "Soft",
                  "fa": "تازه"
                },
                "value": "option__28"
              },
              {
                "title": {
                  "en-US": "Steel",
                  "fa": "یخ زده"
                },
                "value": "option__29"
              }
            ]
          }
        ]
      }
    ]
  }