'use strict'

exports.calculateBmi = async (req, res) => {
    try {
        if (req.body.bmiArray) {
            const bmiArray = req.body.bmiArray;

            const updatedBmi = bmiArray.map(data => {
                const bmi = parseFloat(((data.WeightKg * 100)/data.HeightCm).toFixed(1));
                let healthRisk = '';
                let bmiCategory = '';
                if (bmi <= 18.4) {
                    healthRisk = 'Malnutrition risk';
                    bmiCategory = 'Underweight';
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    healthRisk = 'Low risk';
                    bmiCategory = 'Normal weight';
                } else if (bmi >= 25 && bmi <= 29.9) {
                    healthRisk = 'Enhanced risk';
                    bmiCategory = 'Overweight';
                } else if (bmi >= 30 && bmi <= 34.9) {
                    healthRisk = 'Medium risk';
                    bmiCategory = 'Moderately obese';
                } else if (bmi >= 35 && bmi <= 39.9) {
                    healthRisk = 'High risk';
                    bmiCategory = 'Severely obese';
                } else {
                    healthRisk = 'Very high risk';
                    bmiCategory = 'Very severely obese';
                }
                return {
                   ...data, ...{BMI: bmi, HealthRisk: healthRisk, BMICategory: bmiCategory}
                }
            });

            res.status(200).send({
                data: {
                    calculatedBmi: updatedBmi
                },
                flag: 1,
                message: 'BMI calculated successfully.'
            });

        } else {
            res.status(401).send({
                data: {},
                flag: 0,
                message: 'BMI data not found. Expected array name: bmiArray',
                errInfo: 'bmiArray missing in request body.'
            });
        }
    } catch (error) {
        res.status(500).send({
            data: {},
            flag: 0,
            message: 'Error occured while calculating bmi.',
            errInfo: 'Error occured while calculating bmi.'
        });
    }
}