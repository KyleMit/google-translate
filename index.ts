import { TranslationServiceClient } from '@google-cloud/translate';
import { project_id } from './credentials.json'

const LOCATION = 'global'

const translationClient = new TranslationServiceClient({
    keyFilename: 'credentials.json'
})


async function translateText(text: string) {
    // Construct request
    const request = {
      parent: `projects/${project_id}/locations/${LOCATION}`,
      contents: [text],
      mimeType: 'text/plain', // mime types: text/plain, text/html
      sourceLanguageCode: 'en',
      targetLanguageCode: 'es',
    };

    // Run request
    const [response] = await translationClient.translateText(request);

    console.log(response);
    // const translations = Array.isArray(response.translations) ? response.translations : [response.translations];

    // translations.forEach(translation =>  {
    //     console.log(`Translation: ${translation?.translatedText}`);
    // })

  }

translateText('1 - 5 years');
