function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66755080216682, lng: 135.4280625940894},
        zoom: 18,
        mapId: '22bbcdca44f0da4b',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false

      });

      const markers = [ 
        [
            "Castle",
            34.666615441631066, 
            135.4317211271101,
            "castle.svg",
            100,
            150
        ],

        [
            "Eating Flesh Flower",
            34.667612570879626, 
            135.43076626073608,
            "flower.svg",
            53,
            69
        ],

        // 34.667612570879626, 135.43076626073608

        [
            "Ghost House",
            34.6676213949787, 
            135.42966119066273,
            "ghosthouse.svg",
            100,
            150
        ],

        // 34.6676213949787, 135.42966119066273

        [
            "Hill",
            34.667789052682444, 
            135.43284765485475,
            "hill.svg",
            100,
            150
        ],

        // 34.667789052682444, 135.43284765485475

        [
            "Star",
            34.66866168009183, 
            135.4295939590829,
            "star.svg",
            100,
            150
        ], 
// 34.66866168009183, 135.4295939590829


[
            "Dry Bone",
            34.66850854426179, 
            135.43305390708434,
            "drybone.svg",
            100,
            150
        ],
      //  34.66850854426179, 135.43305390708434
        [
            "Mario",
            34.666014476959, 
            135.4322477897048,
            "mario.svg",
            200,
            250
        ],

    // 34.666014476959, 135.4322477897048

        [
            "Mushroom",
            34.66782588117418, 
            135.42863661059954,
            "mushroom.svg",
            50,
            100
        ],
        // 34.66782588117418, 135.42863661059954
       
        [
            "Three Mushrooms",
            34.66681110612505, 
            135.42875462779182,
            "threemushroom.svg",
            50,
            100
        ],
// 34.66681110612505, 135.42875462779182
        [
            "Toad",
            34.665963446414686, 
            135.4289033597709,
            "toad.svg",
            50,
            100
        ],
// 34.665963446414686, 135.4289033597709
        [
            "Yoshi",
            34.6670618941208, 
            135.4320297500568,
            "yoshi.svg",
            50,
            100
        ]

        //34.6670618941208, 135.4320297500568

        








      ]

      for (let i = 0; i<markers.length; i++){
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size (currMarker[4], currMarker[5])
    
            },
    
            animation: google.maps.Animation.DROP
          });
        
          const infoWindow = new google.maps.InfoWindow({
    
                content: currMarker[0]
          });
    
          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });

      }
    
    
  
    
// 34.66779787676969, 135.4286741377222
// 34.666615441631066, 135.4317211271101
      
}

//34.66755080216682, 135.4280625940894