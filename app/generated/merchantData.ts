/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * A referred object was not found
 * @example {"code":"PERSON_NOT_FOUND","description":"The person with the referred id cannot be found"}
 */
export interface NotFound {
  /** The specific error code. Follows the format <specific error> */
  code: string;

  /** Technical description in English */
  description: string;

  /** The actual errors, in nested format */
  errors?: object;
}

/**
 * Company
 */
export interface Company {
  authorizer?: Person | null;

  /**
   * @format uuid
   * @example 4b8fc17c-89e7-43b8-8f19-be6c329e1c5f
   */
  authorizer_id?: string;

  /**
   * Billing E-mail
   * @format email
   * @example company@saltpay.co
   */
  billing_email?: string | null;
  charging_bank_account?: ChargingBankAccount | null;

  /**
   * Company ID
   * @format uuid
   * @example 78868a92-553e-470d-9ae5-bc30a6655109
   */
  id?: string;

  /**
   * Datetime of creation (ISO 8601)
   * @format date-time
   */
  inserted_at?: string;

  /**
   * How a company is organised, in regard to its legal status
   * @example LIMITED
   */
  legal_structure?: "LIMITED" | "SOLE_TRADER" | null;

  /**
   * Organisation ID that the Company belongs to
   * @format uuid
   * @example 78868a92-553e-470d-9ae5-bc30a6655129
   */
  organisation_id?: string;
  people_roles?: PersonRole[];

  /** Legal business registered address */
  registered_address?: Address | null;

  /**
   * Registration business name
   * @example Company Name
   */
  registered_name?: string;

  /**
   * Registration business number. Must be unique per country
   * @example 123456789
   */
  registered_number?: string | null;
  shareholders?: PersonRole[];

  /**
   * Number of registered stores
   * @example 3
   */
  store_count?: number | null;

  /**
   * Datetime of last update (ISO 8601)
   * @format date-time
   */
  updated_at?: string;

  /**
   * Value Added Tax (VAT)
   * @example IS123456
   */
  vat_number?: string | null;
}

/**
 * Person Response
 */
export type PersonResponse = Person;

/**
 * The Person data
 */
export interface Person {
  address?: Address | null;

  /**
   * Person's birth date following the `yyyy-MM-dd` format (Date, ISO 8601)
   * @format date
   * @example 1991-09-24
   */
  birth_date?: string | null;

  /** Companies where the person has a role */
  companies_roles?: { company_id?: string; roles?: "UBO" | "DIRECTOR" }[];

  /**
   * Country code (ISO 3166-1 alpha-2) of the person's national id issuer. (country cannot be null if national_id_number is presented)
   * @example PT
   */
  country?: string | null;

  /** Person Documents */
  documents?: Document[] | null;

  /**
   * Email address
   * @format email
   * @example firstlast@email.com
   */
  email?: string | null;

  /**
   * First Name
   * @example First
   */
  first_name?: string;

  /**
   * Person UUID
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  id?: string;

  /** Companies where the person is an authorizer */
  is_authorizer_for?: string[] | null;

  /** Companies where the person is an ubo */
  is_shareholder_for?: string[] | null;

  /**
   * Person last name
   * @example Last
   */
  last_name?: string;

  /** Language code (ISO 639-1) with language tag (BCP 47) to define the user's language, date & time formatting convention, monetary & decimal formatting conventions. */
  locale?: Locale;

  /**
   * Person middle name
   * @example Middle
   */
  middle_name?: string | null;

  /**
   * Person national ID
   * @example 12345678991
   */
  national_id_number?: string | null;

  /**
   * Phone country code (ITU-T E.164)
   * @pattern ^[0-9]{1,5}$
   * @example 351
   */
  phone_country_code?: string | null;

  /**
   * Phone number without country code
   * @pattern ^[0-9]{4,10}$
   * @example 914003982
   */
  phone_number?: string | null;
}

/**
 * Store
 */
export interface Store {
  /**
   * Is the Store Active?
   * @example true
   */
  active?: boolean;

  /** Address for a store. Required for PHYSICAL stores. */
  address?: Address | null;

  /**
   * Billing E-mail
   * @format email
   * @example store@saltpay.co
   */
  billing_email?: string | null;
  charging_bank_account?: ChargingBankAccount | null;

  /**
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  company_id?: string;

  /**
   * Country code (ISO 3166-1 alpha-2)
   * @example IS
   */
  country?: string;

  /** The address to which the assets are to be delivered */
  delivery_address?: Address | null;

  /**
   * Store ID
   * @format uuid
   * @example 1004f1fc-be52-4405-9d4f-c60f0d8e990a
   */
  id?: string;

  /**
   * Datetime of creation (ISO 8601)
   * @format date-time
   */
  inserted_at?: string;

  /**
   * Four-digit number listed in ISO 18245 for retail financial services
   * @example 0742
   */
  mcc?: string | null;

  /**
   * Store Name
   * @example Store Name
   */
  name?: string;

  /**
   * Phone country code (ITU-T E.164)
   * @pattern ^[0-9]{1,5}$
   * @example 351
   */
  phone_country_code?: string | null;

  /**
   * Phone number without country code
   * @pattern ^[0-9]{4,10}$
   * @example 914003982
   */
  phone_number?: string | null;

  /**
   * Store short id. It is composed of a 2-digit country code (ISO 639-1) followed by 7 digits and a checksum digit
   * @example IS12345675
   */
  short_id?: string | null;

  /**
   * Supported store type
   * @example PHYSICAL
   */
  store_type?: "PHYSICAL" | "DIGITAL" | null;

  /**
   * Datetime of last update (ISO 8601)
   * @format date-time
   */
  updated_at?: string;

  /**
   * URL for the store's website. Required for DIGITAL stores.
   * @format url
   * @example https://my-store.com
   */
  url?: string | null;
}

/**
 * Language code (ISO 639-1) with language tag (BCP 47) to define the user's language, date & time formatting convention, monetary & decimal formatting conventions.
 */
export enum Locale {
  AfZA = "af-ZA",
  AmET = "am-ET",
  BeBY = "be-BY",
  BgBG = "bg-BG",
  CaES = "ca-ES",
  CsCZ = "cs-CZ",
  DaDK = "da-DK",
  DeAT = "de-AT",
  DeCH = "de-CH",
  DeDE = "de-DE",
  ElGR = "el-GR",
  EnAU = "en-AU",
  EnCA = "en-CA",
  EnGB = "en-GB",
  EnIE = "en-IE",
  EnNZ = "en-NZ",
  EnUS = "en-US",
  EsES = "es-ES",
  EtEE = "et-EE",
  EuES = "eu-ES",
  FiFI = "fi-FI",
  FrBE = "fr-BE",
  FrCA = "fr-CA",
  FrCH = "fr-CH",
  FrFR = "fr-FR",
  HeIL = "he-IL",
  HiIN = "hi-IN",
  HrHR = "hr-HR",
  HuHU = "hu-HU",
  HyAM = "hy-AM",
  IsIS = "is-IS",
  ItCH = "it-CH",
  ItIT = "it-IT",
  JaJP = "ja-JP",
  KkKZ = "kk-KZ",
  KoKR = "ko-KR",
  LtLT = "lt-LT",
  NlBE = "nl-BE",
  NlNL = "nl-NL",
  NoNO = "no-NO",
  PlPL = "pl-PL",
  PtBR = "pt-BR",
  PtPT = "pt-PT",
  RoRO = "ro-RO",
  RuRU = "ru-RU",
  SkSK = "sk-SK",
  SlSI = "sl-SI",
  SrYU = "sr-YU",
  SvSE = "sv-SE",
  TrTR = "tr-TR",
  UkUA = "uk-UA",
  ZhCN = "zh-CN",
  ZhHK = "zh-HK",
  ZhTW = "zh-TW",
}

/**
 * Address
 */
export interface Address {
  /**
   * City
   * @example Some City
   */
  city?: string;

  /**
   * Country code (ISO 3166-1 alpha-2)
   * @example IS
   */
  country?: string;

  /**
   * Address ID
   * @format uuid
   * @example 78868a92-553e-470d-9ae5-bc30a6655109
   */
  id?: string;

  /**
   * State
   * @example Some State
   */
  state?: string | null;

  /**
   * Street Address Line 1
   * @example Street A
   */
  street_address_line_1?: string;

  /**
   * Street Address Line 2
   * @example Building B
   */
  street_address_line_2?: string | null;

  /**
   * Street Address Line 3
   * @example Some additional data
   */
  street_address_line_3?: string | null;

  /**
   * Zipcode
   * @example 24320000
   */
  zipcode?: string | null;
}

/**
 * Bank account to charge the customer
 */
export interface ChargingBankAccount {
  /**
   * Bank account currency code (ISO-4217 alpha-3)
   * @example EUR
   */
  bank_currency?: string;

  /** Bank routing details for the bank account. It is required if `iban` is not set */
  bank_route?: BankRoute;

  /**
   * Language code (ISO 639-1) with language tag (BCP 47) for invoices and billing-related data
   * @example en-US
   */
  billing_locale?:
    | "af-ZA"
    | "am-ET"
    | "be-BY"
    | "bg-BG"
    | "ca-ES"
    | "cs-CZ"
    | "da-DK"
    | "de-AT"
    | "de-CH"
    | "de-DE"
    | "el-GR"
    | "en-AU"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-NZ"
    | "en-US"
    | "es-ES"
    | "et-EE"
    | "eu-ES"
    | "fi-FI"
    | "fr-BE"
    | "fr-CA"
    | "fr-CH"
    | "fr-FR"
    | "he-IL"
    | "hi-IN"
    | "hr-HR"
    | "hu-HU"
    | "hy-AM"
    | "is-IS"
    | "it-CH"
    | "it-IT"
    | "ja-JP"
    | "kk-KZ"
    | "ko-KR"
    | "lt-LT"
    | "nl-BE"
    | "nl-NL"
    | "no-NO"
    | "pl-PL"
    | "pt-BR"
    | "pt-PT"
    | "ro-RO"
    | "ru-RU"
    | "sk-SK"
    | "sl-SI"
    | "sr-YU"
    | "sv-SE"
    | "tr-TR"
    | "uk-UA"
    | "zh-CN"
    | "zh-HK"
    | "zh-TW";

  /**
   * IBAN
   * International Bank Account Number (IBAN, ISO 13616). If set, the `bank_route` will be ignored
   * @format ^[A-Z]{2}[0-9]+$
   * @example GB24MODR04007557431620
   */
  iban?: string;

  /**
   * Charging bank account ID
   * @format uuid
   * @example 0fa1ae62-63a0-47db-a0e4-b277e84388ab
   */
  id?: string;
}

/**
 * Bad request parameters
 * @example {"code":"INVALID_PAYLOAD","description":"The payload has validation errors and cannot be processed","errors":{"name":["can't be blank"],"phone":["should be at least %{count} character(s)"]}}
 */
export interface BadRequestParameters {
  /** The specific error code. Follows the format <specific error> */
  code: string;

  /** Technical description in English */
  description: string;

  /** The actual errors, in nested format */
  errors?: object;
}

/**
 * List of companies response body
 */
export interface ListCompaniesResponse {
  companies: Company[];
}

export interface ObjectVersion {
  /**
   * Sequentially incremented number that holds the current version of the object.
   * @example 1
   */
  version?: number;
}

/**
 * Company response body
 */
export type CompanyResponse = Company;

/**
 * Body for creating a company
 */
export type CreateCompanyRequest = Company & { charging_bank_account?: ChargingBankAccount; owner_user_id?: string } & {
  registered_address?: Address;
};

/**
 * NIB Routing Scheme for Portugal
 */
export interface RoutingSchemeForPortugal {
  /**
   * Portuguese Bank Account Number (NIB)
   * @format ^[0-9]{21}$
   * @example 000201231234567890154
   */
  nib: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example PT
   */
  scheme: string;
}

/**
 * Routing Scheme for Slovakia
 */
export interface RoutingSchemeForSlovakia {
  /**
   * Account number
   * @format ^[0-9]{10}$
   * @example 8742637541
   */
  account_number: string;

  /**
   * Account prefix (optional)
   * @format ^[0-9]{0,6}$
   * @example 19
   */
  account_prefix?: string | null;

  /**
   * Bank code
   * @format ^[0-9]{4}$
   * @example 1200
   */
  bank_code: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example SK
   */
  scheme: string;
}

/**
 * Routing Scheme for Great Britain
 */
export interface RoutingSchemeForGreatBritain {
  /**
   * Account number
   * @format ^[0-9]{8}$
   * @example 57431620
   */
  account_number: string;

  /**
   * The first four (4) letters from BIC/SWIFT code
   * @format ^[A-Z]{4}$
   * @example MODR
   */
  bank_identifier: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example GB
   */
  scheme: string;

  /**
   * Sort code
   * @format ^[0-9]{6}$
   * @example 040075
   */
  sort_code: string;
}

/**
 * International Bank Account Number (IBAN, ISO 13616). If set, the `bank_route` will be ignored
 * @format ^[A-Z]{2}[0-9]+$
 * @example GB24MODR04007557431620
 */
export type IBAN = string;

/**
 * Server error response code that indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server
 * @example {"code":"PARTNER_UNEXPECTED_RESPONSE","description":"A third-party API has returned an invalid response"}
 */
export interface BadGateway {
  /** The specific error code. Follows the format <specific error> */
  code: string;

  /** Technical description in English */
  description: string;

  /** The actual errors, in nested format */
  errors?: object;
}

/**
 * Version
 */
export interface Version {
  /** Unique identifier of the requester. This is an old field for backward compatibility, it will return either an ID or an Email */
  change_made_by?: string | null;

  /**
   * Unique identifier of the service account from the requester. Only required if no change_made_by_user_account is provided.
   * @format uuid
   */
  change_made_by_service_account?: string | null;

  /** Unique identifier of the user account from the requester. Only required if no change_made_by_service_account is provided. */
  change_made_by_user_account?: string | null;

  /**
   * Datetime of change (ISO 8601)
   * @format date-time
   */
  changed_on: string;

  /** Dynamic: Map of all fields that changed in the object, with their respective new values */
  changes: object;

  /** Type of change */
  event: "INSERT" | "UPDATE" | "DELETE";

  /** Version ID */
  id?: number;

  /**
   * ID of changed object
   * @format uuid
   */
  record_id: string;
}

/**
 * Body for updating a person
 * @example {"middle_name":"Updated Name","version":1}
 */
export type UpdatePersonRequest = Person & ObjectVersion;

/**
 * Body for upload document
 */
export interface UploadDocumentRequest {
  /**
   * Company UUID. Is mutually excluse with `person_id`.
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  company_id?: string;

  /**
   * File Base 64 encoded. Same as `image_base64`.
   * @example QUJD
   */
  file_base64?: string;

  /**
   * Image Base 64 encoded
   * @example QUJD
   */
  image_base64?: string;

  /**
   * Person UUID. Is mutually excluse with `company_id`.
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  person_id?: string;

  /**
   * Document type. If `company_id` is set, only `PROOF_OF_OFFICE_REGISTERED` is allowed.
   * @example DRIVER_LICENSE_BACK
   */
  type:
    | "ID_FRONT"
    | "ID_BACK"
    | "PASSPORT_FRONT"
    | "DRIVER_LICENSE_FRONT"
    | "DRIVER_LICENSE_BACK"
    | "PROOF_OF_ADDRESS"
    | "PROOF_OF_OFFICE_REGISTERED";
}

/**
 * List of stores response body
 */
export interface ListStoresResponse {
  /** List of Stores */
  stores: Store[];
}

/**
 * Routing Scheme for Hungary
 */
export interface RoutingSchemeForHungary {
  /**
   * Account number
   * @format ^[0-9]{24}$
   * @example 117730161111101800000000
   */
  account_number: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example HU
   */
  scheme: string;
}

/**
 * Body for updating a store
 * @example {"name":"Updated Name","version":1}
 */
export type UpdateStoreRequest = Store & ObjectVersion;

/**
 * Body for creating a store
 */
export type CreateStoreRequest = Store & { charging_bank_account?: ChargingBankAccount } & {
  delivery_address?: Address;
};

/**
 * Search Person Response
 */
export interface SearchPersonResponse {
  people: Person[];
}

/**
 * Document Response
 */
export type DocumentResponse = Document;

/**
 * Versions Response
 * @example {"versions":[{"change_made_by_service_account":"13b5b1d4-8497-410c-a916-82915e159aee","change_made_by_user_account":"user-saltid/13b5b1d4-8497-410c-a916-82915e159aee","changed_on":"2021-04-22T14:49:29Z","changes":{"authorizer_id":"ffe1cd43-1f43-47f5-afa7-438d5baef783","id":"ffe1cd43-1f43-47f5-afa7-438d5baef783","legal_structure":"LIMITED","registered_name":"Company Name","registered_number":"123456789","updated_at":"2021-04-22T14:49:29"},"event":"INSERT","id":5,"record_id":"e4626fa3-6810-4d21-ba3c-f2c5ad0d1d61"}]}
 */
export interface ListVersionsResponse {
  /** Versions */
  versions: Version[];
}

/**
 * Resource conflict
 * @example {"code":"IDEMPOTENCY_KEY_CONFLICT","description":"The provided idempotency key already exists for another resouce"}
 */
export interface Conflict {
  /** The specific error code. Follows the format <specific error> */
  code: string;

  /** Technical description in English */
  description: string;
}

/**
 * Routing Scheme for Iceland
 */
export interface RoutingSchemeForIceland {
  /**
   * Account number
   * @format ^[0-9]{6}$
   * @example 007654
   */
  account_number: string;

  /**
   * Account type
   * @format ^[0-9]{2}$
   * @example 26
   */
  account_type: string;

  /**
   * Bank code
   * @format ^[0-9]{4}$
   * @example 0159
   */
  bank_code: string;

  /**
   * Kennitala
   * @format ^[0-9]{10}$
   * @example 5510730339
   */
  kennitala: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example IS
   */
  scheme: string;
}

/**
 * Bank Route
 */
export type BankRoute =
  | { account_number: string; account_prefix?: string | null; bank_code: string; scheme: string }
  | { account_number: string; bank_identifier: string; scheme: string; sort_code: string }
  | { account_number: string; bank_code: string; scheme: string }
  | { account_number: string; scheme: string }
  | { account_number: string; account_type: string; bank_code: string; kennitala: string; scheme: string }
  | { nib: string; scheme: string }
  | { account_number: string; account_prefix?: string | null; bank_code: string; scheme: string }
  | ({ account_number: string; account_prefix?: string | null; bank_code: string; scheme: string } & {
      account_number: string;
      bank_identifier: string;
      scheme: string;
      sort_code: string;
    } & { account_number: string; bank_code: string; scheme: string } & { account_number: string; scheme: string } & {
      account_number: string;
      account_type: string;
      bank_code: string;
      kennitala: string;
      scheme: string;
    } & { nib: string; scheme: string } & {
      account_number: string;
      account_prefix?: string | null;
      bank_code: string;
      scheme: string;
    });

/**
 * Store response body
 */
export type StoreResponse = Store & { charging_bank_account?: ChargingBankAccount | null } & { company: Company };

/**
 * Document
 */
export interface Document {
  /**
   * Company UUID
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  company_id?: string | null;

  /**
   * Document UUID
   * @format uuid
   * @example 78868a92-553e-470d-9ae5-bc30a6655109
   */
  id?: string;

  /**
   * Filepath on s3
   * @format url
   * @example https://url.com/to/document
   */
  path: string;

  /**
   * Person UUID
   * @format uuid
   * @example ffe1cd43-1f43-47f5-afa7-438d5baef783
   */
  person_id?: string | null;

  /**
   * Type of the document
   * @example DRIVER_LICENSE_FRONT
   */
  type:
    | "PASSPORT_FRONT"
    | "ID_FRONT"
    | "ID_BACK"
    | "DRIVER_LICENSE_FRONT"
    | "DRIVER_LICENSE_BACK"
    | "PROOF_OF_ADDRESS"
    | "PROOF_OF_OFFICE_REGISTERED";
}

/**
 * Routing Scheme for Czech Republic
 */
export interface RoutingSchemeForCzechRepublic {
  /**
   * Account number
   * @format ^[0-9]{10}$
   * @example 2000145399
   */
  account_number: string;

  /**
   * Account prefix
   * @format ^[0-9]{0,6}$
   * @example 19
   */
  account_prefix?: string | null;

  /**
   * Bank code
   * @format ^[0-9]{4}$
   * @example 0800
   */
  bank_code: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example CZ
   */
  scheme: string;
}

/**
 * Body for updating company
 * @example {"registered_name":"Updated Registry Name","version":1}
 */
export type UpdateCompanyRequest = Company & ObjectVersion & { shareholders?: (PersonRole & { deleted?: boolean })[] };

/**
 * Routing Scheme for Croatia
 */
export interface RoutingSchemeForCroatia {
  /**
   * Account number
   * @format ^[0-9]{10}$
   * @example 1863000160
   */
  account_number: string;

  /**
   * Bank code
   * @format ^[0-9]{7}$
   * @example 1001005
   */
  bank_code: string;

  /**
   * Routing scheme of choice (ISO 639-1)
   * @example HR
   */
  scheme: string;
}

/**
 * Body for creating a person
 */
export type CreatePersonRequest = Person;

/**
 * PersonRole
 */
export interface PersonRole {
  /**
   * PersonRole UUID. When used in the update operation, it will update the person role with the given id.
   * @format uuid
   * @example 5536420e-194b-40e7-8eba-4607fcd5a997
   */
  id?: string;

  /** Person information. Only required if no person_id is provided. This will create a new person. */
  person?: Person;

  /**
   * Person UUID. If set, the person with the given id will be used. If not set, a new person will be created from the data provided
   * @format uuid
   */
  person_id?: string;

  /**
   * The role of the person in a company. Default to `UBO` on creation if none is set.
   * @example ["UBO"]
   */
  roles?: ("UBO" | "DIRECTOR")[];

  /**
   * Decimal as string. Only required when roles has `UBO`
   * @format ^((1\.0)|(0\.0*[1-9][0-9]*?))$
   * @example 0.24
   */
  share?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.cloud.saltpay.dev";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Merchant Data API
 * @version 1.0.0
 * @baseUrl https://api.cloud.saltpay.dev
 * @contact #global-merchant-database-integrations @ Slack <global-merchant-database@saltpay.co> (https://docs.cloud.saltpay.co/)
 *
 * Entry point for Company & Store management. Exposes endpoints to create, update, search, view history (and more) for all of entities.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Search for companies. Passing an `authorizer_id` will filter to companies whose Authorizer match the received ID. Passing a query `q` will filter by: - Registry Business Name - Registry Business Number - Company ID
     *
     * @tags Companies
     * @name MdmWebApiV1CompaniesControllerSearchCompanies
     * @summary Search & List Companies
     * @request GET:/v1/companies
     * @secure
     */
    mdmWebApiV1CompaniesControllerSearchCompanies: (
      query?: {
        q?: string;
        authorizer_user_id?: string;
        authorizer_id?: string;
        country?: string;
        limit?: number;
        offset?: number;
        updated_at__gt?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListCompaniesResponse, any>({
        path: `/v1/companies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a company in SaltPay.
     *
     * @tags Companies
     * @name MdmWebApiV1CompaniesControllerCreateCompany
     * @summary Register Company
     * @request POST:/v1/companies
     * @secure
     */
    mdmWebApiV1CompaniesControllerCreateCompany: (data: CreateCompanyRequest, params: RequestParams = {}) =>
      this.request<CompanyResponse, BadRequestParameters | Conflict>({
        path: `/v1/companies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Shows a given company's KYC information.
     *
     * @tags Companies
     * @name MdmWebApiV1CompaniesControllerShowCompany
     * @summary Show Company
     * @request GET:/v1/companies/{company_id}
     * @secure
     */
    mdmWebApiV1CompaniesControllerShowCompany: (companyId: string, params: RequestParams = {}) =>
      this.request<CompanyResponse, BadRequestParameters | NotFound>({
        path: `/v1/companies/${companyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given company's KYC information.
     *
     * @tags Companies
     * @name MdmWebApiV1CompaniesControllerUpdateCompany
     * @summary Update Company
     * @request PATCH:/v1/companies/{company_id}
     * @secure
     */
    mdmWebApiV1CompaniesControllerUpdateCompany: (
      companyId: string,
      data: UpdateCompanyRequest,
      params: RequestParams = {},
    ) =>
      this.request<CompanyResponse, BadRequestParameters | NotFound>({
        path: `/v1/companies/${companyId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all modifications done to a company.
     *
     * @tags Companies
     * @name MdmWebApiV1CompaniesControllerGetCompanyHistory
     * @summary Show Company History
     * @request GET:/v1/companies/{company_id}/history
     * @secure
     */
    mdmWebApiV1CompaniesControllerGetCompanyHistory: (
      companyId: string,
      query?: { limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<ListVersionsResponse, NotFound>({
        path: `/v1/companies/${companyId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload Document
     *
     * @tags Documents
     * @name MdmWebApiV1DocumentsControllerUploadDocument
     * @summary Upload Document
     * @request POST:/v1/documents
     * @secure
     */
    mdmWebApiV1DocumentsControllerUploadDocument: (data: UploadDocumentRequest, params: RequestParams = {}) =>
      this.request<DocumentResponse, BadRequestParameters>({
        path: `/v1/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Search for people with email and if the person is an authorizer or if is a shareholder
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerSearchPerson
     * @summary Search and List people
     * @request GET:/v1/people
     * @secure
     */
    mdmWebApiV1PeopleControllerSearchPerson: (
      query?: {
        is_authorizer?: boolean;
        is_shareholder?: boolean;
        is_ubo?: boolean;
        email?: string;
        phone_number?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchPersonResponse, any>({
        path: `/v1/people`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a Person
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerCreatePerson
     * @summary Register Person
     * @request POST:/v1/people
     * @secure
     */
    mdmWebApiV1PeopleControllerCreatePerson: (data: CreatePersonRequest, params: RequestParams = {}) =>
      this.request<PersonResponse, BadRequestParameters | Conflict | BadGateway>({
        path: `/v1/people`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Show current person based on the account connected
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerShowCurrentPerson
     * @summary Show Current Person
     * @request GET:/v1/people/me
     * @secure
     */
    mdmWebApiV1PeopleControllerShowCurrentPerson: (params: RequestParams = {}) =>
      this.request<PersonResponse, any>({
        path: `/v1/people/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a Person
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerRemovePerson
     * @summary Delete Person
     * @request DELETE:/v1/people/{person_id}
     * @secure
     */
    mdmWebApiV1PeopleControllerRemovePerson: (personId: string, params: RequestParams = {}) =>
      this.request<PersonResponse, NotFound>({
        path: `/v1/people/${personId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Show Person by given ID
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerShowPerson
     * @summary Show Person
     * @request GET:/v1/people/{person_id}
     * @secure
     */
    mdmWebApiV1PeopleControllerShowPerson: (personId: string, params: RequestParams = {}) =>
      this.request<PersonResponse, NotFound>({
        path: `/v1/people/${personId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an Person
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerUpdatePerson
     * @summary Update Person
     * @request PATCH:/v1/people/{person_id}
     * @secure
     */
    mdmWebApiV1PeopleControllerUpdatePerson: (
      personId: string,
      data: UpdatePersonRequest,
      params: RequestParams = {},
    ) =>
      this.request<PersonResponse, BadRequestParameters | NotFound>({
        path: `/v1/people/${personId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all modifications done to a person.
     *
     * @tags People
     * @name MdmWebApiV1PeopleControllerGetPersonHistory
     * @summary Show Person History
     * @request GET:/v1/people/{person_id}/history
     * @secure
     */
    mdmWebApiV1PeopleControllerGetPersonHistory: (
      personId: string,
      query?: { limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<ListVersionsResponse, NotFound>({
        path: `/v1/people/${personId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Lists stores, filtered by the company_id or search query, if present. Passing a query will filter by: - `Store DBA name` - `Store ID` - `Store Short ID` - `Company Registry Name` - `Company Registry Number`
     *
     * @tags Stores
     * @name MdmWebApiV1StoresControllerSearchStores
     * @summary Search & List Stores
     * @request GET:/v1/stores
     * @secure
     */
    mdmWebApiV1StoresControllerSearchStores: (
      query?: { q?: string; company_id?: string; limit?: number; offset?: number; updated_at__gt?: string },
      params: RequestParams = {},
    ) =>
      this.request<ListStoresResponse, any>({
        path: `/v1/stores`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a store in SaltPay.
     *
     * @tags Stores
     * @name MdmWebApiV1StoresControllerCreateStore
     * @summary Register Store
     * @request POST:/v1/stores
     * @secure
     */
    mdmWebApiV1StoresControllerCreateStore: (data: CreateStoreRequest, params: RequestParams = {}) =>
      this.request<StoreResponse, BadRequestParameters | NotFound | Conflict>({
        path: `/v1/stores`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Shows a given store's KYC information.
     *
     * @tags Stores
     * @name MdmWebApiV1StoresControllerShowStore
     * @summary Show Store
     * @request GET:/v1/stores/{store_id}
     * @secure
     */
    mdmWebApiV1StoresControllerShowStore: (storeId: string, params: RequestParams = {}) =>
      this.request<StoreResponse, NotFound>({
        path: `/v1/stores/${storeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a given store's KYC information.
     *
     * @tags Stores
     * @name MdmWebApiV1StoresControllerUpdateStore
     * @summary Update Store
     * @request PATCH:/v1/stores/{store_id}
     * @secure
     */
    mdmWebApiV1StoresControllerUpdateStore: (storeId: string, data: UpdateStoreRequest, params: RequestParams = {}) =>
      this.request<StoreResponse, BadRequestParameters | NotFound>({
        path: `/v1/stores/${storeId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves all modifications done to a store.
     *
     * @tags Stores
     * @name MdmWebApiV1StoresControllerGetStoreHistory
     * @summary Show Store History
     * @request GET:/v1/stores/{store_id}/history
     * @secure
     */
    mdmWebApiV1StoresControllerGetStoreHistory: (
      storeId: string,
      query?: { limit?: number; offset?: number },
      params: RequestParams = {},
    ) =>
      this.request<ListVersionsResponse, NotFound>({
        path: `/v1/stores/${storeId}/history`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
