

function genScreenshot() {
	

	html2canvas(document.body, {

		onrendered: function(cnv) {


			if (navigator.userAgent.indexOf("MSIE ") > 0 || 
				navigator.userAgent.match(/Trident.*rv\:11\./)) 
			{

				var blob = cnv.msToBlob();
				window.navigator.msSaveBlob(blob,'Test file.jpg');
			}
			else {
				$('#test').attr('href', canvas.toDataURL("image/jpg"));
				$('#test').attr('download','shirt_design.png');
				$('#test')[0].click();
			}


		}
	});
}