import fetch from 'isomorphic-fetch'
const apiUrl = 'http://192.168.1.142:3000/cats'
const youTubeApiKey = 'AIzaSyB7bKJJSwI9fidWzHisl8xY23OAze3rBUk'
const youTubeApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' + 
  youTubeApiKey + '&q='

export const getYouTubeVideos = (categoryText) => {
  return Promise.resolve(youTubeData)
  // return fetch(youTubeApiUrl + categoryText)
  //   .then(response => response.json())          
}

export const getAllCategories = () => {
  return Promise.resolve({data:categoryData})
  // return fetch(apiUrl)
  //   .then(response => response.json())
}

export const createCategory = (name, keyWords) => {
  var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, keyWords})
  }
  return fetch(apiUrl, options)
    .then(response => response.json())
}

export const deleteCategory = (catId) => {
  var options = {
    method: 'DELETE',
    mode: 'cors'
  }
  return fetch(apiUrl + '/' + catId, options)    
}

export const saveSelectedVideos = (catId, selectedVideoIds) => {
  var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(selectedVideoIds)
  }
  return fetch(apiUrl + '/' + catId + '/videos', options)
    .then(response => response.json())
} 

const categoryData = [
  {_id: "1", name: "dogs", keyWords: "dogs", videos: ["dogs", "cats"]}
]

const youTubeData = {
  "kind": "youtube#searchListResponse",
  "etag": "pqb5DfK3gboFN5sdlu4TyoSdYyc",
  "nextPageToken": "CBkQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "tiarLDFqkvmQrqSzvE6xUtwkDbQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "o2gSkYvMCzI"
      },
      "snippet": {
        "publishedAt": "2020-07-18T06:30:02Z",
        "channelId": "UCXbzirbkybMpRJ8TgidMeuQ",
        "title": "Animals SOO Cute! Cute baby animals Videos Compilation cutest moment of the animals #15",
        "description": "Animals SOO Cute! Cute baby animals Videos Compilation cutest moment of the animals #15 Watch more cute animals!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/o2gSkYvMCzI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/o2gSkYvMCzI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/o2gSkYvMCzI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funniest Animals",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-18T06:30:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "nPDxsx7r3PflWtB0z3J93Z3kcdA",
      "id": {
        "kind": "youtube#video",
        "videoId": "qpgTC9MDx1o"
      },
      "snippet": {
        "publishedAt": "2014-09-29T16:00:13Z",
        "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
        "title": "Maroon 5 - Animals (Official Music Video)",
        "description": "Maroon 5 - Animals Director: Samuel Bayer Buy Now! http://smarturl.it/M5V Sign up for updates: http://smarturl.it/Maroon5.News.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/qpgTC9MDx1o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/qpgTC9MDx1o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/qpgTC9MDx1o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon5VEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2014-09-29T16:00:13Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "rJoHRPacZOOZH3a8a61UL0lTkX0",
      "id": {
        "kind": "youtube#video",
        "videoId": "n-J8Nw-uDk4"
      },
      "snippet": {
        "publishedAt": "2020-07-25T05:00:10Z",
        "channelId": "UCXbzirbkybMpRJ8TgidMeuQ",
        "title": "AWW Animals SOO Cute! Cute baby animals Videos Compilation cute moment of the animals #5",
        "description": "Watch more cute animals! https://youtube.com/playlist?list=PL4kqg9GsbL8kZ1jX__2NXhpQdg3axRo7g Subscribe to Funniest Animals for more adorable ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/n-J8Nw-uDk4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/n-J8Nw-uDk4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/n-J8Nw-uDk4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funniest Animals",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-25T05:00:10Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "mkCtfVOVSXkT9smhoOhZz1twfQY",
      "id": {
        "kind": "youtube#video",
        "videoId": "BkD2nN5275c"
      },
      "snippet": {
        "publishedAt": "2020-02-19T20:53:36Z",
        "channelId": "UC09IvZwjpunzrdHH1EHok-w",
        "title": "🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Pet Animals Videos 😇",
        "description": "Enjoy new funniest and very cute compilation of the week about try not laugh funny animals' life video. But some cats in this video will actually surprise you!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BkD2nN5275c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BkD2nN5275c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BkD2nN5275c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funny Animals' Life",
        "liveBroadcastContent": "none",
        "publishTime": "2020-02-19T20:53:36Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BQjA8tx2iEEEBjAQ-MngEBYkuKc",
      "id": {
        "kind": "youtube#video",
        "videoId": "gCYcHz2k5x0"
      },
      "snippet": {
        "publishedAt": "2013-06-17T14:30:09Z",
        "channelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "title": "Martin Garrix - Animals (Official Video)",
        "description": "Martin Garrix and Spinnin' Records proudly present the official video for Animals. Subscribe to Spinnin TV NOW : http://bit.ly/SPINNINTV Like this track? Add it to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/gCYcHz2k5x0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/gCYcHz2k5x0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/gCYcHz2k5x0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Spinnin' Records",
        "liveBroadcastContent": "none",
        "publishTime": "2013-06-17T14:30:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "q-CCaOIOZc-HWy4AQhNBMfSGlFc",
      "id": {
        "kind": "youtube#video",
        "videoId": "0GVExpdmoDs"
      },
      "snippet": {
        "publishedAt": "2019-07-22T16:03:51Z",
        "channelId": "UCNqFDjYTexJDET3rPDrmJKg",
        "title": "Maroon 5 - Animals (Lyrics)",
        "description": "Maroon 5 - Animals (Lyrics) ⏬ Download / Stream: http://smarturl.it/M5V Turn on notifications to stay updated with new uploads! Maroon5: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0GVExpdmoDs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0GVExpdmoDs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0GVExpdmoDs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "7clouds",
        "liveBroadcastContent": "none",
        "publishTime": "2019-07-22T16:03:51Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "nWZWs8D3lYypQIfVGozCz4FeYzM",
      "id": {
        "kind": "youtube#video",
        "videoId": "ex5RbbHugWw"
      },
      "snippet": {
        "publishedAt": "2020-07-29T05:00:05Z",
        "channelId": "UCXbzirbkybMpRJ8TgidMeuQ",
        "title": "AWW Animals SOO Cute! Cute baby animals Videos Compilation cute moment of the animals #6",
        "description": "Watch more cute animals! https://youtube.com/playlist?list=PL4kqg9GsbL8kZ1jX__2NXhpQdg3axRo7g Subscribe to Funniest Animals for more adorable ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ex5RbbHugWw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ex5RbbHugWw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ex5RbbHugWw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funniest Animals",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-29T05:00:05Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "tupSkaXiXVxIbW787_C35PrhXEQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "VB4CCHHYOqY"
      },
      "snippet": {
        "publishedAt": "2019-05-22T21:31:36Z",
        "channelId": "UCrBYTP-sa4dtOjMWEBfR_Ng",
        "title": "Try Not To Laugh Watching Funny Animals Compilation | Funniest Animals Vines 2019",
        "description": "This is a Try Not To Laugh Challenge Impossible Vine Compilation With The Funniest Animal Vines of AFV on All Of Vines. Hope you enjoy watching New funny ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VB4CCHHYOqY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VB4CCHHYOqY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VB4CCHHYOqY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "All Of Vines",
        "liveBroadcastContent": "none",
        "publishTime": "2019-05-22T21:31:36Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "HHqo_RVziZuH2boLOQOq0tvsCSY",
      "id": {
        "kind": "youtube#video",
        "videoId": "NGC8IS4gjpM"
      },
      "snippet": {
        "publishedAt": "2018-12-25T12:23:51Z",
        "channelId": "UC4cHAlpO0Aaib0KUnFxTX2g",
        "title": "Cute baby animals Videos Compilation cute moment of the animals - Cutest Animals #3",
        "description": "Thanks for watching and hope you enjoyed episode #3 of our cute baby animals compilation Watch more of the cutest animals: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/NGC8IS4gjpM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/NGC8IS4gjpM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/NGC8IS4gjpM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Cutest Animals",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-25T12:23:51Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BPqvFEyOF0uhvK9yUig4TzTXYqQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "pc8-8KfIW5c"
      },
      "snippet": {
        "publishedAt": "2019-01-11T17:52:15Z",
        "channelId": "UC09IvZwjpunzrdHH1EHok-w",
        "title": "🦁 Funniest Animals 🐼 - Try Not To Laugh 🤣 - Funny Domestic And Wild Animals&#39; Life",
        "description": "Enjoy new funniest and cutest compilation of the week about wild and domestic animals. Try not laugh funny animals' life video. Dogs are awesome animals.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pc8-8KfIW5c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pc8-8KfIW5c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pc8-8KfIW5c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funny Animals' Life",
        "liveBroadcastContent": "none",
        "publishTime": "2019-01-11T17:52:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PZgc--2NNvBA4EeD_5Bf1exdXaY",
      "id": {
        "kind": "youtube#video",
        "videoId": "LuZmG3oMjEw"
      },
      "snippet": {
        "publishedAt": "2020-06-13T05:00:04Z",
        "channelId": "UCXbzirbkybMpRJ8TgidMeuQ",
        "title": "Animals SOO Cute! Cute baby animals Videos Compilation cutest moment of the animals #9",
        "description": "Watch more cute animals! https://youtube.com/playlist?list=PL4kqg9GsbL8kZ1jX__2NXhpQdg3axRo7g Subscribe to Funniest Animals for more adorable ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LuZmG3oMjEw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LuZmG3oMjEw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LuZmG3oMjEw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funniest Animals",
        "liveBroadcastContent": "none",
        "publishTime": "2020-06-13T05:00:04Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "FiD2umTDEna0MH4v313-d1YjJ20",
      "id": {
        "kind": "youtube#video",
        "videoId": "FBWLV_q0ZA4"
      },
      "snippet": {
        "publishedAt": "2018-12-07T04:58:39Z",
        "channelId": "UChLDRB-FyoSYfFc1ahUyeHw",
        "title": "The Best Of Wild Animals Attacks 2018 - Most Amazing Moments Of  Underwater Battles",
        "description": "The Best Of Wild Animals Attacks 2018 - Most Amazing Moments Of Underwater Battles.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/FBWLV_q0ZA4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/FBWLV_q0ZA4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/FBWLV_q0ZA4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ani Channel",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-07T04:58:39Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "v7pkIStVUBRJBqkMoDved9kYoj4",
      "id": {
        "kind": "youtube#video",
        "videoId": "BDYUV7tx_pM"
      },
      "snippet": {
        "publishedAt": "2018-08-04T02:46:30Z",
        "channelId": "UCqW1-w8IroqB4EkJfbYNF8A",
        "title": "Wild animals name and sound",
        "description": "Guess the sound of roaring lions, trumpeting elephants, giggling hyenas, play with your children while they learn about the creatures of the wild.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BDYUV7tx_pM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BDYUV7tx_pM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BDYUV7tx_pM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "bunbun",
        "liveBroadcastContent": "none",
        "publishTime": "2018-08-04T02:46:30Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "i1DOi3LvXKoAxv_2_LJoM5F3D-Q",
      "id": {
        "kind": "youtube#video",
        "videoId": "HtmRcGNuJmc"
      },
      "snippet": {
        "publishedAt": "2020-07-30T20:00:01Z",
        "channelId": "UCINb0wqPz-A0dV9nARjJlOQ",
        "title": "Rescued Animals Melt Into This Woman&#39;s Arms When She Sings To Them | The Dodo Faith = Restored",
        "description": "Rescued bull couldn't stop crying — until this woman sang to him 🧡 For updates on Hanuman and all the other rescues at Santuário Vale da Rainha, check them ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HtmRcGNuJmc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HtmRcGNuJmc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HtmRcGNuJmc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Dodo",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-30T20:00:01Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "L6jjZdSeAAK8VoZ59KAHIggUVLg",
      "id": {
        "kind": "youtube#video",
        "videoId": "Ss5S3yiGxg8"
      },
      "snippet": {
        "publishedAt": "2020-02-15T16:59:46Z",
        "channelId": "UCwmZiChSryoWQCZMIQezgTg",
        "title": "The Greatest Fights In The Animal Kingdom | Top 5 | BBC Earth",
        "description": "Watch as monkeys, guanacos and kangaroos all go head-to-head in our greatest animal fights! For family or territory, these determined animals won't go down ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Ss5S3yiGxg8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Ss5S3yiGxg8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Ss5S3yiGxg8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BBC Earth",
        "liveBroadcastContent": "none",
        "publishTime": "2020-02-15T16:59:46Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "AcKHtxF2begw0tMxP_MmU3YTe1s",
      "id": {
        "kind": "youtube#video",
        "videoId": "sKT-nDLnEAo"
      },
      "snippet": {
        "publishedAt": "2019-01-17T07:06:41Z",
        "channelId": "UCbXKdfEyn9kCft9vq4m1Hpw",
        "title": "Wild Animals Swimming Race",
        "description": "wildanimalsrace #animalswimmingrace #animalrace Wild Animals Swimming Race Dinosaur Battles ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/sKT-nDLnEAo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/sKT-nDLnEAo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/sKT-nDLnEAo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Fox Mix Gaming",
        "liveBroadcastContent": "none",
        "publishTime": "2019-01-17T07:06:41Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "pk0miqoZWZBofJPQ5tbt5A2oME0",
      "id": {
        "kind": "youtube#video",
        "videoId": "0FTN0pjYVzw"
      },
      "snippet": {
        "publishedAt": "2019-12-10T06:00:00Z",
        "channelId": "UCk8GzjMOrta8yxDcKfylJYw",
        "title": "Diana and stories for children about animals",
        "description": "Diana, Roma and stories for children about animals - video compilation. Diana's INSTAGRAM https://www.instagram.com/kidsdianashow/ Subscribe to Kids ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/0FTN0pjYVzw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/0FTN0pjYVzw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/0FTN0pjYVzw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "✿ Kids Diana Show",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-10T06:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "BeO-EBenIF-e5j1EW2BZzMJ03l4",
      "id": {
        "kind": "youtube#video",
        "videoId": "eZOk_CSHfT8"
      },
      "snippet": {
        "publishedAt": "2019-11-29T23:30:02Z",
        "channelId": "UCmvqviNx70U0l4ZcvUAXxhA",
        "title": "10 Animals That Were Scarier than Dinosaurs",
        "description": "10 Animals That Were Scarier than Dinosaurs If you're new, Subscribe! → http://goo.gl/djmfuX Top 5 Best is the #1 place for all your heart warming stories about ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eZOk_CSHfT8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eZOk_CSHfT8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eZOk_CSHfT8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Top 5 Best",
        "liveBroadcastContent": "none",
        "publishTime": "2019-11-29T23:30:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "AZMjAXqPRz302qayeqPX1OnfwF8",
      "id": {
        "kind": "youtube#video",
        "videoId": "KDVtxitDfnI"
      },
      "snippet": {
        "publishedAt": "2018-05-04T18:37:18Z",
        "channelId": "UCrKIAVMSxnxRtasrtUdHfAg",
        "title": "14 CRAZIEST Animal Fights Caught On Camera",
        "description": "Top 10 Crazy Epic Wild Animal Fights Caught on Film I finally launched merch! use code \"420\" for 20% off: https://bit.ly/JakesTop10Merch SUBSCRIBE ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/KDVtxitDfnI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/KDVtxitDfnI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/KDVtxitDfnI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jake's Top 10",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-04T18:37:18Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "pgPbmO5PFC9hMJ_GvEeuCx2ooyw",
      "id": {
        "kind": "youtube#video",
        "videoId": "bDMfcKbJzng"
      },
      "snippet": {
        "publishedAt": "2015-01-19T02:17:42Z",
        "channelId": "UCRlTZYczW7Ck-sq8Zu9atyg",
        "title": "Amazing animal. Mystery of life",
        "description": "Amazing animal. Mystery of life. Animal is great. Such as cute behavior and interesting behavior, Amazing action of the animals I like. In particular, animal mating ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bDMfcKbJzng/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bDMfcKbJzng/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bDMfcKbJzng/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "daikokuoo",
        "liveBroadcastContent": "none",
        "publishTime": "2015-01-19T02:17:42Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "uNpBQAogmYzmK08Aqtbu0qVQdcw",
      "id": {
        "kind": "youtube#video",
        "videoId": "JzCbqIXvIzg"
      },
      "snippet": {
        "publishedAt": "2020-07-19T05:00:02Z",
        "channelId": "UChGJGhZ9SOOHvBB0Y4DOO_w",
        "title": "Ryan&#39;s bug catching with animals pretend play and learn animals facts!!!",
        "description": "Ryan's bug catching with animals pretend play and learn animals facts!!! facts for kids! Fun kids activities around the house and learning with Ryan's World!!!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/JzCbqIXvIzg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/JzCbqIXvIzg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/JzCbqIXvIzg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ryan's World",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-19T05:00:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "akhFwiZIONyuezmAeU84PWmggfk",
      "id": {
        "kind": "youtube#video",
        "videoId": "RKU6x1n9Hak"
      },
      "snippet": {
        "publishedAt": "2017-11-03T11:58:35Z",
        "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
        "title": "FORGET CATS! Funny KIDS vs ZOO ANIMALS are WAY FUNNIER! - TRY NOT TO LAUGH",
        "description": "These videos are the best! What happened to these kids at zoo is soooo hilarious! Watch this and try not to laugh, impossible! Only the best and the funniest kid ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RKU6x1n9Hak/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RKU6x1n9Hak/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RKU6x1n9Hak/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tiger Productions",
        "liveBroadcastContent": "none",
        "publishTime": "2017-11-03T11:58:35Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_PSqjumFfK_oSh2f0mPJL0eDOGs",
      "id": {
        "kind": "youtube#video",
        "videoId": "nRx0Yj0FkX0"
      },
      "snippet": {
        "publishedAt": "2020-07-24T16:33:33Z",
        "channelId": "UCLBZ747LLyrbuyxn9U7moxg",
        "title": "Top 10 Animals Who Can Talk",
        "description": "Top 10 Animals Who Can Talk 100M is the #1 place for all your heart warming stories about amazing people that will inspire you everyday. Make sure to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nRx0Yj0FkX0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nRx0Yj0FkX0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nRx0Yj0FkX0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "100M",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-24T16:33:33Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "VbhwdbcAYqlVaDCqI2QxZzUPLN0",
      "id": {
        "kind": "youtube#video",
        "videoId": "uIKJgxbhAzM"
      },
      "snippet": {
        "publishedAt": "2020-03-17T16:59:47Z",
        "channelId": "UCwmZiChSryoWQCZMIQezgTg",
        "title": "5 Amazing Animal Behaviours Caught on Spy Camera | BBC Earth",
        "description": "What DO animals get up to when they think we're not looking? We use spy animals to find out. Subscribe: http://bit.ly/BBCEarthSub #SpyInTheWild #SpyCamera ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uIKJgxbhAzM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uIKJgxbhAzM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uIKJgxbhAzM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BBC Earth",
        "liveBroadcastContent": "none",
        "publishTime": "2020-03-17T16:59:47Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "edCXMgP3d8nstnQOaqh6_YqNEcg",
      "id": {
        "kind": "youtube#video",
        "videoId": "dZ6F1KTnAVg"
      },
      "snippet": {
        "publishedAt": "2019-06-22T16:00:03Z",
        "channelId": "UCwmZiChSryoWQCZMIQezgTg",
        "title": "Best Wild Animal Chases | Top 5 | BBC Earth",
        "description": "Leopards and ostriches, hawks and iguanas, wolves and buffaloes... Which predator vs prey fight is the best one? Find out in this Top 5. Subscribe: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dZ6F1KTnAVg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/dZ6F1KTnAVg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/dZ6F1KTnAVg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "BBC Earth",
        "liveBroadcastContent": "none",
        "publishTime": "2019-06-22T16:00:03Z"
      }
    }
  ]
}

const db = {
  users: [
    {
      _id: '1',
      email: 'example@gmail.com',
      password: 'gggg'
    }    
  ],
  user_cats: [
    {
      _id: '2',
      user_id: '1',
      name: 'ANIMALS',
    }
  ],
  user_cat_videos: [
    {
      _id: '3',
      user_cat_id: '2',
      video_id: 'tt&543'
    }
  ]
}
