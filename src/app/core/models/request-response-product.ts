export interface RequestResponseProduct {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:             string;
    name:           string;
    path_from_root: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                    string;
    site_id:               SiteID;
    title:                 string;
    seller:                Seller;
    price:                 number;
    prices:                Prices;
    sale_price:            null;
    currency_id:           CurrencyID;
    available_quantity:    number;
    sold_quantity:         number;
    buying_mode:           BuyingMode;
    listing_type_id:       ListingTypeID;
    stop_time:             Date;
    condition:             Condition;
    permalink:             string;
    thumbnail:             string;
    thumbnail_id:          string;
    accepts_mercadopago:   boolean;
    installments:          Installments;
    address:               Address;
    shipping:              Shipping;
    seller_address:        SellerAddress;
    attributes:            Attribute[];
    original_price:        number | null;
    category_id:           CategoryID;
    official_store_id:     null;
    domain_id:             DomainID;
    catalog_product_id:    null;
    tags:                  ResultTag[];
    order_backend:         number;
    use_thumbnail_id:      boolean;
    offer_score:           null;
    offer_share:           null;
    match_score:           null;
    winner_item_id:        null;
    melicoin:              null;
    differential_pricing?: DifferentialPricing;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    string;
    city_name:  string;
}

export enum StateID {
    CoAnt = "CO-ANT",
    CoCau = "CO-CAU",
    CoDc = "CO-DC",
    CoHui = "CO-HUI",
    CoNSA = "CO-NSA",
    CoVac = "CO-VAC",
}

export enum StateName {
    Antioquia = "Antioquia",
    BogotáDC = "Bogotá D.C.",
    Cauca = "Cauca",
    Huila = "Huila",
    NorteDeSantander = "Norte De Santander",
    ValleDelCauca = "Valle Del Cauca",
}

export interface Attribute {
    name:                 Name;
    value_id:             null | string;
    value_name:           null | string;
    value_struct:         null;
    attribute_group_name: AttributeGroupName;
    id:                   ID;
    values:               AttributeValue[];
    attribute_group_id:   AttributeGroupID;
    source:               number;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum ID {
    Brand = "BRAND",
    ItemCondition = "ITEM_CONDITION",
    Model = "MODEL",
}

export enum Name {
    CondiciónDelÍtem = "Condición del ítem",
    Marca = "Marca",
    Modelo = "Modelo",
}

export interface AttributeValue {
    id:     null | string;
    name:   null | string;
    struct: null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum CategoryID {
    Mco157289 = "MCO157289",
    Mco417370 = "MCO417370",
    Mco417374 = "MCO417374",
    Mco441465 = "MCO441465",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Cop = "COP",
}

export interface DifferentialPricing {
    id: number;
}

export enum DomainID {
    McoPants = "MCO-PANTS",
    McoSportPants = "MCO-SPORT_PANTS",
    McoSportswearSets = "MCO-SPORTSWEAR_SETS",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      any[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: CurrencyID;
}

export interface Price {
    id:                    string;
    type:                  Type;
    amount:                number;
    regular_amount:        number | null;
    currency_id:           CurrencyID;
    last_updated:          Date;
    conditions:            Conditions;
    exchange_rate_context: ExchangeRateContext;
    metadata:              Metadata;
}

export interface Conditions {
    context_restrictions: string[];
    start_time:           Date | null;
    end_time:             Date | null;
    eligible:             boolean;
}

export enum ExchangeRateContext {
    Default = "DEFAULT",
}

export interface Metadata {
    campaign_id?:                  CampaignID;
    promotion_id?:                 string;
    promotion_type?:               PromotionType;
    discount_meli_amount?:         number;
    campaign_discount_percentage?: number;
    campaign_end_date?:            Date;
    order_item_price?:             number;
}

export enum CampaignID {
    Mco3916 = "MCO3916",
    Mco3990 = "MCO3990",
    PMco4115002 = "P-MCO4115002",
}

export enum PromotionType {
    Campaign = "campaign",
    Custom = "custom",
    DealOfTheDay = "deal_of_the_day",
    Lightning = "lightning",
    MarketplaceCampaign = "marketplace_campaign",
}

export enum Type {
    Promotion = "promotion",
    Standard = "standard",
}

export interface Seller {
    id:                 number;
    permalink:          null;
    registration_date:  null;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               null;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          Mode;
    tags:          ShippingTag[];
    logistic_type: LogisticType;
    store_pick_up: boolean;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    DropOff = "drop_off",
    Fulfillment = "fulfillment",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum ShippingTag {
    FSThresholdMcoChangeApr2021 = "fs_threshold_mco_change_apr2021",
    FSThresholdMcoChangeJul2021 = "fs_threshold_mco_change_jul2021",
    Fulfillment = "fulfillment",
    MandatoryFreeShipping = "mandatory_free_shipping",
    SelfServiceIn = "self_service_in",
    SelfServiceOut = "self_service_out",
}

export enum SiteID {
    Mco = "MCO",
}

export enum ResultTag {
    BestSellerCandidate = "best_seller_candidate",
    CartEligible = "cart_eligible",
    DraggedBidsAndVisits = "dragged_bids_and_visits",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    LoyaltyDiscountEligible = "loyalty_discount_eligible",
    ShippingGuaranteed = "shipping_guaranteed",
    StandardPriceByChannel = "standard_price_by_channel",
}
