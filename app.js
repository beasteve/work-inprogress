(function () {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "/personalization/cl2/freeform/WebsiteDetect?source=wwwhead&fetchType=js&modalView=nmLanding",
    true
  );
  request.send();
  var request2 = new XMLHttpRequest();
  request2.open(
    "GET",
    "/personalization/cl2/freeform/WebsiteScreen?source=wwwhead&fetchType=js" +
      "&winw=" +
      window.outerWidth +
      "&winh=" +
      window.outerHeight +
      "&screenw=" +
      window.innerWidth +
      "&screenh=" +
      window.innerHeight +
      "&ratio=" +
      (window.devicePixelRatio ? window.devicePixelRatio : "unsupported"),
    true
  );
  request2.send();
})();

/////
window.netflix = window.netflix || {};
netflix.notification.specification.uiView = {
  impression: { send: "both", overlapping: true },
  command: { send: "both" },
  search: { send: "both" },
  uma: { send: "both" },
  focus: { send: "both" },
  scdWizardStep: { send: "both" },
  navigationLevel: { send: "both" },
  presentation: { send: "both" },
  onrampSimilarsGroup: { send: "both" },
};
///
// another script

window.netflix = window.netflix || {};
netflix.notification.specification.uiAction = {
  manageSubscriptions: { send: "end" },
  removeActivityHistory: { send: "end" },
  promoShareFacebook: { send: "end" },
  promoShareTwitter: { send: "end" },
  rateTitle: { send: "end" },
  addToPlaylist: { send: "both" },
  selectProfile: { send: "end" },
  addProfile: { send: "end" },
  trailerPlay: { send: "both" },
  startTrailerPlay: { send: "both" },
  onRamp: { send: "both" },
  submitUnsupportedCountryEmail: { send: "both" },
  iTunesPriceFetching: { send: "both" },
  iTunesPurchase: { send: "both" },
  iTunesRestore: { send: "both" },
  iTunesSubmitReceipt: { send: "both" },
  iTunesSubmitRestoredReceipt: { send: "both" },
  iTunesSignUpFallback: { send: "both" },
  iTunesTracerPurchaseBegin: { send: "both" },
  iTunesTracerPurchasePostBridge: { send: "both" },
  iTunesTracerPurchaseHandleReceipt: { send: "both" },
  iTunesTracerPurchaseHasReceipt: { send: "both" },
  iTunesTracerPurchasePreFailure: { send: "both" },
  iTunesTracerPurchaseFailure: { send: "both" },
  iTunesTracerPurchaseCancel: { send: "both" },
  iTunesTracerPurchasePreFailureDevice: { send: "both" },
  iTunesTracerPurchaseFailureDevice: { send: "both" },
  iTunesTracerPurchaseMissingReceipt: { send: "both" },
  iTunesTracerPurchasePreSendReceipt: { send: "both" },
  iTunesTracerPurchaseSendReceipt: { send: "both" },
  iTunesTracerPurchaseMoneyballError: { send: "both" },
  iTunesTracerPurchaseSendReceiptEnd: { send: "both" },
  playStorePriceFetching: { send: "both" },
  playStorePurchase: { send: "both" },
  playStoreRestore: { send: "both" },
  playStoreSubmitReceipt: { send: "both" },
  playStoreSubmitRestoredReceipt: { send: "both" },
  playStoreFlowFallback: { send: "both" },
  playStoreSignUpFallback: { send: "both" },
  playStoreAndroidSignUp: { send: "both" },
  playStoreAndroidRetrySignUp: { send: "both" },
  playStoreTracerPurchaseBegin: { send: "both" },
  playStoreTracerPurchasePostBridge: { send: "both" },
  playStoreTracerPurchaseHandleReceipt: { send: "both" },
  playStoreTracerPurchaseHasReceipt: { send: "both" },
  playStoreTracerPurchasePreFailure: { send: "both" },
  playStoreTracerPurchaseFailure: { send: "both" },
  playStoreTracerPurchaseCancel: { send: "both" },
  playStoreTracerPurchasePreFailureDevice: { send: "both" },
  playStoreTracerPurchaseFailureDevice: { send: "both" },
  playStoreTracerPurchaseMissingReceipt: { send: "both" },
  playStoreTracerPurchasePreSendReceipt: { send: "both" },
  playStoreTracerPurchaseSendReceipt: { send: "both" },
  playStoreTracerPurchaseMoneyballError: { send: "both" },
  playStoreTracerPurchaseSendReceiptEnd: { send: "both" },
  simplicitySubmit: { send: "both" },
  simplicityFlowEndpointTiming: { send: "both" },
  editPaymentSubmit: { send: "both" },
  processAsDebitChecked: { send: "both" },
  processAsDebitSubmit: { send: "both" },
  processAsDebitUrl: { send: "both" },
  processAsDebitRendered: { send: "both" },
  navigate: { send: "both" },
  submitOnrampResults: { send: "both" },
};
// end

//

window.netflix = window.netflix || {};
netflix.notification.specification.uiQOE = {
  appSession: { send: "both" },
  userSession: { send: "both" },
  uiStartup: { send: "end" },
  uiBrowseStartup: { send: "end" },
  uiModalViewChanged: {
    eventProperties: { value: "modalView" },
    send: "start",
  },
  uiModelessView: { send: "both", overlapping: "true" },
  partnerSession: { send: "both", overlapping: false },
};

window.netflix = window.netflix || {};
netflix.notification.specification.www = {
  playbackPerformance: { send: "both" },
  playbackFeatureDetection: { send: "end" },
  playbackError: { send: "end" },
  windowOnError: { send: "end" },
};

window.netflix = window.netflix || {};
netflix.notification.specification.login = {
  poll: { send: "both" },
  autofill: { send: "both" },
};

//

window.netflix = window.netflix || {};
netflix.notification = window.netflix.notification =
  window.netflix.notification || {};
window.netflix.notification.specification =
  netflix.notification.specification || {};
//

window.netflix = window.netflix || {};
netflix.reactContext = {
  title: "metaTitleWithCountry",
  clPageName: "nmLanding",
  layout: "simpleLayout",
  template: "signup\x2Fnmhp\x2FnmhpFramework.tsx",
  models: {
    esnGeneratorModel: {
      data: {
        esn: "NFCDFF-02-JHLHGJPD9N3KYDQL5T36JL0A48CUCA",
        useFallbackEsn: false,
        fallbackEsn: "WWW-BROWSE-",
      },
      type: "Model",
    },
    abContext: {
      data: {
        headers: {
          "X-Netflix.uiVersion": "vdb1a9ffc",
          "X-Netflix.esnPrefix": "NFCDFF-02-",
          "X-Netflix.browserName": "Firefox",
          "X-Netflix.browserVersion": 104,
          "X-Netflix.osName": "Windows",
          "X-Netflix.osFullName": "Windows\x2010",
          "X-Netflix.osVersion": "10.0",
          "X-Netflix.clientType": "akira",
        },
      },
    },
    nonmemberSupportCategories: {
      data: {
        category: "innovation",
        isLegacyClient: false,
        isStaticClient: false,
      },
      type: "Model",
    },
    serverDefs: {
      data: {
        env: "prod",
        stack: "prod",
        cluster: "nq_website_nonmember-prod-release",
        instance: "d53e6544-0a7b-489e-a0b9-f4aaca4cc17e",
        EC2_REGION: "eu-west-1",
        BUILD_IDENTIFIER: "vdb1a9ffc",
        useRevisionLatest: false,
        uiVersion: "shakti-vdb1a9ffc",
        endpointIdentifiers: {},
        host: "www.netflix.com",
        requestId: "89d1b3db-09ed-4e84-9aa9-e2744716b7f3-219827182",
        useMonorepoEndpoints: true,
        userEndpoint: null,
        API_CONSOLIDATED: false,
        CUSTOM_PRIMER_STACK: false,
        AUI_ENDPOINT_STACK: null,
        API_ROOT: "https:\x2F\x2Fwww.netflix.com\x2Fapi",
        DVD_CO: "https:\x2F\x2Fdvd.netflix.com\x2F",
        debugApiRequests: false,
        ftlHost: "",
        ftlRecoveryHTTPStatus: [0, 408, 414, 502, 504],
        enableABInclusionHeaders: true,
        acceptHeaders:
          "text\x2Fhtml,application\x2Fxhtml\x2Bxml,application\x2Fxml\x3Bq\x3D0.9,image\x2Favif,image\x2Fwebp,\x2A\x2F\x2A\x3Bq\x3D0.8",
        requestIpAddress: "46.25.207.117,2a05:d018:76c:b682::4b71",
      },
      type: "Model",
    },
    requestHeaders: {
      data: {
        accept:
          "text\x2Fhtml,application\x2Fxhtml\x2Bxml,application\x2Fxml\x3Bq\x3D0.9,image\x2Favif,image\x2Fwebp,\x2A\x2F\x2A\x3Bq\x3D0.8",
        xForwardedFor: "46.25.207.117,2a05:d018:76c:b682::4b71",
      },
      type: "Model",
    },
    browserInfo: {
      data: {
        name: "Firefox",
        version: "104.0.0",
        major: 104,
        minor: 0,
        patch: 0,
        os: {
          name: "Windows",
          fullName: "Windows\x2010",
          version: "10.0",
          majorVersion: 10,
          minorVersion: 0,
          patchVersion: 0,
        },
        device: { family: "Other" },
        isFirefox: true,
        isSafari: false,
        isIE: false,
        isEdge: false,
        isChrome: false,
        isTesla: false,
        isOpera: false,
        isEdgeOSS: false,
        isWindows: true,
        isMac: false,
        isChromeOS: false,
        isLinux: false,
        isAndroid: false,
        isIOS: false,
        isIOSGT91: false,
        isWindowsPhone: false,
        isMobile: false,
        isAndroidPhone: false,
        isWindowsVista: false,
        isWindowsXP: false,
        isWindows7: false,
        isWindows8: false,
        isWindows10: true,
        originallyIdentifiedAsAppleMail: false,
        features: {
          avif: false,
          webp: false,
          es2015: true,
          fontDisplayProperty: true,
          drmSystem: "widevine",
          maybeSupportsHTML5: true,
          maybeSupportsHTML5withDRM: true,
          maybeSupportsSL: false,
        },
        specialFlags: { isFFWin64: true },
        esnPrefix: "NFCDFF-02-",
        _rawResult: {
          family: "Firefox",
          major: "104",
          minor: "0",
          patch: "0",
          device: {
            family: "Other",
            major: "0",
            minor: "0",
            patch: "0",
          },
          os: {
            family: "Windows\x2010",
            major: "0",
            minor: "0",
            patch: "0",
          },
        },
      },
      type: "Model",
    },
    links: {
      data: {
        WIHOMEURL: "\x2FWiHome",
        TERMS: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Ftermsofuse",
        PRIVACY: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fprivacy",
      },
      type: "Model",
    },
    uiTracking: {
      data: {
        mapRequestId: "",
        enabled: true,
        retrySend: true,
        maxRecords: 250,
        useCompression: true,
        ptdebug: false,
      },
      type: "Model",
    },
    moneyballRequestProps: {
      data: {
        dynamicMoneyballProps: false,
        flow: "signupSimplicity",
        flowMode: "welcome",
        esn: "",
        inApp: "",
        isLegacyClient: false,
        nfuToken: "",
        signupEntryPoint: false,
        supportCategory: "innovation",
      },
      type: "Model",
    },
    signupContext: {
      data: {
        flow: {
          mode: "welcome",
          netflixClientPlatform: "browser",
          flwssn: "b4b1f7ec-0a6d-466d-8910-fc3052b2fa4b",
          adaptiveFields: {
            customizations: [
              {
                tabs: [
                  {
                    tabHeader: {
                      icon: "icon-cancel",
                      messages: {
                        headerSmall: "cancel_anytime_small_screen",
                        header: "cancel_anytime",
                      },
                      iconSmall: "icon-cancel",
                    },
                    tabBody: {
                      header: {},
                      body: {
                        image: {
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                            },
                          ],
                        },
                        messages: {
                          ctaButton: "button_join_free_for_a_month",
                          headline: "cancel_anytime_content",
                        },
                      },
                    },
                    renderType: "cancelAnytime",
                  },
                  {
                    tabHeader: {
                      icon: "icon-cross-device-screens-desktop",
                      messages: {
                        headerSmall: "watch_anywhere_mobile_optimized",
                        header: "watch_anywhere",
                      },
                      iconSmall: "icon-cross-device-screens-small",
                    },
                    tabBody: {
                      header: {
                        image: {
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                            },
                          ],
                        },
                        messages: {
                          ctaButton: "button_join_free_for_a_month",
                          headline: "watch_anywhere_logo_content",
                        },
                      },
                      body: {
                        devices: [
                          {
                            image: {
                              alt: "watch_anywhere_tv_content_hd_img_alt",
                              imageSet: [
                                {
                                  cdnUrl:
                                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                                },
                              ],
                            },
                            messages: {
                              subhead: "watch_anywhere_tv_content_chromecast",
                              headline: "watch_anywhere_tv_content_hd",
                            },
                          },
                          {
                            image: {
                              alt: "watch_anywhere_download_hd_img_alt",
                              imageSet: [
                                {
                                  cdnUrl:
                                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                                },
                              ],
                            },
                            messages: {
                              subhead: "watch_anywhere_download_generic",
                              headline: "watch_anywhere_download_hd",
                            },
                          },
                          {
                            image: {
                              alt: "watch_anywhere_laptop_content_hd_img_alt",
                              imageSet: [
                                {
                                  cdnUrl:
                                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                                },
                              ],
                            },
                            messages: {
                              subhead: "watch_anywhere_laptop_content",
                              headline: "watch_anywhere_laptop_content_hd",
                            },
                          },
                        ],
                      },
                    },
                    renderType: "device",
                  },
                  {
                    tabHeader: {
                      icon: "icon-price-tag",
                      messages: {
                        headerSmall: "watch_pricing_small_screen",
                        header: "watch_pricing",
                      },
                      iconSmall: "icon-price-tag",
                    },
                    tabBody: {
                      header: {
                        messages: {
                          ctaButton: "button_join_free_for_a_month",
                          headline: "watch_pricing_content",
                        },
                      },
                      body: {},
                    },
                    renderType: "price",
                  },
                ],
                messages: [
                  {
                    headerSmall: "learn_more_about_netflix_small_screen",
                    header: "learn_more_about_netflix",
                  },
                ],
                type: "thisIsNetflix",
                variation: "dark",
                activeTab: "0",
              },
              {
                cards: [
                  "card_hero",
                  "card_watchOnTv",
                  "card_downloadAndWatch",
                  "card_watchOnDevice",
                  "card_watchContentSampling",
                  "card_kidsValueProp",
                  "card_faq",
                ],
                type: "fuji",
              },
              {
                messages: {
                  ctaButton: "button_get_started",
                  ctaButton_never: "button_finishsignup_capitalized",
                  ctaButton_former:
                    "button_restart_your_membership_capitalized",
                },
                type: "fuji_ctas",
              },
              {
                cardType: "animation",
                name: "kidsValueProp",
                image:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
                labels: {
                  headline: { string: "kids_profile_title" },
                  subHeadline: { string: "kids_profile_body" },
                },
                flipped: true,
                kidsValuePropCard: {
                  url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
                },
                type: "card_kidsValueProp",
              },
              {
                cardType: "faq",
                name: "faq",
                labels: { headline: { string: "faq_headline_fuji" } },
                ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
                type: "card_faq",
              },
              {
                cardType: "animation",
                name: "downloadAndWatch",
                videoid: "80057281",
                image:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
                animation:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
                labels: {
                  headline: { string: "download_headline_fuji" },
                  subHeadline: { string: "download_sub_headline_fuji" },
                  animationMessages: [
                    { string: "download_message_status_fuji" },
                  ],
                },
                flipped: true,
                downloadVideo: { title: "Stranger\x20Things" },
                type: "card_downloadAndWatch",
              },
              {
                cardType: "animation",
                name: "watchOnTv",
                image:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
                video:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
                labels: {
                  headline: { string: "tv_headline_fuji" },
                  subHeadline: { string: "tv_sub_headline_fuji" },
                },
                type: "card_watchOnTv",
              },
              {
                cardType: "hero",
                name: "hero_fuji",
                image: "vlv",
                labels: {
                  headline: { string: "hero_headline_fuji" },
                  subHeadline: { string: "hero_sub_headline_fuji" },
                },
                ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
                type: "card_hero",
              },
              {
                cardType: "animation",
                name: "watchOnDevice",
                image:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
                video:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
                labels: {
                  headline: { string: "device_headline_fuji" },
                  subHeadline: { string: "device_sub_headline_fuji" },
                },
                type: "card_watchOnDevice",
              },
              {
                cardType: "animation",
                name: "freePlanAndroid",
                image:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
                labels: {
                  headline: {
                    string: "free_plan_mobile_headline_fuji",
                  },
                  subHeadline: {
                    string: "free_plan_sub_headline_fuji",
                  },
                },
                ctas: [
                  {
                    ctaType: "ctaLink",
                    ctaStyle: "text_chevron",
                    ctaPath:
                      "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                    viewName: "nmLanding",
                    messages: { default: "free_plan_button_fuji" },
                  },
                ],
                type: "card_freePlanAndroid",
              },
              {
                image: {
                  numberOfLoops: "continuous",
                  imageSet: [
                    {
                      cdnUrl:
                        "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                    },
                  ],
                  tagMap: {},
                },
                type: "concord",
              },
            ],
            concord: {
              image: {
                numberOfLoops: "continuous",
                imageSet: [
                  {
                    cdnUrl:
                      "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                  },
                ],
              },
            },
            thisIsNetflix: {
              tabs: [
                {
                  tabHeader: {
                    icon: "icon-cancel",
                    messages: {
                      headerSmall: "cancel_anytime_small_screen",
                      header: "cancel_anytime",
                    },
                    iconSmall: "icon-cancel",
                  },
                  tabBody: {
                    header: {},
                    body: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "cancel_anytime_content",
                      },
                    },
                  },
                  renderType: "cancelAnytime",
                },
                {
                  tabHeader: {
                    icon: "icon-cross-device-screens-desktop",
                    messages: {
                      headerSmall: "watch_anywhere_mobile_optimized",
                      header: "watch_anywhere",
                    },
                    iconSmall: "icon-cross-device-screens-small",
                  },
                  tabBody: {
                    header: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_anywhere_logo_content",
                      },
                    },
                    body: {
                      devices: [
                        {
                          image: {
                            alt: "watch_anywhere_tv_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_tv_content_chromecast",
                            headline: "watch_anywhere_tv_content_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_download_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_download_generic",
                            headline: "watch_anywhere_download_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_laptop_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_laptop_content",
                            headline: "watch_anywhere_laptop_content_hd",
                          },
                        },
                      ],
                    },
                  },
                  renderType: "device",
                },
                {
                  tabHeader: {
                    icon: "icon-price-tag",
                    messages: {
                      headerSmall: "watch_pricing_small_screen",
                      header: "watch_pricing",
                    },
                    iconSmall: "icon-price-tag",
                  },
                  tabBody: {
                    header: {
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_pricing_content",
                      },
                    },
                    body: {},
                  },
                  renderType: "price",
                },
              ],
              messages: [
                {
                  headerSmall: "learn_more_about_netflix_small_screen",
                  header: "learn_more_about_netflix",
                },
              ],
              type: "thisIsNetflix",
              variation: "dark",
              activeTab: "0",
            },
            card_watchOnTv: {
              cardType: "animation",
              name: "watchOnTv",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
              labels: {
                headline: { string: "tv_headline_fuji" },
                subHeadline: { string: "tv_sub_headline_fuji" },
              },
            },
            card_hero: {
              cardType: "hero",
              name: "hero_fuji",
              image: "vlv",
              labels: {
                headline: { string: "hero_headline_fuji" },
                subHeadline: { string: "hero_sub_headline_fuji" },
              },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            },
            card_watchOnDevice: {
              cardType: "animation",
              name: "watchOnDevice",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
              labels: {
                headline: { string: "device_headline_fuji" },
                subHeadline: { string: "device_sub_headline_fuji" },
              },
            },
            fuji: {
              cards: [
                "card_hero",
                "card_watchOnTv",
                "card_downloadAndWatch",
                "card_watchOnDevice",
                "card_watchContentSampling",
                "card_kidsValueProp",
                "card_faq",
              ],
            },
            fuji_ctas: {
              messages: {
                ctaButton: "button_get_started",
                ctaButton_never: "button_finishsignup_capitalized",
                ctaButton_former: "button_restart_your_membership_capitalized",
              },
            },
            card_kidsValueProp: {
              cardType: "animation",
              name: "kidsValueProp",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
              labels: {
                headline: { string: "kids_profile_title" },
                subHeadline: { string: "kids_profile_body" },
              },
              flipped: true,
              kidsValuePropCard: {
                url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
              },
            },
            card_faq: {
              cardType: "faq",
              name: "faq",
              labels: { headline: { string: "faq_headline_fuji" } },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            },
            card_downloadAndWatch: {
              cardType: "animation",
              name: "downloadAndWatch",
              videoid: "80057281",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
              animation:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
              labels: {
                headline: { string: "download_headline_fuji" },
                subHeadline: { string: "download_sub_headline_fuji" },
                animationMessages: [{ string: "download_message_status_fuji" }],
              },
              flipped: true,
              downloadVideo: { title: "Stranger\x20Things" },
            },
            card_freePlanAndroid: {
              cardType: "animation",
              name: "freePlanAndroid",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
              labels: {
                headline: { string: "free_plan_mobile_headline_fuji" },
                subHeadline: { string: "free_plan_sub_headline_fuji" },
              },
              ctas: [
                {
                  ctaType: "ctaLink",
                  ctaStyle: "text_chevron",
                  ctaPath:
                    "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                  viewName: "nmLanding",
                  messages: { default: "free_plan_button_fuji" },
                },
              ],
            },
            debug: "",
            sessionData: "",
          },
          fields: {
            csPhoneNumber: {
              fieldType: "String",
              value: "900\x20822\x20377",
            },
            signedup: { fieldType: "Boolean", value: false },
            hasFreeTrial: { fieldType: "Boolean", value: false },
            startAction: { fieldType: "Action" },
            planChoice: {
              options: [
                {
                  fields: {
                    billingFrequency: {
                      fieldType: "String",
                      value: "Monthly",
                    },
                    canWatchOnMobilePhoneAndTablet: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planHasHd: { fieldType: "Boolean", value: false },
                    planPriceAmount: {
                      fieldType: "String",
                      value: "7.99",
                    },
                    planName: {
                      localize: true,
                      fieldType: "String",
                      value: "text_1_stream_name",
                    },
                    planMaxDownloadCount: {
                      fieldType: "Numeric",
                      value: 1,
                    },
                    planTier: {
                      localize: true,
                      fieldType: "String",
                      value: "text_1_stream_name",
                    },
                    offerDurationLength: { fieldType: "String" },
                    resolution: {
                      readOnly: true,
                      fieldType: "String",
                      value: "text_video_quality_480p",
                    },
                    videoQuality: {
                      fieldType: "Custom",
                      value: ["text_video_quality_good"],
                    },
                    offerType: {
                      fieldType: "String",
                      value: "NO_DISCOUNT",
                    },
                    incentives: { fieldType: "Custom", value: {} },
                    canWatchOnMobilTabletAndLaptop: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planPrice: {
                      fieldType: "String",
                      value: "EUR7.99",
                    },
                    offerDurationInMonths: { fieldType: "Boolean" },
                    planHasUltraHd: {
                      fieldType: "Boolean",
                      value: false,
                    },
                    planPriceCurrency: {
                      fieldType: "String",
                      value: "EUR",
                    },
                    planType: { fieldType: "String", value: "BASIC" },
                    offerName: {
                      fieldType: "String",
                      value:
                        "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                    },
                    hasAds: { fieldType: "Boolean", value: false },
                    localizedPlanName: {
                      fieldType: "String",
                      value: "Basic",
                    },
                    offerId: {
                      fieldType: "String",
                      value: "314001031",
                    },
                    planDescription: {
                      fieldType: "String",
                      value:
                        "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                    },
                    supportedDevices: {
                      fieldType: "String",
                      value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                    },
                    planMaxScreenCount: {
                      fieldType: "Numeric",
                      value: 1,
                    },
                    canWatchOnLaptopAndTV: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    canWatchOnTV: { fieldType: "Boolean", value: true },
                  },
                  value: "314001031",
                },
                {
                  fields: {
                    billingFrequency: {
                      fieldType: "String",
                      value: "Monthly",
                    },
                    canWatchOnMobilePhoneAndTablet: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planHasHd: { fieldType: "Boolean", value: true },
                    planPriceAmount: {
                      fieldType: "String",
                      value: "12.99",
                    },
                    planName: {
                      localize: true,
                      fieldType: "String",
                      value: "text_2_stream_name",
                    },
                    planMaxDownloadCount: {
                      fieldType: "Numeric",
                      value: 2,
                    },
                    planTier: {
                      localize: true,
                      fieldType: "String",
                      value: "text_2_stream_name",
                    },
                    offerDurationLength: { fieldType: "String" },
                    resolution: {
                      readOnly: true,
                      fieldType: "String",
                      value: "text_video_quality_1080p",
                    },
                    videoQuality: {
                      fieldType: "Custom",
                      value: ["text_video_quality_better"],
                    },
                    offerType: {
                      fieldType: "String",
                      value: "NO_DISCOUNT",
                    },
                    incentives: { fieldType: "Custom", value: {} },
                    canWatchOnMobilTabletAndLaptop: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planPrice: {
                      fieldType: "String",
                      value: "EUR12.99",
                    },
                    offerDurationInMonths: { fieldType: "Boolean" },
                    planHasUltraHd: {
                      fieldType: "Boolean",
                      value: false,
                    },
                    planPriceCurrency: {
                      fieldType: "String",
                      value: "EUR",
                    },
                    planType: {
                      fieldType: "String",
                      value: "STANDARD",
                    },
                    offerName: {
                      fieldType: "String",
                      value:
                        "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                    },
                    hasAds: { fieldType: "Boolean", value: false },
                    localizedPlanName: {
                      fieldType: "String",
                      value: "Standard",
                    },
                    offerId: { fieldType: "String", value: "10322" },
                    planDescription: {
                      fieldType: "String",
                      value:
                        "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                    },
                    supportedDevices: {
                      fieldType: "String",
                      value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                    },
                    planMaxScreenCount: {
                      fieldType: "Numeric",
                      value: 2,
                    },
                    canWatchOnLaptopAndTV: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    canWatchOnTV: { fieldType: "Boolean", value: true },
                  },
                  value: "10322",
                },
                {
                  fields: {
                    billingFrequency: {
                      fieldType: "String",
                      value: "Monthly",
                    },
                    canWatchOnMobilePhoneAndTablet: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planHasHd: { fieldType: "Boolean", value: true },
                    planPriceAmount: {
                      fieldType: "String",
                      value: "17.99",
                    },
                    planName: {
                      localize: true,
                      fieldType: "String",
                      value: "text_4_stream_name",
                    },
                    planMaxDownloadCount: {
                      fieldType: "Numeric",
                      value: 4,
                    },
                    planTier: {
                      localize: true,
                      fieldType: "String",
                      value: "text_4_stream_name",
                    },
                    offerDurationLength: { fieldType: "String" },
                    resolution: {
                      readOnly: true,
                      fieldType: "String",
                      value: "text_video_quality_4khdr",
                    },
                    videoQuality: {
                      fieldType: "Custom",
                      value: ["text_video_quality_best"],
                    },
                    offerType: {
                      fieldType: "String",
                      value: "NO_DISCOUNT",
                    },
                    incentives: { fieldType: "Custom", value: {} },
                    canWatchOnMobilTabletAndLaptop: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planPrice: {
                      fieldType: "String",
                      value: "EUR17.99",
                    },
                    offerDurationInMonths: { fieldType: "Boolean" },
                    planHasUltraHd: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    planPriceCurrency: {
                      fieldType: "String",
                      value: "EUR",
                    },
                    planType: { fieldType: "String", value: "PREMIUM" },
                    offerName: {
                      fieldType: "String",
                      value:
                        "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                    },
                    hasAds: { fieldType: "Boolean", value: false },
                    localizedPlanName: {
                      fieldType: "String",
                      value: "Premium",
                    },
                    offerId: { fieldType: "String", value: "10341" },
                    planDescription: {
                      fieldType: "String",
                      value:
                        "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                    },
                    supportedDevices: {
                      fieldType: "String",
                      value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                    },
                    planMaxScreenCount: {
                      fieldType: "Numeric",
                      value: 4,
                    },
                    canWatchOnLaptopAndTV: {
                      fieldType: "Boolean",
                      value: true,
                    },
                    canWatchOnTV: { fieldType: "Boolean", value: true },
                  },
                  value: "10341",
                },
              ],
              fieldType: "Choice",
              value: "10341",
            },
            registered: { fieldType: "Boolean", value: false },
            abAllocations: [],
            isFreeTrial: { fieldType: "Boolean", value: false },
            rows: [
              {
                messages: {
                  label: {
                    expect: [],
                    string: "monthly_price",
                    stringData: null,
                  },
                },
                moneyballField: "planPrice",
              },
              {
                messages: {
                  label: {
                    expect: [],
                    string: "text_video_quality",
                    stringData: null,
                  },
                },
                moneyballField: "videoQuality",
              },
              {
                messages: {
                  label: {
                    expect: [],
                    string: "text_resolution",
                    stringData: null,
                  },
                },
                moneyballField: "resolution",
              },
              {
                messages: {
                  label: {
                    expect: [],
                    string: "text_watchable_devices",
                    stringData: null,
                  },
                },
              },
            ],
            recognizedNeverMember: {
              fieldType: "Boolean",
              value: false,
            },
            moneyballSessionUuid: {
              hidden: true,
              readOnly: true,
              fieldType: "String",
              value: "c333ac46-d140-4724-98a1-3b9dc5c37977",
            },
            firstName: { fieldType: "String" },
            saveAction: { withFields: ["email"], fieldType: "Action" },
            anonymous: { fieldType: "Boolean", value: true },
            recognizedFormerMember: {
              fieldType: "Boolean",
              value: false,
            },
            messages: {
              ctaButton: {
                string: "button_continue",
                fieldType: "Message",
              },
              streamDisclaimer: {
                string: "text_disclaimer_people_bsp",
                fieldType: "Message",
              },
              headerSubtitleMessage: {
                string: "text_downgrade_anytime",
                fieldType: "Message",
              },
              textDisclaimer: {
                string: "text_disclaimer_with_resolution",
                fieldType: "Message",
              },
              headerTitleMessage: {
                string: "headline_choose_plan_right_for_you",
                fieldType: "Message",
              },
            },
            headerRows: [
              {
                messages: {
                  label: {
                    expect: [],
                    string: "watch_ad_free_prop",
                    stringData: null,
                  },
                },
              },
              {
                messages: {
                  label: {
                    expect: [],
                    string: "subheader_recommendations_just_for_you",
                    stringData: null,
                  },
                },
              },
              {
                messages: {
                  label: {
                    expect: [],
                    string: "subheader_change_or_cancel_anytime",
                    stringData: null,
                  },
                },
              },
            ],
            signInAction: { fieldType: "Action" },
            email: {
              minLength: 5,
              fieldType: "String",
              validationRegex:
                '\x5E[\x5E\\s\x3C\x3E"\\\\\x3B:]\x2B\x40[a-zA-Z0-9.\\-_]\x2B\\.[a-zA-Z0-9-_]\x2B\x24',
              maxLength: 50,
            },
          },
          flow: "signupSimplicity",
        },
        geo: {
          preferredLocale: {
            country: "ES",
            language: "en",
            dir: "ltr",
            isCursive: false,
            doubleByte: false,
            hasExtendedDiacritics: false,
            default: false,
            id: "en-ES",
          },
          locale: {
            default: false,
            dir: "ltr",
            displayName: "English\x20\x28Spain\x29",
            fallbackDisplayName: "English",
            id: "en-ES",
            language: "en",
            isCursive: false,
            doubleByte: false,
            hasExtendedDiacritics: false,
            durationFormat: "hoursAndMinutes",
            fallbacks: ["en"],
          },
          supportedLocales: [
            {
              locale: "es-ES",
              selected: false,
              default: true,
              country: "ES",
              id: "es",
              displayText: "Espa\u00F1ol",
            },
            {
              locale: "en-ES",
              selected: true,
              default: false,
              country: "ES",
              id: "en",
              displayText: "English",
            },
          ],
          supportedCountry: "ALLOW",
          requestCountry: {
            id: "ES",
            countryName: "Spain",
            supportedLocales: ["es", "en"],
            defaultLocale: "es",
            status: "ALLOW",
            regionCode: "T",
          },
          showPreTaxDisclaimer: false,
          showAltTermsOfUse: true,
          showLegalContactsLink: false,
          showIntlTerms: false,
          shouldReverseNameFields: false,
        },
        userInfo: {
          name: null,
          guid: null,
          userGuid: null,
          emailAddress: null,
          countryOfSignup: null,
          currentCountry: null,
          membershipStatus: "ANONYMOUS",
          isDVD: null,
          isTestAccount: null,
          isKids: false,
          isInFreeTrial: false,
          isBOBO: null,
          hasBOBOResult: false,
          memberSince: null,
          authURL: "1661583857103.Ix0YAqOHDL51kU47gTrSP9gCSa4\x3D",
          showCookieDisclosure: true,
          userLocale: {
            locale: {
              default: false,
              dir: "ltr",
              displayName: "English\x20\x28Spain\x29",
              fallbackDisplayName: "English",
              fallbacks: ["en"],
              id: "en-ES",
              language: "en",
              preferredLocales: ["en-ES", "en"],
              isCursive: false,
              doubleByte: false,
              hasExtendedDiacritics: false,
              durationFormat: "hoursAndMinutes",
            },
          },
          esn: "NFCDFF-02-JHLHGJMEUJMXT9U77G2K2CETJ3VD91",
          esnPrefix: "NFCDFF",
          deviceTypeId: 1193,
        },
        shouldUseAUIEndpoint: true,
        watchLinkUrl: "https:\x2F\x2Fdevices.netflix.com\x2F",
        originalPath: "\x2Fes-en\x2F",
        testAllocations: [],
        csPhoneNumber: { phoneNumber: "900\x20822\x20377" },
        iosOnboarding: null,
        useAltTermsOfUse: false,
        useTextNotifications: false,
        inapp: false,
        sharedUuid: false,
      },
    },
    ab: { data: { _evaluatedTests: {} } },
    geo: {
      data: {
        preferredLocale: {
          country: "ES",
          language: "en",
          dir: "ltr",
          isCursive: false,
          doubleByte: false,
          hasExtendedDiacritics: false,
          default: false,
          id: "en-ES",
        },
        locale: {
          default: false,
          dir: "ltr",
          displayName: "English\x20\x28Spain\x29",
          fallbackDisplayName: "English",
          id: "en-ES",
          language: "en",
          isCursive: false,
          doubleByte: false,
          hasExtendedDiacritics: false,
          durationFormat: "hoursAndMinutes",
          fallbacks: ["en"],
        },
        supportedLocales: [
          {
            locale: "es-ES",
            selected: false,
            default: true,
            country: "ES",
            id: "es",
            displayText: "Espa\u00F1ol",
          },
          {
            locale: "en-ES",
            selected: true,
            default: false,
            country: "ES",
            id: "en",
            displayText: "English",
          },
        ],
        supportedCountry: "ALLOW",
        requestCountry: {
          id: "ES",
          countryName: "Spain",
          supportedLocales: ["es", "en"],
          defaultLocale: "es",
          status: "ALLOW",
          regionCode: "T",
        },
        showPreTaxDisclaimer: false,
        showAltTermsOfUse: true,
        showLegalContactsLink: false,
        showIntlTerms: false,
        shouldReverseNameFields: false,
        hasLocaleQuery: true,
        localeUrl: "es-en",
      },
    },
    userInfo: {
      data: {
        name: null,
        guid: null,
        userGuid: null,
        emailAddress: null,
        countryOfSignup: null,
        currentCountry: null,
        membershipStatus: "ANONYMOUS",
        isDVD: null,
        isTestAccount: null,
        isKids: false,
        isInFreeTrial: false,
        isBOBO: null,
        hasBOBOResult: false,
        memberSince: null,
        authURL: "1661583857103.Ix0YAqOHDL51kU47gTrSP9gCSa4\x3D",
        showCookieDisclosure: true,
        userLocale: {
          locale: {
            default: false,
            dir: "ltr",
            displayName: "English\x20\x28Spain\x29",
            fallbackDisplayName: "English",
            fallbacks: ["en"],
            id: "en-ES",
            language: "en",
            preferredLocales: ["en-ES", "en"],
            isCursive: false,
            doubleByte: false,
            hasExtendedDiacritics: false,
            durationFormat: "hoursAndMinutes",
          },
        },
        esn: "NFCDFF-02-JHLHGJMEUJMXT9U77G2K2CETJ3VD91",
        esnPrefix: "NFCDFF",
        deviceTypeId: 1193,
      },
    },
    umaModel: {
      data: { alertBox: null, isDeepLink: false },
      type: "api",
    },
    octoberSkyProperties: {
      data: {
        status: "ALLOW",
        supportedLocales: ["es", "en"],
        defaultLocale: "es",
        id: "ES",
        displayName: "Espa\u00F1a",
        props: {
          pin_required: false,
          pin_enabled: false,
          show_pay_after_free_month: true,
          alt_terms_of_use_enabled: true,
          show_terms_intl_transaction: false,
          show_kr_footer_disclaimer: false,
          showLegalContactsLink: false,
          inAppIOSSignupSupport: true,
          regPageSimplifiedMessaging: false,
          minimum_verification_age: "18",
          payment_card_number_first: false,
          phone_sms_consent_enabled: true,
          signup_tou_region: "eu",
          signup_tou_checkbox: false,
          signup_tou_has_minimized_consents: false,
          partner_connect_tou_region: "eu",
          partner_connect_tou_checkbox: false,
          hide_country_in_footer_and_title: false,
          redirect_odp_to_info: false,
          pin_required_min_age: "",
          pin_reset_on_non_pin_content: false,
          preTaxDisclaimerOnPrice: false,
          showRedeemGiftInFooter: true,
          showGiftLandingLink: true,
          force_hawkeye_cookie: false,
          buyGiftCardOnlineLink: "",
          require_additional_cookie_consent: true,
          override_maturity_names_little_kids: "",
          override_maturity_names_older_kids: "",
          override_maturity_names_teens: "",
          override_maturity_names_adults: "",
          override_maturity_names_restricted: "",
          maturity_toggle_by_label: false,
          cancelBundleUponPartnerPause: false,
          hide_free_trial_button_label: false,
          free_trial_eligible: false,
          show_language_disclaimer: false,
          cookie_disclosure_text_type: "eu",
          show_start_paid_membership_except_ppp: false,
          should_show_extra_member_new_tag: false,
          should_show_paid_locations_new_tag: false,
          show_footer_guarantee_link: true,
          show_footer_do_not_sell_info_link: false,
        },
      },
      type: "Model",
    },
    inapp: {
      data: {
        esn: "NFCDFF-02-JHLHGJMEUJMXT9U77G2K2CETJ3VD91",
        esnPrefix: "NFCDFF",
        signupEnabled: false,
        isAnonymous: true,
        inapp: false,
        sharedUuid: false,
        windows: false,
        android: false,
        ios: false,
        osType: "unknown",
        unsupportedLanguageMessageURLs: false,
        anonymous: true,
      },
      type: "Model",
    },
    assetHosts: {
      data: {
        ASSETS_HOST: "https:\x2F\x2Fassets.nflxext.com",
        IMGPATH: "https:\x2F\x2Fassets.nflxext.com\x2Fen_us",
        CDNPATH: "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui",
      },
      type: "Model",
    },
    flow: {
      data: {
        moneyballPaths: {
          passwordOnly: "\x2Fsignup\x2Fpassword",
          planSelectionWithContext: "\x2Fsignup",
          learnMore: "\x2Fsignup\x2Flearnmore",
          greetFormerMember: "\x2Fsignup\x2Fwelcomeback",
          planSelection: "\x2Fsignup\x2Fplanform",
          registrationWithContext: "\x2Fsignup\x2Fregistration",
          registration: "\x2Fsignup\x2Fregform",
          paymentPicker: "\x2Fsignup\x2FpaymentPicker",
          paymentPickerWithContext: "\x2Fsignup\x2Fpaymentcontext",
          payAndStartMembershipWithContext: "\x2Fsignup\x2Fpayment",
          payAndStartMembershipGiftAsOnlyMop: "\x2Fsignup\x2Fsecondarypayment",
          editPaymentAndStartMembershipModeWithContext:
            "\x2Fsignup\x2Feditpaymentcontext",
          editPaymentAndStartMembershipMode: "\x2Fsignup\x2Feditpaymentchoice",
          editCreditAndStartMembershipMode:
            "\x2Fsignup\x2Feditcreditstartmembership",
          editDebitAndStartMembershipMode:
            "\x2Fsignup\x2Feditdebitstartmembership",
          payAndStartMembershipForcedWithContext: "\x2Fsignup\x2Fpaymentinfo",
          payAndStartMembershipForced: "\x2Fsignup\x2Fpaymentselection",
          applePayOptionMode: "\x2Fsignup\x2Fapplepayoption",
          editapplePayOptionMode: "\x2Fsignup\x2Feditapplepayoption",
          creditOptionMode: "\x2Fsignup\x2Fcreditoption",
          debitOptionMode: "\x2Fsignup\x2Fdebitoption",
          paypalOptionMode: "\x2Fsignup\x2Fpaypaloption",
          giftOptionMode: "\x2Fsignup\x2Fgiftoption",
          editgiftOptionMode: "\x2Fsignup\x2Feditgift",
          idealOptionMode: "\x2Fsignup\x2Fidealoption",
          directDebitOptionMode: "\x2Fsignup\x2Fdirectdebitoption",
          deDebitOptionMode: "\x2Fsignup\x2FdeDebitoption",
          coDebitOptionMode: "\x2Fsignup\x2FcoDebitoption",
          openBankingOptionMode: "\x2Fsignup\x2FopenBanking",
          collectZipCodeForGift: "\x2Fsignup\x2Fcollectzipcode",
          editcreditOptionMode: "\x2Fsignup\x2Feditcredit",
          editcreditOptionWithContextMode: "\x2Fsignup\x2Feditcreditcontext",
          editdebitOptionMode: "\x2Fsignup\x2Feditdebit",
          editdebitOptionWithContextMode: "\x2Fsignup\x2Feditdebitcontext",
          editpaypalOptionMode: "\x2Fsignup\x2Feditpaypal",
          editidealOptionMode: "\x2Fsignup\x2Feditideal",
          editdirectDebitOptionMode: "\x2Fsignup\x2Feditdirectdebit",
          editdeDebitOptionMode: "\x2Fsignup\x2FeditdeDebitOption",
          editcoDebitOptionMode: "\x2Fsignup\x2FeditcoDebitOption",
          editopenBankingOptionMode: "\x2Fsignup\x2FeditopenBanking",
          editdcbOptionMode: "\x2Fsignup\x2Feditdcb",
          editcashPaymentOptionMode: "\x2Fsignup\x2FeditcashPaymentOption",
          editblikOptionMode: "\x2Fsignup\x2FeditblikOption",
          editmobileWalletOptionMode: "\x2Fsignup\x2FeditmobileWalletOption",
          confirmWithContext: "\x2Fsignup\x2Fconfirm",
          confirm: "\x2Fsignup\x2Fconfirmform",
          confirmPreviousPlan: "\x2Fsignup\x2FconfirmPreviousPlan",
          upiOrderConfirm: "\x2Fsignup\x2Fupiorderconfirm",
          upiMandateInfo: "\x2Fsignup\x2Fupimandateinfo",
          upiWaiting: "\x2FsimpleSetup\x2Fupiwaiting",
          editPayment: "\x2Fsignup\x2Feditpayment",
          editPlanSelection: "\x2Fsignup\x2Feditplan",
          changePlan: "\x2Fsignup\x2Fchangeplan",
          changeEmail: "\x2Femail",
          changeEmailWithoutChallenge: "\x2Fchangeemailverified",
          changeEmailBlocked: "\x2Fyouraccount",
          confirmMembershipStarted: "\x2Forderfinal",
          confirmMembershipStartedForSimplicity:
            "\x2FsimpleSetup\x2Forderfinal",
          welcome: "\x2F",
          memberHome: "\x2Fbrowse",
          dvdPlans:
            "https:\x2F\x2Fdvd.netflix.com\x2FSignupDVD\x3Fdsrc\x3DSTRWEB_SIGNUP",
          verifyCardContext: "\x2Fsignup\x2FverifyCardContext",
          verifyCard: "\x2Fsignup\x2FverifyCard",
          verifyLater: "\x2Fsignup\x2FverifyLater",
          verifyCardEditPaymentContext:
            "\x2Fsignup\x2FverifyCardEditPaymentContext",
          verifyCardEditPayment: "\x2Fsignup\x2FverifyCardEditPayment",
          replayRequestMode: "\x2Fsignup\x2Freplay",
          replayRequestEditPaymentMode: "\x2Fsignup\x2FreplayEditPayment",
          changeCardProcessingType: "\x2Fsignup\x2FchangeProcessingType",
          dcbOptionMode: "\x2Fsignup\x2Fdcboption",
          cashPaymentOptionMode: "\x2Fsignup\x2FcashPaymentOption",
          blikOptionMode: "\x2Fsignup\x2FblikOption",
          mobileWalletOptionMode: "\x2Fsignup\x2FmobileWalletOption",
          cashOrderFinal: "\x2FsimpleSetup\x2Fcashorderfinal",
          dcbVerify: "\x2Fsignup\x2Fdcbverify",
          upiPaymentOptionMode: "\x2Fsignup\x2Fupipaymentoption",
          editupiPaymentOptionMode: "\x2Fsignup\x2Feditupipaymentoption",
          login: "\x2Flogin",
          signupBlocked: "\x2FsignupBlocked",
          enterOTPPhoneMode: "\x2Fsignup\x2FotpPhoneEntry",
          enterOTPCodeMode: "\x2Fsignup\x2FotpCodeEntry",
          selectOTPPhoneNumber: "\x2Fsignup\x2FotpPhoneSelect",
          enterOTPCodeWithTou: "\x2Fsignup\x2FotpCodeEntryWithTou",
          redirectRequestLanding: "\x2Fsignup\x2FredirectRequestLanding",
          blikWaiting: "\x2FsimpleSetup\x2Fblikwaiting",
          enterTvLoginRendezvousCode: "\x2Ftv8",
          tvLoginSuccess: "\x2Ftv\x2Fin\x2Fsuccess",
          midProfileTransferLanding:
            "\x2Faccount\x2Fprofile\x2FtransferIncomplete",
          profileTransferContext: "\x2Faccount\x2Fprofile\x2Ftransfercontext",
          profileTransferOwnerEnabling:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferOwnerConsentStatus:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferBorrowerConsentStatus:
            "\x2Faccount\x2Fprofile\x2Ftransfer",
          freePlanEligibleSeoPage: "\x2Ffree-plan",
          freePlanIneligibleSeoPage: "\x2Ffree-plan",
          freePlanAppUpgrade: "\x2Fappupgrade",
          mhuCreateAccount: "\x2Fsignup\x2FcreateAccountContext",
        },
        mode: "welcome",
        netflixClientPlatform: "browser",
        flwssn: "b4b1f7ec-0a6d-466d-8910-fc3052b2fa4b",
        adaptiveFields: {
          customizations: [
            {
              tabs: [
                {
                  tabHeader: {
                    icon: "icon-cancel",
                    messages: {
                      headerSmall: "cancel_anytime_small_screen",
                      header: "cancel_anytime",
                    },
                    iconSmall: "icon-cancel",
                  },
                  tabBody: {
                    header: {},
                    body: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "cancel_anytime_content",
                      },
                    },
                  },
                  renderType: "cancelAnytime",
                },
                {
                  tabHeader: {
                    icon: "icon-cross-device-screens-desktop",
                    messages: {
                      headerSmall: "watch_anywhere_mobile_optimized",
                      header: "watch_anywhere",
                    },
                    iconSmall: "icon-cross-device-screens-small",
                  },
                  tabBody: {
                    header: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_anywhere_logo_content",
                      },
                    },
                    body: {
                      devices: [
                        {
                          image: {
                            alt: "watch_anywhere_tv_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_tv_content_chromecast",
                            headline: "watch_anywhere_tv_content_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_download_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_download_generic",
                            headline: "watch_anywhere_download_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_laptop_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_laptop_content",
                            headline: "watch_anywhere_laptop_content_hd",
                          },
                        },
                      ],
                    },
                  },
                  renderType: "device",
                },
                {
                  tabHeader: {
                    icon: "icon-price-tag",
                    messages: {
                      headerSmall: "watch_pricing_small_screen",
                      header: "watch_pricing",
                    },
                    iconSmall: "icon-price-tag",
                  },
                  tabBody: {
                    header: {
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_pricing_content",
                      },
                    },
                    body: {},
                  },
                  renderType: "price",
                },
              ],
              messages: [
                {
                  headerSmall: "learn_more_about_netflix_small_screen",
                  header: "learn_more_about_netflix",
                },
              ],
              type: "thisIsNetflix",
              variation: "dark",
              activeTab: "0",
            },
            {
              cards: [
                "card_hero",
                "card_watchOnTv",
                "card_downloadAndWatch",
                "card_watchOnDevice",
                "card_watchContentSampling",
                "card_kidsValueProp",
                "card_faq",
              ],
              type: "fuji",
            },
            {
              messages: {
                ctaButton: "button_get_started",
                ctaButton_never: "button_finishsignup_capitalized",
                ctaButton_former: "button_restart_your_membership_capitalized",
              },
              type: "fuji_ctas",
            },
            {
              cardType: "animation",
              name: "kidsValueProp",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
              labels: {
                headline: { string: "kids_profile_title" },
                subHeadline: { string: "kids_profile_body" },
              },
              flipped: true,
              kidsValuePropCard: {
                url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
              },
              type: "card_kidsValueProp",
            },
            {
              cardType: "faq",
              name: "faq",
              labels: { headline: { string: "faq_headline_fuji" } },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_faq",
            },
            {
              cardType: "animation",
              name: "downloadAndWatch",
              videoid: "80057281",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
              animation:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
              labels: {
                headline: { string: "download_headline_fuji" },
                subHeadline: { string: "download_sub_headline_fuji" },
                animationMessages: [{ string: "download_message_status_fuji" }],
              },
              flipped: true,
              downloadVideo: { title: "Stranger\x20Things" },
              type: "card_downloadAndWatch",
            },
            {
              cardType: "animation",
              name: "watchOnTv",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
              labels: {
                headline: { string: "tv_headline_fuji" },
                subHeadline: { string: "tv_sub_headline_fuji" },
              },
              type: "card_watchOnTv",
            },
            {
              cardType: "hero",
              name: "hero_fuji",
              image: "vlv",
              labels: {
                headline: { string: "hero_headline_fuji" },
                subHeadline: { string: "hero_sub_headline_fuji" },
              },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_hero",
            },
            {
              cardType: "animation",
              name: "watchOnDevice",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
              labels: {
                headline: { string: "device_headline_fuji" },
                subHeadline: { string: "device_sub_headline_fuji" },
              },
              type: "card_watchOnDevice",
            },
            {
              cardType: "animation",
              name: "freePlanAndroid",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
              labels: {
                headline: { string: "free_plan_mobile_headline_fuji" },
                subHeadline: { string: "free_plan_sub_headline_fuji" },
              },
              ctas: [
                {
                  ctaType: "ctaLink",
                  ctaStyle: "text_chevron",
                  ctaPath:
                    "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                  viewName: "nmLanding",
                  messages: { default: "free_plan_button_fuji" },
                },
              ],
              type: "card_freePlanAndroid",
            },
            {
              image: {
                numberOfLoops: "continuous",
                imageSet: [
                  {
                    cdnUrl:
                      "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                  },
                ],
                tagMap: {},
              },
              type: "concord",
            },
          ],
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
            },
          },
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
          },
          debug: "",
          sessionData: "",
        },
        fields: {
          csPhoneNumber: {
            fieldType: "String",
            value: "900\x20822\x20377",
          },
          signedup: { fieldType: "Boolean", value: false },
          hasFreeTrial: { fieldType: "Boolean", value: false },
          startAction: { fieldType: "Action" },
          planChoice: {
            options: [
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: false },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "7.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_480p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_good"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR7.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "BASIC" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Basic",
                  },
                  offerId: { fieldType: "String", value: "314001031" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "314001031",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "12.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_1080p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_better"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR12.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "STANDARD" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Standard",
                  },
                  offerId: { fieldType: "String", value: "10322" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10322",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "17.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_4khdr",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_best"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR17.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: { fieldType: "Boolean", value: true },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "PREMIUM" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Premium",
                  },
                  offerId: { fieldType: "String", value: "10341" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10341",
              },
            ],
            fieldType: "Choice",
            value: "10341",
          },
          registered: { fieldType: "Boolean", value: false },
          abAllocations: [],
          isFreeTrial: { fieldType: "Boolean", value: false },
          rows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "monthly_price",
                  stringData: null,
                },
              },
              moneyballField: "planPrice",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_video_quality",
                  stringData: null,
                },
              },
              moneyballField: "videoQuality",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_resolution",
                  stringData: null,
                },
              },
              moneyballField: "resolution",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_watchable_devices",
                  stringData: null,
                },
              },
            },
          ],
          recognizedNeverMember: { fieldType: "Boolean", value: false },
          moneyballSessionUuid: {
            hidden: true,
            readOnly: true,
            fieldType: "String",
            value: "c333ac46-d140-4724-98a1-3b9dc5c37977",
          },
          firstName: { fieldType: "String" },
          saveAction: { withFields: ["email"], fieldType: "Action" },
          anonymous: { fieldType: "Boolean", value: true },
          recognizedFormerMember: {
            fieldType: "Boolean",
            value: false,
          },
          messages: {
            ctaButton: {
              string: "button_continue",
              fieldType: "Message",
            },
            streamDisclaimer: {
              string: "text_disclaimer_people_bsp",
              fieldType: "Message",
            },
            headerSubtitleMessage: {
              string: "text_downgrade_anytime",
              fieldType: "Message",
            },
            textDisclaimer: {
              string: "text_disclaimer_with_resolution",
              fieldType: "Message",
            },
            headerTitleMessage: {
              string: "headline_choose_plan_right_for_you",
              fieldType: "Message",
            },
          },
          headerRows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "watch_ad_free_prop",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_recommendations_just_for_you",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_change_or_cancel_anytime",
                  stringData: null,
                },
              },
            },
          ],
          signInAction: { fieldType: "Action" },
          email: {
            minLength: 5,
            fieldType: "String",
            validationRegex:
              '\x5E[\x5E\\s\x3C\x3E"\\\\\x3B:]\x2B\x40[a-zA-Z0-9.\\-_]\x2B\\.[a-zA-Z0-9-_]\x2B\x24',
            maxLength: 50,
          },
        },
        flow: "signupSimplicity",
        initialPathname: "\x2F\x3Flocale\x3Den-ES",
        trackingInfo: {
          flow: "signupSimplicity",
          mode: "welcome",
          actions: ["startAction", "saveAction", "signInAction"],
        },
        customization: {
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
            type: "fuji",
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
            type: "fuji_ctas",
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
            type: "card_kidsValueProp",
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_faq",
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
            type: "card_downloadAndWatch",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
            type: "card_watchOnTv",
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_hero",
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
            type: "card_watchOnDevice",
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
            type: "card_freePlanAndroid",
          },
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
              tagMap: {},
            },
            type: "concord",
          },
        },
        thisIsNetflix: {
          tabs: [
            {
              tabHeader: {
                icon: "icon-cancel",
                messages: {
                  headerSmall: "cancel_anytime_small_screen",
                  header: "cancel_anytime",
                },
                iconSmall: "icon-cancel",
              },
              tabBody: {
                header: {},
                body: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "cancel_anytime_content",
                  },
                },
              },
              renderType: "cancelAnytime",
            },
            {
              tabHeader: {
                icon: "icon-cross-device-screens-desktop",
                messages: {
                  headerSmall: "watch_anywhere_mobile_optimized",
                  header: "watch_anywhere",
                },
                iconSmall: "icon-cross-device-screens-small",
              },
              tabBody: {
                header: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_anywhere_logo_content",
                  },
                },
                body: {
                  devices: [
                    {
                      image: {
                        alt: "watch_anywhere_tv_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_tv_content_chromecast",
                        headline: "watch_anywhere_tv_content_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_download_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_download_generic",
                        headline: "watch_anywhere_download_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_laptop_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_laptop_content",
                        headline: "watch_anywhere_laptop_content_hd",
                      },
                    },
                  ],
                },
              },
              renderType: "device",
            },
            {
              tabHeader: {
                icon: "icon-price-tag",
                messages: {
                  headerSmall: "watch_pricing_small_screen",
                  header: "watch_pricing",
                },
                iconSmall: "icon-price-tag",
              },
              tabBody: {
                header: {
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_pricing_content",
                  },
                },
                body: {},
              },
              renderType: "price",
            },
          ],
          messages: [
            {
              headerSmall: "learn_more_about_netflix_small_screen",
              header: "learn_more_about_netflix",
            },
          ],
          type: "thisIsNetflix",
          variation: "dark",
          activeTab: "0",
        },
        fuji: {
          cards: [
            "card_hero",
            "card_watchOnTv",
            "card_downloadAndWatch",
            "card_watchOnDevice",
            "card_watchContentSampling",
            "card_kidsValueProp",
            "card_faq",
          ],
          type: "fuji",
        },
        fuji_ctas: {
          messages: {
            ctaButton: "button_get_started",
            ctaButton_never: "button_finishsignup_capitalized",
            ctaButton_former: "button_restart_your_membership_capitalized",
          },
          type: "fuji_ctas",
        },
        card_kidsValueProp: {
          cardType: "animation",
          name: "kidsValueProp",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
          labels: {
            headline: { string: "kids_profile_title" },
            subHeadline: { string: "kids_profile_body" },
          },
          flipped: true,
          kidsValuePropCard: {
            url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
          },
          type: "card_kidsValueProp",
        },
        card_faq: {
          cardType: "faq",
          name: "faq",
          labels: { headline: { string: "faq_headline_fuji" } },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_faq",
        },
        card_downloadAndWatch: {
          cardType: "animation",
          name: "downloadAndWatch",
          videoid: "80057281",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
          animation:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
          labels: {
            headline: { string: "download_headline_fuji" },
            subHeadline: { string: "download_sub_headline_fuji" },
            animationMessages: [{ string: "download_message_status_fuji" }],
          },
          flipped: true,
          downloadVideo: { title: "Stranger\x20Things" },
          type: "card_downloadAndWatch",
        },
        card_watchOnTv: {
          cardType: "animation",
          name: "watchOnTv",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
          labels: {
            headline: { string: "tv_headline_fuji" },
            subHeadline: { string: "tv_sub_headline_fuji" },
          },
          type: "card_watchOnTv",
        },
        card_hero: {
          cardType: "hero",
          name: "hero_fuji",
          image: "vlv",
          labels: {
            headline: { string: "hero_headline_fuji" },
            subHeadline: { string: "hero_sub_headline_fuji" },
          },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_hero",
        },
        card_watchOnDevice: {
          cardType: "animation",
          name: "watchOnDevice",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
          labels: {
            headline: { string: "device_headline_fuji" },
            subHeadline: { string: "device_sub_headline_fuji" },
          },
          type: "card_watchOnDevice",
        },
        card_freePlanAndroid: {
          cardType: "animation",
          name: "freePlanAndroid",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
          labels: {
            headline: { string: "free_plan_mobile_headline_fuji" },
            subHeadline: { string: "free_plan_sub_headline_fuji" },
          },
          ctas: [
            {
              ctaType: "ctaLink",
              ctaStyle: "text_chevron",
              ctaPath:
                "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
              viewName: "nmLanding",
              messages: { default: "free_plan_button_fuji" },
            },
          ],
          type: "card_freePlanAndroid",
        },
        concord: {
          image: {
            numberOfLoops: "continuous",
            imageSet: [
              {
                cdnUrl:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
              },
            ],
            tagMap: {},
          },
          type: "concord",
        },
      },
      type: "Model",
    },
    showCookieDisclosure: { data: true, type: "Model" },
    signupHeaderFooter: {
      data: {
        links: {
          helpLinks: [
            {
              label: "footer.responsive.link.faq",
              limited: true,
              href: "https:\x2F\x2Fhelp.netflix.com\x2Fsupport\x2F412",
            },
            {
              label: "footer.responsive.link.giftTerms",
              limited: true,
              giftOnly: true,
              href: "https:\x2F\x2Fwww.netflix.com\x2Fgiftterms",
            },
            {
              label: "footer.responsive.link.help",
              href: "https:\x2F\x2Fhelp.netflix.com",
              limited: true,
              inapp: true,
            },
            {
              label: "footer.responsive.link.account",
              href: "\x2Fyouraccount",
            },
          ],
          companyLinks: [
            {
              label: "footer.responsive.link.media.center",
              href: "https:\x2F\x2Fmedia.netflix.com\x2F",
            },
            {
              label: "footer.responsive.link.relations",
              href: "http:\x2F\x2Fir.netflix.com\x2F",
            },
            {
              label: "footer.responsive.link.jobs",
              href: "https:\x2F\x2Fjobs.netflix.com\x2Fjobs",
            },
          ],
          getStartedLinks: [
            {
              label: "footer.responsive.link.gift.redeem",
              href: "\x2Fredeem",
              isHidden: false,
            },
            {
              label: "footer.responsive.link.gift.buy",
              href: "\x2Fgift-cards",
              isHidden: false,
            },
            {
              label: "footer.responsive.link.waysToWatch",
              href: "\x2Fwatch",
            },
            {
              label: "footer.responsive.link.terms",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Ftermsofuse",
              limited: true,
              inapp: true,
            },
            {
              label: "footer.responsive.link.privacy_separate_link",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fprivacy",
              limited: true,
              inapp: true,
            },
            {
              label: "footer.responsive.link.cookies_separate_link",
              href: "\x23",
              limited: true,
              inapp: true,
            },
            {
              label: "footer.responsive.link.corporate_information",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fcorpinfo",
              limited: true,
              excludedGeos: ["DE", "AT"],
            },
            {
              label: "footer.responsive.link.corporate_information_impressum",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Fen\x2Fnode\x2F68708",
              limited: true,
              geos: ["DE", "AT"],
            },
            {
              label: "footer.responsive.link.contact_us",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Fcontactus",
            },
            {
              label: "footer.responsive.commercial.jp",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fjacommercialtransaction",
              limited: true,
              inapp: true,
              geos: ["JP"],
            },
            {
              label: "footer.responsive.link.speed_test",
              href: "https:\x2F\x2Ffast.com",
            },
            {
              label: "footer.responsive.link.legal.guarantee",
              href: "https:\x2F\x2Fnetflix.com\x2Flegal\x2Fguarantee",
              isHidden: false,
            },
            {
              label: "footer.responsive.link.legal.notices",
              href: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fnotices",
            },
            {
              label: "footer.responsive.link.only_on_netflix",
              inapp: false,
              href: "https:\x2F\x2Fwww.netflix.com\x2Fes-en\x2Fbrowse\x2Fgenre\x2F839338",
              className: "originals-link",
            },
          ],
          testLinks: [],
        },
        showLogin: true,
        csPhoneNumber: { phoneNumber: "900\x20822\x20377" },
        shouldSeeNetflixCountry: true,
        showHeader: true,
        showKoreaFooterDisclaimer: false,
        disableNetflixLogoClick: false,
        showFooter: true,
        hideLanguageSelector: false,
        includeOneTrustScript: true,
      },
      type: "Model",
    },
    customization: {
      data: {
        moneyballPaths: {
          passwordOnly: "\x2Fsignup\x2Fpassword",
          planSelectionWithContext: "\x2Fsignup",
          learnMore: "\x2Fsignup\x2Flearnmore",
          greetFormerMember: "\x2Fsignup\x2Fwelcomeback",
          planSelection: "\x2Fsignup\x2Fplanform",
          registrationWithContext: "\x2Fsignup\x2Fregistration",
          registration: "\x2Fsignup\x2Fregform",
          paymentPicker: "\x2Fsignup\x2FpaymentPicker",
          paymentPickerWithContext: "\x2Fsignup\x2Fpaymentcontext",
          payAndStartMembershipWithContext: "\x2Fsignup\x2Fpayment",
          payAndStartMembershipGiftAsOnlyMop: "\x2Fsignup\x2Fsecondarypayment",
          editPaymentAndStartMembershipModeWithContext:
            "\x2Fsignup\x2Feditpaymentcontext",
          editPaymentAndStartMembershipMode: "\x2Fsignup\x2Feditpaymentchoice",
          editCreditAndStartMembershipMode:
            "\x2Fsignup\x2Feditcreditstartmembership",
          editDebitAndStartMembershipMode:
            "\x2Fsignup\x2Feditdebitstartmembership",
          payAndStartMembershipForcedWithContext: "\x2Fsignup\x2Fpaymentinfo",
          payAndStartMembershipForced: "\x2Fsignup\x2Fpaymentselection",
          applePayOptionMode: "\x2Fsignup\x2Fapplepayoption",
          editapplePayOptionMode: "\x2Fsignup\x2Feditapplepayoption",
          creditOptionMode: "\x2Fsignup\x2Fcreditoption",
          debitOptionMode: "\x2Fsignup\x2Fdebitoption",
          paypalOptionMode: "\x2Fsignup\x2Fpaypaloption",
          giftOptionMode: "\x2Fsignup\x2Fgiftoption",
          editgiftOptionMode: "\x2Fsignup\x2Feditgift",
          idealOptionMode: "\x2Fsignup\x2Fidealoption",
          directDebitOptionMode: "\x2Fsignup\x2Fdirectdebitoption",
          deDebitOptionMode: "\x2Fsignup\x2FdeDebitoption",
          coDebitOptionMode: "\x2Fsignup\x2FcoDebitoption",
          openBankingOptionMode: "\x2Fsignup\x2FopenBanking",
          collectZipCodeForGift: "\x2Fsignup\x2Fcollectzipcode",
          editcreditOptionMode: "\x2Fsignup\x2Feditcredit",
          editcreditOptionWithContextMode: "\x2Fsignup\x2Feditcreditcontext",
          editdebitOptionMode: "\x2Fsignup\x2Feditdebit",
          editdebitOptionWithContextMode: "\x2Fsignup\x2Feditdebitcontext",
          editpaypalOptionMode: "\x2Fsignup\x2Feditpaypal",
          editidealOptionMode: "\x2Fsignup\x2Feditideal",
          editdirectDebitOptionMode: "\x2Fsignup\x2Feditdirectdebit",
          editdeDebitOptionMode: "\x2Fsignup\x2FeditdeDebitOption",
          editcoDebitOptionMode: "\x2Fsignup\x2FeditcoDebitOption",
          editopenBankingOptionMode: "\x2Fsignup\x2FeditopenBanking",
          editdcbOptionMode: "\x2Fsignup\x2Feditdcb",
          editcashPaymentOptionMode: "\x2Fsignup\x2FeditcashPaymentOption",
          editblikOptionMode: "\x2Fsignup\x2FeditblikOption",
          editmobileWalletOptionMode: "\x2Fsignup\x2FeditmobileWalletOption",
          confirmWithContext: "\x2Fsignup\x2Fconfirm",
          confirm: "\x2Fsignup\x2Fconfirmform",
          confirmPreviousPlan: "\x2Fsignup\x2FconfirmPreviousPlan",
          upiOrderConfirm: "\x2Fsignup\x2Fupiorderconfirm",
          upiMandateInfo: "\x2Fsignup\x2Fupimandateinfo",
          upiWaiting: "\x2FsimpleSetup\x2Fupiwaiting",
          editPayment: "\x2Fsignup\x2Feditpayment",
          editPlanSelection: "\x2Fsignup\x2Feditplan",
          changePlan: "\x2Fsignup\x2Fchangeplan",
          changeEmail: "\x2Femail",
          changeEmailWithoutChallenge: "\x2Fchangeemailverified",
          changeEmailBlocked: "\x2Fyouraccount",
          confirmMembershipStarted: "\x2Forderfinal",
          confirmMembershipStartedForSimplicity:
            "\x2FsimpleSetup\x2Forderfinal",
          welcome: "\x2F",
          memberHome: "\x2Fbrowse",
          dvdPlans:
            "https:\x2F\x2Fdvd.netflix.com\x2FSignupDVD\x3Fdsrc\x3DSTRWEB_SIGNUP",
          verifyCardContext: "\x2Fsignup\x2FverifyCardContext",
          verifyCard: "\x2Fsignup\x2FverifyCard",
          verifyLater: "\x2Fsignup\x2FverifyLater",
          verifyCardEditPaymentContext:
            "\x2Fsignup\x2FverifyCardEditPaymentContext",
          verifyCardEditPayment: "\x2Fsignup\x2FverifyCardEditPayment",
          replayRequestMode: "\x2Fsignup\x2Freplay",
          replayRequestEditPaymentMode: "\x2Fsignup\x2FreplayEditPayment",
          changeCardProcessingType: "\x2Fsignup\x2FchangeProcessingType",
          dcbOptionMode: "\x2Fsignup\x2Fdcboption",
          cashPaymentOptionMode: "\x2Fsignup\x2FcashPaymentOption",
          blikOptionMode: "\x2Fsignup\x2FblikOption",
          mobileWalletOptionMode: "\x2Fsignup\x2FmobileWalletOption",
          cashOrderFinal: "\x2FsimpleSetup\x2Fcashorderfinal",
          dcbVerify: "\x2Fsignup\x2Fdcbverify",
          upiPaymentOptionMode: "\x2Fsignup\x2Fupipaymentoption",
          editupiPaymentOptionMode: "\x2Fsignup\x2Feditupipaymentoption",
          login: "\x2Flogin",
          signupBlocked: "\x2FsignupBlocked",
          enterOTPPhoneMode: "\x2Fsignup\x2FotpPhoneEntry",
          enterOTPCodeMode: "\x2Fsignup\x2FotpCodeEntry",
          selectOTPPhoneNumber: "\x2Fsignup\x2FotpPhoneSelect",
          enterOTPCodeWithTou: "\x2Fsignup\x2FotpCodeEntryWithTou",
          redirectRequestLanding: "\x2Fsignup\x2FredirectRequestLanding",
          blikWaiting: "\x2FsimpleSetup\x2Fblikwaiting",
          enterTvLoginRendezvousCode: "\x2Ftv8",
          tvLoginSuccess: "\x2Ftv\x2Fin\x2Fsuccess",
          midProfileTransferLanding:
            "\x2Faccount\x2Fprofile\x2FtransferIncomplete",
          profileTransferContext: "\x2Faccount\x2Fprofile\x2Ftransfercontext",
          profileTransferOwnerEnabling:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferOwnerConsentStatus:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferBorrowerConsentStatus:
            "\x2Faccount\x2Fprofile\x2Ftransfer",
          freePlanEligibleSeoPage: "\x2Ffree-plan",
          freePlanIneligibleSeoPage: "\x2Ffree-plan",
          freePlanAppUpgrade: "\x2Fappupgrade",
          mhuCreateAccount: "\x2Fsignup\x2FcreateAccountContext",
        },
        mode: "welcome",
        netflixClientPlatform: "browser",
        flwssn: "b4b1f7ec-0a6d-466d-8910-fc3052b2fa4b",
        adaptiveFields: {
          customizations: [
            {
              tabs: [
                {
                  tabHeader: {
                    icon: "icon-cancel",
                    messages: {
                      headerSmall: "cancel_anytime_small_screen",
                      header: "cancel_anytime",
                    },
                    iconSmall: "icon-cancel",
                  },
                  tabBody: {
                    header: {},
                    body: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "cancel_anytime_content",
                      },
                    },
                  },
                  renderType: "cancelAnytime",
                },
                {
                  tabHeader: {
                    icon: "icon-cross-device-screens-desktop",
                    messages: {
                      headerSmall: "watch_anywhere_mobile_optimized",
                      header: "watch_anywhere",
                    },
                    iconSmall: "icon-cross-device-screens-small",
                  },
                  tabBody: {
                    header: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_anywhere_logo_content",
                      },
                    },
                    body: {
                      devices: [
                        {
                          image: {
                            alt: "watch_anywhere_tv_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_tv_content_chromecast",
                            headline: "watch_anywhere_tv_content_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_download_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_download_generic",
                            headline: "watch_anywhere_download_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_laptop_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_laptop_content",
                            headline: "watch_anywhere_laptop_content_hd",
                          },
                        },
                      ],
                    },
                  },
                  renderType: "device",
                },
                {
                  tabHeader: {
                    icon: "icon-price-tag",
                    messages: {
                      headerSmall: "watch_pricing_small_screen",
                      header: "watch_pricing",
                    },
                    iconSmall: "icon-price-tag",
                  },
                  tabBody: {
                    header: {
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_pricing_content",
                      },
                    },
                    body: {},
                  },
                  renderType: "price",
                },
              ],
              messages: [
                {
                  headerSmall: "learn_more_about_netflix_small_screen",
                  header: "learn_more_about_netflix",
                },
              ],
              type: "thisIsNetflix",
              variation: "dark",
              activeTab: "0",
            },
            {
              cards: [
                "card_hero",
                "card_watchOnTv",
                "card_downloadAndWatch",
                "card_watchOnDevice",
                "card_watchContentSampling",
                "card_kidsValueProp",
                "card_faq",
              ],
              type: "fuji",
            },
            {
              messages: {
                ctaButton: "button_get_started",
                ctaButton_never: "button_finishsignup_capitalized",
                ctaButton_former: "button_restart_your_membership_capitalized",
              },
              type: "fuji_ctas",
            },
            {
              cardType: "animation",
              name: "kidsValueProp",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
              labels: {
                headline: { string: "kids_profile_title" },
                subHeadline: { string: "kids_profile_body" },
              },
              flipped: true,
              kidsValuePropCard: {
                url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
              },
              type: "card_kidsValueProp",
            },
            {
              cardType: "faq",
              name: "faq",
              labels: { headline: { string: "faq_headline_fuji" } },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_faq",
            },
            {
              cardType: "animation",
              name: "downloadAndWatch",
              videoid: "80057281",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
              animation:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
              labels: {
                headline: { string: "download_headline_fuji" },
                subHeadline: { string: "download_sub_headline_fuji" },
                animationMessages: [{ string: "download_message_status_fuji" }],
              },
              flipped: true,
              downloadVideo: { title: "Stranger\x20Things" },
              type: "card_downloadAndWatch",
            },
            {
              cardType: "animation",
              name: "watchOnTv",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
              labels: {
                headline: { string: "tv_headline_fuji" },
                subHeadline: { string: "tv_sub_headline_fuji" },
              },
              type: "card_watchOnTv",
            },
            {
              cardType: "hero",
              name: "hero_fuji",
              image: "vlv",
              labels: {
                headline: { string: "hero_headline_fuji" },
                subHeadline: { string: "hero_sub_headline_fuji" },
              },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_hero",
            },
            {
              cardType: "animation",
              name: "watchOnDevice",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
              labels: {
                headline: { string: "device_headline_fuji" },
                subHeadline: { string: "device_sub_headline_fuji" },
              },
              type: "card_watchOnDevice",
            },
            {
              cardType: "animation",
              name: "freePlanAndroid",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
              labels: {
                headline: { string: "free_plan_mobile_headline_fuji" },
                subHeadline: { string: "free_plan_sub_headline_fuji" },
              },
              ctas: [
                {
                  ctaType: "ctaLink",
                  ctaStyle: "text_chevron",
                  ctaPath:
                    "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                  viewName: "nmLanding",
                  messages: { default: "free_plan_button_fuji" },
                },
              ],
              type: "card_freePlanAndroid",
            },
            {
              image: {
                numberOfLoops: "continuous",
                imageSet: [
                  {
                    cdnUrl:
                      "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                  },
                ],
                tagMap: {},
              },
              type: "concord",
            },
          ],
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
            },
          },
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
          },
          debug: "",
          sessionData: "",
        },
        fields: {
          csPhoneNumber: {
            fieldType: "String",
            value: "900\x20822\x20377",
          },
          signedup: { fieldType: "Boolean", value: false },
          hasFreeTrial: { fieldType: "Boolean", value: false },
          startAction: { fieldType: "Action" },
          planChoice: {
            options: [
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: false },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "7.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_480p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_good"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR7.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "BASIC" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Basic",
                  },
                  offerId: { fieldType: "String", value: "314001031" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "314001031",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "12.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_1080p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_better"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR12.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "STANDARD" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Standard",
                  },
                  offerId: { fieldType: "String", value: "10322" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10322",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "17.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_4khdr",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_best"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR17.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: { fieldType: "Boolean", value: true },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "PREMIUM" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Premium",
                  },
                  offerId: { fieldType: "String", value: "10341" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10341",
              },
            ],
            fieldType: "Choice",
            value: "10341",
          },
          registered: { fieldType: "Boolean", value: false },
          abAllocations: [],
          isFreeTrial: { fieldType: "Boolean", value: false },
          rows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "monthly_price",
                  stringData: null,
                },
              },
              moneyballField: "planPrice",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_video_quality",
                  stringData: null,
                },
              },
              moneyballField: "videoQuality",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_resolution",
                  stringData: null,
                },
              },
              moneyballField: "resolution",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_watchable_devices",
                  stringData: null,
                },
              },
            },
          ],
          recognizedNeverMember: { fieldType: "Boolean", value: false },
          moneyballSessionUuid: {
            hidden: true,
            readOnly: true,
            fieldType: "String",
            value: "c333ac46-d140-4724-98a1-3b9dc5c37977",
          },
          firstName: { fieldType: "String" },
          saveAction: { withFields: ["email"], fieldType: "Action" },
          anonymous: { fieldType: "Boolean", value: true },
          recognizedFormerMember: {
            fieldType: "Boolean",
            value: false,
          },
          messages: {
            ctaButton: {
              string: "button_continue",
              fieldType: "Message",
            },
            streamDisclaimer: {
              string: "text_disclaimer_people_bsp",
              fieldType: "Message",
            },
            headerSubtitleMessage: {
              string: "text_downgrade_anytime",
              fieldType: "Message",
            },
            textDisclaimer: {
              string: "text_disclaimer_with_resolution",
              fieldType: "Message",
            },
            headerTitleMessage: {
              string: "headline_choose_plan_right_for_you",
              fieldType: "Message",
            },
          },
          headerRows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "watch_ad_free_prop",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_recommendations_just_for_you",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_change_or_cancel_anytime",
                  stringData: null,
                },
              },
            },
          ],
          signInAction: { fieldType: "Action" },
          email: {
            minLength: 5,
            fieldType: "String",
            validationRegex:
              '\x5E[\x5E\\s\x3C\x3E"\\\\\x3B:]\x2B\x40[a-zA-Z0-9.\\-_]\x2B\\.[a-zA-Z0-9-_]\x2B\x24',
            maxLength: 50,
          },
        },
        flow: "signupSimplicity",
        initialPathname: "\x2F\x3Flocale\x3Den-ES",
        trackingInfo: {
          flow: "signupSimplicity",
          mode: "welcome",
          actions: ["startAction", "saveAction", "signInAction"],
        },
        customization: {
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
            type: "fuji",
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
            type: "fuji_ctas",
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
            type: "card_kidsValueProp",
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_faq",
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
            type: "card_downloadAndWatch",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
            type: "card_watchOnTv",
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_hero",
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
            type: "card_watchOnDevice",
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
            type: "card_freePlanAndroid",
          },
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
              tagMap: {},
            },
            type: "concord",
          },
        },
        thisIsNetflix: {
          tabs: [
            {
              tabHeader: {
                icon: "icon-cancel",
                messages: {
                  headerSmall: "cancel_anytime_small_screen",
                  header: "cancel_anytime",
                },
                iconSmall: "icon-cancel",
              },
              tabBody: {
                header: {},
                body: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "cancel_anytime_content",
                  },
                },
              },
              renderType: "cancelAnytime",
            },
            {
              tabHeader: {
                icon: "icon-cross-device-screens-desktop",
                messages: {
                  headerSmall: "watch_anywhere_mobile_optimized",
                  header: "watch_anywhere",
                },
                iconSmall: "icon-cross-device-screens-small",
              },
              tabBody: {
                header: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_anywhere_logo_content",
                  },
                },
                body: {
                  devices: [
                    {
                      image: {
                        alt: "watch_anywhere_tv_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_tv_content_chromecast",
                        headline: "watch_anywhere_tv_content_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_download_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_download_generic",
                        headline: "watch_anywhere_download_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_laptop_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_laptop_content",
                        headline: "watch_anywhere_laptop_content_hd",
                      },
                    },
                  ],
                },
              },
              renderType: "device",
            },
            {
              tabHeader: {
                icon: "icon-price-tag",
                messages: {
                  headerSmall: "watch_pricing_small_screen",
                  header: "watch_pricing",
                },
                iconSmall: "icon-price-tag",
              },
              tabBody: {
                header: {
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_pricing_content",
                  },
                },
                body: {},
              },
              renderType: "price",
            },
          ],
          messages: [
            {
              headerSmall: "learn_more_about_netflix_small_screen",
              header: "learn_more_about_netflix",
            },
          ],
          type: "thisIsNetflix",
          variation: "dark",
          activeTab: "0",
        },
        fuji: {
          cards: [
            "card_hero",
            "card_watchOnTv",
            "card_downloadAndWatch",
            "card_watchOnDevice",
            "card_watchContentSampling",
            "card_kidsValueProp",
            "card_faq",
          ],
          type: "fuji",
        },
        fuji_ctas: {
          messages: {
            ctaButton: "button_get_started",
            ctaButton_never: "button_finishsignup_capitalized",
            ctaButton_former: "button_restart_your_membership_capitalized",
          },
          type: "fuji_ctas",
        },
        card_kidsValueProp: {
          cardType: "animation",
          name: "kidsValueProp",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
          labels: {
            headline: { string: "kids_profile_title" },
            subHeadline: { string: "kids_profile_body" },
          },
          flipped: true,
          kidsValuePropCard: {
            url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
          },
          type: "card_kidsValueProp",
        },
        card_faq: {
          cardType: "faq",
          name: "faq",
          labels: { headline: { string: "faq_headline_fuji" } },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_faq",
        },
        card_downloadAndWatch: {
          cardType: "animation",
          name: "downloadAndWatch",
          videoid: "80057281",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
          animation:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
          labels: {
            headline: { string: "download_headline_fuji" },
            subHeadline: { string: "download_sub_headline_fuji" },
            animationMessages: [{ string: "download_message_status_fuji" }],
          },
          flipped: true,
          downloadVideo: { title: "Stranger\x20Things" },
          type: "card_downloadAndWatch",
        },
        card_watchOnTv: {
          cardType: "animation",
          name: "watchOnTv",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
          labels: {
            headline: { string: "tv_headline_fuji" },
            subHeadline: { string: "tv_sub_headline_fuji" },
          },
          type: "card_watchOnTv",
        },
        card_hero: {
          cardType: "hero",
          name: "hero_fuji",
          image: "vlv",
          labels: {
            headline: { string: "hero_headline_fuji" },
            subHeadline: { string: "hero_sub_headline_fuji" },
          },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_hero",
        },
        card_watchOnDevice: {
          cardType: "animation",
          name: "watchOnDevice",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
          labels: {
            headline: { string: "device_headline_fuji" },
            subHeadline: { string: "device_sub_headline_fuji" },
          },
          type: "card_watchOnDevice",
        },
        card_freePlanAndroid: {
          cardType: "animation",
          name: "freePlanAndroid",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
          labels: {
            headline: { string: "free_plan_mobile_headline_fuji" },
            subHeadline: { string: "free_plan_sub_headline_fuji" },
          },
          ctas: [
            {
              ctaType: "ctaLink",
              ctaStyle: "text_chevron",
              ctaPath:
                "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
              viewName: "nmLanding",
              messages: { default: "free_plan_button_fuji" },
            },
          ],
          type: "card_freePlanAndroid",
        },
        concord: {
          image: {
            numberOfLoops: "continuous",
            imageSet: [
              {
                cdnUrl:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
              },
            ],
            tagMap: {},
          },
          type: "concord",
        },
      },
      type: "Model",
    },
    assessment: {
      data: {
        trialType: "FreeTrial",
        promotion: { organization: { name: "Netflix" } },
        status: {},
        organizationName: "Netflix",
      },
      type: "Model",
    },
    moneyballCookies: {
      data: {
        moneyballPaths: {
          passwordOnly: "\x2Fsignup\x2Fpassword",
          planSelectionWithContext: "\x2Fsignup",
          learnMore: "\x2Fsignup\x2Flearnmore",
          greetFormerMember: "\x2Fsignup\x2Fwelcomeback",
          planSelection: "\x2Fsignup\x2Fplanform",
          registrationWithContext: "\x2Fsignup\x2Fregistration",
          registration: "\x2Fsignup\x2Fregform",
          paymentPicker: "\x2Fsignup\x2FpaymentPicker",
          paymentPickerWithContext: "\x2Fsignup\x2Fpaymentcontext",
          payAndStartMembershipWithContext: "\x2Fsignup\x2Fpayment",
          payAndStartMembershipGiftAsOnlyMop: "\x2Fsignup\x2Fsecondarypayment",
          editPaymentAndStartMembershipModeWithContext:
            "\x2Fsignup\x2Feditpaymentcontext",
          editPaymentAndStartMembershipMode: "\x2Fsignup\x2Feditpaymentchoice",
          editCreditAndStartMembershipMode:
            "\x2Fsignup\x2Feditcreditstartmembership",
          editDebitAndStartMembershipMode:
            "\x2Fsignup\x2Feditdebitstartmembership",
          payAndStartMembershipForcedWithContext: "\x2Fsignup\x2Fpaymentinfo",
          payAndStartMembershipForced: "\x2Fsignup\x2Fpaymentselection",
          applePayOptionMode: "\x2Fsignup\x2Fapplepayoption",
          editapplePayOptionMode: "\x2Fsignup\x2Feditapplepayoption",
          creditOptionMode: "\x2Fsignup\x2Fcreditoption",
          debitOptionMode: "\x2Fsignup\x2Fdebitoption",
          paypalOptionMode: "\x2Fsignup\x2Fpaypaloption",
          giftOptionMode: "\x2Fsignup\x2Fgiftoption",
          editgiftOptionMode: "\x2Fsignup\x2Feditgift",
          idealOptionMode: "\x2Fsignup\x2Fidealoption",
          directDebitOptionMode: "\x2Fsignup\x2Fdirectdebitoption",
          deDebitOptionMode: "\x2Fsignup\x2FdeDebitoption",
          coDebitOptionMode: "\x2Fsignup\x2FcoDebitoption",
          openBankingOptionMode: "\x2Fsignup\x2FopenBanking",
          collectZipCodeForGift: "\x2Fsignup\x2Fcollectzipcode",
          editcreditOptionMode: "\x2Fsignup\x2Feditcredit",
          editcreditOptionWithContextMode: "\x2Fsignup\x2Feditcreditcontext",
          editdebitOptionMode: "\x2Fsignup\x2Feditdebit",
          editdebitOptionWithContextMode: "\x2Fsignup\x2Feditdebitcontext",
          editpaypalOptionMode: "\x2Fsignup\x2Feditpaypal",
          editidealOptionMode: "\x2Fsignup\x2Feditideal",
          editdirectDebitOptionMode: "\x2Fsignup\x2Feditdirectdebit",
          editdeDebitOptionMode: "\x2Fsignup\x2FeditdeDebitOption",
          editcoDebitOptionMode: "\x2Fsignup\x2FeditcoDebitOption",
          editopenBankingOptionMode: "\x2Fsignup\x2FeditopenBanking",
          editdcbOptionMode: "\x2Fsignup\x2Feditdcb",
          editcashPaymentOptionMode: "\x2Fsignup\x2FeditcashPaymentOption",
          editblikOptionMode: "\x2Fsignup\x2FeditblikOption",
          editmobileWalletOptionMode: "\x2Fsignup\x2FeditmobileWalletOption",
          confirmWithContext: "\x2Fsignup\x2Fconfirm",
          confirm: "\x2Fsignup\x2Fconfirmform",
          confirmPreviousPlan: "\x2Fsignup\x2FconfirmPreviousPlan",
          upiOrderConfirm: "\x2Fsignup\x2Fupiorderconfirm",
          upiMandateInfo: "\x2Fsignup\x2Fupimandateinfo",
          upiWaiting: "\x2FsimpleSetup\x2Fupiwaiting",
          editPayment: "\x2Fsignup\x2Feditpayment",
          editPlanSelection: "\x2Fsignup\x2Feditplan",
          changePlan: "\x2Fsignup\x2Fchangeplan",
          changeEmail: "\x2Femail",
          changeEmailWithoutChallenge: "\x2Fchangeemailverified",
          changeEmailBlocked: "\x2Fyouraccount",
          confirmMembershipStarted: "\x2Forderfinal",
          confirmMembershipStartedForSimplicity:
            "\x2FsimpleSetup\x2Forderfinal",
          welcome: "\x2F",
          memberHome: "\x2Fbrowse",
          dvdPlans:
            "https:\x2F\x2Fdvd.netflix.com\x2FSignupDVD\x3Fdsrc\x3DSTRWEB_SIGNUP",
          verifyCardContext: "\x2Fsignup\x2FverifyCardContext",
          verifyCard: "\x2Fsignup\x2FverifyCard",
          verifyLater: "\x2Fsignup\x2FverifyLater",
          verifyCardEditPaymentContext:
            "\x2Fsignup\x2FverifyCardEditPaymentContext",
          verifyCardEditPayment: "\x2Fsignup\x2FverifyCardEditPayment",
          replayRequestMode: "\x2Fsignup\x2Freplay",
          replayRequestEditPaymentMode: "\x2Fsignup\x2FreplayEditPayment",
          changeCardProcessingType: "\x2Fsignup\x2FchangeProcessingType",
          dcbOptionMode: "\x2Fsignup\x2Fdcboption",
          cashPaymentOptionMode: "\x2Fsignup\x2FcashPaymentOption",
          blikOptionMode: "\x2Fsignup\x2FblikOption",
          mobileWalletOptionMode: "\x2Fsignup\x2FmobileWalletOption",
          cashOrderFinal: "\x2FsimpleSetup\x2Fcashorderfinal",
          dcbVerify: "\x2Fsignup\x2Fdcbverify",
          upiPaymentOptionMode: "\x2Fsignup\x2Fupipaymentoption",
          editupiPaymentOptionMode: "\x2Fsignup\x2Feditupipaymentoption",
          login: "\x2Flogin",
          signupBlocked: "\x2FsignupBlocked",
          enterOTPPhoneMode: "\x2Fsignup\x2FotpPhoneEntry",
          enterOTPCodeMode: "\x2Fsignup\x2FotpCodeEntry",
          selectOTPPhoneNumber: "\x2Fsignup\x2FotpPhoneSelect",
          enterOTPCodeWithTou: "\x2Fsignup\x2FotpCodeEntryWithTou",
          redirectRequestLanding: "\x2Fsignup\x2FredirectRequestLanding",
          blikWaiting: "\x2FsimpleSetup\x2Fblikwaiting",
          enterTvLoginRendezvousCode: "\x2Ftv8",
          tvLoginSuccess: "\x2Ftv\x2Fin\x2Fsuccess",
          midProfileTransferLanding:
            "\x2Faccount\x2Fprofile\x2FtransferIncomplete",
          profileTransferContext: "\x2Faccount\x2Fprofile\x2Ftransfercontext",
          profileTransferOwnerEnabling:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferOwnerConsentStatus:
            "\x2Fsettings\x2FprofileTransfer\x2Fenable",
          profileTransferBorrowerConsentStatus:
            "\x2Faccount\x2Fprofile\x2Ftransfer",
          freePlanEligibleSeoPage: "\x2Ffree-plan",
          freePlanIneligibleSeoPage: "\x2Ffree-plan",
          freePlanAppUpgrade: "\x2Fappupgrade",
          mhuCreateAccount: "\x2Fsignup\x2FcreateAccountContext",
        },
        mode: "welcome",
        netflixClientPlatform: "browser",
        flwssn: "b4b1f7ec-0a6d-466d-8910-fc3052b2fa4b",
        adaptiveFields: {
          customizations: [
            {
              tabs: [
                {
                  tabHeader: {
                    icon: "icon-cancel",
                    messages: {
                      headerSmall: "cancel_anytime_small_screen",
                      header: "cancel_anytime",
                    },
                    iconSmall: "icon-cancel",
                  },
                  tabBody: {
                    header: {},
                    body: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "cancel_anytime_content",
                      },
                    },
                  },
                  renderType: "cancelAnytime",
                },
                {
                  tabHeader: {
                    icon: "icon-cross-device-screens-desktop",
                    messages: {
                      headerSmall: "watch_anywhere_mobile_optimized",
                      header: "watch_anywhere",
                    },
                    iconSmall: "icon-cross-device-screens-small",
                  },
                  tabBody: {
                    header: {
                      image: {
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                          },
                        ],
                      },
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_anywhere_logo_content",
                      },
                    },
                    body: {
                      devices: [
                        {
                          image: {
                            alt: "watch_anywhere_tv_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_tv_content_chromecast",
                            headline: "watch_anywhere_tv_content_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_download_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_download_generic",
                            headline: "watch_anywhere_download_hd",
                          },
                        },
                        {
                          image: {
                            alt: "watch_anywhere_laptop_content_hd_img_alt",
                            imageSet: [
                              {
                                cdnUrl:
                                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                              },
                            ],
                          },
                          messages: {
                            subhead: "watch_anywhere_laptop_content",
                            headline: "watch_anywhere_laptop_content_hd",
                          },
                        },
                      ],
                    },
                  },
                  renderType: "device",
                },
                {
                  tabHeader: {
                    icon: "icon-price-tag",
                    messages: {
                      headerSmall: "watch_pricing_small_screen",
                      header: "watch_pricing",
                    },
                    iconSmall: "icon-price-tag",
                  },
                  tabBody: {
                    header: {
                      messages: {
                        ctaButton: "button_join_free_for_a_month",
                        headline: "watch_pricing_content",
                      },
                    },
                    body: {},
                  },
                  renderType: "price",
                },
              ],
              messages: [
                {
                  headerSmall: "learn_more_about_netflix_small_screen",
                  header: "learn_more_about_netflix",
                },
              ],
              type: "thisIsNetflix",
              variation: "dark",
              activeTab: "0",
            },
            {
              cards: [
                "card_hero",
                "card_watchOnTv",
                "card_downloadAndWatch",
                "card_watchOnDevice",
                "card_watchContentSampling",
                "card_kidsValueProp",
                "card_faq",
              ],
              type: "fuji",
            },
            {
              messages: {
                ctaButton: "button_get_started",
                ctaButton_never: "button_finishsignup_capitalized",
                ctaButton_former: "button_restart_your_membership_capitalized",
              },
              type: "fuji_ctas",
            },
            {
              cardType: "animation",
              name: "kidsValueProp",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
              labels: {
                headline: { string: "kids_profile_title" },
                subHeadline: { string: "kids_profile_body" },
              },
              flipped: true,
              kidsValuePropCard: {
                url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
              },
              type: "card_kidsValueProp",
            },
            {
              cardType: "faq",
              name: "faq",
              labels: { headline: { string: "faq_headline_fuji" } },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_faq",
            },
            {
              cardType: "animation",
              name: "downloadAndWatch",
              videoid: "80057281",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
              animation:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
              labels: {
                headline: { string: "download_headline_fuji" },
                subHeadline: { string: "download_sub_headline_fuji" },
                animationMessages: [{ string: "download_message_status_fuji" }],
              },
              flipped: true,
              downloadVideo: { title: "Stranger\x20Things" },
              type: "card_downloadAndWatch",
            },
            {
              cardType: "animation",
              name: "watchOnTv",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
              labels: {
                headline: { string: "tv_headline_fuji" },
                subHeadline: { string: "tv_sub_headline_fuji" },
              },
              type: "card_watchOnTv",
            },
            {
              cardType: "hero",
              name: "hero_fuji",
              image: "vlv",
              labels: {
                headline: { string: "hero_headline_fuji" },
                subHeadline: { string: "hero_sub_headline_fuji" },
              },
              ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
              type: "card_hero",
            },
            {
              cardType: "animation",
              name: "watchOnDevice",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
              video:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
              labels: {
                headline: { string: "device_headline_fuji" },
                subHeadline: { string: "device_sub_headline_fuji" },
              },
              type: "card_watchOnDevice",
            },
            {
              cardType: "animation",
              name: "freePlanAndroid",
              image:
                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
              labels: {
                headline: { string: "free_plan_mobile_headline_fuji" },
                subHeadline: { string: "free_plan_sub_headline_fuji" },
              },
              ctas: [
                {
                  ctaType: "ctaLink",
                  ctaStyle: "text_chevron",
                  ctaPath:
                    "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                  viewName: "nmLanding",
                  messages: { default: "free_plan_button_fuji" },
                },
              ],
              type: "card_freePlanAndroid",
            },
            {
              image: {
                numberOfLoops: "continuous",
                imageSet: [
                  {
                    cdnUrl:
                      "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                  },
                ],
                tagMap: {},
              },
              type: "concord",
            },
          ],
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
            },
          },
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
          },
          debug: "",
          sessionData: "",
        },
        fields: {
          csPhoneNumber: {
            fieldType: "String",
            value: "900\x20822\x20377",
          },
          signedup: { fieldType: "Boolean", value: false },
          hasFreeTrial: { fieldType: "Boolean", value: false },
          startAction: { fieldType: "Action" },
          planChoice: {
            options: [
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: false },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "7.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_1_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_480p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_good"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR7.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "BASIC" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Basic",
                  },
                  offerId: { fieldType: "String", value: "314001031" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Good\x20video\x20quality\x20in\x20SD\x20\x28480p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 1,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "314001031",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "12.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_2_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_1080p",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_better"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR12.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: {
                    fieldType: "Boolean",
                    value: false,
                  },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "STANDARD" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Standard",
                  },
                  offerId: { fieldType: "String", value: "10322" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Great\x20video\x20quality\x20in\x20Full\x20HD\x20\x281080p\x29.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.\x20",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 2,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10322",
              },
              {
                fields: {
                  billingFrequency: {
                    fieldType: "String",
                    value: "Monthly",
                  },
                  canWatchOnMobilePhoneAndTablet: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planHasHd: { fieldType: "Boolean", value: true },
                  planPriceAmount: {
                    fieldType: "String",
                    value: "17.99",
                  },
                  planName: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  planMaxDownloadCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  planTier: {
                    localize: true,
                    fieldType: "String",
                    value: "text_4_stream_name",
                  },
                  offerDurationLength: { fieldType: "String" },
                  resolution: {
                    readOnly: true,
                    fieldType: "String",
                    value: "text_video_quality_4khdr",
                  },
                  videoQuality: {
                    fieldType: "Custom",
                    value: ["text_video_quality_best"],
                  },
                  offerType: {
                    fieldType: "String",
                    value: "NO_DISCOUNT",
                  },
                  incentives: { fieldType: "Custom", value: {} },
                  canWatchOnMobilTabletAndLaptop: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  planPrice: { fieldType: "String", value: "EUR17.99" },
                  offerDurationInMonths: { fieldType: "Boolean" },
                  planHasUltraHd: { fieldType: "Boolean", value: true },
                  planPriceCurrency: {
                    fieldType: "String",
                    value: "EUR",
                  },
                  planType: { fieldType: "String", value: "PREMIUM" },
                  offerName: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  hasAds: { fieldType: "Boolean", value: false },
                  localizedPlanName: {
                    fieldType: "String",
                    value: "Premium",
                  },
                  offerId: { fieldType: "String", value: "10341" },
                  planDescription: {
                    fieldType: "String",
                    value:
                      "Our\x20best\x20video\x20quality\x20in\x20Ultra\x20HD\x20\x284K\x29\x20and\x20HDR.\x20Watch\x20on\x20any\x20phone,\x20tablet,\x20computer\x20or\x20TV.",
                  },
                  supportedDevices: {
                    fieldType: "String",
                    value: "[PHONE,\x20TABLET,\x20COMPUTER,\x20TV]",
                  },
                  planMaxScreenCount: {
                    fieldType: "Numeric",
                    value: 4,
                  },
                  canWatchOnLaptopAndTV: {
                    fieldType: "Boolean",
                    value: true,
                  },
                  canWatchOnTV: { fieldType: "Boolean", value: true },
                },
                value: "10341",
              },
            ],
            fieldType: "Choice",
            value: "10341",
          },
          registered: { fieldType: "Boolean", value: false },
          abAllocations: [],
          isFreeTrial: { fieldType: "Boolean", value: false },
          rows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "monthly_price",
                  stringData: null,
                },
              },
              moneyballField: "planPrice",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_video_quality",
                  stringData: null,
                },
              },
              moneyballField: "videoQuality",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_resolution",
                  stringData: null,
                },
              },
              moneyballField: "resolution",
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "text_watchable_devices",
                  stringData: null,
                },
              },
            },
          ],
          recognizedNeverMember: { fieldType: "Boolean", value: false },
          moneyballSessionUuid: {
            hidden: true,
            readOnly: true,
            fieldType: "String",
            value: "c333ac46-d140-4724-98a1-3b9dc5c37977",
          },
          firstName: { fieldType: "String" },
          saveAction: { withFields: ["email"], fieldType: "Action" },
          anonymous: { fieldType: "Boolean", value: true },
          recognizedFormerMember: {
            fieldType: "Boolean",
            value: false,
          },
          messages: {
            ctaButton: {
              string: "button_continue",
              fieldType: "Message",
            },
            streamDisclaimer: {
              string: "text_disclaimer_people_bsp",
              fieldType: "Message",
            },
            headerSubtitleMessage: {
              string: "text_downgrade_anytime",
              fieldType: "Message",
            },
            textDisclaimer: {
              string: "text_disclaimer_with_resolution",
              fieldType: "Message",
            },
            headerTitleMessage: {
              string: "headline_choose_plan_right_for_you",
              fieldType: "Message",
            },
          },
          headerRows: [
            {
              messages: {
                label: {
                  expect: [],
                  string: "watch_ad_free_prop",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_recommendations_just_for_you",
                  stringData: null,
                },
              },
            },
            {
              messages: {
                label: {
                  expect: [],
                  string: "subheader_change_or_cancel_anytime",
                  stringData: null,
                },
              },
            },
          ],
          signInAction: { fieldType: "Action" },
          email: {
            minLength: 5,
            fieldType: "String",
            validationRegex:
              '\x5E[\x5E\\s\x3C\x3E"\\\\\x3B:]\x2B\x40[a-zA-Z0-9.\\-_]\x2B\\.[a-zA-Z0-9-_]\x2B\x24',
            maxLength: 50,
          },
        },
        flow: "signupSimplicity",
        initialPathname: "\x2F\x3Flocale\x3Den-ES",
        trackingInfo: {
          flow: "signupSimplicity",
          mode: "welcome",
          actions: ["startAction", "saveAction", "signInAction"],
        },
        customization: {
          thisIsNetflix: {
            tabs: [
              {
                tabHeader: {
                  icon: "icon-cancel",
                  messages: {
                    headerSmall: "cancel_anytime_small_screen",
                    header: "cancel_anytime",
                  },
                  iconSmall: "icon-cancel",
                },
                tabBody: {
                  header: {},
                  body: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "cancel_anytime_content",
                    },
                  },
                },
                renderType: "cancelAnytime",
              },
              {
                tabHeader: {
                  icon: "icon-cross-device-screens-desktop",
                  messages: {
                    headerSmall: "watch_anywhere_mobile_optimized",
                    header: "watch_anywhere",
                  },
                  iconSmall: "icon-cross-device-screens-small",
                },
                tabBody: {
                  header: {
                    image: {
                      imageSet: [
                        {
                          cdnUrl:
                            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                        },
                      ],
                    },
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_anywhere_logo_content",
                    },
                  },
                  body: {
                    devices: [
                      {
                        image: {
                          alt: "watch_anywhere_tv_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_tv_content_chromecast",
                          headline: "watch_anywhere_tv_content_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_download_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_download_generic",
                          headline: "watch_anywhere_download_hd",
                        },
                      },
                      {
                        image: {
                          alt: "watch_anywhere_laptop_content_hd_img_alt",
                          imageSet: [
                            {
                              cdnUrl:
                                "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                            },
                          ],
                        },
                        messages: {
                          subhead: "watch_anywhere_laptop_content",
                          headline: "watch_anywhere_laptop_content_hd",
                        },
                      },
                    ],
                  },
                },
                renderType: "device",
              },
              {
                tabHeader: {
                  icon: "icon-price-tag",
                  messages: {
                    headerSmall: "watch_pricing_small_screen",
                    header: "watch_pricing",
                  },
                  iconSmall: "icon-price-tag",
                },
                tabBody: {
                  header: {
                    messages: {
                      ctaButton: "button_join_free_for_a_month",
                      headline: "watch_pricing_content",
                    },
                  },
                  body: {},
                },
                renderType: "price",
              },
            ],
            messages: [
              {
                headerSmall: "learn_more_about_netflix_small_screen",
                header: "learn_more_about_netflix",
              },
            ],
            type: "thisIsNetflix",
            variation: "dark",
            activeTab: "0",
          },
          fuji: {
            cards: [
              "card_hero",
              "card_watchOnTv",
              "card_downloadAndWatch",
              "card_watchOnDevice",
              "card_watchContentSampling",
              "card_kidsValueProp",
              "card_faq",
            ],
            type: "fuji",
          },
          fuji_ctas: {
            messages: {
              ctaButton: "button_get_started",
              ctaButton_never: "button_finishsignup_capitalized",
              ctaButton_former: "button_restart_your_membership_capitalized",
            },
            type: "fuji_ctas",
          },
          card_kidsValueProp: {
            cardType: "animation",
            name: "kidsValueProp",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
            labels: {
              headline: { string: "kids_profile_title" },
              subHeadline: { string: "kids_profile_body" },
            },
            flipped: true,
            kidsValuePropCard: {
              url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
            },
            type: "card_kidsValueProp",
          },
          card_faq: {
            cardType: "faq",
            name: "faq",
            labels: { headline: { string: "faq_headline_fuji" } },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_faq",
          },
          card_downloadAndWatch: {
            cardType: "animation",
            name: "downloadAndWatch",
            videoid: "80057281",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
            animation:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
            labels: {
              headline: { string: "download_headline_fuji" },
              subHeadline: { string: "download_sub_headline_fuji" },
              animationMessages: [{ string: "download_message_status_fuji" }],
            },
            flipped: true,
            downloadVideo: { title: "Stranger\x20Things" },
            type: "card_downloadAndWatch",
          },
          card_watchOnTv: {
            cardType: "animation",
            name: "watchOnTv",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
            labels: {
              headline: { string: "tv_headline_fuji" },
              subHeadline: { string: "tv_sub_headline_fuji" },
            },
            type: "card_watchOnTv",
          },
          card_hero: {
            cardType: "hero",
            name: "hero_fuji",
            image: "vlv",
            labels: {
              headline: { string: "hero_headline_fuji" },
              subHeadline: { string: "hero_sub_headline_fuji" },
            },
            ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
            type: "card_hero",
          },
          card_watchOnDevice: {
            cardType: "animation",
            name: "watchOnDevice",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
            video:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
            labels: {
              headline: { string: "device_headline_fuji" },
              subHeadline: { string: "device_sub_headline_fuji" },
            },
            type: "card_watchOnDevice",
          },
          card_freePlanAndroid: {
            cardType: "animation",
            name: "freePlanAndroid",
            image:
              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
            labels: {
              headline: { string: "free_plan_mobile_headline_fuji" },
              subHeadline: { string: "free_plan_sub_headline_fuji" },
            },
            ctas: [
              {
                ctaType: "ctaLink",
                ctaStyle: "text_chevron",
                ctaPath:
                  "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
                viewName: "nmLanding",
                messages: { default: "free_plan_button_fuji" },
              },
            ],
            type: "card_freePlanAndroid",
          },
          concord: {
            image: {
              numberOfLoops: "continuous",
              imageSet: [
                {
                  cdnUrl:
                    "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
                },
              ],
              tagMap: {},
            },
            type: "concord",
          },
        },
        thisIsNetflix: {
          tabs: [
            {
              tabHeader: {
                icon: "icon-cancel",
                messages: {
                  headerSmall: "cancel_anytime_small_screen",
                  header: "cancel_anytime",
                },
                iconSmall: "icon-cancel",
              },
              tabBody: {
                header: {},
                body: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_cancelanytime_withdevice.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "cancel_anytime_content",
                  },
                },
              },
              renderType: "cancelAnytime",
            },
            {
              tabHeader: {
                icon: "icon-cross-device-screens-desktop",
                messages: {
                  headerSmall: "watch_anywhere_mobile_optimized",
                  header: "watch_anywhere",
                },
                iconSmall: "icon-cross-device-screens-small",
              },
              tabBody: {
                header: {
                  image: {
                    imageSet: [
                      {
                        cdnUrl:
                          "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_NFLX_app_icon.png",
                      },
                    ],
                  },
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_anywhere_logo_content",
                  },
                },
                body: {
                  devices: [
                    {
                      image: {
                        alt: "watch_anywhere_tv_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_TV_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_tv_content_chromecast",
                        headline: "watch_anywhere_tv_content_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_download_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_mobile_tablet_UI_2.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_download_generic",
                        headline: "watch_anywhere_download_hd",
                      },
                    },
                    {
                      image: {
                        alt: "watch_anywhere_laptop_content_hd_img_alt",
                        imageSet: [
                          {
                            cdnUrl:
                              "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fhome\x2FthisIsNetflix\x2Fmodules\x2Fasset_website_UI.png",
                          },
                        ],
                      },
                      messages: {
                        subhead: "watch_anywhere_laptop_content",
                        headline: "watch_anywhere_laptop_content_hd",
                      },
                    },
                  ],
                },
              },
              renderType: "device",
            },
            {
              tabHeader: {
                icon: "icon-price-tag",
                messages: {
                  headerSmall: "watch_pricing_small_screen",
                  header: "watch_pricing",
                },
                iconSmall: "icon-price-tag",
              },
              tabBody: {
                header: {
                  messages: {
                    ctaButton: "button_join_free_for_a_month",
                    headline: "watch_pricing_content",
                  },
                },
                body: {},
              },
              renderType: "price",
            },
          ],
          messages: [
            {
              headerSmall: "learn_more_about_netflix_small_screen",
              header: "learn_more_about_netflix",
            },
          ],
          type: "thisIsNetflix",
          variation: "dark",
          activeTab: "0",
        },
        fuji: {
          cards: [
            "card_hero",
            "card_watchOnTv",
            "card_downloadAndWatch",
            "card_watchOnDevice",
            "card_watchContentSampling",
            "card_kidsValueProp",
            "card_faq",
          ],
          type: "fuji",
        },
        fuji_ctas: {
          messages: {
            ctaButton: "button_get_started",
            ctaButton_never: "button_finishsignup_capitalized",
            ctaButton_former: "button_restart_your_membership_capitalized",
          },
          type: "fuji_ctas",
        },
        card_kidsValueProp: {
          cardType: "animation",
          name: "kidsValueProp",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fcards\x2FkidsValueProp.png",
          labels: {
            headline: { string: "kids_profile_title" },
            subHeadline: { string: "kids_profile_body" },
          },
          flipped: true,
          kidsValuePropCard: {
            url: "https:\x2F\x2Focc-0-2959-360.1.nflxso.net\x2Fdnm\x2Fapi\x2Fv6\x2F19OhWN2dO19C9txTON9tvTFtefw\x2FAAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png\x3Fr\x3D11f",
          },
          type: "card_kidsValueProp",
        },
        card_faq: {
          cardType: "faq",
          name: "faq",
          labels: { headline: { string: "faq_headline_fuji" } },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_faq",
        },
        card_downloadAndWatch: {
          cardType: "animation",
          name: "downloadAndWatch",
          videoid: "80057281",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fmobile-0819.jpg",
          animation:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fboxshot.png",
          labels: {
            headline: { string: "download_headline_fuji" },
            subHeadline: { string: "download_sub_headline_fuji" },
            animationMessages: [{ string: "download_message_status_fuji" }],
          },
          flipped: true,
          downloadVideo: { title: "Stranger\x20Things" },
          type: "card_downloadAndWatch",
        },
        card_watchOnTv: {
          cardType: "animation",
          name: "watchOnTv",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Ftv.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-tv-0819.m4v",
          labels: {
            headline: { string: "tv_headline_fuji" },
            subHeadline: { string: "tv_sub_headline_fuji" },
          },
          type: "card_watchOnTv",
        },
        card_hero: {
          cardType: "hero",
          name: "hero_fuji",
          image: "vlv",
          labels: {
            headline: { string: "hero_headline_fuji" },
            subHeadline: { string: "hero_sub_headline_fuji" },
          },
          ctas: [{ ctaType: "emailForm", ctaStyle: "default_chevron" }],
          type: "card_hero",
        },
        card_watchOnDevice: {
          cardType: "animation",
          name: "watchOnDevice",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fdevice-pile.png",
          video:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2FourStory\x2Ffuji\x2Fdesktop\x2Fvideo-devices.m4v",
          labels: {
            headline: { string: "device_headline_fuji" },
            subHeadline: { string: "device_sub_headline_fuji" },
          },
          type: "card_watchOnDevice",
        },
        card_freePlanAndroid: {
          cardType: "animation",
          name: "freePlanAndroid",
          image:
            "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Facquisition\x2Fab36101\x2Fnmhp\x2Fen.jpg",
          labels: {
            headline: { string: "free_plan_mobile_headline_fuji" },
            subHeadline: { string: "free_plan_sub_headline_fuji" },
          },
          ctas: [
            {
              ctaType: "ctaLink",
              ctaStyle: "text_chevron",
              ctaPath:
                "https:\x2F\x2Fplay.google.com\x2Fstore\x2Fapps\x2Fdetails\x3Fid\x3Dcom.netflix.mediaclient",
              viewName: "nmLanding",
              messages: { default: "free_plan_button_fuji" },
            },
          ],
          type: "card_freePlanAndroid",
        },
        concord: {
          image: {
            numberOfLoops: "continuous",
            imageSet: [
              {
                cdnUrl:
                  "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui\x2Fvlv3\x2Fac824598-245b-4828-b14f-5cff9074f4d0\x2F06e99fab-58d6-4e82-bca5-c12826356f6d\x2FES-en-20220822-popsignuptwoweeks-perspective_alpha_website_{size}.jpg",
              },
            ],
            tagMap: {},
          },
          type: "concord",
        },
      },
      type: "Model",
    },
    nonmemberTruths: { data: {}, type: "Model" },
    akiraBrowserCheck: {
      data: {
        capable: true,
        supportsHTML5withDRM: "yes",
        supportsHTML5: "maybe",
        supportsSL: "no",
        isMobile: false,
      },
      type: "Model",
    },
    truths: {
      data: {
        isAdsPlanAvailable: false,
        shouldShowDoNotSellInfoLink: null,
        isIELt12: false,
        isIELt10: false,
        isIELt9: false,
        isIELt8: false,
        isIpadSafariLt8: false,
        isSafariLt8: false,
        isSafariGt5: false,
        isChromeLt47: false,
        isAndroidBrowserLt4: false,
        isIELt9AndIpadLt8: false,
        missingFullVWSupport: false,
        isBrowserFirefox: true,
        isBrowserEdge: false,
        isBrowserIE: false,
        isBrowserChrome: false,
        isBrowserSafari: false,
        isBrowserOpera: false,
        focusVisibleMemberEnabled: true,
        isAutomation: false,
        isBaselineCluster: false,
        takesProdTraffic: true,
        masquerading: false,
        inApp: false,
        showCookieDisclosure: true,
        showCompatibilityDisclosure: false,
        showDisclosures: true,
        windowOnErrorLoggingEnabled: true,
        consolLoggingEnabled: true,
        extendedDiacriticsLanguage: false,
        isGreekAndSafari: false,
        cursiveScript: false,
        performanceMeasurementsEnabled: false,
        devCommandLineEnabled: false,
        showDevInfoConsole: false,
        shouldAutofillSignup: false,
        logBrowserPerformance: false,
        routeTrafficThroughFTL: false,
        routeAPIRequestsThroughFTL: false,
        enableNqMetadataEndpoint: false,
        routeDocRequestsThroughFTL: false,
        useServiceWorker: false,
        serviceWorkerInvestigation: false,
        serviceWorkerEmptyHandlers: false,
        enableLottieAnimations: false,
        proxyRequestsThroughMemberAPI: false,
        logDetailedReactErrors: true,
        isOpenInPromptEligible: false,
        showOpenInAppPrompt: false,
        isInternal: false,
        logCriticalResourceTiming: null,
        notAkiraPage: true,
        isBrowseAllowed: false,
        isAdsPlan: false,
        canActivateProfileTransfers: false,
        canManageAddOns: true,
        isJqueryRequired: true,
        isFakiraOrAccountPage: true,
        showRatings: true,
        lazyLoadLolomoDOM: true,
        currentProfileIsKids: false,
        showKoreanMaturityRatings: false,
        showCommonSense: false,
        showBroadcaster: false,
        descriptiveTranscriptEnabled: true,
        showKidsLink: false,
        inAppNotificationsPollingEnabled: true,
        profileOnrampEnabled: true,
        isCl2LoggingEnabledForDiscoveryPlayback: true,
        isCl2TrackingInfoMigrated: true,
        renoEnabled: true,
        websocketsEnabled: true,
        dynamicMessagesEnabled: true,
        identifierCheckEnabled: true,
        akiraTtlEnabled: true,
        localizedSearchArtwork: true,
        xhrHooksEnabled: true,
        profileMisMatchDetectionEnabled: true,
        accountLevelPinCountries: ["ID", "SG", "TR"],
        forceStaticBillboards: false,
        volatileBillboardsEnabled: true,
        enablePageTransitions: true,
        evidenceBobHoverDelay4Seconds: false,
        evidenceBobHoverDelay15Seconds: false,
        enablePushNotifications: false,
        latestTabFirstInNav: false,
        enableSafariTouchRedirect: false,
        isTop10Supported: true,
        isTop10KidsSupported: false,
        isCreatorHomeEnabled: true,
        showHeaderNotifications: true,
        teenProfileOption: false,
        useTeenProfileOptionalCopy: false,
        useTeenProfileRatingInTooltip: false,
        useTeenProfilePreteenOption: false,
        teenProfileRadioOption: false,
        noUUIDCaching: false,
        showAdultSwitchButton: false,
        showSwitchButton: false,
        usePreviewModal: true,
        serveOldJAWBOBCode: false,
        allowMyListAddFromMLT: true,
        hasSmallerButtons: true,
        canSeeAllEpisodes: true,
        openDPFromMLT: false,
        bobOnMLT: false,
        hideMLTSynopsis: false,
        redesignFollowup1Holdback: false,
        redesignFollowup1HoldbackControl: false,
        enablePersoInfoDensityToggle: false,
        removeInfoDensityInUI: false,
        cpuMetricsEnabled: false,
        runMultipleCpuMetrics: false,
        runShorterBenchmark: false,
        delayBenchmark: false,
        highlightContinueWatchingRow: false,
        highlightContinueWatchingRowWithRedStreams: false,
        disableCollectionsUma: false,
        enableCreatorHome: false,
        contextAwareImages: true,
        newAndPopularLabel: true,
        enablePreviewToggle: true,
        showPreviewsToggleInHeader: false,
        showMuteToggleInHeader: false,
        showPreviewsToggleOnVideoMerch: false,
        defaultPreviewsToggleToOff: false,
        enableKidsTransitionAnimation: false,
        enableProfileGateTransitionSound: false,
        lowerProfileGateTransitionVolume: false,
        enableProfileGateTransitionAnimation: false,
        enableProfileTransition: false,
        enableMultiLanguageCatalog: false,
        logPrefetchRowsTTLAndError: true,
        infoDensityToggleHeavyMetadata: false,
        infoDensityToggleReducedRowCount: false,
        infoDensityToggleInlineMiniModal: false,
        infoDensityToggleDisableAwareness: false,
        enableInfoDensityToggle: false,
        enableLolomoPrefetchSixRows: false,
        enableLolomoRowsPrefetchRetry: false,
        enableLolomoRowsFetchOnScroll: false,
        enableOptimisticRendering: false,
        logDeviceAndBrowserPreference: true,
        addMissingGalleryLinks: true,
        enablePageTitles: true,
        enableGalleryModal: true,
        moreVisibleRowHeaderLink: true,
        enableAroGenreModal: true,
        enableExpandableAroGenreModal: true,
        subtitlePrefsByDevice: false,
        accessibilityNavEnabled: false,
        enableAvifImageFormat: false,
        deviceStatsLoggingEnabled: false,
        enablePlayPrediction: true,
        enableBillboardPrepare: true,
        enableBillboardTitlePrepare: true,
        enableDetailsTitlePrepare: true,
        showTudumPromo: false,
        thumbsWayUpEnabled: true,
        pollRenoOnReconnectOnly: false,
        disableRenoPolling: false,
        showFirstTimeHomepageTutorial: false,
        showOtherPlatformUpsellEducation: false,
        useNumericStepIndicator: false,
        enableGraphqlClient: false,
        hasUmaMessage: false,
        hasUmaSurveyMessage: null,
        hasUmaMessageBoxMessage: null,
        hasUmaPaymentMessageBoxMessage: null,
        hasUmaDefaultMessageBoxMessage: null,
        hasUmaModalMessage: null,
        hasUmaPaymentModalMessage: null,
        hasUmaDefaultModalMessage: null,
        hasUmaSurveyModalMessage: null,
        requireAttemptsToSkipVerifyPhoneNumberUMA: false,
        hasAB36101UMA: false,
        enableInterstitialDGS: false,
        ANONYMOUS: true,
        CURRENT_MEMBER: false,
        FORMER_MEMBER: false,
        DVD_ONLY_MEMBER: false,
        NEVER_MEMBER: false,
        isPlaybackAllowed: false,
        mdx2Enabled: false,
        mdxEnabledWithTestAccount: null,
        maybeSupportsSilverlight: false,
        requiresNFPlayer: true,
        fourKDemoEnabled: false,
        playbackAdvisoriesEnabled: true,
        skipCreditsEnabled: true,
        limitedSVGSupport: false,
        playerUIMilestonesEnabled: false,
        seamlessPlaybackEnabledForUI: true,
        isPlayerPerformanceReportingEnabled: true,
        reportAProblemControlEnabled: true,
        canPassManifestToCadmiumPrepare: true,
        watchingInteractiveTitle: false,
        interactiveDebugEnabled: false,
        cropContentLetterboxing: true,
        preferUnletterboxedContent: true,
        callVideoPlayerEngageMethod: true,
        interactiveSeekControlsDisabled: false,
        interactiveSkipTutorialDisabled: false,
        horizontalEpisodeSelectorEnabled: false,
        enableProductizedPlayerUI: false,
        showUpsellLegalDisclaimer: false,
        showSLSToolTip: false,
        useSLSOnText: false,
        playbackSpeedEnabled: true,
        linearFeed: false,
        reportAProblemEnabled: true,
        reportAProblemShowSensitivityCheckbox: true,
        disableGlobalKeyboardScrub: false,
        alwaysLoadVideoMetadata: false,
        enableSkipIntroPlaygraph: false,
        enablePlaybackInterstitialRequest: false,
        allowADTitleListCreation: false,
        isIosInAppSourced: false,
        redirectOnIosInAppSourced: false,
        isAppStoreSignup: false,
        showReferralLegacyModal: false,
        isSimpleDroid: false,
        isGiftCardFlow: false,
        isGiftCardMemberMode: false,
        isSignupSimplicity: true,
        isMemberSimplicity: false,
        isOnboardingSimplicity: false,
        isPartnerConnectSimplicity: false,
        isBeneficiaryGraduate: false,
        isPartnerBilled: false,
        isTvQrPiSignup: false,
        blockAndroidIntent: false,
        mockPaymentRequestEnabled: null,
        mockItunesPaymentEnabled: null,
        isInApp: false,
        isIOSInApp: false,
        netflixClientPlatform: "browser",
        isReferralSignupFlow: false,
        showPartnerHeader: false,
        isValidOriginalsLinkCountry: false,
        isNonMemberManualFontDetectionNeeded: false,
        isLegacyFlow: false,
        isLanguageSelectorInHeader: true,
        require_additional_cookie_consent: true,
        includeOneTrustScript: true,
        shouldIncludeLanguageDisclaimer: false,
        isAB36101Enabled: true,
        isBaoBundleUiEnabled: true,
        isClipsDeepLink: false,
        isExtrasDeepLink: false,
        isSupplementalDeepLink: false,
        isNmContentPage: false,
        isNmTitlePage: false,
        logHighCardinalityTitlePageMetrics: null,
        isNmCollectionsPage: false,
        showNmCollectionsPages: true,
        hideExternalLogin: false,
        clearMslDataOnLogout: true,
        isVideoMerchEnabled: true,
        hasVideoMerchInBob: true,
        hasVideoMerchInJaw: true,
        userDisabledVideoMerchInSettings: false,
        isArabic: false,
        isThai: false,
        useManualFontDetection: false,
        externalDataRequestEnabled: true,
        externalDataRequestEnabledForDvdMembers: true,
        mopVerificationForChangeEmailEnabled: true,
        isModernBrowser: true,
        fromIOSApp: false,
        enableDnaSubtitlePrefs: false,
        shouldAutoSubmitCashPaymentForm: false,
        isProfileTransferPage: false,
        shouldAllowDeferredUpgrades: false,
      },
    },
    services: {
      data: {
        api: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "api",
          path: ["api", "shakti"],
          apiRoot: "api",
        },
        buildIdentifier: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "buildIdentifier",
          path: ["\x2FbuildIdentifier"],
        },
        dvd: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "dvd",
          path: ["\x2FDVDApiProxy"],
        },
        memberapi: {
          protocol: "https",
          hostname: "www.netflix.com",
          path: ["\x2Fnq\x2Fwebsite\x2Fmemberapi\x2Fvdb1a9ffc"],
          isNodequark: true,
        },
      },
      type: "Model",
    },
    consolidatedLogging: {
      data: {
        loggingConstants: {
          pageName: "nmLanding",
          locale: "en-ES",
          sessionLength: 30,
          uiMode: "nonmember",
          ownerToken: null,
          "accept-language": "en-US,en\x3Bq\x3D0.5",
        },
        enabled: true,
      },
      type: "Model",
    },
    evidon: {
      data: {
        pid: "3762",
        ocid: "2098",
        evidonUrl:
          "https:\x2F\x2Fc.betrad.com\x2Fnetflix\x2Fcustomlink.html\x3Flocale\x3Den-ES",
      },
      type: "Model",
    },
    actionData: {
      data: { pageName: "fuji", useExpandedFooter: true },
      type: "Model",
    },
    iosHeadTags: {
      data: [
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        { name: "format-detection", content: "telephone\x3Dno" },
        {
          name: "apple-touch-icon",
          content:
            "https:\x2F\x2Fassets.nflxext.com\x2Fen_us\x2Flayout\x2Fecweb\x2Fnetflix-app-icon_152.jpg",
        },
      ],
      type: "Model",
    },
    ctaHyperlink: {
      data: {
        ctaParams: { locale: "en-ES" },
        ctaPath: "\x2Fsignup",
        fullURL: "\x2Fsignup\x3Flocale\x3Den-ES",
        allCTAPaths: {},
      },
      type: "Model",
    },
    customizationModel: {
      data: {
        0: {
          headerSmall: "learn_more_about_netflix_small_screen",
          header: "learn_more_about_netflix",
        },
        ctaButton: "button_get_started",
        streamDisclaimer: {
          string: "text_disclaimer_people_bsp",
          fieldType: "Message",
        },
        headerSubtitleMessage: {
          string: "text_downgrade_anytime",
          fieldType: "Message",
        },
        textDisclaimer: {
          string: "text_disclaimer_with_resolution",
          fieldType: "Message",
        },
        headerTitleMessage: {
          string: "headline_choose_plan_right_for_you",
          fieldType: "Message",
        },
        ctaButton_never: "button_finishsignup_capitalized",
        ctaButton_former: "button_restart_your_membership_capitalized",
      },
      type: "Model",
    },
    layoutClassesModel: {
      data: { dark: true, "is-mobile-optimized": false, argo: false },
      type: "Model",
    },
    landingpagePinger: { data: {}, type: "Model" },
    adtech: {
      data: {
        iframeLocation:
          "https:\x2F\x2Fae.nflximg.net\x2Fmonet\x2Fscripts\x2Fadtech_iframe_target_05.html",
        doFlushBuffer: true,
        iframeData: {
          membership_status: "ANONYMOUS",
          country: "ES",
          region_code: "T",
        },
      },
      type: "Model",
    },
    fastProps: {
      data: {
        NETFLIX_APP: "nq_website_nonmember",
        "shakti.webVitals.enabledApps": ["nq_website_core", "nq_website_pulse"],
        "netflix.window.onerror.max.count": 10,
        "shakti.consolidated.logging.enabled": true,
        "shakti.consolidatedLogging.source": "www",
        "shakti.consolidatedLogging.sendRetries": 5,
        "shakti.consolidatedLogging.sendBackoffMs": 1000,
        "shakti.consolidatedLogging.batchIntervalMs": 5000,
        "shakti.consolidatedLogging.batchSize": 20,
        "shakti.consolidatedLogging.endpointBasePath": "\x2Fpersonalization",
        "shakti.consolidatedLogging.userInputTime": 1000,
        "shakti.clear.cookies.on.403.client": true,
        "web.ui.missing_strings.enabled": true,
        "shakti.fallback.esn.enabled": false,
        "shakti.fallback.esn.value": "WWW-BROWSE-",
        "shakti.cookies.autoExtendCookiesMaxAge": 7776000,
        "netflix.ui.cookie.disclosure.privacy.url":
          "https:\x2F\x2Fhelp.netflix.com\x2Fen\x2Flegal\x2Fprivacy\x23cookies",
        "ui.iframeCommunicator.maxLifetimeMs": 10000,
        "ui.iframeCommunicator.isActive": true,
        "netflix.ui.update.client.disclosure.help.url":
          "https:\x2F\x2Fhelp.netflix.com\x2Fnode\x2F30081",
        "web.ui.fonts.nkufi.timeout.ms": 5000,
        "web.ui.fonts.graphik.timeout.ms": 5000,
        "web.ui.fonts.netflix.sans.timeout.ms": 5000,
        "netflix.ui.ads.sellInfo.footerLink.url":
          "https:\x2F\x2Fwww.netflix.com\x2Fdnsspi",
        "netflix.ui.signup.luhncheck.disabled": null,
      },
    },
    renderTruths: { data: {} },
    shakespeareStrings: {
      data: {
        "core\x2Fnfse-v2": {},
        "signup\x2Fweb-kbrickman-fil-test": {},
        "signup\x2Fcommon": {},
        "gift\x2Flanding": {},
        "onboarding\x2FonboardingTweaks2021": {},
        "common\x2FfooterResponsive": {},
        "common\x2FcookieDisclosure": {},
        "common\x2FclientSupportCategories": {},
        "signup\x2FpartnerVanityHeader": {},
        "_a\x2Fcomponents": {},
        "signup\x2Fads": {},
        "signup\x2FourStory": {},
        "signup\x2Fhome_customized": {},
        "_a\x2Fsignup_simplicity": {},
        "signup\x2Fsimplicity\x2Fcommon": {},
        "gift\x2FserverErrors": {},
        "signup\x2Fsimplicity\x2Fpayment": {},
        "signup\x2Fsimplicity\x2FserverErrors": {},
        "signup\x2ForderConfirm": {},
        "signup\x2Fsimplicity\x2FtvQrPiSignup": {},
        "signup\x2Fpricetiering": {},
        "signup\x2Fsimplicity\x2FformFields": {},
        "signup\x2Fsimplicity\x2Fregistration": {},
        "signup\x2Fsimplicity\x2FobtainConsent": {},
        "addon\x2Fowner\x2FbeneficiaryEmailSetup": {},
        "addon\x2Fbeneficiary\x2FprofileCreation": {},
        "addon\x2Fbeneficiary\x2FpasswordCreation": {},
        "gift\x2Fcommon": {},
        "gift\x2Ferrors": {},
        "onboarding\x2FdeviceSurvey": {},
        "onboarding\x2FaddProfiles": {},
        "account\x2FPhoneNumber": {},
      },
      type: "api",
    },
    i18nStrings: {
      data: {
        "core\x2Fnfse-v2": {
          "nfse.header": "Something\x20went\x20wrong",
          "nfse.body":
            "Sorry,\x20we\x27re\x20having\x20trouble\x20with\x20your\x20request.\x20You\x27ll\x20find\x20lots\x20to\x20explore\x20on\x20the\x20home\x20page.",
          ctaButtonHome: "Netflix\x20Home",
          ctaButtonHelp: "Learn\x20More",
          errorCode:
            "Error\x20Code\x20\x3Cstrong\x3E{errorCode}\x3C\x2Fstrong\x3E",
          imageSource: "FROM\x20\x3Cstrong\x3E{title}\x3C\x2Fstrong\x3E",
          imageSourceNailedIt: "NAILED\x20IT\x21",
        },
        "signup\x2Fweb-kbrickman-fil-test": { "test-string": "test" },
        "signup\x2Fcommon": {
          button_sign_in: "Sign\x20In",
          button_log_in_capitalized: "Log\x20In",
          header_have_an_account: "Have\x20an\x20account\x3F",
          header_signout: "Sign\x20Out",
          button_log_in_uppercase: "LOG\x20IN",
          button_sign_in_uppercase: "SIGN\x20IN",
          header_back_to_account: "Back\x20to\x20Account",
          header_rejoin_skip: "Skip",
          header_cancel_profile_transfer: "Finish\x20Later",
          footer_with_country: "Netflix\x20{country}",
          metaDescriptionSignupEntryPoint:
            "Choose\x20a\x20Netflix\x20subscription\x20plan\x20that\x27s\x20right\x20for\x20you.\x20Downgrade,\x20upgrade\x20or\x20cancel\x20any\x20time.",
          metaDescription:
            "Watch\x20Netflix\x20movies\x20\x26\x20TV\x20shows\x20online\x20or\x20stream\x20right\x20to\x20your\x20smart\x20TV,\x20game\x20console,\x20PC,\x20Mac,\x20mobile,\x20tablet\x20and\x20more.",
          metaKeywords:
            "watch\x20movies,\x20movies\x20online,\x20watch\x20TV,\x20TV\x20online,\x20TV\x20shows\x20online,\x20watch\x20TV\x20shows,\x20stream\x20movies,\x20stream\x20tv,\x20instant\x20streaming,\x20watch\x20online,\x20movies,\x20watch\x20movies\x20{country},\x20watch\x20TV\x20online,\x20no\x20download,\x20full\x20length\x20movies",
          metaDescriptionTitleSynopsis:
            "{synopsis}\x20{title}\x20on\x20Netflix.",
          metaTitleTitlePageWatch: "{title}\x20\x7C\x20Watch\x20on\x20Netflix",
          metaTitleTitlePage: "Watch\x20{title}\x20Online\x20\x7C\x20Netflix",
          metaTitleTitlePageNoIndex: "{title}\x20\x7C\x20Netflix",
          metaTitleSignupEntryPoint:
            "Netflix\x20Plans,\x20Pricing\x20\x26\x20Signup",
          metaTitle:
            "Netflix\x20-\x20Watch\x20TV\x20Shows\x20Online,\x20Watch\x20Movies\x20Online",
          metaTitleTVSignup:
            "Netflix\x20-\x20sign\x20up\x20with\x20a\x20TV\x20code.",
          metaTitleWithCountry:
            "Netflix\x20{country}\x20-\x20Watch\x20TV\x20Shows\x20Online,\x20Watch\x20Movies\x20Online",
        },
        "gift\x2Flanding": {
          "actions.redeem": "Redeem\x20your\x20gift\x20card",
        },
        "onboarding\x2FonboardingTweaks2021": {
          "onboarding.link.help": "Help",
        },
        "common\x2FfooterResponsive": {
          "footer.responsive.language_picker.label": "Select\x20Language",
          "footer.responsive.questions":
            "Questions\x3F\x20Call\x20{SUPPORT_NUMBER}",
          "footer.responsive.questionsUrl": "Questions\x3F\x20Contact\x20us.",
          "footer.responsive.commercial.jp":
            "Act\x20on\x20Specified\x20Commercial\x20Transactions",
          "footer.responsive.link.faq": "FAQ",
          "footer.responsive.link.help": "Help\x20Center",
          "footer.responsive.link.account": "Account",
          "footer.responsive.link.gift.card": "Gift\x20Cards",
          "footer.responsive.link.media.center": "Media\x20Center",
          "footer.responsive.link.audio.and.subtitles":
            "Audio\x20and\x20Subtitles",
          "footer.responsive.link.relations": "Investor\x20Relations",
          "footer.responsive.link.jobs": "Jobs",
          "footer.responsive.link.blog": "Blog",
          "footer.responsive.link.freeTrial":
            "Free\x20Trial\x20Offer\x20Details",
          "footer.responsive.link.gift": "Gift\x20Cards",
          "footer.responsive.link.gift.redeem": "Redeem\x20Gift\x20Cards",
          "footer.responsive.link.gift.buy": "Buy\x20Gift\x20Cards",
          "footer.responsive.link.waysToWatch": "Ways\x20to\x20Watch",
          "footer.responsive.link.terms": "Terms\x20of\x20Use",
          "footer.responsive.link.terms_updated":
            '\x3Cspan\x20class\x3D"terms-updated"\x3E\x2AUpdated\x2A\x3C\x2Fspan\x3E\x20Terms\x20of\x20Use',
          "footer.responsive.link.giftTerms": "Gift\x20Card\x20Terms",
          "footer.responsive.link.privacy": "Privacy\x20Statement",
          "footer.responsive.link.privacy_updated":
            '\x3Cspan\x20class\x3D"privacy-updated"\x3E\x2AUpdated\x2A\x3C\x2Fspan\x3E\x20Privacy\x20Statement',
          "footer.responsive.link.cookies_separate_link":
            "Cookie\x20Preferences",
          "footer.responsive.link.privacy_separate_link": "Privacy",
          "footer.responsive.link.cookies": "Cookies\x20\x26amp\x3B\x20Ads",
          "footer.responsive.link.gift_card_terms": "Gift\x20Card\x20Terms",
          "footer.responsive.link.contact_details": "Contact\x20Details",
          "footer.responsive.link.originals": "Originals",
          "footer.responsive.link.speed_test": "Speed\x20Test",
          "footer.responsive.link.corporate_information":
            "Corporate\x20Information",
          "footer.responsive.link.corporate_information_impressum": "Impressum",
          "footer.responsive.link.contact_us": "Contact\x20Us",
          "footer.responsive.link.legal.notices": "Legal\x20Notices",
          "footer.responsive.link.only_on_netflix": "Only\x20on\x20Netflix",
          "footer.responsive.link.legal.guarantee": "Legal\x20Guarantee",
          "footer.responsive.disclaimer.kr.update2019.csphone":
            "Netflix\x20Services\x20Korea\x20Ltd.\x20E-Commerce\x20Registration\x20Number:\x20Je\x202018-Seoul\x20Jong-ro-0426\x20Ho.\x20Phone:\x20{SUPPORT_NUMBER}",
          "footer.responsive.disclaimer.kr.rep_email": "Email:\x20{REP_EMAIL}",
          "footer.responsive.disclaimer.kr.rep_name":
            "Representative:\x20Reginald\x20Shawn\x20Thompson",
          "footer.responsive.disclaimer.kr.address":
            "Address:\x2020F,\x20Tower\x20A,\x20Centropolis\x20Building\x2026,\x20Ujeongguk-ro,\x20Jongno-gu,\x20Seoul,\x2003161\x20Republic\x20of\x20Korea",
          "footer.responsive.disclaimer.kr.business_registration":
            "Business\x20registration\x20number:\x20165-87-00119",
          "footer.responsive.disclaimer.kr.hosted_by":
            "Hosted\x20by:\x20Amazon\x20Web\x20Services\x20Inc.",
          "footer.responsive.disclaimer.kr.link_kftc.v3":
            '\x3Ca\x20href\x3D"http:\x2F\x2Fwww.ftc.go.kr\x2FbizCommPop.do\x3Fwrkr_no\x3D1658700119"\x3EKFTC\x20website\x3C\x2Fa\x3E',
          "footer.responsive.service.code": "Service\x20Code",
          "footer.responsive.service.code.label": "Service\x20Code:\x20",
        },
        "common\x2FcookieDisclosure": {
          "button.accept": "Accept",
          "button.reject": "Reject",
          "button.change.cookie.preferences.202105":
            "Personalise\x20my\x20choices",
          "disclosure.long.row":
            'Netflix\x20uses\x20cookies\x20for\x20personalization,\x20to\x20customize\x20its\x20online\x20advertisements,\x20and\x20for\x20other\x20purposes.\x20\x3Ca\x20href\x3D"\x2Fcookies"\x3ELearn\x20more\x3C\x2Fa\x3E\x20or\x20\x3Cspan\x20data-id\x3D"onetrust"\x3Echange\x20your\x20cookie\x20preferences\x3C\x2Fspan\x3E.\x20Netflix\x20supports\x20the\x20Digital\x20Advertising\x20Alliance\x20principles.\x20By\x20interacting\x20with\x20this\x20site,\x20you\x20agree\x20to\x20our\x20use\x20of\x20cookies.',
          "disclosure.short.row":
            'We\x20use\x20cookies\x20\x28\x3Ca\x20href\x3D"\x2Fcookies"\x3Ewhy\x3F\x3C\x2Fa\x3E\x29.\x20You\x20can\x20change\x20\x3Cspan\x20data-id\x3D"onetrust"\x3Ecookie\x20preferences\x3C\x2Fspan\x3E\x3B\x20continued\x20site\x20use\x20signifies\x20consent.',
          "disclosure.long.eu.202105":
            'Netflix\x20and\x20\x3Cspan\x20data-id\x3D"onetrust"\x3Ethird\x20parties\x3C\x2Fspan\x3E\x20use\x20\x3Ca\x20href\x3D"{COOKIE_PRIVACY}"\x3Ecookies\x20and\x20similar\x20technologies\x3C\x2Fa\x3E\x20on\x20this\x20website\x20to\x20collect\x20information\x20about\x20your\x20browsing\x20activities\x20which\x20we\x20use\x20to\x20analyse\x20your\x20use\x20of\x20the\x20website,\x20to\x20personalise\x20our\x20services\x20and\x20to\x20customise\x20our\x20online\x20advertisements.\x20When\x20your\x20consent\x20is\x20required,\x20you\x20can\x20accept,\x20refuse\x20or\x20personalise\x20your\x20choices.\x20You\x20can\x20also\x20change\x20your\x20preferences\x20at\x20any\x20time\x20by\x20clicking\x20on\x20\u201CCookie\x20Preferences\u201D\x20in\x20the\x20footer\x20of\x20each\x20page.\x20Netflix\x20supports\x20the\x20Digital\x20Advertising\x20Alliance\x20Principles.\x20\x3Cspan\x20data-id\x3D"onetrust"\x3ELearn\x20more\x20about\x20our\x20use\x20of\x20cookies\x20and\x20information.\x3C\x2Fspan\x3E',
          "disclosure.short.eu.202105":
            'Netflix\x20and\x20third\x20parties\x20use\x20cookies\x20\x3Cspan\x20data-id\x3D"onetrust"\x3E\x28why\x3F\x29\x3C\x2Fspan\x3E.\x20You\x20can\x20change\x20\x3Cspan\x20data-id\x3D"onetrust"\x3Eyour\x20cookie\x20preferences\x3C\x2Fspan\x3E.',
          "disclosure.long.ru":
            'We\x20use\x20\x3Ca\x20href\x3D"{COOKIE_PRIVACY}"\x3Ecookies\x20and\x20similar\x20technologies\x3C\x2Fa\x3E\x20on\x20this\x20website\x20to\x20collect\x20information\x20about\x20your\x20browsing\x20activities\x20which\x20we\x20use\x20to\x20analyse\x20your\x20use\x20of\x20the\x20website,\x20to\x20personalize\x20our\x20services\x20and\x20to\x20customise\x20our\x20online\x20advertisements.\x20\x3Cspan\x20data-id\x3D"onetrust"\x3ELearn\x20more\x20about\x20our\x20use\x20of\x20cookies\x20and\x20your\x20information\x3C\x2Fspan\x3E.\x20By\x20interacting\x20with\x20this\x20site,\x20you\x20agree\x20to\x20our\x20use\x20of\x20cookies.',
          "disclosure.short.ru":
            'We\x20use\x20cookies\x20\x28\x3Ca\x20href\x3D"{COOKIE_PRIVACY}"\x3Ewhy\x3F\x3C\x2Fa\x3E\x29.\x20You\x20can\x20change\x20\x3Cspan\x20data-id\x3D"onetrust"\x3Ecookie\x20preferences\x3C\x2Fspan\x3E\x3B\x20by\x20clicking\x20accept,\x20you\x20accept\x20all\x20cookies.',
          "button.close": "Close",
        },
        "common\x2FclientSupportCategories": {
          "disclosure.umbrella.msg":
            'The\x20Netflix\x20experience\x20works\x20best\x20in\x20a\x20newer\x20version\x20of\x20your\x20browser.\x20Learn\x20more\x20about\x20updating\x20your\x20browser\x20\x3Ca\x20href\x3D"{HELP_LINK}"\x3Ehere\x3C\x2Fa\x3E.',
        },
        "signup\x2FpartnerVanityHeader": {
          bpi: "Enjoy\x20up\x20to\x206\x20Months\x20Netflix\x20on\x20Us",
          brctv:
            "Watch\x20on\x20your\x20Blue\x20Ridge\x20TV\x20Set\x20Top\x20Box",
          cableone: "Watch\x20on\x20your\x20Cable\x20One\x20Set\x20Top\x20Box",
          chromecast: "Watch\x20on\x20your\x20Chromecast\x20device",
          cogeco: "Watch\x20on\x20your\x20Cogeco\x20Set\x20Top\x20Box",
          comhem: "Watch\x20on\x20your\x20Comhem\x20Set\x20Top\x20Box",
          dish: "Watch\x20on\x20your\x20DISH\x20Set\x20Top\x20Box",
          dlive: "Watch\x20on\x20your\x20D\x27Live\x20Set\x20Top\x20Box",
          dodofetchtv: "Watch\x20on\x20your\x20Dodo\x20Set\x20Top\x20Box",
          fetchtv: "Watch\x20on\x20your\x20Fetch\x20TV\x20Set\x20Top\x20Box",
          fibe: "Watch\x20on\x20your\x20Bell\x20Fibe\x20TV\x20Set\x20Top\x20Box",
          fibreop: "Bell\x20Aliant\x20FibreOP\x20TV\x20Set\x20Top\x20Box",
          frontiercommunications: "Powered\x20by\x20Frontier\u00AE\x20Internet",
          gci: "Watch\x20on\x20your\x20GCI\x20TV\x20Set\x20Top\x20Box",
          grande: "Watch\x20on\x20your\x20Grande\x20Set\x20Top\x20Box",
          hisense: "Watch\x20on\x20your\x20Hisense\x20Smart\x20TV",
          hdfc: "3\x20months\x20gift\x20of\x20Netflix",
          krungsri:
            "Enjoy\x20up\x20to\x20extra\x202\x20months\x20of\x20Netflix\x20on\x20us",
          lg: "Watch\x20on\x20your\x20LG\x20Smart\x20TV",
          iinet: "Watch\x20on\x20your\x20iiNet\x20Set\x20Top\x20Box",
          iinetfetchtv: "Watch\x20on\x20your\x20iiNet\x20Set\x20Top\x20Box",
          midcontinent:
            "Watch\x20on\x20your\x20Midcontinent\x20Set\x20Top\x20Box",
          mts: "Watch\x20on\x20your\x20Bell\x20MTS\x20Fibe\x20TV\x20Set\x20Top\x20Box",
          optusfetchtv: "Watch\x20on\x20your\x20Optus\x20Set\x20Top\x20Box",
          philips: "Watch\x20on\x20your\x20Philips\x20Smart\x20TV",
          rcn: "Watch\x20on\x20your\x20RCN\x20Set\x20Top\x20Box",
          roku: "Watch\x20on\x20your\x20Roku\x20device",
          samsung: "Watch\x20on\x20your\x20Samsung\x20Smart\x20TV",
          sasktel: "Watch\x20on\x20your\x20Sasktel\x20Set\x20Top\x20Box",
          sharp: "Watch\x20on\x20your\x20Sharp\x20Smart\x20TV",
          shinhan: "Binge\x20Netflix\x20with\x20Shinhan\x20Card",
          sony: "Watch\x20on\x20your\x20Sony\x20Smart\x20TV",
          suddenlink: "Watch\x20on\x20your\x20Suddenlink\x20Set\x20Top\x20Box",
          telecentro: "Watch\x20on\x20your\x20Telecentro\x20Set\x20Top\x20Box",
          telus: "Watch\x20on\x20your\x20TELUS\x20Set\x20Top\x20Box",
          totalplay: "Watch\x20on\x20your\x20Totalplay\x20Set\x20Top\x20Box",
          virginmedia: "Virgin\x20Media:\x20TiVo\u00AE\x20Box",
          wow: "Watch\x20on\x20your\x20WOW\x20Set\x20top\x20Box",
          logo_alt_text: "Partner\x20Logo",
        },
        "_a\x2Fcomponents": {
          QRwOg0:
            "Do\x20Not\x20Sell\x20or\x20Share\x20My\x20Personal\x20Information",
        },
        "signup\x2Fads": {
          "\x2F7dKxO":
            "What\u2019s\x20different\x20on\x20Netflix\x20with\x20ads\x3F",
          wJnK5J:
            "Netflix\x20with\x20ads\x20is\x20a\x20great\x20way\x20to\x20enjoy\x20movies\x20and\x20TV\x20shows\x20at\x20a\x20lower\x20price.\x20You\x20can\x20stream\x20your\x20favorites\x20at\x20a\x20great\x20resolution\x20\x281080p\x29\x20on\x20any\x20device\x20with\x20limited\x20ad\x20breaks.\x20This\x20plan\x20does\x20not\x20allow\x20downloads\x20and\x20a\x20limited\x20number\x20of\x20movies\x20and\x20TV\x20shows\x20are\x20not\x20available\x20due\x20to\x20licensing\x20restrictions.\x20Some\x20location\x20and\x20device\x20restrictions\x20also\x20apply.\x20\x3Ca\x20href\x3D\x27{LEARN_MORE_LINK}\x27\x3ELearn\x20more.\x3C\x2Fa\x3E",
          "9Hxp2S":
            "Netflix\x20is\x20a\x20streaming\x20service\x20that\x20offers\x20a\x20wide\x20variety\x20of\x20award-winning\x20TV\x20shows,\x20movies,\x20anime,\x20documentaries,\x20and\x20more\x20on\x20thousands\x20of\x20internet-connected\x20devices.\x3Cbr\x2F\x3E\x3Cbr\x2F\x3EYou\x20can\x20watch\x20as\x20much\x20as\x20you\x20want,\x20whenever\x20you\x20want\x20\u2013\x20all\x20for\x20one\x20low\x20monthly\x20price.\x20There\x27s\x20always\x20something\x20new\x20to\x20discover\x20and\x20new\x20TV\x20shows\x20and\x20movies\x20are\x20added\x20every\x20week\x21",
          "Ge\x2F\x2BM8":
            "Available\x20on\x20all\x20plans\x20except\x20Netflix\x20with\x20ads.",
        },
        "signup\x2FourStory": {
          faq_headline_fuji: "Frequently\x20Asked\x20Questions",
          faq_question_what_is_netflix: "What\x20is\x20Netflix\x3F",
          faq_answer_what_is_netflix:
            "Netflix\x20is\x20a\x20streaming\x20service\x20that\x20offers\x20a\x20wide\x20variety\x20of\x20award-winning\x20TV\x20shows,\x20movies,\x20anime,\x20documentaries,\x20and\x20more\x20on\x20thousands\x20of\x20internet-connected\x20devices.\x3Cbr\x2F\x3E\x3Cbr\x2F\x3EYou\x20can\x20watch\x20as\x20much\x20as\x20you\x20want,\x20whenever\x20you\x20want\x20without\x20a\x20single\x20commercial\x20\u2013\x20all\x20for\x20one\x20low\x20monthly\x20price.\x20There\x27s\x20always\x20something\x20new\x20to\x20discover\x20and\x20new\x20TV\x20shows\x20and\x20movies\x20are\x20added\x20every\x20week\x21",
          faq_question_cost: "How\x20much\x20does\x20Netflix\x20cost\x3F",
          faq_answer_cost_plans:
            "Watch\x20Netflix\x20on\x20your\x20smartphone,\x20tablet,\x20Smart\x20TV,\x20laptop,\x20or\x20streaming\x20device,\x20all\x20for\x20one\x20fixed\x20monthly\x20fee.\x20Plans\x20range\x20from\x20{LOW_PRICE}\x20to\x20{HIGH_PRICE}\x20a\x20month.\x20No\x20extra\x20costs,\x20no\x20contracts.",
          faq_answer_cost_plans_pretax:
            "Watch\x20Netflix\x20on\x20your\x20smartphone,\x20tablet,\x20Smart\x20TV,\x20laptop,\x20or\x20streaming\x20device,\x20all\x20for\x20one\x20fixed\x20monthly\x20fee.\x20Plans\x20range\x20from\x20{LOW_PRICE}\x20to\x20{HIGH_PRICE}\x20a\x20month\x20\x28pre-tax\x29.\x20No\x20extra\x20costs,\x20no\x20contracts.",
          faq_question_where_to_watch: "Where\x20can\x20I\x20watch\x3F",
          faq_answer_where_to_watch_v3:
            "Watch\x20anywhere,\x20anytime.\x20Sign\x20in\x20with\x20your\x20Netflix\x20account\x20to\x20watch\x20instantly\x20on\x20the\x20web\x20at\x20netflix.com\x20from\x20your\x20personal\x20computer\x20or\x20on\x20any\x20internet-connected\x20device\x20that\x20offers\x20the\x20Netflix\x20app,\x20including\x20smart\x20TVs,\x20smartphones,\x20tablets,\x20streaming\x20media\x20players\x20and\x20game\x20consoles.\x3Cbr\x2F\x3E\x3Cbr\x2F\x3EYou\x20can\x20also\x20download\x20your\x20favorite\x20shows\x20with\x20the\x20iOS,\x20Android,\x20or\x20Windows\x2010\x20app.\x20Use\x20downloads\x20to\x20watch\x20while\x20you\x27re\x20on\x20the\x20go\x20and\x20without\x20an\x20internet\x20connection.\x20Take\x20Netflix\x20with\x20you\x20anywhere.",
          faq_question_cancel: "How\x20do\x20I\x20cancel\x3F",
          faq_answer_cancel:
            "Netflix\x20is\x20flexible.\x20There\x20are\x20no\x20pesky\x20contracts\x20and\x20no\x20commitments.\x20You\x20can\x20easily\x20cancel\x20your\x20account\x20online\x20in\x20two\x20clicks.\x20There\x20are\x20no\x20cancellation\x20fees\x20\u2013\x20start\x20or\x20stop\x20your\x20account\x20anytime.",
          faq_question_what_to_watch:
            "What\x20can\x20I\x20watch\x20on\x20Netflix\x3F",
          faq_answer_what_to_watch_nft:
            "Netflix\x20has\x20an\x20extensive\x20library\x20of\x20feature\x20films,\x20documentaries,\x20TV\x20shows,\x20anime,\x20award-winning\x20Netflix\x20originals,\x20and\x20more.\x20Watch\x20as\x20much\x20as\x20you\x20want,\x20anytime\x20you\x20want.",
          faq_answer_what_to_watch_originals_link_nft:
            'Netflix\x20has\x20an\x20extensive\x20library\x20of\x20feature\x20films,\x20documentaries,\x20TV\x20shows,\x20anime,\x20award-winning\x20Netflix\x20originals,\x20and\x20more.\x20Watch\x20as\x20much\x20as\x20you\x20want,\x20anytime\x20you\x20want.\x3Cbr\x2F\x3E\x3Cbr\x2F\x3E\x3Ca\x20href\x3D"{ORIGINALS_LINK}"\x3ECheck\x20out\x20some\x20of\x20our\x20content\x3C\x2Fa\x3E.',
          faq_question_kids_value_prop:
            "Is\x20Netflix\x20good\x20for\x20kids\x3F",
          faq_answer_kids_value_prop:
            "The\x20Netflix\x20Kids\x20experience\x20is\x20included\x20in\x20your\x20membership\x20to\x20give\x20parents\x20control\x20while\x20kids\x20enjoy\x20family-friendly\x20TV\x20shows\x20and\x20movies\x20in\x20their\x20own\x20space.\x3Cbr\x2F\x3E\x3Cbr\x2F\x3EKids\x20profiles\x20come\x20with\x20PIN-protected\x20parental\x20controls\x20that\x20let\x20you\x20restrict\x20the\x20maturity\x20rating\x20of\x20content\x20kids\x20can\x20watch\x20and\x20block\x20specific\x20titles\x20you\x20don\u2019t\x20want\x20kids\x20to\x20see.",
          faq_language_disclaimer_question:
            "Why\x20am\x20I\x20seeing\x20this\x20language\x3F",
          faq_language_disclaimer_answer:
            "Your\x20browser\x20preferences\x20determine\x20the\x20language\x20shown\x20here.",
          hero_headline_fuji:
            "Unlimited\x20movies,\x20TV\x20shows,\x20and\x20more.",
          hero_headline_fuji_jp:
            "Unlimited\x20movies,\x20TV\x20shows,\x20and\x20anime.",
          hero_headline_upgrade_landing: "Ready\x20to\x20upgrade\x3F",
          hero_headline_upgrade_landing_legacy:
            "Please\x20update\x20your\x20browser.",
          hero_sub_headline_fuji: "Watch\x20anywhere.\x20Cancel\x20anytime.",
          hero_subline_upgrade_landing:
            "Switch\x20to\x20a\x20paid\x20plan\x20to\x20access\x20everything\x20Netflix\x20has\x20to\x20offer.\x20We\x20promise\x20it\u2019ll\x20only\x20take\x20a\x20few\x20clicks\x21",
          hero_subline_upgrade_landing_legacy:
            "Looks\x20like\x20you\u2019re\x20using\x20an\x20older\x20version.\x20Once\x20you\x20update\x20your\x20browser,\x20you\x20can\x20finish\x20upgrading\x20your\x20Netflix\x20account.",
          hero_only_new_members_eligible:
            "Only\x20new\x20members\x20are\x20eligible\x20for\x20this\x20offer.",
          content_headline_fuji:
            "Endless\x20entertainment,\x20anytime,\x20anywhere.",
          download_headline_offline_fuji:
            "Download\x20your\x20shows\x20to\x20watch\x20offline.",
          tv_headline_fuji: "Enjoy\x20on\x20your\x20TV.",
          device_headline_fuji: "Watch\x20everywhere.",
          kids_headline_fuji: "Create\x20profiles\x20for\x20kids.",
          free_plan_mobile_headline_fuji:
            "Have\x20an\x20Android\x20Phone\x3F\x20Get\x20our\x20new\x20free\x20plan\x21",
          content_sub_headline_fuji:
            "Watch\x20these\x20and\x20many\x20more,\x20as\x20much\x20as\x20you\x20want,\x20whenever\x20you\x20want.",
          download_sub_headline_offline_fuji:
            "Save\x20your\x20favorites\x20easily\x20and\x20always\x20have\x20something\x20to\x20watch.",
          tv_sub_headline_fuji:
            "Watch\x20on\x20Smart\x20TVs,\x20Playstation,\x20Xbox,\x20Chromecast,\x20Apple\x20TV,\x20Blu-ray\x20players,\x20and\x20more.",
          device_sub_headline_fuji:
            "Stream\x20unlimited\x20movies\x20and\x20TV\x20shows\x20on\x20your\x20phone,\x20tablet,\x20laptop,\x20and\x20TV\x20without\x20paying\x20more.",
          device_sub_headline_fuji_mobile_only:
            "Stream\x20unlimited\x20movies\x20and\x20TV\x20shows\x20on\x20your\x20phone,\x20tablet,\x20laptop,\x20and\x20TV.",
          kids_sub_headline_fuji:
            "Send\x20kids\x20on\x20adventures\x20with\x20their\x20favorite\x20characters\x20in\x20a\x20space\x20made\x20just\x20for\x20them\u2014free\x20with\x20your\x20membership.",
          free_plan_sub_headline_fuji:
            "Watch\x20a\x20selection\x20of\x20new\x20movies\x20and\x20TV\x20shows\x20without\x20adding\x20any\x20payment\x20details\x21",
          download_message_status_fuji: "Downloading...",
          free_plan_button_fuji: "Get\x20the\x20app",
          button_sign_in_to_upgrade: "Sign\x20In\x20to\x20Upgrade",
        },
        "signup\x2Fhome_customized": {
          reg_welcome_back: "Welcome\x20back\x21",
          reg_welcome_back_greetname: "Welcome\x20back,\x20{visitorName}\x21",
          reg_favorites_await_greeting:
            "Your\x20favorites\x20await,\x20{visitorName}\x21",
          button_try_it_now: "TRY\x20IT\x20NOW",
          button_try_30_days_free_tc: "Try\x2030\x20Days\x20Free",
          button_finish_sign_up_title_case: "Finish\x20Sign\x20Up",
          button_restart_your_membership_tc: "Restart\x20Your\x20Membership",
          button_join_now: "JOIN\x20NOW",
          button_get_started_tc: "Get\x20Started",
          button_resume_membership: "Resume\x20Membership",
          title_enter_email_v3:
            "Ready\x20to\x20watch\x3F\x20Enter\x20your\x20email\x20to\x20create\x20or\x20restart\x20your\x20membership.",
        },
        "_a\x2Fsignup_simplicity": {
          uSUseZ:
            "You\x20reached\x20the\x20maximum\x20gift\x20balance\x20allowed\x20per\x20account.",
          CM581w:
            "\x3Cb\x3EPlease\x20add\x20your\x20card\x20details\x20again.\x3C\x2Fb\x3E\x3Cbr\x2F\x3EWe\x20need\x20to\x20start\x20over\x20in\x20order\x20to\x20complete\x20your\x20payment.",
        },
        "signup\x2Fsimplicity\x2Fcommon": {
          not_eligible_for_offer_gift:
            "This\x20offer\x20can\x27t\x20be\x20redeemed\x20with\x20a\x20gift\x20card.\x20Enter\x20your\x20gift\x20card\x20details\x20to\x20continue\x20without\x20the\x20offer\x20or\x20\x3Ca\x3Echoose\x20another\x20payment\x20method.\x3C\x2Fa\x3E",
          "no_offer_warning.v2":
            "Unfortunately\x20you\x27re\x20not\x20eligible\x20for\x20another\x20offer.\x20Your\x20paid\x20subscription\x20will\x20begin\x20immediately.\x20Cancel\x20online\x20at\x20any\x20time.",
        },
        "gift\x2FserverErrors": {
          user_single_use_code_currency_mismatch:
            "Looks\x20like\x20this\x20gift\x20code\x20is\x20not\x20valid\x20for\x20your\x20country.",
          single_use_code_ineligible_with_partner_mop:
            "Looks\x20like\x20this\x20account\x20is\x20not\x20eligible\x20for\x20gift\x20codes.\x20Please\x20try\x20a\x20different\x20email\x20address.",
          single_use_code_ineligible_with_non_netflix_mop:
            "Looks\x20like\x20this\x20account\x20is\x20not\x20eligible\x20for\x20gift\x20codes.\x20Please\x20try\x20a\x20different\x20email\x20address.",
          single_use_code_ineligible_for_account:
            "Looks\x20like\x20your\x20account\x20is\x20not\x20eligible\x20for\x20this\x20promotion.",
          account_reached_balance_limit:
            "Looks\x20like\x20you\x27ve\x20reached\x20your\x20daily\x20gift\x20limit.\x20Try\x20again\x20tomorrow.",
          unknown_exception_while_redeeming_code:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20gift\x20redemption\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          emmy_code_error:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20code\x20redemption\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          unknown_exception_while_checking_code_eligibility:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20gift\x20redemption\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          customer_has_vip_code:
            "Looks\x20like\x20this\x20account\x20is\x20not\x20eligible\x20for\x20gift\x20codes.\x20Please\x20try\x20a\x20different\x20email\x20address.",
          gift_code_missing_mop:
            "A\x20payment\x20method\x20is\x20required\x20to\x20redeem\x20your\x20promotion\x20code.",
          gift_code_ineligible_membership_status:
            "Looks\x20like\x20your\x20account\x20is\x20not\x20eligible\x20for\x20this\x20promotion.",
          invalid_gift_code: "The\x20gift\x20code\x20is\x20invalid.",
          invalid_email_address: "The\x20email\x20is\x20invalid.",
          gift_code_zip_missing: "The\x20zip\x20code\x20is\x20missing.",
          generic_retryable_failure:
            "Sorry,\x20we\x20are\x20unable\x20to\x20process\x20your\x20request.\x20Please\x20try\x20again\x20later.",
          code_already_added:
            "This\x20code\x20has\x20already\x20been\x20added.",
          single_use_code_has_been_redeemed:
            "This\x20code\x20has\x20already\x20been\x20used.",
          single_use_code_country_mismatch:
            "Gift\x20code\x20and\x20country\x20mismatch",
          gift_code_null: "The\x20code\x20is\x20missing.",
          single_use_code_is_invalid:
            "The\x20code\x20entered\x20is\x20not\x20valid.",
          single_use_code_has_expired:
            "The\x20code\x20entered\x20has\x20expired.",
          email_invalid: "The\x20email\x20is\x20invalid.",
          zip_code_invalid: "The\x20zip\x20code\x20is\x20invalid.",
          unable_to_redeem:
            "Sorry,\x20we\x20are\x20unable\x20to\x20process\x20your\x20request.",
          gift_generic_error:
            "Sorry,\x20we\x20are\x20unable\x20to\x20process\x20your\x20request.\x20Please\x20try\x20again\x20later.",
          valid_non_gift_card_code:
            'This\x20code\x20cannot\x20be\x20redeemed\x20here.\x20Go\x20to\x20\x3Ca\x20href\x3D"\x2Fredeem"\x3Enetflix.com\x2Fredeem\x3C\x2Fa\x3E\x20to\x20redeem\x20your\x20gift\x20code.',
          unable_to_redeem_try_another:
            "The\x20gift\x20code\x20you\x20entered\x20is\x20no\x20longer\x20valid.\x20Please\x20enter\x20a\x20different\x20code.",
          "add_on_beneficiary_not_eligible.v2":
            'Extra\x20member\x20accounts\x20are\x20not\x20eligible\x20to\x20use\x20gift\x20card\x20credits.\x20Learn\x20more\x20in\x20our\x20\x3Ca\x20href\x3D"{HELP_CENTER_URL}"\x3EHelp\x20Center\x3C\x2Fa\x3E.',
          payment_failed_nsf:
            "\x3Cb\x3EYour\x20payment\x20couldn\x27t\x20be\x20completed.\x3C\x2Fb\x3E\x20Check\x20your\x20balance\x20and\x20try\x20again,\x20or\x20use\x20another\x20payment\x20method.",
          payment_failed_bad_mop_details:
            "\x3Cb\x3EYour\x20payment\x20couldn\x27t\x20be\x20completed.\x3C\x2Fb\x3E\x20Check\x20your\x20card\x20details\x20and\x20try\x20again,\x20or\x20use\x20another\x20payment\x20method.",
          payment_failed_nondescript:
            "\x3Cb\x3EYour\x20payment\x20couldn\x27t\x20be\x20completed.\x3C\x2Fb\x3E\x20Try\x20another\x20payment\x20method.",
        },
        "signup\x2Fsimplicity\x2Fpayment": {
          label_use_gift_on_premium:
            "\x3Cb\x3EYou\u2019ve\x20got\x20a\x20{formattedGiftAmount}\x20credit\x3C\x2Fb\x3E\x3Cbr\x2F\x3EUse\x20it\x20on\x20any\x20plan,\x20including\x20Premium.",
          label_gift_applied: "{giftAmount}\x20Gift\x20Code\x20applied.",
          label_gift_applied_emmy_flex:
            "Access\x20to\x20Netflix\x20through\x20{DATE}\x20granted.",
          label_gift_applied_MONTHS:
            "The\x20gift\x20code\x20you\x20redeemed\x20is\x20eligible\x20for\x20a\x20{DURATION}-month\x20{localizedPlanName}\x20plan.",
          label_gift_applied_YEARS:
            "The\x20gift\x20code\x20you\x20redeemed\x20is\x20eligible\x20for\x20a\x20{DURATION}-year\x20{localizedPlanName}\x20plan.",
          label_direct_debit_payment_wait_plural:
            "\x3Cb\x3EPlease\x20Note:\x3C\x2Fb\x3E\x20If\x20you\x20choose\x20to\x20pay\x20with\x20Direct\x20Debit,\x20it\x20may\x20take\x20up\x20to\x20\x3Cb\x3E{DAYS}\x20business\x20days\x3C\x2Fb\x3E\x20to\x20activate\x20your\x20account\x20once\x20we\x20receive\x20bank\x20confirmation.",
          message_on_hold_update_payment:
            "\x3Cb\x3EYour\x20account\x20is\x20on\x20hold.\x3C\x2Fb\x3E\x20Update\x20your\x20payment\x20info\x20to\x20keep\x20enjoying\x20Netflix.",
          msg_text_code_success:
            "A\x20new\x20text\x20message\x20was\x20sent\x20with\x20your\x20verification\x20code.",
          desc_upi_one_rupee_temporary_charge:
            "To\x20set\x20up\x20your\x20payment,\x20you\x20will\x20be\x20temporarily\x20charged\x20\u20B9\x201.\x20Any\x20temporary\x20charges\x20will\x20be\x20refunded.",
          error_upi_payment_failure:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again,\x20use\x20a\x20different\x20UPI\x20ID,\x20or\x20change\x20your\x20payment\x20method.\x3Cbr\x3E\x3Cbr\x3EWe\u2019ll\x20refund\x20any\x20charges.",
          info_rbi_mandate_v2:
            'Avoid\x20interruptions\x20by\x20setting\x20up\x20recurring\x20payments\x20with\x20UPI\x20or\x20\x3Ca\x20target\x3D"_blank"\x20href\x3D"{RBI_CS_URL}"\x3Eone\x20of\x20these\x20cards\x3C\x2Fa\x3E.',
          info_rbi_mandate_card_only:
            'Avoid\x20interruptions\x20by\x20setting\x20up\x20recurring\x20payments\x20with\x20\x3Ca\x20target\x3D"_blank"\x20href\x3D"{RBI_CS_URL}"\x3Eone\x20of\x20these\x20cards\x3C\x2Fa\x3E.',
          desc_rbi_mandate_temp_charge_v2:
            "Depending\x20on\x20the\x20card,\x20you\x20may\x20be\x20temporarily\x20charged\x20\u20B92.\x20Any\x20temporary\x20charge\x20will\x20be\x20refunded.",
          message_payment_successful: "Your\x20payment\x20was\x20successful.",
          message_payment_waiting:
            "We\u2019re\x20waiting\x20for\x20the\x20bank\x20to\x20process\x20your\x20payment.",
          blik_error_create_payment_failed:
            "Something\x20went\x20wrong.\x20Please\x20enter\x20your\x20BLIK\x20code\x20again.",
          message_payment_succeeded: "Your\x20payment\x20was\x20successful.",
          message_payment_updated:
            "Your\x20payment\x20method\x20has\x20been\x20updated.",
          message_payment_succeeded_and_updated:
            "Your\x20payment\x20was\x20successful.\x20Your\x20payment\x20method\x20has\x20also\x20been\x20updated.",
          blik_entry_textinput_placeholder_v3: "BLIK\x20code",
          blik_entry_textinput_error_v3:
            "Please\x20enter\x20your\x20BLIK\x20code.",
        },
        "signup\x2Fsimplicity\x2FserverErrors": {
          validator_login_name_length_error:
            "Your\x20email\x20address\x20must\x20contain\x20between\x205\x20and\x2050\x20characters.",
          validator_login_password_length_error:
            "Your\x20password\x20must\x20contain\x20between\x204\x20and\x2060\x20characters.",
          validator_password_invalid_chars:
            "The\x20password\x20you\x20entered\x20contains\x20invalid\x20characters.",
          "validator_registration_account_already_exists.v2":
            "\x3Cb\x3ELooks\x20like\x20that\x20account\x20already\x20exists.\x3C\x2Fb\x3E\x20\x3Ca\x20id\x3D\x27account-already-exists-error-link\x27\x20href\x3D\x27\x2Flogin\x27\x3ESign\x20into\x20that\x20account\x3C\x2Fa\x3E\x20or\x20try\x20using\x20a\x20different\x20email.",
          user_already_registered:
            'You\x27ve\x20entered\x20an\x20email\x20address\x20that\x20is\x20already\x20registered\x20with\x20Netflix.\x20If\x20you\x20already\x20are\x20or\x20previously\x20were\x20a\x20member\x20please\x20click\x20"Sign\x20In".',
          ineligible_streaming_signup_dvd:
            "That\x20email\x20address\x20is\x20registered\x20with\x20a\x20\x3Cb\x3EDVD\x20only\x20subscription.\x3C\x2Fb\x3E\x20Please\x20sign\x20up\x20using\x20a\x20different\x20email.",
          ineligible_itunes_streaming_signup_dvd:
            "That\x20email\x20address\x20is\x20registered\x20with\x20a\x20\x3Cb\x3EDVD\x20only\x20subscription.\x3C\x2Fb\x3E\x20Please\x20sign\x20up\x20using\x20a\x20different\x20email.",
          ineligible_playstore_streaming_signup_dvd:
            "That\x20email\x20address\x20is\x20registered\x20with\x20a\x20\x3Cb\x3EDVD\x20only\x20subscription.\x3C\x2Fb\x3E\x20Please\x20sign\x20up\x20using\x20a\x20different\x20email.",
          sign_in_as: "Sign\x20in\x20as\x20{email}",
          task_registration_failure:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          generic_retryable_failure:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20that\x20action\x20now.\x20Please\x20try\x20again\x20later.",
          account_service_exception:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          registration_unsuccessful:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          email_is_empty:
            "Your\x20email\x20address\x20must\x20contain\x20between\x205\x20and\x2050\x20characters.",
          password_is_empty:
            "Your\x20password\x20must\x20contain\x20between\x204\x20and\x2060\x20characters.",
          planChoice_is_empty:
            "Please\x20select\x20a\x20plan\x20that\x20works\x20for\x20you.",
          hasAcceptedTermsOfUse_is_empty:
            "You\x20must\x20acknowledge\x20that\x20you\x20have\x20read\x20and\x20agree\x20to\x20the\x20Terms\x20of\x20Use\x20to\x20continue.",
          terms_of_use_not_selected:
            "You\x20must\x20acknowledge\x20that\x20you\x20have\x20read\x20and\x20agree\x20to\x20the\x20Terms\x20of\x20Use\x20to\x20continue.",
          validator_firstname_invalid: "Please\x20enter\x20a\x20first\x20name.",
          validator_lastname_invalid: "Please\x20enter\x20a\x20last\x20name.",
          token_is_invalid:
            "Sorry,\x20this\x20offer\x20can\u2019t\x20be\x20found.\x20You\x20may\x20still\x20\x3Ca\x20href\x3D\x27https:\x2F\x2Fwww.netflix.com\x2Fsignup\x27\x3Esign\x20up\x20for\x20a\x20Netflix\x20account\x3C\x2Fa\x3E\x20without\x20this\x20offer,\x20or\x20return\x20to\x20the\x20partner\x20website\x20and\x20try\x20again.",
          token_is_expired:
            "Sorry,\x20this\x20offer\x20has\x20expired.\x20You\x20may\x20still\x20\x3Ca\x20href\x3D\x27https:\x2F\x2Fwww.netflix.com\x2Fsignup\x27\x3Esign\x20up\x20for\x20a\x20Netflix\x20account\x3C\x2Fa\x3E\x20without\x20this\x20offer,\x20or\x20return\x20to\x20the\x20partner\x20website\x20and\x20try\x20again.",
          token_is_expired_for_current_member:
            "Sorry,\x20this\x20offer\x20has\x20expired.\x20\x3Ca\x20href\x3D\x27https:\x2F\x2Fwww.netflix.com\x2Fbrowse\x27\x3EContinue\x20to\x20Netflix\x3C\x2Fa\x3E\x20without\x20this\x20offer,\x20or\x20return\x20to\x20the\x20partner\x20website\x20and\x20try\x20again.",
          partner_customerid_empty:
            "Sorry,\x20this\x20offer\x20can\u2019t\x20be\x20found.\x20You\x20may\x20still\x20sign\x20up\x20for\x20a\x20Netflix\x20account\x20without\x20this\x20offer,\x20or\x20return\x20to\x20the\x20partner\x20website\x20and\x20try\x20again.",
          token_already_activated:
            "Sorry,\x20this\x20offer\x20has\x20already\x20been\x20used.\x20Go\x20to\x20\x3CsignInToAccount\x3ENetflix.com\x3C\x2FsignInToAccount\x3E\x20to\x20sign\x20into\x20your\x20account.",
          invalid_country_request_for_invoice:
            "Sorry,\x20your\x20account\x20is\x20not\x20eligible\x20for\x20this\x20offer.",
          field_validation_error:
            "Some\x20required\x20fields\x20are\x20missing\x20or\x20invalid.",
          identity_name_mismatch:
            "The\x20name\x20you\x20entered\x20doesn\x27t\x20match\x20the\x20account\x20on\x20file.\x20Make\x20sure\x20to\x20enter\x20your\x20name\x20exactly\x20as\x20you\x20did\x20when\x20you\x20signed\x20up\x20with\x20{CARRIER_NAME}.",
          identity_verification_failure:
            "Your\x20information\x20does\x20not\x20match.\x20Check\x20your\x20entries\x20and\x20try\x20again.",
          identity_verification_system_error:
            "Sorry,\x20something\x20went\x20wrong.\x20\x20Please\x20try\x20again\x20later.",
          user_under_age:
            "You\x20must\x20be\x2019\x20or\x20over\x20to\x20join\x20Netflix.",
          date_of_birth_gender_mismatch:
            "The\x20date\x20of\x20birth\x20or\x20gender\x20you\x20entered\x20doesn\x27t\x20match\x20the\x20account\x20on\x20file\x20with\x20{CARRIER_NAME}.",
          date_of_birth_mismatch:
            "The\x20date\x20of\x20birth\x20you\x20entered\x20doesn\x27t\x20match\x20the\x20credit\x20card\x20on\x20file.",
          phone_number_already_in_use:
            "This\x20phone\x20number\x20has\x20already\x20been\x20registered\x20with\x20Netflix.",
          phone_number_not_found:
            "{CARRIER_NAME}\x20has\x20no\x20record\x20of\x20an\x20account\x20with\x20number\x20{PHONE_NUMBER}.\x20Double\x20check\x20the\x20mobile\x20number\x20and\x20carrier\x20you\x27ve\x20selected.",
          invalid_date_of_birth:
            "Invalid\x20date\x20of\x20birth.\x20\x20Please\x20check\x20your\x20entries\x20and\x20try\x20again.",
          invalid_dob:
            "Invalid\x20date\x20of\x20birth.\x20\x20Please\x20check\x20your\x20entries\x20and\x20try\x20again.",
          invalid_dob_under_age_18:
            "Sorry,\x20you\x20must\x20be\x20at\x20least\x2018\x20years\x20of\x20age\x20to\x20sign\x20up\x20for\x20Netflix.",
          sms_send_limit_reached:
            "Sorry,\x20you\x27ve\x20requested\x20the\x20maximum\x20number\x20of\x20codes\x20allowed.\x20Please\x20try\x20again\x20later.",
          sms_code_expired: "Code\x20expired.",
          sms_code_verification_failure: "Incorrect\x20code.",
          sms_code_verification_system_error:
            "Sorry,\x20something\x20went\x20wrong.\x20\x20Please\x20try\x20again.",
          sms_code_attempt_limit_reached:
            "Sorry,\x20you\x20have\x20made\x20too\x20many\x20attempts\x20to\x20verify\x20your\x20identity.\x20\x20Please\x20try\x20again\x20later.",
          no_transaction_found:
            "The\x20payment\x20system\x20is\x20unavailable\x20right\x20now.\x20Please\x20try\x20again\x20later.",
          partner_token_expired:
            "Sorry,\x20your\x20offer\x20is\x20no\x20longer\x20valid.\x20You\x20may\x20still\x20\x3Ca\x20href\x3D\x27https:\x2F\x2Fwww.netflix.com\x2Fsignup\x27\x3Esign\x20up\x20for\x20a\x20Netflix\x20account\x3C\x2Fa\x3E\x20without\x20this\x20offer,\x20or\x20return\x20to\x20the\x20{PARTNER}\x20website\x20and\x20try\x20again.",
          partner: "partner",
          gift_code_mop_required_warning_NFT:
            "A\x20payment\x20method\x20is\x20required\x20to\x20redeem\x20your\x20promotion\x20code.",
          password_auth_failed:
            'Sorry,\x20the\x20password\x20is\x20incorrect\x20for\x20the\x20account\x20with\x20this\x20email\x20address.\x20\x3Ca\x20href\x3D"\x2FLoginHelp"\x3EForgot\x20your\x20password\x3F\x3C\x2Fa\x3E',
          can_not_authenticate_account:
            'Sorry,\x20the\x20password\x20is\x20incorrect\x20for\x20the\x20account\x20with\x20this\x20email\x20address.\x20\x3Ca\x20href\x3D"\x2FLoginHelp"\x3EForgot\x20your\x20password\x3F\x3C\x2Fa\x3E',
          email_and_customerid_mismatch:
            "Sorry,\x20we\x20can\x27t\x20find\x20an\x20account\x20with\x20this\x20email\x20address.\x20Please\x20try\x20again,\x20or\x20\x3CcreateAccount\x3Ecreate\x20a\x20new\x20account.\x3C\x2FcreateAccount\x3E",
          failed_to_validate_email:
            'You\x27ve\x20entered\x20an\x20email\x20address\x20that\x20is\x20already\x20registered\x20with\x20Netflix,\x20but\x20we\x20cannot\x20validate\x20your\x20account.\x20If\x20you\x20have\x20forgotten\x20your\x20password,\x20please\x20\x3Ca\x20href\x3D"\x2FLoginHelp"\x3Eclick\x20here\x3C\x2Fa\x3E\x20to\x20retrieve\x20it.',
          deDebitBirthDate_is_empty:
            "Date\x20of\x20birth\x20cannot\x20be\x20empty.",
          deDebitBirthYear_is_empty:
            "Year\x20of\x20birth\x20cannot\x20be\x20empty.",
          deDebitStreet_is_empty:
            "Street\x20\x2B\x20Number\x20cannot\x20be\x20empty.",
          deDebitCity_is_empty: "City\x20cannot\x20be\x20empty.",
          deDebitPostalCode_is_empty:
            "Postal\x20code\x20cannot\x20be\x20empty.",
          deDebitAccountNumber_is_empty: "IBAN\x20cannot\x20be\x20empty.",
          place_order_signup_blocked:
            "We\x20are\x20unable\x20to\x20start\x20your\x20Netflix\x20membership\x20with\x20the\x20information\x20you\x20provided.\x20Please\x20try\x20a\x20different\x20payment\x20method.",
          invalid_payment_failure:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20the\x20payment\x20method\x20you\x20are\x20trying\x20to\x20use.\x20Please\x20try\x20a\x20different\x20method.",
          credit_card_auth_failed:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20the\x20payment\x20method\x20you\x20are\x20trying\x20to\x20use.",
          credit_card_avs_failed:
            "Your\x20zip\x20code\x20doesn\x27t\x20match\x20with\x20your\x20Payment\x20billing\x20information",
          credit_card_invalid_number:
            "A\x20valid\x20card\x20number\x20must\x20be\x20entered\x20into\x20the\x20form.",
          validator_credit_card_invalid_prefix:
            "Unfortunately\x20we\x20are\x20unable\x20to\x20accept\x20this\x20card.\x20Please\x20try\x20another\x20card.",
          credit_card_not_supported:
            "This\x20card\x20is\x20not\x20supported\x20in\x20this\x20territory.",
          card_type_not_supported:
            "This\x20card\x20is\x20not\x20accepted\x20in\x20this\x20country.\x20Please\x20try\x20a\x20different\x20card.",
          non_kr_card_type:
            "Only\x20Korean-issued\x20cards\x20are\x20accepted.\x20Please\x20use\x20a\x20different\x20card.",
          credit_card_do_not_honor:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20the\x20card\x20you\x20are\x20trying\x20to\x20use.\x20Please\x20use\x20a\x20different\x20card.",
          credit_card_exceed_auth_attempts:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20the\x20payment\x20method\x20you\x20are\x20trying\x20to\x20use.",
          credit_card_insufficient_funds_v2:
            "According\x20to\x20your\x20bank,\x20this\x20card\x20may\x20be\x20too\x20low\x20on\x20funds.\x20To\x20continue,\x20please\x20add\x20a\x20new\x20card.",
          credit_card_invalid_csc:
            "The\x20Card\x20Security\x20Code\x20that\x20you\x20entered\x20does\x20not\x20appear\x20to\x20be\x20valid.\x20Please\x20enter\x20the\x203\x20or\x204\x20digit\x20Card\x20Security\x20Code\x20printed\x20on\x20your\x20credit\x20card.",
          credit_card_invalid_type:
            "A\x20valid\x20card\x20number\x20must\x20be\x20entered\x20into\x20the\x20form.",
          credit_card_invalid_expiry:
            "A\x20valid\x20expiration\x20date\x20must\x20be\x20entered\x20into\x20the\x20form.",
          credit_card_invalid_password:
            "The\x20Card\x20Password\x20that\x20you\x20entered\x20does\x20not\x20appear\x20to\x20be\x20valid.\x20Please\x20enter\x20the\x20first\x20two\x20digits\x20of\x20your\x20card\x20password.",
          paypal_billing_agreement_failure:
            "We\x20are\x20unable\x20to\x20process\x20your\x20PayPal\x20information.\x20You\x20may\x20have\x20canceled\x20the\x20transaction\x20or\x20this\x20may\x20be\x20a\x20system\x20issue.\x20Please\x20try\x20again.",
          paypal_buyer_agreement_failure:
            "We\x20are\x20unable\x20to\x20process\x20your\x20PayPal\x20information.\x20You\x20may\x20have\x20canceled\x20the\x20transaction\x20or\x20this\x20may\x20be\x20a\x20system\x20issue.\x20Please\x20try\x20again.",
          generic_payment_failure:
            "There\x20was\x20an\x20error\x20processing\x20your\x20payment\x20information.\x20Please\x20check\x20that\x20all\x20fields\x20are\x20filled\x20out\x20correctly\x20and\x20try\x20again.",
          restart_system_failure:
            "Due\x20to\x20technical\x20difficulties\x20we\x20are\x20unable\x20to\x20restart\x20your\x20membership\x20at\x20this\x20time.\x20Please\x20try\x20a\x20different\x20payment\x20method\x20or\x20try\x20again\x20later.",
          restart_payment_failure:
            "We\x20are\x20unable\x20to\x20charge\x20your\x20payment\x20method.\x20Please\x20update\x20your\x20payment\x20information\x20to\x20restart\x20your\x20membership.",
          payment_system_unavailable:
            "The\x20payment\x20system\x20is\x20unavailable\x20right\x20now.\x20Please\x20try\x20again\x20later.",
          invalid_postal_code:
            "Please\x20make\x20sure\x20all\x20fields\x20are\x20filled\x20out\x20correctly\x20and\x20try\x20again.",
          task_place_order_failed:
            "We\x20are\x20unable\x20to\x20process\x20your\x20request\x20at\x20this\x20time.\x20Please\x20try\x20again\x20later.",
          update_profile_failure:
            "We\x20are\x20unable\x20to\x20process\x20your\x20request,\x20please\x20try\x20again.",
          warn_paypal_transaction_cancelled:
            "Your\x20PayPal\x20transaction\x20has\x20been\x20cancelled.",
          code_already_added:
            "This\x20code\x20has\x20already\x20been\x20added.",
          single_use_code_has_been_redeemed:
            "This\x20code\x20has\x20already\x20been\x20used.",
          single_use_code_country_mismatch:
            "Gift\x20code\x20and\x20country\x20mismatch",
          gift_code_null: "The\x20code\x20is\x20missing.",
          single_use_code_is_invalid:
            "The\x20code\x20entered\x20is\x20not\x20valid.",
          single_use_code_has_expired:
            "The\x20code\x20entered\x20has\x20expired.",
          zip_code_invalid: "The\x20zip\x20code\x20is\x20invalid.",
          unable_to_redeem:
            "Sorry,\x20we\x20are\x20unable\x20to\x20process\x20your\x20request.",
          gift_generic_error:
            "Sorry,\x20we\x20are\x20unable\x20to\x20process\x20your\x20request.\x20Please\x20try\x20again\x20later.",
          valid_non_gift_card_code:
            'This\x20code\x20cannot\x20be\x20redeemed\x20here.\x20Go\x20to\x20\x3Ca\x20href\x3D"\x2Fredeem"\x3Enetflix.com\x2Fredeem\x3C\x2Fa\x3E\x20to\x20redeem\x20your\x20gift\x20code.',
          unable_to_redeem_try_another:
            "The\x20gift\x20code\x20you\x20entered\x20is\x20no\x20longer\x20valid.\x20Please\x20enter\x20a\x20different\x20card.",
          direct_debit_account_number_invalid_for_bank:
            "The\x20Bank\x20Account\x20number\x20you\x20entered\x20is\x20invalid.\x20Please\x20try\x20again.",
          direct_debit_account_number_too_long:
            "The\x20Bank\x20Account\x20number\x20you\x20entered\x20is\x20too\x20long.\x20Please\x20try\x20again.",
          direct_debit_account_number_too_short:
            "The\x20Bank\x20Account\x20number\x20you\x20entered\x20is\x20too\x20short.\x20Please\x20try\x20again.",
          direct_debit_null_cpf: "Please\x20enter\x20your\x20CPF\x20number.",
          direct_debit_invalid_cpf:
            "You\x20entered\x20an\x20invalid\x20CPF\x20number.\x20Please\x20try\x20again.",
          direct_debit_branch_code_non_numberic:
            "Your\x20Bank\x20Branch\x20number\x20can\x20only\x20contain\x20numbers.\x20Please\x20try\x20again.",
          direct_debit_branch_code_non_numeric:
            "Your\x20Bank\x20Branch\x20number\x20can\x20only\x20contain\x20numbers.\x20Please\x20try\x20again.",
          direct_debit_branch_code_null:
            "Please\x20enter\x20your\x20Bank\x20Branch\x20number.",
          direct_debit_branch_code_unrecognized:
            "The\x20Bank\x20Branch\x20number\x20you\x20entered\x20is\x20not\x20a\x20known\x20Branch\x20Number.\x20Please\x20check\x20with\x20your\x20bank\x20and\x20try\x20again.",
          direct_debit_branch_code_too_long:
            "The\x20Bank\x20Branch\x20number\x20you\x20entered\x20is\x20too\x20long.\x20Please\x20try\x20again.",
          direct_debit_branch_code_too_short:
            "The\x20Bank\x20Branch\x20number\x20you\x20entered\x20is\x20too\x20short.\x20Please\x20try\x20again.",
          direct_debit_cpf_invalid_length:
            "Please\x20enter\x20all\x2011\x20digits\x20of\x20your\x20CPF.",
          direct_debit_cpf_too_long:
            "You\x20entered\x20an\x20invalid\x20CPF\x20number.\x20Please\x20try\x20again.",
          direct_debit_cpf_too_short:
            "Please\x20enter\x20all\x2011\x20digits\x20of\x20your\x20CPF.",
          direct_debit_cpf_non_numeric:
            "The\x20CPF\x20number\x20you\x20entered\x20is\x20invalid.\x20Please\x20try\x20again.",
          direct_debit_null_account_number:
            "Please\x20enter\x20your\x20Bank\x20Account\x20number.",
          direct_debit_invalid_account_number:
            "You\x20entered\x20an\x20invalid\x20Bank\x20Account\x20number.\x20Please\x20try\x20again.",
          direct_debit_invalid_check_digits:
            "You\x20entered\x20an\x20invalid\x20Bank\x20Account\x20number.\x20Please\x20try\x20again.",
          direct_debit_null_bank_name: "Please\x20select\x20your\x20Bank.",
          direct_debit_check_digit_too_long:
            "The\x20Account\x20number\x20digit\x20you\x20entered\x20is\x20too\x20long.\x20Please\x20try\x20again.",
          direct_debit_check_digit_too_short:
            "The\x20Account\x20number\x20digit\x20you\x20entered\x20is\x20too\x20short.\x20Please\x20try\x20again.",
          direct_debit_check_digit_null:
            "Please\x20enter\x20the\x20Account\x20number\x20digit.",
          direct_debit_check_digit_non_numeric:
            "The\x20Account\x20number\x20digit\x20you\x20entered\x20is\x20invalid.\x20Please\x20try\x20again.",
          direct_debit_savings_account_not_accepted:
            "Savings\x20account\x20not\x20accepted\x20for\x20direct\x20debit.\x20Please\x20use\x20a\x20checking\x20account.",
          direct_debit_invalid_format:
            "Invalid\x20account\x20format.\x20Insert\x20operation\x20and\x20account\x20numbers",
          direct_debit_invalid_account_type:
            "Allowed\x20operation\x20values\x20are\x20001,\x20002,\x20013,\x20023\x20or\x20037",
          direct_debit_payment_generic_failure:
            "There\x20was\x20an\x20error\x20processing\x20your\x20request.\x20Please\x20try\x20again\x20later.",
          bankChoice_is_empty: "Please\x20select\x20a\x20bank.",
          accountType_is_empty: "Please\x20select\x20an\x20account\x20type.",
          accountNumber_is_empty:
            "The\x20account\x20number\x20field\x20cannot\x20be\x20empty.",
          accountNumberCheckDigits_is_empty:
            "Please\x20enter\x20the\x20Account\x20number\x20digit.",
          branchCode_is_empty:
            "Please\x20enter\x20your\x20Bank\x20Branch\x20number.",
          customerIdentification_is_empty:
            "Please\x20enter\x20all\x2011\x20digits\x20of\x20your\x20CPF.",
          paymentChoice_is_empty:
            "We\x20are\x20unable\x20to\x20process\x20your\x20request\x20at\x20this\x20time.\x20Please\x20try\x20again\x20later.",
          invalid_account_type:
            "Allowed\x20operation\x20values\x20are\x20001,\x20002,\x20013,\x20023\x20or\x20037",
          firstName_is_empty:
            "First\x20name\x20field\x20cannot\x20be\x20empty.",
          lastName_is_invalid:
            "A\x20valid\x20last\x20name\x20must\x20be\x20entered\x20into\x20the\x20form.",
          creditData_is_empty:
            "Credit\x20card\x20information\x20is\x20incomplete.\x20Please\x20try\x20again.",
          debitCardData_is_empty:
            "Debit\x20card\x20information\x20is\x20incomplete.\x20Please\x20try\x20again.",
          invalid_with_international_transaction_warning:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20the\x20card\x20you\x20are\x20trying\x20to\x20use.\x20Please\x20use\x20a\x20different\x20card\x20or\x20check\x20with\x20your\x20bank\x20to\x20make\x20sure\x20your\x20card\x20is\x20enabled\x20for\x20international\x20transactions",
          creditZipcode_is_empty:
            "Please\x20enter\x20the\x20zip\x20code\x20for\x20your\x20card",
          zipcode_is_empty:
            "Please\x20enter\x20the\x20zip\x20code\x20for\x20your\x20card",
          throttling_failure:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          paypal_unavailable:
            "There\x20appears\x20to\x20be\x20a\x20problem\x20with\x20your\x20Paypal\x20account.\x20Please\x20try\x20again.",
          push_payment_auth_failed:
            "We\x20could\x20not\x20verify\x20your\x20payment\x20details.\x20Please\x20confirm\x20your\x20information\x20or\x20contact\x20your\x20financial\x20institution.",
          push_payment_init_failure:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          push_payment_data_failure:
            "There\x20was\x20an\x20error\x20processing\x20your\x20payment\x20information.\x20Please\x20check\x20that\x20all\x20fields\x20are\x20filled\x20out\x20correctly\x20and\x20try\x20again.",
          push_payment_processing_failure:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          push_payment_mop_required:
            "Sorry,\x20we\x20are\x20unable\x20to\x20complete\x20the\x20sign-up\x20process\x20now.\x20Please\x20try\x20again\x20later.",
          invalid_phone:
            "We\x20couldn\x27t\x20find\x20a\x20{carrier}\x20account\x20for\x20this\x20phone\x20number.\x20Please\x20make\x20sure\x20your\x20information\x20is\x20correct\x20or\x20try\x20another\x20payment\x20method.",
          invalid_phone_br:
            "Please\x20provide\x20a\x20valid\x20phone\x20number,\x20including\x20area\x20code\x20and\x20phone\x20number\x20\x2811-91234-5678\x29",
          invalid_phone_global:
            "Please\x20provide\x20a\x20valid\x20phone\x20number,\x20including\x20area\x20code\x20and\x20phone\x20number.",
          mop_disallowed:
            "Sorry,\x20there\x27s\x20a\x20problem\x20with\x20your\x20{carrier}\x20account.\x20Please\x20try\x20another\x20payment\x20method\x20or\x20contact\x20{carrier}.",
          dcb_pai_already_used:
            "Looks\x20like\x20this\x20{carrier}\x20account\x20is\x20already\x20associated\x20with\x20a\x20Netflix\x20account.\x20Please\x20try\x20another\x20payment\x20method\x20or\x20contact\x20{carrier}.",
          dcb_code_expired:
            "Sorry,\x20this\x20code\x20has\x20expired.\x20Please\x20request\x20another\x20code.",
          otp_code_expired:
            "Sorry,\x20this\x20code\x20has\x20expired.\x20Please\x20request\x20another\x20code.",
          invalid_phone_code:
            "We\x20were\x20unable\x20to\x20verify\x20your\x20phone\x20number.\x20Please\x20review\x20your\x20information\x20and\x20try\x20again.",
          invalid_customerid:
            "Sorry,\x20there\x27s\x20a\x20problem\x20with\x20your\x20{carrier}\x20account.\x20Please\x20try\x20another\x20payment\x20method\x20or\x20contact\x20{carrier}.",
          generic_dcb_payment_failure:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          dcb_network_not_supported:
            "Your\x20mobile\x20carrier\x20doesn\x27t\x20support\x20Netflix\x20billing\x20yet.\x20Please\x20try\x20a\x20different\x20payment\x20method\x20below.",
          dcb_payment_limit_reached:
            "It\x20looks\x20like\x20this\x20mobile\x20number\x20is\x20already\x20used\x20to\x20pay\x20for\x20the\x20maximum\x20number\x20of\x20accounts.\x20Please\x20try\x20a\x20different\x20number\x20or\x20payment\x20method\x20below.",
          dcb_network_error:
            "Unfortunately,\x20there\x20was\x20a\x20temporary\x20problem\x20using\x20this\x20number\x20for\x20billing.\x20Please\x20try\x20again\x20later\x20or\x20use\x20a\x20different\x20payment\x20method.",
          prepaid_dcb_network_error:
            "Unfortunately,\x20there\x20was\x20a\x20temporary\x20problem\x20using\x20this\x20number\x20for\x20billing.\x20Please\x20try\x20again\x20later.",
          dcb_insufficient_funds:
            "Unfortunately,\x20we\x20were\x20unable\x20to\x20set\x20up\x20billing\x20on\x20your\x20mobile\x20account.\x20Check\x20with\x20your\x20mobile\x20carrier\x20or\x20use\x20a\x20different\x20payment\x20method.",
          prepaid_dcb_insufficient_funds:
            "Unfortunately,\x20we\x20were\x20unable\x20to\x20set\x20up\x20billing\x20on\x20your\x20mobile\x20account.\x20Check\x20with\x20your\x20mobile\x20carrier.",
          dcb_code_invalid:
            "The\x20code\x20you\x20entered\x20was\x20invalid.\x20Please\x20check\x20the\x20code\x20and\x20try\x20again.",
          otp_code_invalid:
            "The\x20code\x20you\x20entered\x20was\x20invalid.\x20Please\x20check\x20the\x20code\x20and\x20try\x20again.",
          dcb_system_unavailable:
            "Sorry,\x20we\x20couldn\u2019t\x20set\x20up\x20billing\x20on\x20your\x20mobile\x20number\x20right\x20now.\x20Please\x20try\x20again\x20later\x20or\x20use\x20a\x20different\x20payment\x20method.",
          prepaid_dcb_system_unavailable:
            "Sorry,\x20we\x20couldn\u2019t\x20set\x20up\x20billing\x20on\x20your\x20mobile\x20number\x20right\x20now.\x20Please\x20try\x20again\x20later.",
          phone_number_not_allowed:
            "Sorry,\x20we\x20are\x20unable\x20to\x20use\x20this\x20number\x20for\x20payment.\x20Please\x20try\x20a\x20different\x20number.",
          number_not_eligible_for_dcb_v2:
            "That\x20postpaid\x20number\x20didn\u2019t\x20work.\x20Please\x20check\x20that\x20it\u2019s\x20correct,\x20not\x20a\x20prepaid\x20number,\x20or\x20pick\x20a\x20different\x20way\x20to\x20pay.",
          prepaid_number_not_eligible_for_dcb:
            "Sorry,\x20we\x20are\x20unable\x20to\x20use\x20this\x20number\x20for\x20billing.\x20Please\x20try\x20a\x20different\x20number.",
          resend_code_attempts_exceeded:
            "Sorry,\x20we\x20cannot\x20send\x20another\x20code\x20right\x20now.\x20Please\x20use\x20a\x20different\x20payment\x20method\x20or\x20try\x20again\x20later.",
          retry_payment_failure_v2:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          incorrect_password:
            "\x3Cb\x3EIncorrect\x20password.\x3C\x2Fb\x3E\x20Please\x20try\x20again\x20or\x20you\x20can\x20\x3Ca\x20target\x3D\x27_blank\x27\x20href\x3D\x27\x2FloginHelp\x27\x3Ereset\x20your\x20password.\x3C\x2Fa\x3E",
          password_not_set:
            "Sorry,\x20you\x20need\x20to\x20follow\x20the\x20link\x20to\x20set\x20your\x20password\x20before\x20you\x20can\x20continue.",
          required_data_is_invalid_or_missing:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          reg_failure_no_auth_info:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          reg_failure_unknown:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          login_transaction_failed:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          age_validation_error:
            "Your\x20age\x20could\x20not\x20be\x20verified\x20with\x20the\x20information\x20provided.",
          dvd_only_signup_blocked:
            "Try\x20a\x20different\x20email.\x20US-based\x20DVD\x20accounts\x20cannot\x20sign\x20up\x20for\x20streaming\x20service\x20outside\x20the\x20US.",
          change_billing_date_generic_failure:
            "There\x20was\x20an\x20error\x20updating\x20your\x20billing\x20day.\x20Please\x20try\x20again\x20later.",
          billing_date_payment_failure:
            "There\x20was\x20an\x20error\x20charging\x20your\x20payment\x20method.\x20You\x20can\x20try\x20again\x20or\x20\x3Cb\x3Eupdate\x20your\x20payment\x20info.\x3C\x2Fb\x3E",
          unrecognized_email:
            "Sorry,\x20we\x20can\x27t\x20find\x20an\x20account\x20with\x20this\x20email\x20address.\x20Please\x20try\x20again\x20or\x20\x3Ca\x20id\x3D\x27unrecognized-email-error-link\x27\x20href\x3D\x27\x2F\x27\x3Ecreate\x20a\x20new\x20account\x3C\x2Fa\x3E.",
          unrecognized_phone_number:
            "Sorry,\x20we\x20can\x27t\x20find\x20an\x20account\x20with\x20this\x20number.\x20Please\x20make\x20sure\x20to\x20select\x20the\x20correct\x20country\x20code\x20or\x20\x3Cb\x3Esign\x20in\x20with\x20email\x3C\x2Fb\x3E.",
          multi_month_user_ineligible_for_prepaid_offer:
            "You\x20are\x20no\x20longer\x20eligible\x20for\x20this\x20offer",
          multi_month_payment_failure:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          multi_month_invoice_failure:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          multi_month_invalid_mop:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          multi_month_top_up_failure:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          multi_month_top_up_not_paid:
            "Your\x20payment\x20was\x20not\x20successful.\x20Update\x20your\x20information\x20or\x20enter\x20a\x20new\x20payment\x20method\x20to\x20continue.",
          mop_not_supported:
            "Sorry,\x20we\x20no\x20longer\x20support\x20your\x20payment\x20method\x20on\x20file.\x20Please\x20select\x20a\x20new\x20way\x20to\x20pay.",
          upi_vpa_invalid: "Please\x20enter\x20a\x20valid\x20UPI\x20ID.",
          upi_autopay_not_supported_v2:
            "Sorry,\x20this\x20UPI\x20ID\x20cannot\x20be\x20used\x20to\x20set\x20up\x20monthly\x20autopay.\x20Please\x20try\x20another\x20UPI\x20ID\x20or\x20change\x20your\x20payment\x20method.",
          mobile_wallet_insufficient_funds:
            "Unfortunately,\x20we\x20were\x20unable\x20to\x20set\x20up\x20payment\x20with\x20your\x20wallet.\x20Please\x20check\x20your\x20balance\x20and\x20try\x20again.",
          mobile_wallet_spend_limit_reached:
            "Unfortunately,\x20we\x20were\x20unable\x20to\x20set\x20up\x20payment\x20with\x20your\x20wallet\x20because\x20you\x20have\x20reached\x20your\x20spend\x20limit.\x20Please\x20try\x20a\x20different\x20payment\x20method.",
          mobile_wallet_temporary_failure:
            "Unfortunately,\x20there\x20was\x20a\x20temporary\x20problem\x20using\x20this\x20number\x20for\x20billing.\x20Please\x20try\x20again\x20later.",
          mobile_wallet_optin_failure:
            "This\x20wallet\x20is\x20already\x20linked\x20to\x20another\x20Netflix\x20account.\x20Please\x20try\x20a\x20different\x20payment\x20method.",
          mobile_wallet_bad_account_or_carrier:
            "Sorry,\x20we\x20are\x20unable\x20to\x20use\x20this\x20account\x20for\x20billing.\x20Please\x20try\x20a\x20different\x20payment\x20method.",
          mobile_wallet_throttling_error:
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          mobile_wallet_system_error:
            "Sorry,\x20we\x20couldn\u2019t\x20set\x20up\x20billing\x20on\x20your\x20wallet\x20right\x20now.\x20Please\x20try\x20again\x20later.",
          mobile_wallet_unrecoverable_error:
            "Sorry,\x20we\x20couldn\x27t\x20set\x20up\x20billing\x20with\x20this\x20wallet.\x20Please\x20try\x20a\x20different\x20payment\x20method.",
          soft_decline_challenge_3ds:
            "Unfortunately,\x20your\x20card\x20requires\x20verification.\x20Please\x20continue\x20to\x20verify\x20this\x20card\x20or\x20enter\x20a\x20different\x20card.",
          profile_transfer_general_email_collision_error_v2:
            'This\x20email\x20is\x20already\x20in\x20use.\x20You\x20may\x20have\x20another\x20Netflix\x20account\x20using\x20this\x20email.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ELearn\x20more.\x3C\x2Fa\x3E',
          profile_transfer_profile_email_collision_error_v2:
            'This\x20email\x20is\x20already\x20in\x20use.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ELearn\x20more.\x3C\x2Fa\x3E',
          profile_transfer_max_number_profiles_error_v2:
            'This\x20email\x20is\x20attached\x20to\x20an\x20account\x20with\x205\x20profiles.\x20Please\x20use\x20another\x20email.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ENeed\x20help\x3F\x3C\x2Fa\x3E',
          profile_transfer_profile_deleted_v2:
            'It\x20looks\x20like\x20this\x20profile\x20no\x20longer\x20exists.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ENeed\x20help\x3F\x3C\x2Fa\x3E',
          ineligible_profile_v2:
            'This\x20feature\x20has\x20been\x20disabled.\x20This\x20profile\x20cannot\x20be\x20transferred\x20until\x20the\x20account\x20owner\x20turns\x20on\x20profile\x20transfers.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ENeed\x20help\x3F\x3C\x2Fa\x3E',
          profile_transfer_profile_pin_error_v2:
            'This\x20feature\x20is\x20not\x20available\x20on\x20profiles\x20protected\x20by\x20a\x20PIN.\x20\x3Ca\x20href\x3D"{HELP_URL}"\x20target\x3D"_blank"\x3ELearn\x20more.\x3C\x2Fa\x3E',
          profile_transfer_retryable_error:
            "Sorry,\x20we\u2019re\x20having\x20trouble\x20with\x20your\x20request.\x20Please\x20try\x20again\x20later.",
        },
        "signup\x2ForderConfirm": {
          order_confirm_membership_paused:
            "Your\x20membership\x20is\x20currently\x20paused.",
        },
        "signup\x2Fsimplicity\x2FtvQrPiSignup": {
          partner_pin_limit_reached:
            "You\u2019ve\x20reached\x20the\x20limit\x20on\x20how\x20many\x20times\x20you\x20can\x20try\x20your\x20PIN.\x20Select\x20another\x20payment\x20method\x20to\x20continue.",
          partner_integration_ineligible:
            "Something\x20went\x20wrong.\x20Select\x20another\x20payment\x20method\x20to\x20continue.",
        },
        "signup\x2Fpricetiering": {
          text_1_stream_name: "Basic",
          text_2_stream_name: "Standard",
          text_4_stream_name: "Premium",
          text_ultra_name: "Ultra",
        },
        "signup\x2Fsimplicity\x2FformFields": {
          label_email: "Email",
          label_password: "Password",
          label_add_password: "Add\x20a\x20password",
          label_new_email: "New\x20email\x20address",
          label_new_password: "New\x20password",
          label_pipcConsent:
            "Yes,\x20I\x20consent\x20to\x20collection\x20and\x20use\x20of\x20my\x20personal\x20information\x20in\x20accordance\x20with\x20the\x20\x3Ca\x20href\x3D\x27https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fprivacy\x27\x20target\x3D\x27_blank\x27\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.",
          error_required_email: "Email\x20is\x20required\x21",
          invalid_format_email:
            "Please\x20enter\x20a\x20valid\x20email\x20address",
          invalid_length_email:
            "Email\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters",
          error_required_password: "Password\x20is\x20required\x21",
          invalid_format_password:
            "Password\x20should\x20not\x20contain\x20tilde\x20\x28\x7E\x29",
          invalid_length_password:
            "Password\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters",
          invalid_custom_error_password:
            "Please\x20shorten\x20your\x20password\x20to\x2060\x20characters\x20or\x20less.",
          error_incorrect_length_minMax_userLoginId:
            "{type,\x20select,\x20phone\x20{Phone\x20number}\x20email\x20{Email}\x20other\x20{Email\x20or\x20phone\x20number}}\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          multi_error_required_userLoginId:
            "{type,\x20select,\x20phone\x20{Phone\x20number}\x20email\x20{Email}\x20other\x20{Email\x20or\x20phone\x20number}}\x20is\x20required\x21",
          multi_invalid_format_userLoginId:
            "Please\x20enter\x20a\x20valid\x20{type,\x20select,\x20phone\x20{phone\x20number}\x20email\x20{email}\x20other\x20{email\x20or\x20phone\x20number}}",
          multi_invalid_length_userLoginId:
            "{type,\x20select,\x20phone\x20{Phone\x20number}\x20email\x20{Email}\x20other\x20{Email\x20or\x20phone\x20number}}\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters",
          multi_label_userLoginId:
            "{type,\x20select,\x20phone\x20{Phone\x20number}\x20email\x20{Email}\x20other\x20{Email\x20or\x20phone\x20number}}",
          error_required_name: "Name\x20is\x20required\x21",
          invalid_format_name: "Please\x20enter\x20a\x20valid\x20name",
          label_userLoginId: "Email\x20or\x20phone\x20number",
          invalid_length_userLoginId:
            "Email\x20or\x20phone\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters",
          error_required_userLoginId:
            "Email\x20or\x20phone\x20is\x20required\x21",
          invalid_format_userLoginId_v2:
            "Please\x20enter\x20a\x20valid\x20email\x20or\x20phone\x20number",
          label_firstName_caseCorrected: "First\x20name",
          label_lastName_20210517: "Last\x20name",
          label_name: "Name",
          label_creditCardNumber_20210517: "Card\x20number",
          label_creditZipcode_20210517: "Billing\x20ZIP\x20code",
          label_creditCardSecurityCode_20210517:
            "Security\x20code\x20\x28CVV\x29",
          label_creditExpirationMonth: "Expiration\x20Month",
          label_creditExpirationYear: "Expiration\x20Year",
          label_debitCardNumber: "Card\x20Number",
          label_birthDate: "Birth\x20Date",
          label_birthMonth: "Birth\x20Month",
          label_birthYear: "Birth\x20Year",
          label_debitCardExpirationMonth: "Expiration\x20Month",
          label_debitCardExpirationYear: "Expiration\x20Year",
          label_debitCardSecurityCode: "Security\x20Code\x20\x28CVV\x29",
          label_cardProcessingType:
            "Select\x20your\x20preferred\x20way\x20to\x20process\x20payment:",
          label_allowChainingDebit_v2:
            "If\x20payment\x20fails\x20as\x20credit,\x20allow\x20charging\x20it\x20as\x20debit,\x20if\x20card\x20has\x20option\x20available.",
          label_allowChainingCredit_v2:
            "If\x20payment\x20fails\x20as\x20debit,\x20allow\x20charging\x20it\x20as\x20credit,\x20if\x20card\x20has\x20option\x20available.",
          label_allowCartesBancairesProcessing:
            "Allow\x20processing\x20with\x20Cartes\x20Bancaires",
          label_customerIdentification: "CPF",
          label_customerIdentification_optional: "CPF\x20\x28Optional\x29",
          label_code: "Gift\x20Card\x20Pin\x20or\x20Code",
          label_zipcode: "Zip\x20Code",
          label_postPaidMobileNumber: "Postpaid\x20Mobile\x20Number",
          label_mobileNumber_v2: "Mobile\x20number",
          label_upiId: "UPI\x20ID",
          label_bankChoice: "Bank\x20Choice",
          label_branchCode: "Branch\x20Number",
          label_accountNumber: "Account",
          label_accountNumberCheckDigits: "Digit",
          label_accountType: "Operation",
          label_deDebitPostalCode: "Postal\x20Code",
          label_deDebitAccountNumber: "IBAN",
          label_deDebitBirthDate: "Birth\x20Date",
          label_deDebitBirthMonth: "Birth\x20Month",
          label_deDebitBirthYear: "Birth\x20Year",
          label_deDebitStreet: "Street\x20\x2B\x20Number",
          label_deDebitCity: "City",
          label_coDebitBankChoice: "Bank\x20name",
          label_coDebitAccountNumber: "Account\x20Number",
          label_coDebitAccountType: "Account\x20Type",
          error_required_cardProcessingType:
            "Payment\x20Process\x20Type\x20is\x20required\x21",
          label_coDebitFirstName: "Account\x20holder\x27s\x20first\x20name",
          label_coDebitLastName: "Account\x20holder\x27s\x20last\x20name",
          label_coDebitCustomerIdentification:
            "Account\x20holder\x27s\x20National\x20ID",
          label_newBillingDay: "Day",
          error_required_firstName_20210517:
            "Please\x20enter\x20a\x20first\x20name.",
          error_required_lastName_20210517:
            "Please\x20enter\x20a\x20last\x20name.",
          error_required_birthDate: "Birth\x20Date\x20is\x20required\x21",
          error_required_birthMonth: "Birth\x20Month\x20is\x20required\x21",
          error_required_birthYear: "Birth\x20Year\x20is\x20required\x21",
          error_required_creditCardNumber_20210517:
            "Please\x20enter\x20a\x20card\x20number.",
          error_incorrect_length_minMax_creditCardNumber:
            "Card\x20Number\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_creditCardNumber:
            "Card\x20Number\x20should\x20be\x20{length}\x20characters\x21",
          invalid_format_creditCardNumber_20210517:
            "Please\x20enter\x20a\x20valid\x20credit\x20card\x20number.",
          invalid_length_creditCardNumber_20210517:
            "Please\x20enter\x20a\x20valid\x20credit\x20card\x20number.",
          invalid_custom_error_creditCardNumber:
            "Please\x20enter\x20a\x20valid\x20credit\x20card\x20number",
          error_required_creditZipcode_20210517:
            "Please\x20enter\x20a\x20billing\x20ZIP\x20code.",
          invalid_length_creditZipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
          invalid_format_creditZipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
          error_required_creditCardSecurityCode_20210517:
            "Please\x20enter\x20a\x20security\x20code\x20\x28CVV\x29.",
          invalid_length_creditCardSecurityCode_20210517:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code.",
          invalid_format_creditCardSecurityCode_20210517:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code.",
          invalid_format_firstName:
            "Please\x20enter\x20a\x20valid\x20first\x20name",
          invalid_format_lastName:
            "Please\x20enter\x20a\x20valid\x20last\x20name",
          error_incorrect_range_birthDate:
            "Birth\x20Date\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_format_birthDate:
            "Please\x20enter\x20a\x20valid\x20birth\x20date",
          error_incorrect_range_birthMonth:
            "Birth\x20Month\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_format_birthMonth:
            "Please\x20enter\x20a\x20valid\x20birth\x20month",
          error_incorrect_range_birthYear:
            "Birth\x20Year\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_format_birthYear:
            "Please\x20enter\x20a\x20valid\x20birth\x20year",
          error_required_creditExpirationMonth_20210517:
            "Please\x20enter\x20an\x20expiration\x20month.",
          error_incorrect_range_creditExpirationMonth:
            "Expiration\x20Month\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_custom_error_creditExpirationMonth:
            "The\x20expiration\x20date\x20you\x20entered\x20is\x20in\x20the\x20past.",
          invalid_format_creditExpirationMonth_20210517:
            "Please\x20enter\x20a\x20valid\x20expiration\x20month.",
          error_required_creditExpirationYear_20210517:
            "Please\x20enter\x20an\x20expiration\x20year.",
          error_incorrect_range_creditExpirationYear_20210517:
            "The\x20expiration\x20year\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}.",
          invalid_custom_error_creditExpirationYear:
            "The\x20expiration\x20date\x20you\x20entered\x20is\x20in\x20the\x20past.",
          invalid_format_creditExpirationYear_20210517:
            "Please\x20enter\x20a\x20valid\x20expiration\x20year.",
          error_required_debitCardNumber_20210517:
            "Please\x20enter\x20a\x20card\x20number.",
          invalid_format_debitCardNumber_20210517:
            "Please\x20enter\x20a\x20valid\x20debit\x20card\x20number.",
          invalid_length_debitCardNumber_20210517:
            "Please\x20enter\x20a\x20valid\x20debit\x20card\x20number.",
          invalid_custom_error_debitCardNumber:
            "Please\x20enter\x20a\x20valid\x20debit\x20card\x20number",
          error_required_debitCardExpirationMonth_20210517:
            "Please\x20enter\x20an\x20expiration\x20month.",
          error_incorrect_range_debitCardExpirationMonth:
            "Expiration\x20Month\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_custom_error_debitCardExpirationMonth:
            "The\x20expiration\x20date\x20you\x20entered\x20is\x20in\x20the\x20past.",
          invalid_format_debitCardExpirationMonth:
            "Please\x20enter\x20a\x20valid\x20expiration\x20month",
          error_required_debitCardExpirationYear_20210517:
            "Please\x20enter\x20an\x20expiration\x20year.",
          error_incorrect_range_debitCardExpirationYear:
            "Expiration\x20Year\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          invalid_custom_error_debitCardExpirationYear:
            "The\x20expiration\x20date\x20you\x20entered\x20is\x20in\x20the\x20past.",
          invalid_format_debitCardExpirationYear:
            "Please\x20enter\x20a\x20valid\x20expiration\x20year",
          error_required_debitCardSecurityCode:
            "Security\x20Code\x20\x28CVV\x29\x20is\x20required\x21",
          invalid_length_debitCardSecurityCode_20210517:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code.",
          invalid_format_debitCardSecurityCode:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code",
          error_incorrect_length_minMax_customerIdentification:
            "CPF\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_customerIdentification:
            "CPF\x20should\x20be\x20{length}\x20characters\x21",
          error_required_zipcode: "Zip\x20Code\x20is\x20required\x21",
          invalid_length_zipcode_20210517:
            "Please\x20enter\x20a\x20valid\x20ZIP\x20code.",
          invalid_format_zipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
          error_required_code:
            "Gift\x20Card\x20Pin\x20or\x20Code\x20is\x20required\x21",
          error_incorrect_length_code:
            "Gift\x20Card\x20Pin\x20or\x20Code\x20should\x20be\x20{length}\x20characters\x21",
          error_incorrect_length_minMax_code:
            "Gift\x20Card\x20Pin\x20or\x20Code\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          invalid_format_code:
            "Please\x20enter\x20a\x20valid\x20gift\x20card\x20pin\x20or\x20code",
          error_required_smsCode: "Code\x20is\x20required.",
          invalid_length_smsCode: "Incorrect\x20code.",
          invalid_format_smsCode: "Incorrect\x20code.",
          error_required_phoneNumber:
            "Mobile\x20Phone\x20Number\x20is\x20required\x21",
          invalid_format_phoneNumber:
            "Please\x20enter\x20a\x20valid\x20mobile\x20number.",
          invalid_length_phoneNumber:
            "Please\x20enter\x20a\x20valid\x20mobile\x20number.",
          error_required_upiId: "Please\x20enter\x20a\x20valid\x20UPI\x20ID.",
          error_required_deDebitPostalCode:
            "Postal\x20Code\x20is\x20required\x21",
          invalid_format_deDebitPostalCode:
            "Please\x20enter\x20a\x20valid\x20postal\x20code",
          error_required_deDebitAccountNumber: "IBAN\x20is\x20required\x21",
          error_incorrect_length_minMax_deDebitAccountNumber:
            "IBAN\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_deDebitAccountNumber:
            "IBAN\x20should\x20be\x20{length}\x20characters\x21",
          error_required_deDebitBirthDate:
            "Birth\x20Date\x20is\x20required\x21",
          error_incorrect_range_deDebitBirthDate:
            "Birth\x20Date\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          error_required_deDebitBirthMonth:
            "Birth\x20Month\x20is\x20required\x21",
          error_incorrect_range_deDebitBirthMonth:
            "Birth\x20Month\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          error_required_deDebitBirthYear:
            "Birth\x20Year\x20is\x20required\x21",
          error_incorrect_range_deDebitBirthYear:
            "Birth\x20Year\x20must\x20be\x20between\x20{minValue}\x20and\x20{maxValue}\x21",
          error_required_deDebitStreet:
            "Street\x20\x2B\x20Number\x20is\x20required\x21",
          error_incorrect_length_minMax_deDebitStreet:
            "Street\x20\x2B\x20Number\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_deDebitStreet:
            "Street\x20\x2B\x20Number\x20should\x20be\x20{length}\x20characters\x21",
          error_required_deDebitCity: "City\x20is\x20required\x21",
          error_incorrect_length_minMax_deDebitCity:
            "City\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_deDebitCity:
            "City\x20should\x20be\x20{length}\x20characters\x21",
          error_required_bankChoice: "Bank\x20Choice\x20is\x20required\x21",
          error_required_branchCode: "Branch\x20Number\x20is\x20required\x21",
          error_incorrect_length_minMax_branchCode:
            "Branch\x20Number\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_branchCode:
            "Branch\x20Number\x20should\x20be\x20{length}\x20characters\x21",
          error_required_accountNumber: "Account\x20is\x20required\x21",
          error_incorrect_length_minMax_accountNumber:
            "Account\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_incorrect_length_accountNumber:
            "Account\x20should\x20be\x20{length}\x20characters\x21",
          error_required_accountType: "Operation\x20is\x20required\x21",
          error_required_accountNumberCheckDigits:
            "Digit\x20is\x20required\x21",
          invalid_length_accountNumberCheckDigits: "Invalid\x20digit",
          error_required_customerIdentification: "CPF\x20is\x20required\x21",
          error_required_coDebitBankChoice:
            "Bank\x20name\x20is\x20required\x21",
          error_required_coDebitAccountNumber:
            "Account\x20number\x20is\x20required\x21",
          error_incorrect_length_coDebitAccountNumber:
            "Account\x20number\x20should\x20be\x20{length}\x20characters\x21",
          error_incorrect_length_minMax_coDebitAccountNumber:
            "Account\x20number\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters\x21",
          error_required_coDebitAccountType:
            "Account\x20Type\x20is\x20required\x21",
          error_required_coDebitFirstName:
            "Account\x20holder\x27s\x20first\x20name\x20is\x20required\x21",
          error_required_coDebitLastName:
            "Account\x20holder\x27s\x20last\x20name\x20is\x20required\x21",
          error_required_coDebitCustomerIdentification:
            "Account\x20holder\x27s\x20National\x20ID\x20is\x20required\x21",
          error_incorrect_length_minMax_coDebitCustomerIdentification:
            'Please\x20enter\x20a\x20valid\x20"C\u00C9DULA\x20DE\x20CIUDADAN\u00CDA"\x20number\x21',
          error_incorrect_length_coDebitCustomerIdentification:
            'Please\x20enter\x20a\x20valid\x20"C\u00C9DULA\x20DE\x20CIUDADAN\u00CDA"\x20number\x21',
          invalid_custom_error_coDebitBankChoice:
            "Please\x20select\x20a\x20valid\x20bank\x20name.",
          invalid_format_coDebitAccountNumber:
            "Please\x20enter\x20a\x20valid\x20account\x20number\x21",
          invalid_format_coDebitCustomerIdentification:
            'Please\x20enter\x20a\x20valid\x20"C\u00C9DULA\x20DE\x20CIUDADAN\u00CDA"\x20number\x21',
          helper_learnMore:
            '\x3Ca\x20href\x3D"{LEARN_MORE_URL}"\x3ELearn\x20More\x3C\x2Fa\x3E',
          label_securityCode: "Security\x20Code\x20\x28CVV\x29",
          error_required_securityCode:
            "Security\x20Code\x20\x28CVV\x29\x20is\x20required\x21",
          invalid_length_securityCode:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code",
          invalid_format_securityCode:
            "Please\x20enter\x20a\x20valid\x20CVV\x20code",
          label_otpPhone: "Mobile\x20Phone\x20Number",
          error_required_signupOtpCode: "Code\x20is\x20required.",
          invalid_length_signupOtpCode: "Incorrect\x20code.",
          invalid_format_signupOtpCode: "Incorrect\x20code.",
          invalid_length_zipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
          error_required_email_20210517: "Please\x20enter\x20an\x20email.",
          error_required_password_20210517: "Please\x20enter\x20a\x20password.",
          error_required_ownerName:
            "Sorry,\x20the\x20primary\x20account\x20profile\x20cannot\x20be\x20deleted.",
          invalid_length_ownerName:
            "Sorry,\x20names\x20must\x20be\x20less\x20than\x2050\x20characters\x20long.",
          invalid_format_ownerName:
            "Sorry,\x20the\x20following\x20characters\x20cannot\x20be\x20used\x20in\x20names:\x20{invalidChars}",
          invalid_length_profile1Name:
            "Sorry,\x20names\x20must\x20be\x20less\x20than\x2050\x20characters\x20long.",
          invalid_format_profile1Name:
            "Sorry,\x20the\x20following\x20characters\x20cannot\x20be\x20used\x20in\x20names:\x20{invalidChars}",
          invalid_length_profile2Name:
            "Sorry,\x20names\x20must\x20be\x20less\x20than\x2050\x20characters\x20long.",
          invalid_format_profile2Name:
            "Sorry,\x20the\x20following\x20characters\x20cannot\x20be\x20used\x20in\x20names:\x20{invalidChars}",
          invalid_length_profile3Name:
            "Sorry,\x20names\x20must\x20be\x20less\x20than\x2050\x20characters\x20long.",
          invalid_format_profile3Name:
            "Sorry,\x20the\x20following\x20characters\x20cannot\x20be\x20used\x20in\x20names:\x20{invalidChars}",
          invalid_length_profile4Name:
            "Sorry,\x20names\x20must\x20be\x20less\x20than\x2050\x20characters\x20long.",
          invalid_format_profile4Name:
            "Sorry,\x20the\x20following\x20characters\x20cannot\x20be\x20used\x20in\x20names:\x20{invalidChars}",
          invalid_custom_error_ownerName:
            "Sorry,\x20each\x20name\x20can\x20only\x20be\x20used\x20once.",
          invalid_custom_error_profile1Name:
            "Sorry,\x20each\x20name\x20can\x20only\x20be\x20used\x20once.",
          invalid_custom_error_profile2Name:
            "Sorry,\x20each\x20name\x20can\x20only\x20be\x20used\x20once.",
          invalid_custom_error_profile3Name:
            "Sorry,\x20each\x20name\x20can\x20only\x20be\x20used\x20once.",
          invalid_custom_error_profile4Name:
            "Sorry,\x20each\x20name\x20can\x20only\x20be\x20used\x20once.",
          label_email_address: "Email\x20address",
        },
        "signup\x2Fsimplicity\x2Fregistration": {
          label_email_consent_opt_in:
            "Yes,\x20please\x20email\x20me\x20Netflix\x20special\x20offers.",
          label_email_consent_opt_in_optional:
            "Yes,\x20please\x20email\x20me\x20Netflix\x20special\x20offers.\x20\x28optional\x29",
          label_email_consent_opt_out:
            "Please\x20do\x20not\x20email\x20me\x20Netflix\x20special\x20offers.",
          field_label_password_v2: "Enter\x20your\x20password",
          field_label_email: "Email",
          field_label_confirm_password: "Confirm\x20your\x20password",
        },
        "signup\x2Fsimplicity\x2FobtainConsent": {
          "label_missing_consent.v2":
            "You\x20must\x20acknowledge\x20that\x20you\x20have\x20read\x20and\x20agree\x20to\x20the\x20Terms\x20of\x20Use\x20to\x20continue.",
        },
        "addon\x2Fowner\x2FbeneficiaryEmailSetup": {
          to_name_placeholder: "Their\x20name",
          to_email_placeholder: "Their\x20email\x20address",
          from_name_placeholder: "Your\x20name",
        },
        "addon\x2Fbeneficiary\x2FprofileCreation": {
          "profile.name": "Profile\x20name",
        },
        "addon\x2Fbeneficiary\x2FpasswordCreation": {
          "password.label": "Your\x20password",
          "emailaddress.label": "Your\x20email\x20address",
        },
        "gift\x2Fcommon": {
          "gift.label.email": "Email",
          "gift.label.zip.code": "Zip\x20Code",
        },
        "gift\x2Ferrors": {
          invalid_format_email:
            "Please\x20enter\x20a\x20valid\x20email\x20address",
          error_required_email: "Email\x20is\x20required\x21",
          invalid_length_email:
            "Email\x20should\x20be\x20between\x20{minLength}\x20and\x20{maxLength}\x20characters",
          error_required_zipcode: "Zip\x20Code\x20is\x20required\x21",
          invalid_length_zipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
          invalid_format_zipcode:
            "Please\x20enter\x20a\x20valid\x20zip\x20code",
        },
        "onboarding\x2FdeviceSurvey": {
          "device.survey.option.tv": "Smart\x20TV\x20or\x20Blu-ray\x20player",
          "device.survey.option.mobile": "Phone\x20or\x20Tablet",
          "device.survey.option.desktop": "Desktop\x20or\x20Laptop",
          "device.survey.option.streamingMediaPlayer":
            "Streaming\x20Media\x20Player",
          "device.survey.option.setTopBox": "Set-Top\x20Box",
        },
        "onboarding\x2FaddProfiles": {
          "kidsprofiles.checkbox.kids": "kids",
          "addprofiles.label.name": "Name",
        },
        "account\x2FPhoneNumber": {
          "phone.page.input.label.phone": "Mobile\x20phone\x20number",
          "phone.page.error.invalid_phone":
            "Please\x20enter\x20a\x20valid\x20phone\x20number.",
          "phone.page.input.label.sms_consent":
            "Yes,\x20I\x20would\x20like\x20to\x20receive\x20text\x20messages\x20with\x20TV\x20show\x20\x26\x20movie\x20updates,\x20information\x20and\x20special\x20offers\x20from\x20Netflix.",
        },
      },
    },
  },
};
