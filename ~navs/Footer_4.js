var nav_Footer_4 = new Object();

nav_Footer_4.mouseoverBold="true";
nav_Footer_4.selectedBgcolor="";
nav_Footer_4.importedImageMouseOver="";
nav_Footer_4.numLinks="5";
nav_Footer_4.textColor="#000000";
nav_Footer_4.mouseoverBgcolor="";
nav_Footer_4.tabCategory="basic";
nav_Footer_4.border="";
nav_Footer_4.selectedItalic="false";
nav_Footer_4.graphicMouseover="true";
nav_Footer_4.type="Navigation";
nav_Footer_4.basicTab="White";
nav_Footer_4.horizontalSpacing="10";
nav_Footer_4.horizontalWrap="5";
nav_Footer_4.shinyButton="Shiny_Aqua";
nav_Footer_4.mouseoverEffect="true";
nav_Footer_4.modernButton="Basic_Black";
nav_Footer_4.orientation="vertical";
nav_Footer_4.funButton="Eggs";
nav_Footer_4.darkButton="Basic_Black";
nav_Footer_4.selectedTextcolor="#1310CC";
nav_Footer_4.lineWidth="1";
nav_Footer_4.mouseoverTextcolor="#0131CC";
nav_Footer_4.bold="false";
nav_Footer_4.texturedButton="Brick";
nav_Footer_4.accentStyle="Arrow";
nav_Footer_4.style="text";
nav_Footer_4.holidayButton="Christmas_Ornaments";
nav_Footer_4.textSize="8";
nav_Footer_4.lineColor="#EDEBE8";
nav_Footer_4.brightButton="Chicky";
nav_Footer_4.mouseoverUnderline="false";
nav_Footer_4.accentColor="Black";
nav_Footer_4.imageHeight="";
nav_Footer_4.background="";
nav_Footer_4.textFont="Helvetica";
nav_Footer_4.hasLinks="true";
nav_Footer_4.sophisticatedButton="Antique";
nav_Footer_4.underline="false";
nav_Footer_4.simpleButton="Autumn_Leaves";
nav_Footer_4.italic="false";
nav_Footer_4.importedImageSelected="";
nav_Footer_4.basicButton="Gray";
nav_Footer_4.navID="nav_Footer_4";
nav_Footer_4.buttonCategory="fun";
nav_Footer_4.dirty="false";
nav_Footer_4.selectedBold="true";
nav_Footer_4.selectedEffect="true";
nav_Footer_4.graphicSelected="true";
nav_Footer_4.version="5";
nav_Footer_4.verticalSpacing="10";
nav_Footer_4.squareTab="Camel";
nav_Footer_4.mouseoverItalic="false";
nav_Footer_4.justification="left";
nav_Footer_4.imageWidth="";
nav_Footer_4.selectedUnderline="false";
nav_Footer_4.accentType="lines";
nav_Footer_4.importedImage="";
nav_Footer_4.width="135";
nav_Footer_4.height="119";

nav_Footer_4.navName = "Footer_4";
nav_Footer_4.imagePath = "null";
nav_Footer_4.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_Footer_4.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_Footer_4.imageWidth = "16";
nav_Footer_4.imageHeight = "16";
nav_Footer_4.fontClass = "size8 Helvetica8";
nav_Footer_4.fontFace = "Helvetica, Arial, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}


nav_Footer_4.links=new Array(5);
var nav_Footer_4_Link1 = new Object();
nav_Footer_4_Link1.type = "existing";
nav_Footer_4_Link1.displayName = "Survey Myths, Debunked";
nav_Footer_4_Link1.linkWindow = "_self";
nav_Footer_4_Link1.linkValue = "land-survey-myths-debunked.html";
nav_Footer_4_Link1.linkIndex = "1";
nav_Footer_4.links[0] = nav_Footer_4_Link1;
var nav_Footer_4_Link2 = new Object();
nav_Footer_4_Link2.type = "existing";
nav_Footer_4_Link2.displayName = "Evaluating Credentials";
nav_Footer_4_Link2.linkWindow = "_self";
nav_Footer_4_Link2.linkValue = "evaluating-land-surveyor-credentials.html";
nav_Footer_4_Link2.linkIndex = "2";
nav_Footer_4.links[1] = nav_Footer_4_Link2;
var nav_Footer_4_Link3 = new Object();
nav_Footer_4_Link3.type = "existing";
nav_Footer_4_Link3.displayName = "Gauging Experience";
nav_Footer_4_Link3.linkWindow = "_self";
nav_Footer_4_Link3.linkValue = "gauging-land-surveyor-experience.html";
nav_Footer_4_Link3.linkIndex = "3";
nav_Footer_4.links[2] = nav_Footer_4_Link3;
var nav_Footer_4_Link4 = new Object();
nav_Footer_4_Link4.type = "existing";
nav_Footer_4_Link4.displayName = "Weigh Quality  vs. Cost";
nav_Footer_4_Link4.linkWindow = "_self";
nav_Footer_4_Link4.linkValue = "weighing-the-cost-of-a-land-survey.html";
nav_Footer_4_Link4.linkIndex = "4";
nav_Footer_4.links[3] = nav_Footer_4_Link4;
var nav_Footer_4_Link5 = new Object();
nav_Footer_4_Link5.type = "existing";
nav_Footer_4_Link5.displayName = "Survey Tales of Caution";
nav_Footer_4_Link5.linkWindow = "_self";
nav_Footer_4_Link5.linkValue = "survey-tales-of-caution.html";
nav_Footer_4_Link5.linkIndex = "5";
nav_Footer_4.links[4] = nav_Footer_4_Link5;
function backgroundMouseOn(tdElement, newColor)
{
	if(tdElement != null) {
		tdElement.oldBGColor = tdElement.style.backgroundColor;
		tdElement.style.backgroundColor = newColor;
	}
}
function backgroundMouseOff(tdElement)
{
	if(tdElement != null) {
		tdElement.style.backgroundColor = tdElement.oldBGColor;
	}
} 

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}	
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	var bShowMouseoverBg = !(bIsCurrentPage
			&& 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var fontElement = getLinkFontElement(tdElement);
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.mouseoverBgcolor && bShowMouseoverBg) {
		if(bisMouseOver) {
			backgroundMouseOn(tdElement,Navigation.mouseoverBgcolor);
		} else {
			backgroundMouseOff(tdElement);
		}
	}
}
function addStyle(Navigation, Link, tdElement,vNavTrElement) {
	if (tdElement == null) {
		return;
	}
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
		if (Navigation.selectedBgcolor) {
			if (Navigation.orientation == 'horizontal') {
				tdElement.style.backgroundColor = Navigation.selectedBgcolor;
			} else {
				if (vNavTrElement != null) {
					vNavTrElement.style.backgroundColor = Navigation.selectedBgcolor;
				}
			}
		}
	}
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
	}
	tdElement.style.color = strFontColor;
	if ('true' == Navigation.selectedEffect) {
		if ('true' == Navigation.selectedBold) {
			tdElement.style.fontWeight = "bold";
		}
		if ('true' == Navigation.selectedItalic) {
			tdElement.style.fontStyle = "italic";
		}
		if ('true' == Navigation.selectedUnderline) {
			tdElement.style.textDecoration = "underline";
		}
	}
}

// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}

function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportFooter_4(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_Footer_41\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_4_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_4,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Footer_4,this,\'1\',false);\"><A HREF=\"\/land-survey-myths-debunked.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Survey Myths, Debunked\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_4_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Survey&nbsp;Myths,&nbsp;Debunked<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_42\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_4_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_4,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Footer_4,this,\'2\',false);\"><A HREF=\"\/evaluating-land-surveyor-credentials.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Evaluating Credentials\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_4_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Evaluating&nbsp;Credentials<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_43\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_4_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_4,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Footer_4,this,\'3\',false);\"><A HREF=\"\/gauging-land-surveyor-experience.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Gauging Experience\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_4_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Gauging&nbsp;Experience<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_44\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_4_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_4,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Footer_4,this,\'4\',false);\"><A HREF=\"\/weighing-the-cost-of-a-land-survey.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Weigh Quality  vs. Cost\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_4_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Weigh&nbsp;Quality&nbsp;&nbsp;vs.&nbsp;Cost<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_45\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_4_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_4,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Footer_4,this,\'5\',false);\"><A HREF=\"\/survey-tales-of-caution.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Survey Tales of Caution\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_4_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Survey&nbsp;Tales&nbsp;of&nbsp;Caution<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportFooter_4(nav_Footer_4,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

