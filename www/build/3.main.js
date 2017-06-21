webpackJsonp([3],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposer__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposerPageModule", function() { return ProposerPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProposerPageModule = (function () {
    function ProposerPageModule() {
    }
    return ProposerPageModule;
}());
ProposerPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__proposer__["a" /* ProposerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proposer__["a" /* ProposerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__proposer__["a" /* ProposerPage */]
        ]
    })
], ProposerPageModule);

//# sourceMappingURL=proposer.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposerPage; });
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
 * Generated class for the ProposerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProposerPage = (function () {
    function ProposerPage(navCtrl, navParams, db, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.bdd = db;
        this.voyage = {};
        this.user = afAuth.authState;
        this.user.subscribe(function (us) {
            _this.userID = us.uid;
        });
    }
    ProposerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProposerPage');
    };
    ProposerPage.prototype.submitProposer = function () {
        console.log(this.voyage);
        this.voyagesRes = this.bdd.list('/trajets');
        var objectVoyage = this.voyagesRes.push({
            "arrive": this.voyage.villeArr,
            "chauffeur_UID": this.userID,
            "datearrive": this.voyage.dateVoy,
            "datedepart": this.voyage.dateVoy,
            "depart": this.voyage.villeDep,
            "nbplacerestante": 4,
            "peages": this.voyage.peage,
            "price": parseInt(this.voyage.prix),
            "description": this.voyage.desc,
        });
        objectVoyage.update({ "trajet_id": objectVoyage.key });
    };
    return ProposerPage;
}());
ProposerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-proposer',template:/*ion-inline-start:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\proposer\proposer.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Proposer</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form (ngSubmit)="submitProposer()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label >Ville départ</ion-label>\n\n                <ion-input type="text" value="" [(ngModel)]="voyage.villeDep" name="villeDep"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label fixed>Ville d\'arrivée</ion-label>\n\n                <ion-input type="text" [(ngModel)]="voyage.villeArr" name="villeArr"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Description</ion-label>\n\n                <ion-textarea placeholder="Je part d\'ici pour aller là-bas. Viendez." [(ngModel)]="voyage.desc" name="desc"></ion-textarea>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Date du voyage </ion-label>\n\n                <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="DD/MM/YYYY" max = "2031-12-24" [(ngModel)]="voyage.dateVoy" name="dateVoy"></ion-datetime>    \n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Peage(s)</ion-label>\n\n                <ion-checkbox [(ngModel)]="voyage.peage" name="peage"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Prix</ion-label>\n\n                <ion-input type="number" value="" [(ngModel)]="voyage.prix" name="prix" min=1>\n\n                </ion-input>\n\n                <ion-label>€</ion-label>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-card-content>\n\n                    <button ion-button type="submit">Proposer</button>\n\n                </ion-card-content>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Cedric\blablacar\blablacar_multi\src\pages\proposer\proposer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]])
], ProposerPage);

//# sourceMappingURL=proposer.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map