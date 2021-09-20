// Imports the Google Cloud client library
// const {Translate} = require('@google-cloud/translate').v2;
import { v2 } from '@google-cloud/translate';
const { Translate } = v2;


const translateClient = new Translate({
    keyFilename: 'credentials.json'
});


const target = 'es';

async function translateText(text: string) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translateClient.translate(text, target);
  console.log(translations);
//   translations = Array.isArray(translations) ? translations : [translations];
//   console.log('Translations:');
//   translations.forEach((translation: string) => {
//     console.log(translation);
//   });
}

translateText('1 - 5 years');
