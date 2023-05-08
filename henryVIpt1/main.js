
  //initilize svg or grab svg
  var svg = d3.select("svg");
  var width = svg.attr("width");
  var height = svg.attr("height");
  var color = d3.scaleOrdinal(d3.schemeCategory20b);
 
 
  //intialize data
  var graph = {
    nodes: [
      { name:"BEDFORD", size:"19", color:"rgb(16,43,76)"},
      { name:"GLOUCESTER", size:"47", color:"rgb(221,104,30)"},
      { name:"EXETER", size:"11", color:"rgb(78,78,132)"},
      { name:"OF WINCHESTER", size:"27", color:"rgb(120,254,60)"},
      { name:"Messenger", size:"14", color:"rgb(132,62,103)"},
      { name:"CHARLES", size:"40", color:"rgb(58,171,168)"},
      { name:"ALENCON", size:"18", color:"rgb(210,106,183)"},
      { name:"REIGNIER", size:"24", color:"rgb(174,61,149)"},
      { name:"BASTARD OF ORLEANS", size:"12", color:"rgb(165,176,32)"},
      { name:"JOAN LA PUCELLE", size:"46", color:"rgb(24,62,141)"},
      { name:"First Warder", size:"2", color:"rgb(135,73,116)"},
      { name:"Second Warder", size:"1", color:"rgb(33,79,64)"},
      { name:"WOODVILE", size:"2", color:"rgb(96,215,190)"},
      { name:"Mayor", size:"5", color:"rgb(109,122,42)"},
      { name:"Officer", size:"1", color:"rgb(8,230,91)"},
      { name:"Boy", size:"1", color:"rgb(208,69,47)"},
      { name:"SALISBURY", size:"4", color:"rgb(248,204,83)"},
      { name:"TALBOT", size:"56", color:"rgb(131,76,243)"},
      { name:"GARGRAVE", size:"2", color:"rgb(63,125,226)"},
      { name:"GLANSDALE", size:"1", color:"rgb(231,151,187)"},
      { name:"Sergeant", size:"1", color:"rgb(200,236,5)"},
      { name:"First Sentinel", size:"1", color:"rgb(139,18,247)"},
      { name:"BURGUNDY", size:"17", color:"rgb(177,172,43)"},
      { name:"Sentinels", size:"1", color:"rgb(25,51,74)"},
      { name:"Soldier", size:"1", color:"rgb(209,53,38)"},
      { name:"Captain", size:"5", color:"rgb(142,34,249)"},
      { name:"OF AUVERGNE", size:"13", color:"rgb(166,7,251)"},
      { name:"Porter", size:"1", color:"rgb(126,173,191)"},
      { name:"PLANTAGENET", size:"27", color:"rgb(235,8,65)"},
      { name:"SUFFOLK", size:"40", color:"rgb(126,226,185)"},
      { name:"SOMERSET", size:"27", color:"rgb(196,43,118)"},
      { name:"WARWICK", size:"24", color:"rgb(44,31,43)"},
      { name:"VERNON", size:"12", color:"rgb(128,111,126)"},
      { name:"Lawyer", size:"2", color:"rgb(219,255,100)"},
      { name:"MORTIMER", size:"9", color:"rgb(240,218,201)"},
      { name:"First Gaoler", size:"2", color:"rgb(242,215,151)"},
      { name:"KING HENRY VI", size:"29", color:"rgb(203,134,220)"},
      { name:"ALL", size:"1", color:"rgb(210,235,110)"},
      { name:"First Soldier", size:"1", color:"rgb(176,17,32)"},
      { name:"Watch", size:"2", color:"rgb(58,71,168)"},
      { name:"FASTOLFE", size:"3", color:"rgb(160,74,175)"},
      { name:"BASSET", size:"7", color:"rgb(206,40,133)"},
      { name:"YORK", size:"29", color:"rgb(237,170,103)"},
      { name:"General", size:"1", color:"rgb(199,102,92)"},
      { name:"LUCY", size:"14", color:"rgb(228,252,165)"},
      { name:"JOHN TALBOT", size:"11", color:"rgb(184,168,210)"},
      { name:"Servant", size:"1", color:"rgb(74,190,152)"},
      { name:"Legate", size:"1", color:"rgb(71,35,5)"},
      { name:"Scout", size:"2", color:"rgb(170,207,50)"},
      { name:"MARGARET", size:"22", color:"rgb(52,137,134)"},
      { name:"SU FFOLK", size:"1", color:"rgb(48,68,251)"},
      { name:"Shepherd", size:"4", color:"rgb(101,112,10)"}],
    links: [{source:"BEDFORD", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"BEDFORD"},
    {source:"BEDFORD", target:"Messenger"},
    {source:"Messenger", target:"BEDFORD"},
    {source:"BEDFORD", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"Messenger"},
    {source:"Messenger", target:"EXETER"},
    {source:"EXETER", target:"BEDFORD"},
    {source:"BEDFORD", target:"Messenger"},
    {source:"Messenger", target:"EXETER"},
    {source:"EXETER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"BEDFORD"},
    {source:"BEDFORD", target:"Messenger"},
    {source:"Messenger", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"Messenger"},
    {source:"Messenger", target:"BEDFORD"},
    {source:"BEDFORD", target:"Messenger"},
    {source:"Messenger", target:"BEDFORD"},
    {source:"BEDFORD", target:"Messenger"},
    {source:"Messenger", target:"EXETER"},
    {source:"EXETER", target:"BEDFORD"},
    {source:"BEDFORD", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"CHARLES"},
    {source:"CHARLES", target:"ALENCON"},
    {source:"ALENCON", target:"REIGNIER"},
    {source:"REIGNIER", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"CHARLES"},
    {source:"CHARLES", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"REIGNIER"},
    {source:"REIGNIER", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"REIGNIER"},
    {source:"REIGNIER", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"ALENCON"},
    {source:"ALENCON", target:"REIGNIER"},
    {source:"REIGNIER", target:"CHARLES"},
    {source:"CHARLES", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"First Warder"},
    {source:"First Warder", target:"Second Warder"},
    {source:"Second Warder", target:"First Warder"},
    {source:"First Warder", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"WOODVILE"},
    {source:"WOODVILE", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"WOODVILE"},
    {source:"WOODVILE", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"Mayor"},
    {source:"Mayor", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"Mayor"},
    {source:"Mayor", target:"Officer"},
    {source:"Officer", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"Mayor"},
    {source:"Mayor", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"Mayor"},
    {source:"Mayor", target:"Boy"},
    {source:"Boy", target:"SALISBURY"},
    {source:"SALISBURY", target:"TALBOT"},
    {source:"TALBOT", target:"SALISBURY"},
    {source:"SALISBURY", target:"TALBOT"},
    {source:"TALBOT", target:"SALISBURY"},
    {source:"SALISBURY", target:"GARGRAVE"},
    {source:"GARGRAVE", target:"GLANSDALE"},
    {source:"GLANSDALE", target:"TALBOT"},
    {source:"TALBOT", target:"SALISBURY"},
    {source:"SALISBURY", target:"GARGRAVE"},
    {source:"GARGRAVE", target:"TALBOT"},
    {source:"TALBOT", target:"Messenger"},
    {source:"Messenger", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"CHARLES"},
    {source:"CHARLES", target:"Sergeant"},
    {source:"Sergeant", target:"First Sentinel"},
    {source:"First Sentinel", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"Sentinels"},
    {source:"Sentinels", target:"ALENCON"},
    {source:"ALENCON", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"ALENCON"},
    {source:"ALENCON", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"REIGNIER"},
    {source:"REIGNIER", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"Soldier"},
    {source:"Soldier", target:"BEDFORD"},
    {source:"BEDFORD", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"Messenger"},
    {source:"Messenger", target:"TALBOT"},
    {source:"TALBOT", target:"Messenger"},
    {source:"Messenger", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"TALBOT"},
    {source:"TALBOT", target:"Captain"},
    {source:"Captain", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"Porter"},
    {source:"Porter", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"Messenger"},
    {source:"Messenger", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"Messenger"},
    {source:"Messenger", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"Messenger"},
    {source:"Messenger", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"TALBOT"},
    {source:"TALBOT", target:"OF AUVERGNE"},
    {source:"OF AUVERGNE", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"VERNON"},
    {source:"VERNON", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"VERNON"},
    {source:"VERNON", target:"SOMERSET"},
    {source:"SOMERSET", target:"VERNON"},
    {source:"VERNON", target:"SOMERSET"},
    {source:"SOMERSET", target:"Lawyer"},
    {source:"Lawyer", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"SOMERSET"},
    {source:"SOMERSET", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"WARWICK"},
    {source:"WARWICK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"VERNON"},
    {source:"VERNON", target:"Lawyer"},
    {source:"Lawyer", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"First Gaoler"},
    {source:"First Gaoler", target:"MORTIMER"},
    {source:"MORTIMER", target:"First Gaoler"},
    {source:"First Gaoler", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"MORTIMER"},
    {source:"MORTIMER", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"WARWICK"},
    {source:"WARWICK", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"SOMERSET"},
    {source:"SOMERSET", target:"WARWICK"},
    {source:"WARWICK", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"Mayor"},
    {source:"Mayor", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"WARWICK"},
    {source:"WARWICK", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"PLANTAGENET"},
    {source:"PLANTAGENET", target:"ALL"},
    {source:"ALL", target:"SOMERSET"},
    {source:"SOMERSET", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"First Soldier"},
    {source:"First Soldier", target:"Watch"},
    {source:"Watch", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"Watch"},
    {source:"Watch", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"REIGNIER"},
    {source:"REIGNIER", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"CHARLES"},
    {source:"CHARLES", target:"REIGNIER"},
    {source:"REIGNIER", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"CHARLES"},
    {source:"CHARLES", target:"BEDFORD"},
    {source:"BEDFORD", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"ALENCON"},
    {source:"ALENCON", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"TALBOT"},
    {source:"TALBOT", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"BEDFORD"},
    {source:"BEDFORD", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"BEDFORD"},
    {source:"BEDFORD", target:"TALBOT"},
    {source:"TALBOT", target:"Captain"},
    {source:"Captain", target:"FASTOLFE"},
    {source:"FASTOLFE", target:"Captain"},
    {source:"Captain", target:"FASTOLFE"},
    {source:"FASTOLFE", target:"Captain"},
    {source:"Captain", target:"BEDFORD"},
    {source:"BEDFORD", target:"TALBOT"},
    {source:"TALBOT", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"TALBOT"},
    {source:"TALBOT", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"ALENCON"},
    {source:"ALENCON", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"ALENCON"},
    {source:"ALENCON", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"ALENCON"},
    {source:"ALENCON", target:"CHARLES"},
    {source:"CHARLES", target:"TALBOT"},
    {source:"TALBOT", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"VERNON"},
    {source:"VERNON", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"FASTOLFE"},
    {source:"FASTOLFE", target:"TALBOT"},
    {source:"TALBOT", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"TALBOT"},
    {source:"TALBOT", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"TALBOT"},
    {source:"TALBOT", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"TALBOT"},
    {source:"TALBOT", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"YORK"},
    {source:"YORK", target:"SOMERSET"},
    {source:"SOMERSET", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"BASSET"},
    {source:"BASSET", target:"VERNON"},
    {source:"VERNON", target:"YORK"},
    {source:"YORK", target:"SOMERSET"},
    {source:"SOMERSET", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"YORK"},
    {source:"YORK", target:"SOMERSET"},
    {source:"SOMERSET", target:"YORK"},
    {source:"YORK", target:"VERNON"},
    {source:"VERNON", target:"BASSET"},
    {source:"BASSET", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"EXETER"},
    {source:"EXETER", target:"TALBOT"},
    {source:"TALBOT", target:"General"},
    {source:"General", target:"TALBOT"},
    {source:"TALBOT", target:"YORK"},
    {source:"YORK", target:"Messenger"},
    {source:"Messenger", target:"YORK"},
    {source:"YORK", target:"LUCY"},
    {source:"LUCY", target:"YORK"},
    {source:"YORK", target:"LUCY"},
    {source:"LUCY", target:"YORK"},
    {source:"YORK", target:"LUCY"},
    {source:"LUCY", target:"YORK"},
    {source:"YORK", target:"LUCY"},
    {source:"LUCY", target:"SOMERSET"},
    {source:"SOMERSET", target:"Captain"},
    {source:"Captain", target:"SOMERSET"},
    {source:"SOMERSET", target:"LUCY"},
    {source:"LUCY", target:"SOMERSET"},
    {source:"SOMERSET", target:"LUCY"},
    {source:"LUCY", target:"SOMERSET"},
    {source:"SOMERSET", target:"LUCY"},
    {source:"LUCY", target:"SOMERSET"},
    {source:"SOMERSET", target:"LUCY"},
    {source:"LUCY", target:"SOMERSET"},
    {source:"SOMERSET", target:"LUCY"},
    {source:"LUCY", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"JOHN TALBOT"},
    {source:"JOHN TALBOT", target:"TALBOT"},
    {source:"TALBOT", target:"Servant"},
    {source:"Servant", target:"TALBOT"},
    {source:"TALBOT", target:"CHARLES"},
    {source:"CHARLES", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"BASTARD OF ORLEANS"},
    {source:"BASTARD OF ORLEANS", target:"CHARLES"},
    {source:"CHARLES", target:"LUCY"},
    {source:"LUCY", target:"CHARLES"},
    {source:"CHARLES", target:"LUCY"},
    {source:"LUCY", target:"CHARLES"},
    {source:"CHARLES", target:"LUCY"},
    {source:"LUCY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"LUCY"},
    {source:"LUCY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"LUCY"},
    {source:"LUCY", target:"CHARLES"},
    {source:"CHARLES", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"EXETER"},
    {source:"EXETER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"Legate"},
    {source:"Legate", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"CHARLES"},
    {source:"CHARLES", target:"ALENCON"},
    {source:"ALENCON", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"Scout"},
    {source:"Scout", target:"CHARLES"},
    {source:"CHARLES", target:"Scout"},
    {source:"Scout", target:"CHARLES"},
    {source:"CHARLES", target:"BURGUNDY"},
    {source:"BURGUNDY", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"CHARLES"},
    {source:"CHARLES", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SU FFOLK"},
    {source:"SU FFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"REIGNIER"},
    {source:"REIGNIER", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"MARGARET"},
    {source:"MARGARET", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"YORK"},
    {source:"YORK", target:"Shepherd"},
    {source:"Shepherd", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"Shepherd"},
    {source:"Shepherd", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"Shepherd"},
    {source:"Shepherd", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"Shepherd"},
    {source:"Shepherd", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"YORK"},
    {source:"YORK", target:"JOAN LA PUCELLE"},
    {source:"JOAN LA PUCELLE", target:"YORK"},
    {source:"YORK", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"YORK"},
    {source:"YORK", target:"WARWICK"},
    {source:"WARWICK", target:"CHARLES"},
    {source:"CHARLES", target:"YORK"},
    {source:"YORK", target:"OF WINCHESTER"},
    {source:"OF WINCHESTER", target:"ALENCON"},
    {source:"ALENCON", target:"CHARLES"},
    {source:"CHARLES", target:"YORK"},
    {source:"YORK", target:"REIGNIER"},
    {source:"REIGNIER", target:"ALENCON"},
    {source:"ALENCON", target:"WARWICK"},
    {source:"WARWICK", target:"CHARLES"},
    {source:"CHARLES", target:"YORK"},
    {source:"YORK", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"EXETER"},
    {source:"EXETER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"KING HENRY VI"},
    {source:"KING HENRY VI", target:"GLOUCESTER"},
    {source:"GLOUCESTER", target:"SUFFOLK"},
    {source:"SUFFOLK", target:"KING HENRY VI"}]
  };
// var myColor =d3.scaleOrdinal().domain(node)
// .range(["red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue"])

  var simulation = d3
    .forceSimulation(graph.nodes)
    .force(
      "link",
      d3
        .forceLink()
        .id(function(d) {
          return d.name;
        })
        .links(graph.links)
    )
    .force("gravity",gravity(-1000))
  

    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
      return 3;
    });
    var drag = 
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);


var textandnode = svg
  .append("g")
  .selectAll("g")
  .data(graph.nodes)
  .enter()
  .append("g")
  .call(drag)
  ;

var circles = textandnode
.append("circle")
.attr("r", (d)=>d.size)
//.attr("r", "20")
//.attr("fill", function(d){
  //return color(d.group);
//})
.attr("fill", (d)=>d.color)
;

var texts = textandnode
.append("text")
.text(function(d){return d.name});

  // var node = svg
  //   .append("g")
  //   .attr("class", "nodes")
  //   .selectAll("circle")
  //   .data(graph.nodes)
  //   .enter()
  //   .append("circle")
  //   .attr("r", 10)
  //   .attr("fill", "red");

    // var drag = 
    //   d3
    //     .drag()
    //     .on("start", dragstarted)
    //     .on("drag", dragged)
    //     .on("end", dragended);
//node.call(drag);
  

 
  // nodes.append("text")
  // .text(function(d){
  //   return d.name;
  // })
  // .style("fill","#000")
  // .style("font-size", "20px")
  // .attr("x",6)
  // .attr("y",3);

// simulation.force(
//   'link',
//   d3.forceLink().id((link)=>link.id)
//   .strength((link)=>link.strength)
// );
// const linkElements = svg
// .append('g')
// .selectAll('line')
// .data(links)
// .enter()
// .append('line')
// .attr('stroke-width',1)
// .attr('stroke','#E5E5E5')
// .attr('x1',(link) => link.source.x)
// .attr('y1',(link) => link.source.y)
// .attr('x2',(link) => link.target.x)
// .attr('y2',(link) => link.target.y);

//simulation.force('link').link(links);
  function ticked() {
    textandnode.attr("transform", function(d){
      return "translate("+d.x+","+d.y+")";
    });
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });
    
  //   node
  //     .attr("cx", function(d) {
  //       return d.x;
  //     })
  //     .attr("cy", function(d) {
  //       return d.y;
  //     });
  // 
}

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
 function gravity(alpha){
  return function(d){
    d.y+=(d.cy -d.y)*alpha;
    d.x +=(d.cx-d.x)*alpha;
  };
 }
 


