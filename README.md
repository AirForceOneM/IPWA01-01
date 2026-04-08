# CO₂-Tracker – Webanwendung zur Analyse von Emissionsdaten

Diese Anwendung wurde im Rahmen der Fallstudie im Modul **Programmierung von Webanwendungsoberflächen (IPWA01-01)** an der IU Internationalen Hochschule entwickelt.

## Projektziel

Ziel der Anwendung ist die **strukturierte Darstellung und interaktive Analyse von CO₂-Emissionsdaten**. Nutzerinnen und Nutzer können Datensätze filtern, durchsuchen und sortieren, um verschiedene Perspektiven auf die Daten zu erhalten.

## Funktionen

- Darstellung von CO₂-Emissionsdaten in tabellarischer Form  
- Filterung nach:
  - Land  
  - Unternehmen  
  - Jahr  
- Textsuche über mehrere Attribute hinweg  
- Sortierung nach verschiedenen Spalten (alphabetisch und numerisch)  
- Anzeige der gefilterten Datensätze  
- Responsives Design für Desktop, Tablet und Smartphone  
- Sicherheitsmaßnahmen gegen XSS durch Verwendung sicherer DOM-Methoden  

## Verwendete Technologien

- **HTML** – Struktur der Anwendung  
- **CSS** – Gestaltung der Benutzeroberfläche  
- **JavaScript** – Interaktive Funktionen und Datenverarbeitung  
- **Bootstrap** – Responsives Layout und UI-Komponenten  
- **Tailwind CSS** – Flexible Feinsteuerung einzelner Designelemente  

## Anwendung starten

1. Repository klonen oder herunterladen  
2. Die Datei `index.html` im Browser öffnen  

> Es ist keine zusätzliche Installation oder ein Server erforderlich.


## Sicherheit

Die Anwendung verarbeitet Benutzereingaben ausschließlich als Text und verzichtet bewusst auf unsichere Methoden wie `innerHTML`. Dadurch wird das Risiko von Cross-Site-Scripting (XSS) reduziert.

## Erweiterungsmöglichkeiten

- Anbindung an externe Datenquellen (API)  
- Integration eines Backends zur Datenverwaltung  
- Erweiterung um Diagramme und Visualisierungen  
- Benutzerkonten und Speicherung von Filtereinstellungen  

## Kontext der Fallstudie

Die Anwendung wurde als Teil einer wissenschaftlichen Fallstudie entwickelt, die sich mit der **Konzeption und Umsetzung einer Webanwendungsoberfläche zur Darstellung von CO₂-Emissionen** beschäftigt.

## Autor

Mario Köppl  
IU Internationale Hochschule
