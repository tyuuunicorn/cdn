


const scriptsInEvents = {

	async Emenu_Event124_Act1(runtime, localVars)
	{
		runtime.globalVars.EnvironmentURL = getWebsite_URL();
	},

	async Yandex_Event1_Act1(runtime, localVars)
	{
		window.ysdk.adv.showFullscreenAdv({
				callbacks:{
					onOpen: () => {
						console.log("Ad Started!");
						runtime.callFunction("adStarted");
					},
						onClose: function(wasShown){
						runtime.callFunction("onClose");
					},
						onError: function(error){
						runtime.callFunction("onError");
					}
			  }
		})
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

