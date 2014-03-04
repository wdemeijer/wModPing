$(function () {
	function addLivePingButton() {
			$('#chat').append("<div id='modpingbutton' class='div_options_item  modpingbutton'> <a href='#'>Ping Mods</a></div>");
		}
		
	function bindLivePingButton() {
		$('#modpingbutton').click(function(){
			pingMods();
		});
	}
	function addNewPingButton() {
			$('#chat-bar').append("<div id='modpingbutton' class='div_options_item  modpingbutton'> <a href='#'>Ping Mods</a></div>");
		}
		
	function bindNewPingButton() {
		$('#modpingbutton').click(function(){
			pingMods();
		});
	}
	var namespacelog = locNamespace;
	if(locNamespace === 'new_game') {
		
		addNewPingButton();
		bindNewPingButton();
	}
	else {
		
		addLivePingButton();
		bindLivePingButton();
	}
	
	
});