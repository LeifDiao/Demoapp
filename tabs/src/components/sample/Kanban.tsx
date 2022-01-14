import React from "react";
import {Provider as RTProvider, Form, Chart, themeNames } from "@fluentui/react-teams";
import { Board } from "@fluentui/react-teams";
import {
  IBoardItem,
  IBoardItemCardLayout,
} from "@fluentui/react-teams/lib/cjs/components/Board/BoardItem";
import { TUsers } from "@fluentui/react-teams/lib/cjs/types/types";
import { AddIcon } from "@fluentui/react-northstar";
// TODO: Avoid faker


export function BoardsTab() {
  return <Board {...boardContent} boardItemCardLayout={boardItemCardLayout} />;
}


const range = (start: number, end: number): number[] => {
  const out = []
  while (start < end) out.push(start++)
  return out
}

const shuffle = <T,>(xs: T[]): T[] => {
  const shuffled = [...xs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return xs;
};

const usersRange = range(1, 25)

const users = () =>
  shuffle(
    usersRange.filter(() => Math.random() > 0.67).map((idx) => `u${idx}`)
  );

const boardContent = {
    "users": {
      "u1": {
        "name": {
          "en-US": "Ebony Reinger",
          "fa": "فرزانه فرج"
        }
      },
      "u2": {
        "name": {
          "en-US": "Gladys Swift",
          "fa": "شهروز کرمانی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/LeeFelts.jpg"
      },
      "u3": {
        "name": {
          "en-US": "Silvia Roberts",
          "fa": "رویا موسویان"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/AadiKapoor.jpg"
      },
      "u4": {
        "name": {
          "en-US": "Stephen Reinger IV",
          "fa": "کیانوش قمیشی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/WillLittle.jpg"
      },
      "u5": {
        "name": {
          "en-US": "Miss Peter Schinner",
          "fa": "سامان ناظری"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/MatthewKellum.jpg"
      },
      "u6": {
        "name": {
          "en-US": "Janice Kessler",
          "fa": "ایمان قهرمانی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/LouisaCain.jpg"
      },
      "u7": {
        "name": {
          "en-US": "Melanie Renner Jr.",
          "fa": "دانیال میردامادی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/BethDavies.jpg"
      },
      "u8": {
        "name": {
          "en-US": "Edward Daniel",
          "fa": "مریم قهرمانیان"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/DavidAckley.jpg"
      },
      "u9": {
        "name": {
          "en-US": "Opal Hintz",
          "fa": "هادی علیا"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/LeeMurphy.jpg"
      },
      "u10": {
        "name": {
          "en-US": "Ronnie Doyle",
          "fa": "لاله مهاجرانی I"
        }
      },
      "u11": {
        "name": {
          "en-US": "Luis Hamill",
          "fa": "گلاره هوشیار"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/AdamJarman.jpg"
      },
      "u12": {
        "name": {
          "en-US": "Miss Ismael Kihn",
          "fa": "آیدین عبدالکریمی"
        }
      },
      "u13": {
        "name": {
          "en-US": "Edgar Terry",
          "fa": "آیدین مرتضوی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/CharlotteDeCrum.jpg"
      },
      "u14": {
        "name": {
          "en-US": "Drew Lemke",
          "fa": "آرمان گنجی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/CarianneGentry.jpg"
      },
      "u15": {
        "name": {
          "en-US": "Dr. Mike Dare",
          "fa": "گلاره قهستانی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/MiguelSilva.jpg"
      },
      "u16": {
        "name": {
          "en-US": "Willis Romaguera",
          "fa": "آنیتا غنی DDS"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/KianLambert.jpg"
      },
      "u17": {
        "name": {
          "en-US": "Mrs. Kathy Moore",
          "fa": "هلیا مرتضوی IV"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/HilaryReyes.jpg"
      },
      "u18": {
        "name": {
          "en-US": "Mrs. Leticia Bernhard",
          "fa": "پگاه مفتح"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/DavidAckley.jpg"
      },
      "u19": {
        "name": {
          "en-US": "Jerald Schmidt",
          "fa": "فرزانه عبدالملکی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/KadjiBell.jpg"
      },
      "u20": {
        "name": {
          "en-US": "Mrs. Claire Batz",
          "fa": "رامتین هاشمیان"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/EricIshida.jpg"
      },
      "u21": {
        "name": {
          "en-US": "Toby Lynch",
          "fa": "آنا عبدالکریمی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/LeeMurphy.jpg"
      },
      "u22": {
        "name": {
          "en-US": "Clara Sawayn",
          "fa": "علی فروتن"
        }
      },
      "u23": {
        "name": {
          "en-US": "Brandy Kub",
          "fa": "مهوش کرمانی"
        },
        "image": "https://teams-admin.azurewebsites.net/assets/img/avatars/EricIshida.jpg"
      },
      "u24": {
        "name": {
          "en-US": "Neal Waters",
          "fa": "دریا عبدالکریمی"
        }
      }
    },
    "lanes": {
      "l1": {
        "title": {
          "en-US": "Jewelery",
          "fa": "زیور آلات"
        }
      },
      "l2": {
        "title": {
          "en-US": "Health",
          "fa": "بازی ها"
        }
      },
      "l3": {
        "title": {
          "en-US": "Movies",
          "fa": "کتاب ها"
        }
      },
      "l4": {
        "title": {
          "en-US": "Baby",
          "fa": "خانه"
        }
      },
      "l5": {
        "title": {
          "en-US": "Outdoors",
          "fa": "بچه ها"
        }
      }
    },
    "items": {
      "t0": {
        "lane": "l2",
        "order": 0,
        "title": {
          "en-US": "Awesome Granite Table",
          "fa": "معمولی نرم سالاد"
        },
        "body": {
          "en-US": "Non distinctio aut consequatur nihil beatae exercitationem quidem.",
          "fa": "دستاوردهای سوالات نامفهوم، شصت و سه درصد جوابگوی از."
        },
        "preview": "http://placeimg.com/640/480/nightlife",
        "users": [
          "u2",
          "u5",
          "u12",
          "u19",
          "u17",
          "u15",
          "u3",
          "u6",
          "u7"
        ],
        "badges": {
          "attachments": 899
        },
        "itemKey": "t0"
      },
      "t1": {
        "lane": "l2",
        "order": 1,
        "title": {
          "en-US": "Handcrafted Metal Gloves",
          "fa": "عالی نرم صابون"
        },
        "subtitle": {
          "en-US": "Configurable bottom-line benchmark",
          "fa": "قدرتمند نسل پنجم همکاری"
        },
        "body": {
          "en-US": "Non nam voluptatibus minus quasi repudiandae dolorem.",
          "fa": "که می باشد و بلکه شناخت که از برای ساختگی."
        },
        "preview": "http://placeimg.com/640/480/transport",
        "users": [
          "u7",
          "u1",
          "u11"
        ],
        "itemKey": "t1"
      },
      "t2": {
        "lane": "l3",
        "order": 0,
        "title": {
          "en-US": "Unbranded Wooden Sausages",
          "fa": "معمولی چوبی صندلی"
        },
        "subtitle": {
          "en-US": "Self-enabling regional productivity",
          "fa": "همه کاره مشتری محور رویکرد"
        },
        "body": {
          "en-US": "Voluptate qui aut ab ut.",
          "fa": "در در این صورت بهبود سخت روزنامه. که را فراوان شامل."
        },
        "users": [
          "u19",
          "u13",
          "u18",
          "u8",
          "u7",
          "u4",
          "u6",
          "u1",
          "u17",
          "u3"
        ],
        "itemKey": "t2"
      },
      "t3": {
        "lane": "l3",
        "order": 1,
        "title": {
          "en-US": "Intelligent Granite Gloves",
          "fa": "عالی پلاستیکی کلاه"
        },
        "subtitle": {
          "en-US": "Exclusive solution-oriented application",
          "fa": "بهبود یافته نگرش محور چالش"
        },
        "body": {
          "en-US": "In ipsum non consequuntur et corrupti dolorem.",
          "fa": "لورم اصلی در زبان فارسی  و دشواری موجود که، به پایان که، رایانه ای و سطر."
        },
        "preview": "http://placeimg.com/640/480/business",
        "itemKey": "t3"
      },
      "t4": {
        "lane": "l3",
        "order": 2,
        "title": {
          "en-US": "Refined Concrete Sausages",
          "fa": "باور نکردنی استیل سالاد"
        },
        "body": {
          "en-US": "Totam quo minus perferendis dolor ea et odit.",
          "fa": "متنوع رایانه ای می طلبد چاپ."
        },
        "users": [
          "u22",
          "u23",
          "u11",
          "u9",
          "u20"
        ],
        "itemKey": "t4"
      },
      "t5": {
        "lane": "l3",
        "order": 3,
        "title": {
          "en-US": "Generic Frozen Soap",
          "fa": "کاربردی یخ زده میز"
        },
        "users": [
          "u22",
          "u23",
          "u4",
          "u8",
          "u1"
        ],
        "badges": {
          "attachments": 49
        },
        "itemKey": "t5"
      },
      "t6": {
        "lane": "l4",
        "order": 0,
        "title": {
          "en-US": "Generic Cotton Chair",
          "fa": "معمولی فلزی کامپیوتر"
        },
        "subtitle": {
          "en-US": "Implemented high-level knowledge user",
          "fa": "رو در رو سیستمی توانایی"
        },
        "body": {
          "en-US": "Fugiat blanditiis alias vero temporibus repellat occaecati.",
          "fa": "ستون سوالات جامعه."
        },
        "preview": "http://placeimg.com/640/480/animals",
        "badges": {
          "attachments": 349
        },
        "itemKey": "t6"
      },
      "t7": {
        "lane": "l4",
        "order": 1,
        "title": {
          "en-US": "Practical Metal Tuna",
          "fa": "کوچک نرم پیراهن"
        },
        "subtitle": {
          "en-US": "Focused real-time core",
          "fa": "دیجیتالی شده مبتنی بر متن پایگاه داده تحلیلی"
        },
        "body": {
          "en-US": "Totam nisi eveniet.",
          "fa": "می طلبد امید ستون که، از و با است صنعت می طلبد ایپسوم."
        },
        "users": [
          "u15",
          "u22",
          "u5",
          "u13",
          "u14"
        ],
        "itemKey": "t7"
      },
      "t8": {
        "lane": "l4",
        "order": 2,
        "title": {
          "en-US": "Intelligent Metal Shoes",
          "fa": "خوش طعم یخ زده ماشین"
        },
        "subtitle": {
          "en-US": "Persistent secondary hardware",
          "fa": "خط مقدم محسوس همکاری"
        },
        "users": [
          "u6",
          "u19",
          "u5",
          "u16",
          "u9",
          "u2"
        ],
        "badges": {
          "attachments": 973
        },
        "itemKey": "t8"
      },
      "t9": {
        "lane": "l4",
        "order": 3,
        "title": {
          "en-US": "Licensed Concrete Chips",
          "fa": "معمولی تازه تن ماهی"
        },
        "body": {
          "en-US": "Aliquam eaque dignissimos dolorum tenetur dolores deserunt corporis.",
          "fa": "چاپ استفاده کرد اصلی راهکارها امید مورد نیاز بیشتری را روزنامه. آنچنان."
        },
        "preview": "http://placeimg.com/640/480/animals",
        "users": [
          "u4",
          "u8",
          "u15",
          "u13",
          "u1",
          "u6",
          "u10",
          "u23",
          "u2",
          "u20",
          "u19",
          "u14",
          "u3",
          "u21"
        ],
        "badges": {
          "attachments": 865
        },
        "itemKey": "t9"
      },
      "t10": {
        "lane": "l4",
        "order": 4,
        "title": {
          "en-US": "Rustic Fresh Pants",
          "fa": "خوش طعم بتنی صابون"
        },
        "subtitle": {
          "en-US": "Extended motivating extranet",
          "fa": "تصحیح شده 24 ساعت اتحاد"
        },
        "body": {
          "en-US": "Est placeat soluta eligendi quia voluptatem et distinctio amet.",
          "fa": "سادگی تا با، بیشتری را."
        },
        "preview": "http://placeimg.com/640/480/sports",
        "badges": {
          "attachments": 502
        },
        "itemKey": "t10"
      },
      "t11": {
        "lane": "l4",
        "order": 5,
        "title": {
          "en-US": "Licensed Concrete Mouse",
          "fa": "ارگونومیک استیل پیراهن"
        },
        "body": {
          "en-US": "Nihil est at autem sunt nemo quia nisi voluptas.",
          "fa": "کتابهای تکنولوژی قرار گیرد دنیای."
        },
        "preview": "http://placeimg.com/640/480/nature",
        "users": [
          "u14",
          "u1",
          "u23",
          "u11",
          "u9",
          "u4",
          "u7"
        ],
        "badges": {
          "attachments": 558
        },
        "itemKey": "t11"
      },
      "t12": {
        "lane": "l5",
        "order": 0,
        "title": {
          "en-US": "Unbranded Frozen Hat",
          "fa": "بدون محدودیت تازه پنیر"
        },
        "subtitle": {
          "en-US": "Automated national capability",
          "fa": "قابل تنظیم محسوس اجتماع"
        },
        "body": {
          "en-US": "Quis impedit ipsam pariatur tenetur ea quo consequatur quam.",
          "fa": "جامعه امید کرد شرایط داشت و طراحی مورد نیاز و بهبود."
        },
        "preview": "http://placeimg.com/640/480/cats",
        "users": [
          "u7",
          "u16",
          "u1",
          "u19",
          "u24",
          "u8",
          "u12",
          "u10"
        ],
        "badges": {
          "attachments": 245
        },
        "itemKey": "t12"
      },
      "t13": {
        "lane": "l5",
        "order": 1,
        "title": {
          "en-US": "Handcrafted Rubber Chips",
          "fa": "جذاب فلزی صندلی"
        },
        "itemKey": "t13"
      },
      "t14": {
        "lane": "l5",
        "order": 2,
        "title": {
          "en-US": "Ergonomic Granite Pizza",
          "fa": "ارگونومیک یخ زده صابون"
        },
        "subtitle": {
          "en-US": "Horizontal user-facing productivity",
          "fa": "واکنش گرا پیش زمینه جریان"
        },
        "users": [
          "u21",
          "u13",
          "u9",
          "u11",
          "u17",
          "u16",
          "u20",
          "u4",
          "u15",
          "u18",
          "u24",
          "u6",
          "u1"
        ],
        "badges": {
          "attachments": 559
        },
        "itemKey": "t14"
      },
      "t15": {
        "lane": "l5",
        "order": 3,
        "title": {
          "en-US": "Licensed Granite Salad",
          "fa": "معمولی چوبی ماوس"
        },
        "subtitle": {
          "en-US": "Quality-focused client-server complexity",
          "fa": "اساسی روند رو به بالا انعطاف پذیری"
        },
        "body": {
          "en-US": "Ut sunt qui unde fugit ea cumque.",
          "fa": "اهل لورم سادگی اساسا و فرهنگ پیشرو از شامل حروفچینی در."
        },
        "preview": "http://placeimg.com/640/480/business",
        "users": [
          "u3",
          "u19",
          "u13",
          "u10",
          "u20",
          "u24",
          "u12",
          "u11",
          "u4",
          "u14"
        ],
        "badges": {
          "attachments": 884
        },
        "itemKey": "t15"
      },
      "t16": {
        "lane": "l5",
        "order": 4,
        "title": {
          "en-US": "Ergonomic Steel Pizza",
          "fa": "براق گرانیتی مرغ"
        },
        "subtitle": {
          "en-US": "Polarised next generation superstructure",
          "fa": "سازمان یافته انتقالی نگرش"
        },
        "body": {
          "en-US": "Qui illo eligendi et nulla quos sapiente.",
          "fa": "تایپ رایانه ای و سطر طراحی طراحی از."
        },
        "preview": "http://placeimg.com/640/480/transport",
        "badges": {
          "attachments": 524
        },
        "itemKey": "t16"
      },
      "t17": {
        "lane": "l5",
        "order": 5,
        "title": {
          "en-US": "Awesome Cotton Pants",
          "fa": "باور نکردنی چوبی ماهی"
        },
        "users": [
          "u21",
          "u24",
          "u10",
          "u13",
          "u11",
          "u1",
          "u20",
          "u3",
          "u19"
        ],
        "badges": {
          "attachments": 531
        },
        "itemKey": "t17"
      },
      "t18": {
        "lane": "l5",
        "order": 6,
        "title": {
          "en-US": "Gorgeous Rubber Fish",
          "fa": "کوچک گرانیتی دوچرخه"
        },
        "subtitle": {
          "en-US": "Vision-oriented global encryption",
          "fa": "تمدید شده ناهمگام رمزگذاری"
        },
        "preview": "http://placeimg.com/640/480/people",
        "itemKey": "t18"
      },
      "t19": {
        "lane": "l5",
        "order": 7,
        "title": {
          "en-US": "Handmade Frozen Sausages",
          "fa": "باهوش کتان ماشین"
        },
        "subtitle": {
          "en-US": "Function-based stable throughput",
          "fa": "واکنش گرا تقاضا محور دسترسی"
        },
        "body": {
          "en-US": "Omnis rerum qui quae quaerat.",
          "fa": "جامعه تا با، می باشد."
        },
        "users": [
          "u13",
          "u7",
          "u12",
          "u1",
          "u23",
          "u17",
          "u20"
        ],
        "badges": {
          "attachments": 378
        },
        "itemKey": "t19"
      }
    }
  }

const boardItemCardLayout: IBoardItemCardLayout = {
  previewPosition: "top",
  overflowPosition: "footer",
};





 