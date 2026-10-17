import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

// Il sito è ospitato su GitHub Pages ma usa Base44 come backend
// (database, login, funzioni). Il client parla con https://base44.app.
export const base44 = createClient({
  appId: appParams.appId,
  token: appParams.token,
});

export default base44;
