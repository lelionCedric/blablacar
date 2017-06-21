webpackJsonp([2],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rechercher__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercherPageModule", function() { return RechercherPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechercherPageModule = (function () {
    function RechercherPageModule() {
    }
    return RechercherPageModule;
}());
RechercherPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rechercher__["a" /* RechercherPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rechercher__["a" /* RechercherPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__rechercher__["a" /* RechercherPage */]
        ]
    })
], RechercherPageModule);

//# sourceMappingURL=rechercher.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechercherPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RechercherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RechercherPage = (function () {
    function RechercherPage(navCtrl, navParams, db, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.user = afAuth.authState;
        this.bdd = db;
        this.user.subscribe(function (us) {
            _this.userID = us.uid;
        });
        this.voyage = {};
        console.log(this.userID);
        this.reservationTrajet = this.bdd.list('/users/' + this.userID + '/reservations');
    }
    RechercherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RechercherPage');
    };
    RechercherPage.prototype.submitRechercher = function () {
        var _this = this;
        this.voyagesRes = this.bdd.list('/trajets');
        this.voyagesRes.subscribe(function (voyageRes) {
            _this.filteredItems = [];
            voyageRes.forEach(function (item) {
                if (item.depart == _this.voyage.villeDep) {
                    if (item.arrive == _this.voyage.villeArr) {
                        if (item.datedepart == _this.voyage.dateVoy) {
                            _this.filteredItems.push(item);
                            console.log(item);
                        }
                    }
                }
            });
        });
    };
    RechercherPage.prototype.reserver = function (voyage) {
        var counter = 0;
        this.reservationTrajet = this.bdd.list('/users/' + this.userID + '/reservations');
        //console.log(this.userID);
        console.log(voyage);
        this.reservationTrajet.subscribe(function (reserves) {
            reserves.forEach(function (reserve) {
                counter++;
            });
        });
        this.reservationTrajet.update('trajet' + counter, {
            "idTrajetReserve": voyage
        });
    };
    return RechercherPage;
}());
RechercherPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-rechercher',template:/*ion-inline-start:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\rechercher\rechercher.html"*/'<!--\n\nGenerated template for the RechercherPage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Rechercher</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="submitRechercher()">\n\n\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label >Ville départ</ion-label>\n\n                <ion-input type="text" value="" [(ngModel)]="voyage.villeDep" name="villeDep"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed>Ville d\'arrivée</ion-label>\n\n                <ion-input type="text" [(ngModel)]="voyage.villeArr" name="villeArr"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Date du voyage</ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="DD/MM/YYYY" max = "2031-12-24" [(ngModel)]="voyage.dateVoy" name="dateVoy"></ion-datetime>    \n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-card-content>\n\n                    <button ion-button>Chercher</button>\n\n                </ion-card-content>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </form>\n\n    <ion-list>\n\n        <ion-item class="text" *ngFor="let voyage of filteredItems">\n\n            <h2>{{voyage.depart | json}} --> {{voyage.arrive | json}} : {{voyage.price | json}}€</h2>\n\n            <button ion-button outline item-end icon-left color="secondary" (click)="reserver(voyage.trajet_id)">\n\n                <ion-icon name="calendar" color="secondary"></ion-icon>\n\n                Reserver\n\n            </button>\n\n\n\n\n\n            <p>\n\n                {{voyage.description | json}}\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\rechercher\rechercher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]])
], RechercherPage);

//# sourceMappingURL=rechercher.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map