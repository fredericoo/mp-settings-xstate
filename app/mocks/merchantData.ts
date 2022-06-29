import { Company } from "~/generated/merchantData";

export const companyMock: Company = {
  authorizer: {
    first_name: "First",
    middle_name: "Middle",
    last_name: "Last",
  },
  id: "1234-1234-1234",
  billing_email: "test@test.test",
  legal_structure: "LIMITED",
  charging_bank_account: {
    id: "1234-1234-1234",
    iban: "123",
    bank_currency: "GBP",
    bank_route: {
      account_number: "123123",
      sort_code: "123123",
      scheme: "GB",
    },
  },
  registered_address: {
    street_address_line_1: "Street A",
    street_address_line_2: "Building B",
    street_address_line_3: "Some addional data",
    city: "Some City",
    state: "Some State",
    zipcode: "24320000",
    country: "ISL",
  },
  registered_name: "Test Store",
  registered_number: "123457890",
  store_count: 4,
  vat_number: "IS123415",
};
