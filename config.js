const presentationData = {
    "settings": {
      "slideDuration": 5000, // Wait time at the end of a slide (in ms)
      "stepDuration": 2000, // Wait time between individual images (in ms)
      "showProgressBar": true,
      "badgeStyle": "modern",
      "loop": true,
      // Intro and outro text (leave empty to disable)
      "welcomeTitle": "Projekttage 2026",
      "welcomeSubtitle": "Präsentation der Ergebnisse und Highlights",
      "endText": "Vielen Dank allen Beteiligten! <br>Toll, was man gemeinsam schaffen kann!"
    },
    "projects": [
      {
        "title": "Der Schulgarten",
        "description": "Vom Urwald zur grünen Oase – danke an die Garten-AG!",
        "images": [
          { "file": "images/garden_before.jpg", "label": "Vor der Arbeit", "label_color": "orange" },
          { "file": "images/garden_step1.jpg", "label": "Beikraut raus", "label_color": "blue" },
          { "file": "images/garden_step2.jpg", "label": "PROJEKT-HIGHLIGHT", "label_color": "yellow" },
          { "file": "images/garden_after.jpg", "label": "FERTIG!" }
        ]
      },
      {
        "title": "Das neue Insektenhotel",
        "description": "Vom Brett zur Luxusherberge",
        "images": [
          { "file": "images/insecthotel_before.jpg", "label": "Bausatz", "label_color": "blue" },
          { "file": "images/insecthotel_after.jpg", "label": "EINZUG", "label_color": "green" }
        ]
      },
      {
        "title": "Die neue Leinwand",
        "description": "Endlich klare Bilder",
        "layout": "center",
        "images": [
          { "file": "images/screen_step1.jpg", "label": "In the box.", "label_color": "orange" },
          { "file": "images/screen_step2.jpg", "label": "Die Spannung steigt...", "label_color": "yellow" },
          { "file": "images/screen_step3.jpg", "label": "FERTIG!" }
        ]
      },
      {
        "title": "Die Video-AG",
        "description": "Unser stolzes Dokumentations-Team.",
        "images": [
          { "file": "images/team.jpg", "label": "DAS TEAM" }
        ]
      }
    ]
};