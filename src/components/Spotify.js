import React, { useState } from "react";

function getSpotify() {
  const clientId = process.env.CLIENTID;
  const clientSecret = process.env.CLIENTSECRET;
  const base64Auth = btoa(`${clientId}:${clientSecret}`);
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const authOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  };
}

export default getSpotify;
