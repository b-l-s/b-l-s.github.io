var nav_Footer_5 = new Object();

nav_Footer_5.mouseoverBold="true";
nav_Footer_5.selectedBgcolor="";
nav_Footer_5.importedImageMouseOver="";
nav_Footer_5.numLinks="3";
nav_Footer_5.textColor="#000000";
nav_Footer_5.mouseoverBgcolor="";
nav_Footer_5.tabCategory="basic";
nav_Footer_5.border="";
nav_Footer_5.selectedItalic="false";
nav_Footer_5.graphicMouseover="true";
nav_Footer_5.type="Navigation";
nav_Footer_5.basicTab="White";
nav_Footer_5.horizontalSpacing="10";
nav_Footer_5.horizontalWrap="5";
nav_Footer_5.shinyButton="Shiny_Aqua";
nav_Footer_5.mouseoverEffect="true";
nav_Footer_5.modernButton="Basic_Black";
nav_Footer_5.orientation="vertical";
nav_Footer_5.funButton="Arts_and_Crafts";
nav_Footer_5.darkButton="Basic_Black";
nav_Footer_5.selectedTextcolor="#1310CC";
nav_Footer_5.lineWidth="1";
nav_Footer_5.mouseoverTextcolor="#1310CC";
nav_Footer_5.bold="false";
nav_Footer_5.texturedButton="Brick";
nav_Footer_5.accentStyle="Arrow";
nav_Footer_5.style="text";
nav_Footer_5.holidayButton="Christmas_Ornaments";
nav_Footer_5.textSize="8";
nav_Footer_5.lineColor="#EDEBE8";
nav_Footer_5.brightButton="Chicky";
nav_Footer_5.mouseoverUnderline="false";
nav_Footer_5.accentColor="Black";
nav_Footer_5.imageHeight="";
nav_Footer_5.background="";
nav_Footer_5.textFont="Helvetica";
nav_Footer_5.hasLinks="true";
nav_Footer_5.sophisticatedButton="Antique";
nav_Footer_5.underline="false";
nav_Footer_5.simpleButton="Autumn_Leaves";
nav_Footer_5.italic="false";
nav_Footer_5.importedImageSelected="";
nav_Footer_5.basicButton="Gray";
nav_Footer_5.navID="nav_Footer_5";
nav_Footer_5.buttonCategory="basic";
nav_Footer_5.dirty="false";
nav_Footer_5.selectedBold="true";
nav_Footer_5.selectedEffect="true";
nav_Footer_5.graphicSelected="true";
nav_Footer_5.version="5";
nav_Footer_5.verticalSpacing="10";
nav_Footer_5.squareTab="Camel";
nav_Footer_5.mouseoverItalic="false";
nav_Footer_5.justification="left";
nav_Footer_5.imageWidth="";
nav_Footer_5.selectedUnderline="false";
nav_Footer_5.accentType="lines";
nav_Footer_5.importedImage="";
nav_Footer_5.width="136";
nav_Footer_5.height="71";

nav_Footer_5.navName = "Footer_5";
nav_Footer_5.imagePath = "null";
nav_Footer_5.selectedImagePath = "/media/elements/LayoutClipart/";
nav_Footer_5.mouseOverImagePath = "/media/elements/LayoutClipart/";
nav_Footer_5.imageWidth = "16";
nav_Footer_5.imageHeight = "16";
nav_Footer_5.fontClass = "size8 Helvetica8";
nav_Footer_5.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Footer_5.links=new Array(3);
var nav_Footer_5_Link1 = new Object();
nav_Footer_5_Link1.type = "existing";
nav_Footer_5_Link1.displayName = "What Sets Bell Apart";
nav_Footer_5_Link1.linkWindow = "_self";
nav_Footer_5_Link1.linkValue = "what-sets-bell-land-surveying-apart.html";
nav_Footer_5_Link1.linkIndex = "1";
nav_Footer_5.links[0] = nav_Footer_5_Link1;
var nav_Footer_5_Link2 = new Object();
nav_Footer_5_Link2.type = "existing";
nav_Footer_5_Link2.displayName = "Our Commitment To You";
nav_Footer_5_Link2.linkWindow = "_self";
nav_Footer_5_Link2.linkValue = "our-commitment-to-you.html";
nav_Footer_5_Link2.linkIndex = "2";
nav_Footer_5.links[1] = nav_Footer_5_Link2;
var nav_Footer_5_Link3 = new Object();
nav_Footer_5_Link3.type = "existing";
nav_Footer_5_Link3.displayName = "Your Survey Investment";
nav_Footer_5_Link3.linkWindow = "_self";
nav_Footer_5_Link3.linkValue = "your-land-survey-investment.html";
nav_Footer_5_Link3.linkIndex = "3";
nav_Footer_5.links[2] = nav_Footer_5_Link3;
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

function addMouseAndStyleSupportFooter_5(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_Footer_51\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_5_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_5,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Footer_5,this,\'1\',false);\"><A HREF=\"\/what-sets-bell-land-surveying-apart.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"What Sets Bell Apart\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_5_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">What&nbsp;Sets&nbsp;Bell&nbsp;Apart<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_52\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_5_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_5,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Footer_5,this,\'2\',false);\"><A HREF=\"\/our-commitment-to-you.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Our Commitment To You\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_5_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Our&nbsp;Commitment&nbsp;To&nbsp;You<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Footer_53\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_5_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer_5,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Footer_5,this,\'3\',false);\"><A HREF=\"\/your-land-survey-investment.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Your Survey Investment\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_5_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size8 Helvetica8\" STYLE=\"color:#000000\">Your&nbsp;Survey&nbsp;Investment<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportFooter_5(nav_Footer_5,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

