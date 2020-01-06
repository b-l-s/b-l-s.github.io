var nav_2_About_Us = new Object();

nav_2_About_Us.mouseoverBold="true";
nav_2_About_Us.selectedBgcolor="";
nav_2_About_Us.importedImageMouseOver="";
nav_2_About_Us.numLinks="5";
nav_2_About_Us.textColor="#000000";
nav_2_About_Us.mouseoverBgcolor="";
nav_2_About_Us.tabCategory="basic";
nav_2_About_Us.border="";
nav_2_About_Us.selectedItalic="false";
nav_2_About_Us.graphicMouseover="true";
nav_2_About_Us.type="Navigation";
nav_2_About_Us.basicTab="White";
nav_2_About_Us.horizontalSpacing="10";
nav_2_About_Us.horizontalWrap="5";
nav_2_About_Us.shinyButton="Shiny_Aqua";
nav_2_About_Us.mouseoverEffect="true";
nav_2_About_Us.modernButton="Basic_Black";
nav_2_About_Us.orientation="vertical";
nav_2_About_Us.funButton="Arts_and_Crafts";
nav_2_About_Us.darkButton="Basic_Black";
nav_2_About_Us.selectedTextcolor="#1310CC";
nav_2_About_Us.lineWidth="1";
nav_2_About_Us.mouseoverTextcolor="#1310CC";
nav_2_About_Us.bold="false";
nav_2_About_Us.texturedButton="Brick";
nav_2_About_Us.accentStyle="Arrow";
nav_2_About_Us.style="text";
nav_2_About_Us.holidayButton="Christmas_Ornaments";
nav_2_About_Us.textSize="9";
nav_2_About_Us.lineColor="#EDEBE8";
nav_2_About_Us.brightButton="Chicky";
nav_2_About_Us.mouseoverUnderline="false";
nav_2_About_Us.accentColor="Black";
nav_2_About_Us.imageHeight="";
nav_2_About_Us.background="";
nav_2_About_Us.textFont="Helvetica";
nav_2_About_Us.hasLinks="true";
nav_2_About_Us.sophisticatedButton="Antique";
nav_2_About_Us.underline="false";
nav_2_About_Us.simpleButton="Autumn_Leaves";
nav_2_About_Us.italic="false";
nav_2_About_Us.importedImageSelected="";
nav_2_About_Us.basicButton="Gray";
nav_2_About_Us.navID="nav_2_About_Us";
nav_2_About_Us.buttonCategory="basic";
nav_2_About_Us.dirty="false";
nav_2_About_Us.selectedBold="true";
nav_2_About_Us.selectedEffect="true";
nav_2_About_Us.graphicSelected="true";
nav_2_About_Us.version="5";
nav_2_About_Us.verticalSpacing="5";
nav_2_About_Us.squareTab="Camel";
nav_2_About_Us.mouseoverItalic="false";
nav_2_About_Us.justification="left";
nav_2_About_Us.imageWidth="";
nav_2_About_Us.selectedUnderline="false";
nav_2_About_Us.accentType="lines";
nav_2_About_Us.importedImage="";
nav_2_About_Us.width="149";
nav_2_About_Us.height="104";

nav_2_About_Us.navName = "2_About_Us";
nav_2_About_Us.imagePath = "null";
nav_2_About_Us.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_2_About_Us.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_2_About_Us.imageWidth = "16";
nav_2_About_Us.imageHeight = "16";
nav_2_About_Us.fontClass = "size9 Helvetica9";
nav_2_About_Us.fontFace = "Helvetica, Arial, sans-serif";


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


nav_2_About_Us.links=new Array(5);
var nav_2_About_Us_Link1 = new Object();
nav_2_About_Us_Link1.type = "existing";
nav_2_About_Us_Link1.displayName = "A note from Doug Bell";
nav_2_About_Us_Link1.linkWindow = "_self";
nav_2_About_Us_Link1.linkValue = "a-note-from-doug-bell-land-surveyor.html";
nav_2_About_Us_Link1.linkIndex = "1";
nav_2_About_Us.links[0] = nav_2_About_Us_Link1;
var nav_2_About_Us_Link2 = new Object();
nav_2_About_Us_Link2.type = "existing";
nav_2_About_Us_Link2.displayName = "Services we provide";
nav_2_About_Us_Link2.linkWindow = "_self";
nav_2_About_Us_Link2.linkValue = "land-survey-services-in-southern-california.html";
nav_2_About_Us_Link2.linkIndex = "2";
nav_2_About_Us.links[1] = nav_2_About_Us_Link2;
var nav_2_About_Us_Link3 = new Object();
nav_2_About_Us_Link3.type = "existing";
nav_2_About_Us_Link3.displayName = "Public agency expertise";
nav_2_About_Us_Link3.linkWindow = "_self";
nav_2_About_Us_Link3.linkValue = "public-agency-land-surveyor.html";
nav_2_About_Us_Link3.linkIndex = "3";
nav_2_About_Us.links[2] = nav_2_About_Us_Link3;
var nav_2_About_Us_Link4 = new Object();
nav_2_About_Us_Link4.type = "existing";
nav_2_About_Us_Link4.displayName = "Our service area";
nav_2_About_Us_Link4.linkWindow = "_self";
nav_2_About_Us_Link4.linkValue = "our-southern-california-service-area.html";
nav_2_About_Us_Link4.linkIndex = "4";
nav_2_About_Us.links[3] = nav_2_About_Us_Link4;
var nav_2_About_Us_Link5 = new Object();
nav_2_About_Us_Link5.type = "existing";
nav_2_About_Us_Link5.displayName = "Meet Douglas Bell, PLS";
nav_2_About_Us_Link5.linkWindow = "_self";
nav_2_About_Us_Link5.linkValue = "meet-douglas-bell-california-land-surveyor.html";
nav_2_About_Us_Link5.linkIndex = "5";
nav_2_About_Us.links[4] = nav_2_About_Us_Link5;
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

function addMouseAndStyleSupport2_About_Us(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_2_About_Us1\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"2_About_Us_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_2_About_Us,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_2_About_Us,this,\'1\',false);\"><A HREF=\"\/a-note-from-doug-bell-land-surveyor.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"A note from Doug Bell\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"2_About_Us_f1\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">A&nbsp;note&nbsp;from&nbsp;Doug&nbsp;Bell<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_2_About_Us2\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"2_About_Us_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_2_About_Us,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_2_About_Us,this,\'2\',false);\"><A HREF=\"\/land-survey-services-in-southern-california.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Services we provide\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"2_About_Us_f2\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Services&nbsp;we&nbsp;provide<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_2_About_Us3\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"2_About_Us_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_2_About_Us,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_2_About_Us,this,\'3\',false);\"><A HREF=\"\/public-agency-land-surveyor.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Public agency expertise\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"2_About_Us_f3\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Public&nbsp;agency&nbsp;expertise<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_2_About_Us4\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"2_About_Us_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_2_About_Us,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_2_About_Us,this,\'4\',false);\"><A HREF=\"\/our-southern-california-service-area.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Our service area\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"2_About_Us_f4\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Our&nbsp;service&nbsp;area<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR><TD HEIGHT=\"1\" BGCOLOR=\"#EDEBE8\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"1\"><\/TD><\/TR><TR id=\"vNavTR_Link_2_About_Us5\"><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"2_About_Us_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_2_About_Us,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_2_About_Us,this,\'5\',false);\"><A HREF=\"\/meet-douglas-bell-california-land-surveyor.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Meet Douglas Bell, PLS\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"2.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"2_About_Us_f5\" FACE=\"Helvetica, Arial, sans-serif\" CLASS=\"size9 Helvetica9\" STYLE=\"color:#000000\">Meet&nbsp;Douglas&nbsp;Bell,&nbsp;PLS<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"3.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupport2_About_Us(nav_2_About_Us,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

