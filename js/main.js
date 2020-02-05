 $(document).ready(function() {

	$.ajax({
		url : "http://localhost:8080/feedbackDashboard/graphdata.php",
		type : "GET",
		success : function(data){
            data  = JSON.parse(data);
            
			console.log(data);

			var sentiment=[];
            var addedDate=[];

			var len = data.length;

			for (var i = 0; i < len; i++) {
				
					sentiment.push(data[i].d1);
                
					addedDate.push( data[i].ts);
                
               

			}
            
//             console.log(sentiment[1]);
			//get canvas
			var ctx = $("#line-chartcanvas");

			var data1 = {
				labels : addedDate,
	             	datasets : [
					{
						label : "Cyst",
						data : sentiment,
						backgroundColor : "#7D3C98 ",
						borderColor : "#7D3C98  ",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					}
				
				]
			};

			var options = {
				title : {
					display : true,
					position : "top",
					text : "Sentiment Over Time",
					fontSize : 18,
					fontColor : "#111"
				},
                maintainAspectRatio: false,
            
			
			};

			var chart = new Chart( ctx, {
				type : "line",
				data : data1,
				options : options
			} );

		},
		error : function(data) {
			console.log(data);
		}
	});
     



});

