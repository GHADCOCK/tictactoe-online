// eslint-disable-next-line
import { useEffect, useState, Text, View, Alert } from "react";
import { Button } from "react-bootstrap";
// TEST
export default function TikTakToeBoard(props) {
  function sendToServer() {
    const payload = { message: "Hello, server!"};
  }

  useEffect(() => {
    fetch("https://tiktaktoe-kttp.onrender.com/api/message",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.text(); // Temporarily parse as plain text
      })
      .then((text) => {
        console.log("Raw response body:", text); // Log raw body
        try {
          const data = JSON.parse(text); // Parse JSON
          console.log("Parsed data:", data);
        } catch (err) {
          console.error("JSON parsing error:", err);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  console.log("Test");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>TikTakToe Game!</h1>
      <p>Just a TikTakToe board!</p>
      <Button
        variant="primary"
        onClick={() => {
          sendToServer();
        }}
      >
        Send a Test Signal!
      </Button>
    </div>
  );
}
