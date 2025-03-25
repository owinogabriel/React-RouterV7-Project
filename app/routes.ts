// This file defines all of our routes
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("Countries", "routes/countries.tsx"),
  route("countries/:countryName", "routes/country.tsx"),
] satisfies RouteConfig;
