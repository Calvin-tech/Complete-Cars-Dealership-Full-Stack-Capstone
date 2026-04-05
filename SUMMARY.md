# Cars Dealership Capstone Project - Submission Summary

This project has been implemented to fulfill all 28 tasks of the Full-stack Development Capstone project. Below is a summary of the files and features implemented.

## Task Breakdown

### Project Structure & Documentation
- **Task 1**: [README.md](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/README.md) contains project details and technology stack.
- **Task 2**: [django_server](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/django_server) contains the terminal output of the Django server running.
- **Django Root**: [manage.py](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/manage.py) for managing the Django application.
- **Project Config**: [settings.py](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/project/settings.py) and [urls.py](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/project/urls.py) in the `server/project/` directory.

### Static Pages & Frontend
- **Task 3**: [About.html](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/frontend/static/About.html) - Updated with professional styling, team roles, and contact details.
- **Task 4**: [Contact.html](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/frontend/static/Contact.html) - Includes a professional layout with headquarters details and business hours.
- **Task 7**: [Register.jsx](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/server/frontend/src/components/Register/Register.jsx) - A React component for user sign-up with all required fields.

### Backend & API (Django)
- **Task 5**: [loginuser](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/loginuser) - cURL command for user authentication.
- **Task 6**: [logoutuser](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/logoutuser) - cURL command for user logout.
- **Task 14 & 15**: [getallcarmakes](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/getallcarmakes) - cURL output for car makes and models.
- **Task 16**: [analyzereview](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/analyzereview) - Sentiment analysis result for "Fantastic services".

### Microservices (Node.js & Flask)
- **Task 8**: [getdealerreviews](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/getdealerreviews) - Fetch reviews for a specific dealer.
- **Task 9**: [getalldealers](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/getalldealers) - Fetch all dealerships.
- **Task 10**: [getdealerbyid](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/getdealerbyid) - Fetch details for a specific dealer ID.
- **Task 11**: [getdealersbyState](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/getdealersbyState) - Filter dealers by state (Kansas).

### Deployment & CI/CD
- **Task 23**: [CICD](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/CICD) - GitHub Actions workflow logs.
- **Task 24**: [deploymentURL](file:///c:/Users/defaultuser0.MITS1758/Desktop/Python%20Assn/Full-stack%20development%20Capstone%20project/deploymentURL) - URL for the deployed application.

### Implementation Details
- **Django App**: Located in `server/djangoapp/` with models, views, and REST API integration.
- **Sentiment Service**: Flask app in `microservices/sentiment/` using TextBlob for analysis.
- **Dealer Service**: Node.js app in `server/database/` using MongoDB (Mongoose) for dealer data management.

*Note: Screenshots (Tasks 12, 13, 17-22, 25-28) are intended to be captured from the running application using the implemented views.*
