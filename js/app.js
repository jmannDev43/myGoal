var vm = new Vue({
    el: '#app',
    data: {
        imageNames: ['../img/unsplash/city.jpg','../img/unsplash/darkmtn.jpg','../img/unsplash/desk.jpg','../img/unsplash/dock.jpg','../img/unsplash/getstarted.jpg','../img/unsplash/ladder.jpg','../img/unsplash/landscape.jpg','../img/unsplash/peak.jpg','../img/unsplash/seaAndSky.jpg','../img/unsplash/shore.jpg','../img/unsplash/sparkler.jpg','../img/unsplash/station.jpg','../img/unsplash/water.jpg','../img/unsplash/white.jpg','../img/unsplash/balloons.jpg','../img/unsplash/bulb.jpg','../img/unsplash/ladies.jpg','../img/unsplash/house.jpg','../img/unsplash/forest.jpg','../img/unsplash/redsky.jpg','../img/unsplash/original.jpg','../img/unsplash/nicedock.jpg','../img/unsplash/fishing.jpg'],
        credits: {
            //start
            city: { url: '/lili_popper', artist: 'Lili Popper', fontColor: 'black', artistPic: null },
            darkmtn: { url: '/roylandnye', artist: 'Lee Roylland', fontColor: 'white', artistPic: null },
            desk: { url: '/szolkin', artist: 'Sergei Zolkin', fontColor: 'dimgrey', artistPic: 'https://images.unsplash.com/profile-1441703748905-17e877b48ecb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=c0f0419ddedf7914e75d22f85e6b190c' },
            dock: { url: '/martantosh', artist: 'Stefanus Martanto Setyo Husodo', fontColor: 'white', artistPic: null },
            getstarted: { url: '/dustinlee', artist: 'Dustin Lee', fontColor: 'black', artistPic: null },
            ladder: { url: '/griffinkeller', artist: 'Griffin Keller', fontColor: 'white', artistPic: null },
            landscape: { url: '/tomaszpaciorek', artist: 'Tomasz Paciorek', fontColor: 'white', artistPic: null },
            peak: { url: '/samuelzeller', artist: 'Samuel Zeller', fontColor: '#2A5699', artistPic: 'https://images.unsplash.com/profile-1442942434783-9bdbf5c299d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=154b1eefbf1e7e864ce34deba3421feb' },    
            seaAndSky: { url: '/tmokuenko', artist: 'Thibault Mokuenko', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-fb-1446486165-45a97142c36d.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=841e1de180c7cfb384ecf951d54f71ef' },
            shore: { url: '/barnimages', artist: 'Barn Images', fontColor: 'white', artistPic: null },
            sparkler: { url: '/morgansessions', artist: 'Morgan Sessions', fontColor: 'white', artistPic: null },
            station: { url: '/nicolaiberntsen', artist: 'Nicolai Berntsen', fontColor: 'black', artistPic: null },
            water: { url: '/clemono2', artist: 'Clem Onojeghuo', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1441930306960-869e5652c94f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=2457ea69e8bbb37eccfc80bdd5e45cea' },
            white: { url: '/caitlinwynne', artist: 'Caitlin Wynne', fontColor: '#2E4571', artistPic: null },
            balloons: { url: '/danielacuevas', artist: 'Daniela Cuevas', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1441958373224-978c173b96c1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=8debf7658fca30d38ea0aeab1d0f050e' },
            bulb: { url: '/joshbyers', artist: 'Josh Byers', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1446234620058-0753011b8fb7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=9e3ca9ff86c76938315acf8fa2517ac2' },
            ladies: { url: '/goian', artist: 'Ian Schneider', fontColor: 'black', artistPic: 'https://images.unsplash.com/profile-1445207478973-a1c1ac352774?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=0e6faf8665180ab8e59904af3b71a906' },
            house: { url: '/inspirationde', artist: 'Inspiration de', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1441645770411-7dd0a514d9a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=f38aba637ac1696421726b32be0e7fe3' },
            forest: { url: '/szmigieldesign', artist: 'Lukasz Szmigiel', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1441974180349-689b9b920fea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=20fd2e3244ef0eefd3be5f72d5582ce4' },
            redsky: { url: '/pichler_sebastian', artist: 'Sebastian Pichler', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1444137653477-8d49fa7eba0a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=da7a49d8b7e953233fa4b1c453645890' },
            original: { url: '/szolkin', artist: 'Sergei Zolkin', fontColor: 'black', artistPic: 'https://images.unsplash.com/profile-1441703748905-17e877b48ecb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=c0f0419ddedf7914e75d22f85e6b190c' },
            nicedock: { url: '/bcampbell', artist: 'Brooke Campbell', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-1446470517260-e79e72abf026?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=20583fe0d0625fd034048ee2798dea49' },
            fishing: { url: '/loic', artist: 'Loic Djim', fontColor: 'white', artistPic: 'https://images.unsplash.com/profile-fb-1443800455-9fe65cb005ef.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32&s=30ecce3e546406ed32210d32dcd66ef0' }
            //end
        },
        showSplash: true,
        showLogo: false,
        imageCredit: { url: '/lili_popper', artist: 'Lili Popper', fontColor: 'black', artistPic: '' }
    },
    methods: {
        toggleCurtain: function(){
            this.showSplash = !this.showSplash;
        },
        createAccount: function(){
            Materialize.toast('New Account Created!', 4000);
            $('ul.tabs').tabs('select_tab', 'loginFrm');
        }
    },
    ready: function(){
//        this.$els.splash.style.height = window.innerHeight + 'px';
        $(".button-collapse").sideNav();        
//        this.getImageName();
        $.backstretch(this.imageNames);  
        this.showLogo = true;
    }
});


var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
//    vm.$els.splash.style.height = window.innerHeight + 'px';
}, false);

$(window).on("backstretch.before", function (e, instance, index) {
    var image = vm.$data.imageNames[index];
    image = image.replace('../img/unsplash/', '').replace('.jpg', '');
    vm.$set('imageCredit', vm.$data.credits[image]);
});