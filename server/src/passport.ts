import {
  ExtractJwt,
  Strategy,
  StrategyOptionsWithoutRequest,
} from "passport-jwt";
import passport from "passport";

const opts: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      console.log(payload);
      return done(null, payload);
    } catch (error) {
      return done(error);
    }
  })
);
