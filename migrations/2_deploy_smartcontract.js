const Social = artifacts.require("SocialMedia");

module.exports = function (deployer) {
  deployer.deploy(Social);
};