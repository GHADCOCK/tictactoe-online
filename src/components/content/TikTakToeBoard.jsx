// eslint-disable-next-line
import { useEffect, useState, Text, View, Button, Alert } from "react";
// TEST
export default function TikTakToeBoard(props) {
  useEffect(() => {
    fetch("https://tiktaktoe-kttp.onrender.com/api/message")
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

  console.log("ASDJOFIJSDIOFJ");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>TikTakToe Game!</h1>
      <p>Just a TikTakToe board!</p>
    </div>
  );
}
