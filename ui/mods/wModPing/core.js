function getModData(src) {
	console.log(src, "loading json");
	var o = new XMLHttpRequest();
	try
	{
		o.open('GET', src, false);
		o.send('');
	}
	catch( err )
	{
		console.log("error loading " + src)
		return;
	}
	var jsonData = decode(o.responseText);
	var arrayData = [];
	
	for (var id in jsonData) {
		if (jsonData[id].enabled === true && id != "rPAMM") {
			arrayData.push(jsonData[id]);
			arrayData[arrayData.length - 1].author = arrayData[arrayData.length - 1].author ? arrayData[arrayData.length - 1].author : "";
			arrayData[arrayData.length - 1].build = arrayData[arrayData.length - 1].build ? arrayData[arrayData.length - 1].build : "";
			arrayData[arrayData.length - 1].display_name = arrayData[arrayData.length - 1].display_name ? arrayData[arrayData.length - 1].display_name : "";
			arrayData[arrayData.length - 1].version = arrayData[arrayData.length - 1].version ? arrayData[arrayData.length - 1].version : "";
		}
	}
	return arrayData;
}

function submitTextToChat(string) {
	$('.input_chat_text').val(string);
	$('.chat_input_form').submit();
	$('#send-chat').submit();
}

function pingMods() {
	var modsData = getModData("coui://ui/mods/mods_list.json");
	var modsNameArray = new Array();
	submitTextToChat("MOD PING");
	submitTextToChat("I am using the following mods:");
	submitTextToChat("=============");
	
	for (var i = 0; i < modsData.length; i++) {
		submitTextToChat(modsData[i].display_name);
	}
	
	submitTextToChat("=============");
	submitTextToChat("--> Found at http://forums.uberent.com");
	submitTextToChat("END MOD PING");
	
}

