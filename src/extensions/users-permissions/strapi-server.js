module.exports = (plugin) => {
  // Get the original user controller
  const original_user_controller = plugin.controllers.user;
  // Overwrite update method
  plugin.controllers.user = ({ strapi }) => {
    const update = async (ctx) => {
      // Custom code here;
    };
    return {
      // there was missing spread operator (...)
      ...original_user_controller,
      update,
    };
  };
  return plugin;
};
