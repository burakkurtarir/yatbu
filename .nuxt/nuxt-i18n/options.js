

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"tr","messages":{"tr":{"lang":"TR","internet":{"lost":"İnternet bağlantınız yok","sureInternet":"İnternet bağlantınız olduğunuza emin olun.","connected":"İnternet'e tekrar bağlandınız.","contiuneSurf":"Yatbu.com'da gezmeye devam edebilirsiniz."},"button":{"submit":"GÖNDER","changeProfileImage":"Profil Resmini Değiştir"},"product":{"review":"Hemen İncele"},"login":{"title":"Get more things done with Loggin platform.","paragraph":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus eaque odit qui eos amet distinctio, illo architecto aspernatur. Libero.","signIn":"GİRİŞ YAP","forgotPassword":"Şifreni mi unuttun?","siginGoogle":"Google ile Giriş Yap","joinUs":"Bize Katıl","alreadyUser":"Zaten üyeliğin mi var?"},"charter":{"interestedIn":"{name} ile ilgileniyorum."},"book":{"now":"Hemen Rezervasyon Yap"},"inquire":{"now":"Şimdi Sor"},"register":"Kayıt Ol","general":{"phone":"Telefon","email":"Email","guests":"Misafir","feet":"Genişlik","perDay":"Günlük","search":"Ara","or":"Veya"},"category":{"chooseCategory":"Kategori Seç"},"profile":{"title":{"personalInfo":"Kişisel Bilgilerim","changePassword":"Şifre Değiştirme İşlemleri","changeProfileImage":"Profil Resimini Değiştirme İşlemleri","favorites":"Favorilerim","publish":"Yayında Olan İlanlarım","unpublish":"Yayında Olmayan İlanlarım","purchase":"Alım İşlemlerim","sales":"Satış İşlemlerim"},"name":"Adınız","lastname":"Soyadınız","username":"Kullanıcı Adınız","gender":"Cinsiyet","birthday":"Doğum Tarihi","password":"Şifreniz","oldPassword":"Eski Şifreniz","rePassword":"Şifre Tekrar"},"editor":{"placeholder":"İlan Açıklamasını buraya girin...","titlePlaceholder":"Başlık girin..."},"header":{"home":"ANA SAYFA","about":"HAKKIMIZDA","ads":"İLANLAR","services":"HİZMETLER","contact":"İLETİŞİM","signin":"GİRİŞ YAP","signup":"KAYIT OL"},"ads":{"now":"İLAN VER","showcase":"Vitrindeki İlanlar","showcaseDescription":"Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation aliquip duis aute irure dolorin reprehenderits vol dolore fugiat nulla pariatur excepteur sint occaecat cupidatat.","viewAllAds":"TÜM İLANLARI GÖRÜNTÜLE","new":{"title":"İlan Başlığı","description":"Açıklama","price":"Fiyat","year":"Yılı","stateRooms":"Oda Sayısı","sleeps":"Yatak Sayısı","guest":"Misafir"}},"chat":{"textarea":{"placeholder":"Mesajınızı buraya yazın..."}}}}},
  vueI18nLoader: false,
  locales: [{"code":"tr","iso":"tr-TR","name":"Turkish"}],
  defaultLocale: "tr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"tr","iso":"tr-TR","name":"Turkish"}],
  localeCodes: ["tr"],
}
