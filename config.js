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
          { "file": "images/garden_before.png", "label": "Vor der Arbeit", "label_color": "orange" },
          { "file": "images/garden_step1.png", "label": "Beikraut raus", "label_color": "blue" },
          { "file": "images/garden_step2.png", "label": "PROJEKT-HIGHLIGHT", "label_color": "yellow" },
          { "file": "images/garden_after.png", "label": "FERTIG!" }
        ]
      },
      {
        "title": "Das neue Insektenhotel",
        "description": "Vom Brett zur Luxusherberge",
        "images": [
          { "file": "images/insecthotel_before.png", "label": "Bausatz", "label_color": "blue" },
          { "file": "images/insecthotel_after.png", "label": "EINZUG", "label_color": "green" }
        ]
      },
      {
        "title": "Die Video-AG",
        "description": "Unser stolzes Dokumentations-Team.",
        "images": [
          { "file": "images/team.png", "label": "DAS TEAM" }
        ]
      }
    ]
};