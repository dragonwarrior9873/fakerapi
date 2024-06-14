import { faker } from "@faker-js/faker";

export default (req, res) => {
  const limit = JSON.parse(req.body)?.limit ?? 10;

  const customers = [...new Array(limit)].map((_, index) => {
    return {
      index,
      name: faker.company.name(),
      birthdate: faker.date.birthdate()
    };
  });

  res.status(200).json(JSON.stringify(customers));
};
