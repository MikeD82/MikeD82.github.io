//import 'js/cookieconsent.umd.js';
  

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'cc_cookie',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 365,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => {
                        //
                        if (cc.allowedCategory("analytics")) {
                          cc.loadScript(
                            "https://www.googletagmanager.com/gtag/js?id=G-8JGW08PZGN",
                            function () {
                             
                              window.dataLayer = window.dataLayer || [];
                              function gtag() {
                                dataLayer.push(arguments);
                              }
                              gtag("js", new Date());
                  
                              gtag("config", "G-8JGW08PZGN");
                            }
                          );
                        }
                        //
                      },
                    onReject: () => {}
                },               
            }
        },
        ads: {}
    },

    language: {
        default: 'pl',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'Cookie modal description',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Somebody said ... cookies?',
                            description: 'I want one!'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            } ,

            pl: {
                consentModal: {
                    title: 'Używamy plików cookies',
                    description: 'Cookie modal description',
                    acceptAllBtn: '  Zaakceptuj  ',
                    acceptNecessaryBtn: 'Odrzuć wszystkie',
                    showPreferencesBtn: 'Ustawienia plików cookies'
                },
                preferencesModal: {
                    title: 'Ustawienia plików cookies',
                    acceptAllBtn: '  Zaakceptuj  ',
                    acceptNecessaryBtn: 'Odrzuć wszystkie',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Somebody said ... cookies?',
                            description: 'I want one!'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'Pliki cookie są wymagane do działania podstawowych funkcji witryny internetowej. Te pliki cookie są niezbędne do działania naszych witryn internetowych. Te funkcje to m.in. pomiary i ulepszanie wydajności, wykrywanie rozmiaru ekranu, mierzenie czasów ładowania stron, poprawianie działania środowiska użytkownika, personalizowanie kluczowych obszarów środowiska użytkownika oraz analizowanie sposobu użycia witryny. ',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'Analityczne pliki cookie innych firm umożliwiają zrozumienie, w jaki sposób odwiedzający używają naszą witrynę internetowa. Te pliki służą na przykład do zbierania informacji o podstronach, które odwiedzasz, oraz liczbie kliknięć potrzebnych Ci do wykonania zadania. ',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            }
            
        }
    }
});