import { wrapFunctional } from './utils'

export { default as Alert } from '../../components/global/alert/alert.vue'
export { default as AvatarErAvatar } from '../../components/global/avatar/er-avatar.vue'
export { default as IconMIcon } from '../../components/global/icon/m-icon.vue'
export { default as ButtonsErPrimaryButton } from '../../components/global/buttons/er-primary-button.vue'
export { default as InputGlobalFormInput } from '../../components/global/input/global-form-input.vue'
export { default as InputGlobalInput } from '../../components/global/input/global-input.vue'
export { default as LoadingCliLoading } from '../../components/global/loading/cli-loading.vue'
export { default as LoadingServerLoading } from '../../components/global/loading/server-loading.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as AccountsMain } from '../../components/accounts/main.vue'
export { default as ChatMain } from '../../components/chat/main.vue'
export { default as CompareFixed } from '../../components/compare/compare-fixed.vue'
export { default as ComparePage } from '../../components/compare/compare-page.vue'
export { default as DetailMain } from '../../components/detail/main.vue'
export { default as EditorCkEditor } from '../../components/editor/ck-editor.vue'
export { default as HomeMain } from '../../components/home/main.vue'
export { default as ListMain } from '../../components/list/main.vue'
export { default as NewAdsStep1ChooseMainCategory } from '../../components/new-ads/step1-chooseMainCategory.vue'
export { default as NewAdsStep2ChooseCategory } from '../../components/new-ads/step2-chooseCategory.vue'
export { default as NewAdsStep3Forms } from '../../components/new-ads/step3-forms.vue'
export { default as ProductCardBestProductCard } from '../../components/product-card/best-product.card.vue'
export { default as ProductCardHorizontalProduct } from '../../components/product-card/horizontal-product.vue'
export { default as ProductCard } from '../../components/product-card/product-card.vue'
export { default as ProfileAds } from '../../components/profile/ads.vue'
export { default as ProfileChangePassword } from '../../components/profile/change-password.vue'
export { default as ProfileChangeProfileImage } from '../../components/profile/change-profile-image.vue'
export { default as ProfileFavorites } from '../../components/profile/favorites.vue'
export { default as ProfileInformation } from '../../components/profile/information.vue'
export { default as ProfileSidebar } from '../../components/profile/sidebar.vue'
export { default as SharedFaq } from '../../components/shared/faq.vue'
export { default as SharedFooter } from '../../components/shared/footer.vue'
export { default as SharedTitle } from '../../components/shared/title.vue'
export { default as AccountsComponentsLogin } from '../../components/accounts/components/login.vue'
export { default as AccountsComponentsRegister } from '../../components/accounts/components/register.vue'
export { default as ChatComponentsBody } from '../../components/chat/components/body.vue'
export { default as ChatComponentsFooter } from '../../components/chat/components/footer.vue'
export { default as ChatComponentsHeader } from '../../components/chat/components/header.vue'
export { default as DetailComponentsCharterContent } from '../../components/detail/components/charter-content.vue'
export { default as DetailComponentsRightSideBar } from '../../components/detail/components/rightSideBar.vue'
export { default as DetailComponentsSlider } from '../../components/detail/components/slider.vue'
export { default as DetailComponentsTabs } from '../../components/detail/components/tabs.vue'
export { default as DetailComponentsTitle } from '../../components/detail/components/title.vue'
export { default as HomeMainSection } from '../../components/home/components/home-main-section.vue'
export { default as HomeComponentsSection2 } from '../../components/home/components/section-2.vue'
export { default as HomeComponentsSection3Advantage } from '../../components/home/components/section-3-advantage.vue'
export { default as HomeComponentsSection4Ads } from '../../components/home/components/section-4-ads.vue'
export { default as HomeComponentsSection5Opportunity } from '../../components/home/components/section-5-opportunity.vue'
export { default as HomeComponentsSection6ApplyFaq } from '../../components/home/components/section-6-apply-faq.vue'
export { default as ListComponentsContent } from '../../components/list/components/content.vue'
export { default as ListComponentsTitle } from '../../components/list/components/title.vue'
export { default as SharedHeaderTop } from '../../components/shared/header/header-top.vue'
export { default as SharedHeader } from '../../components/shared/header/header.vue'
export { default as SharedHeaderMobileNav } from '../../components/shared/header/mobile-nav.vue'
export { default as SharedHeaderNav } from '../../components/shared/header/nav.vue'
export { default as SharedHeaderNavbarBrand } from '../../components/shared/header/navbar-brand.vue'
export { default as SharedHeaderSearch } from '../../components/shared/header/search.vue'
export { default as ChatComponentsMessagesCenter } from '../../components/chat/components/messages/center.vue'
export { default as ChatComponentsMessagesLeft } from '../../components/chat/components/messages/left.vue'
export { default as ChatComponentsMessagesRight } from '../../components/chat/components/messages/right.vue'
export { default as DetailComponentsRightSideBarBooknow } from '../../components/detail/components/rightSideBar/booknow.vue'
export { default as DetailComponentsRightSideBarCharterOwner } from '../../components/detail/components/rightSideBar/charter-owner.vue'
export { default as DetailComponentsRightSideBarCharterWidget } from '../../components/detail/components/rightSideBar/charter-widget.vue'
export { default as DetailComponentsRightSideBarFastlyLogin } from '../../components/detail/components/rightSideBar/fastly-login.vue'
export { default as DetailComponentsRightSideBarSimilarYatch } from '../../components/detail/components/rightSideBar/similar-yatch.vue'
export { default as DetailComponentsTabsAccommodation } from '../../components/detail/components/tabs/accommodation.vue'
export { default as DetailComponentsTabsChat } from '../../components/detail/components/tabs/chat.vue'
export { default as DetailComponentsTabsCrew } from '../../components/detail/components/tabs/crew.vue'
export { default as DetailComponentsTabsOverview } from '../../components/detail/components/tabs/overview.vue'
export { default as DetailComponentsTabsSpecification } from '../../components/detail/components/tabs/specification.vue'
export { default as DetailComponentsTabsWater } from '../../components/detail/components/tabs/water.vue'
export { default as HomeComponentsSection5Progress } from '../../components/home/components/section-5/progress.vue'
export { default as HomeComponentsSection6Apply } from '../../components/home/components/section-6/apply.vue'
export { default as HomeComponentsSection6Faq } from '../../components/home/components/section-6/faq.vue'
export { default as ListComponentsContentFilter } from '../../components/list/components/content/filter.vue'
export { default as ListComponentsContentProductList } from '../../components/list/components/content/product-list.vue'

export const LazyAlert = import('../../components/global/alert/alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c))
export const LazyAvatarErAvatar = import('../../components/global/avatar/er-avatar.vue' /* webpackChunkName: "components/avatar-er-avatar" */).then(c => wrapFunctional(c.default || c))
export const LazyIconMIcon = import('../../components/global/icon/m-icon.vue' /* webpackChunkName: "components/icon-m-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyButtonsErPrimaryButton = import('../../components/global/buttons/er-primary-button.vue' /* webpackChunkName: "components/buttons-er-primary-button" */).then(c => wrapFunctional(c.default || c))
export const LazyInputGlobalFormInput = import('../../components/global/input/global-form-input.vue' /* webpackChunkName: "components/input-global-form-input" */).then(c => wrapFunctional(c.default || c))
export const LazyInputGlobalInput = import('../../components/global/input/global-input.vue' /* webpackChunkName: "components/input-global-input" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingCliLoading = import('../../components/global/loading/cli-loading.vue' /* webpackChunkName: "components/loading-cli-loading" */).then(c => wrapFunctional(c.default || c))
export const LazyLoadingServerLoading = import('../../components/global/loading/server-loading.vue' /* webpackChunkName: "components/loading-server-loading" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsMain = import('../../components/accounts/main.vue' /* webpackChunkName: "components/accounts-main" */).then(c => wrapFunctional(c.default || c))
export const LazyChatMain = import('../../components/chat/main.vue' /* webpackChunkName: "components/chat-main" */).then(c => wrapFunctional(c.default || c))
export const LazyCompareFixed = import('../../components/compare/compare-fixed.vue' /* webpackChunkName: "components/compare-fixed" */).then(c => wrapFunctional(c.default || c))
export const LazyComparePage = import('../../components/compare/compare-page.vue' /* webpackChunkName: "components/compare-page" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailMain = import('../../components/detail/main.vue' /* webpackChunkName: "components/detail-main" */).then(c => wrapFunctional(c.default || c))
export const LazyEditorCkEditor = import('../../components/editor/ck-editor.vue' /* webpackChunkName: "components/editor-ck-editor" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeMain = import('../../components/home/main.vue' /* webpackChunkName: "components/home-main" */).then(c => wrapFunctional(c.default || c))
export const LazyListMain = import('../../components/list/main.vue' /* webpackChunkName: "components/list-main" */).then(c => wrapFunctional(c.default || c))
export const LazyNewAdsStep1ChooseMainCategory = import('../../components/new-ads/step1-chooseMainCategory.vue' /* webpackChunkName: "components/new-ads-step1-choose-main-category" */).then(c => wrapFunctional(c.default || c))
export const LazyNewAdsStep2ChooseCategory = import('../../components/new-ads/step2-chooseCategory.vue' /* webpackChunkName: "components/new-ads-step2-choose-category" */).then(c => wrapFunctional(c.default || c))
export const LazyNewAdsStep3Forms = import('../../components/new-ads/step3-forms.vue' /* webpackChunkName: "components/new-ads-step3-forms" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCardBestProductCard = import('../../components/product-card/best-product.card.vue' /* webpackChunkName: "components/product-card-best-product-card" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCardHorizontalProduct = import('../../components/product-card/horizontal-product.vue' /* webpackChunkName: "components/product-card-horizontal-product" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCard = import('../../components/product-card/product-card.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileAds = import('../../components/profile/ads.vue' /* webpackChunkName: "components/profile-ads" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileChangePassword = import('../../components/profile/change-password.vue' /* webpackChunkName: "components/profile-change-password" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileChangeProfileImage = import('../../components/profile/change-profile-image.vue' /* webpackChunkName: "components/profile-change-profile-image" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileFavorites = import('../../components/profile/favorites.vue' /* webpackChunkName: "components/profile-favorites" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileInformation = import('../../components/profile/information.vue' /* webpackChunkName: "components/profile-information" */).then(c => wrapFunctional(c.default || c))
export const LazyProfileSidebar = import('../../components/profile/sidebar.vue' /* webpackChunkName: "components/profile-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazySharedFaq = import('../../components/shared/faq.vue' /* webpackChunkName: "components/shared-faq" */).then(c => wrapFunctional(c.default || c))
export const LazySharedFooter = import('../../components/shared/footer.vue' /* webpackChunkName: "components/shared-footer" */).then(c => wrapFunctional(c.default || c))
export const LazySharedTitle = import('../../components/shared/title.vue' /* webpackChunkName: "components/shared-title" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsComponentsLogin = import('../../components/accounts/components/login.vue' /* webpackChunkName: "components/accounts-components-login" */).then(c => wrapFunctional(c.default || c))
export const LazyAccountsComponentsRegister = import('../../components/accounts/components/register.vue' /* webpackChunkName: "components/accounts-components-register" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsBody = import('../../components/chat/components/body.vue' /* webpackChunkName: "components/chat-components-body" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsFooter = import('../../components/chat/components/footer.vue' /* webpackChunkName: "components/chat-components-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsHeader = import('../../components/chat/components/header.vue' /* webpackChunkName: "components/chat-components-header" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsCharterContent = import('../../components/detail/components/charter-content.vue' /* webpackChunkName: "components/detail-components-charter-content" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBar = import('../../components/detail/components/rightSideBar.vue' /* webpackChunkName: "components/detail-components-right-side-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsSlider = import('../../components/detail/components/slider.vue' /* webpackChunkName: "components/detail-components-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabs = import('../../components/detail/components/tabs.vue' /* webpackChunkName: "components/detail-components-tabs" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTitle = import('../../components/detail/components/title.vue' /* webpackChunkName: "components/detail-components-title" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeMainSection = import('../../components/home/components/home-main-section.vue' /* webpackChunkName: "components/home-main-section" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection2 = import('../../components/home/components/section-2.vue' /* webpackChunkName: "components/home-components-section2" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection3Advantage = import('../../components/home/components/section-3-advantage.vue' /* webpackChunkName: "components/home-components-section3-advantage" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection4Ads = import('../../components/home/components/section-4-ads.vue' /* webpackChunkName: "components/home-components-section4-ads" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection5Opportunity = import('../../components/home/components/section-5-opportunity.vue' /* webpackChunkName: "components/home-components-section5-opportunity" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection6ApplyFaq = import('../../components/home/components/section-6-apply-faq.vue' /* webpackChunkName: "components/home-components-section6-apply-faq" */).then(c => wrapFunctional(c.default || c))
export const LazyListComponentsContent = import('../../components/list/components/content.vue' /* webpackChunkName: "components/list-components-content" */).then(c => wrapFunctional(c.default || c))
export const LazyListComponentsTitle = import('../../components/list/components/title.vue' /* webpackChunkName: "components/list-components-title" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeaderTop = import('../../components/shared/header/header-top.vue' /* webpackChunkName: "components/shared-header-top" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeader = import('../../components/shared/header/header.vue' /* webpackChunkName: "components/shared-header" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeaderMobileNav = import('../../components/shared/header/mobile-nav.vue' /* webpackChunkName: "components/shared-header-mobile-nav" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeaderNav = import('../../components/shared/header/nav.vue' /* webpackChunkName: "components/shared-header-nav" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeaderNavbarBrand = import('../../components/shared/header/navbar-brand.vue' /* webpackChunkName: "components/shared-header-navbar-brand" */).then(c => wrapFunctional(c.default || c))
export const LazySharedHeaderSearch = import('../../components/shared/header/search.vue' /* webpackChunkName: "components/shared-header-search" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsMessagesCenter = import('../../components/chat/components/messages/center.vue' /* webpackChunkName: "components/chat-components-messages-center" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsMessagesLeft = import('../../components/chat/components/messages/left.vue' /* webpackChunkName: "components/chat-components-messages-left" */).then(c => wrapFunctional(c.default || c))
export const LazyChatComponentsMessagesRight = import('../../components/chat/components/messages/right.vue' /* webpackChunkName: "components/chat-components-messages-right" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBarBooknow = import('../../components/detail/components/rightSideBar/booknow.vue' /* webpackChunkName: "components/detail-components-right-side-bar-booknow" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBarCharterOwner = import('../../components/detail/components/rightSideBar/charter-owner.vue' /* webpackChunkName: "components/detail-components-right-side-bar-charter-owner" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBarCharterWidget = import('../../components/detail/components/rightSideBar/charter-widget.vue' /* webpackChunkName: "components/detail-components-right-side-bar-charter-widget" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBarFastlyLogin = import('../../components/detail/components/rightSideBar/fastly-login.vue' /* webpackChunkName: "components/detail-components-right-side-bar-fastly-login" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsRightSideBarSimilarYatch = import('../../components/detail/components/rightSideBar/similar-yatch.vue' /* webpackChunkName: "components/detail-components-right-side-bar-similar-yatch" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsAccommodation = import('../../components/detail/components/tabs/accommodation.vue' /* webpackChunkName: "components/detail-components-tabs-accommodation" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsChat = import('../../components/detail/components/tabs/chat.vue' /* webpackChunkName: "components/detail-components-tabs-chat" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsCrew = import('../../components/detail/components/tabs/crew.vue' /* webpackChunkName: "components/detail-components-tabs-crew" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsOverview = import('../../components/detail/components/tabs/overview.vue' /* webpackChunkName: "components/detail-components-tabs-overview" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsSpecification = import('../../components/detail/components/tabs/specification.vue' /* webpackChunkName: "components/detail-components-tabs-specification" */).then(c => wrapFunctional(c.default || c))
export const LazyDetailComponentsTabsWater = import('../../components/detail/components/tabs/water.vue' /* webpackChunkName: "components/detail-components-tabs-water" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection5Progress = import('../../components/home/components/section-5/progress.vue' /* webpackChunkName: "components/home-components-section5-progress" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection6Apply = import('../../components/home/components/section-6/apply.vue' /* webpackChunkName: "components/home-components-section6-apply" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeComponentsSection6Faq = import('../../components/home/components/section-6/faq.vue' /* webpackChunkName: "components/home-components-section6-faq" */).then(c => wrapFunctional(c.default || c))
export const LazyListComponentsContentFilter = import('../../components/list/components/content/filter.vue' /* webpackChunkName: "components/list-components-content-filter" */).then(c => wrapFunctional(c.default || c))
export const LazyListComponentsContentProductList = import('../../components/list/components/content/product-list.vue' /* webpackChunkName: "components/list-components-content-product-list" */).then(c => wrapFunctional(c.default || c))
