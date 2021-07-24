# code-20210722-rawllopes

navigate to project folder
Run command npm i
and run the server.js file using node server.js


api endpoint to calculate:

http://localhost/api/bmi/calculateBmi/
type:post
req.body: {
    "data": {
        "calculatedBmi": [
            {
                "Gender": "Male",
                "HeightCm": 171,
                "WeightKg": 96,
                "BMI": 56.1,
                "HealthRisk": "Very high risk",
                "BMICategory": "Very severely obese"
            },
            {
                "Gender": "Male",
                "HeightCm": 161,
                "WeightKg": 85,
                "BMI": 52.8,
                "HealthRisk": "Very high risk",
                "BMICategory": "Very severely obese"
            },
            {
                "Gender": "Male",
                "HeightCm": 180,
                "WeightKg": 77,
                "BMI": 42.8,
                "HealthRisk": "Very high risk",
                "BMICategory": "Very severely obese"
            },
            {
                "Gender": "Female",
                "HeightCm": 166,
                "WeightKg": 62,
                "BMI": 37.3,
                "HealthRisk": "High risk",
                "BMICategory": "Severely obese"
            },
            {
                "Gender": "Female",
                "HeightCm": 150,
                "WeightKg": 70,
                "BMI": 46.7,
                "HealthRisk": "Very high risk",
                "BMICategory": "Very severely obese"
            },
            {
                "Gender": "Female",
                "HeightCm": 167,
                "WeightKg": 82,
                "BMI": 49.1,
                "HealthRisk": "Very high risk",
                "BMICategory": "Very severely obese"
            }
        ]
    },
    "flag": 1,
    "message": "BMI calculated successfully."
}