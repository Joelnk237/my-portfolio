"use client";
import de from "../locales/de.json";
import en from "../locales/en.json";
import { useEffect, useState } from "react";

// Objekt mit allen Übersetzungen
const translations = { de, en };

export function useTranslation() {
    // Aktuelle Sprache, Standard = Englisch
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Dieser Code läuft nur im Browser (nicht auf dem Server)
    if (typeof window !== "undefined") {
        // URL auslesen (z. B. ?lang=de)
      const search = new URLSearchParams(window.location.search);
      // Gewählte Sprache holen, sonst "en"
      const selected = search.get("lang") || "en";
      // Sprache im State speichern
      setLang(selected);
    }
  }, []);

  // Richtige Übersetzungsdatei zurückgeben
  return translations[lang];
}

