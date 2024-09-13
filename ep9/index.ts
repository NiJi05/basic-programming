const games = [
    {
        "gameID": "236717",
        "steamAppID": "1245620",
        "cheapest": "49.16",
        "cheapestDealID": "0yH%2B27fnkwwPMEtLKiv52IGhamBesRW%2F9Ictx3%2B%2B2t0%3D",
        "external": "ELDEN RING",
        "internalName": "ELDENRING",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_sm_120.jpg?t=1726158298"
    },
    {
        "gameID": "240580",
        "steamAppID": null,
        "cheapest": "59.99",
        "cheapestDealID": "JeekR4LAXQWj8VZRl%2F5iX4ejLvCodE%2BmY8QKDcoJ94o%3D",
        "external": "Elden Ring (XBOX)",
        "internalName": "ELDENRINGXBOX",
        "thumb": "https://images.greenmangaming.com/c9ac0f31c1074ec2a621eb00fb54fa4a/8fdcca7bfd73453091307d6cd3a168e3.jpg"
    },
    {
        "gameID": "236719",
        "steamAppID": null,
        "cheapest": "79.99",
        "cheapestDealID": "vu5CzCAKXbmweFGRA%2BrN9iadpWJjTipQys28CafJ3wA%3D",
        "external": "ELDEN RING Deluxe Edition",
        "internalName": "ELDENRINGDELUXEEDITION",
        "thumb": "https://images.greenmangaming.com/7e11a16e0f0e4f54bf8105c2748b3d2e/845ea86adb4948f8899011bd5318370c.jpg"
    },
    {
        "gameID": "282776",
        "steamAppID": null,
        "cheapest": "32.15",
        "cheapestDealID": "93gJ4M0WTo1CTG5cXxAus5pwUGnj8zjMhfSz0XW2XEM%3D",
        "external": "ELDEN RING Shadow of the Erdtree",
        "internalName": "ELDENRINGSHADOWOFTHEERDTREE",
        "thumb": "https://images.greenmangaming.com/e826a46fbd484f9fa995fb9f58605892/a16ccb899d5347eaaf30ab3692eee902.jpg"
    },
    {
        "gameID": "282778",
        "steamAppID": null,
        "cheapest": "66.74",
        "cheapestDealID": "Hgw9tZz0MglZJy9hebKDe%2BDUPJ9u4X226ITqK30scj4%3D",
        "external": "ELDEN RING Shadow of the Erdtree Edition",
        "internalName": "ELDENRINGSHADOWOFTHEERDTREEEDITION",
        "thumb": "https://sttc.gamersgate.com/images/product/elden-ring-shadow-of-the-erdtree-edition/cover-180-9e49ce.png"
    },
    {
        "gameID": "282777",
        "steamAppID": null,
        "cheapest": "42.39",
        "cheapestDealID": "9RqSwOn7sMSnHD0cBiYPc%2BE8ROZcOJCwaW3MAWFSjZ8%3D",
        "external": "ELDEN RING Shadow of the Erdtree Premium Bundle",
        "internalName": "ELDENRINGSHADOWOFTHEERDTREEPREMIUMBUNDLE",
        "thumb": "https://images.greenmangaming.com/7cdd18f1ab3d42e582daabf87a560b60/9f2900917f6a49188ae3922f20a4d0f6.jpg"
    },
    {
        "gameID": "282779",
        "steamAppID": null,
        "cheapest": "80.48",
        "cheapestDealID": "pyRi10LWQdMSoOFSyFUyyiqWCU0cegf2XbAnqSibPgk%3D",
        "external": "ELDEN RING Shadow of the Erdtree Deluxe Edition",
        "internalName": "ELDENRINGSHADOWOFTHEERDTREEDELUXEEDITION",
        "thumb": "https://sttc.gamersgate.com/images/product/elden-ring-shadow-of-the-erdtree-deluxe-edition/cover-180-856d22.jpg"
    }
]


const cheapest = games.filter(function (element, index) {
    return Number(element.cheapest) < 40
})

console.log(cheapest)

const person = {
    firtName: 'rain',
    lastName: 'newjeans',
    age: 19,
    job: 'IDOL',
    fullName: ''

}
console.log(person.firtName)

function A() {
    console.log(person.firtName + " " + person.lastName)
}

function B() {
    console.log(person.firtName + " " + person.lastName)

}


const anime = {
    "data": [
        {
            "mal_id": 50265,
            "url": "https://myanimelist.net/anime/50265/Spy_x_Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1441/122795t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1441/122795.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1441/122795t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1441/122795l.webp"
                }
            },
            "trailer": {
                "youtube_id": "ofXigq9aIpo",
                "url": "https://www.youtube.com/watch?v=ofXigq9aIpo",
                "embed_url": "https://www.youtube.com/embed/ofXigq9aIpo?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/ofXigq9aIpo/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/ofXigq9aIpo/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/ofXigq9aIpo/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/ofXigq9aIpo/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/ofXigq9aIpo/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family"
                },
                {
                    "type": "Japanese",
                    "title": "SPY×FAMILY"
                }
            ],
            "title": "Spy x Family",
            "title_english": null,
            "title_japanese": "SPY×FAMILY",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-04-09T00:00:00+00:00",
                "to": "2022-06-25T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 4,
                        "year": 2022
                    },
                    "to": {
                        "day": 25,
                        "month": 6,
                        "year": 2022
                    }
                },
                "string": "Apr 9, 2022 to Jun 25, 2022"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.5,
            "scored_by": 999346,
            "rank": 136,
            "popularity": 67,
            "members": 1632961,
            "favorites": 39599,
            "synopsis": "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise \"Twilight\" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.\n\nIn the bustling Ostanian city of Berlint, Twilight dons the alias of \"Loid Forger,\" an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. \n\nUnfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as \"Thorn Princess\"—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.\n\n[Written by MAL Rewrite]",
            "background": "Winner of the Anime of the Year (TV Series) at the 2023 Tokyo Anime Award Festival (TAAF).",
            "season": "spring",
            "year": 2022,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:00",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https://myanimelist.net/anime/genre/53/Childcare"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 57980,
            "url": "https://myanimelist.net/anime/57980/Ayataka_Spy_x_Family_Movie_Campaign_Ayataka_de_Hotto_Hitoiki",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1347/141185.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1347/141185t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1347/141185l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1347/141185.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1347/141185t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1347/141185l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Ayataka Spy x Family Movie Campaign Ayataka de Hotto Hitoiki"
                },
                {
                    "type": "Synonym",
                    "title": "Ayataka Gekijouban Spy x Family CM"
                },
                {
                    "type": "Japanese",
                    "title": "綾鷹・劇場版SPY×FAMILYキャンペーン　綾鷹でほっとひと息"
                }
            ],
            "title": "Ayataka Spy x Family Movie Campaign Ayataka de Hotto Hitoiki",
            "title_english": null,
            "title_japanese": "綾鷹・劇場版SPY×FAMILYキャンペーン　綾鷹でほっとひと息",
            "title_synonyms": [
                "Ayataka Gekijouban Spy x Family CM"
            ],
            "type": "CM",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2024-01-29T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 29,
                        "month": 1,
                        "year": 2024
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 29, 2024"
            },
            "duration": "15 sec",
            "rating": "G - All Ages",
            "score": 6.11,
            "scored_by": 1176,
            "rank": null,
            "popularity": 8609,
            "members": 5142,
            "favorites": 17,
            "synopsis": "A commercial between Spy x Family Movie: Code: White and Ayataka featuring the Forger family having a picnic under the cherry blossoms while drinking Ayataka tea.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 58159,
            "url": "https://myanimelist.net/anime/58159/Spy_x_Family_Movie__Code__White_Manner_Movie",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1567/141475.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1567/141475t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1567/141475l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1567/141475.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1567/141475t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1567/141475l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family Movie: Code: White Manner Movie"
                },
                {
                    "type": "Synonym",
                    "title": "Spy x Family Movie: Code: White Eizou Manner Kouza"
                },
                {
                    "type": "Synonym",
                    "title": "Spy x Family Movie: Code: White Movie Etiquette Course"
                },
                {
                    "type": "Japanese",
                    "title": "『劇場版 SPY×FAMILY CODE: White』映画マナー講座"
                }
            ],
            "title": "Spy x Family Movie: Code: White Manner Movie",
            "title_english": null,
            "title_japanese": "『劇場版 SPY×FAMILY CODE: White』映画マナー講座",
            "title_synonyms": [
                "Spy x Family Movie: Code: White Eizou Manner Kouza",
                "Spy x Family Movie: Code: White Movie Etiquette Course"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-07-28T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 28,
                        "month": 7,
                        "year": 2023
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 28, 2023"
            },
            "duration": "59 sec",
            "rating": "G - All Ages",
            "score": 6.74,
            "scored_by": 867,
            "rank": 5456,
            "popularity": 9899,
            "members": 3363,
            "favorites": 10,
            "synopsis": "Wit Studio and Cloverworks released a new short film using Spy x Family to remind the general public of basic movie theater etiquette. You’ll be able to watch it from all Toho cinemas in Japan. All members of the immediate Forger family are present. It focuses on Loid and Yor teaching Anya how to behave when in a movie theater. \n\n(Source: siliconera.com)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 56,
                    "type": "anime",
                    "name": "Educational",
                    "url": "https://myanimelist.net/anime/genre/56/Educational"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 59027,
            "url": "https://myanimelist.net/anime/59027/Spy_x_Family_Season_3",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1430/143493.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1430/143493t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1430/143493l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1430/143493.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1430/143493t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1430/143493l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family Season 3"
                },
                {
                    "type": "Japanese",
                    "title": "SPY×FAMILY Season 3"
                }
            ],
            "title": "Spy x Family Season 3",
            "title_english": null,
            "title_japanese": "SPY×FAMILY Season 3",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": null,
            "status": "Not yet aired",
            "airing": false,
            "aired": {
                "from": null,
                "to": null,
                "prop": {
                    "from": {
                        "day": null,
                        "month": null,
                        "year": null
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Not available"
            },
            "duration": "Unknown",
            "rating": "PG-13 - Teens 13 or older",
            "score": null,
            "scored_by": null,
            "rank": null,
            "popularity": 2498,
            "members": 78975,
            "favorites": 147,
            "synopsis": "Third season of Spy x Family.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [],
            "licensors": [],
            "studios": [],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https://myanimelist.net/anime/genre/53/Childcare"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 50602,
            "url": "https://myanimelist.net/anime/50602/Spy_x_Family_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1111/127508.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1111/127508t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1111/127508l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1111/127508.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1111/127508t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1111/127508l.webp"
                }
            },
            "trailer": {
                "youtube_id": "WFVY88Urzuc",
                "url": "https://www.youtube.com/watch?v=WFVY88Urzuc",
                "embed_url": "https://www.youtube.com/embed/WFVY88Urzuc?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/WFVY88Urzuc/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/WFVY88Urzuc/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/WFVY88Urzuc/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/WFVY88Urzuc/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/WFVY88Urzuc/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "SPY×FAMILY"
                }
            ],
            "title": "Spy x Family Part 2",
            "title_english": null,
            "title_japanese": "SPY×FAMILY",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 13,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-10-01T00:00:00+00:00",
                "to": "2022-12-24T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 10,
                        "year": 2022
                    },
                    "to": {
                        "day": 24,
                        "month": 12,
                        "year": 2022
                    }
                },
                "string": "Oct 1, 2022 to Dec 24, 2022"
            },
            "duration": "24 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.24,
            "scored_by": 510795,
            "rank": 326,
            "popularity": 171,
            "members": 969142,
            "favorites": 7469,
            "synopsis": "With Anya Forger successfully enrolled at the renowned Eden Academy, Operation Strix advances to its second phase. To investigate Ostanian politician Donovan Desmond, Anya must either befriend his son Damian or collect eight Stella Stars to become an Imperial Scholar. Fortunately, Anya has already acquired her first star. In celebration, her adoptive father, Loid, decides to fulfill her wish to adopt a dog.\n\nDuring their canine search, Loid receives new orders from his superiors, who have found that a band of Berlint University students is plotting to assassinate Westalis' Minister Brantz using bombs worn by trained dogs. While Loid tries to stop their plans, Anya stumbles upon the terrorists' base of operations. There, she befriends a kindhearted, clairvoyant dog who the family later names Bond.\n\nAlthough the Forgers continue to lead their individual lives in secrecy, the family—with a new fluffy addition—remains united through all of the unusual obstacles thrown their way.\n\n[Written by MAL Rewrite]",
            "background": "Spy x Family Part 2 was released on Blu-ray and DVD in three volumes from January 18, 2023 to May 17, 2023.",
            "season": "fall",
            "year": 2022,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:00",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https://myanimelist.net/anime/genre/53/Childcare"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 53887,
            "url": "https://myanimelist.net/anime/53887/Spy_x_Family_Season_2",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1506/138982.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1506/138982t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1506/138982l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1506/138982.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1506/138982t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1506/138982l.webp"
                }
            },
            "trailer": {
                "youtube_id": "75LyKY6AV4U",
                "url": "https://www.youtube.com/watch?v=75LyKY6AV4U",
                "embed_url": "https://www.youtube.com/embed/75LyKY6AV4U?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/75LyKY6AV4U/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/75LyKY6AV4U/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/75LyKY6AV4U/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/75LyKY6AV4U/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/75LyKY6AV4U/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family Season 2"
                },
                {
                    "type": "Japanese",
                    "title": "SPY×FAMILY Season 2"
                }
            ],
            "title": "Spy x Family Season 2",
            "title_english": null,
            "title_japanese": "SPY×FAMILY Season 2",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-10-07T00:00:00+00:00",
                "to": "2023-12-23T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 10,
                        "year": 2023
                    },
                    "to": {
                        "day": 23,
                        "month": 12,
                        "year": 2023
                    }
                },
                "string": "Oct 7, 2023 to Dec 23, 2023"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.07,
            "scored_by": 231977,
            "rank": 546,
            "popularity": 434,
            "members": 525219,
            "favorites": 3500,
            "synopsis": "With her ability to read minds, Anya Forger is the only one who knows the true identities of her unconventional family. Her pretend father Loid operates as an elite spy code-named Twilight; her mother Yor kills on demand as the assassin Thorn Princess; and their dog, Bond, possesses the gift of precognition. Although they hide the truth from each other, this pretense of a perfectly ordinary family provides Anya with the genuine love and warmth that she longed for as an orphan.\n\nOperation Strix—Loid's special mission to avoid potential war by gathering vital information and getting close to the powerful political figure, Donovan Desmond—is only possible if Anya plays her part right. She can either excel academically and become an Imperial Scholar at her prestigious school or make friends with Donovan's son, Damian. Neither is exactly easy, but with her adventurous attitude, Anya throws herself wholeheartedly into her mission as a Forger—all for the sake of international peace.\n\n[Written by MAL Rewrite]",
            "background": "Spy x Family Season 2 was released on Blu-ray and DVD in three volumes from December 20, 2023, to April 17, 2024.",
            "season": "fall",
            "year": 2023,
            "broadcast": {
                "day": "Saturdays",
                "time": "23:00",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 23:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                },
                {
                    "mal_id": 2512,
                    "type": "anime",
                    "name": "Studio Easter",
                    "url": "https://myanimelist.net/anime/producer/2512/Studio_Easter"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https://myanimelist.net/anime/genre/53/Childcare"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 53888,
            "url": "https://myanimelist.net/anime/53888/Spy_x_Family_Movie__Code__White",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1426/139388.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1426/139388t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1426/139388l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1426/139388.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1426/139388t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1426/139388l.webp"
                }
            },
            "trailer": {
                "youtube_id": "EpUAso8ITVw",
                "url": "https://www.youtube.com/watch?v=EpUAso8ITVw",
                "embed_url": "https://www.youtube.com/embed/EpUAso8ITVw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/EpUAso8ITVw/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/EpUAso8ITVw/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/EpUAso8ITVw/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/EpUAso8ITVw/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/EpUAso8ITVw/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy x Family Movie: Code: White"
                },
                {
                    "type": "Japanese",
                    "title": "SPY×FAMILY CODE: White"
                },
                {
                    "type": "English",
                    "title": "Spy x Family Code: White"
                }
            ],
            "title": "Spy x Family Movie: Code: White",
            "title_english": "Spy x Family Code: White",
            "title_japanese": "SPY×FAMILY CODE: White",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-12-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 12,
                        "year": 2023
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 22, 2023"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.16,
            "scored_by": 42724,
            "rank": 439,
            "popularity": 1572,
            "members": 152252,
            "favorites": 534,
            "synopsis": "Loid Forger, an elite spy, is warned by his handler that he may potentially be reassigned from his ongoing mission, Operation Strix. To maintain his position, he must make significant progress toward the operation's objectives, which involves having his adoptive daughter Anya earn sufficient Stella Stars to become an Imperial Scholar at Eden Academy.\n\nAfter learning of a cooking contest that awards the winning student with a Stella Star, Loid researches the judge's preferred dessert to help increase Anya's odds. However, perfectly recreating the judge's favorite meremere requires more than just following a recipe. Thus, the Forgers embark on a vacation to the Frigis region to try an authentic meremere. Not all goes smoothly on the trip, as the Forger family ends up entwined in a sinister plot to reignite war between the countries of Ostania and Westalis.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 1143,
                    "type": "anime",
                    "name": "TOHO animation",
                    "url": "https://myanimelist.net/anime/producer/1143/TOHO_animation"
                },
                {
                    "mal_id": 1365,
                    "type": "anime",
                    "name": "Shueisha",
                    "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 53,
                    "type": "anime",
                    "name": "Childcare",
                    "url": "https://myanimelist.net/anime/genre/53/Childcare"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 57435,
            "url": "https://myanimelist.net/anime/57435/Street_Fighter_6_x_Spy_x_Family_Movie__Code__White",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1319/140408.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1319/140408t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1319/140408l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1319/140408.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1319/140408t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1319/140408l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Street Fighter 6 x Spy x Family Movie: Code: White"
                },
                {
                    "type": "Japanese",
                    "title": "『ストリートファイター6』×『劇場版 SPY×FAMILY CODE: White』"
                }
            ],
            "title": "Street Fighter 6 x Spy x Family Movie: Code: White",
            "title_english": null,
            "title_japanese": "『ストリートファイター6』×『劇場版 SPY×FAMILY CODE: White』",
            "title_synonyms": [],
            "type": "CM",
            "source": "Other",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-12-04T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 12,
                        "year": 2023
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 4, 2023"
            },
            "duration": "1 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 6.71,
            "scored_by": 1383,
            "rank": null,
            "popularity": 10040,
            "members": 3219,
            "favorites": 2,
            "synopsis": "A short animated collaboration promoting Spy x Family Movie: Code: White and the video game  Street Fighter 6.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 858,
                    "type": "anime",
                    "name": "Wit Studio",
                    "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                },
                {
                    "mal_id": 1835,
                    "type": "anime",
                    "name": "CloverWorks",
                    "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 39782,
            "url": "https://myanimelist.net/anime/39782/Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1325/100903.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1325/100903t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1325/100903l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1325/100903.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1325/100903t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1325/100903l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Family"
                },
                {
                    "type": "Synonym",
                    "title": "Minna no Uta"
                },
                {
                    "type": "Japanese",
                    "title": "Family"
                }
            ],
            "title": "Family",
            "title_english": null,
            "title_japanese": "Family",
            "title_synonyms": [
                "Minna no Uta"
            ],
            "type": "Music",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-10-01T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 10,
                        "year": 2018
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Oct 1, 2018"
            },
            "duration": "2 min",
            "rating": "G - All Ages",
            "score": 5.56,
            "scored_by": 109,
            "rank": null,
            "popularity": 19956,
            "members": 249,
            "favorites": 0,
            "synopsis": "Music video for the song Family by Japanese rock band ORANGE RANGE that was featured on NHK's Minna no Uta program.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https://myanimelist.net/anime/producer/111/NHK"
                }
            ],
            "licensors": [],
            "studios": [],
            "genres": [],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https://myanimelist.net/anime/genre/19/Music"
                }
            ],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 51252,
            "url": "https://myanimelist.net/anime/51252/Spy_Kyoushitsu",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1491/132864.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1491/132864t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1491/132864l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1491/132864.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1491/132864t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1491/132864l.webp"
                }
            },
            "trailer": {
                "youtube_id": "BdrLDTuDQkc",
                "url": "https://www.youtube.com/watch?v=BdrLDTuDQkc",
                "embed_url": "https://www.youtube.com/embed/BdrLDTuDQkc?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/BdrLDTuDQkc/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/BdrLDTuDQkc/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/BdrLDTuDQkc/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/BdrLDTuDQkc/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/BdrLDTuDQkc/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Kyoushitsu"
                },
                {
                    "type": "Synonym",
                    "title": "Spy Room"
                },
                {
                    "type": "Japanese",
                    "title": "スパイ教室"
                },
                {
                    "type": "English",
                    "title": "Spy Classroom"
                }
            ],
            "title": "Spy Kyoushitsu",
            "title_english": "Spy Classroom",
            "title_japanese": "スパイ教室",
            "title_synonyms": [
                "Spy Room"
            ],
            "type": "TV",
            "source": "Light novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-01-05T00:00:00+00:00",
                "to": "2023-03-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 5,
                        "month": 1,
                        "year": 2023
                    },
                    "to": {
                        "day": 30,
                        "month": 3,
                        "year": 2023
                    }
                },
                "string": "Jan 5, 2023 to Mar 30, 2023"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 6.39,
            "scored_by": 43607,
            "rank": 7477,
            "popularity": 1567,
            "members": 152874,
            "favorites": 713,
            "synopsis": "A decade ago, mankind witnessed the deadly potential of weapons caused by the Great War. To avoid another catastrophe, governments worldwide have resorted to espionage to fulfill their agendas.\n\nIn the Din Republic, Lily is an enthusiastic young girl who aspires to become a spy and serve her nation. However, she begins to doubt her abilities, as she struggles to perform well academically. Lily's passion is reignited when she is offered provisional graduation by joining the spy team Lamplight, which she eagerly accepts despite the enigmatic nature of the opportunity.\n\nUpon arriving at her destination, Lily is surprised to find six other girls waiting there, all of whom have faced their own academic difficulties as well. A mysterious man named Klaus soon appears and reveals they must complete an \"Impossible Mission\": to infiltrate the Galgad Empire after just one month of training. Although skeptical, the girls eventually agree to work together under Klaus' guidance—as this might be their only chance to prove their worth as spies.\n\n[Written by MAL Rewrite]",
            "background": "Spy Kyoushitsu was released on Blu-ray and DVD in two volumes from March 24, 2023, to May 24, 2023.",
            "season": "winter",
            "year": 2023,
            "broadcast": {
                "day": "Thursdays",
                "time": "22:30",
                "timezone": "Asia/Tokyo",
                "string": "Thursdays at 22:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https://myanimelist.net/anime/producer/166/Movic"
                },
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https://myanimelist.net/anime/producer/238/AT-X"
                },
                {
                    "mal_id": 719,
                    "type": "anime",
                    "name": "Studio Mausu",
                    "url": "https://myanimelist.net/anime/producer/719/Studio_Mausu"
                },
                {
                    "mal_id": 1680,
                    "type": "anime",
                    "name": "BS NTV",
                    "url": "https://myanimelist.net/anime/producer/1680/BS_NTV"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 91,
                    "type": "anime",
                    "name": "feel.",
                    "url": "https://myanimelist.net/anime/producer/91/feel"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 54947,
            "url": "https://myanimelist.net/anime/54947/Spy_Kyoushitsu_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1317/136666.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1317/136666t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1317/136666l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1317/136666.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1317/136666t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1317/136666l.webp"
                }
            },
            "trailer": {
                "youtube_id": "pUP032KvP68",
                "url": "https://www.youtube.com/watch?v=pUP032KvP68",
                "embed_url": "https://www.youtube.com/embed/pUP032KvP68?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/pUP032KvP68/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/pUP032KvP68/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/pUP032KvP68/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/pUP032KvP68/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/pUP032KvP68/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Kyoushitsu 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Spy Room 2"
                },
                {
                    "type": "Japanese",
                    "title": "スパイ教室"
                },
                {
                    "type": "English",
                    "title": "Spy Classroom Season 2"
                }
            ],
            "title": "Spy Kyoushitsu 2nd Season",
            "title_english": "Spy Classroom Season 2",
            "title_japanese": "スパイ教室",
            "title_synonyms": [
                "Spy Room 2"
            ],
            "type": "TV",
            "source": "Light novel",
            "episodes": 12,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-07-13T00:00:00+00:00",
                "to": "2023-09-28T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 7,
                        "year": 2023
                    },
                    "to": {
                        "day": 28,
                        "month": 9,
                        "year": 2023
                    }
                },
                "string": "Jul 13, 2023 to Sep 28, 2023"
            },
            "duration": "23 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.15,
            "scored_by": 15593,
            "rank": 3514,
            "popularity": 3408,
            "members": 45073,
            "favorites": 105,
            "synopsis": "Four members of the Din Republic's spy team Lamplight embark on a mission to capture an enemy spy. Although they struggle to work together due to their clashing personalities, Thea, Monika, Erna, and Annett complete their objective. While enjoying a short break, the four girls encounter a woman named Matilda, who claims to be Annett's mother. As they get to know Matilda, the team is dragged into an escalating conflict that tests their teamwork and allegiances.\n\nMeanwhile, the remaining Lamplight members notice that the dispatched squad has yet to report back. Worried about their allies, Klaus and Lily set out on an emergency expedition to locate their missing teammates. As the two uncover troubling information about rising tensions in the area where their friends last were, they must act quickly to reassemble the team before the mission reaches the point of no return.\n\n[Written by MAL Rewrite]",
            "background": "Spy Kyoushitsu 2nd Season was released on Blu-ray and DVD in two volumes from October 25, 2023, to December 22, 2023.",
            "season": "summer",
            "year": 2023,
            "broadcast": {
                "day": "Thursdays",
                "time": "22:30",
                "timezone": "Asia/Tokyo",
                "string": "Thursdays at 22:30 (JST)"
            },
            "producers": [
                {
                    "mal_id": 166,
                    "type": "anime",
                    "name": "Movic",
                    "url": "https://myanimelist.net/anime/producer/166/Movic"
                },
                {
                    "mal_id": 238,
                    "type": "anime",
                    "name": "AT-X",
                    "url": "https://myanimelist.net/anime/producer/238/AT-X"
                },
                {
                    "mal_id": 719,
                    "type": "anime",
                    "name": "Studio Mausu",
                    "url": "https://myanimelist.net/anime/producer/719/Studio_Mausu"
                },
                {
                    "mal_id": 1680,
                    "type": "anime",
                    "name": "BS NTV",
                    "url": "https://myanimelist.net/anime/producer/1680/BS_NTV"
                },
                {
                    "mal_id": 1696,
                    "type": "anime",
                    "name": "Kadokawa",
                    "url": "https://myanimelist.net/anime/producer/1696/Kadokawa"
                }
            ],
            "licensors": [
                {
                    "mal_id": 376,
                    "type": "anime",
                    "name": "Sentai Filmworks",
                    "url": "https://myanimelist.net/anime/producer/376/Sentai_Filmworks"
                }
            ],
            "studios": [
                {
                    "mal_id": 91,
                    "type": "anime",
                    "name": "feel.",
                    "url": "https://myanimelist.net/anime/producer/91/feel"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 10116,
            "url": "https://myanimelist.net/anime/10116/Crayon_Shin-chan_Movie_19__Arashi_wo_Yobu_Ougon_no_Spy_Daisakusen",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1849/137876.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1849/137876t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1849/137876l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1849/137876.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1849/137876t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1849/137876l.webp"
                }
            },
            "trailer": {
                "youtube_id": "yMjB8oDXpiA",
                "url": "https://www.youtube.com/watch?v=yMjB8oDXpiA",
                "embed_url": "https://www.youtube.com/embed/yMjB8oDXpiA?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/yMjB8oDXpiA/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/yMjB8oDXpiA/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/yMjB8oDXpiA/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/yMjB8oDXpiA/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/yMjB8oDXpiA/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Crayon Shin-chan Movie 19: Arashi wo Yobu Ougon no Spy Daisakusen"
                },
                {
                    "type": "Synonym",
                    "title": "Eiga Crayon Shin-chan: Arashi wo Yobu Ougon no Spy Daisakusen"
                },
                {
                    "type": "Japanese",
                    "title": "映画 クレヨンしんちゃん 嵐を呼ぶ黄金のスパイ大作戦"
                },
                {
                    "type": "English",
                    "title": "Crayon Shin-chan: Fierceness That Invites Storm! Operation Golden Spy"
                },
                {
                    "type": "Spanish",
                    "title": "Shin Chan Película 19: Operación Espía de Oro"
                }
            ],
            "title": "Crayon Shin-chan Movie 19: Arashi wo Yobu Ougon no Spy Daisakusen",
            "title_english": "Crayon Shin-chan: Fierceness That Invites Storm! Operation Golden Spy",
            "title_japanese": "映画 クレヨンしんちゃん 嵐を呼ぶ黄金のスパイ大作戦",
            "title_synonyms": [
                "Eiga Crayon Shin-chan: Arashi wo Yobu Ougon no Spy Daisakusen"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-04-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 4,
                        "year": 2011
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 16, 2011"
            },
            "duration": "1 hr 48 min",
            "rating": "G - All Ages",
            "score": 6.98,
            "scored_by": 3378,
            "rank": 4331,
            "popularity": 8267,
            "members": 5711,
            "favorites": 2,
            "synopsis": "Comical action spy film including an indecent material (flatus) and a story of a girl who had obeyed her parents, but becomes self-aware. A mystery spy girl Lemon Sunomono suddenly appears in front of Shinnosuke, and she calls herself an emissary of Action Kamen. She had trained as a spy by her parents in the Sukashipestan Republic, and works for the Queens. Under her guidance, Shinnosuke decides to be a spy to fight for justice, and receives spy training. Under the instruction of Action Kamen, Lemon and Shinnosuke perform a mission to creep into the laboratory in the Hedelna Kingdom and recapture a capsule from an evil professor, but Lemon finds the real purpose of the Queens, and they fight to foil the plot of the Queens. \n\n(Source: Manabu Tsuribe)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1377,
                    "type": "anime",
                    "name": "Futabasha",
                    "url": "https://myanimelist.net/anime/producer/1377/Futabasha"
                },
                {
                    "mal_id": 2135,
                    "type": "anime",
                    "name": "Imagine",
                    "url": "https://myanimelist.net/anime/producer/2135/Imagine"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 247,
                    "type": "anime",
                    "name": "Shin-Ei Animation",
                    "url": "https://myanimelist.net/anime/producer/247/Shin-Ei_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 42,
                    "type": "anime",
                    "name": "Seinen",
                    "url": "https://myanimelist.net/anime/genre/42/Seinen"
                }
            ]
        },
        {
            "mal_id": 53044,
            "url": "https://myanimelist.net/anime/53044/Bo___Tos_Family_2nd_Season",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1361/127993.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1361/127993t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1361/127993l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1361/127993.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1361/127993t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1361/127993l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bo & To's Family 2nd Season"
                },
                {
                    "type": "Synonym",
                    "title": "Botos Family 2nd Season"
                },
                {
                    "type": "Japanese",
                    "title": "보토스 패밀리 2"
                },
                {
                    "type": "English",
                    "title": "Bo & To's Family 2nd Season"
                }
            ],
            "title": "Bo & To's Family 2nd Season",
            "title_english": "Bo & To's Family 2nd Season",
            "title_japanese": "보토스 패밀리 2",
            "title_synonyms": [
                "Botos Family 2nd Season"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 10,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-07-30T00:00:00+00:00",
                "to": "2022-10-01T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 30,
                        "month": 7,
                        "year": 2022
                    },
                    "to": {
                        "day": 1,
                        "month": 10,
                        "year": 2022
                    }
                },
                "string": "Jul 30, 2022 to Oct 1, 2022"
            },
            "duration": "12 min per ep",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": 18968,
            "popularity": 20931,
            "members": 194,
            "favorites": 0,
            "synopsis": "Second season of Bo &amp; To's Family.",
            "background": "",
            "season": "summer",
            "year": 2022,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2596,
                    "type": "anime",
                    "name": "Comma Studio",
                    "url": "https://myanimelist.net/anime/producer/2596/Comma_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 53042,
            "url": "https://myanimelist.net/anime/53042/Bo___Tos_Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1247/127991.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1247/127991t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1247/127991l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1247/127991.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1247/127991t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1247/127991l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bo & To's Family"
                },
                {
                    "type": "Synonym",
                    "title": "Botos Family"
                },
                {
                    "type": "Japanese",
                    "title": "보토스 패밀리"
                },
                {
                    "type": "English",
                    "title": "Bo & To's Family"
                }
            ],
            "title": "Bo & To's Family",
            "title_english": "Bo & To's Family",
            "title_japanese": "보토스 패밀리",
            "title_synonyms": [
                "Botos Family"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 27,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-09-20T00:00:00+00:00",
                "to": "2018-11-15T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 9,
                        "year": 2018
                    },
                    "to": {
                        "day": 15,
                        "month": 11,
                        "year": 2018
                    }
                },
                "string": "Sep 20, 2018 to Nov 15, 2018"
            },
            "duration": "3 min per ep",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": 18964,
            "popularity": 22092,
            "members": 138,
            "favorites": 0,
            "synopsis": "Bori, Toto, and Mochi are eccentric cats who live with their owner above a coffee shop; the three enjoy entertaining customers and hanging out with the other neighborhood animals.",
            "background": "",
            "season": "fall",
            "year": 2018,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2596,
                    "type": "anime",
                    "name": "Comma Studio",
                    "url": "https://myanimelist.net/anime/producer/2596/Comma_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 53043,
            "url": "https://myanimelist.net/anime/53043/Bo___Tos_Family_1st_Season_Part_2",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1432/127992.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1432/127992t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1432/127992l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1432/127992.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1432/127992t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1432/127992l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Bo & To's Family 1st Season Part 2"
                },
                {
                    "type": "Synonym",
                    "title": "Botos Family 1st Season Part 2"
                },
                {
                    "type": "Japanese",
                    "title": "보토스 패밀리"
                },
                {
                    "type": "English",
                    "title": "Bo & To's Family 1st Season Part 2"
                }
            ],
            "title": "Bo & To's Family 1st Season Part 2",
            "title_english": "Bo & To's Family 1st Season Part 2",
            "title_japanese": "보토스 패밀리",
            "title_synonyms": [
                "Botos Family 1st Season Part 2"
            ],
            "type": "TV",
            "source": "Original",
            "episodes": 27,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2019-04-18T00:00:00+00:00",
                "to": "2019-06-20T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 4,
                        "year": 2019
                    },
                    "to": {
                        "day": 20,
                        "month": 6,
                        "year": 2019
                    }
                },
                "string": "Apr 18, 2019 to Jun 20, 2019"
            },
            "duration": "3 min per ep",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": 18967,
            "popularity": 22234,
            "members": 132,
            "favorites": 0,
            "synopsis": "Second part of the first season of Bo &amp; To's Family.",
            "background": "",
            "season": "spring",
            "year": 2019,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": "Unknown"
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 2596,
                    "type": "anime",
                    "name": "Comma Studio",
                    "url": "https://myanimelist.net/anime/producer/2596/Comma_Studio"
                }
            ],
            "genres": [
                {
                    "mal_id": 36,
                    "type": "anime",
                    "name": "Slice of Life",
                    "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 15111,
            "url": "https://myanimelist.net/anime/15111/Spy_Penguin",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/40957.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/40957t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/40957l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/40957.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/40957t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/40957l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Penguin"
                },
                {
                    "type": "Japanese",
                    "title": "スパイペンギン"
                },
                {
                    "type": "English",
                    "title": "Spy Penguin"
                }
            ],
            "title": "Spy Penguin",
            "title_english": "Spy Penguin",
            "title_japanese": "スパイペンギン",
            "title_synonyms": [],
            "type": "OVA",
            "source": "Original",
            "episodes": 5,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-09-04T00:00:00+00:00",
                "to": "2012-11-04T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 9,
                        "year": 2012
                    },
                    "to": {
                        "day": 4,
                        "month": 11,
                        "year": 2012
                    }
                },
                "string": "Sep 4, 2012 to Nov 4, 2012"
            },
            "duration": "4 min per ep",
            "rating": "PG - Children",
            "score": null,
            "scored_by": null,
            "rank": 13989,
            "popularity": 18399,
            "members": 341,
            "favorites": 1,
            "synopsis": "Spy Penguin revolves around a group of three penguins who protect Paris from those who threaten the peace.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 817,
                    "type": "anime",
                    "name": "WField",
                    "url": "https://myanimelist.net/anime/producer/817/WField"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 819,
                    "type": "anime",
                    "name": "Next Media Animation",
                    "url": "https://myanimelist.net/anime/producer/819/Next_Media_Animation"
                }
            ],
            "genres": [],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 33772,
            "url": "https://myanimelist.net/anime/33772/Spy_Penguin_ONA",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/81324.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/81324t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/81324l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/81324.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/81324t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/81324l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Penguin (ONA)"
                },
                {
                    "type": "Japanese",
                    "title": "スパイペンギン"
                },
                {
                    "type": "English",
                    "title": "Spy Penguin"
                }
            ],
            "title": "Spy Penguin (ONA)",
            "title_english": "Spy Penguin",
            "title_japanese": "スパイペンギン",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Original",
            "episodes": 43,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-04-26T00:00:00+00:00",
                "to": "2014-12-11T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 26,
                        "month": 4,
                        "year": 2013
                    },
                    "to": {
                        "day": 11,
                        "month": 12,
                        "year": 2014
                    }
                },
                "string": "Apr 26, 2013 to Dec 11, 2014"
            },
            "duration": "2 min per ep",
            "rating": "PG - Children",
            "score": null,
            "scored_by": null,
            "rank": 13990,
            "popularity": 19631,
            "members": 266,
            "favorites": 0,
            "synopsis": "A continuation of the Spy Penguin. Spy Penguin revolves around a group of three penguins who protect Paris from those who threaten the peace.\n\n(Source: ANN)",
            "background": "The series consists of 47 episodes released online via GYAO! (a Japanese video on demand service by Yahoo! Japan. However, episodes 1-3 and 5 are the same as in previously released Spy Penguin OVAs, so the actual number of episodes with new content is 43.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 819,
                    "type": "anime",
                    "name": "Next Media Animation",
                    "url": "https://myanimelist.net/anime/producer/819/Next_Media_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 33773,
            "url": "https://myanimelist.net/anime/33773/Spy_Penguin_ONA__White_Christmas",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/81325.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/81325t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/81325l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/81325.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/81325t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/81325l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Penguin (ONA): White Christmas"
                },
                {
                    "type": "Japanese",
                    "title": "スパイペンギン ｢ホワイトクリスマス｣"
                },
                {
                    "type": "English",
                    "title": "Spy Penguin: White Christmas"
                }
            ],
            "title": "Spy Penguin (ONA): White Christmas",
            "title_english": "Spy Penguin: White Christmas",
            "title_japanese": "スパイペンギン ｢ホワイトクリスマス｣",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-12-30T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 30,
                        "month": 12,
                        "year": 2013
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 30, 2013"
            },
            "duration": "2 min",
            "rating": "PG - Children",
            "score": null,
            "scored_by": null,
            "rank": 13992,
            "popularity": 20193,
            "members": 236,
            "favorites": 0,
            "synopsis": "A Christmas special side story of the Spy Penguin ONA series.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 819,
                    "type": "anime",
                    "name": "Next Media Animation",
                    "url": "https://myanimelist.net/anime/producer/819/Next_Media_Animation"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 10,
                    "type": "anime",
                    "name": "Fantasy",
                    "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": []
        },
        {
            "mal_id": 8532,
            "url": "https://myanimelist.net/anime/8532/Katekyou_Hitman_Reborn_Vongola_Family_Soutoujou_Vongola_Shiki_Shuugakuryokou_Kuru",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/27088.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/27088t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/27088l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/27088.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/27088t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/27088l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Katekyou Hitman Reborn! Vongola Family Soutoujou! Vongola Shiki Shuugakuryokou, Kuru!!"
                },
                {
                    "type": "Synonym",
                    "title": "Katekyou Hitman Reborn! Special"
                },
                {
                    "type": "Japanese",
                    "title": "家庭教師ヒットマンREBORN! ボンゴレファミリー総登場! ボンゴレ式修学旅行、来る!!"
                },
                {
                    "type": "English",
                    "title": "Reborn! Here Comes a Vongola Family-Style School Trip!"
                }
            ],
            "title": "Katekyou Hitman Reborn! Vongola Family Soutoujou! Vongola Shiki Shuugakuryokou, Kuru!!",
            "title_english": "Reborn! Here Comes a Vongola Family-Style School Trip!",
            "title_japanese": "家庭教師ヒットマンREBORN! ボンゴレファミリー総登場! ボンゴレ式修学旅行、来る!!",
            "title_synonyms": [
                "Katekyou Hitman Reborn! Special"
            ],
            "type": "ONA",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-03-01T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 1,
                        "month": 3,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 2010"
            },
            "duration": "26 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.52,
            "scored_by": 14316,
            "rank": 1802,
            "popularity": 4241,
            "members": 28852,
            "favorites": 96,
            "synopsis": "An internet-only stand-alone special episode of Katekyou Hitman Reborn! on the Shounen-Jump website, where the main characters go to various tourist spots in Japan. It will be made available on DVD in July 2010, and extra scenes will be included.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https://myanimelist.net/anime/producer/467/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Artland",
                    "url": "https://myanimelist.net/anime/producer/8/Artland"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 27575,
            "url": "https://myanimelist.net/anime/27575/Spy_Gekimetsu",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/66779.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/66779t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/66779l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/66779.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/66779t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/66779l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Spy Gekimetsu"
                },
                {
                    "type": "Synonym",
                    "title": "Spy Destruction"
                },
                {
                    "type": "Japanese",
                    "title": "スパイ撃滅"
                }
            ],
            "title": "Spy Gekimetsu",
            "title_english": null,
            "title_japanese": "スパイ撃滅",
            "title_synonyms": [
                "Spy Destruction"
            ],
            "type": "Movie",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1942-07-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 7,
                        "year": 1942
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jul 16, 1942"
            },
            "duration": "12 min",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": 13989,
            "popularity": 15581,
            "members": 616,
            "favorites": 0,
            "synopsis": "A war propaganda film which begins with Roosevelt and Churchill in a secret meeting preparing their spy plans. Western spies in fancy suits and top hats parachute into Japan, disturbing innocent farmers. The Japanese civilians manage to thwart the spy activities.\n\n(Source: AniDB)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [],
            "genres": [],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 13,
                    "type": "anime",
                    "name": "Historical",
                    "url": "https://myanimelist.net/anime/genre/13/Historical"
                },
                {
                    "mal_id": 38,
                    "type": "anime",
                    "name": "Military",
                    "url": "https://myanimelist.net/anime/genre/38/Military"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 1900,
            "url": "https://myanimelist.net/anime/1900/Twin_Signal__Family_Game",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/65095.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/65095t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/65095l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/65095.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/65095t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/65095l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Twin Signal: Family Game"
                },
                {
                    "type": "Japanese",
                    "title": "TWIN SIGNAL~ファミリーゲーム~"
                },
                {
                    "type": "English",
                    "title": "Twin Signal"
                }
            ],
            "title": "Twin Signal: Family Game",
            "title_english": "Twin Signal",
            "title_japanese": "TWIN SIGNAL~ファミリーゲーム~",
            "title_synonyms": [],
            "type": "OVA",
            "source": "Manga",
            "episodes": 3,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1996-09-21T00:00:00+00:00",
                "to": "1996-11-21T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 9,
                        "year": 1996
                    },
                    "to": {
                        "day": 21,
                        "month": 11,
                        "year": 1996
                    }
                },
                "string": "Sep 21, 1996 to Nov 21, 1996"
            },
            "duration": "29 min per ep",
            "rating": "PG-13 - Teens 13 or older",
            "score": 6.24,
            "scored_by": 1102,
            "rank": 8310,
            "popularity": 11086,
            "members": 2332,
            "favorites": 4,
            "synopsis": "Signal, a robot companion built for Nobuhiko, is attacked by Pulse, one the its creator's previous prototypes. Reprogrammed by Dr. Otoi's mysterious rival, Pulse is loaded down with weapons and sent on a mission by Otoi: steal the most recent robot technology, and obliterate anything that gets in his way. \n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 16,
                    "type": "anime",
                    "name": "TV Tokyo",
                    "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
                },
                {
                    "mal_id": 122,
                    "type": "anime",
                    "name": "Tokyo Kids",
                    "url": "https://myanimelist.net/anime/producer/122/Tokyo_Kids"
                },
                {
                    "mal_id": 757,
                    "type": "anime",
                    "name": "Sony Music Entertainment",
                    "url": "https://myanimelist.net/anime/producer/757/Sony_Music_Entertainment"
                }
            ],
            "licensors": [
                {
                    "mal_id": 250,
                    "type": "anime",
                    "name": "Media Blasters",
                    "url": "https://myanimelist.net/anime/producer/250/Media_Blasters"
                },
                {
                    "mal_id": 595,
                    "type": "anime",
                    "name": "NYAV Post",
                    "url": "https://myanimelist.net/anime/producer/595/NYAV_Post"
                }
            ],
            "studios": [],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 24,
                    "type": "anime",
                    "name": "Sci-Fi",
                    "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 18,
                    "type": "anime",
                    "name": "Mecha",
                    "url": "https://myanimelist.net/anime/genre/18/Mecha"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 7575,
            "url": "https://myanimelist.net/anime/7575/Oh_Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/61193.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/61193t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/61193l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/61193.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/61193t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/61193l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Oh! Family"
                },
                {
                    "type": "Japanese",
                    "title": "Ｏｈ！ファミリー"
                }
            ],
            "title": "Oh! Family",
            "title_english": null,
            "title_japanese": "Ｏｈ！ファミリー",
            "title_synonyms": [],
            "type": "TV",
            "source": "Manga",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1986-10-06T00:00:00+00:00",
                "to": "1987-03-30T00:00:00+00:00",
                "prop": {
                    "from": {
                        "day": 6,
                        "month": 10,
                        "year": 1986
                    },
                    "to": {
                        "day": 30,
                        "month": 3,
                        "year": 1987
                    }
                },
                "string": "Oct 6, 1986 to Mar 30, 1987"
            },
            "duration": "23 min per ep",
            "rating": "G - All Ages",
            "score": 6.13,
            "scored_by": 535,
            "rank": 8871,
            "popularity": 11827,
            "members": 1855,
            "favorites": 0,
            "synopsis": "This story takes place in Florida, USA. The main characters are the lovable members of the Anderson family; each has their own characteristics which both conflict with and support the others'. By going through many events together (meaningful events as well as weird ones), the bond between them grows stronger and tighter.\n\n(Source: MU, edited)",
            "background": "",
            "season": "fall",
            "year": 1986,
            "broadcast": {
                "day": "Mondays",
                "time": "19:30",
                "timezone": "Asia/Tokyo",
                "string": "Mondays at 19:30 (JST)"
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 452,
                    "type": "anime",
                    "name": "Knack Productions",
                    "url": "https://myanimelist.net/anime/producer/452/Knack_Productions"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https://myanimelist.net/anime/genre/25/Shoujo"
                }
            ]
        },
        {
            "mal_id": 18109,
            "url": "https://myanimelist.net/anime/18109/Glass_no_Kamen_desu_ga_the_Movie__Onna_Spy_no_Koi_Murasaki_no_Bara_wa_Kiken_na_Kaori",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/67009.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/67009t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/67009l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/67009.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/67009t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/67009l.webp"
                }
            },
            "trailer": {
                "youtube_id": "EDf1WspfNDw",
                "url": "https://www.youtube.com/watch?v=EDf1WspfNDw",
                "embed_url": "https://www.youtube.com/embed/EDf1WspfNDw?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/EDf1WspfNDw/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/EDf1WspfNDw/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/EDf1WspfNDw/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/EDf1WspfNDw/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/EDf1WspfNDw/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Glass no Kamen desu ga the Movie: Onna Spy no Koi! Murasaki no Bara wa Kiken na Kaori!?"
                },
                {
                    "type": "Japanese",
                    "title": "ガラスの仮面ですが THE MOVIE 女スパイの恋! 紫のバラは危険な香り!?"
                }
            ],
            "title": "Glass no Kamen desu ga the Movie: Onna Spy no Koi! Murasaki no Bara wa Kiken na Kaori!?",
            "title_english": null,
            "title_japanese": "ガラスの仮面ですが THE MOVIE 女スパイの恋! 紫のバラは危険な香り!?",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-06-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 6,
                        "year": 2013
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jun 22, 2013"
            },
            "duration": "52 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 5.46,
            "scored_by": 251,
            "rank": 11774,
            "popularity": 13370,
            "members": 1147,
            "favorites": 0,
            "synopsis": "New Glass no Kamen movie.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 276,
                    "type": "anime",
                    "name": "DLE",
                    "url": "https://myanimelist.net/anime/producer/276/DLE"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 20,
                    "type": "anime",
                    "name": "Parody",
                    "url": "https://myanimelist.net/anime/genre/20/Parody"
                }
            ],
            "demographics": [
                {
                    "mal_id": 25,
                    "type": "anime",
                    "name": "Shoujo",
                    "url": "https://myanimelist.net/anime/genre/25/Shoujo"
                }
            ]
        },
        {
            "mal_id": 56984,
            "url": "https://myanimelist.net/anime/56984/Nakayoshi_Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1886/139291.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1886/139291t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1886/139291l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1886/139291.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1886/139291t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1886/139291l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Nakayoshi Family"
                },
                {
                    "type": "Synonym",
                    "title": "Minna no Uta"
                },
                {
                    "type": "Japanese",
                    "title": "なかよしファミリー"
                }
            ],
            "title": "Nakayoshi Family",
            "title_english": null,
            "title_japanese": "なかよしファミリー",
            "title_synonyms": [
                "Minna no Uta"
            ],
            "type": "Music",
            "source": "Original",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1974-12-07T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 7,
                        "month": 12,
                        "year": 1974
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Dec 7, 1974"
            },
            "duration": "2 min",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": null,
            "popularity": 25312,
            "members": 73,
            "favorites": 0,
            "synopsis": "Music video for the song Nakayoshi Family by Yui Yamazaki Ikka that was featured on NHK's Minna no Uta program.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 111,
                    "type": "anime",
                    "name": "NHK",
                    "url": "https://myanimelist.net/anime/producer/111/NHK"
                }
            ],
            "licensors": [],
            "studios": [],
            "genres": [],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 19,
                    "type": "anime",
                    "name": "Music",
                    "url": "https://myanimelist.net/anime/genre/19/Music"
                }
            ],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        },
        {
            "mal_id": 56996,
            "url": "https://myanimelist.net/anime/56996/Larva_Family",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1925/139335.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1925/139335t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1925/139335l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1925/139335.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1925/139335t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1925/139335l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Larva Family"
                },
                {
                    "type": "Japanese",
                    "title": "라바 패밀리"
                }
            ],
            "title": "Larva Family",
            "title_english": null,
            "title_japanese": "라바 패밀리",
            "title_synonyms": [],
            "type": "ONA",
            "source": "Unknown",
            "episodes": 26,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2023-05-04T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 4,
                        "month": 5,
                        "year": 2023
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "May 4, 2023"
            },
            "duration": "7 min per ep",
            "rating": "G - All Ages",
            "score": null,
            "scored_by": null,
            "rank": 16534,
            "popularity": 21906,
            "members": 146,
            "favorites": 0,
            "synopsis": "After yellow and red is captured by Mauve that flies them inside the greenhouse of a new location (that is close to New York, and the island) they begin their adventures inside the greenhouse while raising a baby larva, Magenta. Their parenthood adventures begins now.",
            "background": "Released on Netflix as nine 20-minutes long episodes.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 1292,
                    "type": "anime",
                    "name": "TUBA",
                    "url": "https://myanimelist.net/anime/producer/1292/TUBA"
                }
            ],
            "genres": [
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 57,
                    "type": "anime",
                    "name": "Gag Humor",
                    "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
                }
            ],
            "demographics": [
                {
                    "mal_id": 15,
                    "type": "anime",
                    "name": "Kids",
                    "url": "https://myanimelist.net/anime/genre/15/Kids"
                }
            ]
        }
    ],
    airing: function(){
        return this.data.filter(function(element, index) {
            return element.airing === true
        })
    },
    notAiring: function () {
        return this.data.filter(function(element, index) {
            return element.airing === false
        })
    }
}

console.log(anime.airing())


