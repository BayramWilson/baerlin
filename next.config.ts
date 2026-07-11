import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kaffeemaschinen-reparatur-berlin.html",
        destination: "/kaffeemaschinen-reparatur-berlin",
        permanent: true,
      },
      {
        source: "/kaffeemaschinen-vermietung-berlin.html",
        destination: "/kaffeemaschinen-vermietung-berlin",
        permanent: true,
      },
      {
        source: "/kaffeeautomaten-service-berlin.html",
        destination: "/kaffeeautomaten-service-berlin",
        permanent: true,
      },
      {
        source: "/kaffeevollautomaten-reparaturservice.html",
        destination: "/kaffeevollautomaten-reparaturservice",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
