# Setup Instructions for Skyscanner Dropwizard Microservice

This guide will help you set up and run the microservice after extracting the project.

## Step 1: Extract the ZIP File

Extract the `skyscanner-dropwizard-microservice.zip` file to your desired location.

```bash
unzip skyscanner-dropwizard-microservice.zip
cd skyscanner-dropwizard-microservice
```

## Step 2: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Dropwizard microservice for car rental and hotel search"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `skyscanner-dropwizard-microservice`
3. Do NOT initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 4: Add Remote and Push

```bash
git remote add origin https://github.com/YOUR_USERNAME/skyscanner-dropwizard-microservice.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Integrate with Starter Repository

If you're using the Forage starter repository:

1. Fork the starter Dropwizard repository from Forage
2. Replace the following files with ours:
   - `src/main/java/com/skyscanner/Search.java`
   - `src/main/java/com/skyscanner/SearchResult.java`
   - `src/main/java/com/skyscanner/SearchResource.java`

3. Update the `run()` method in `HoenScannerApplication.java`:
   ```java
   @Override
   public void run(final HoenScannerConfiguration configuration, final Environment environment) throws Exception {
       ObjectMapper mapper = new ObjectMapper();
       
       // Load rental cars from JSON
       List<SearchResult> carResults = Arrays.asList(
           mapper.readValue(
               getClass().getClassLoader().getResource("rental_cars.json"),
               SearchResult[].class
           )
       );
       
       // Load hotels from JSON
       List<SearchResult> hotelResults = Arrays.asList(
           mapper.readValue(
               getClass().getClassLoader().getResource("hotels.json"),
               SearchResult[].class
           )
       );
       
       // Combine both lists
       List<SearchResult> searchResults = new ArrayList<>();
       searchResults.addAll(carResults);
       searchResults.addAll(hotelResults);
       
       // Register the search resource
       final SearchResource resource = new SearchResource(searchResults);
       environment.jersey().register(resource);
   }
   ```

4. Ensure `rental_cars.json` and `hotels.json` are in `src/main/resources/`

## Step 6: Build the Project

```bash
mvn clean install
```

This will download all dependencies and build the project. This may take a few minutes on the first run.

## Step 7: Run the Application

### Using Maven:
```bash
mvn exec:java -Dexec.mainClass="com.skyscanner.HoenScannerApplication"
```

### Or in IntelliJ:
1. Open the project in IntelliJ
2. Click the green Run button (▶) in the upper right
3. Select the main application class

You should see output like:
```
Welcome to Hoen Scanner!
INFO  [2024-01-15 10:30:45,123] org.eclipse.jetty.server.Server: Started @5123ms
```

## Step 8: Test the API

### Using Postman:

1. Download Postman: https://www.postman.com/downloads/
2. Create a new POST request
3. URL: `http://localhost:8080/search`
4. Body (JSON):
   ```json
   {"city": "petalborough"}
   ```
5. Click Send

You should receive a list of rental cars and hotels for that city.

### Using curl:

```bash
curl -X POST http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -d '{"city": "petalborough"}'
```

## Step 9: Commit and Push

After confirming the application works:

```bash
git add .
git commit -m "Complete Dropwizard microservice implementation"
git push origin main
```

## Step 10: Submit to Forage

1. Go to the Forage task submission page
2. Copy your GitHub repository URL
3. Paste it in the "Submit a link to your GitHub repo" field
4. Click Next/Submit

## Troubleshooting

### Maven not found
- Install Maven: https://maven.apache.org/download.cgi
- Add Maven to your PATH

### Java version error
- Install OpenJDK 19+: https://jdk.java.net/19/
- Verify: `java -version`

### Port 8080 in use
```bash
# Find process using port 8080
lsof -i :8080

# Kill the process (replace 12345 with the PID)
kill -9 12345
```

### JSON parsing fails
- Ensure `rental_cars.json` and `hotels.json` are in `src/main/resources/`
- Verify JSON format is valid

## File Locations

After setup, your project should look like:

```
skyscanner-dropwizard-microservice/
├── .git/                           # Git repository
├── .gitignore
├── README.md
├── SETUP.md
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/skyscanner/
│   │   │       ├── Search.java
│   │   │       ├── SearchResult.java
│   │   │       ├── SearchResource.java
│   │   │       ├── HoenScannerApplication.java
│   │   │       └── HoenScannerConfiguration.java
│   │   └── resources/
│   │       ├── rental_cars.json
│   │       └── hotels.json
│   └── test/
├── target/                        # Build output (generated)
├── pom.xml
└── .idea/                         # IntelliJ config (generated)
```

## Next Steps

- Review the README.md for API documentation
- Test with different cities: petalborough, rustburg, shaleport
- Test with invalid cities to verify error handling
- Explore Dropwizard documentation for advanced features

Good luck with your submission! 🚀
