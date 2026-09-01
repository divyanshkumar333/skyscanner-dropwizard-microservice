# Skyscanner Dropwizard Microservice

A REST API microservice built with Dropwizard to assist users in finding car rentals and hotels by city.

## Project Overview

This microservice provides a `/search` endpoint that accepts POST requests with a city name and returns all available rental cars and hotels in that city. The data is loaded from JSON files and combined into a searchable list.

## Features

- ✅ REST API endpoint at `/search`
- ✅ Accepts JSON POST requests with city parameter
- ✅ Returns filtered rental cars and hotels
- ✅ Case-insensitive city search
- ✅ Jackson-based JSON serialization/deserialization
- ✅ Dropwizard framework for production-ready microservices

## Project Structure

```
skyscanner-dropwizard-microservice/
├── src/main/java/com/skyscanner/
│   ├── Search.java                           # Request model
│   ├── SearchResult.java                     # Response model
│   ├── SearchResource.java                   # REST endpoint
│   ├── HoenScannerApplication.java           # Main application class
│   ├── HoenScannerConfiguration.java         # Configuration class
│   └── HoenScannerApplication_run_method.java # Run method reference
├── src/main/resources/
│   ├── rental_cars.json                      # Rental car data
│   ├── hotels.json                           # Hotel data
│   └── config.yml                            # Dropwizard configuration
├── pom.xml                                   # Maven project file
├── README.md                                 # This file
└── .gitignore                                # Git ignore rules

```

## Classes

### Search.java
Represents a search request with a `city` field.
- Deserializes incoming JSON POST requests
- Uses Jackson's `@JsonProperty` annotation

### SearchResult.java
Represents a search result with three fields:
- `city` - The city name
- `title` - The result title (e.g., "Budget Car Rental", "Hilton Hotel")
- `kind` - The result type (either "rental_car" or "hotel")

### SearchResource.java
REST resource class that handles search requests:
- `@Path("/search")` - Maps to `/search` endpoint
- `@POST` - Handles POST requests
- `@Consumes(MediaType.APPLICATION_JSON)` - Accepts JSON input
- `@Produces(MediaType.APPLICATION_JSON)` - Returns JSON output
- Filters results by city (case-insensitive)

## Setup Instructions

### Prerequisites

- Java OpenJDK 19 or higher
- Maven 3.6+
- Git
- IntelliJ IDEA (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skyscanner-dropwizard-microservice
   ```

2. **Open in IntelliJ**
   - Open IntelliJ IDEA
   - File → Open → Select the project directory
   - Wait for Maven to load the project
   - Click "Load Maven Project" if prompted

3. **Add Java Files**
   - Copy the Java files from `src/main/java/com/skyscanner/` to your project's source directory
   - Ensure the package structure is `com.skyscanner`

4. **Update HoenScannerApplication**
   - Open `HoenScannerApplication.java`
   - Replace the `run()` method with the implementation from `HoenScannerApplication_run_method.java`

5. **Add JSON Data Files**
   - Ensure `rental_cars.json` and `hotels.json` are in `src/main/resources/`
   - These files should contain arrays of SearchResult objects

## Running the Application

### In IntelliJ
1. Click the green run button (▶) in the upper right corner
2. The application will start on `http://localhost:8080`
3. You should see "Welcome to Hoen Scanner!" in the logs

### From Command Line
```bash
mvn clean install
mvn exec:java -Dexec.mainClass="com.skyscanner.HoenScannerApplication"
```

## Testing the API

### Using Postman

1. **Download and install Postman**
   - https://www.postman.com/downloads/

2. **Create a new request**
   - Method: `POST`
   - URL: `http://localhost:8080/search`

3. **Configure the request**
   - Go to Body tab
   - Select "Raw"
   - Select "JSON" from the dropdown
   - Enter the following JSON:
     ```json
     {"city": "petalborough"}
     ```

4. **Send the request**
   - Click "Send"
   - You should see a list of rental cars and hotels in the response

### Example Requests

**Search for Petalborough:**
```bash
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "petalborough"}'
```

**Search for Rustburg:**
```bash
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "rustburg"}'
```

**Search for Shaleport:**
```bash
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "shaleport"}'
```

### Expected Response
```json
[
  {
    "city": "petalborough",
    "title": "Budget Car Rental",
    "kind": "rental_car"
  },
  {
    "city": "petalborough",
    "title": "Petalborough Inn",
    "kind": "hotel"
  }
]
```

## Development

### Adding New Features

To extend the microservice:

1. **Add new search criteria** - Modify `Search.java` to accept additional fields
2. **Add filtering logic** - Update the `search()` method in `SearchResource.java`
3. **Add new data sources** - Load additional JSON files in the `run()` method

### Dependencies

- **Dropwizard** - Microservice framework
- **Jackson** - JSON processing
- **Jakarta** - Java web services

## Troubleshooting

### Port 8080 already in use
- Change the port in `config.yml`
- Or kill the process: `lsof -i :8080` then `kill -9 <PID>`

### JSON parsing errors
- Ensure JSON files are properly formatted
- Verify SearchResult fields match the JSON structure

### Maven build fails
- Run `mvn clean install` to clear build artifacts
- Ensure Java 19+ is installed: `java -version`

## Deployment

This microservice can be deployed to any environment supporting Java:
- Docker containers
- Kubernetes clusters
- Cloud platforms (AWS, GCP, Azure)
- Traditional servers

See Dropwizard documentation for deployment best practices.

## Resources

- [Dropwizard Documentation](https://www.dropwizard.io/)
- [REST API Best Practices](https://restfulapi.net/)
- [Microservices Architecture](https://microservices.io/)

## Task Submission

Once complete:
1. Commit and push all changes to GitHub
2. Submit the repository URL to the Forage platform
3. Include the GitHub repo link in your submission

## License

This project is part of the Forage Software Engineering Virtual Experience Program.

---

**Status**: Ready for testing and submission ✅
