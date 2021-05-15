"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
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
			"Heroes",
			[
				{
					name: "Nicky Larson",
          superpower:"Détective privée",
          createdAt: new Date(),
          updatedAt: new Date()
				
				},
				{
					name: "Marsupilami",
          superpower:"Saute partout",
          createdAt: new Date(),
          updatedAt: new Date()
				
				},
				{
					name: "Tintin",
          superpower:"Son chien Milou",
          createdAt: new Date(),
          updatedAt: new Date()
				
				},
				{
					name: "Jack Bauer",
          superpower:"Agent spécial",
          createdAt: new Date(),
          updatedAt: new Date()
				
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
    await queryInterface.bulkDelete("Heroes", null, {});
	},
};
