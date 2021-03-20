const jwt = require("jsonwebtoken");

const createTokens = (user) => {
  const refreshToken = jwt.sign(
    { userId: user.id, count: user.count },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15min",
    }
  );

  return { refreshToken, accessToken };
};

module.exports = createTokens;
