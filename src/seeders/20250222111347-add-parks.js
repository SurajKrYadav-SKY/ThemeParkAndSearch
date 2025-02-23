"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Parks",
      [
        {
          parkName: "Om Namah Shivay Theme Park",
          address: "Vaidpura, Noida, Uttar Pradesh",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Childrens Theme Park",
          address: "Gautam Buddha Nagar, Noida, Uttar Pradesh",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "ABC Theme Park",
          address: "Gaur City, Noida, Uttar Pradesh",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Om Namah Shivay Theme Park",
          address: "Noida, Uttar Pradesh",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Karnataka Theme Park",
          address: "Bengaluru, Karnataka",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Navi Theme Park",
          address: "Navi Mumbai, Maharashtra",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Nasik Theme Park",
          address: "Nasik, Maharashtra",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Nagaon Theme Park",
          address: "Nagaon, Maharashtra",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          parkName: "Nellor Theme Park",
          address: "Nellor, Andhra Pradesh",
          parkDesc: "The best place to enjoy your summer holidays",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
