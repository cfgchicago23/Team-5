"use client";
import React, { useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar'

const Example = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("en-es"); 

  function base64toBlob(base64) {
    const binary = atob(base64);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    return new Blob([array], { type: 'audio/mp3' }); // Change the type if necessary
  }

  const fetchAudio = async(text) => {
    const request = {
      input: {text: text},
      // Select the language and SSML voice gender (optional)
      voice: {languageCode: language, ssmlGender: 'NEUTRAL'},
      // select the type of audio encoding
      audioConfig: {audioEncoding: 'MP3'}
    };

    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:8080/translate",
      data: request,
      headers: { "Content-Type": "application/json" },
    })
    const audioBlob = base64toBlob(response.data);
    const blobUrl = URL.createObjectURL(audioBlob);
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = blobUrl;
  }

  const fetchTranslation = async () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = null;

    const response = await axios({
      method: "post",
      url: "/api/huggingface", 
      data: { text: inputText, lang: language },
      headers: { "Content-Type": "application/json" },
    });

    setTranslatedText(response.data.translation_text);
    fetchAudio(response.data.translation_text)
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <main>
    <Navbar page="translator" />
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Aurora Translator</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Select Language</label>
                  <select
                    onChange={handleLanguageChange}
                    value={language}
                    className="p-4 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-green-500"
                  >
                    <option value="en-es">English to Spanish</option>
                    <option value="en-de">English to German</option>
                    <option value="en-fr">English to French</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Input Text</label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={inputText}
                    className="p-4 border border-gray-300 rounded text-gray-700 focus:outline-none focus:border-green-500"
                  />
                </div>
                <button  
                  onClick={fetchTranslation}
                  className="mt-6 px-10 py-3 bg-gradient-to-r from-green-400-400 to-light-blue-500 text-black rounded shadow-md hover:shadow-lg transition duration-300"
                >
                  Translate
                </button>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p className="text-lg text-gray-700">{translatedText}</p>
                <audio id="audioPlayer" controls></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Example;