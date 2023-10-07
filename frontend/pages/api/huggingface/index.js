import { HfInference } from "@huggingface/inference";

const HF_ACCESS_TOKEN = "";

const inference = new HfInference(HF_ACCESS_TOKEN);

export default async function handler(req, res) {
  const { text, lang } = req.body;

  const languageModels = {
    "en-es": "Helsinki-NLP/opus-mt-en-es",
    "en-de": "Helsinki-NLP/opus-mt-en-de",
    "en-fr": "Helsinki-NLP/opus-mt-en-fr",
  };

  const translationResponse = await inference.translation({
    model: languageModels[lang], 
    inputs: text,
  });

  res.status(200).json({
    translation_text: translationResponse.translation_text,
  });
}
