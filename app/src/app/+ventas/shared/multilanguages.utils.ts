export const multilanguageUtils = {
  multiLanguageToStore: (data: any, languages: Array<any>) => {
    const langCodes = languages.map((lang) => lang.code);
    const output = {langCodes: []};
    delete data['langCodes'];

    Object.keys(data).map((key, i) => {
      const langPos = langCodes.indexOf(key);
      if (langPos !== -1) {
        Object.keys(data[key]).map((fieldKey) => {
          if (!output[fieldKey]) {
            output[fieldKey] = [];
          }
          if (String(data[key][fieldKey]).trim() !== '') {
            output['langCodes'][langPos] = key;
            output[fieldKey][langPos] = data[key][fieldKey];
          }
        });
      } else {
        output[key] = data[key];
      }
    });

    return output;
  },

  storeToMultilanguage: (data: any, languages: Array<any>) => {
    const langCodes = languages.map((lang) => lang.code);
    const output = {};

    if (data.hasOwnProperty('langCodes')) {
      Object.keys(data).map((key) => {
        if (key !== 'langCodes' &&  Array.isArray(data[key])) {
          data['langCodes'].map((lang, langPos) => {
            if (!output[lang]) {
              output[lang] = {};
            }
            output[lang][key] = data[key][langPos] || '';
          });
        } else {
          output[key] = data[key];
        }
      });
    }
    languages.map((lang) => {
      if (!output[lang.code]) {
        output[lang.code] = {};
      }
    });
    return output;
  }
}
