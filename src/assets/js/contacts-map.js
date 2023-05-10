document.addEventListener('DOMContentLoaded', function() {
    var mapElements = Array.from(document.querySelectorAll('.js-contacts-map'));
    mapElements.forEach(mapElement => {
        if (!mapElement) return;
        ymaps.ready(contactsMap);

        function contactsMap() {
            console.log('Initializing points map');
            var pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/contacts-pin.svg',
                iconImageSize: [9, 18],
                iconImageOffset: [-4.5, -18]
            };

            var center = [55.796554, 49.104752];

            var pointsMapData = [
                {
                    coords: [55.804683, 49.041331],
                    title: 'производство',
                    content: `<div class="address">420030, г. Казань, ул. Набережная, 31 А</div>`,
                    initiallyOpen: true
                },
                {
                    coords: [55.797751, 49.109792],
                    title: 'офис',
                    content: `<div class="address">420111, г. Казань, ул. Карла Маркса, 1</div>
                    
                    <a href="#" class="route-link">
                    <span>
                    проложить маршрут
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 8"><path d="M16.35,3.65,13.17.46a.51.51,0,0,0-.71,0,.51.51,0,0,0,0,.71L14.79,3.5H0v1H14.79L12.46,6.83a.5.5,0,0,0,.71.71l3.18-3.19A.48.48,0,0,0,16.35,3.65Z"/></svg>
                    </a>`,
                    initiallyOpen: true
                }
            ];

            var mapInstance = new ymaps.Map(mapElement, {
                center: center,
                zoom: 13,
                controls: []
            });

            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 20,
                        bottom: 60
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            mapInstance.behaviors.disable('scrollZoom');

            var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover top">' +
                    `<a class="close" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 329"><path fill="#fff" d="M194.64,164.77,322.75,36.66A21.31,21.31,0,0,0,292.61,6.52L164.5,134.63,36.39,6.52A21.31,21.31,0,0,0,6.25,36.66L134.36,164.77,6.25,292.88A21.31,21.31,0,0,0,36.39,323L164.5,194.91,292.61,323a21.31,21.31,0,0,0,30.14-30.14Z" /></svg></a>` +
                    '<div class="arrow"></div>' +
                    '<div class="popover-inner">' +
                    '$[[options.contentLayout observeSize minWidth=235 maxWidth=310]]' +
                    '</div>' +
                    '</div>',
                {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function() {
                        this.constructor.superclass.build.call(this);

                        this._$element = $('.popover', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.close').on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function() {
                        this._$element.find('.close').off('click');

                        this.constructor.superclass.clear.call(this);
                    },

                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function() {
                        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                        if (!this._isElement(this._$element)) {
                            return;
                        }

                        this.applyElementOffset();

                        this.events.fire('shapechange');
                    },

                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */

                    applyElementOffset: function() {
                        this._$element.css({
                            right: -this._$element[0].offsetWidth,
                            top: -(this._$element.find('.arrow')[0].offsetHeight + 18 / 2 + this._$element[0].offsetHeight / 2)
                        });
                    },

                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function(e) {
                        e.preventDefault();

                        this.events.fire('userclose');
                    },

                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function() {
                        if (!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top],
                                [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ])
                        );
                    },

                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function(element) {
                        return element && element[0] && element.find('.arrow')[0];
                    }
                }
            );
            // Создание вложенного макета содержимого балуна.
            var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<h3 class="popover-title">$[properties.balloonHeader]</h3>' + '<div class="popover-content">$[properties.balloonContent]</div>'
            );

            var objectManager = new ymaps.ObjectManager({
                clusterize: false,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: true
            });
            mapInstance.geoObjects.add(objectManager);

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
                        balloonLayout: MyBalloonLayout,
                        balloonContentLayout: MyBalloonContentLayout,
                        balloonPanelMaxMapArea: 0,
                        hideIconOnBalloonOpen: false,
                        balloonOffset: [20, 0]
                    },
                    properties: {
                        balloonContent: item.content,
                        balloonHeader: item.title
                    }
                };
                objectManager.add(objectToAdd);

                if (item.initiallyOpen) {
                    objectManager.objects.balloon.open(item.coords.join('-'));
                }
            });
        }
    });
});
