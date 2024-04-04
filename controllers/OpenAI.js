const express = require('express');
const router = express.Router();
var _ = require("underscore");
let PizzaData = require('../models/PizzaData');
let Cart = require('../models/Cart');
const OpenAI = require('openai');
let OrderData = require('../models/ConfirmedOrder');
const OrderModel = require("../models/ConfirmedOrder"); // Assuming the model file is in a separate file
const multer = require('multer');
const openai = new OpenAI({
    apiKey: ""
});
const prompt = "A sketch of a cat playing basketball";
const numberOfImages = 2;
const imageSize = "1024x1024";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name for the uploaded file
    }
});
const upload = multer({ storage: storage });
module.exports = function () {

    router.post('/', async (req, res) => {
        console.log(req.body.prompt)
        try {
            const imageGeneration = await openai.images.generate({
                prompt: req.body.prompt,
                n: numberOfImages,
                size: imageSize
            });


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully Generated the Image Requested  ",
                    "caption": req.body.prompt,
                    "generateImg": imageGeneration.data[0].url,
                    "generateImg2": imageGeneration.data[1].url
                },
            ];
            // Process the response data, for example:
            console.log(imageDataArray);


            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    })

    router.post('/generate-text', async (req, res) => {

        console.log(req.body.prompt)
        console.log(req.body.selectionData)
        try {

            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You Are An Content Writter on " + req.body.selectionData + " And Shoudl write on the Topic " + req.body.prompt + " And the output should be atelast 300 Works Long, Output should be Only the Body of the given task nothing else, Make sure the output is accurate" }],
                model: "gpt-3.5-turbo",
            });



            console.log('here', completion.choices[0].message.content)


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully " + req.body.prompt,
                    "caption": completion.choices[0].message.content,

                },
            ];
            // Process the response data, for example:
            console.log('here', imageDataArray);


            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    })

    router.post('/generate-email', async (req, res) => {
        console.log(req.body.prompt);

        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You are an Email Writer. Write an email on " + req.body.prompt + " . The output sequence must exactly match and should always start with the given keywords: Subject, Dear, Body1, Body2, Conclusion do not include \n or anythign keep verythign in a plain" }],
                model: "gpt-3.5-turbo",
            });
            console.log("-------------------")
            console.log(completion.choices[0].message.content)
            const emailContent = completion.choices[0].message.content;
            console.log("-------------------")
            const parts = emailContent.split('\n');
            //console.log("aprs ",parts)
            console.log("aprs ", parts[0])
            console.log("aprs ", parts[2])
            console.log("aprs ", parts[4])
            console.log("aprs ", parts[6])
            console.log("aprs ", parts[8])


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully " + req.body.prompt,
                    "caption": "completion.choices[0].message.content",
                    "Subject": parts[0],
                    "Dear": parts[2],
                    "Body1": parts[4],
                    "Body2": parts[6],
                    "Conclusion": parts[8],
                    "Bestregards": "Best regards,",
                    "name": "[Your Full Name]",
                },
            ];

            // Process the response data, for example:
            console.log('ImageDataArray:', imageDataArray);

            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    });


    router.post('/generate-code', async (req, res) => {

        console.log(req.body.prompt)
        console.log(req.body.selectionData)
        try {

            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You Are Software Developer  gnerate " + req.body.prompt + ", Output should be only the pure Code, must not include non code language, keep one  single quotation marks at the start and the end" }],
                model: "gpt-3.5-turbo",
            });



            console.log('here', completion.choices[0].message.content)


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully " + req.body.prompt,
                    "caption": completion.choices[0].message.content,

                },
            ];
            // Process the response data, for example:
            console.log('here', imageDataArray);


            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    })

    router.post('/AI-Asistant', async (req, res) => {

        console.log(req.body.prompt)
        console.log(req.body.selectionData)
        try {

            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You Are A AI Asistant that Answewr Questions, Answer Question :- " + req.body.prompt }],
                model: "gpt-3.5-turbo",
            });



            console.log('here', completion.choices[0].message.content)


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully " + req.body.prompt,
                    "caption": completion.choices[0].message.content,

                },
            ];
            // Process the response data, for example:
            console.log('here', imageDataArray);


            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    })

    router.post('/lyrics', async (req, res) => {

        console.log(req.body.prompt)
        console.log(req.body.selectionData)
        try {

            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You Are A Song Writter, Give me Lyrics for  " + req.body.prompt }],
                model: "gpt-3.5-turbo",
            });



            console.log('here', completion.choices[0].message.content)


            const imageDataArray = [
                {
                    "title": "Lumni AI successfully " + req.body.prompt,
                    "caption": completion.choices[0].message.content,

                },
            ];
            // Process the response data, for example:
            console.log('here', imageDataArray);


            // Send the response back to the client
            res.status(200).json({ success: true, data: imageDataArray });
        } catch (error) {
            console.error('Error generating image:', error);
            res.status(500).json({ success: false, error: 'Error generating image' });
        };
    })




    return router;
}