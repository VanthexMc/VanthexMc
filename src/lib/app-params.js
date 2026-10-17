const isNode = typeof window === "undefined";

// ID dell'app su Base44 (è nell'URL dell'editor: /apps/<id>/editor).
// Si può sovrascrivere con la variabile VITE_BASE44_APP_ID.
const DEFAULT_APP_ID = "6ac3b2cd1c34669978cf7ac9";
const TOKEN_KEYS = ["base44_access_token", "token"];

const isClearAccessTokenRequested = () =>
  !isNode && new URLSearchParams(window.location.search).get("clear_access_token") === "true";

const clearStoredAccessToken = () => {
  TOKEN_KEYS.forEach((k) => window.localStorage.removeItem(k));
};

// Dopo un login via Google/Discord, Base44 rimanda qui con ?access_token=...
// Lo salviamo e lo togliamo dall'URL.
const getAccessToken = () => {
  if (isNode) return null;
  const params = new URLSearchParams(window.location.search);
  const urlToken = params.get("access_token");
  if (urlToken) {
    TOKEN_KEYS.forEach((k) => window.localStorage.setItem(k, urlToken));
    params.delete("access_token");
    const qs = params.toString();
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname + (qs ? "?" + qs : "") + window.location.hash
    );
    return urlToken;
  }
  return TOKEN_KEYS.map((k) => window.localStorage.getItem(k)).find(Boolean) || null;
};

const getAppParams = () => {
  if (isClearAccessTokenRequested()) clearStoredAccessToken();
  return {
    appId: import.meta.env.VITE_BASE44_APP_ID || DEFAULT_APP_ID,
    token: getAccessToken(),
  };
};

export const appParams = { ...getAppParams() };
