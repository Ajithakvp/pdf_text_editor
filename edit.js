$('#editor').wysiwyg({
    toolbar: [
      ['mode'],
      ['operations', ['undo', 'rendo', 'cut', 'copy', 'paste']],
      ['styles'],
      ['fonts', ['select', 'size']],
      ['text', ['bold', 'italic', 'underline', 'strike', 'subscript', 'superscript', 'font-color', 'bg-color']],
      ['align', ['left', 'center', 'right', 'justify']],
      ['lists', ['unordered', 'ordered', 'indent', 'outdent']],
      ['components', ['table', /*'chart'*/]],
      ['intervals', ['line-height', 'letter-spacing']],
      ['insert', ['emoji', 'link', 'image', '<a href="https://www.jqueryscript.net/tags.php?/video/">video</a>', 'symbol', /*'bookmark'*/]],
      ['special', ['print', 'unformat', 'visual', 'clean']],
      /*['fullscreen'],*/
    ],
  });
  
  $('#editor').wysiwyg({
    fontSizes: ['8px', '9px', '10px', '11px', '12px', '14px', '15px', '16px', '18px', '20px', '24px', '30px', '32px', '36px', '48px'],
    fontSizeDefault: '12px',
    fontFamilies: ['Open Sans', 'Arial', 'Arial Black', 'Courier', 'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times', 'Times New Roman', 'Verdana'],
    fontFamilyDefault: 'Open Sans',
    emojiDefault: ["\u{1f600}", "\u{1f62c}", "\u{1f601}", "\u{1f602}", "\u{1f603}", "\u{1f604}", "\u{1f605}", "\u{1f606}", "\u{1f607}", "\u{1f609}", "\u{1f60a}", "\u{1f642}", "\u{1f643}", "\u{1f60b}", "\u{1f60c}", "\u{1f60d}", "\u{1f618}", "\u{1f617}", "\u{1f619}", "\u{1f61a}", "\u{1f61c}", "\u{1f61d}", "\u{1f61b}", "\u{1f911}", "\u{1f913}", "\u{1f60e}", "\u{1f917}", "\u{1f60f}", "\u{1f636}", "\u{1f610}", "\u{1f611}", "\u{1f612}", "\u{1f644}", "\u{1f914}", "\u{1f633}", "\u{1f61e}", "\u{1f61f}", "\u{1f620}", "\u{1f621}", "\u{1f614}", "\u{1f615}", "\u{1f641}", "\u{1f623}", "\u{1f616}", "\u{1f62b}", "\u{1f629}", "\u{1f624}", "\u{1f62e}", "\u{1f631}", "\u{1f628}", "\u{1f630}", "\u{1f62f}", "\u{1f626}", "\u{1f627}", "\u{1f622}", "\u{1f625}", "\u{1f62a}", "\u{1f613}", "\u{1f62d}", "\u{1f635}", "\u{1f632}", "\u{1f910}", "\u{1f637}", "\u{1f912}", "\u{1f915}", "\u{1f634}", "\u{1f4a4}"],
    symbolsDefault: ["&lt;", "&gt;", "&laquo;", "&raquo;", "&lsaquo;", "&rsaquo;", "&quot;", "&prime;", "&Prime;", "&lsquo;", "&rsquo;", "&sbquo;", "&ldquo;", "&rdquo;", "&bdquo;", "&#10076;", "&#10075;", "&amp;", "&apos;", "&sect;", "&copy;", "&not;", "&reg;", "&macr;", "&deg;", "&plusmn;", "&sup1;", "&sup2;", "&sup3;", "&frac14;", "&frac12;", "&frac34;", "&acute;", "&micro;", "&para;", "&middot;", "&iquest;", "&fnof;", "&trade;", "&bull;", "&hellip;", "&oline;", "&ndash;", "&mdash;", "&permil;", "&#125;", "&#123;", "&#61;", "&ne;", "&cong;", "&asymp;", "&le;", "&ge;", "&ang;", "&perp;", "&radic;", "&sum;", "&int;", "&#8251;", "&divide;", "&infin;", "&#64;", "&#91;", "&#93;", "&larr;", "&uarr;", "&rarr;", "&darr;", "&harr;", "&crarr;", "&lArr;", "&uArr;", "&rArr;", "&dArr;", "&hArr;", "&#10144;", "&#10148;", "&#10149;", "&#10150;", "&#10163;", "&#8634;", "&#8635;", "&#8679;", "&#8617;", "&#11015;", "&#11014;", "&spades;", "&clubs;", "&hearts;", "&diams;", "&#9825;", "&#9826;", "&#9828;", "&#9831;", "&#8372;", "&euro;", "&dollar;", "&cent;", "&pound;", "&#8381;", "&yen;", "&#8377;", "&#22291;", "&#8376;"],
    colorPalette: [["rgb(0, 0, 0)","rgb(67, 67, 67)","rgb(102, 102, 102)","rgb(153, 153, 153)","rgb(183, 183, 183)","rgb(204, 204, 204)","rgb(217, 217, 217)","rgb(239, 239, 239)","rgb(243, 243, 243)","rgb(255, 255, 255)"],["rgb(152, 0, 0)","rgb(255, 0, 0)","rgb(255, 153, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(74, 134, 232)","rgb(0, 0, 255)","rgb(153, 0, 255)","rgb(255, 0, 255)"],["rgb(230, 184, 175)","rgb(244, 204, 204)","rgb(252, 229, 205)","rgb(255, 242, 204)","rgb(217, 234, 211)","rgb(208, 224, 227)","rgb(201, 218, 248)","rgb(207, 226, 243)","rgb(217, 210, 233)","rgb(234, 209, 220)","rgb(221, 126, 107)","rgb(234, 153, 153)","rgb(249, 203, 156)","rgb(255, 229, 153)","rgb(182, 215, 168)","rgb(162, 196, 201)","rgb(164, 194, 244)","rgb(159, 197, 232)","rgb(180, 167, 214)","rgb(213, 166, 189)","rgb(204, 65, 37)","rgb(224, 102, 102)","rgb(246, 178, 107)","rgb(255, 217, 102)","rgb(147, 196, 125)","rgb(118, 165, 175)","rgb(109, 158, 235)","rgb(111, 168, 220)","rgb(142, 124, 195)","rgb(194, 123, 160)","rgb(166, 28, 0)","rgb(204, 0, 0)","rgb(230, 145, 56)","rgb(241, 194, 50)","rgb(106, 168, 79)","rgb(69, 129, 142)","rgb(60, 120, 216)","rgb(61, 133, 198)","rgb(103, 78, 167)","rgb(166, 77, 121)","rgb(133, 32, 12)","rgb(153, 0, 0)","rgb(180, 95, 6)","rgb(191, 144, 0)","rgb(56, 118, 29)","rgb(19, 79, 92)","rgb(17, 85, 204)","rgb(11, 83, 148)","rgb(53, 28, 117)","rgb(116, 27, 71)","rgb(91, 15, 0)","rgb(102, 0, 0)","rgb(120, 63, 4)","rgb(127, 96, 0)","rgb(39, 78, 19)","rgb(12, 52, 61)","rgb(28, 69, 135)","rgb(7, 55, 99)","rgb(32, 18, 77)","rgb(76, 17, 48)"]],
  });
  
  $('#editor').wysiwyg({
    mode: 'source'
  });
  $('#editor').wysiwyg({
    language: 'en-us',
    translations: {},
  });
  $('#editor').wysiwyg('destroy');