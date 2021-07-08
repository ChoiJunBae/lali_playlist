package com.example.Lali.Play.openWeather;

import lombok.Data;

//data bean 사용을 하여 getter/setter 기능을 구현
@Data
public class OpenWeather {
    private String country;
    private String city;
    private String date;
    private String template;
}
