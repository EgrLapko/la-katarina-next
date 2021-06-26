export const buildRoute = (href, params) => {
  const route = {
    href,
    as: href,
  };

  if (params) {
    route.as = Object.keys(params).reduce(
      (as, key) => as.replace(`[${key}]`, params[key]),
      route.as
    );
  }

  return route;
};

export const routes = {
  home: () => buildRoute("/"),
  imageGallery: (genre) => buildRoute("/gallery/[genre]", { genre }),
};
