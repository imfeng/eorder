angular.module('starter.services', [])
    .factory('cartList', function() {
        var cart = [];
        return cart;
    })
    .factory('restaurantInfo', function() {

        var nameList = [{
                'id': 0001,
                'slug': 'icafe',
                'name': '中正大學 I 嘎逼複合式餐廳',
                'profile': 'img/profile.jpg',
                'mainPic': 'img/main-food.jpg',
                'likesNum': 7,
                'commentsNum': 5,
                'ratings': 4.6,
                'location': '民雄中吃',
                'time': '10:00 AM ~ 21:00 PM',
                'facebook': '',
                'phone': '',
                'category': ['韓國料理', '咖啡'],

            },
            {
                'id': 0002,
                'slug': '3r3h',
                'name': '3皇3家複合式餐飲店',
                'profile': 'img/profile-33.jpg',
                'mainPic': 'img/33.jpg',
                'likesNum': 87,
                'commentsNum': 99,
                'ratings': 3.6,
                'location': '嘉義市中山路',
                'time': '10:00 AM ~ 21:00 PM',
                'category': ['簡餐', '飲料'],
            }

        ];
        return {
            'list': nameList,
            getSlug: function(slug) {
                for (var key in nameList) {
                    console.log(key);
                    if (nameList[key].slug == slug) {
                        return nameList[key];
                    }
                }
                return null;
            }
        }

    })
    .factory('restaurantMenu', function() {
        var menu = { "icafe": [{ "name": "美式咖啡", "price": 70, "type": { "溫度": ["熱", "冷"], "尺寸": ["小", "中", "大"] }, "Category": "咖啡" }, { "name": "特調咖啡", "price": 75, "type": { "溫度": ["熱", "冷"], "尺寸": ["中", "大"] }, "Category": "咖啡" }, { "name": "漂浮咖啡", "price": 95, "type": { "溫度": ["熱", "冷"], "尺寸": ["中", "大"] }, "Category": "咖啡" }, { "name": "A素食 早午餐", "price": 140, "type": { "麵包": ["土司", "巧巴達"], "附餐飲料": ["柳橙汁(去冰)", "紅茶(熱)", "紅茶(去冰)"] }, "Category": "早午餐" }] }
        return {
            all: menu,
            slug: function(slug) {
                return menu[slug];
            }
        };
    }).factory()