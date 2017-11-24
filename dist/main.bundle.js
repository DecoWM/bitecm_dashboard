webpackJsonp([61,94],{

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(452);


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__languages_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var I18nService = (function () {
    function I18nService(jsonApiService, ref) {
        this.jsonApiService = jsonApiService;
        this.ref = ref;
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.initLanguage(__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.jsonApiService.fetch("/langs/" + locale + ".json")
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = __WEBPACK_IMPORTED_MODULE_3__languages_model__["a" /* languages */].find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    return I18nService;
}());
I18nService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object])
], I18nService);

var _a, _b;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundService = SoundService_1 = (function () {
    function SoundService(notificationService) {
        this.notificationService = notificationService;
        this.config = {
            basePath: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_path,
            mainExt: '.mp3',
            alternateExt: '.ogg',
        };
    }
    SoundService.prototype.get = function (name) {
        var _this = this;
        if (SoundService_1.cache[name]) {
            return Promise.resolve(SoundService_1.cache[name]);
        }
        else {
            return new Promise(function (resolve, reject) {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/')) {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.alternateExt);
                }
                else {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.mainExt);
                }
                audioElement.addEventListener('error', reject);
                audioElement.load();
                SoundService_1.cache[name] = audioElement;
                resolve(audioElement);
            });
        }
    };
    SoundService.prototype.play = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on) {
            this.get(name).then(function (audio) {
                audio.play();
            });
        }
    };
    SoundService.prototype.mute = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = false;
        this.notificationService.smallBox({
            title: "MUTE",
            content: "All sounds have been muted!",
            color: "#a90329",
            timeout: 4000,
            icon: "fa fa-volume-off"
        });
    };
    SoundService.prototype.soundOn = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = true;
        this.notificationService.smallBox({
            title: "UNMUTE",
            content: "All sounds have been turned on!",
            color: "#40ac2b",
            sound_file: 'voice_alert',
            timeout: 5000,
            icon: "fa fa-volume-up"
        });
    };
    return SoundService;
}());
SoundService.cache = {};
SoundService = SoundService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], SoundService);

var SoundService_1, _a;
//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.userInfo = {
            username: 'Guest'
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    UserService.prototype.getLoginInfo = function () {
        var _this = this;
        return this.jsonApiService.fetch('/user/login-info.json')
            .do(function (user) {
            _this.userInfo = user;
            _this.user.next(user);
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands_help_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_body_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoiceControlService = VoiceControlService_1 = (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, notificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.notificationService = notificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command,
            available: false,
            autoStart: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto,
            localStorage: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_localStorage,
            lang: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_lang,
            started: false,
        };
        this.helpShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.state.available = !!__WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__["a" /* SpeechRecognition */];
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events.subscribe(function (event) {
            switch (event.type) {
                case 'start':
                    _this.bodyService.removeClass("service-not-allowed");
                    _this.bodyService.addClass("service-allowed");
                    break;
                case 'error':
                    _this.bodyService.removeClass("service-allowed");
                    _this.bodyService.addClass("service-not-allowed");
                    break;
                case 'match':
                    _this.notificationService.smallBox({
                        title: event.payload,
                        content: "loading...",
                        color: "#333",
                        sound_file: 'voice_alert',
                        timeout: 2000
                    });
                    break;
                case 'no match':
                    _this.notificationService.smallBox({
                        title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                        content: "Please speak clearly into the microphone",
                        color: "#a90329",
                        timeout: 5000,
                        icon: "fa fa-microphone"
                    });
                    break;
                case 'action':
                    _this.respondToAction(event);
                    break;
            }
        });
    }
    VoiceControlService.prototype.attachHelp = function () {
        if (this.state.available && !VoiceControlService_1.helpModal) {
            var component = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__commands_help_component__["a" /* CommandsHelpComponent */]);
            var viewContainerRef = this.app['_rootComponents'][0]._component.viewContainerRef;
            VoiceControlService_1.helpModal = viewContainerRef.createComponent(component, viewContainerRef.length);
        }
    };
    VoiceControlService.prototype.showHelp = function () {
        var _this = this;
        setTimeout(function () {
            // debugger
            VoiceControlService_1.helpModal._component.show();
            _this.helpShown.next(true);
        }, 50);
    };
    VoiceControlService.prototype.hideHelp = function () {
        VoiceControlService_1.helpModal && VoiceControlService_1.helpModal._component.hide();
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.notificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    return VoiceControlService;
}());
VoiceControlService = VoiceControlService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */]) === "function" && _h || Object])
], VoiceControlService);

var VoiceControlService_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=voice-control.service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var I18nModule = (function () {
    function I18nModule() {
    }
    return I18nModule;
}());
I18nModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */], __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__i18n_service__["a" /* I18nService */]]
    })
], I18nModule);

//# sourceMappingURL=i18n.module.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeZoomInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeZoomInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // decorator logic goes here
            // metadata.animations = [fadeZoomInTop()];
            // metadata.host = {"[@fadeZoomInTop]": ''};
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-zoom-in-top.decorator.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languages; });
var languages = [
    {
        "key": "us",
        "alt": "United States",
        "title": "English (US)"
    },
    {
        "key": "fr",
        "alt": "France",
        "title": "Français"
    },
    {
        "key": "es",
        "alt": "Spanish",
        "title": "Español"
    },
    {
        "key": "de",
        "alt": "German",
        "title": "Deutsch"
    },
    {
        "key": "jp",
        "alt": "Japan",
        "title": "日本語"
    },
    {
        "key": "cn",
        "alt": "China",
        "title": "中文"
    },
    {
        "key": "zh",
        "alt": "Chinese",
        "title": "汉语/漢語"
    },
    {
        "key": "pt",
        "alt": "Portugal",
        "title": "Portugal"
    },
    {
        "key": "ru",
        "alt": "Russia",
        "title": "Русский язык"
    },
    {
        "key": "kr",
        "alt": "Korea",
        "title": "한국어"
    }
];
//# sourceMappingURL=languages.model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(785),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainLayoutComponent = (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(787),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], MainLayoutComponent);

//# sourceMappingURL=main-layout.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyService = (function () {
    function BodyService() {
        this.$body = $('body');
    }
    BodyService.prototype.addClass = function (className) {
        this.$body.addClass(className);
    };
    BodyService.prototype.removeClass = function (className) {
        this.$body.removeClass(className);
    };
    BodyService.prototype.toggleClass = function (className, state) {
        this.$body.toggleClass(className, state);
    };
    return BodyService;
}());
BodyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BodyService);

//# sourceMappingURL=body.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommandsHelpComponent = (function () {
    function CommandsHelpComponent() {
    }
    CommandsHelpComponent.prototype.ngOnInit = function () {
    };
    CommandsHelpComponent.prototype.show = function () {
        this.seeCommandsModal.show();
    };
    CommandsHelpComponent.prototype.hide = function () {
        this.seeCommandsModal.hide();
    };
    return CommandsHelpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seeCommandsModal'),
    __metadata("design:type", Object)
], CommandsHelpComponent.prototype, "seeCommandsModal", void 0);
CommandsHelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-commands-help',
        template: __webpack_require__(803),
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], CommandsHelpComponent);

//# sourceMappingURL=commands-help.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition']);
//# sourceMappingURL=speech-recognition.api.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var store = {
    smartSkin: localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin,
    skin: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins.find(function (_skin) {
        return _skin.name == (localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin);
    }),
    skins: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins,
    fixedHeader: localStorage.getItem('sm-fixed-header') == 'true',
    fixedNavigation: localStorage.getItem('sm-fixed-navigation') == 'true',
    fixedRibbon: localStorage.getItem('sm-fixed-ribbon') == 'true',
    fixedPageFooter: localStorage.getItem('sm-fixed-page-footer') == 'true',
    insideContainer: localStorage.getItem('sm-inside-container') == 'true',
    rtl: localStorage.getItem('sm-rtl') == 'true',
    menuOnTop: localStorage.getItem('sm-menu-on-top') == 'true',
    colorblindFriendly: localStorage.getItem('sm-colorblind-friendly') == 'true',
    shortcutOpen: false,
    isMobile: (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    device: '',
    mobileViewActivated: false,
    menuCollapsed: false,
    menuMinified: false,
};
var LayoutService = (function () {
    function LayoutService(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.store = store;
        this.trigger();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(window, 'resize').debounceTime(100).map(function () {
            _this.trigger();
        }).subscribe();
    }
    LayoutService.prototype.trigger = function () {
        this.processBody(this.store);
        this.subject.next(this.store);
    };
    LayoutService.prototype.subscribe = function (next, err, complete) {
        return this.subject.subscribe(next, err, complete);
    };
    LayoutService.prototype.onSmartSkin = function (skin) {
        this.store.skin = skin;
        this.store.smartSkin = skin.name;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedHeader = function () {
        this.store.fixedHeader = !this.store.fixedHeader;
        if (this.store.fixedHeader == false) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedNavigation = function () {
        this.store.fixedNavigation = !this.store.fixedNavigation;
        if (this.store.fixedNavigation) {
            this.store.insideContainer = false;
            this.store.fixedHeader = true;
        }
        else {
            this.store.fixedRibbon = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedRibbon = function () {
        this.store.fixedRibbon = !this.store.fixedRibbon;
        if (this.store.fixedRibbon) {
            this.store.fixedHeader = true;
            this.store.fixedNavigation = true;
            this.store.insideContainer = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedPageFooter = function () {
        this.store.fixedPageFooter = !this.store.fixedPageFooter;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onInsideContainer = function () {
        this.store.insideContainer = !this.store.insideContainer;
        if (this.store.insideContainer) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onRtl = function () {
        this.store.rtl = !this.store.rtl;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onMenuOnTop = function () {
        this.store.menuOnTop = !this.store.menuOnTop;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onColorblindFriendly = function () {
        this.store.colorblindFriendly = !this.store.colorblindFriendly;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onCollapseMenu = function (value) {
        if (typeof value !== 'undefined') {
            this.store.menuCollapsed = value;
        }
        else {
            this.store.menuCollapsed = !this.store.menuCollapsed;
        }
        this.trigger();
    };
    LayoutService.prototype.onMinifyMenu = function () {
        this.store.menuMinified = !this.store.menuMinified;
        this.trigger();
    };
    LayoutService.prototype.onShortcutToggle = function (condition) {
        if (condition == null) {
            this.store.shortcutOpen = !this.store.shortcutOpen;
        }
        else {
            this.store.shortcutOpen = !!condition;
        }
        this.trigger();
    };
    LayoutService.prototype.dumpStorage = function () {
        localStorage.setItem('sm-skin', this.store.smartSkin);
        localStorage.setItem('sm-fixed-header', this.store.fixedHeader);
        localStorage.setItem('sm-fixed-navigation', this.store.fixedNavigation);
        localStorage.setItem('sm-fixed-ribbon', this.store.fixedRibbon);
        localStorage.setItem('sm-fixed-page-footer', this.store.fixedPageFooter);
        localStorage.setItem('sm-inside-container', this.store.insideContainer);
        localStorage.setItem('sm-rtl', this.store.rtl);
        localStorage.setItem('sm-menu-on-top', this.store.menuOnTop);
        localStorage.setItem('sm-colorblind-friendly', this.store.colorblindFriendly);
    };
    LayoutService.prototype.factoryReset = function () {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
            content: "Would you like to RESET all your saved widgets and clear LocalStorage?",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes" && localStorage) {
                localStorage.clear();
                location.reload();
            }
        });
    };
    LayoutService.prototype.processBody = function (state) {
        var $body = $('body');
        $body.removeClass(state.skins.map(function (it) { return (it.name); }).join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);
        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);
        $body.toggleClass('shortcut-on', state.shortcutOpen);
        state.mobileViewActivated = $(window).width() < 979;
        $body.toggleClass('mobile-view-activated', state.mobileViewActivated);
        if (state.mobileViewActivated) {
            $body.removeClass('minified');
        }
        if (state.isMobile) {
            $body.addClass("mobile-detected");
        }
        else {
            $body.addClass("desktop-detected");
        }
        if (state.menuOnTop)
            $body.removeClass('minified');
        if (!state.menuOnTop) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        else if (state.menuOnTop && state.mobileViewActivated) {
            $body.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        if (state.menuMinified && !state.menuOnTop && !state.mobileViewActivated) {
            $body.addClass("minified");
            $body.removeClass("hidden-menu");
            $body.removeClass("hidden-menu-mobile-lock");
        }
    };
    return LayoutService;
}());
LayoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], LayoutService);

var _a;
//# sourceMappingURL=layout.service.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+analytics/analytics.module": [
		1079,
		1
	],
	"./+blank/blank.module": [
		1101,
		42
	],
	"./+blog/blog.module": [
		1064,
		48
	],
	"./+ckeditor/ckeditor.module": [
		1102,
		35
	],
	"./+email-template/email-template.module": [
		1103,
		41
	],
	"./+error404/error404.module": [
		1104,
		40
	],
	"./+error500/error500.module": [
		1105,
		39
	],
	"./+forgot/forgot.module": [
		1074,
		54
	],
	"./+forum/forum.module": [
		1068,
		59
	],
	"./+gallery/gallery-demo.module": [
		1069,
		34
	],
	"./+general-view/general-view.module": [
		1065,
		47
	],
	"./+invoice/invoice.module": [
		1106,
		38
	],
	"./+locked/locked.module": [
		1075,
		50
	],
	"./+login/login.module": [
		1076,
		53
	],
	"./+post-view/post-view.module": [
		1066,
		46
	],
	"./+pricing-tables/pricing-tables.module": [
		1107,
		37
	],
	"./+profile/profile.module": [
		1070,
		44
	],
	"./+projects/projects-list.module": [
		1071,
		33
	],
	"./+register/register.module": [
		1077,
		52
	],
	"./+search/search.module": [
		1108,
		36
	],
	"./+social/social.module": [
		1080,
		51
	],
	"./+timeline/timeline.module": [
		1072,
		43
	],
	"./+topic-view/topic-view.module": [
		1067,
		45
	],
	"app/+app-views/app-views.module": [
		1073,
		31
	],
	"app/+auth/auth.module": [
		1078,
		55
	],
	"app/+calendar/calendar.module": [
		1063,
		7
	],
	"app/+dashboard/dashboard.module": [
		1081,
		30
	],
	"app/+e-commerce/e-commerce.module": [
		1082,
		32
	],
	"app/+forms/+bootstrap-editors/bootstrap-editors.module": [
		1083,
		11
	],
	"app/+forms/+bootstrap-elements/bootstrap-elements.module": [
		1084,
		28
	],
	"app/+forms/+bootstrap-validation/bootstrap-validation.module": [
		1085,
		5
	],
	"app/+forms/+dropzone-showcase/dropzone-showcase.module": [
		1086,
		23
	],
	"app/+forms/+form-elements/form-elements.module": [
		1087,
		27
	],
	"app/+forms/+form-layouts/form-layouts.module": [
		1088,
		2
	],
	"app/+forms/+form-plugins/form-plugins.module": [
		1089,
		3
	],
	"app/+forms/+form-validation/form-validation.module": [
		1090,
		26
	],
	"app/+forms/+image-cropping/image-editor.module": [
		1091,
		0
	],
	"app/+forms/+wizards/wizards.module": [
		1092,
		10
	],
	"app/+forms/forms-showcase.module": [
		1093,
		58
	],
	"app/+graphs/+chart-js/chart-js-showcase.module": [
		1094,
		13
	],
	"app/+graphs/+dygraphs/dygraphs.module": [
		1095,
		22
	],
	"app/+graphs/+flot-charts/flot-charts.module": [
		1096,
		12
	],
	"app/+graphs/+highchart-tables/highchart-tables.module": [
		1097,
		20
	],
	"app/+graphs/+morris-charts/morris-charts.module": [
		1098,
		19
	],
	"app/+graphs/graphs-showcase.module": [
		1099,
		21
	],
	"app/+maps/maps.module": [
		1100,
		18
	],
	"app/+miscellaneous/miscellaneous.module": [
		1109,
		57
	],
	"app/+outlook/outlook.module": [
		1110,
		4
	],
	"app/+smartadmin-intel/smartadmin-intel.module": [
		1111,
		49
	],
	"app/+tables/tables.module": [
		1112,
		8
	],
	"app/+ui-elements/+buttons/buttons.module": [
		1113,
		25
	],
	"app/+ui-elements/+general-elements/general-elements.module": [
		1114,
		24
	],
	"app/+ui-elements/+grid/grid.module": [
		1115,
		17
	],
	"app/+ui-elements/+icons/icons.module": [
		1116,
		9
	],
	"app/+ui-elements/+jquery-ui/jquery-ui.module": [
		1117,
		6
	],
	"app/+ui-elements/+nestable-lists/nestable-lists.module": [
		1118,
		16
	],
	"app/+ui-elements/+tree-views/tree-views.module": [
		1119,
		15
	],
	"app/+ui-elements/+typography/typography.module": [
		1120,
		14
	],
	"app/+ui-elements/ui-elements.module": [
		1121,
		56
	],
	"app/+widgets/widgets-showcase.module": [
		1122,
		29
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 451;


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(490);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SmartadminLayoutModule = (function () {
    function SmartadminLayoutModule() {
    }
    return SmartadminLayoutModule;
}());
SmartadminLayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_15__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["e" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["f" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_layouts_empty_layout_component__["a" /* EmptyLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ribbon_route_breadcrumbs_component__["a" /* RouteBreadcrumbsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
        ]
    })
], SmartadminLayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_widget_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminWidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmartadminWidgetsModule = (function () {
    function SmartadminWidgetsModule() {
    }
    return SmartadminWidgetsModule;
}());
SmartadminWidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]]
    })
], SmartadminWidgetsModule);

//# sourceMappingURL=smartadmin-widgets.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_smartadmin_widgets_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_users_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_body_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_form_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_utils_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_popover__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_14_ngx_popover__["PopoverModule"], __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_10__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_11__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3__widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__["a" /* ChatWidgetComponent */], __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_6__chat_chat_users_component__["a" /* ChatUsersComponent */], __WEBPACK_IMPORTED_MODULE_7__chat_chat_body_component__["a" /* ChatBodyComponent */], __WEBPACK_IMPORTED_MODULE_8__chat_chat_form_component__["a" /* ChatFormComponent */], __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__["a" /* AsideChatComponent */], __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__["a" /* AsideChatUserComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__chat_widget_chat_widget_component__["a" /* ChatWidgetComponent */], __WEBPACK_IMPORTED_MODULE_12__aside_chat_aside_chat_component__["a" /* AsideChatComponent */], __WEBPACK_IMPORTED_MODULE_13__aside_chat_user_aside_chat_user_component__["a" /* AsideChatUserComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-footer',
        template: __webpack_require__(788)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesMessageComponent = (function () {
    function ActivitiesMessageComponent() {
    }
    ActivitiesMessageComponent.prototype.ngOnInit = function () {
    };
    return ActivitiesMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesMessageComponent.prototype, "item", void 0);
ActivitiesMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesMessage]',
        template: __webpack_require__(789),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesMessageComponent);

//# sourceMappingURL=activities-message.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesNotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    return ActivitiesNotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesNotificationComponent.prototype, "item", void 0);
ActivitiesNotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesNotification]',
        template: __webpack_require__(790),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesNotificationComponent);

//# sourceMappingURL=activities-notification.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesTaskComponent = (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    return ActivitiesTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "lastUpdate", void 0);
ActivitiesTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesTask]',
        template: __webpack_require__(791),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesTaskComponent);

//# sourceMappingURL=activities-task.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_service__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesComponent = (function () {
    function ActivitiesComponent(el, renderer, activitiesService) {
        this.el = el;
        this.renderer = renderer;
        this.activitiesService = activitiesService;
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.count = 0;
        this.lastUpdate = new Date();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitiesService.getActivities().subscribe(function (data) {
            _this.activities = data;
            _this.count = data.reduce(function (sum, it) { return sum + it.data.length; }, 0);
            _this.currentActivity = data[0];
        });
    };
    ActivitiesComponent.prototype.setActivity = function (activity) {
        this.currentActivity = activity;
    };
    ActivitiesComponent.prototype.onToggle = function () {
        var _this = this;
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
            this.documentSub = this.renderer.listenGlobal('document', 'mouseup', function (event) {
                if (!_this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    _this.active = false;
                    _this.documentUnsub();
                }
            });
        }
        else {
            dropdown.fadeOut();
            this.documentUnsub();
        }
    };
    ActivitiesComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.lastUpdate = new Date();
            _this.loading = false;
        }, 1000);
    };
    ActivitiesComponent.prototype.ngOnDestroy = function () {
        this.documentUnsub();
    };
    ActivitiesComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-activities',
        template: __webpack_require__(792),
        providers: [__WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]) === "function" && _c || Object])
], ActivitiesComponent);

var _a, _b, _c;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapseMenuComponent = (function () {
    function CollapseMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    CollapseMenuComponent.prototype.onToggle = function () {
        this.layoutService.onCollapseMenu();
    };
    return CollapseMenuComponent;
}());
CollapseMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-collapse-menu',
        template: __webpack_require__(793)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], CollapseMenuComponent);

var _a;
//# sourceMappingURL=collapse-menu.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = (function () {
    function FullScreenComponent() {
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onToggle = function () {
        var $body = $('body');
        var documentMethods = {
            enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
            exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
        };
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            document.documentElement[documentMethods.enter.filter(function (method) {
                return document.documentElement[method];
            })[0]]();
        }
        else {
            $body.removeClass("full-screen");
            document[documentMethods.exit.filter(function (method) {
                return document[method];
            })[0]]();
        }
    };
    return FullScreenComponent;
}());
FullScreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-full-screen',
        template: __webpack_require__(794)
    }),
    __metadata("design:paramtypes", [])
], FullScreenComponent);

//# sourceMappingURL=full-screen.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.searchMobileActive = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSearchMobile = function () {
        this.searchMobileActive = !this.searchMobileActive;
        $('body').toggleClass('search-mobile', this.searchMobileActive);
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['/miscellaneous/search']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-header',
        template: __webpack_require__(795),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__speech_button_speech_button_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__i18n_i18n_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__voice_control_voice_control_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__voice_control_voice_control_module__["a" /* VoiceControlModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_12__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_14__i18n_i18n_module__["a" /* I18nModule */], __WEBPACK_IMPORTED_MODULE_15__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_popover__["PopoverModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__["a" /* ActivitiesMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__["a" /* ActivitiesNotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__["a" /* ActivitiesTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__["a" /* RecentProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__["a" /* FullScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__["a" /* CollapseMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__speech_button_speech_button_component__["a" /* SpeechButtonComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentProjectsComponent = (function () {
    function RecentProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent.prototype.clearProjects = function () {
        this.projectsService.clearProjects();
        this.projects = this.projectsService.getProjects();
    };
    return RecentProjectsComponent;
}());
RecentProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-recent-projects',
        template: __webpack_require__(796),
        providers: [__WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]) === "function" && _a || Object])
], RecentProjectsComponent);

var _a;
//# sourceMappingURL=recent-projects.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentProjectsService = (function () {
    function RecentProjectsService() {
        this.projects = [
            {
                "href": "/",
                "title": "Online e-merchant management system - attaching integration with the iOS"
            },
            {
                "href": "/",
                "title": "Notes on pipeline upgradee"
            },
            {
                "href": "/",
                "title": "Assesment Report for merchant account"
            }
        ];
    }
    RecentProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    RecentProjectsService.prototype.clearProjects = function () {
        this.projects = [];
    };
    return RecentProjectsService;
}());
RecentProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RecentProjectsService);

//# sourceMappingURL=recent-projects.service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutSwitcherComponent = (function () {
    function LayoutSwitcherComponent(layoutService) {
        this.layoutService = layoutService;
    }
    LayoutSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layoutService.subscribe(function (store) {
            _this.store = store;
        });
        this.store = this.layoutService.store;
    };
    LayoutSwitcherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayoutSwitcherComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    LayoutSwitcherComponent.prototype.onSmartSkin = function (skin) {
        this.layoutService.onSmartSkin(skin);
    };
    LayoutSwitcherComponent.prototype.onFixedHeader = function () {
        this.layoutService.onFixedHeader();
    };
    LayoutSwitcherComponent.prototype.onFixedNavigation = function () {
        this.layoutService.onFixedNavigation();
    };
    LayoutSwitcherComponent.prototype.onFixedRibbon = function () {
        this.layoutService.onFixedRibbon();
    };
    LayoutSwitcherComponent.prototype.onFixedPageFooter = function () {
        this.layoutService.onFixedPageFooter();
    };
    LayoutSwitcherComponent.prototype.onInsideContainer = function () {
        this.layoutService.onInsideContainer();
    };
    LayoutSwitcherComponent.prototype.onRtl = function () {
        this.layoutService.onRtl();
    };
    LayoutSwitcherComponent.prototype.onMenuOnTop = function () {
        this.layoutService.onMenuOnTop();
    };
    LayoutSwitcherComponent.prototype.onColorblindFriendly = function () {
        this.layoutService.onColorblindFriendly();
    };
    LayoutSwitcherComponent.prototype.factoryReset = function () {
        this.layoutService.factoryReset();
    };
    return LayoutSwitcherComponent;
}());
LayoutSwitcherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-layout-switcher',
        template: __webpack_require__(798)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], LayoutSwitcherComponent);

var _a;
//# sourceMappingURL=layout-switcher.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigBreadcrumbsComponent = (function () {
    function BigBreadcrumbsComponent() {
    }
    BigBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BigBreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BigBreadcrumbsComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BigBreadcrumbsComponent.prototype, "items", void 0);
BigBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-big-breadcrumbs',
        template: "\n   <div><h1 class=\"page-title txt-color-blueDark\">\n   <i class=\"fa-fw fa fa-{{icon}}\"></i>{{items[0]}}\n   <span *ngFor=\"let item of items.slice(1)\">> {{item}}</span>\n</h1></div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], BigBreadcrumbsComponent);

//# sourceMappingURL=big-breadcrumbs.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinifyMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinifyMenuComponent = (function () {
    function MinifyMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.layoutService.onMinifyMenu();
    };
    return MinifyMenuComponent;
}());
MinifyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-minify-menu',
        template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], MinifyMenuComponent);

var _a;
//# sourceMappingURL=minify-menu.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-navigation',
        template: __webpack_require__(799)
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_9__chat_chat_module__["a" /* ChatModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ]
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartMenuDirective = (function () {
    function SmartMenuDirective(menu, router, layoutService) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.layoutService = layoutService;
        this.togglersBinded = false;
        this.processLayout = function (store) {
            if (store.menuOnTop) {
                _this.$menu.find('li.open').each(function (i, li) {
                    _this.toggle($(li), false);
                });
            }
            else {
                _this.$menu.find('li.active').each(function (i, li) {
                    $(li).parents('li').each(function (j, parentLi) {
                        _this.toggle($(parentLi), true);
                    });
                });
            }
            if (store.mobileViewActivated) {
                $('body').removeClass("minified");
            }
        };
        this.$menu = $(this.menu.nativeElement);
    }
    SmartMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.processLayout(store);
        });
        this.routerSub = this.router.events.subscribe(function (event) {
            setTimeout(function () {
                _this.processLayout(_this.layoutService.store);
            }, 1);
            _this.routerSub.unsubscribe();
        });
        $('[routerLink]', this.$menu).on('click', function () {
            if (_this.layoutService.store.mobileViewActivated) {
                _this.layoutService.onCollapseMenu();
            }
        });
    };
    SmartMenuDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.togglersBinded) {
            this.$menu.find('li:has(> ul)').each(function (i, li) {
                var $menuItem = $(li);
                var $a = $menuItem.find('>a');
                var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
                $a.on('click', function (e) {
                    _this.toggle($menuItem);
                    e.stopPropagation();
                    return false;
                }).append(sign);
            });
            this.togglersBinded = true;
        }
    };
    SmartMenuDirective.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    SmartMenuDirective.prototype.toggle = function ($el, condition) {
        var _this = this;
        if (condition === void 0) { condition = !$el.data('open'); }
        $el.toggleClass('open', condition);
        if (condition) {
            $el.find('>ul').slideDown();
        }
        else {
            $el.find('>ul').slideUp();
        }
        $el.find('>a>.collapse-sign>em')
            .toggleClass('fa-plus-square-o', !condition)
            .toggleClass('fa-minus-square-o', condition);
        $el.data('open', condition);
        if (condition) {
            $el.siblings('.open').each(function (i, it) {
                var sib = $(it);
                _this.toggle(sib, false);
            });
        }
    };
    return SmartMenuDirective;
}());
SmartMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSmartMenu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */]) === "function" && _c || Object])
], SmartMenuDirective);

var _a, _b, _c;
//# sourceMappingURL=smart-menu.directive.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RibbonComponent = (function () {
    function RibbonComponent(layoutService) {
        this.layoutService = layoutService;
    }
    RibbonComponent.prototype.ngOnInit = function () {
    };
    RibbonComponent.prototype.resetWidgets = function () {
        this.layoutService.factoryReset();
    };
    return RibbonComponent;
}());
RibbonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-ribbon',
        template: __webpack_require__(800)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], RibbonComponent);

var _a;
//# sourceMappingURL=ribbon.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShortcutComponent = (function () {
    function ShortcutComponent(layoutService, router, renderer, el) {
        this.layoutService = layoutService;
        this.router = router;
        this.renderer = renderer;
        this.el = el;
        this.state = 'out';
    }
    ShortcutComponent.prototype.shortcutTo = function (route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    };
    ShortcutComponent.prototype.ngOnInit = function () {
    };
    ShortcutComponent.prototype.listen = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.state = store.shortcutOpen ? 'in' : 'out';
            if (store.shortcutOpen) {
                _this.documentSub = _this.renderer.listenGlobal('document', 'mouseup', function (event) {
                    if (!_this.el.nativeElement.contains(event.target)) {
                        _this.layoutService.onShortcutToggle(false);
                        _this.documentUnsub();
                    }
                });
            }
            else {
                _this.documentUnsub();
            }
        });
    };
    ShortcutComponent.prototype.ngAfterContentInit = function () {
        this.listen();
    };
    ShortcutComponent.prototype.ngAfterViewInit = function () {
    };
    ShortcutComponent.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    ShortcutComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ShortcutComponent;
}());
ShortcutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-shortcut',
        template: __webpack_require__(801),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('shortcutState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    height: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({
                    height: '*',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms 300ms ease-in '))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], ShortcutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shortcut.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commands_help_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VoiceControlModule = VoiceControlModule_1 = (function () {
    function VoiceControlModule() {
    }
    VoiceControlModule.forRoot = function () {
        return {
            ngModule: VoiceControlModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]]
        };
    };
    return VoiceControlModule;
}());
VoiceControlModule = VoiceControlModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__["a" /* SoundModule */], __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]]
    })
], VoiceControlModule);

var VoiceControlModule_1;
//# sourceMappingURL=voice-control.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_resolver__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_layout_layout_module__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component



// Core providers


// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_7__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        exports: [],
        providers: [
            // ENV_PROVIDERS,
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppState */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_auth_layout_component__ = __webpack_require__(201);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/**
 * Created by griga on 7/11/16.
 */



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
        data: { pageTitle: 'Home' },
        children: [
            {
                path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
                data: { pageTitle: 'Dashboard' }
            },
            {
                path: 'smartadmin',
                loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',
                data: { pageTitle: 'Smartadmin' }
            },
            {
                path: 'app-views',
                loadChildren: 'app/+app-views/app-views.module#AppViewsModule',
                data: { pageTitle: 'App Views' }
            },
            {
                path: 'calendar',
                loadChildren: 'app/+calendar/calendar.module#CalendarModule'
            },
            {
                path: 'e-commerce',
                loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',
                data: { pageTitle: 'E-commerce' }
            },
            {
                path: 'forms',
                loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',
                data: { pageTitle: 'Forms' }
            },
            {
                path: 'graphs',
                loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',
                data: { pageTitle: 'Graphs' }
            },
            {
                path: 'maps',
                loadChildren: 'app/+maps/maps.module#MapsModule',
                data: { pageTitle: 'Maps' }
            },
            {
                path: 'miscellaneous',
                loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',
                data: { pageTitle: 'Miscellaneous' }
            },
            {
                path: 'outlook',
                loadChildren: 'app/+outlook/outlook.module#OutlookModule',
                data: { pageTitle: 'Outlook' }
            },
            {
                path: 'tables',
                loadChildren: 'app/+tables/tables.module#TablesModule',
                data: { pageTitle: 'Tables' }
            },
            {
                path: 'ui',
                loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',
                data: { pageTitle: 'Ui' }
            },
            {
                path: 'widgets',
                loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',
                data: { pageTitle: 'Widgets' }
            },
        ]
    },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */], loadChildren: 'app/+auth/auth.module#AuthModule' },
    { path: '**', redirectTo: 'miscellaneous/error404' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["e" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["f" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["g" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["d" /* TabsModule */].forRoot(),
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__["a" /* JsonApiService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__["a" /* VoiceControlService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__["a" /* SoundService */],
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aside_chat_aside_chat_boxes__ = __webpack_require__(497);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideChatUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideChatUserComponent = AsideChatUserComponent_1 = (function () {
    function AsideChatUserComponent() {
        this.user = {};
        this.state = {
            chatId: 'chatbox-user-' + AsideChatUserComponent_1.idCounter++
        };
    }
    AsideChatUserComponent.prototype.ngOnInit = function () {
    };
    AsideChatUserComponent.prototype.openChatBox = function (e) {
        e.preventDefault();
        var user = this.user;
        var _a = user.username.split(/ /), firstname = _a[0], lastname = _a[1];
        var id = this.state.chatId;
        if (user.status != 'ofline') {
            __WEBPACK_IMPORTED_MODULE_1__aside_chat_aside_chat_boxes__["a" /* chatboxManager */].addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
                //you can add your own options too
            });
        }
    };
    return AsideChatUserComponent;
}());
AsideChatUserComponent.idCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AsideChatUserComponent.prototype, "user", void 0);
AsideChatUserComponent = AsideChatUserComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aside-chat-user',
        template: __webpack_require__(777),
    }),
    __metadata("design:paramtypes", [])
], AsideChatUserComponent);

var AsideChatUserComponent_1;
//# sourceMappingURL=aside-chat-user.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chatboxManager; });

/*
 * SMARTCHAT PLUGIN ARRAYS & CONFIG
 * Dependency: js/plugin/moment/moment.min.js
 *             js/plugin/cssemotions/jquery.cssemoticons.min.js
 *             js/smart-chat-ui/smart.chat.ui.js
 * (DO NOT CHANGE)
 */
var boxList = [], showList = [], nameList = [], idList = [];
/*
 * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
 */
var chatbox_config = {
    width: 200,
    gap: 35,
    offset: 0
};
/*
 * SMART CHAT ENGINE
 * Copyright (c) 2013 Wen Pu
 * Modified by MyOrange
 * All modifications made are hereby copyright (c) 2014-2015 MyOrange
 */
// TODO: implement destroy()
$.widget("ui.chatbox", {
    options: {
        id: null,
        title: null,
        user: null,
        hidden: false,
        offset: 0,
        width: 300,
        status: 'online',
        alertmsg: null,
        alertshow: null,
        messageSent: function (id, user, msg) {
            // override this
            this.boxManager.addMsg(user.first_name, msg);
        },
        boxClosed: function (id) {
        },
        boxManager: {
            // thanks to the widget factory facility
            // similar to http://alexsexton.com/?p=51
            init: function (elem) {
                this.elem = elem;
            },
            addMsg: function (peer, msg) {
                var self = this;
                var box = self.elem.uiChatboxLog;
                var e = document.createElement('div');
                box.append(e);
                $(e).hide();
                var systemMessage = false;
                if (peer) {
                    var peerName = document.createElement("b");
                    $(peerName).text(peer + ": ");
                    e.appendChild(peerName);
                }
                else {
                    systemMessage = true;
                }
                var msgElement = document.createElement(systemMessage ? "i" : "span");
                $(msgElement).text(msg);
                e.appendChild(msgElement);
                $(e).addClass("ui-chatbox-msg");
                $(e).css("maxWidth", $(box).width());
                $(e).fadeIn();
                //$(e).prop( 'title', moment().calendar() ); // add dep: moment.js
                $(e).find("span").emoticonize(); // add dep: jquery.cssemoticons.js
                self._scrollToBottom();
                if (!self.elem.uiChatboxTitlebar.hasClass("ui-state-focus")
                    && !self.highlightLock) {
                    self.highlightLock = true;
                    self.highlightBox();
                }
            },
            highlightBox: function () {
                var self = this;
                self.elem.uiChatboxTitlebar.effect("highlight", {}, 300);
                self.elem.uiChatbox.effect("bounce", { times: 2 }, 300, function () {
                    self.highlightLock = false;
                    self._scrollToBottom();
                });
            },
            toggleBox: function () {
                this.elem.uiChatbox.toggle();
            },
            _scrollToBottom: function () {
                var box = this.elem.uiChatboxLog;
                box.scrollTop(box.get(0).scrollHeight);
            }
        }
    },
    toggleContent: function (event) {
        this.uiChatboxContent.toggle();
        if (this.uiChatboxContent.is(":visible")) {
            this.uiChatboxInputBox.focus();
        }
    },
    widget: function () {
        return this.uiChatbox;
    },
    _create: function () {
        var self = this, options = self.options, title = options.title || "No Title", 
        // chatbox
        uiChatbox = (self.uiChatbox = $('<div></div>'))
            .appendTo(document.body)
            .addClass('ui-widget ' +
            //'ui-corner-top ' +
            'ui-chatbox')
            .attr('outline', 0)
            .focusin(function () {
            // ui-state-highlight is not really helpful here
            //self.uiChatbox.removeClass('ui-state-highlight');
            self.uiChatboxTitlebar.addClass('ui-state-focus');
        })
            .focusout(function () {
            self.uiChatboxTitlebar.removeClass('ui-state-focus');
        }), 
        // titlebar
        uiChatboxTitlebar = (self.uiChatboxTitlebar = $('<div></div>'))
            .addClass('ui-widget-header ' +
            //'ui-corner-top ' +
            'ui-chatbox-titlebar ' +
            self.options.status +
            ' ui-dialog-header' // take advantage of dialog header style
        )
            .click(function (event) {
            self.toggleContent(event);
        })
            .appendTo(uiChatbox), uiChatboxTitle = (self.uiChatboxTitle = $('<span></span>'))
            .html(title)
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarClose = (self.uiChatboxTitlebarClose = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Hide"></a>'))
            .addClass(//'ui-corner-all ' +
        'ui-chatbox-icon ')
            .attr('role', 'button')
            .hover(function () {
            uiChatboxTitlebarClose.addClass('ui-state-hover');
        }, function () {
            uiChatboxTitlebarClose.removeClass('ui-state-hover');
        })
            .click(function (event) {
            uiChatbox.hide();
            self.options.boxClosed(self.options.id);
            return false;
        })
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarCloseText = $('<i></i>')
            .addClass('fa ' +
            'fa-times')
            .appendTo(uiChatboxTitlebarClose), uiChatboxTitlebarMinimize = (self.uiChatboxTitlebarMinimize = $('<a href="#" rel="tooltip" data-placement="top" data-original-title="Minimize"></a>'))
            .addClass(//'ui-corner-all ' +
        'ui-chatbox-icon')
            .attr('role', 'button')
            .hover(function () {
            uiChatboxTitlebarMinimize.addClass('ui-state-hover');
        }, function () {
            uiChatboxTitlebarMinimize.removeClass('ui-state-hover');
        })
            .click(function (event) {
            self.toggleContent(event);
            return false;
        })
            .appendTo(uiChatboxTitlebar), uiChatboxTitlebarMinimizeText = $('<i></i>')
            .addClass('fa ' +
            'fa-minus')
            .appendTo(uiChatboxTitlebarMinimize), 
        // content
        uiChatboxContent = (self.uiChatboxContent = $('<div class="' + self.options.alertshow + '"><span class="alert-msg">' + self.options.alertmsg + '</span></div>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-content ')
            .appendTo(uiChatbox), uiChatboxLog = (self.uiChatboxLog = self.element)
            .addClass('ui-widget-content ' +
            'ui-chatbox-log ' +
            'custom-scroll')
            .appendTo(uiChatboxContent), uiChatboxInput = (self.uiChatboxInput = $('<div></div>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-input')
            .click(function (event) {
            // anything?
        })
            .appendTo(uiChatboxContent), uiChatboxInputBox = (self.uiChatboxInputBox = $('<textarea></textarea>'))
            .addClass('ui-widget-content ' +
            'ui-chatbox-input-box ')
            .appendTo(uiChatboxInput)
            .keydown(function (event) {
            if (event.keyCode && event.keyCode == $.ui.keyCode.ENTER) {
                var msg = $.trim($(this).val());
                if (msg.length > 0) {
                    self.options.messageSent(self.options.id, self.options.user, msg);
                }
                $(this).val('');
                return false;
            }
        })
            .focusin(function () {
            uiChatboxInputBox.addClass('ui-chatbox-input-focus');
            var box = $(this).parent().prev();
            box.scrollTop(box.get(0).scrollHeight);
        })
            .focusout(function () {
            uiChatboxInputBox.removeClass('ui-chatbox-input-focus');
        });
        // disable selection
        uiChatboxTitlebar.find('*').add(uiChatboxTitlebar).disableSelection();
        // switch focus to input box when whatever clicked
        uiChatboxContent.children().click(function () {
            // click on any children, set focus on input box
            self.uiChatboxInputBox.focus();
        });
        self._setWidth(self.options.width);
        self._position(self.options.offset);
        self.options.boxManager.init(self);
        if (!self.options.hidden) {
            uiChatbox.show();
        }
        $(".ui-chatbox [rel=tooltip]").tooltip();
        //console.log("tooltip created");
    },
    _setOption: function (option, value) {
        if (value != null) {
            switch (option) {
                case "hidden":
                    if (value)
                        this.uiChatbox.hide();
                    else
                        this.uiChatbox.show();
                    break;
                case "offset":
                    this._position(value);
                    break;
                case "width":
                    this._setWidth(value);
                    break;
            }
        }
        $.Widget.prototype._setOption.apply(this, arguments);
    },
    _setWidth: function (width) {
        this.uiChatbox.width((width + 28) + "px");
        //this.uiChatboxTitlebar.width((width + 28) + "px");
        //this.uiChatboxLog.width(width + "px");
        // this.uiChatboxInput.css("maxWidth", width + "px");
        // padding:2, boarder:2, margin:5
        this.uiChatboxInputBox.css("width", (width + 18) + "px");
    },
    _position: function (offset) {
        this.uiChatbox.css("right", offset);
    }
});
/*
 * jQuery CSSEmoticons plugin 0.2.9
 *
 * Copyright (c) 2010 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Sun Oct 22 1:00:00 2010 -0500
 */
$.fn.emoticonize = function (options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    var escapeCharacters = [")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "."];
    var threeCharacterEmoticons = [
        // really weird bug if you have :{ and then have :{) in the same container anywhere *after* :{ then :{ doesn't get matched, e.g. :] :{ :) :{) :) :-) will match everything except :{
        //  But if you take out the :{) or even just move :{ to the right of :{) then everything works fine. This has something to do with the preMatch string below I think, because
        //  it'll work again if you set preMatch equal to '()'
        //  So for now, we'll just remove :{) from the emoticons, because who actually uses this mustache man anyway?
        // ":{)",
        ":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\",
        "?-)",
        // and the twoCharacterEmoticons from below, but with a space inserted
        ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;" //, "* )"
    ];
    var twoCharacterEmoticons = [
        ":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;" //, "*)"
    ];
    var specialEmoticons = {
        "&gt;:)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;;)": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;:(": { cssClass: "red-emoticon small-emoticon spaced-emoticon" },
        "&gt;: )": { cssClass: "red-emoticon small-emoticon" },
        "&gt;; )": { cssClass: "red-emoticon small-emoticon" },
        "&gt;: (": { cssClass: "red-emoticon small-emoticon" },
        ";(": { cssClass: "red-emoticon spaced-emoticon" },
        "&lt;3": { cssClass: "pink-emoticon counter-rotated" },
        "O_O": { cssClass: "no-rotate" },
        "o_o": { cssClass: "no-rotate" },
        "0_o": { cssClass: "no-rotate" },
        "O_o": { cssClass: "no-rotate" },
        "T_T": { cssClass: "no-rotate" },
        "^_^": { cssClass: "no-rotate" },
        "O:)": { cssClass: "small-emoticon spaced-emoticon" },
        "O: )": { cssClass: "small-emoticon" },
        "8D": { cssClass: "small-emoticon spaced-emoticon" },
        "XD": { cssClass: "small-emoticon spaced-emoticon" },
        "xD": { cssClass: "small-emoticon spaced-emoticon" },
        "=D": { cssClass: "small-emoticon spaced-emoticon" },
        "8O": { cssClass: "small-emoticon spaced-emoticon" },
        "[+=..]": { cssClass: "no-rotate nintendo-controller" }
        //"OwO":  { cssClass: "no-rotate" }, // these emoticons overflow and look weird even if they're made even smaller, could probably fix this with some more css trickery
        //"O-O":  { cssClass: "no-rotate" },
        //"O=)":    { cssClass: "small-emoticon" }
    };
    var specialRegex = new RegExp('(\\' + escapeCharacters.join('|\\') + ')', 'g');
    // One of these characters must be present before the matched emoticon, or the matched emoticon must be the first character in the container HTML
    //  This is to ensure that the characters in the middle of HTML properties or URLs are not matched as emoticons
    //  Below matches ^ (first character in container HTML), \s (whitespace like space or tab), or \0 (NULL character)
    // (<\\S+.*>) matches <\\S+.*> (matches an HTML tag like <span> or <div>), but haven't quite gotten it working yet, need to push this fix now
    var preMatch = '(^|[\\s\\0])';
    for (var i = threeCharacterEmoticons.length - 1; i >= 0; --i) {
        threeCharacterEmoticons[i] = threeCharacterEmoticons[i].replace(specialRegex, '\\$1');
        // threeCharacterEmoticons[i] = new RegExp((preMatch + '(' + threeCharacterEmoticons[i] + ')'), 'g');
    }
    for (var i = twoCharacterEmoticons.length - 1; i >= 0; --i) {
        twoCharacterEmoticons[i] = twoCharacterEmoticons[i].replace(specialRegex, '\\$1');
        // twoCharacterEmoticons[i] = new RegExp(preMatch + '(' + twoCharacterEmoticons[i] + ')', 'g');
    }
    for (var emoticon in specialEmoticons) {
        specialEmoticons[emoticon].regexp = emoticon.replace(specialRegex, '\\$1');
        specialEmoticons[emoticon].regexp = new RegExp(preMatch + '(' + specialEmoticons[emoticon].regexp + ')', 'g');
    }
    var exclude = 'span.css-emoticon';
    if (opts.exclude) {
        exclude += ',' + opts.exclude;
    }
    var excludeArray = exclude.split(',');
    return this.not(exclude).each(function () {
        var container = $(this);
        var cssClass = 'css-emoticon';
        if (opts.animate) {
            cssClass += ' un-transformed-emoticon animated-emoticon';
        }
        for (var emoticon in specialEmoticons) {
            var specialCssClass = cssClass + " " + specialEmoticons[emoticon].cssClass;
            container.html(container.html().replace(specialEmoticons[emoticon].regexp, "$1<span class='" + specialCssClass + "'>$2</span>"));
        }
        $(threeCharacterEmoticons).each(function () {
            container.html(container.html().replace(this, "$1<span class='" + cssClass + "'>$2</span>"));
        });
        $(twoCharacterEmoticons).each(function () {
            container.html(container.html().replace(this, "$1<span class='" + cssClass + " spaced-emoticon'>$2</span>"));
        });
        // fix emoticons that got matched more then once (where one emoticon is a subset of another emoticon), and thus got nested spans
        $.each(excludeArray, function (index, item) {
            container.find($.trim(item) + " span.css-emoticon").each(function () {
                $(this).replaceWith($(this).text());
            });
        });
        if (opts.animate) {
            setTimeout(function () {
                $('.un-transformed-emoticon').removeClass('un-transformed-emoticon');
            }, opts.delay);
        }
    });
};
$.fn.unemoticonize = function (options) {
    var opts = $.extend({}, $.fn.emoticonize.defaults, options);
    return this.each(function () {
        var container = $(this);
        container.find('span.css-emoticon').each(function () {
            // add delay equal to animate speed if animate is not false
            var span = $(this);
            if (opts.animate) {
                span.addClass('un-transformed-emoticon');
                setTimeout(function () {
                    span.replaceWith(span.text());
                }, opts.delay);
            }
            else {
                span.replaceWith(span.text());
            }
        });
    });
};
$.fn.emoticonize.defaults = { animate: true, delay: 500, exclude: 'pre,code,.no-emoticons' };
var init = function (options) {
    $.extend(chatbox_config, options);
};
var delBox = function (id) {
    // TODO
};
var getNextOffset = function () {
    return (chatbox_config.width + chatbox_config.gap) * showList.length;
};
var boxClosedCallback = function (id) {
    // close button in the titlebar is clicked
    var idx = showList.indexOf(id);
    if (idx != -1) {
        showList.splice(idx, 1);
        var diff = chatbox_config.width + chatbox_config.gap;
        for (var i = idx; i < showList.length; i++) {
            chatbox_config.offset = $("#" + showList[i]).chatbox("option", "offset");
            $("#" + showList[i]).chatbox("option", "offset", chatbox_config.offset - diff);
        }
    }
    else {
        alert("NOTE: Id missing from array: " + id);
    }
};
// caller should guarantee the uniqueness of id
var addBox = function (id, user, name) {
    var idx1 = showList.indexOf(id);
    var idx2 = boxList.indexOf(id);
    if (idx1 != -1) {
        // found one in show box, do nothing
    }
    else if (idx2 != -1) {
        // exists, but hidden
        // show it and put it back to showList
        $("#" + id).chatbox("option", "offset", getNextOffset());
        var manager = $("#" + id).chatbox("option", "boxManager");
        manager.toggleBox();
        showList.push(id);
    }
    else {
        var el = document.createElement('div');
        el.setAttribute('id', id);
        $(el).chatbox({
            id: id,
            user: user,
            title: '<i title="' + user.status + '"></i>' + user.first_name + " " + user.last_name,
            hidden: false,
            offset: getNextOffset(),
            width: chatbox_config.width,
            status: user.status,
            alertmsg: user.alertmsg,
            alertshow: user.alertshow,
            messageSent: dispatch,
            boxClosed: boxClosedCallback
        });
        boxList.push(id);
        showList.push(id);
        nameList.push(user.first_name);
    }
};
var messageSentCallback = function (id, user, msg) {
    var idx = boxList.indexOf(id);
    // chatbox_config.messageSent(nameList[idx], msg);
};
// not used in demo
var dispatch = function (id, user, msg) {
    //$("#log").append("<i>" + moment().calendar() + "</i> you said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>");
    if ($('#chatlog').length) {
        $("#chatlog").append("You said to <b>" + user.first_name + " " + user.last_name + ":</b> " + msg + "<br/>").effect("highlight", {}, 500);
    }
    $("#" + id).chatbox("option", "boxManager").addMsg("Me", msg);
};
var chatboxManager = {
    init: init,
    addBox: addBox,
    delBox: delBox,
    dispatch: dispatch
};
//# sourceMappingURL=aside-chat-boxes.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideChatComponent = (function () {
    function AsideChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.state = {
            open: false,
            filter: ''
        };
    }
    AsideChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users.map(function (it) {
                it.visible = true;
                return it;
            });
        });
    };
    AsideChatComponent.prototype.onFilter = function () {
        var _this = this;
        this.users.forEach(function (it) {
            if (!_this.state.filter) {
                it.visible = true;
            }
            else {
                it.visible = it.username.toLowerCase().indexOf(_this.state.filter.toLocaleLowerCase()) > -1;
            }
        });
    };
    AsideChatComponent.prototype.openToggle = function (e) {
        this.state.open = !this.state.open;
        $(this.chatUsersList.nativeElement).slideToggle();
        e.preventDefault();
    };
    return AsideChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatUsersList'),
    __metadata("design:type", Object)
], AsideChatComponent.prototype, "chatUsersList", void 0);
AsideChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'aside-chat',
        template: __webpack_require__(778),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], AsideChatComponent);

var _a;
//# sourceMappingURL=aside-chat.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatWidgetComponent = (function () {
    function ChatWidgetComponent() {
    }
    ChatWidgetComponent.prototype.ngOnInit = function () {
    };
    return ChatWidgetComponent;
}());
ChatWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-widget',
        template: __webpack_require__(779),
    }),
    __metadata("design:paramtypes", [])
], ChatWidgetComponent);

//# sourceMappingURL=chat-widget.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatBodyComponent = (function () {
    function ChatBodyComponent(chatService, el) {
        this.chatService = chatService;
        this.el = el;
    }
    ChatBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.newMessage.subscribe(function (message) {
            _this.messages.push(message);
            _this.scrollDown();
        });
    };
    ChatBodyComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatBodyComponent.prototype.scrollDown = function () {
        var $body = $('#chat-body', this.el.nativeElement);
        $body.animate({ scrollTop: $body[0].scrollHeight });
    };
    return ChatBodyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatBodyComponent.prototype, "messages", void 0);
ChatBodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-body',
        template: __webpack_require__(780),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], ChatBodyComponent);

var _a, _b;
//# sourceMappingURL=chat-body.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatFormComponent = (function () {
    function ChatFormComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.message = '';
        this.enterToSend = false;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.messageToSubject.subscribe(function (user) {
            _this.message += (user.username + ', ');
        });
        this.user = this.userService.userInfo;
        this.userService.user.subscribe(function (user) {
            _this.user = user;
        });
    };
    ChatFormComponent.prototype.sendMessage = function () {
        if (this.message.trim() == '')
            return;
        this.chatService.sendMessage({
            body: this.message,
            user: this.user,
            date: new Date()
        });
        this.message = '';
    };
    ChatFormComponent.prototype.sendMessageEnter = function () {
        if (this.enterToSend) {
            this.sendMessage();
        }
    };
    return ChatFormComponent;
}());
ChatFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-form',
        template: __webpack_require__(781),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], ChatFormComponent);

var _a, _b;
//# sourceMappingURL=chat-form.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatUsersComponent = (function () {
    function ChatUsersComponent(chatService) {
        this.chatService = chatService;
        this.filter = '';
        this.isOpen = false;
    }
    ChatUsersComponent.prototype.openToggle = function () {
        this.isOpen = !this.isOpen;
    };
    ChatUsersComponent.prototype.messageTo = function (user) {
        this.chatService.messageTo(user);
    };
    ChatUsersComponent.prototype.ngOnInit = function () {
    };
    return ChatUsersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatUsersComponent.prototype, "users", void 0);
ChatUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat-users',
        template: __webpack_require__(782),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatUsersComponent);

var _a;
//# sourceMappingURL=chat-users.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.users = [];
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getChatState().subscribe(function (state) {
            _this.users = state.users;
            _this.messages = state.messages;
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chat',
        template: __webpack_require__(783),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nPipe = (function () {
    function I18nPipe(i18nService) {
        this.i18nService = i18nService;
    }
    I18nPipe.prototype.transform = function (phrase, args) {
        return this.i18nService.getTranslation(phrase);
    };
    return I18nPipe;
}());
I18nPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'i18n',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], I18nPipe);

var _a;
//# sourceMappingURL=i18n.pipe.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(i18n) {
        this.i18n = i18n;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.languages = __WEBPACK_IMPORTED_MODULE_1__languages_model__["a" /* languages */];
        this.currentLanguage = this.i18n.currentLanguage;
    };
    LanguageSelectorComponent.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.i18n.setLanguage(language);
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-language-selector',
        template: __webpack_require__(784),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], LanguageSelectorComponent);

var _a;
//# sourceMappingURL=language-selector.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyLayoutComponent = (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    return EmptyLayoutComponent;
}());
EmptyLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-empty-layout',
        template: __webpack_require__(786),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], EmptyLayoutComponent);

//# sourceMappingURL=empty-layout.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesService = (function () {
    function ActivitiesService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/activities/activities.json';
    }
    ActivitiesService.prototype.getActivities = function () {
        return this.jsonApiService.fetch(this.url);
    };
    return ActivitiesService;
}());
ActivitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], ActivitiesService);

var _a;
//# sourceMappingURL=activities.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechButtonComponent = (function () {
    function SpeechButtonComponent(voiceControlService, voiceRecognitionService) {
        var _this = this;
        this.voiceControlService = voiceControlService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.hasError = false;
        this.enabled = false;
        this.speechPopoverShown = false;
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.voiceRecognitionService.events.delay(50).subscribe(function (event) {
            _this.respondTo(event);
        });
        this.voiceControlService.helpShown.delay(50).subscribe(function () {
            if (_this.speechPopoverShown) {
                _this.speechPopover.hide();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () {
        this.voiceControlService.attachHelp();
    };
    SpeechButtonComponent.prototype.seeCommands = function () {
        this.voiceControlService.showHelp();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        this.speechPopoverShown = !this.speechPopoverShown;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.speechPopoverShown) {
                    this.speechPopover.hide();
                }
                break;
        }
    };
    return SpeechButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('speechPopover'),
    __metadata("design:type", Object)
], SpeechButtonComponent.prototype, "speechPopover", void 0);
SpeechButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-speech-button',
        template: __webpack_require__(797),
        styles: [".vc-title-error {display: block;}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _b || Object])
], SpeechButtonComponent);

var _a, _b;
//# sourceMappingURL=speech-button.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteBreadcrumbsComponent = (function () {
    function RouteBreadcrumbsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.items = [];
    }
    RouteBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (v) {
            _this.items = [];
            _this.extract(_this.router.routerState.root);
        });
    };
    RouteBreadcrumbsComponent.prototype.extract = function (route) {
        var _this = this;
        var pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) == -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(function (it) {
                _this.extract(it);
            });
        }
    };
    return RouteBreadcrumbsComponent;
}());
RouteBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-route-breadcrumbs',
        template: "\n        <ol class=\"breadcrumb\">\n           <li *ngFor=\"let item of items\">{{item}}</li>\n        </ol>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RouteBreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=route-breadcrumbs.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoundModule = SoundModule_1 = (function () {
    function SoundModule() {
    }
    SoundModule.forRoot = function () {
        return {
            ngModule: SoundModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
        };
    };
    return SoundModule;
}());
SoundModule = SoundModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
    })
], SoundModule);

var SoundModule_1;
//# sourceMappingURL=sound.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginInfoComponent = (function () {
    function LoginInfoComponent(userService, layoutService) {
        this.userService = userService;
        this.layoutService = layoutService;
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoginInfo().subscribe(function (user) {
            _this.user = user;
        });
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    return LoginInfoComponent;
}());
LoginInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-login-info',
        template: __webpack_require__(802),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], LoginInfoComponent);

var _a, _b;
//# sourceMappingURL=login-info.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "You can improve your security further after logging out by closing this opened browser",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Yes") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.router.navigate(['/auth/login']);
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-logout',
        template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a routerlink=\"/auth/login\" title=\"Sign Out\" data-action=\"userLogout\"\n                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n          class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldFilterPipe = (function () {
    function FieldFilterPipe() {
    }
    FieldFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    return FieldFilterPipe;
}());
FieldFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fieldFilter',
    })
], FieldFilterPipe);

//# sourceMappingURL=field-filter.pipe.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'moment'
    })
], MomentPipe);

//# sourceMappingURL=moment.pipe.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeDirective = (function () {
    function TimeDirective() {
    }
    return TimeDirective;
}());
TimeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'time' })
], TimeDirective);

//# sourceMappingURL=time.directive.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleActiveDirective = (function () {
    function ToggleActiveDirective() {
    }
    return ToggleActiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToggleActiveDirective.prototype, "saToggleActive", void 0);
ToggleActiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saToggleActive]'
    }),
    __metadata("design:paramtypes", [])
], ToggleActiveDirective);

//# sourceMappingURL=toggle-active.directive.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    grid: 'article',
    widgets: '.jarviswidget',
    localStorage: true,
    deleteSettingsKey: '#deletesettingskey-options',
    settingsKeyLabel: 'Reset settings?',
    deletePositionKey: '#deletepositionkey-options',
    positionKeyLabel: 'Reset position?',
    sortable: true,
    buttonsHidden: false,
    // toggle button
    toggleButton: true,
    toggleClass: 'fa fa-minus | fa fa-plus',
    toggleSpeed: 200,
    onToggle: function () {
    },
    // delete btn
    deleteButton: true,
    deleteMsg: 'Warning: This action cannot be undone!',
    deleteClass: 'fa fa-times',
    deleteSpeed: 200,
    onDelete: function () {
    },
    // edit btn
    editButton: true,
    editPlaceholder: '.jarviswidget-editbox',
    editClass: 'fa fa-cog | fa fa-save',
    editSpeed: 200,
    onEdit: function () {
    },
    // color button
    colorButton: true,
    // full screen
    fullscreenButton: true,
    fullscreenClass: 'fa fa-expand | fa fa-compress',
    fullscreenDiff: 3,
    onFullscreen: function () {
    },
    // custom btn
    customButton: false,
    customClass: 'folder-10 | next-10',
    customStart: function () {
        alert('Hello you, this is a custom button...');
    },
    customEnd: function () {
        alert('bye, till next time...');
    },
    // order
    buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
    opacity: 1.0,
    dragHandle: '> header',
    placeholderClass: 'jarviswidget-placeholder',
    indicator: true,
    indicatorTime: 600,
    ajax: true,
    timestampPlaceholder: '.jarviswidget-timestamp',
    timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
    refreshButton: true,
    refreshButtonClass: 'fa fa-refresh',
    labelError: 'Sorry but there was a error:',
    labelUpdated: 'Last Update:',
    labelRefresh: 'Refresh',
    labelDelete: 'Delete widget:',
    afterLoad: function () {
    },
    rtl: false,
    onChange: function () {
    },
    onSave: function () {
    },
    ajaxnav: true
};
//# sourceMappingURL=widget.defaults.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = WidgetComponent_1 = (function () {
    function WidgetComponent(el, route, router) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.colorbutton = true;
        this.editbutton = true;
        this.togglebutton = true;
        this.deletebutton = true;
        this.fullscreenbutton = true;
        this.custombutton = false;
        this.collapsed = false;
        this.sortable = true;
        this.hidden = false;
        this.load = false;
        this.refresh = false;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetId = this.genId();
        var widget = this.el.nativeElement.children[0];
        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }
        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }
        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach(function (option) {
            if (!_this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });
        [
            'hidden',
            'collapsed'
        ].forEach(function (option) {
            if (_this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
        // ['refresh', 'load'].forEach(function (option) {
        //   if (this[option])
        //     widgetProps['data-widget-' + option] = this[option]
        // }.bind(this));
    };
    WidgetComponent.prototype.genId = function () {
        if (this.name) {
            return this.name;
        }
        else {
            var heading = this.el.nativeElement.querySelector('header h2');
            var id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent_1.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');
            var url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;
            return id;
        }
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        var $widget = $(this.el.nativeElement);
        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }
        var isFiller = $widget.hasClass('sa-fx-col');
        if ($widget.attr('class')) {
            $widget.find('.jarviswidget').addClass($widget.attr('class'));
            $widget.attr('class', '');
        }
        if (isFiller) {
            $widget.attr('class', 'sa-fx-col');
        }
    };
    return WidgetComponent;
}());
WidgetComponent.counter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "colorbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "editbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "togglebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "deletebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "fullscreenbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "custombutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "sortable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "hidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "load", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "refresh", void 0);
WidgetComponent = WidgetComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widget',
        template: "<div id=\"{{widgetId}}\" class=\"jarviswidget\"\n    \n  ><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetComponent);

var WidgetComponent_1, _a, _b, _c;
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_defaults__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetsGridComponent = (function () {
    function WidgetsGridComponent(el) {
        this.el = el;
    }
    WidgetsGridComponent.prototype.ngAfterViewInit = function () {
        $('#widgets-grid', this.el.nativeElement).jarvisWidgets(__WEBPACK_IMPORTED_MODULE_1__widget_defaults__["a" /* default */]);
    };
    return WidgetsGridComponent;
}());
WidgetsGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widgets-grid',
        template: "\n     <section id=\"widgets-grid\">\n       <ng-content></ng-content>\n     </section>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], WidgetsGridComponent);

var _a;
//# sourceMappingURL=widgets-grid.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__);
// RxJS


// Smartadmin Dependencies
window['jQuery'] = __webpack_require__(195);
window['$'] = window['jQuery'];

__webpack_require__(526); // required for X-editable
__webpack_require__(524); // required for X-editable
__webpack_require__(522); // required for bootstrap-colorpicker
__webpack_require__(525); //
__webpack_require__(523); //
window['moment'] = __webpack_require__(2);

__webpack_require__(1054);
//# sourceMappingURL=lib.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    defaultLocale: "us",
    API_URL: "assets/api",
    menu_speed: 200,
    smartSkin: "smart-style-0",
    skins: [
        {
            name: "smart-style-0",
            logo: "assets/img/logo.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white margin-right-5",
            style: {
                backgroundColor: '#4E463F'
            },
            label: "Smart Default"
        },
        {
            name: "smart-style-1",
            logo: "assets/img/logo-white.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white",
            style: {
                background: '#3A4558'
            },
            label: "Dark Elegance"
        },
        {
            name: "smart-style-2",
            logo: "assets/img/logo-blue.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-darken margin-top-5",
            style: {
                background: '#fff'
            },
            label: "Ultra Light"
        },
        {
            name: "smart-style-3",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#f78c40'
            },
            label: "Google Skin"
        },
        {
            name: "smart-style-4",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#bbc0cf',
                border: '1px solid #59779E',
                color: '#17273D !important'
            },
            label: "PixelSmash"
        },
        {
            name: "smart-style-5",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            label: "Glass"
        },
    ],
    GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',
    sound_path: "assets/sound/",
    sound_on: true,
    /**
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */
    debugState: false,
    debugStyle: 'font-weight: bold; color: #00f;',
    debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
    debugStyle_red: 'font-weight: bold; color: #ed1c24;',
    debugStyle_warning: 'background-color:yellow',
    debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
    debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',
    /**
     *  VOICE CONTROL
     */
    voice_command: true,
    voice_command_auto: false,
    /**
     *  Sets the language to the default 'en-US'. (supports over 50 languages
     *  by google)
     *
     *  Afrikaans         ['af-ZA']
     *  Bahasa Indonesia  ['id-ID']
     *  Bahasa Melayu     ['ms-MY']
     *  CatalГ            ['ca-ES']
     *  ДЊeЕЎtina         ['cs-CZ']
     *  Deutsch           ['de-DE']
     *  English           ['en-AU', 'Australia']
     *                    ['en-CA', 'Canada']
     *                    ['en-IN', 'India']
     *                    ['en-NZ', 'New Zealand']
     *                    ['en-ZA', 'South Africa']
     *                    ['en-GB', 'United Kingdom']
     *                    ['en-US', 'United States']
     *  EspaГ±ol          ['es-AR', 'Argentina']
     *                    ['es-BO', 'Bolivia']
     *                    ['es-CL', 'Chile']
     *                    ['es-CO', 'Colombia']
     *                    ['es-CR', 'Costa Rica']
     *                    ['es-EC', 'Ecuador']
     *                    ['es-SV', 'El Salvador']
     *                    ['es-ES', 'EspaГ±a']
     *                    ['es-US', 'Estados Unidos']
     *                    ['es-GT', 'Guatemala']
     *                    ['es-HN', 'Honduras']
     *                    ['es-MX', 'MГ©xico']
     *                    ['es-NI', 'Nicaragua']
     *                    ['es-PA', 'PanamГЎ']
     *                    ['es-PY', 'Paraguay']
     *                    ['es-PE', 'PerГє']
     *                    ['es-PR', 'Puerto Rico']
     *                    ['es-DO', 'RepГєblica Dominicana']
     *                    ['es-UY', 'Uruguay']
     *                    ['es-VE', 'Venezuela']
     *  Euskara           ['eu-ES']
     *  FranГ§ais         ['fr-FR']
     *  Galego            ['gl-ES']
     *  Hrvatski          ['hr_HR']
     *  IsiZulu           ['zu-ZA']
     *  ГЌslenska         ['is-IS']
     *  Italiano          ['it-IT', 'Italia']
     *                    ['it-CH', 'Svizzera']
     *  Magyar            ['hu-HU']
     *  Nederlands        ['nl-NL']
     *  Norsk bokmГҐl     ['nb-NO']
     *  Polski            ['pl-PL']
     *  PortuguГЄs        ['pt-BR', 'Brasil']
     *                    ['pt-PT', 'Portugal']
     *  RomГўnДѓ          ['ro-RO']
     *  SlovenДЌina       ['sk-SK']
     *  Suomi             ['fi-FI']
     *  Svenska           ['sv-SE']
     *  TГјrkГ§e          ['tr-TR']
     *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
     *  PСѓСЃСЃРєРёР№     ['ru-RU']
     *  РЎСЂРїСЃРєРё      ['sr-RS']
     *  н•њкµ­м–ґ         ['ko-KR']
     *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
     *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
     *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
     *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
     *  ж—Ґжњ¬иЄћ         ['ja-JP']
     *  Lingua latД«na    ['la']
     */
    voice_command_lang: 'en-US',
    /**
     *  Use localstorage to remember on/off (best used with HTML Version)
     */
    voice_localStorage: false,
    /**
     * Voice Commands
     * Defines all voice command variables and functions
     */
    voice_commands: {
        'show dashboard': {
            type: 'navigate', payload: ['/dashboard/+analytics']
        },
        'show +social': {
            type: 'navigate', payload: ['/dashboard/+social']
        },
        'show outlook': {
            type: 'navigate', payload: ['/outlook']
        },
        'show graphs': {
            type: 'navigate', payload: ['/graphs/chart-js']
        },
        'show flot chart': {
            type: 'navigate', payload: ['/graphs/flot-charts']
        },
        'show morris chart': {
            type: 'navigate', payload: ['/graphs/morris-charts']
        },
        'show inline chart': {
            type: 'navigate', payload: ['/graphs/sparklines']
        },
        'show dygraphs': {
            type: 'navigate', payload: ['/graphs/dygraphs']
        },
        'show tables': {
            type: 'navigate', payload: ['/tables/normal']
        },
        'show data table': {
            type: 'navigate', payload: ['/tables/datatables']
        },
        'show form': {
            type: 'navigate', payload: ['/forms/elements']
        },
        'show form layouts': {
            type: 'navigate', payload: ['/forms/layouts']
        },
        'show form validation': {
            type: 'navigate', payload: ['/forms/validation']
        },
        'show form elements': {
            type: 'navigate', payload: ['/forms/bootstrap-elements']
        },
        'show form plugins': {
            type: 'navigate', payload: ['/forms/plugins']
        },
        'show form wizards': {
            type: 'navigate', payload: ['/forms/wizards']
        },
        'show bootstrap editor': {
            type: 'navigate', payload: ['/forms/editors']
        },
        'show dropzone': {
            type: 'navigate', payload: ['/forms/dropzone']
        },
        'show image cropping': {
            type: 'navigate', payload: ['/forms/image-cropping']
        },
        'show general elements': {
            type: 'navigate', payload: ['/ui/general-elements']
        },
        'show buttons': {
            type: 'navigate', payload: ['/ui/buttons']
        },
        'show fontawesome': {
            type: 'navigate', payload: ['/ui/icons/font-awesome']
        },
        'show glyph icons': {
            type: 'navigate', payload: ['/ui/icons/glyphicons']
        },
        'show flags': {
            type: 'navigate', payload: ['/ui/icons/flags']
        },
        'show grid': {
            type: 'navigate', payload: ['/ui/grid']
        },
        'show tree view': {
            type: 'navigate', payload: ['/ui/treeviews']
        },
        'show nestable lists': {
            type: 'navigate', payload: ['/ui/nestable-lists']
        },
        'show jquery U I': {
            type: 'navigate', payload: ['/ui/jquery-ui']
        },
        'show typography': {
            type: 'navigate', payload: ['/ui/typography']
        },
        'show calendar': {
            type: 'navigate', payload: ['/calendar']
        },
        'show widgets': {
            type: 'navigate', payload: ['/widgets']
        },
        'show gallery': {
            type: 'navigate', payload: ['/app-views/gallery']
        },
        'show maps': {
            type: 'navigate', payload: ['/maps']
        },
        'go back': function () {
            history.back();
        },
        'scroll up': function () {
            jQuery('html, body').animate({ scrollTop: 0 }, 100);
        },
        'scroll down': function () {
            jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
        },
        'hide navigation': {
            type: 'layout',
            payload: 'hide navigation'
        },
        'show navigation': {
            type: 'layout',
            payload: 'show navigation'
        },
        'mute': {
            type: 'sound',
            payload: 'mute',
        },
        'sound on': {
            type: 'sound',
            payload: 'sound on',
        },
        'stop': {
            type: 'voice',
            payload: 'stop'
        },
        'help': {
            type: 'voice',
            payload: 'help on'
        },
        'got it': {
            type: 'voice',
            payload: 'help off'
        },
        'logout': {
            type: 'navigate',
            payload: ['/auth/login'],
        },
    }
};
// required for SmartNotification // @todo
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;
//# sourceMappingURL=smartadmin.config.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/chat/chat.json';
        this.messageToSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    ChatService.prototype.getChatState = function () {
        return this.jsonApiService.fetch(this.url);
    };
    ChatService.prototype.messageTo = function (user) {
        this.messageToSubject.next(user);
    };
    ChatService.prototype.sendMessage = function (message) {
        this.newMessage.next(message);
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 243,
	"./af.js": 243,
	"./ar": 250,
	"./ar-dz": 244,
	"./ar-dz.js": 244,
	"./ar-kw": 245,
	"./ar-kw.js": 245,
	"./ar-ly": 246,
	"./ar-ly.js": 246,
	"./ar-ma": 247,
	"./ar-ma.js": 247,
	"./ar-sa": 248,
	"./ar-sa.js": 248,
	"./ar-tn": 249,
	"./ar-tn.js": 249,
	"./ar.js": 250,
	"./az": 251,
	"./az.js": 251,
	"./be": 252,
	"./be.js": 252,
	"./bg": 253,
	"./bg.js": 253,
	"./bm": 254,
	"./bm.js": 254,
	"./bn": 255,
	"./bn.js": 255,
	"./bo": 256,
	"./bo.js": 256,
	"./br": 257,
	"./br.js": 257,
	"./bs": 258,
	"./bs.js": 258,
	"./ca": 259,
	"./ca.js": 259,
	"./cs": 260,
	"./cs.js": 260,
	"./cv": 261,
	"./cv.js": 261,
	"./cy": 262,
	"./cy.js": 262,
	"./da": 263,
	"./da.js": 263,
	"./de": 266,
	"./de-at": 264,
	"./de-at.js": 264,
	"./de-ch": 265,
	"./de-ch.js": 265,
	"./de.js": 266,
	"./dv": 267,
	"./dv.js": 267,
	"./el": 268,
	"./el.js": 268,
	"./en-au": 269,
	"./en-au.js": 269,
	"./en-ca": 270,
	"./en-ca.js": 270,
	"./en-gb": 271,
	"./en-gb.js": 271,
	"./en-ie": 272,
	"./en-ie.js": 272,
	"./en-nz": 273,
	"./en-nz.js": 273,
	"./eo": 274,
	"./eo.js": 274,
	"./es": 277,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 277,
	"./et": 278,
	"./et.js": 278,
	"./eu": 279,
	"./eu.js": 279,
	"./fa": 280,
	"./fa.js": 280,
	"./fi": 281,
	"./fi.js": 281,
	"./fo": 282,
	"./fo.js": 282,
	"./fr": 285,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 285,
	"./fy": 286,
	"./fy.js": 286,
	"./gd": 287,
	"./gd.js": 287,
	"./gl": 288,
	"./gl.js": 288,
	"./gom-latn": 289,
	"./gom-latn.js": 289,
	"./gu": 290,
	"./gu.js": 290,
	"./he": 291,
	"./he.js": 291,
	"./hi": 292,
	"./hi.js": 292,
	"./hr": 293,
	"./hr.js": 293,
	"./hu": 294,
	"./hu.js": 294,
	"./hy-am": 295,
	"./hy-am.js": 295,
	"./id": 296,
	"./id.js": 296,
	"./is": 297,
	"./is.js": 297,
	"./it": 298,
	"./it.js": 298,
	"./ja": 299,
	"./ja.js": 299,
	"./jv": 300,
	"./jv.js": 300,
	"./ka": 301,
	"./ka.js": 301,
	"./kk": 302,
	"./kk.js": 302,
	"./km": 303,
	"./km.js": 303,
	"./kn": 304,
	"./kn.js": 304,
	"./ko": 305,
	"./ko.js": 305,
	"./ky": 306,
	"./ky.js": 306,
	"./lb": 307,
	"./lb.js": 307,
	"./lo": 308,
	"./lo.js": 308,
	"./lt": 309,
	"./lt.js": 309,
	"./lv": 310,
	"./lv.js": 310,
	"./me": 311,
	"./me.js": 311,
	"./mi": 312,
	"./mi.js": 312,
	"./mk": 313,
	"./mk.js": 313,
	"./ml": 314,
	"./ml.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 317,
	"./ms-my": 316,
	"./ms-my.js": 316,
	"./ms.js": 317,
	"./my": 318,
	"./my.js": 318,
	"./nb": 319,
	"./nb.js": 319,
	"./ne": 320,
	"./ne.js": 320,
	"./nl": 322,
	"./nl-be": 321,
	"./nl-be.js": 321,
	"./nl.js": 322,
	"./nn": 323,
	"./nn.js": 323,
	"./pa-in": 324,
	"./pa-in.js": 324,
	"./pl": 325,
	"./pl.js": 325,
	"./pt": 327,
	"./pt-br": 326,
	"./pt-br.js": 326,
	"./pt.js": 327,
	"./ro": 328,
	"./ro.js": 328,
	"./ru": 329,
	"./ru.js": 329,
	"./sd": 330,
	"./sd.js": 330,
	"./se": 331,
	"./se.js": 331,
	"./si": 332,
	"./si.js": 332,
	"./sk": 333,
	"./sk.js": 333,
	"./sl": 334,
	"./sl.js": 334,
	"./sq": 335,
	"./sq.js": 335,
	"./sr": 337,
	"./sr-cyrl": 336,
	"./sr-cyrl.js": 336,
	"./sr.js": 337,
	"./ss": 338,
	"./ss.js": 338,
	"./sv": 339,
	"./sv.js": 339,
	"./sw": 340,
	"./sw.js": 340,
	"./ta": 341,
	"./ta.js": 341,
	"./te": 342,
	"./te.js": 342,
	"./tet": 343,
	"./tet.js": 343,
	"./th": 344,
	"./th.js": 344,
	"./tl-ph": 345,
	"./tl-ph.js": 345,
	"./tlh": 346,
	"./tlh.js": 346,
	"./tr": 347,
	"./tr.js": 347,
	"./tzl": 348,
	"./tzl.js": 348,
	"./tzm": 350,
	"./tzm-latn": 349,
	"./tzm-latn.js": 349,
	"./tzm.js": 350,
	"./uk": 351,
	"./uk.js": 351,
	"./ur": 352,
	"./ur.js": 352,
	"./uz": 354,
	"./uz-latn": 353,
	"./uz-latn.js": 353,
	"./uz.js": 354,
	"./vi": 355,
	"./vi.js": 355,
	"./x-pseudo": 356,
	"./x-pseudo.js": 356,
	"./yo": 357,
	"./yo.js": 357,
	"./zh-cn": 358,
	"./zh-cn.js": 358,
	"./zh-hk": 359,
	"./zh-hk.js": 359,
	"./zh-tw": 360,
	"./zh-tw.js": 360
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 682;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JsonApiService = (function () {
    function JsonApiService(http) {
        this.http = http;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__["a" /* config */].API_URL + url)
            .delay(100)
            .map(this.extractData)
            .catch(this.handleError);
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    JsonApiService.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    JsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return JsonApiService;
}());
JsonApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], JsonApiService);

var _a;
//# sourceMappingURL=json-api.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.smallBox = function (data, cb) {
        $.smallBox(data, cb);
    };
    NotificationService.prototype.bigBox = function (data, cb) {
        $.bigBox(data, cb);
    };
    NotificationService.prototype.smartMessageBox = function (data, cb) {
        $.SmartMessageBox(data, cb);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<dt *ngIf=\"user.visible\">\n  <popover-content #myPopover\n                   title=\"Popover title\"\n                   placement=\"right\"\n                   [animation]=\"true\"\n\n                   [closeOnClickOutside]=\"true\">\n\n    <div class=\"usr-card\" style=\"min-width: 200px;\">\n      <img [src]=\"user.picture\" [alt]=\"user.username\"/>\n      <div class=\"usr-card-content\">\n        <h3>{{user.username}}</h3>\n        <p [innerHTML]=\"user.role\" ></p>\n      </div>\n    </div>\n  </popover-content>\n  <a href=\"#\" class=\"usr\" (click)=\"openChatBox($event)\"\n     [attr.data-chat-id]=\"state.chatId\"\n     [attr.data-chat-status]=\"user.status\"\n     [popover]=\"myPopover\"\n     [popoverOnHover]=\"true\"\n  >\n    <i></i>{{user.username}}\n  </a>\n</dt>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li class=\"chat-users top-menu-invisible\" [class.open]=\"state.open\"\n    >\n      <a href=\"#\" (click)=\"openToggle($event)\"><i class=\"fa fa-lg fa-fw fa-comment-o\"><em\n        class=\"bg-color-pink flash animated1\">!</em></i>&nbsp;<span\n        class=\"menu-item-parent\">Smart Chat API <sup>beta</sup></span></a>\n      <ul #chatUsersList>\n        <li>\n          <div class=\"display-users\">\n            <input class=\"form-control chat-user-filter\" placeholder=\"Filter\" type=\"text\"\n                   [(ngModel)]=\"state.filter\" (ngModelChange)=\"onFilter()\"/>\n            <dl>\n              <aside-chat-user *ngFor=\"let user of users\" [user]=\"user\"></aside-chat-user>\n            </dl>\n\n          </div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [fullscreenbutton]=\"false\" color=\"blueDark\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-comments txt-color-white\"></i> </span>\n\n    <h2> SmartMessage </h2>\n\n    <div class=\"widget-toolbar\">\n      <div dropdown>\n\n        <button type=\"button\" class=\"btn btn-xs btn-success\" dropdownToggle >\n          Status <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu pull-right js-status-update\" >\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-green\"></i> Online</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-red\"></i> Busy\n          </a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-circle txt-color-orange\"></i> Away\n          </a></li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"(null)\">\n            <i class=\"fa fa-power-off\"></i> Log Off\n          </a></li>\n        </ul>\n      </div>\n\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body widget-hide-overflow no-padding\">\n      <chat></chat>\n    </div>\n\n  </div>\n</sa-widget>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-body\" class=\"chat-body custom-scroll\">\n  <ul>\n    <li class=\"message\" *ngFor=\"let message of messages\">\n      <img class=\"message-picture online\" src=\"{{message.user.picture}}\">\n\n      <div class=\"message-text\">\n        <time>\n          {{message.date | moment : 'YYYY-MM-DD'}}\n        </time>\n        <a (click)=\"messageTo(message.user)\" class=\"username\">{{message.user.username}}</a>\n        <div [innerHTML]=\"message.body\"></div>\n\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-footer\">\n  <div class=\"textarea-div\">\n    <div class=\"typearea\">\n      <textarea placeholder=\"Write a reply...\" id=\"textarea-expand\" (keyup.enter)=\"sendMessageEnter()\"\n                class=\"custom-scroll\" [(ngModel)]=\"message\"></textarea>\n    </div>\n  </div>\n\n  <span class=\"textarea-controls\">\n      <button class=\"btn btn-sm btn-primary pull-right\"\n              (click)=\"sendMessage()\">Reply</button>\n    <span class=\"pull-right smart-form\" style=\"margin-top: 3px; margin-right: 10px;\"> <label\n    class=\"checkbox pull-right\">\n      <input type=\"checkbox\" [(ngModel)]=\"enterToSend\" name=\"subscription\" id=\"subscription\"><i></i>Press <strong> ENTER </strong> to send </label> </span> <a\n    (click)=\"(null)\" class=\"pull-left\"><i class=\"fa fa-camera fa-fw fa-lg\"></i></a> </span>\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div id=\"chat-container\" [class.open]=\"isOpen\">\n  <span class=\"chat-list-open-close\" (click)=\"openToggle()\"><i class=\"fa fa-user\"></i><b>!</b></span>\n\n  <div class=\"chat-list-body custom-scroll\">\n    <ul id=\"chat-users\">\n      <li *ngFor=\"let user of users | fieldFilter : 'username' : filter \" >\n        <a (click)=\"messageTo(user)\"><img [src]=\"user.picture\">{{user.username}} <span\n          class=\"badge badge-inverse\">{{user.username.length}}</span><span class=\"state\"><i\n          class=\"fa fa-circle txt-color-green pull-right\"></i></span></a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"chat-list-footer\">\n    <div class=\"control-group\">\n      <form class=\"smart-form\">\n        <section>\n          <label class=\"input\" >\n            <input type=\"text\" [(ngModel)]=\"filter\" id=\"filter-chat-list\" name=\"chatUsersFilter\" placeholder=\"Filter\">\n          </label>\n        </section>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<chat-users [users]=\"users\"></chat-users>\n<chat-body [messages]=\"messages\"></chat-body>\n<chat-form></chat-form>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-dropdown-list hidden-xs ng-cloak\">\n  <li class=\"dropdown\" dropdown>\n    <a class=\"dropdown-toggle\" dropdownToggle> <img src=\"assets/img/blank.gif\"\n                                                                 class=\"flag flag-{{currentLanguage.key}}\"\n                                                                 alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n      <i class=\"fa fa-angle-down\"></i> </a>\n    <ul *dropdownMenu class=\"dropdown-menu\">\n      <li [class.active]=\"language==currentLanguage\"\n          *ngFor=\"let language of languages\">\n        <a (click)=\"setLanguage(language)\" class=\"dropdown-item\" ><img src=\"assets/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                    alt=\"{{language.alt}}\"> {{language.title}}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div id=\"extr-page\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<sa-header></sa-header>\n\n\n<sa-navigation></sa-navigation>\n\n\n<div id=\"main\" role=\"main\">\n  <sa-layout-switcher></sa-layout-switcher>\n\n  <sa-ribbon></sa-ribbon>\n\n  <router-outlet></router-outlet>\n</div>\n\n<sa-footer></sa-footer>\n\n<sa-shortcut></sa-shortcut>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6\">\n            <span class=\"txt-color-white\">SmartAdmin WebApp © 2016</span>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n                    <strong>52 mins ago &nbsp;</strong> </i>\n\n                <div class=\"btn-group\" dropdown dropup=\"true\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" dropdownToggle>\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" *dropdownMenu style=\"right: 0px; left: auto\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">refresh</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<span class={{item.status}}>\n  <a class=\"msg\">\n    <img src={{item.image}} alt=\"\" class=\"air air-top-left margin-top-5\" width=\"40\"\n         height=\"40\"/>\n    <span class=\"from\">{{item.title}}</span>\n    <span>{{item.time}}</span>\n    <span class=\"subject\">{{item.subject}}</span>\n    <span class=\"msg-body\">{{item.message}}</span>\n  </a>\n</span>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<span class=\"padding-10\">\n  <em class=\"badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5\">\n    <i [ngClass]=\"setClasses()\"></i>\n  </em>\n  <span>{{item.message}}<br/>\n    <span class=\"pull-right font-xs text-muted\"><i>{{item.time}}</i></span>\n  </span>\n</span>\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<span>\n  <div class=\"bar-holder no-padding\">\n    <p class=\"margin-bottom-5\">\n      <i *ngIf=\"item.status == 'PRIMARY'\" class=\"fa fa-warning text-warning\"></i>\n        <strong>{{item.status}}:</strong> <i>{{item.title}}</i>\n        <span class=\"pull-right semi-bold\"\n              [ngClass]=\"{\n                'pull-right': true,\n                'semi-bold':true,\n                'text-danger': item.status == 'CRITICAL',\n                'text-muted': item.status != 'CRITICAL'\n              }\">\n          <span *ngIf=\"item.width == 100\">\n            <i class=\"fa fa-check text-success\"></i> Complete\n          </span>\n          <span *ngIf=\"item.width != 100\">{{item.width + '%'}}</span>\n        </span>\n    </p>\n    <div class=\"progress\" [class]=\"item.size\">\n      <div [ngClass]=\"setProgressClasses()\" [style.width]=\"item.width + '%'\"></div>\n    </div>\n    <em class=\"note no-margin\">last updated on {{lastUpdate | moment: \"MMMM Do, h:mm a\"}}</em>\n  </div>\n</span>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<span id=\"activity\" class=\"activity-dropdown\" (click)=\"onToggle()\">\n  <i class=\"fa fa-user\"></i>\n  <b class=\"badge bg-color-red\">{{count}}</b>\n</span>\n\n<div class=\"ajax-dropdown\" #dropdown>\n  <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n    <label [ngClass]=\"{\n      'btn btn-default': true,\n      active: activity==currentActivity\n    }\" *ngFor=\"let activity of activities\"\n           (click)=\"setActivity(activity)\"\n    >\n      <input type=\"radio\" name=\"activity\"/>\n      {{activity.title}} ({{activity.data.length}})\n    </label>\n\n  </div>\n\n  <!-- notification content -->\n   <div class=\"ajax-notifications custom-scroll\">\n      <ul class=\"notification-body\" *ngIf=\"currentActivity\" >\n        <ng-template ngFor let-item [ngForOf]=\"currentActivity.data\">\n\n          <li activitiesMessage *ngIf=\"item.type == 'message'\" [item]=\"item\"></li>\n          <li activitiesNotification *ngIf=\"item.type == 'notification'\" [item]=\"item\"></li>\n          <li activitiesTask *ngIf=\"item.type == 'task'\" [item]=\"item\" [lastUpdate]=\"lastUpdate\"></li>\n\n        </ng-template>\n\n      </ul>\n    </div>\n  <!-- end notification content -->\n\n  <!-- footer: refresh area -->\n      <span> Last updated on: {{lastUpdate | moment:\"h:mm:ss a\"}}\n    <button type=\"button\" (click)=\"update()\"\n            class=\"btn btn-xs btn-default pull-right\">\n        <i class=\"fa fa-refresh\" *ngIf=\"!loading\"></i>\n        <i class=\"fa fa-refresh fa-spin\" *ngIf=\"loading\"></i>\n        <span *ngIf=\"loading\">loading...</span>\n    </button>\n    </span>\n  <!-- end footer -->\n</div>\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "<div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n</div>"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n</div>"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <!-- <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmins\"> </span> -->\n    <span id=\"logo\"> <img src=\"assets/img/bitel/logo.svg\" alt=\"bitel\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n    <sa-activities></sa-activities>\n  </div>\n\n\n  <sa-recent-projects></sa-recent-projects>\n\n\n  <!-- pulled right: nav area -->\n  <div class=\"pull-right\">\n\n    <sa-collapse-menu></sa-collapse-menu>\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\">\n      <li class=\"\">\n        <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n          <img src=\"assets/img/avatars/sunny.png\" alt=\"John Doe\" class=\"online\"/>\n        </a>\n        <ul class=\"dropdown-menu pull-right\">\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n              class=\"fa fa-cog\"></i> Setting</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/app-views/profile\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i\n              class=\"fa fa-user\"></i>\n              <u>P</u>rofile</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/auth/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n              class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <!-- logout button -->\n    <sa-logout></sa-logout>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n      <span> <a (click)=\"toggleSearchMobile()\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"header-search pull-right\">\n      <input id=\"search-fld\" type=\"text\" name=\"param\" required\n             placeholder=\"Find reports and more\">\n      <button type=\"submit\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n      <a id=\"cancel-search-js\" (click)=\"toggleSearchMobile()\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <sa-full-screen></sa-full-screen>\n    <!-- end fullscreen button -->\n\n    <!-- #Voice Command: Start Speech -->\n    <sa-speech-button></sa-speech-button>\n    <!-- end voice command -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <sa-language-selector></sa-language-selector>\n    <!-- end multiple lang -->\n\n\n\n  </div>\n  <!-- end pulled right: nav area -->\n\n</header>\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-context hidden-xs dropdown\" dropdown>\n\n  <span class=\"label\">{{ 'Projects' | i18n }}:</span>\n    <span class=\"project-selector dropdown-toggle\" dropdownToggle>{{'Recent projects'| i18n}} <i ng-if=\"projects.length\"\n                                                                                                            class=\"fa fa-angle-down\"></i></span>\n\n  <ul *dropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let project of projects\">\n      <a href=\"{{project.href}}\">{{project.title}}</a>\n    </li>\n    <li class=\"divider\"></li>\n    <li>\n      <a (click)=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Clear</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\" *ngIf=\"enabled\">\n  <div [popover]=\"speechPopover\">\n    <a title=\"Voice Command\" id=\"voice-command-btn\" (click)=\"toggleVoiceControl()\"><i\n        class=\"fa fa-microphone\"></i></a>\n  </div>\n  <popover-content #speechPopover [closeOnClickOutside]=\"true\"\n                   placement=\"bottom\">\n    <ng-template [ngIf]=\"!hasError\">\n      <h4 class=\"vc-title\">Voice command activated <br/>\n        <small>Please speak clearly into the mic</small>\n      </h4>\n      <a (click)=\"seeCommands()\" class=\"btn btn-success\">See Commands</a>\n      <a class=\"btn bg-color-purple txt-color-white\"\n         (click)=\"speechPopover.hide()\">Close Popup</a>\n    </ng-template>\n    <ng-template [ngIf]=\"hasError\">\n      <h4 class=\"vc-title-error text-center\">\n        <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n        <br/>\n        <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n        <br/>\n        <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong>\n        </small>\n      </h4>\n    </ng-template>\n  </popover-content>\n</div>\n\n\n\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [class.activate]=\"isActivated\"><span id=\"demo-setting\" (click)=\"onToggle()\"><i\n  class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n  <form>\n    <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n    <section>\n      <label><input type=\"checkbox\" (click)=\"onFixedHeader()\" [(ngModel)]=\"store.fixedHeader\" name=\"fixedHeader\"\n                    class=\"checkbox style-0\"><span>Fixed Header</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedNavigation()\" [(ngModel)]=\"store.fixedNavigation\" name=\"fixedNavigation\"\n                    class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedRibbon()\" [(ngModel)]=\"store.fixedRibbon\" name=\"fixedRibbon\"\n                    class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedPageFooter()\" [(ngModel)]=\"store.fixedPageFooter\" name=\"fixedPageFooter\"\n                    class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onInsideContainer()\" [(ngModel)]=\"store.insideContainer\" name=\"insideContainer\"\n                    class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onRtl()\" [(ngModel)]=\"store.rtl\" name=\"rtl\"\n                    class=\"checkbox style-0\"><span>RTL</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onMenuOnTop()\" [(ngModel)]=\"store.menuOnTop\" name=\"menuOnTop\"\n                    class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onColorblindFriendly()\" [(ngModel)]=\"store.colorblindFriendly\" name=\"colorblindFriendly\"\n                    class=\"checkbox style-0\"><span>For Colorblind <div\n        class=\"font-xs text-right\">(experimental)\n            </div></span>\n      </label><span id=\"smart-bgimages\"></span></section>\n    <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n      (click)=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n      class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n    <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n    <section id=\"smart-styles\">\n          <a *ngFor=\"let skin of store.skins\"\n             (click)=\"onSmartSkin(skin)\"\n             [class]=\"skin.skinBtnClass\"\n             [ngStyle]=\"skin.style\">\n             <i *ngIf=\"skin.name == store.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup *ngIf=\"skin.beta\">beta</sup></a>\n        </section>\n  </form>\n</div>\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n\n  <!-- User info -->\n  <sa-login-info></sa-login-info>\n  <!-- end user info -->\n\n  <nav>\n    <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n    Please note that these links work a bit different than\n    traditional href=\"\" links. See documentation for details.\n    -->\n\n    <ul saSmartMenu>\n\n\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-lg fa-fw fa-shopping-cart\"></i> <span\n          class=\"menu-item-parent\">{{'E-Commerce' | i18n}}</span></a>\n        <ul>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/orders\" title=\"Orders\"> {{'Ordenes' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/orders\" title=\"Orders\"> {{'Orden detalle' | i18n}}</a>\n          </li>\n          <!-- <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/products-view\" title=\"Products View\"> {{'Products View' | i18n}}</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/e-commerce/product-details\" title=\"Products Detail\"> {{'Products Detail' | i18n}}</a>\n          </li> -->\n        </ul>\n      </li>\n\n     \n\n    </ul>\n    <!-- <aside-chat></aside-chat> -->\n  </nav>\n\n  <!-- <sa-minify-menu></sa-minify-menu> -->\n\n</aside>\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<!-- RIBBON -->\n<div id=\"ribbon\">\n  <ng-template #tipContent><i class=\"text-warning fa fa-warning\"></i> Warning! This will reset all your widget settings.</ng-template>\n\n  <span class=\"ribbon-button-alignment\">\n\t\t\t\t\t<span id=\"refresh\" class=\"btn btn-ribbon\" (click)=\"resetWidgets()\"\n                placement=\"bottom\"\n                [tooltip]=\"tipContent\">\n\t\t\t\t\t\t<i class=\"fa fa-refresh\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n  <sa-route-breadcrumbs></sa-route-breadcrumbs>\n</div>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<div id=\"shortcut\" [@shortcutState]=\"state\">\n  <ul>\n    <li>\n      <a (click)=\"shortcutTo(['outlook'])\" class=\"jarvismetro-tile big-cubes bg-color-blue\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-envelope fa-4x\"></i> <span>Mail <span\n        class=\"label pull-right bg-color-darken\">14</span></span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['calendar'])\" class=\"jarvismetro-tile big-cubes bg-color-orangeDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-calendar fa-4x\"></i> <span>Calendar</span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['maps'])\" class=\"jarvismetro-tile big-cubes bg-color-purple\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-map-marker fa-4x\"></i> <span>Maps</span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['miscellaneous/invoice'])\" class=\"jarvismetro-tile big-cubes bg-color-blueDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-book fa-4x\"></i> <span>Invoice <span\n        class=\"label pull-right bg-color-darken\">99</span></span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['app-views/gallery'])\" class=\"jarvismetro-tile big-cubes bg-color-greenLight\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-picture-o fa-4x\"></i> <span>Gallery </span> </span> </a>\n    </li>\n    <li>\n      <a (click)=\"shortcutTo(['app-views/profile'])\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-user fa-4x\"></i> <span>My Profile </span> </span> </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-info\">\n  <span *ngIf=\"user?.picture\"><a (click)=\"toggleShortcut()\">\n\t   <img [src]=\"user.picture\" alt=\"me\"\n          class=\"online\"/><span>{{user.username }}</span> <i class=\"fa fa-angle-down\"></i>\n    </a>\n   </span>\n</div>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div bsModal #seeCommandsModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" [config]=\"{}\"\n     role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n\n        <h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n        <hr class=\"simple\">\n        <h5>Instruction</h5>\n\n        Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n        You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon\n        indicating activation.\n        The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i\n          class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don't have\n        any microphone installed.\n        <br>\n        <br>\n        As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not\n        being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or\n        <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n        <br>\n        <br>\n        If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer)\n        protocol you can wave this security measure and have an unintrupted Voice Command.\n        <br>\n        <br>\n        <h5>Commands</h5>\n        <ul>\n          <li>\n            <strong>'show' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show\n            inbox\"</strong> or <strong>\"show calendar\"</strong>\n          </li>\n          <li>\n            <strong>'mute' </strong> - mutes all sound effects for the theme.\n          </li>\n          <li>\n            <strong>'sound on'</strong> - unmutes all sound effects for the theme.\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'stop'</strong></span> - deactivates voice command.\n          </li>\n          <li>\n            <span class=\"text-primary\"><strong>'help'</strong></span> - brings up the command list\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'got it'</strong></span> - closes help modal\n          </li>\n          <li>\n            <strong>'hide navigation'</strong> - toggle navigation collapse\n          </li>\n          <li>\n            <strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)\n          </li>\n          <li>\n            <strong>'scroll up'</strong> - scrolls to the top of the page\n          </li>\n          <li>\n            <strong>'scroll down'</strong> - scrollts to the bottom of the page\n          </li>\n          <li>\n            <strong>'go back' </strong> - goes back in history (history -1 click)\n          </li>\n          <li>\n            <strong>'logout'</strong> - logs you out\n          </li>\n        </ul>\n        <br>\n        <h5>Adding your own commands</h5>\n        Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored\n        inside <strong>smartadmin.config.js</strong> file under the <code>config.voice_commands = {{'{...}'}}</code>.\n\n        <hr class=\"simple\">\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"seeCommandsModal.hide()\">\n            Got it!\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_pipe__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_directive__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UtilsModule = UtilsModule_1 = (function () {
    function UtilsModule() {
    }
    UtilsModule.forRoot = function () {
        return {
            ngModule: UtilsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
        };
    };
    return UtilsModule;
}());
UtilsModule = UtilsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
    })
], UtilsModule);

var UtilsModule_1;
//# sourceMappingURL=utils.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceRecognitionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoiceRecognitionService = (function () {
    function VoiceRecognitionService() {
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commandsList = [];
        this.callbacks = {
            start: [],
            error: [],
            end: [],
            result: [],
            resultMatch: [],
            resultNoMatch: [],
            errorNetwork: [],
            errorPermissionBlocked: [],
            errorPermissionDenied: []
        };
        this.autoRestart = false;
        this.lastStartedAt = 0;
    }
    VoiceRecognitionService.prototype.commandToRegExp = function (command) {
        var optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g;
        command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
            return optional ? match : '([^\\s]+)';
        }).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
        return new RegExp('^' + command + '$', 'i');
    };
    ;
    VoiceRecognitionService.prototype.isInitialized = function () {
        return !!this.recognition;
    };
    ;
    VoiceRecognitionService.prototype.initIfNeeded = function () {
        if (!this.isInitialized()) {
            this.init({}, false);
        }
    };
    ;
    // Initialize smartSpeechRecognition with a list of commands to recognize.
    // e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
    // smartSpeechRecognition understands commands with named variables, splats, and optional words.
    VoiceRecognitionService.prototype.init = function (commands, resetCommands) {
        var _this = this;
        if (resetCommands === void 0) { resetCommands = true; }
        var recognition = this.recognition;
        // Abort previous instances of recognition already running
        if (recognition && recognition.abort) {
            recognition.abort();
        }
        // initiate SpeechRecognition
        recognition = new __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__["a" /* SpeechRecognition */]();
        // Set the max number of alternative transcripts to try and match with a command
        recognition.maxAlternatives = 5;
        recognition.continuous = true;
        // Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
        recognition.lang = __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].voice_command_lang || 'en-US';
        recognition.onstart = function () {
            // invokeCallbacks(callbacks.start);
            //debugState
            if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_success);
                console.log('Language setting is set to: ' + recognition.lang, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
            }
            _this.events.next({
                type: 'start'
            });
        };
        recognition.onerror = function (event) {
            // this.invokeCallbacks(this.callbacks.error);
            switch (event.error) {
                case 'network':
                    // this.invokeCallbacks(this.callbacks.errorNetwork);
                    break;
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    _this.autoRestart = false;
                    //debugState
                    if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                        console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_warning);
                    }
                    // determine if permission was denied by user or automatically.
                    if (new Date().getTime() - _this.lastStartedAt < 200) {
                        // invokeCallbacks(callbacks.errorPermissionBlocked);
                    }
                    else {
                        // invokeCallbacks(callbacks.errorPermissionDenied);
                        //console.log("You need your mic to be active")
                    }
                    _this.events.emit({
                        type: 'error',
                        payload: event
                    });
                    break;
            }
        };
        recognition.onend = function () {
            // invokeCallbacks(this.callbacks.end);
            // smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
            _this.events.emit({
                type: 'end',
                payload: event
            });
            if (_this.autoRestart) {
                // play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - _this.lastStartedAt;
                if (timeSinceLastStart < 1000) {
                    setTimeout(function () {
                        _this.start({});
                    }, 1000 - timeSinceLastStart);
                }
                else {
                    _this.start({});
                }
            }
        };
        recognition.onresult = function (event) {
            // this.invokeCallbacks(this.callbacks.result);
            var results = event.results[event.resultIndex];
            var commandText;
            // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
            for (var i = 0; i < results.length; i++) {
                // the text recognized
                commandText = results[i].transcript.trim();
                if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                    console.log('Speech recognized: %c' + commandText, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                }
                var _loop_1 = function (j, l) {
                    var result = _this.commandsList[j].command.exec(commandText);
                    if (result) {
                        var parameters = result.slice(1);
                        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                            console.log('command matched: %c' + _this.commandsList[j].originalPhrase, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                            if (parameters.length) {
                                console.log('with parameters', parameters);
                            }
                        }
                        if (_this.commandsList[j].type == 'action') {
                            setTimeout(function () {
                                _this.events.emit(_this.commandsList[j]);
                            }, 50);
                        }
                        else {
                            // execute the matched command
                            _this.commandsList[j].callback.apply(_this, parameters);
                        }
                        // this.invokeCallbacks(this.callbacks.resultMatch);
                        // for commands "sound on", "stop" and "mute" do not play sound or display message
                        var ignoreCallsFor = ["sound on", "mute", "stop"];
                        if (ignoreCallsFor.indexOf(_this.commandsList[j].originalPhrase) < 0) {
                            _this.events.emit({
                                type: 'match',
                                payload: _this.commandsList[j].originalPhrase
                            });
                        } // end if
                        return { value: true };
                    }
                };
                // try and match recognized text to one of the commands on the list
                for (var j = 0, l = _this.commandsList.length; j < l; j++) {
                    var state_1 = _loop_1(j, l);
                    if (typeof state_1 === "object")
                        return state_1.value;
                } // end for
            } // end for
            // invokeCallbacks(callbacks.resultNoMatch);
            //console.log("no match found for: " + commandText)
            _this.events.emit({
                type: 'no match',
                payload: commandText
            });
            return false;
        };
        // build commands list
        if (resetCommands) {
            this.commandsList = [];
        }
        if (commands.length) {
            this.addCommands(commands);
        }
        this.recognition = recognition;
    };
    // Start listening (asking for permission first, if needed).
    // Call this after you've initialized smartSpeechRecognition with commands.
    // Receives an optional options object:
    // { autoRestart: true }
    VoiceRecognitionService.prototype.start = function (options) {
        if (options === void 0) { options = {}; }
        this.initIfNeeded();
        if (options.autoRestart !== undefined) {
            this.autoRestart = !!options.autoRestart;
        }
        else {
            this.autoRestart = true;
        }
        this.lastStartedAt = new Date().getTime();
        this.recognition.start();
    };
    // abort the listening session (aka stop)
    VoiceRecognitionService.prototype.abort = function () {
        this.autoRestart = false;
        if (this.recognition && this.recognition.abort) {
            this.recognition.abort();
        }
    };
    // Turn on output of debug messages to the console. Ugly, but super-handy!
    VoiceRecognitionService.prototype.debug = function (newState) {
        if (arguments.length > 0) {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = !!newState;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = true;
        }
    };
    // Set the language the user will speak in. If not called, defaults to 'en-US'.
    // e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
    VoiceRecognitionService.prototype.setLanguage = function (language) {
        this.initIfNeeded();
        this.recognition.lang = language;
    };
    // Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
    VoiceRecognitionService.prototype.addCommands = function (commands) {
        var _this = this;
        var action, command;
        this.initIfNeeded();
        Object.keys(commands).forEach(function (phrase) {
            action = window[commands[phrase]] || commands[phrase];
            //convert command to regex
            command = _this.commandToRegExp(phrase);
            if (typeof action === 'function') {
                _this.commandsList.push({
                    type: 'function',
                    command: command,
                    callback: action,
                    originalPhrase: phrase
                });
            }
            if (typeof action === 'object') {
                _this.commandsList.push({
                    type: 'action',
                    command: command,
                    payload: action.payload,
                    actionType: action.type,
                    originalPhrase: phrase
                });
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
            console.log('Commands successfully loaded: %c' + this.commandsList.length, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
        }
    };
    // Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
    VoiceRecognitionService.prototype.removeCommands = function (commandsToRemove) {
        if (commandsToRemove === undefined) {
            this.commandsList = [];
            return;
        }
        commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
        this.commandsList = this.commandsList.filter(function (command) {
            for (var i = 0; i < commandsToRemove.length; i++) {
                if (commandsToRemove[i] === command.originalPhrase) {
                    return false;
                }
            }
            return true;
        });
    };
    ;
    // Lets the user add a callback of one of 9 types:
    // start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
    // Can also optionally receive a context for the callback function as the third argument
    VoiceRecognitionService.prototype.addCallback = function (type, callback, context) {
        if (this.callbacks[type] === undefined) {
            return;
        }
        var cb = window[callback] || callback;
        if (typeof cb !== 'function') {
            return;
        }
        this.callbacks[type].push({
            callback: cb,
            context: context || this
        });
    };
    VoiceRecognitionService.prototype.invokeCallbacks = function (callbacks) {
        callbacks.forEach(function (callback) {
            callback.callback.apply(callback.context);
        });
    };
    ;
    return VoiceRecognitionService;
}());
VoiceRecognitionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], VoiceRecognitionService);

//# sourceMappingURL=voice-recognition.service.js.map

/***/ })

},[1060]);
//# sourceMappingURL=main.bundle.js.map