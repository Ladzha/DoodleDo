const defaultData = {
    "categories": [
      {
        "name": "Inbox",
        "projects": [
          {
            "name": "Organize a party",
            "description": "Plan all the details for the upcoming birthday party.",
            "completed": false,
            "deadline": "2024-12-10",
            "tasks": [
              {
                "name": "Buy balloons",
                "description": "Get colorful balloons from the nearest store.",
                "completed": false,
                "deadline": "2024-12-08",
                "labels": ["When I have free time", "This week", "With pleasure"],
                "comments": ["Make sure to get helium ones."]
              },
              {
                "name": "Order a cake",
                "description": "Order a custom birthday cake.",
                "completed": false,
                "deadline": "2024-12-07",
                "labels": ["Urgent", "Today", "Must"],
                "comments": []
              }
            ]
          },
          {
            "name": "Home organization",
            "description": "Declutter and organize living space.",
            "completed": false,
            "deadline": "2024-12-25",
            "tasks": [
              {
                "name": "Organize wardrobe",
                "description": "Sort clothes and donate unused items.",
                "completed": false,
                "deadline": "2024-12-15",
                "labels": ["This week", "When I have free time", "Must"],
                "comments": ["Start with seasonal clothes."]
              },
              {
                "name": "Clean garage",
                "description": "Dispose of old tools and boxes.",
                "completed": false,
                "deadline": "2024-12-20",
                "labels": ["This week", "Urgent", "With pleasure"],
                "comments": ["Call a recycling service if needed."]
              }
            ]
          }
        ],
        "tasks": [
          {
            "name": "Research about dog breeds",
            "description": "Learn about different breeds to decide which one to adopt.",
            "completed": false,
            "deadline": "2024-12-15",
            "labels": ["When I have free time", "Must"],
            "comments": ["Focus on hypoallergenic breeds."]
          }
        ]
      },
      {
        "name": "Work",
        "projects": [
          {
            "name": "Launch new feature",
            "description": "Prepare for the release of the new product feature.",
            "completed": false,
            "deadline": "2024-12-20",
            "tasks": [
              {
                "name": "Write documentation",
                "description": "Draft user-friendly documentation.",
                "completed": false,
                "deadline": "2024-12-15",
                "labels": ["This week", "Today", "Must"],
                "comments": []
              },
              {
                "name": "Team review meeting",
                "description": "Schedule a meeting to review the progress.",
                "completed": false,
                "deadline": "2024-12-12",
                "labels": ["Urgent", "With pleasure"],
                "comments": ["Prepare a summary beforehand."]
              }
            ]
          }
        ],
        "tasks": []
      },
      {
        "name": "Life",
        "projects": [],
        "tasks": [
          {
            "name": "Buy groceries",
            "description": "Restock essentials for the week.",
            "completed": false,
            "deadline": "2024-12-05",
            "labels": ["Today", "This week", "Must"],
            "comments": ["Don't forget to check for discounts."]
          },
          {
            "name": "Call parents",
            "description": "Catch up with parents about upcoming holidays.",
            "completed": false,
            "deadline": "2024-12-06",
            "labels": ["This week", "With pleasure"],
            "comments": []
          }
        ]
      },
      {
        "name": "Traveling",
        "projects": [
          {
            "name": "Plan Japan trip",
            "description": "Create an itinerary for the Japan trip next spring.",
            "completed": false,
            "deadline": "2024-12-31",
            "tasks": [
              {
                "name": "Book flights",
                "description": "Find affordable tickets to Tokyo.",
                "completed": false,
                "deadline": "2024-12-10",
                "labels": ["Urgent", "Must"],
                "comments": []
              },
              {
                "name": "Research hotels",
                "description": "Look for accommodations in Tokyo and Kyoto.",
                "completed": false,
                "deadline": "2024-12-15",
                "labels": ["When I have free time", "With pleasure"],
                "comments": []
              },
              {
                "name": "Create packing list",
                "description": "List essential items to bring.",
                "completed": false,
                "deadline": "2024-12-20",
                "labels": ["This week", "Must"],
                "comments": []
              }
            ]
          }
        ],
        "tasks": []
      },
      {
        "name": "Health",
        "projects": [],
        "tasks": []
      }
    ]
}

export default defaultData