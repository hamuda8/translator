const translations = {
  'AR-EN': {
    'مرحبا': 'Hello',
    'كيف حالك؟': 'How are you?',
    'أنا بخير، شكرًا.': 'I am fine, thank you.',
  },
  'EN-AR': {
    'Hello': 'مرحبا',
    'How are you?': 'كيف حالك؟',
    'I am fine, thank you.': 'أنا بخير، شكرًا.',
  },
};

function translate(sourceLang, targetLang, text) {
  const key = `${sourceLang}-${targetLang}`;
  if (!translations[key]) {
    throw new Error(`Translation not available for ${sourceLang} to ${targetLang}`);
  }

  const translatedText = translations[key][text];
  if (!translatedText) {
    throw new Error(`No translation available for "${text}" from ${sourceLang} to ${targetLang}`);
  }

  return translatedText;
}

module.exports = { translate };
