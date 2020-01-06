var nav_Home = new Object();

nav_Home.mouseoverBold="true";
nav_Home.selectedBgcolor="";
nav_Home.importedImageMouseOver="";
nav_Home.numLinks="2";
nav_Home.textColor="#000000";
nav_Home.mouseoverBgcolor="";
nav_Home.tabCategory="basic";
nav_Home.border="";
nav_Home.selectedItalic="false";
nav_Home.graphicMouseover="true";
nav_Home.type="Navigation";
nav_Home.basicTab="White";
nav_Home.horizontalSpacing="10";
nav_Home.horizontalWrap="5";
nav_Home.shinyButton="Shiny_Aqua";
nav_Home.mouseoverEffect="true";
nav_Home.modernButton="Basic_Black";
nav_Home.orientation="vertical";
nav_Home.funButton="Arts_and_Crafts";
nav_Home.darkButton="Basic_Black";
nav_Home.selectedTextcolor="#1310CC";
nav_Home.lineWidth="1";
nav_Home.mouseoverTextcolor="#1310CC";
nav_Home.bold="false";
nav_Home.texturedButton="Brick";
nav_Home.accentStyle="Arrow";
nav_Home.style="text";
nav_Home.holidayButton="Christmas_Ornaments";
nav_Home.textSize="9";
nav_Home.lineColor="#EDEBE8";
nav_Home.brightButton="Chicky";
nav_Home.mouseoverUnderline="false";
nav_Home.accentColor="Forest_Green";
nav_Home.imageHeight="";
nav_Home.background="";
nav_Home.textFont="Helvetica";
nav_Home.hasLinks="true";
nav_Home.sophisticatedButton="Antique";
nav_Home.underline="false";
nav_Home.simpleButton="Autumn_Leaves";
nav_Home.italic="false";
nav_Home.importedImageSelected="";
nav_Home.basicButton="Gray";
nav_Home.navID="nav_Home";
nav_Home.buttonCategory="basic";
nav_Home.dirty="false";
nav_Home.selectedBold="true";
nav_Home.selectedEffect="true";
nav_Home.graphicSelected="true";
nav_Home.version="5";
nav_Home.verticalSpacing="5";
nav_Home.squareTab="Camel";
nav_Home.mouseoverItalic="false";
nav_Home.justification="left";
nav_Home.imageWidth="";
nav_Home.selectedUnderline="false";
nav_Home.accentType="lines";
nav_Home.importedImage="";
nav_Home.width="127";
nav_Home.height="41";

nav_Home.navName = "Home";
nav_Home.imagePath = "null";
nav_Home.selectedImagePath = "/media/elements/LayoutClipart/";
nav_Home.mouseOverImagePath = "/media/elements/LayoutClipart/";
nav_Home.imageWidth = "16";
nav_Home.imageHeight = "16";
nav_Home.fontClass = "size9 Helvetica9";
nav_Home.fontFace = "Helvetica, Arial, sans-serif";


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


nav_Home.links=new Array(2);
var nav_Home_Link1 = new Object();
nav_Home_Link1.type = "existing";
nav_Home_Link1.displayName = "Home  ";
nav_Home_Link1.linkWindow = "_self";
nav_Home_Link1.linkValue = "index.html";
nav_Home_Link1.linkIndex = "1";
nav_Home.links[0] = nav_Home_Link1;
var nav_Home_Link2 = new Object();
nav_Home_Link2.type = "existing";
nav_Home_Link2.displayName = "Our firm at a glance";
nav_Home_Link2.linkWindow = "_self";
nav_Home_Link2.linkValue = "our-firm-at-a-glance.html";
nav_Home_Link2.linkIndex = "2";
nav_Home.links[1] = nav_Home_Link2;
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

function addMouseAndStyleSupportHome(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_Home1\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Home_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Home,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Home,this,\'1\',false);\"><A HREF=\"\/index.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Home  \"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Home_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Home&nbsp;&nbsp;<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_Home2\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Home_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Home,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Home,this,\'2\',false);\"><A HREF=\"\/our-firm-at-a-glance.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Our firm at a glance\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Home_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Our&nbsp;firm&nbsp;at&nbsp;a&nbsp;glance<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportHome(nav_Home,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

