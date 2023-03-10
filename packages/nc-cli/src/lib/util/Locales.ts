import osLocale from 'os-locale';

class Locales {
  public static getPrompt() {
    const x = new Date();
    const offset = -x.getTimezoneOffset();

    let prompt = {};

    const locale = offset === 330 ? 'en-IN' : osLocale.sync();
    switch (locale) {
      case 'en':
      case 'en-GB':
      case 'en-AU':
      case 'en-CA':
      case 'en-IE':
      case 'en-US':
      default:
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Reddit',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'English',
          message: '\n\nš Hello! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'zh':
      case 'zh-Hans':
      case 'zh-Hant':
      case 'zh-CN':
      case 'zh-HK':
      case 'zh-SG':
      case 'zh-TW':
        prompt = {
          choices: [
            'WeChat',
            'Github - ā­ļø or š repo',
            'č±ē£', // douban
            'ę°ęµŖå¾®å', // weibo
            'Renren',
            'Line',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Chinese',
          message: '\n\nš ä½ å„½! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'en-IN':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'WhatsApp',
            'Linkedin',
            'Facebook',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'English (India)',
          message: '\n\nš Hello / ą¤Øą¤®ą¤øą„ą¤¤ą„ / ą²Ø ą²® ą²øą³ą²ą²¾ ą²° / ą“Ø ą“® ą“øąµ ą“ą“¾ ą“°ą“ / ą®µą®£ą®ąÆą®ą®®ąÆ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'de':
      case 'de-DE':
      case 'de-CH':
      case 'de-AT':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'German',
          message: '\n\nš Hallo! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'el':
      case 'el-GR':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Greek',
          message: '\n\nš ĪĪµĪ¹Ī¬ ĻĪæĻ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'es':
      case 'es-AR':
      case 'es-419':
      case 'es-CL':
      case 'es-CO':
      case 'es-EC':
      case 'es-ES':
      case 'es-LA':
      case 'es-NI':
      case 'es-MX':
      case 'es-US':
      case 'es-VE':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Spanish',
          message: '\n\nš Hola! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'fa':
      case 'fa-IR':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Persian',
          message: '\n\nš Ų³ŁŲ§Ł! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'fi':
      case 'fi-FI':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Finnish',
          message: '\n\nš Ų³ŁŲ§Ł! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'fr':
      case 'fr-CA':
      case 'fr-FR':
      case 'fr-BE':
      case 'fr-CH':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'French',
          message: '\n\nš Bonjour! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'ga':
      case 'ga-IE':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Irish',
          message: '\n\nš Dia dhuit! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'he':
      case 'he-IL':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Hebrew',
          message: '\n\nš ×©×××! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'it':
      case 'it-IT':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Italian',
          message: '\n\nš Ciao! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'ja':
      case 'ja-JP':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Line',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'WeChat',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Japanese',
          message: '\n\nš ććć«ć”ćÆ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'ko':
      case 'ko-KR':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Line',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'WeChat',
            'č±ē£', // douban
            'ę°ęµŖå¾®å', // weibo
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Korean',
          message: '\n\nš ģ¬ė³“ģøģ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'mn-MN':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Mongolian',
          message: '\n\nš Š”Š°Š¹Š½ ŃŃ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'nl':
      case 'nl-BE':
      case 'nl-NL':
      case 'nn-NO':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Dutch',
          message: '\n\nš Hallo! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'pt':
      case 'pt-BR':
      case 'pt-PT':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Portuguese',
          message: '\n\nš OlĆ”! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'ru':
      case 'ru-RU':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'OKru',
            'Telegram',
            'Linkedin',
            'Vk',
            'Wykop',
            'Facebook',
            'WhatsApp',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Russian',
          message: '\n\nš ŠŠ“ŃŠ°Š²ŃŃŠ²ŃŠ¹ŃŠµ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'sv':
      case 'sv-SE':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'WeChat',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Swedish',
          message: '\n\nš Hej! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'th':
      case 'th-TH':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Thai',
          message: '\n\nš ąøŖąø§ąø±ąøŖąøąøµ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'tl':
      case 'tl-PH':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'WeChat',
            'Telegram',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Filipino',
          message: '\n\nš Kamusta! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'tr':
      case 'tr-TR':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Turkish',
          message: '\n\nš Merhaba! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'uk':
      case 'uk-UA':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'OKru',
            // 'Reddit',
            'Linkedin',
            'Facebook',
            'WhatsApp',
            'Telegram',
            'Vk',
            'Wykop',
            'Next time',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Ukrainian',
          message: '\n\nš ŠŠ“ŃŠ°Š²ŃŃŠ²ŃŠ¹ŃŠµ! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;

      case 'vi':
      case 'vi-VN':
        prompt = {
          choices: [
            'Twitter',
            'Github - ā­ļø or š repo',
            'Linkedin',
            // 'Reddit',
            'Facebook',
            'WhatsApp',
            'WeChat',
            'Telegram',
            'Please dont ask me',
            '- - - - - - - -'
          ],
          language: 'Vietnamese',
          message: '\n\nš xin chĆ o! š \n\nš„ Loving XgenCloud? š„\n\nš Please mention a word about us to your friends & followers. š\n\n'
            .green
        };
        break;
    }

    return prompt;
  }
}

export default Locales;
