webpackJsonp([1],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trajets__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrajetPageModule", function() { return TrajetPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrajetPageModule = (function () {
    function TrajetPageModule() {
    }
    return TrajetPageModule;
}());
TrajetPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__trajets__["a" /* TrajetsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trajets__["a" /* TrajetsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__trajets__["a" /* TrajetsPage */]
        ]
    })
], TrajetPageModule);

//# sourceMappingURL=trajets.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_pop_over__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrajetsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrajetsPage = (function () {
    function TrajetsPage(navCtrl, navParams, db, popoverCtrl, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.afAuth = afAuth;
        this.user = afAuth.authState;
        this.user.subscribe(function (us) {
            _this.userID = us.uid;
            console.log(us.uid);
            _this.photoURL = us.photoURL;
            _this.voyagesRes = db.list('/trajets');
            _this.voyagesRes.subscribe(function (resultat) {
                _this.filteredItems = [];
                resultat.forEach(function (item) {
                    if (item.chauffeur_UID == _this.userID) {
                        _this.filteredItems.push(item);
                    }
                });
            });
            _this.loadReservation(db, us.uid);
        });
    }
    TrajetsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProposerPage');
    };
    TrajetsPage.prototype.deleteItem = function (key) {
        this.voyagesRes.remove(key);
    };
    TrajetsPage.prototype.update = function (item) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__my_pop_over__["a" /* PopoverPage */], item, {});
        popover.present();
    };
    TrajetsPage.prototype.loadReservation = function (db, uid) {
        var _this = this;
        this.voyagesReservation = db.list('/users/' + uid + '/reservations');
        //  this.voyagesReservation.subscribe(() => {});;
        console.log('/users/' + uid + '/reservations');
        this.reservationItems = [];
        this.voyagesReservation.subscribe(function (reservations) {
            reservations.forEach(function (item) {
                _this.voyagesRes.subscribe(function (voyages) {
                    voyages.forEach(function (voyage) {
                        if (voyage.trajet_id == item.idTrajetReserve) {
                            _this.reservationItems.push(voyage);
                        }
                    });
                });
            });
        });
    };
    TrajetsPage.prototype.annuler = function (voyage) {
        var reservation;
        this.voyagesReservation.subscribe(function (reservations) {
            reservations.forEach(function (item) {
                if (item.idTrajetReserve == voyage.trajet_id) {
                    console.log(item);
                    reservation = item;
                }
            });
        });
        this.voyagesReservation.remove(reservation.$key);
    };
    return TrajetsPage;
}());
TrajetsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-trajets',template:/*ion-inline-start:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\trajets\trajets.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Mes Trajets</ion-title>\n\n        <ion-img width="80" height="80" src=""></ion-img>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-item-group>\n\n        <ion-item-divider color="light">Mes trajets proposés</ion-item-divider>\n\n        <ion-item class="text" *ngFor="let voyage of filteredItems">\n\n            {{voyage.datedepart}} : {{voyage.depart | json}} <ion-icon name="arrow-round-forward"></ion-icon> {{voyage.arrive | json}}\n\n            <label  outline item-end icon-left>\n\n                {{voyage.price | json}} €\n\n            </label>\n\n            <button ion-button outline item-end icon-left color="secondary" (click)="update(voyage)">\n\n                <ion-icon name="refresh-circle" color="secondary"></ion-icon>\n\n                Update\n\n            </button>\n\n            <button ion-button outline item-end icon-left color="danger" (click)="deleteItem(voyage.$key)">\n\n                <ion-icon name="close" color="danger"></ion-icon>\n\n                Delete\n\n            </button>\n\n        </ion-item>\n\n        <ion-item-divider color="light">Mes trajets reservés</ion-item-divider>\n\n\n\n\n\n        <ion-item class="text" *ngFor="let reservation of reservationItems">\n\n            {{reservation.datedepart}} : {{reservation.depart | json}} <ion-icon name="arrow-round-forward"></ion-icon> {{reservation.arrive | json}}\n\n            <label  outline item-end icon-left>\n\n                {{reservation.price | json}} €\n\n            </label>\n\n\n\n            <button ion-button outline item-end icon-left color="danger" (click)="annuler(reservation)">\n\n                <ion-icon name="close" color="danger"></ion-icon>\n\n                Remove\n\n            </button>\n\n        </ion-item>\n\n\n\n\n\n    </ion-item-group>\n\n</ion-content>\n\n\n\n    '/*ion-inline-end:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\trajets\trajets.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object])
], TrajetsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=trajets.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map