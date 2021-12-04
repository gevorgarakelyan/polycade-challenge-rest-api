module.exports = (sequelize, Sequelize) => {
  const Machine = sequelize.define("machine", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pricing_id: {
      type: Sequelize.STRING,
      references: {
        model: 'pricingModels',
        key: 'id'
      }
    }
  });

  return Machine;
};
