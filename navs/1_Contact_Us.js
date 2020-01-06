var nav_1_Contact_Us = new Object();

nav_1_Contact_Us.mouseoverBold="true";
nav_1_Contact_Us.selectedBgcolor="";
nav_1_Contact_Us.importedImageMouseOver="";
nav_1_Contact_Us.numLinks="2";
nav_1_Contact_Us.textColor="#000000";
nav_1_Contact_Us.mouseoverBgcolor="";
nav_1_Contact_Us.tabCategory="basic";
nav_1_Contact_Us.border="";
nav_1_Contact_Us.selectedItalic="false";
nav_1_Contact_Us.graphicMouseover="true";
nav_1_Contact_Us.type="Navigation";
nav_1_Contact_Us.basicTab="White";
nav_1_Contact_Us.horizontalSpacing="10";
nav_1_Contact_Us.horizontalWrap="5";
nav_1_Contact_Us.shinyButton="Shiny_Aqua";
nav_1_Contact_Us.mouseoverEffect="true";
nav_1_Contact_Us.modernButton="Basic_Black";
nav_1_Contact_Us.orientation="vertical";
nav_1_Contact_Us.funButton="Arts_and_Crafts";
nav_1_Contact_Us.darkButton="Basic_Black";
nav_1_Contact_Us.selectedTextcolor="#1310CC";
nav_1_Contact_Us.lineWidth="1";
nav_1_Contact_Us.mouseoverTextcolor="#1310CC";
nav_1_Contact_Us.bold="false";
nav_1_Contact_Us.texturedButton="Brick";
nav_1_Contact_Us.accentStyle="Arrow";
nav_1_Contact_Us.style="text";
nav_1_Contact_Us.holidayButton="Christmas_Ornaments";
nav_1_Contact_Us.textSize="9";
nav_1_Contact_Us.lineColor="#EDEBE8";
nav_1_Contact_Us.brightButton="Chicky";
nav_1_Contact_Us.mouseoverUnderline="false";
nav_1_Contact_Us.accentColor="Black";
nav_1_Contact_Us.imageHeight="";
nav_1_Contact_Us.background="";
nav_1_Contact_Us.textFont="Helvetica";
nav_1_Contact_Us.hasLinks="true";
nav_1_Contact_Us.sophisticatedButton="Antique";
nav_1_Contact_Us.underline="false";
nav_1_Contact_Us.simpleButton="Autumn_Leaves";
nav_1_Contact_Us.italic="false";
nav_1_Contact_Us.importedImageSelected="";
nav_1_Contact_Us.basicButton="Gray";
nav_1_Contact_Us.navID="nav_1_Contact_Us";
nav_1_Contact_Us.buttonCategory="basic";
nav_1_Contact_Us.dirty="false";
nav_1_Contact_Us.selectedBold="true";
nav_1_Contact_Us.selectedEffect="true";
nav_1_Contact_Us.graphicSelected="true";
nav_1_Contact_Us.version="5";
nav_1_Contact_Us.verticalSpacing="5";
nav_1_Contact_Us.squareTab="Camel";
nav_1_Contact_Us.mouseoverItalic="false";
nav_1_Contact_Us.justification="left";
nav_1_Contact_Us.imageWidth="";
nav_1_Contact_Us.selectedUnderline="false";
nav_1_Contact_Us.accentType="lines";
nav_1_Contact_Us.importedImage="";
nav_1_Contact_Us.width="136";
nav_1_Contact_Us.height="41";

nav_1_Contact_Us.navName = "1_Contact_Us";
nav_1_Contact_Us.imagePath = "null";
nav_1_Contact_Us.selectedImagePath = "/media/elements/LayoutClipart/";
nav_1_Contact_Us.mouseOverImagePath = "/media/elements/LayoutClipart/";
nav_1_Contact_Us.imageWidth = "16";
nav_1_Contact_Us.imageHeight = "16";
nav_1_Contact_Us.fontClass = "size9 Helvetica9";
nav_1_Contact_Us.fontFace = "Helvetica, Arial, sans-serif";


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


nav_1_Contact_Us.links=new Array(2);
var nav_1_Contact_Us_Link1 = new Object();
nav_1_Contact_Us_Link1.type = "existing";
nav_1_Contact_Us_Link1.displayName = "Ask the land surveyor";
nav_1_Contact_Us_Link1.linkWindow = "_self";
nav_1_Contact_Us_Link1.linkValue = "contact-us---ask-the-land-surveyor.html";
nav_1_Contact_Us_Link1.linkIndex = "1";
nav_1_Contact_Us.links[0] = nav_1_Contact_Us_Link1;
var nav_1_Contact_Us_Link2 = new Object();
nav_1_Contact_Us_Link2.type = "existing";
nav_1_Contact_Us_Link2.displayName = "\"Field Notes\" - a blog";
nav_1_Contact_Us_Link2.linkWindow = "_self";
nav_1_Contact_Us_Link2.linkValue = "blog-of-a-california-land-surveyor.html";
nav_1_Contact_Us_Link2.linkIndex = "2";
nav_1_Contact_Us.links[1] = nav_1_Contact_Us_Link2;
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

function addMouseAndStyleSupport1_Contact_Us(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_1_Contact_Us1\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"1_Contact_Us_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_1_Contact_Us,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_1_Contact_Us,this,\'1\',false);\"><A HREF=\"\/contact-us---ask-the-land-surveyor.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Ask the land surveyor\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"1_Contact_Us_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Ask&nbsp;the&nbsp;land&nbsp;surveyor<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_1_Contact_Us2\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"1_Contact_Us_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_1_Contact_Us,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_1_Contact_Us,this,\'2\',false);\"><A HREF=\"\/blog-of-a-california-land-surveyor.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"\"Field Notes\" - a blog\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"1_Contact_Us_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">&quot;Field&nbsp;Notes&quot;&nbsp;-&nbsp;a&nbsp;blog<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupport1_Contact_Us(nav_1_Contact_Us,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

