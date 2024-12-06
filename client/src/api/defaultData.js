const primer = {
    "categories": [
      {
        "_id": "CATEGORY_ID_INBOX",
        "name": "Inbox",
        "projects": [],
        "tasks": [
          {
            "_id": "TASK_ID_READ_ARTICLE",
            "name": "Read an article",
            "isCompleted": false,
            "deadline": "2024-12-08",
            "labels": ["When I have free time"],
            "comments": []
          },
          {
            "_id": "TASK_ID_CLEAN_DESKTOP",
            "name": "Clean desktop",
            "isCompleted": false,
            "deadline": "2024-12-10",
            "labels": [],
            "comments": []
          }
        ]
      },
      {
        "_id": "CATEGORY_ID_WORK",
        "name": "Work",
        "projects": [
          {
            "_id": "PROJECT_ID_TEAM_LAUNCH",
            "name": "Team project launch",
            "description": "Prepare for the launch of the new team project.",
            "isCompleted": false,
            "deadline": "2024-12-15",
            "tasks": [
              {
                "_id": "TASK_ID_PREPARE_PRESENTATION",
                "name": "Prepare presentation",
                "isCompleted": false,
                "deadline": "2024-12-12",
                "labels": ["Urgent", "This week"],
                "comments": ["Use the latest statistics."]
              },
              {
                "_id": "TASK_ID_CONDUCT_TRAINING",
                "name": "Conduct training",
                "isCompleted": false,
                "deadline": "2024-12-14",
                "labels": ["When I have free time"],
                "comments": []
              }
            ]
          },
          {
            "_id": "PROJECT_ID_CLIENT_COMM",
            "name": "Client communication",
            "description": "Plan and execute client communication tasks.",
            "isCompleted": false,
            "deadline": "2024-12-20",
            "tasks": [
              {
                "_id": "TASK_ID_FOLLOW_UP_EMAILS",
                "name": "Send follow-up emails",
                "isCompleted": false,
                "deadline": "2024-12-16",
                "labels": ["This week"],
                "comments": []
              },
              {
                "_id": "TASK_ID_ORGANIZE_MEETING",
                "name": "Organize meeting",
                "isCompleted": false,
                "deadline": "2024-12-18",
                "labels": [],
                "comments": ["Confirm availability beforehand."]
              }
            ]
          }
        ],
        "tasks": []
      },
      {
        "_id": "CATEGORY_ID_ROUTINE",
        "name": "Daily Routine",
        "projects": [
          {
            "_id": "PROJECT_ID_MORNING_HABITS",
            "name": "Morning habits",
            "description": "Establish a productive morning routine.",
            "isCompleted": false,
            "deadline": "2024-12-30",
            "tasks": [
              {
                "_id": "TASK_ID_MEDITATION",
                "name": "Meditation",
                "description": "Spend 10 minutes meditating every morning.",
                "isCompleted": false,
                "deadline": "2024-12-15",
                "labels": ["With pleasure", "Daily"],
                "comments": ["Use a meditation app for guidance."]
              }
            ]
          }
        ],
        "tasks": [
          {
            "_id": "TASK_ID_EVENING_READING",
            "name": "Evening reading",
            "isCompleted": false,
            "deadline": "2024-12-09",
            "labels": ["With pleasure"],
            "comments": []
          },
          {
            "_id": "TASK_ID_PLAN_NEXT_DAY",
            "name": "Plan next day",
            "isCompleted": false,
            "deadline": "2024-12-10",
            "labels": [],
            "comments": []
          }
        ]
      }
    ]
  }

export default primer