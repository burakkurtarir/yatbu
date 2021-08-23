import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Alert: () => import('../../components/global/alert/alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c)),
  AvatarErAvatar: () => import('../../components/global/avatar/er-avatar.vue' /* webpackChunkName: "components/avatar-er-avatar" */).then(c => wrapFunctional(c.default || c)),
  IconMIcon: () => import('../../components/global/icon/m-icon.vue' /* webpackChunkName: "components/icon-m-icon" */).then(c => wrapFunctional(c.default || c)),
  ButtonsErPrimaryButton: () => import('../../components/global/buttons/er-primary-button.vue' /* webpackChunkName: "components/buttons-er-primary-button" */).then(c => wrapFunctional(c.default || c)),
  InputGlobalFormInput: () => import('../../components/global/input/global-form-input.vue' /* webpackChunkName: "components/input-global-form-input" */).then(c => wrapFunctional(c.default || c)),
  InputGlobalInput: () => import('../../components/global/input/global-input.vue' /* webpackChunkName: "components/input-global-input" */).then(c => wrapFunctional(c.default || c)),
  LoadingCliLoading: () => import('../../components/global/loading/cli-loading.vue' /* webpackChunkName: "components/loading-cli-loading" */).then(c => wrapFunctional(c.default || c)),
  LoadingServerLoading: () => import('../../components/global/loading/server-loading.vue' /* webpackChunkName: "components/loading-server-loading" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AccountsMain: () => import('../../components/accounts/main.vue' /* webpackChunkName: "components/accounts-main" */).then(c => wrapFunctional(c.default || c)),
  ChatMain: () => import('../../components/chat/main.vue' /* webpackChunkName: "components/chat-main" */).then(c => wrapFunctional(c.default || c)),
  CompareFixed: () => import('../../components/compare/compare-fixed.vue' /* webpackChunkName: "components/compare-fixed" */).then(c => wrapFunctional(c.default || c)),
  ComparePage: () => import('../../components/compare/compare-page.vue' /* webpackChunkName: "components/compare-page" */).then(c => wrapFunctional(c.default || c)),
  DetailMain: () => import('../../components/detail/main.vue' /* webpackChunkName: "components/detail-main" */).then(c => wrapFunctional(c.default || c)),
  EditorCkEditor: () => import('../../components/editor/ck-editor.vue' /* webpackChunkName: "components/editor-ck-editor" */).then(c => wrapFunctional(c.default || c)),
  HomeMain: () => import('../../components/home/main.vue' /* webpackChunkName: "components/home-main" */).then(c => wrapFunctional(c.default || c)),
  ListMain: () => import('../../components/list/main.vue' /* webpackChunkName: "components/list-main" */).then(c => wrapFunctional(c.default || c)),
  NewAdsStep1ChooseMainCategory: () => import('../../components/new-ads/step1-chooseMainCategory.vue' /* webpackChunkName: "components/new-ads-step1-choose-main-category" */).then(c => wrapFunctional(c.default || c)),
  NewAdsStep2ChooseCategory: () => import('../../components/new-ads/step2-chooseCategory.vue' /* webpackChunkName: "components/new-ads-step2-choose-category" */).then(c => wrapFunctional(c.default || c)),
  NewAdsStep3Forms: () => import('../../components/new-ads/step3-forms.vue' /* webpackChunkName: "components/new-ads-step3-forms" */).then(c => wrapFunctional(c.default || c)),
  ProductCardBestProductCard: () => import('../../components/product-card/best-product.card.vue' /* webpackChunkName: "components/product-card-best-product-card" */).then(c => wrapFunctional(c.default || c)),
  ProductCardHorizontalProduct: () => import('../../components/product-card/horizontal-product.vue' /* webpackChunkName: "components/product-card-horizontal-product" */).then(c => wrapFunctional(c.default || c)),
  ProductCard: () => import('../../components/product-card/product-card.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c)),
  ProfileAds: () => import('../../components/profile/ads.vue' /* webpackChunkName: "components/profile-ads" */).then(c => wrapFunctional(c.default || c)),
  ProfileChangePassword: () => import('../../components/profile/change-password.vue' /* webpackChunkName: "components/profile-change-password" */).then(c => wrapFunctional(c.default || c)),
  ProfileChangeProfileImage: () => import('../../components/profile/change-profile-image.vue' /* webpackChunkName: "components/profile-change-profile-image" */).then(c => wrapFunctional(c.default || c)),
  ProfileFavorites: () => import('../../components/profile/favorites.vue' /* webpackChunkName: "components/profile-favorites" */).then(c => wrapFunctional(c.default || c)),
  ProfileInformation: () => import('../../components/profile/information.vue' /* webpackChunkName: "components/profile-information" */).then(c => wrapFunctional(c.default || c)),
  ProfileSidebar: () => import('../../components/profile/sidebar.vue' /* webpackChunkName: "components/profile-sidebar" */).then(c => wrapFunctional(c.default || c)),
  SharedFaq: () => import('../../components/shared/faq.vue' /* webpackChunkName: "components/shared-faq" */).then(c => wrapFunctional(c.default || c)),
  SharedFooter: () => import('../../components/shared/footer.vue' /* webpackChunkName: "components/shared-footer" */).then(c => wrapFunctional(c.default || c)),
  SharedTitle: () => import('../../components/shared/title.vue' /* webpackChunkName: "components/shared-title" */).then(c => wrapFunctional(c.default || c)),
  AccountsComponentsLogin: () => import('../../components/accounts/components/login.vue' /* webpackChunkName: "components/accounts-components-login" */).then(c => wrapFunctional(c.default || c)),
  AccountsComponentsRegister: () => import('../../components/accounts/components/register.vue' /* webpackChunkName: "components/accounts-components-register" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsBody: () => import('../../components/chat/components/body.vue' /* webpackChunkName: "components/chat-components-body" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsFooter: () => import('../../components/chat/components/footer.vue' /* webpackChunkName: "components/chat-components-footer" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsHeader: () => import('../../components/chat/components/header.vue' /* webpackChunkName: "components/chat-components-header" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsCharterContent: () => import('../../components/detail/components/charter-content.vue' /* webpackChunkName: "components/detail-components-charter-content" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBar: () => import('../../components/detail/components/rightSideBar.vue' /* webpackChunkName: "components/detail-components-right-side-bar" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsSlider: () => import('../../components/detail/components/slider.vue' /* webpackChunkName: "components/detail-components-slider" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabs: () => import('../../components/detail/components/tabs.vue' /* webpackChunkName: "components/detail-components-tabs" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTitle: () => import('../../components/detail/components/title.vue' /* webpackChunkName: "components/detail-components-title" */).then(c => wrapFunctional(c.default || c)),
  HomeMainSection: () => import('../../components/home/components/home-main-section.vue' /* webpackChunkName: "components/home-main-section" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection2: () => import('../../components/home/components/section-2.vue' /* webpackChunkName: "components/home-components-section2" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection3Advantage: () => import('../../components/home/components/section-3-advantage.vue' /* webpackChunkName: "components/home-components-section3-advantage" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection4Ads: () => import('../../components/home/components/section-4-ads.vue' /* webpackChunkName: "components/home-components-section4-ads" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection5Opportunity: () => import('../../components/home/components/section-5-opportunity.vue' /* webpackChunkName: "components/home-components-section5-opportunity" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection6ApplyFaq: () => import('../../components/home/components/section-6-apply-faq.vue' /* webpackChunkName: "components/home-components-section6-apply-faq" */).then(c => wrapFunctional(c.default || c)),
  ListComponentsContent: () => import('../../components/list/components/content.vue' /* webpackChunkName: "components/list-components-content" */).then(c => wrapFunctional(c.default || c)),
  ListComponentsTitle: () => import('../../components/list/components/title.vue' /* webpackChunkName: "components/list-components-title" */).then(c => wrapFunctional(c.default || c)),
  SharedHeaderTop: () => import('../../components/shared/header/header-top.vue' /* webpackChunkName: "components/shared-header-top" */).then(c => wrapFunctional(c.default || c)),
  SharedHeader: () => import('../../components/shared/header/header.vue' /* webpackChunkName: "components/shared-header" */).then(c => wrapFunctional(c.default || c)),
  SharedHeaderMobileNav: () => import('../../components/shared/header/mobile-nav.vue' /* webpackChunkName: "components/shared-header-mobile-nav" */).then(c => wrapFunctional(c.default || c)),
  SharedHeaderNav: () => import('../../components/shared/header/nav.vue' /* webpackChunkName: "components/shared-header-nav" */).then(c => wrapFunctional(c.default || c)),
  SharedHeaderNavbarBrand: () => import('../../components/shared/header/navbar-brand.vue' /* webpackChunkName: "components/shared-header-navbar-brand" */).then(c => wrapFunctional(c.default || c)),
  SharedHeaderSearch: () => import('../../components/shared/header/search.vue' /* webpackChunkName: "components/shared-header-search" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsMessagesCenter: () => import('../../components/chat/components/messages/center.vue' /* webpackChunkName: "components/chat-components-messages-center" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsMessagesLeft: () => import('../../components/chat/components/messages/left.vue' /* webpackChunkName: "components/chat-components-messages-left" */).then(c => wrapFunctional(c.default || c)),
  ChatComponentsMessagesRight: () => import('../../components/chat/components/messages/right.vue' /* webpackChunkName: "components/chat-components-messages-right" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBarBooknow: () => import('../../components/detail/components/rightSideBar/booknow.vue' /* webpackChunkName: "components/detail-components-right-side-bar-booknow" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBarCharterOwner: () => import('../../components/detail/components/rightSideBar/charter-owner.vue' /* webpackChunkName: "components/detail-components-right-side-bar-charter-owner" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBarCharterWidget: () => import('../../components/detail/components/rightSideBar/charter-widget.vue' /* webpackChunkName: "components/detail-components-right-side-bar-charter-widget" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBarFastlyLogin: () => import('../../components/detail/components/rightSideBar/fastly-login.vue' /* webpackChunkName: "components/detail-components-right-side-bar-fastly-login" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsRightSideBarSimilarYatch: () => import('../../components/detail/components/rightSideBar/similar-yatch.vue' /* webpackChunkName: "components/detail-components-right-side-bar-similar-yatch" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsAccommodation: () => import('../../components/detail/components/tabs/accommodation.vue' /* webpackChunkName: "components/detail-components-tabs-accommodation" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsChat: () => import('../../components/detail/components/tabs/chat.vue' /* webpackChunkName: "components/detail-components-tabs-chat" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsCrew: () => import('../../components/detail/components/tabs/crew.vue' /* webpackChunkName: "components/detail-components-tabs-crew" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsOverview: () => import('../../components/detail/components/tabs/overview.vue' /* webpackChunkName: "components/detail-components-tabs-overview" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsSpecification: () => import('../../components/detail/components/tabs/specification.vue' /* webpackChunkName: "components/detail-components-tabs-specification" */).then(c => wrapFunctional(c.default || c)),
  DetailComponentsTabsWater: () => import('../../components/detail/components/tabs/water.vue' /* webpackChunkName: "components/detail-components-tabs-water" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection5Progress: () => import('../../components/home/components/section-5/progress.vue' /* webpackChunkName: "components/home-components-section5-progress" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection6Apply: () => import('../../components/home/components/section-6/apply.vue' /* webpackChunkName: "components/home-components-section6-apply" */).then(c => wrapFunctional(c.default || c)),
  HomeComponentsSection6Faq: () => import('../../components/home/components/section-6/faq.vue' /* webpackChunkName: "components/home-components-section6-faq" */).then(c => wrapFunctional(c.default || c)),
  ListComponentsContentFilter: () => import('../../components/list/components/content/filter.vue' /* webpackChunkName: "components/list-components-content-filter" */).then(c => wrapFunctional(c.default || c)),
  ListComponentsContentProductList: () => import('../../components/list/components/content/product-list.vue' /* webpackChunkName: "components/list-components-content-product-list" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
