window.onload = function() {
  
  $('#isSignUp').click(function(){

    $.ajax({
      async: true,
      url: 'https://www.thef2e.com/api/isSignUp',
      type: 'POST',
      dataType: "json",
      data: {
        email: $('#email').val()
      },
      success: function(result){
        if (result.success == true){
          var certificateSite = document.createElement('a');
          certificateSite.href = result.Certificate;
          certificateSite.text = 'This is your certificate';
          $('#result').html('Hi! ' + result.nickName + ' ' + result.message + '</br>');
          $('#result').append(certificateSite);
        } else {
          $('#result').html(result.message);
        }
        
      },
      error: function(reject) {
        $('#result').html(reject.message);
      }
    })

  })

  $('#stageCheck').click(function(){

    $.ajax({
      async: true,
      url: 'https://www.thef2e.com/api/stageCheck',
      type: 'POST',
      dataType: "json",
      data: {
        email: $('#email').val()
      },
      success: function(result){
        
        for (var i = 0; i < result.length; i++) {

          var source   = document.getElementById("entry-template").innerHTML;
	    		var template = Handlebars.compile(source);

          var context = {
            stage:result[i].stage,
            tag:result[i].tag,
            link:result[i].url
          };

          var oTask = template(context);

          $('#works').append(oTask);
        
        }
        
      },
      error: function(reject) {
        $('#works').html(reject.message);
      }
    })

  })
  
  
}