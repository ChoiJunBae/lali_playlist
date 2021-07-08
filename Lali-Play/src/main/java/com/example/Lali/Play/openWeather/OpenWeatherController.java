package com.example.Lali.Play.openWeather;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/weather")
public class OpenWeatherController {

    @Autowired
    private OpenWeatherMapper openWeatherMapper;

    @GetMapping("/")
    public List<Weather> getAll(){
        return openWeatherMapper.getAll();
    }
}
