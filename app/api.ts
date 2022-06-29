import { Company } from "./generated/merchantData";
import { companyMock } from "./mocks/merchantData";

const db = { company: companyMock };

const ERROR_CHANCE = 0.05;
const DELAY_RANGE = [0, 1000];

const api = {
  getCompany: async () => {
    const delay =
      Math.random() * (DELAY_RANGE[1] - DELAY_RANGE[0]) + DELAY_RANGE[0];
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (Math.random() < ERROR_CHANCE)
      throw new Error("Error GETTING data :////");
    return db.company;
  },
  setCompany: async (payload: Partial<Company>) => {
    const delay =
      Math.random() * (DELAY_RANGE[1] - DELAY_RANGE[0]) + DELAY_RANGE[0];
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (Math.random() < ERROR_CHANCE) throw new Error("Error UPDATING data :(");
    db.company = { ...db.company, ...payload };
  },
};

export default api;
