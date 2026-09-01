package com.skyscanner;

import io.dropwizard.core.Application;
import io.dropwizard.core.setup.Bootstrap;
import io.dropwizard.core.setup.Environment;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class HoenScannerApplication extends Application<HoenScannerConfiguration> {

    public static void main(final String[] args) throws Exception {
        new HoenScannerApplication().run(args);
    }

    @Override
    public String getName() {
        return "HoenScanner";
    }

    @Override
    public void initialize(final Bootstrap<HoenScannerConfiguration> bootstrap) {
        // Initialization if required
    }

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
        
        // Combine both lists into a single searchResults list
        List<SearchResult> searchResults = new ArrayList<>();
        searchResults.addAll(carResults);
        searchResults.addAll(hotelResults);
        
        // Register the search resource
        final SearchResource resource = new SearchResource(searchResults);
        environment.jersey().register(resource);
    }
}
