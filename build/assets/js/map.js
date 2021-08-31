document.addEventListener('DOMContentLoaded', function() {
    var mapElements = Array.from(document.querySelectorAll('.js-map'));
    mapElements.forEach(mapElement => {
        if (!mapElement) return;
        ymaps.ready(initWhereToBuy);

        function initWhereToBuy() {
            console.log('Initializing points map');

            let pointsMapData = [
                {
                    coords: [55.796127, 49.106414]
                },
                {
                    coords: [56.139787, 47.248734]
                },
                {
                    coords: [53.195878, 50.100202]
                },
                {
                    coords: [55.753220, 37.622513]
                },
                {
                    coords: [57.152985, 65.541227]
                },
                {
                    coords: [54.735152, 55.958736]
                }
            ];
            const pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [16, 36],
                iconImageOffset: [-8, -36]
            };

            const center = [55.796554, 49.104752];

            const mapInstance = new ymaps.Map(mapElement, {
                center: center,
                zoom: 5,
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 20,
                        bottom: 60
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            var objectManager = new ymaps.ObjectManager({
                geoObjectOpenBalloonOnClick: false,
                clusterize: false
            });
            mapInstance.geoObjects.add(objectManager);

            if (pointsMapData) {
                pointsMapData.forEach(function(item) {
                    var objectToAdd = {
                        id: item.coords.join('-'),
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: item.coords
                        },
                        options: {
                            ...pin,
                            balloonShadow: false,
                            hideIconOnBalloonOpen: false
                        }
                    };

                    objectManager.add(objectToAdd);
                });
            }
        }
    });
});
