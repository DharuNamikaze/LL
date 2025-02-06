import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return google.auth.fromJSON(client);
  }
  const { client_secret, client_id, redirect_uris } = JSON.parse(await fs.readFile(CREDENTIALS_PATH)).installed;
  client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const code = 'https://accounts.google.com/o/oauth2/auth'; // Replace with your authorization code
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  await saveCredentials(client);
  return client;
}

async function appendData(auth, data) {
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = '1GOe7dN0qkcz8XQzoqawNHxgfrFiF8OuR6TlmPxNj7Lk'; // Replace with your spreadsheet ID
  const range = 'Sheet1!A1'; // Replace with your sheet name and range
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource: {
      values: [data],
    },
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const auth = await authorize();
    const data = [
      req.body.fullName,
      req.body.email,
      req.body.phone,
      req.body.yearOfStudy,
      req.body.graduationYear,
      req.body.collegeName,
      req.body.department,
      req.body.address,
      req.body.fullstack,
      req.body.joinWorkshop,
      req.body.priceRange,
      req.body.expectations,
      req.body.setupHelp,
      req.body.topics,
    ];
    await appendData(auth, data);
    res.status(200).json({ message: 'Data saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}