import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWEwNTExQGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzgwNzI4LCJpYXQiOjE3ODIzNzk4MjgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1ZDgwYzc4YS1mOGMwLTQ3NGUtYjhlZS05MGYzMmYzOTIzZjAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuaWxlc2gga2hhdHJpIiwic3ViIjoiYjQ1NmE5YmQtNTlmMi00YjllLTkwYzYtNWZjNGYwZDFiOTM4In0sImVtYWlsIjoiMjQyMTVhMDUxMUBidnJpdC5hYy5pbiIsIm5hbWUiOiJuaWxlc2gga2hhdHJpIiwicm9sbE5vIjoiMjQyMTVhMDUxMSIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImI0NTZhOWJkLTU5ZjItNGI5ZS05MGM2LTVmYzRmMGQxYjkzOCIsImNsaWVudFNlY3JldCI6IlhjeEhQeW5xVkRrUkhFTmIifQ.5979AtDOugZVkPaVQTnUcGBRsvQ49qRHUDqxrL-Fs8s"
      }
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    return [];
  }
}