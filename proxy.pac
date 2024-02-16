function FindProxyForURL(url, host) {
  // if request matches regex video-weaver then proxy the request to HTTP proxy
  if (shExpMatch(host, "video-weaver.*.ttvnw.net")) {
    return "PROXY eu.restricted.api.cdn-perfprod.com:6691; PROXY beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }
  
  // usher request proxying / twitch cdn assignment
  if (shExpMatch(host, "usher.ttvnw.net")) {
    return "PROXY eu.restricted.api.cdn-perfprod.com:6691; PROXY beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }

  if (shExpMatch(host, "www.twitch.tv")) {
    return "PROXY eu.restricted.api.cdn-perfprod.com:6691; PROXY beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }

  if (shExpMatch(host, "gql.twitch.tv")) {
    return "PROXY eu.restricted.api.cdn-perfprod.com:6691; PROXY beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }

  if (shExpMatch(host, "passport.twitch.tv")) {
    return "PROXY eu.restricted.api.cdn-perfprod.com:6691; PROXY beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }

  // for testing purposes (know if you're connected to X loadbalancer or not)
  if (shExpMatch(host, "example.org")) {
    return "PROXY ddgarciaf:kip0B78C8WphgqY5khmG@eu.restricted.api.cdn-perfprod.com:6691; PROXY ddgarciaf:kip0B78C8WphgqY5khmG@beta.eu.restricted.api.cdn-perfprod.com:6691; DIRECT";
  }

  // all other requests simply gets thru without any proxy involved
  return "DIRECT";
}
