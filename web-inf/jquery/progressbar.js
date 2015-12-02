$(document).ready(function(){
	var currentWidth;
	var completeProgress=100;
	var setZero=0;
	var mrg=175;

	$('.button').click(function() {
		if($(this).val() == "+25"){
			progressFunction($(this).val());
		}else if($(this).val() == "+10"){
			progressFunction($(this).val());
		}else if($(this).val() == "-25"){
			progressFunction($(this).val());
		}else{
			progressFunction("-10");
		}
	});
			
	function progressFunction($param) {
		var selectedProgressBar = $(".progressBarControl option:selected").val();
		var progressWidth = ( 100 * parseFloat($('.progress-bar-label').css('width')) / parseFloat($(	 	
							'.progress-bar-label').parent().css('width')));
		var progress1Width = ( 100 * parseFloat($('.progress-bar-label1').css('width')) / parseFloat($(	 		 	
							'.progress-bar-label1').parent().css('width')));
		var progress2Width = ( 100 * parseFloat($('.progress-bar-label2').css('width')) / parseFloat($(	 	
							'.progress-bar-label2').parent().css('width')));
				
		if(selectedProgressBar == "Progress1"){
			currentWidth = progressWidth;
			currentWidth += $param/10;
			updateProgressBar('.progress-bar-label','.pg1',currentWidth,progressWidth);
		}else if(selectedProgressBar == "Progress2"){
			currentWidth = progress1Width;
			currentWidth += $param/10;
			updateProgressBar('.progress-bar-label1','.pg2',currentWidth,progress1Width);
		}else{
			currentWidth = progress2Width;
			currentWidth += $param/10;
			updateProgressBar('.progress-bar-label2','.pg3',currentWidth,progress2Width);
		}
	}
			
	function updateProgressBar(innerdivProgressBar,divSpan,currentValue,Previousvalue){
		if(currentValue<0){
			$(innerdivProgressBar).css("width", setZero + "%");
			$(divSpan).text(setZero + '%');
		}else if(currentWidth<=100){
			$(innerdivProgressBar).css("width", currentValue + "%");
			$(divSpan).text(currentValue*10 + '%');
			changeColor(innerdivProgressBar,currentValue);
		}else if(Previousvalue<100){
			$(innerdivProgressBar).css("width", completeProgress + "%");
			$(divSpan).text(completeProgress*10 + '%');
			changeColor(innerdivProgressBar,currentValue);
		}
	}
	
	function changeColor(innerdivProgressBar,currentValue){
		if(currentValue >= 100){
			$(innerdivProgressBar).css("background", "red");
		}else{
			$(innerdivProgressBar).css("background", "cornflowerblue");
		}
	}
});
